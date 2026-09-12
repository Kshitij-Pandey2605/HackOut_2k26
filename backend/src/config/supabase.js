import { createClient } from '@supabase/supabase-js';
import { env } from './env.js';

// Public/Anon client (for client-authorized interactions / RLS context)
export const supabase = createClient(env.SUPABASE.URL, env.SUPABASE.ANON_KEY);

// Admin / Service Role client (for privileged backend tasks, bypasses RLS when strictly required)
export const supabaseAdmin = createClient(
  env.SUPABASE.URL,
  env.SUPABASE.SERVICE_ROLE_KEY || env.SUPABASE.ANON_KEY
);
