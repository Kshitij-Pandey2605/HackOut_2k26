import jwt from 'jsonwebtoken';
import crypto from 'crypto';
import { jwtConfig } from '../config/jwt.js';

/**
 * Generate a signed JWT for a user
 * @param {Object} user - User payload { id, email, role, full_name, is_verified }
 * @returns {string} Signed JWT
 */
export const generateJwtToken = (user) => {
  const payload = {
    id: user.id,
    email: user.email,
    role: user.role,
    full_name: user.full_name,
    is_verified: user.is_verified
  };

  return jwt.sign(payload, jwtConfig.secret, {
    expiresIn: jwtConfig.expiresIn
  });
};

/**
 * Verify a JWT string
 * @param {string} token
 * @returns {Object} Decoded payload
 */
export const verifyJwtToken = (token) => {
  return jwt.verify(token, jwtConfig.secret);
};

/**
 * Attach HTTP-only secure cookie to Express response
 * @param {import('express').Response} res
 * @param {string} token
 */
export const setAuthCookie = (res, token) => {
  res.cookie('token', token, jwtConfig.cookieOptions);
};

/**
 * Clear the authentication cookie
 * @param {import('express').Response} res
 */
export const clearAuthCookie = (res) => {
  res.cookie('token', '', {
    ...jwtConfig.cookieOptions,
    maxAge: 0,
    expires: new Date(0)
  });
};

/**
 * Generate a cryptographically secure random token (for email verification & password reset)
 * @returns {string} 64-character hex string
 */
export const generateRandomToken = () => {
  return crypto.randomBytes(32).toString('hex');
};

/**
 * Hash a plain verification / reset token for secure DB storage
 * @param {string} token
 * @returns {string} SHA-256 hash
 */
export const hashToken = (token) => {
  return crypto.createHash('sha256').update(token).digest('hex');
};
