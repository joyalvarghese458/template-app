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
    <section id="contact" style={{ backgroundColor: "#14100c", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="rl-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp} className="rl-call-sheet-tag">
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", fontWeight: 700, color: "#c9a15a" }}>11</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(243,236,225,0.18)" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#b7a996", letterSpacing: "0.08em", textTransform: "uppercase" }}>Call Sheet</span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: 0, lineHeight: 1.15 }}>
            Let&apos;s book the next take.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#b7a996", margin: 0, maxWidth: "440px" }}>
            Narrative short, branded film, or a feature that needs a director attached — send the brief and I&apos;ll reply within a day.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "IMDb", value: "View credits", href: OWNER.imdb },
              { label: "Instagram", value: "@callahanpictures", href: OWNER.instagram },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#6b5f4f", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f3ece1", textDecoration: "none", borderBottom: "1px solid rgba(243,236,225,0.2)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="rl-success">
              <p style={{ fontSize: "17px", color: "#f3ece1", margin: 0, fontWeight: 700 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#b7a996", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="rl-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="rl-field">
                <label htmlFor="contact-message" className="rl-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's the project?"
                  className="rl-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="rl-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .rl-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .rl-success {
          border: 1px solid rgba(209,38,63,0.4);
          border-radius: 12px;
          padding: 44px 30px;
          background-color: #1c1611;
          text-align: center;
        }
        .rl-form { display: flex; flex-direction: column; gap: 18px; }
        .rl-field { display: flex; flex-direction: column; gap: 7px; }
        .rl-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; color: #b7a996; text-transform: uppercase; }
        .rl-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f3ece1;
          background-color: #0a0806;
          border: 1px solid rgba(201,161,90,0.24);
          border-radius: 8px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .rl-input::placeholder { color: #6b5f4f; }
        .rl-input:focus { border-color: #d1263f; }
        .rl-submit-btn {
          font-family: var(--font-display, sans-serif);
          letter-spacing: 0.03em;
          font-size: 15px;
          font-weight: 400;
          color: #f3ece1;
          background-color: #d1263f;
          border: none;
          border-radius: 6px;
          padding: 13px 28px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .rl-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(209,38,63,0.4); }
        .rl-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .rl-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="rl-field">
      <label htmlFor={id} className="rl-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="rl-input" />
    </div>
  );
}
