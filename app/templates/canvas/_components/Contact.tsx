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
    <section id="contact" style={{ backgroundColor: "#14110f", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="canvas-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13px", color: "#f5c518" }}>06</span>
              <span style={{ width: "24px", height: "2px", backgroundColor: "#f7f3ea" }} />
              <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12.5px", fontWeight: 700, color: "#9a9182", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Contact
              </span>
            </span>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, fontSize: "clamp(26px, 4.5vw, 40px)", color: "#f7f3ea", margin: 0, lineHeight: 1.18 }}>
            Let&apos;s make something good.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15.5px", lineHeight: 1.7, color: "#bdb4a0", margin: 0, maxWidth: "440px" }}>
            New product, a brand that needs a refresh, or just want a second opinion on a Figma file — send a message.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "Dribbble", value: "dribbble.com/theomarsh", href: OWNER.dribbble },
              { label: "Behance", value: "behance.net/theomarsh", href: OWNER.behance },
              { label: "LinkedIn", value: "linkedin.com/in/theomarsh", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#766c5c", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f7f3ea", textDecoration: "none", borderBottom: "1.5px solid #5b5448" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="canvas-success">
              <p style={{ fontSize: "17px", color: "#14110f", margin: 0, fontWeight: 700 }}>Message sent — nice.</p>
              <p style={{ fontSize: "12.5px", color: "#5b5448", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="canvas-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="canvas-field">
                <label htmlFor="contact-message" className="canvas-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are we making?"
                  className="canvas-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="canvas-submit-btn">
                {status === "sending" ? "Sending…" : "Start a Project"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .canvas-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .canvas-success {
          border: 2px solid #14110f;
          border-radius: 14px;
          padding: 44px 30px;
          background-color: #f5c518;
          text-align: center;
        }
        .canvas-form { display: flex; flex-direction: column; gap: 18px; }
        .canvas-field { display: flex; flex-direction: column; gap: 7px; }
        .canvas-field-label { font-size: 11px; font-weight: 700; letter-spacing: 0.03em; color: #bdb4a0; text-transform: uppercase; }
        .canvas-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f7f3ea;
          background-color: #221d18;
          border: 2px solid #5b5448;
          border-radius: 10px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .canvas-input::placeholder { color: #766c5c; }
        .canvas-input:focus { border-color: #f5c518; }
        .canvas-submit-btn {
          font-size: 14.5px;
          font-weight: 700;
          color: #14110f;
          background-color: #f5c518;
          border: 2px solid #14110f;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .canvas-submit-btn:hover:not(:disabled) { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 #e8402c; }
        .canvas-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        @media (min-width: 860px) {
          .canvas-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="canvas-field">
      <label htmlFor={id} className="canvas-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="canvas-input" />
    </div>
  );
}
