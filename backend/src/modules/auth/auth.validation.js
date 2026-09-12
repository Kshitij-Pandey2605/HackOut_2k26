import { z } from 'zod';

const passwordValidation = z
  .string({ required_error: 'Password is required' })
  .min(8, 'Password must be at least 8 characters long')
  .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
  .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
  .regex(/[0-9!@#$%^&*(),.?":{}|<>]/, 'Password must contain at least one number or special character');

export const signupSchema = {
  body: z.object({
    full_name: z
      .string({ required_error: 'Full name is required' })
      .trim()
      .min(2, 'Full name must be at least 2 characters')
      .max(100, 'Full name cannot exceed 100 characters'),
    email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .email('Invalid email address')
      .toLowerCase(),
    password: passwordValidation,
    role: z
      .enum(['supplier', 'buyer', 'logistics', 'admin'], {
        errorMap: () => ({ message: "Role must be one of 'supplier', 'buyer', 'logistics', or 'admin'" })
      })
      .default('buyer')
  })
};

export const loginSchema = {
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .email('Invalid email address')
      .toLowerCase(),
    password: z.string({ required_error: 'Password is required' }).min(1, 'Password cannot be empty')
  })
};

export const googleAuthSchema = {
  body: z.object({
    idToken: z.string({ required_error: 'Google ID Token is required' }).min(10, 'Invalid Google ID Token format'),
    role: z
      .enum(['supplier', 'buyer', 'logistics', 'admin'])
      .optional()
      .default('buyer')
  })
};

export const forgotPasswordSchema = {
  body: z.object({
    email: z
      .string({ required_error: 'Email is required' })
      .trim()
      .email('Invalid email address')
      .toLowerCase()
  })
};

export const resetPasswordSchema = {
  body: z.object({
    token: z.string({ required_error: 'Reset token is required' }).min(1, 'Reset token is missing'),
    newPassword: passwordValidation
  })
};

export const verifyEmailSchema = {
  query: z.object({
    token: z.string({ required_error: 'Verification token is required' }).min(1, 'Verification token is missing')
  })
};
