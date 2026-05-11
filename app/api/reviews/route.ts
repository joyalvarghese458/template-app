import { getSupabase } from "@/lib/supabase";

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

// POST /api/reviews — inserts a new review (approved defaults to false)
export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON body." }, { status: 400 });
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

  const supabase = getSupabase();

  const { data, error } = await supabase
    .from("reviews")
    .insert([
      {
        name: name.trim(),
        message: message.trim(),
        stars,
        photo_url: typeof photo_url === "string" && photo_url ? photo_url : null,
        approved: true,
      },
    ])
    .select()
    .single();

  if (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }

  return Response.json(data, { status: 201 });
}
