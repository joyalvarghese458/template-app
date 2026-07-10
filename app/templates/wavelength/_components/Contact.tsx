"use client";

import { useState } from "react";
import { CONTACT, OWNER } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";
import ChapterHead from "./ChapterHead";

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [form, setForm] = useState({ name: "", project: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1000));
    setStatus("sent");
  };

  return (
    <section id="contact" className="wl-contact">
      <div ref={ref} className={`wl-contact-inner wl-reveal ${visible ? "wl-reveal-in" : ""}`}>
        <ChapterHead index="05" title="Contact" sub={OWNER.availability} />

        <h3 className="wl-contact-headline">{CONTACT.heading}</h3>
        <p className="wl-contact-sub">{CONTACT.sub}</p>

        <a href={`mailto:${OWNER.email}`} className="wl-contact-mail">{OWNER.email} →</a>

        {status === "sent" ? (
          <p className="wl-contact-sent">Message sent — I&apos;ll reply within two business days.</p>
        ) : (
          <form onSubmit={handleSubmit} className="wl-contact-form">
            <input
              name="name"
              required
              placeholder="Your name"
              value={form.name}
              onChange={handleChange}
              className="wl-contact-input"
            />
            <input
              name="project"
              required
              placeholder="Project type — film, game, ad"
              value={form.project}
              onChange={handleChange}
              className="wl-contact-input"
            />
            <textarea
              name="message"
              required
              rows={4}
              placeholder="A few lines on where the project stands"
              value={form.message}
              onChange={handleChange}
              className="wl-contact-input wl-contact-textarea"
            />
            <button type="submit" disabled={status === "sending"} className="wl-contact-submit">
              {status === "sending" ? "Sending…" : "Send"}
            </button>
          </form>
        )}
      </div>

      <style>{`
        .wl-contact { padding: clamp(60px, 8vw, 100px) 20px clamp(100px, 12vw, 140px); max-width: var(--max-w); margin: 0 auto; }
        .wl-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .wl-reveal-in { opacity: 1; transform: translateY(0); }
        .wl-contact-headline {
          font-family: var(--font-display, sans-serif);
          font-weight: 600;
          font-size: clamp(30px, 6vw, 52px);
          line-height: 1.12;
          color: #f2f2ee;
          margin: 34px 0 14px;
          max-width: 720px;
        }
        .wl-contact-sub { font-size: 15px; line-height: 1.7; color: rgba(242,242,238,0.55); margin: 0 0 24px; max-width: 520px; }
        .wl-contact-mail {
          display: inline-block;
          font-family: var(--font-mono, monospace);
          font-size: clamp(16px, 2.6vw, 20px);
          font-weight: 700;
          color: #c6ff3d;
          text-decoration: none;
          border-bottom: 1px solid rgba(198,255,61,0.4);
          padding-bottom: 4px;
          margin-bottom: 36px;
        }
        .wl-contact-form { display: flex; flex-direction: column; gap: 14px; max-width: 480px; }
        .wl-contact-input {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          color: #f2f2ee;
          background-color: transparent;
          border: none;
          border-bottom: 1px solid rgba(242,242,238,0.18);
          padding: 10px 2px;
          outline: none;
          transition: border-color 0.2s;
        }
        .wl-contact-input::placeholder { color: rgba(242,242,238,0.32); }
        .wl-contact-input:focus { border-color: #c6ff3d; }
        .wl-contact-textarea { resize: vertical; min-height: 90px; }
        .wl-contact-submit {
          margin-top: 6px;
          align-self: flex-start;
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 700;
          color: #0a0a0c;
          background-color: #c6ff3d;
          border: none;
          border-radius: 100px;
          padding: 13px 26px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .wl-contact-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 26px -6px rgba(198,255,61,0.4); }
        .wl-contact-submit:disabled { opacity: 0.5; cursor: not-allowed; }
        .wl-contact-sent { font-size: 14px; color: rgba(242,242,238,0.6); }
      `}</style>
    </section>
  );
}
