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
    <section id="contact" style={{ backgroundColor: "#efe4d3", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="kln-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#c15f3c" }}>11</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(58,46,34,0.25)" }} />
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "#6b5a45", letterSpacing: "0.1em", textTransform: "uppercase" }}>Enquiries</span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: 0, lineHeight: 1.15 }}>
            Commission the next piece.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.75, color: "#6b5a45", margin: 0, maxWidth: "440px" }}>
            Custom sets, wholesale orders, or a spot in the next kiln load — send a note and I&apos;ll reply within a day.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "Instagram", value: "@studiosolberg", href: OWNER.instagram },
              { label: "Studio", value: "studiosolberg.dk", href: OWNER.shop },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#a08d70", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#3a2e22", textDecoration: "none", borderBottom: "1px solid rgba(58,46,34,0.24)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="kln-success">
              <p style={{ fontSize: "17px", color: "#3a2e22", margin: 0, fontWeight: 700 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#6b5a45", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="kln-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="kln-field">
                <label htmlFor="contact-message" className="kln-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about the commission"
                  className="kln-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="kln-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .kln-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .kln-success {
          border: 1px solid rgba(193,95,60,0.4);
          border-radius: 14px;
          padding: 44px 30px;
          background-color: #f7f1e8;
          text-align: center;
        }
        .kln-form { display: flex; flex-direction: column; gap: 18px; }
        .kln-field { display: flex; flex-direction: column; gap: 7px; }
        .kln-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.05em; color: #6b5a45; text-transform: uppercase; }
        .kln-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #3a2e22;
          background-color: #f7f1e8;
          border: 1px solid rgba(58,46,34,0.2);
          border-radius: 6px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .kln-input::placeholder { color: #a08d70; }
        .kln-input:focus { border-color: #c15f3c; }
        .kln-submit-btn {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.02em;
          font-size: 14px;
          font-weight: 600;
          color: #f7f1e8;
          background-color: #c15f3c;
          border: none;
          border-radius: 4px;
          padding: 13px 28px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .kln-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(193,95,60,0.3); }
        .kln-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .kln-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="kln-field">
      <label htmlFor={id} className="kln-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="kln-input" />
    </div>
  );
}
