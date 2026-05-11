import { createClient, type SupabaseClient } from "@supabase/supabase-js";

// Lazy singleton — client is created on first call, not at module load time.
// This prevents build-time crashes when env vars are not yet set.
let _client: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_client) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !key) {
      throw new Error(
        "Missing NEXT_PUBLIC_SUPABASE_URL or NEXT_PUBLIC_SUPABASE_ANON_KEY env vars."
      );
    }
    _client = createClient(url, key);
  }
  return _client;
}
