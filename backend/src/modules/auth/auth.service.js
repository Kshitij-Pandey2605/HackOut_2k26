import bcrypt from 'bcryptjs';
import { OAuth2Client } from 'google-auth-library';
import { supabaseAdmin } from '../../config/supabase.js';
import { env } from '../../config/env.js';
import {
  generateJwtToken,
  generateRandomToken,
  hashToken
} from '../../utils/generateToken.js';
import {
  sendVerificationEmail,
  sendPasswordResetEmail
} from '../../utils/sendEmail.js';
import { ApiError } from '../../utils/apiError.js';
import { HTTP_STATUS } from '../../constants/index.js';
import { logger } from '../../utils/logger.js';

const googleClient = new OAuth2Client(env.GOOGLE.CLIENT_ID);

/**
 * Remove sensitive credentials from user record
 */
const sanitizeUser = (user) => {
  const {
    password_hash,
    verification_token,
    verification_expires,
    reset_password_token,
    reset_password_expires,
    ...sanitized
  } = user;
  return sanitized;
};

class AuthService {
  /**
   * 1. Register a new user with Email and Password
   */
  async signup({ full_name, email, password, role = 'buyer' }) {
    const normalizedEmail = email.toLowerCase().trim();

    // Check for existing user
    const { data: existingUser, error: findError } = await supabaseAdmin
      .from('users')
      .select('id, email')
      .eq('email', normalizedEmail)
      .maybeSingle();

    if (findError) {
      logger.error('Error querying user during signup:', findError);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Database query failed during signup');
    }

    if (existingUser) {
      throw new ApiError(HTTP_STATUS.CONFLICT, 'An account with this email address already exists.');
    }

    // Hash password securely
    const salt = await bcrypt.genSalt(12);
    const passwordHash = await bcrypt.hash(password, salt);

    // Generate email verification token (24-hour validity)
    const rawVerificationToken = generateRandomToken();
    const hashedVerificationToken = hashToken(rawVerificationToken);
    const verificationExpires = new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString();

    // Insert user into Supabase
    const { data: newUser, error: insertError } = await supabaseAdmin
      .from('users')
      .insert([
        {
          full_name: full_name.trim(),
          email: normalizedEmail,
          password_hash: passwordHash,
          role,
          provider: 'email',
          avatar_url: null,
          is_verified: false,
          verification_token: hashedVerificationToken,
          verification_expires: verificationExpires
        }
      ])
      .select('id, full_name, email, role, provider, avatar_url, is_verified, created_at, updated_at')
      .single();

    if (insertError || !newUser) {
      logger.error('Failed to insert user record:', insertError);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to create user account.');
    }

    // Dispatch verification email asynchronously
    sendVerificationEmail({
      to: newUser.email,
      name: newUser.full_name,
      verificationToken: rawVerificationToken
    }).catch((err) => logger.error('Verification email dispatch failed:', err));

    // Generate JWT token
    const token = generateJwtToken(newUser);

    return {
      user: sanitizeUser(newUser),
      token
    };
  }

  /**
   * 2. Authenticate user with Email and Password
   */
  async login({ email, password }) {
    const normalizedEmail = email.toLowerCase().trim();

    // Retrieve user including password_hash
    const { data: user, error: findError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('email', normalizedEmail)
      .maybeSingle();

    if (findError || !user) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid email or password.');
    }

    if (user.provider === 'google' && !user.password_hash) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'This account is registered via Google Sign-In. Please authenticate with Google.'
      );
    }

    // Compare bcrypt hash
    const isPasswordValid = await bcrypt.compare(password, user.password_hash);
    if (!isPasswordValid) {
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid email or password.');
    }

    // Generate JWT
    const token = generateJwtToken(user);

    return {
      user: sanitizeUser(user),
      token
    };
  }

  /**
   * 3. Authenticate / Register with Google OAuth ID Token
   */
  async googleAuth({ idToken, role = 'buyer' }) {
    let googlePayload;

    try {
      // Verify Google ID Token
      if (env.GOOGLE.CLIENT_ID) {
        const ticket = await googleClient.verifyIdToken({
          idToken,
          audience: env.GOOGLE.CLIENT_ID
        });
        googlePayload = ticket.getPayload();
      } else {
        // Dev fallback if client ID is not yet provided in .env
        const ticket = await googleClient.verifyIdToken({ idToken });
        googlePayload = ticket.getPayload();
      }
    } catch (authErr) {
      logger.error('Google token verification failed:', authErr);
      throw new ApiError(HTTP_STATUS.UNAUTHORIZED, 'Invalid or expired Google token.');
    }

    if (!googlePayload || !googlePayload.email) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Google token did not contain a valid email address.');
    }

    const { email, name, picture } = googlePayload;
    const normalizedEmail = email.toLowerCase().trim();

    // Check if user already exists
    const { data: existingUser, error: findError } = await supabaseAdmin
      .from('users')
      .select('*')
      .eq('email', normalizedEmail)
      .maybeSingle();

    if (findError) {
      logger.error('Supabase query error in Google auth:', findError);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Authentication query failed.');
    }

    let userRecord;

    if (existingUser) {
      // Update avatar if not present
      if (!existingUser.avatar_url && picture) {
        await supabaseAdmin
          .from('users')
          .update({ avatar_url: picture, is_verified: true })
          .eq('id', existingUser.id);
      }
      userRecord = existingUser;
    } else {
      // Create new user authenticated via Google
      const { data: createdUser, error: insertError } = await supabaseAdmin
        .from('users')
        .insert([
          {
            full_name: name || normalizedEmail.split('@')[0],
            email: normalizedEmail,
            role: role || 'buyer',
            provider: 'google',
            avatar_url: picture || null,
            is_verified: true // Google emails are pre-verified
          }
        ])
        .select('*')
        .single();

      if (insertError || !createdUser) {
        logger.error('Failed to create Google OAuth user record:', insertError);
        throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to create Google user account.');
      }

      userRecord = createdUser;
    }

    const token = generateJwtToken(userRecord);

    return {
      user: sanitizeUser(userRecord),
      token
    };
  }

  /**
   * 4. Verify Email Address using raw token
   */
  async verifyEmail(rawToken) {
    const hashedToken = hashToken(rawToken);

    // Find user with active token
    const { data: user, error: findError } = await supabaseAdmin
      .from('users')
      .select('id, email, verification_expires')
      .eq('verification_token', hashedToken)
      .maybeSingle();

    if (findError || !user) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid or expired email verification link.');
    }

    if (new Date(user.verification_expires) < new Date()) {
      throw new ApiError(
        HTTP_STATUS.BAD_REQUEST,
        'Verification link has expired. Please request a new verification link.'
      );
    }

    // Mark user as verified and clear tokens
    const { error: updateError } = await supabaseAdmin
      .from('users')
      .update({
        is_verified: true,
        verification_token: null,
        verification_expires: null
      })
      .eq('id', user.id);

    if (updateError) {
      logger.error('Failed to update verification status:', updateError);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update email verification status.');
    }

    return { success: true, message: 'Email verified successfully. You can now access your full account.' };
  }

  /**
   * 5. Request Password Reset Link
   */
  async forgotPassword(email) {
    const normalizedEmail = email.toLowerCase().trim();

    const { data: user, error: findError } = await supabaseAdmin
      .from('users')
      .select('id, full_name, email, provider, password_hash')
      .eq('email', normalizedEmail)
      .maybeSingle();

    if (findError) {
      logger.error('Error in forgotPassword user lookup:', findError);
    }

    // Security practice: Always return generic success message to prevent user enumeration
    if (!user) {
      return {
        message: 'If an account with that email exists, a password reset link has been dispatched.'
      };
    }

    if (user.provider === 'google' && !user.password_hash) {
      return {
        message: 'This account signs in with Google. Please use Google Sign-In.'
      };
    }

    // Generate 1-hour reset token
    const rawResetToken = generateRandomToken();
    const hashedResetToken = hashToken(rawResetToken);
    const resetExpires = new Date(Date.now() + 60 * 60 * 1000).toISOString();

    await supabaseAdmin
      .from('users')
      .update({
        reset_password_token: hashedResetToken,
        reset_password_expires: resetExpires
      })
      .eq('id', user.id);

    // Send reset email
    sendPasswordResetEmail({
      to: user.email,
      name: user.full_name,
      resetToken: rawResetToken
    }).catch((err) => logger.error('Password reset email dispatch error:', err));

    return {
      message: 'If an account with that email exists, a password reset link has been dispatched.'
    };
  }

  /**
   * 6. Reset Password using reset token
   */
  async resetPassword({ token: rawToken, newPassword }) {
    const hashedToken = hashToken(rawToken);

    const { data: user, error: findError } = await supabaseAdmin
      .from('users')
      .select('id, email, reset_password_expires')
      .eq('reset_password_token', hashedToken)
      .maybeSingle();

    if (findError || !user) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Invalid or expired password reset token.');
    }

    if (new Date(user.reset_password_expires) < new Date()) {
      throw new ApiError(HTTP_STATUS.BAD_REQUEST, 'Password reset token has expired. Please request a new one.');
    }

    // Hash new password
    const salt = await bcrypt.genSalt(12);
    const newPasswordHash = await bcrypt.hash(newPassword, salt);

    // Update password and clear reset token
    const { error: updateError } = await supabaseAdmin
      .from('users')
      .update({
        password_hash: newPasswordHash,
        reset_password_token: null,
        reset_password_expires: null
      })
      .eq('id', user.id);

    if (updateError) {
      logger.error('Failed to update password:', updateError);
      throw new ApiError(HTTP_STATUS.INTERNAL_SERVER_ERROR, 'Failed to update account password.');
    }

    return {
      message: 'Password has been reset successfully. You can now log in with your new credentials.'
    };
  }

  /**
   * 7. Fetch current user profile
   */
  async getCurrentUser(userId) {
    const { data: user, error } = await supabaseAdmin
      .from('users')
      .select('id, full_name, email, role, provider, avatar_url, is_verified, created_at, updated_at')
      .eq('id', userId)
      .single();

    if (error || !user) {
      throw new ApiError(HTTP_STATUS.NOT_FOUND, 'User profile not found.');
    }

    return user;
  }
}

export const authService = new AuthService();
