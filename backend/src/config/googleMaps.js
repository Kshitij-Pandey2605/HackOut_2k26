import { env } from './env.js';

// Google Maps API configuration (Ready for future geo-routing & distance calculations)
export const googleMapsConfig = {
  apiKey: env.GOOGLE_MAPS.API_KEY
};
