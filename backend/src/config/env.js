import dotenv from 'dotenv';

dotenv.config();

export const env = {
  PORT: process.env.PORT || 5000,
  NODE_ENV: process.env.NODE_ENV || 'development',
  API_PREFIX: process.env.API_PREFIX || '/api/v1',
  FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:5173',

  SUPABASE: {
    URL: process.env.SUPABASE_URL || '',
    ANON_KEY: process.env.SUPABASE_ANON_KEY || '',
    SERVICE_ROLE_KEY: process.env.SUPABASE_SERVICE_ROLE_KEY || ''
  },

  JWT: {
    SECRET: process.env.JWT_SECRET || 'default_jwt_secret_dev_only',
    EXPIRES_IN: process.env.JWT_EXPIRES_IN || '7d'
  },

  CLOUDINARY: {
    CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME || '',
    API_KEY: process.env.CLOUDINARY_API_KEY || '',
    API_SECRET: process.env.CLOUDINARY_API_SECRET || ''
  },

  GOOGLE_MAPS: {
    API_KEY: process.env.GOOGLE_MAPS_API_KEY || ''
  }
};
