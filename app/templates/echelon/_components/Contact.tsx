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
    <section id="contact" style={{ backgroundColor: "#11151d", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="ech-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 600, color: "#3b6fe0" }}>11</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(238,241,246,0.18)" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#9aa7bb", letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: 0, lineHeight: 1.2 }}>
            Need someone to take the seat?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#9aa7bb", margin: 0, maxWidth: "440px" }}>
            Board search, a CEO transition, or a turnaround that needs a steady hand — send a message and I&apos;ll reply within a business day.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/marcuswhitfield", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#5c6679", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#eef1f6", textDecoration: "none", borderBottom: "1px solid rgba(238,241,246,0.2)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="ech-success">
              <p style={{ fontSize: "17px", color: "#eef1f6", margin: 0, fontWeight: 600 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#9aa7bb", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="ech-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="ech-field">
                <label htmlFor="contact-message" className="ech-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's the mandate?"
                  className="ech-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="ech-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .ech-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .ech-success {
          border: 1px solid rgba(59,111,224,0.4);
          border-radius: 14px;
          padding: 44px 30px;
          background-color: #161b25;
          text-align: center;
        }
        .ech-form { display: flex; flex-direction: column; gap: 18px; }
        .ech-field { display: flex; flex-direction: column; gap: 7px; }
        .ech-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; color: #9aa7bb; text-transform: uppercase; }
        .ech-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #eef1f6;
          background-color: #0b0e14;
          border: 1px solid rgba(238,241,246,0.14);
          border-radius: 10px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .ech-input::placeholder { color: #5c6679; }
        .ech-input:focus { border-color: #3b6fe0; }
        .ech-submit-btn {
          font-size: 14.5px;
          font-weight: 700;
          color: #0b0e14;
          background-image: linear-gradient(120deg, #3b6fe0, #6f97f2);
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ech-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(59,111,224,0.35); }
        .ech-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .ech-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="ech-field">
      <label htmlFor={id} className="ech-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="ech-input" />
    </div>
  );
}
