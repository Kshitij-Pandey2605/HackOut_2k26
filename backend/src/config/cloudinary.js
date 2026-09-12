import { env } from './env.js';

// Cloudinary configuration (Ready for future asset uploads & certifications)
export const cloudinaryConfig = {
  cloud_name: env.CLOUDINARY.CLOUD_NAME,
  api_key: env.CLOUDINARY.API_KEY,
  api_secret: env.CLOUDINARY.API_SECRET
};
