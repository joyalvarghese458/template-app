import { Resend } from "resend";
import { NextResponse } from "next/server";

/* ── Configuration ──────────────────────────────────────────
   TO_EMAIL   : where contact form submissions are delivered
   FROM_EMAIL : must be a Resend-verified domain address.
                During development you can use onboarding@resend.dev
                but it will only deliver to your Resend account email. */
const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "info.myportfoliowebsiteglobal@gmail.com";
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL ?? "contact@myportfoliowebsite.com";

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
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { first_name, last_name, email, phone, subject, budget, message } =
    body as ContactPayload;

  if (!first_name?.trim() || !last_name?.trim() || !email?.trim() || !subject?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
  }

  const { error } = await resend.emails.send({
    from: FROM_EMAIL,
    to: TO_EMAIL,
    replyTo: email,
    subject: `[Contact] ${subject} — ${first_name} ${last_name}`,
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
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#14112d;font-size:15px;font-weight:600;">${first_name} ${last_name}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Email</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;"><a href="mailto:${email}" style="color:#ff6b5b;font-size:15px;">${email}</a></td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Phone</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#14112d;font-size:15px;">${phone}</td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Subject</td>
              <td style="padding:10px 0;border-bottom:1px solid #f0eefb;color:#14112d;font-size:15px;font-weight:600;">${subject}</td>
            </tr>
            <tr>
              <td style="padding:10px 0;color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;">Budget</td>
              <td style="padding:10px 0;color:#14112d;font-size:15px;">${budget || "Not specified"}</td>
            </tr>
          </table>
        </div>

        <div style="background:#fff;padding:28px;border-radius:12px;">
          <p style="color:#5a5677;font-size:13px;font-weight:600;text-transform:uppercase;letter-spacing:.05em;margin:0 0 12px;">Message</p>
          <p style="color:#14112d;font-size:15px;line-height:1.75;margin:0;white-space:pre-wrap;">${message}</p>
        </div>

        <p style="color:#9896a4;font-size:12px;text-align:center;margin:24px 0 0;">
          Sent via your portfolio contact form &middot; Reply to this email to respond to ${first_name}
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
    to: email,
    subject: "Thanks for reaching out — we'll be in touch soon!",
    html: `
      <div style="font-family:Inter,sans-serif;max-width:600px;margin:0 auto;padding:32px;background:#f6f5fb;border-radius:16px;">
        <div style="background:linear-gradient(135deg,#0e0b2a,#1a1545);padding:32px;border-radius:12px;margin-bottom:24px;">
          <h1 style="color:#fff;font-size:24px;margin:0 0 8px;">Thank you, ${first_name}!</h1>
          <p style="color:rgba(255,255,255,0.6);margin:0;font-size:14px;">We've received your message.</p>
        </div>

        <div style="background:#fff;padding:28px;border-radius:12px;margin-bottom:16px;">
          <p style="color:#14112d;font-size:15px;line-height:1.75;margin:0 0 16px;">
            Hi ${first_name}, thanks for getting in touch with us at <strong>My Portfolio</strong>.
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
