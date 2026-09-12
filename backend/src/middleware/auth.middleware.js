import { ApiError } from '../utils/apiError.js';
import { HTTP_STATUS } from '../constants/index.js';

/**
 * Authentication middleware starter skeleton
 * Verifies Supabase/JWT session token on protected routes
 */
export const authenticate = (req, res, next) => {
  // Skeleton placeholder for JWT / Supabase auth verification
  next();
};

/**
 * Role-based access control middleware starter skeleton
 */
export const authorizeRoles = (...roles) => {
  return (req, res, next) => {
    // Skeleton placeholder for role checking
    next();
  };
};
