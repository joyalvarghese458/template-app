"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

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
    <section id="contact" style={{ backgroundColor: "#0d1320", padding: "clamp(56px, 9vw, 112px) 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="cortex-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <SectionLabel index="06" label="Get In Touch" />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f8", margin: 0, lineHeight: 1.18 }}>
            Have a hard data problem?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15.5px", lineHeight: 1.7, color: "#8b93ab", margin: 0, maxWidth: "440px" }}>
            Whether it's a model that needs to ship, a pipeline that needs to scale, or a metric nobody trusts yet — let&apos;s talk.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "GitHub", value: "github.com/ethanpark", href: OWNER.github },
              { label: "LinkedIn", value: "linkedin.com/in/ethanpark", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#5b6378", textTransform: "uppercase", minWidth: "60px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#eef1f8", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="cortex-success">
              <p style={{ fontSize: "17px", color: "#eef1f8", margin: 0 }}>Message received.</p>
              <p style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12.5px", color: "#8b93ab", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="cortex-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="cortex-field">
                <label htmlFor="contact-message" className="cortex-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What's the problem you're solving?"
                  className="cortex-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="cortex-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .cortex-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .cortex-success {
          border: 1px solid rgba(34,211,238,0.3);
          border-radius: 10px;
          padding: 44px 30px;
          background-color: #141b2e;
          text-align: center;
        }
        .cortex-form { display: flex; flex-direction: column; gap: 18px; }
        .cortex-field { display: flex; flex-direction: column; gap: 7px; }
        .cortex-field-label { font-family: var(--font-mono, monospace); font-size: 10.5px; letter-spacing: 0.04em; color: #8b93ab; text-transform: uppercase; }
        .cortex-input {
          font-family: var(--font-display, sans-serif);
          font-size: 15px;
          color: #eef1f8;
          background-color: #0f1525;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 6px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .cortex-input:focus { border-color: #8b5cf6; }
        .cortex-submit-btn {
          font-family: var(--font-mono, monospace);
          font-size: 13px;
          font-weight: 600;
          color: #0a0e17;
          background-image: linear-gradient(120deg, #8b5cf6, #22d3ee);
          border: none;
          border-radius: 6px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: opacity 0.2s;
        }
        .cortex-submit-btn:hover:not(:disabled) { opacity: 0.9; }
        .cortex-submit-btn:disabled { opacity: 0.5; cursor: not-allowed; }
        @media (min-width: 860px) {
          .cortex-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="cortex-field">
      <label htmlFor={id} className="cortex-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="cortex-input" />
    </div>
  );
}
