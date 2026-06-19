"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

interface FormState {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1100));
    setStatus("sent");
  };

  return (
    <section id="contact" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#1a1714" }}>
      <div className="byline-contact-grid" style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          style={{ display: "flex", flexDirection: "column", gap: "22px" }}
        >
          <motion.div variants={fadeUp}>
            <span className="byline-contact-kicker">06 — Tip Line</span>
          </motion.div>
          <motion.h2 variants={fadeUp} className="byline-contact-h2">
            Have a tip? Get in touch.
          </motion.h2>
          <motion.p variants={fadeUp} className="byline-contact-copy">
            Secure tips are welcome. I protect sources and will follow up before publishing anything that identifies you.
          </motion.p>
          <motion.div variants={fadeUp} className="byline-contact-links">
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "Signal", value: OWNER.signal, href: undefined },
              { label: "X / Twitter", value: "@noraquinn", href: OWNER.twitter },
            ].map((link) => (
              <div key={link.label} className="byline-contact-link-row">
                <span className="byline-contact-link-label">{link.label}</span>
                {link.href ? (
                  <a href={link.href} className="byline-contact-link-value">{link.value}</a>
                ) : (
                  <span className="byline-contact-link-value">{link.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="byline-contact-success">
              <p style={{ fontFamily: "var(--font-display, serif)", fontSize: "19px", margin: 0 }}>Message received.</p>
              <p style={{ fontFamily: "var(--font-type, monospace)", fontSize: "12.5px", color: "#8a8276", margin: "8px 0 0" }}>
                I&apos;ll follow up within 1–2 business days.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="byline-contact-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="byline-field">
                <label htmlFor="contact-message" className="byline-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's the story?"
                  className="byline-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="byline-submit-btn">
                {status === "sending" ? "Sending…" : "Send Tip"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .byline-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .byline-contact-kicker {
          font-family: var(--font-type, monospace);
          font-size: 12px;
          letter-spacing: 0.08em;
          color: #b3231a;
          text-transform: uppercase;
        }
        .byline-contact-h2 {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(26px, 4.5vw, 38px);
          color: #f3efe6;
          margin: 0;
          line-height: 1.15;
        }
        .byline-contact-copy { font-size: 15.5px; line-height: 1.7; color: #ece4d3; opacity: 0.85; margin: 0; max-width: 440px; }
        .byline-contact-links { display: flex; flex-direction: column; gap: 12px; margin-top: 6px; }
        .byline-contact-link-row { display: flex; gap: 14px; align-items: baseline; }
        .byline-contact-link-label {
          font-family: var(--font-type, monospace);
          font-size: 11px;
          color: #8a8276;
          text-transform: uppercase;
          min-width: 70px;
        }
        .byline-contact-link-value { font-size: 14px; color: #f3efe6; text-decoration: none; border-bottom: 1px solid rgba(243,239,230,0.25); }
        .byline-contact-success {
          border: 1px solid rgba(243,239,230,0.18);
          border-radius: 4px;
          padding: 40px 28px;
          background-color: rgba(243,239,230,0.05);
          text-align: center;
          color: #f3efe6;
        }
        .byline-contact-form { display: flex; flex-direction: column; gap: 18px; }
        .byline-field { display: flex; flex-direction: column; gap: 7px; }
        .byline-field-label {
          font-family: var(--font-type, monospace);
          font-size: 10.5px;
          letter-spacing: 0.04em;
          color: #8a8276;
          text-transform: uppercase;
        }
        .byline-input {
          font-family: var(--font-body, serif);
          font-size: 15px;
          color: #f3efe6;
          background-color: rgba(243,239,230,0.06);
          border: 1px solid rgba(243,239,230,0.2);
          border-radius: 2px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .byline-input:focus { border-color: #b3231a; }
        .byline-submit-btn {
          font-family: var(--font-type, monospace);
          font-size: 13px;
          color: #f3efe6;
          background-color: #b3231a;
          border: none;
          border-radius: 2px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: background-color 0.2s;
        }
        .byline-submit-btn:hover:not(:disabled) { background-color: #921c15; }
        .byline-submit-btn:disabled { background-color: #6b3531; cursor: not-allowed; }
        @media (min-width: 860px) {
          .byline-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
        }
      `}</style>
    </section>
  );
}

function Field({
  id, label, name, value, onChange, placeholder, type = "text",
}: {
  id: string; label: string; name: string; value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string; type?: string;
}) {
  return (
    <div className="byline-field">
      <label htmlFor={id} className="byline-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="byline-input" />
    </div>
  );
}
