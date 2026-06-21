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
    <section id="contact" style={{ backgroundColor: "#1f2421", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="strata-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "13px", fontWeight: 700, color: "#f15a24" }}>06</span>
              <span style={{ width: "24px", height: "2px", backgroundColor: "#eef0ec" }} />
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", fontWeight: 600, color: "#8b8d87", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Contact
              </span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#eef0ec", margin: 0, lineHeight: 1.08, textTransform: "uppercase" }}>
            Have a site to spec?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#a9ada6", margin: 0, maxWidth: "440px" }}>
            New construction, a structural review, or a permit set that needs a stamp — send the details and I&apos;ll follow up.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/owencastillo", href: OWNER.linkedin },
              { label: "License", value: OWNER.license, href: undefined },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 600, color: "#6f756e", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                {link.href ? (
                  <a href={link.href} style={{ fontSize: "14px", color: "#eef0ec", textDecoration: "none", borderBottom: "1px solid rgba(238,240,236,0.3)" }}>{link.value}</a>
                ) : (
                  <span style={{ fontSize: "14px", color: "#eef0ec" }}>{link.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="strata-success">
              <p style={{ fontSize: "17px", color: "#1f2421", margin: 0, fontWeight: 700 }}>Request received.</p>
              <p style={{ fontSize: "12.5px", color: "#5c655e", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="strata-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="strata-field">
                <label htmlFor="contact-message" className="strata-field-label">Project details</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are we building?"
                  className="strata-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="strata-submit-btn">
                {status === "sending" ? "Sending…" : "Request a Quote"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .strata-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .strata-success {
          border: 1.5px solid #eef0ec;
          padding: 44px 30px;
          background-color: #f15a24;
          text-align: center;
        }
        .strata-form { display: flex; flex-direction: column; gap: 18px; }
        .strata-field { display: flex; flex-direction: column; gap: 7px; }
        .strata-field-label { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 600; letter-spacing: 0.04em; color: #8b8d87; text-transform: uppercase; }
        .strata-input {
          font-family: var(--font-mono, monospace);
          font-size: 14px;
          color: #eef0ec;
          background-color: #2a3029;
          border: 1.5px solid #454c45;
          border-radius: 4px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .strata-input::placeholder { color: #6f756e; }
        .strata-input:focus { border-color: #f15a24; }
        .strata-submit-btn {
          font-family: var(--font-mono, monospace);
          font-size: 13.5px;
          font-weight: 700;
          color: #fff;
          background-color: #f15a24;
          border: 1.5px solid #f15a24;
          border-radius: 4px;
          padding: 14px 28px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .strata-submit-btn:hover:not(:disabled) { transform: translate(-2px, -2px); box-shadow: 3px 3px 0 #eef0ec; }
        .strata-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .strata-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="strata-field">
      <label htmlFor={id} className="strata-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="strata-input" />
    </div>
  );
}
