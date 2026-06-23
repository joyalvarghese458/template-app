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
    <section id="contact" style={{ backgroundColor: "#0f1222", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="surge-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13px", fontWeight: 700, color: "#00c875" }}>10</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
              <span style={{ fontSize: "12px", fontWeight: 700, color: "#9aa0b4", letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#ffffff", margin: 0, lineHeight: 1.18 }}>
            Let&apos;s grow something.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#9aa0b4", margin: 0, maxWidth: "440px" }}>
            Hiring for a marketing role, or just want a second opinion on a campaign? Send a message — I usually reply within a day.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/damonreid", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#5b6178", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#ffffff", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.2)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="surge-success">
              <p style={{ fontSize: "17px", color: "#0f1222", margin: 0, fontWeight: 700 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#5b6178", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="surge-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="surge-field">
                <label htmlFor="contact-message" className="surge-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's the role or the campaign?"
                  className="surge-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="surge-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .surge-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .surge-success {
          border: 1px solid rgba(0,200,117,0.4);
          border-radius: 16px;
          padding: 44px 30px;
          background-color: #ffffff;
          text-align: center;
        }
        .surge-form { display: flex; flex-direction: column; gap: 18px; }
        .surge-field { display: flex; flex-direction: column; gap: 7px; }
        .surge-field-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; color: #9aa0b4; text-transform: uppercase; }
        .surge-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #ffffff;
          background-color: #181b2c;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 10px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .surge-input::placeholder { color: #5b6178; }
        .surge-input:focus { border-color: #2954ff; }
        .surge-submit-btn {
          font-size: 14.5px;
          font-weight: 700;
          color: #ffffff;
          background-image: linear-gradient(120deg, #2954ff, #ff3d7f);
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .surge-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(41,84,255,0.35); }
        .surge-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .surge-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="surge-field">
      <label htmlFor={id} className="surge-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="surge-input" />
    </div>
  );
}
