import { ApiError } from '../utils/apiError.js';
import { HTTP_STATUS } from '../constants/index.js';

/**
 * Generic request schema validation middleware wrapper
 * Validates req.body, req.query, or req.params against validation schemas
 */
export const validate = (schema) => (req, res, next) => {
  try {
    if (schema.body) req.body = schema.body.parse(req.body);
    if (schema.query) req.query = schema.query.parse(req.query);
    if (schema.params) req.params = schema.params.parse(req.params);
    next();
  } catch (error) {
    const errorMessages = error.errors ? error.errors.map((e) => e.message) : [error.message];
    next(new ApiError(HTTP_STATUS.BAD_REQUEST, 'Validation failed', errorMessages));
  }
};
