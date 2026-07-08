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
    <section id="contact" style={{ backgroundColor: "#1f1a13", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="esc-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#c9a24b" }}>11</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(242,234,217,0.25)" }} />
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "#b9ac93", letterSpacing: "0.1em", textTransform: "uppercase" }}>Enquiries</span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f2ead9", margin: 0, lineHeight: 1.15 }}>
            Commission the next caliber.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.75, color: "#b9ac93", margin: 0, maxWidth: "440px" }}>
            Bespoke builds, restorations, or a spot on the waitlist — send a note and I&apos;ll reply within a day.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "Instagram", value: "@ateliervoss", href: OWNER.instagram },
              { label: "Atelier", value: "ateliervoss.ch", href: OWNER.shop },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#7d7362", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f2ead9", textDecoration: "none", borderBottom: "1px solid rgba(242,234,217,0.24)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="esc-success">
              <p style={{ fontSize: "17px", color: "#f2ead9", margin: 0, fontWeight: 700 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#b9ac93", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="esc-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="esc-field">
                <label htmlFor="contact-message" className="esc-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the commission"
                  className="esc-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="esc-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .esc-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .esc-success {
          border: 1px solid rgba(201,162,75,0.4);
          border-radius: 14px;
          padding: 44px 30px;
          background-color: #12100d;
          text-align: center;
        }
        .esc-form { display: flex; flex-direction: column; gap: 18px; }
        .esc-field { display: flex; flex-direction: column; gap: 7px; }
        .esc-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.05em; color: #b9ac93; text-transform: uppercase; }
        .esc-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f2ead9;
          background-color: #12100d;
          border: 1px solid rgba(242,234,217,0.18);
          border-radius: 6px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .esc-input::placeholder { color: #7d7362; }
        .esc-input:focus { border-color: #c9a24b; }
        .esc-submit-btn {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.02em;
          font-size: 14px;
          font-weight: 600;
          color: #12100d;
          background-color: #c9a24b;
          border: none;
          border-radius: 4px;
          padding: 13px 28px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .esc-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(201,162,75,0.3); }
        .esc-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .esc-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="esc-field">
      <label htmlFor={id} className="esc-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="esc-input" />
    </div>
  );
}
