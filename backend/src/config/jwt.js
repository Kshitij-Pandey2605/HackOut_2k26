import { env } from './env.js';

export const jwtConfig = {
  secret: env.JWT.SECRET,
  expiresIn: env.JWT.EXPIRES_IN || '7d',
  cookieOptions: {
    httpOnly: true,
    secure: env.NODE_ENV === 'production',
    sameSite: env.NODE_ENV === 'production' ? 'strict' : 'lax',
    maxAge: (parseInt(env.JWT.COOKIE_EXPIRES_IN_DAYS, 10) || 7) * 24 * 60 * 60 * 1000 // 7 days in ms
  }
};
