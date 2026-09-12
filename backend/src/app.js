import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { env } from './config/env.js';
import apiRouter from './routes/index.js';
import { errorHandler } from './middleware/error.middleware.js';
import { ApiError } from './utils/apiError.js';
import { HTTP_STATUS } from './constants/index.js';

const app = express();

// Security & Utility Middlewares
app.use(helmet());
app.use(
  cors({
    origin: env.FRONTEND_URL,
    credentials: true
  })
);
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));

if (env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Base API Route
app.use(env.API_PREFIX, apiRouter);

// 404 Handler for Unmatched Routes
app.use((req, res, next) => {
  next(new ApiError(HTTP_STATUS.NOT_FOUND, `Route ${req.originalUrl} not found`));
});

// Global Centralized Error Middleware
app.use(errorHandler);

export default app;
