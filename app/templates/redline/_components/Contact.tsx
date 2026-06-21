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
    <section id="contact" style={{ backgroundColor: "#0d0d0f", padding: "clamp(56px, 9vw, 112px) 20px", borderTop: "1px solid rgba(255,255,255,0.08)" }}>
      <div className="redline-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <SectionLabel index="10" label="Get In Touch" />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: 0, lineHeight: 1.1, textTransform: "uppercase" }}>
            Got a part to design?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#9a9aa0", margin: 0, maxWidth: "440px" }}>
            Race components, production tooling, or a mechanism that needs to survive the real world — send the brief.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/axelbrennan", href: OWNER.linkedin },
              { label: "GitHub", value: "github.com/axelbrennan", href: OWNER.github },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "11px", fontWeight: 700, color: "#5e5e66", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f2f2f0", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="redline-success">
              <p style={{ fontSize: "17px", color: "#f2f2f0", margin: 0, fontWeight: 700 }}>Message received.</p>
              <p style={{ fontSize: "12.5px", color: "#9a9aa0", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="redline-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="redline-field">
                <label htmlFor="contact-message" className="redline-field-label">Project brief</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are we engineering?"
                  className="redline-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="redline-submit-btn">
                {status === "sending" ? "Sending…" : "Send Brief"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .redline-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .redline-success {
          border: 1px solid rgba(225,6,0,0.4);
          border-radius: 10px;
          padding: 44px 30px;
          background-color: #16161a;
          text-align: center;
        }
        .redline-form { display: flex; flex-direction: column; gap: 18px; }
        .redline-field { display: flex; flex-direction: column; gap: 7px; }
        .redline-field-label { font-family: var(--font-display, sans-serif); font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; color: #9a9aa0; text-transform: uppercase; }
        .redline-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f2f2f0;
          background-color: #16161a;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 4px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .redline-input::placeholder { color: #5e5e66; }
        .redline-input:focus { border-color: #e10600; }
        .redline-submit-btn {
          font-family: var(--font-display, sans-serif);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          color: #f2f2f0;
          background-color: #e10600;
          border: none;
          border-radius: 4px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .redline-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(225,6,0,0.35); }
        .redline-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .redline-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="redline-field">
      <label htmlFor={id} className="redline-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="redline-input" />
    </div>
  );
}
