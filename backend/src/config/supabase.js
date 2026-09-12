import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';
import { logger } from '../utils/logger.js';

const supabaseUrl = env.SUPABASE.URL || 'https://placeholder-project.supabase.co';
const supabaseAnonKey = env.SUPABASE.ANON_KEY || 'placeholder-anon-key';
const supabaseServiceRoleKey = env.SUPABASE.SERVICE_ROLE_KEY || supabaseAnonKey;

if (!env.SUPABASE.URL || !env.SUPABASE.ANON_KEY) {
  logger.warn(
    'Supabase URL or Anon Key is missing in environment variables. Please update your .env file with valid credentials.'
  );
}

// Public/Anon client (for client-authorized interactions / RLS context)
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});

// Admin / Service Role client (bypasses RLS for secure backend operations)
export const supabaseAdmin = createClient(supabaseUrl, supabaseServiceRoleKey, {
  auth: {
    persistSession: false,
    autoRefreshToken: false
  }
});
