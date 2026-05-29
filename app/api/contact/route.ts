import { Resend } from "resend";
import { NextResponse } from "next/server";

/* ── Configuration ──────────────────────────────────────────
   TO_EMAIL   : where contact form submissions are delivered
   FROM_EMAIL : must be a Resend-verified domain address.
                During development you can use onboarding@resend.dev
                but it will only deliver to your Resend account email. */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info.myportfoliowebsiteglobal@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "contact@myportfoliowebsite.com";

/* ── Rate limiter ────────────────────────────────────────────
   Max 5 submissions per IP per hour. Resets on server restart.
   Good enough for a portfolio site without any external service. */
const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_WINDOW = 5;
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

// Escape user input before putting it in email HTML
function esc(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

interface ContactPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  subject: string;
  budget: string;
  message: string;
}

export async function POST(request: Request) {
  // Rate limit check
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0].trim() ??
    request.headers.get("x-real-ip") ??
    "unknown";

  if (isRateLimited(ip)) {
    return NextResponse.json(
      { error: "Too many submissions. Please try again later." },
      { status: 429 }
    );
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot check — real users never see or fill this field, bots do
  if ((body as Record<string, unknown>).website) {
    return NextResponse.json({ success: true });
  }

  const { first_name, last_name, email, phone, subject, budget, message } =
    body as ContactPayload;

  if (!first_name?.trim() || !last_name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  // Input length limits
  if (
    first_name.length > 100 || last_name.length > 100 ||
    email.length > 254 || subject.length > 300 || message.length > 5000
  ) {
    return NextResponse.json({ error: "Input too long." }, { status: 400 });
  }

  // Sanitize all user input for safe HTML rendering
  const s = {
    first_name: esc(first_name.trim()),
    last_name:  esc(last_name.trim()),
    email:      esc(email.trim()),
    phone:      phone ? esc(phone.trim()) : "",
    subject:    esc(subject.trim()),
    budget:     esc(budget ?? ""),
    message:    esc(message.trim()),
  };

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email.trim(),
    subject: `[Contact] ${s.subject} — ${s.first_name} ${s.last_name}`,
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f6f5fb;border-radius:16px;">
        <div style="background:linear-gradient(135deg,#0e0b2a,#1a1545);padding:32px;border-radius:12px;margin-bottom:24px;">
          <h1 style="color:#fff;font-size:24px;margin:0 0 8px;">New Contact Message</h1>
          <p style="color:rgba(255,255,255,0.6);margin:0;font-size:14px;">Via your portfolio contact form</p>
        </div>

        <div style="background:#fff;padding:28px;border-radius:12px;margin-bottom:16px;">
          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;width:120px;">Name</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#14112d;font-size:15px;font-weight:600;">${s.first_name} ${s.last_name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;"><a href="mailto:${s.email}" style="color:#ff6b5b;font-size:15px;">${s.email}</a></td>
            </tr>
            ${s.phone ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#14112d;font-size:15px;">${s.phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Subject</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#14112d;font-size:15px;font-weight:600;">${s.subject}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Budget</td>
              <td style="padding:10px 0;color:#14112d;font-size:15px;">${s.budget || "Not specified"}</td>
            </tr>
          </table>
        </div>

        <div style="background:#fff;padding:28px;border-radius:12px;">
          <p style="color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px;">Message</p>
          <p style="color:#14112d;font-size:15px;line-height:1.75;margin:0;white-space:pre-wrap;">${s.message}</p>
        </div>

        <p style="color:#9896a4;font-size:12px;text-align:center;margin:24px 0 0;">
          Sent via your portfolio contact form &middot; Reply to this email to respond to ${s.first_name}
        </p>
      </div>
    `,
  });

  if (error) {
    console.error("Resend error:", error);
    return NextResponse.json({ error: "Failed to send email." }, { status: 500 });
  }

  // Auto-reply to the sender
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email.trim(),
    subject: "Thanks for reaching out — we'll be in touch soon!",
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f6f5fb;border-radius:16px;">
        <div style="background:linear-gradient(135deg,#0e0b2a,#1a1545);padding:32px;border-radius:12px;margin-bottom:24px;">
          <h1 style="color:#fff;font-size:24px;margin:0 0 8px;">Thank you, ${s.first_name}!</h1>
          <p style="color:rgba(255,255,255,0.6);margin:0;font-size:14px;">We've received your message.</p>
        </div>

        <div style="background:#fff;padding:28px;border-radius:12px;margin-bottom:16px;">
          <p style="color:#14112d;font-size:15px;line-height:1.75;margin:0 0 16px;">
            Hi ${s.first_name}, thanks for getting in touch with us at <strong>My Portfolio</strong>.
          </p>
          <p style="color:#14112d;font-size:15px;line-height:1.75;margin:0 0 16px;">
            We've received your message and will get back to you within <strong>one business day</strong>.
            In the meantime, feel free to reach us directly on WhatsApp for a faster response.
          </p>
          <a href="https://wa.me/971568450406"
             style="display:inline-block;background:#0e0b2a;color:#fff;font-size:14px;font-weight:600;
                    padding:12px 24px;border-radius:8px;text-decoration:none;margin-top:4px;">
            Chat on WhatsApp
          </a>
        </div>

        <p style="color:#9896a4;font-size:12px;text-align:center;margin:24px 0 0;">
          My Portfolio &middot; Dubai, UAE &middot; info@myportfoliowebsite.com
        </p>
      </div>
    `,
  });

  return NextResponse.json({ success: true });
}
