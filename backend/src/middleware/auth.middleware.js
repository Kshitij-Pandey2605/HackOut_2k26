export {
  authenticateUser,
  authorizeRole,
  requireVerifiedEmail
} from '../modules/auth/auth.middleware.js';

// Aliases for convenience
export { authenticateUser as authenticate } from '../modules/auth/auth.middleware.js';
export { authorizeRole as authorizeRoles } from '../modules/auth/auth.middleware.js';
