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
    <section id="contact" style={{ backgroundColor: "#111a2c", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="atlas-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 600, color: "#d4af6a" }}>11</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(243,239,228,0.18)" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#aab4c9", letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: 0, lineHeight: 1.2 }}>
            Let&apos;s talk strategy.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#aab4c9", margin: 0, maxWidth: "440px" }}>
            Facing a growth plateau, a deal that needs advisory, or a team that needs alignment? Send a message — I usually reply within a business day.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/eliasnavarro", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#6c7790", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f3efe4", textDecoration: "none", borderBottom: "1px solid rgba(243,239,228,0.2)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="atlas-success">
              <p style={{ fontSize: "17px", color: "#f3efe4", margin: 0, fontWeight: 600 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#aab4c9", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="atlas-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="atlas-field">
                <label htmlFor="contact-message" className="atlas-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's the business challenge?"
                  className="atlas-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="atlas-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .atlas-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .atlas-success {
          border: 1px solid rgba(63,143,118,0.4);
          border-radius: 16px;
          padding: 44px 30px;
          background-color: #16213a;
          text-align: center;
        }
        .atlas-form { display: flex; flex-direction: column; gap: 18px; }
        .atlas-field { display: flex; flex-direction: column; gap: 7px; }
        .atlas-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; color: #aab4c9; text-transform: uppercase; }
        .atlas-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f3efe4;
          background-color: #0a0f1c;
          border: 1px solid rgba(243,239,228,0.14);
          border-radius: 10px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .atlas-input::placeholder { color: #6c7790; }
        .atlas-input:focus { border-color: #d4af6a; }
        .atlas-submit-btn {
          font-size: 14.5px;
          font-weight: 600;
          color: #0a0f1c;
          background-image: linear-gradient(120deg, #d4af6a, #f1d49b);
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .atlas-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(212,175,106,0.3); }
        .atlas-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .atlas-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="atlas-field">
      <label htmlFor={id} className="atlas-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="atlas-input" />
    </div>
  );
}
