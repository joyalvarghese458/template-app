import { getSupabase } from "@/lib/supabase";

/* ── Rate limiter ────────────────────────────────────────────
   Max 3 review submissions per IP per day. */
const WINDOW_MS = 24 * 60 * 60 * 1000; // 24 hours
const MAX_PER_WINDOW = 3;
const ipLog = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = ipLog.get(ip);

  if (!entry || now > entry.resetAt) {
    ipLog.set(ip, { count: 1, resetAt: now + WINDOW_MS });
    return false;
  }

  if (entry.count >= MAX_PER_WINDOW) return true;

  entry.count += 1;
  return false;
}

// Only allow https:// image URLs from known safe hosts
const ALLOWED_PHOTO_HOSTS = [
  "images.unsplash.com",
  "res.cloudinary.com",
  "lh3.googleusercontent.com", // Google profile photos
  "avatars.githubusercontent.com",
  "pbs.twimg.com",
];

function isSafePhotoUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return parsed.protocol === "https:" && ALLOWED_PHOTO_HOSTS.includes(parsed.hostname);
  } catch {
    return false;
  }
}

// GET /api/reviews — returns all approved reviews, newest first
export async function GET() {
  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("reviews")
    .select("id, name, message, stars, photo_url, created_at")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data);
}

// POST /api/reviews — inserts a new review, pending approval
export async function POST(request: Request) {
  // Rate limit check
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return Response.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  // Honeypot check
  if ((body as Record<string, unknown>).website) {
    return Response.json({ success: true });
  }

  const { name, message, stars, photo_url } = body as Record<string, unknown>;

  if (
    typeof name !== "string" || !name.trim() ||
    typeof message !== "string" || !message.trim()
  ) {
    return Response.json(
      { error: "name and message are required strings." },
      { status: 400 }
    );
  }

  if (typeof stars !== "number" || stars < 1 || stars > 5) {
    return Response.json(
      { error: "stars must be a number between 1 and 5." },
      { status: 400 }
    );
  }

  // Input length limits
  if (name.length > 100 || message.length > 1000) {
    return Response.json({ error: "Input too long." }, { status: 400 });
  }

  // Validate photo URL if provided
  const safePhotoUrl =
    typeof photo_url === "string" && photo_url && isSafePhotoUrl(photo_url)
      ? photo_url
      : null;

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("reviews")
    .insert([
      {
        name: name.trim(),
        message: message.trim(),
        stars,
        photo_url: safePhotoUrl,
        approved: false, // must be approved manually in Supabase before going live
      },
    ])
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 201 });
}
