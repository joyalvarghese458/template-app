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
    <section id="contact" style={{ backgroundColor: "#1c1613", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="umami-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 600, color: "#e8552c" }}>11</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(245,236,224,0.18)" }} />
              <span style={{ fontSize: "12px", fontWeight: 600, color: "#c4b6a8", letterSpacing: "0.08em", textTransform: "uppercase" }}>Contact</span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: 0, lineHeight: 1.2 }}>
            Let&apos;s build a menu.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#c4b6a8", margin: 0, maxWidth: "440px" }}>
            A residency, a pop-up, a consulting project, or just a table for two — send a message and I&apos;ll reply within a day.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/theomarchetti", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "#786a5e", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f5ece0", textDecoration: "none", borderBottom: "1px solid rgba(245,236,224,0.2)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="umami-success">
              <p style={{ fontSize: "17px", color: "#f5ece0", margin: 0, fontWeight: 600 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#c4b6a8", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="umami-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="umami-field">
                <label htmlFor="contact-message" className="umami-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's the occasion?"
                  className="umami-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="umami-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .umami-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .umami-success {
          border: 1px solid rgba(232,85,44,0.4);
          border-radius: 14px;
          padding: 44px 30px;
          background-color: #231b17;
          text-align: center;
        }
        .umami-form { display: flex; flex-direction: column; gap: 18px; }
        .umami-field { display: flex; flex-direction: column; gap: 7px; }
        .umami-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; color: #c4b6a8; text-transform: uppercase; }
        .umami-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f5ece0;
          background-color: #15110f;
          border: 1px solid rgba(245,236,224,0.14);
          border-radius: 10px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .umami-input::placeholder { color: #786a5e; }
        .umami-input:focus { border-color: #e8552c; }
        .umami-submit-btn {
          font-size: 14.5px;
          font-weight: 600;
          color: #15110f;
          background-image: linear-gradient(120deg, #e8552c, #ff8a4c);
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .umami-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(232,85,44,0.35); }
        .umami-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .umami-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="umami-field">
      <label htmlFor={id} className="umami-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="umami-input" />
    </div>
  );
}
