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
    <section id="contact" style={{ backgroundColor: "#0c0c18", padding: "clamp(56px, 9vw, 112px) 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="prism-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <SectionLabel index="06" label="Get In Touch" />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f5f4fa", margin: 0, lineHeight: 1.2 }}>
            Got an interface to fix?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#a8a6c0", margin: 0, maxWidth: "440px" }}>
            New product, a stalled redesign, or a design system that needs a real owner — let&apos;s talk it through.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "Dribbble", value: "dribbble.com/miloreyes", href: OWNER.dribbble },
              { label: "Behance", value: "behance.net/miloreyes", href: OWNER.behance },
              { label: "LinkedIn", value: "linkedin.com/in/miloreyes", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#6b6886", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f5f4fa", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="prism-success">
              <p style={{ fontSize: "17px", color: "#f5f4fa", margin: 0, fontWeight: 600 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "#a8a6c0", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="prism-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="prism-field">
                <label htmlFor="contact-message" className="prism-field-label">Message</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are we designing?"
                  className="prism-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="prism-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .prism-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .prism-success {
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 18px;
          padding: 44px 30px;
          background-color: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
          text-align: center;
        }
        .prism-form { display: flex; flex-direction: column; gap: 18px; }
        .prism-field { display: flex; flex-direction: column; gap: 7px; }
        .prism-field-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; color: #a8a6c0; text-transform: uppercase; }
        .prism-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f5f4fa;
          background-color: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 12px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          backdrop-filter: blur(8px);
          transition: border-color 0.2s;
        }
        .prism-input::placeholder { color: #6b6886; }
        .prism-input:focus { border-color: #6c63ff; }
        .prism-submit-btn {
          font-size: 14px;
          font-weight: 700;
          color: #0a0a14;
          background-image: linear-gradient(120deg, #2dd9c4, #6c63ff);
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .prism-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(108,99,255,0.35); }
        .prism-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .prism-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="prism-field">
      <label htmlFor={id} className="prism-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="prism-input" />
    </div>
  );
}
