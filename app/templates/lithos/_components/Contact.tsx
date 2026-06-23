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
    <section id="contact" style={{ backgroundColor: "#120e0a", padding: "clamp(56px, 9vw, 112px) 20px", borderTop: "1px solid rgba(255,255,255,0.09)" }}>
      <div className="lithos-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <SectionLabel index="10" label="Get In Touch" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="lithos-h2-static" style={{ margin: 0 }}>
            Got an outcrop worth mapping?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#b3a392", margin: 0, maxWidth: "440px" }}>
            Field assistant roles, research collaborations, or a section that needs a second pair of eyes — send the brief.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/maravoss", href: OWNER.linkedin },
              { label: "GitHub", value: "github.com/maravoss", href: OWNER.github },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#6e6152", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#f4ece1", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="lithos-success">
              <p style={{ fontSize: "17px", color: "#f4ece1", margin: 0, fontWeight: 700 }}>Message received.</p>
              <p style={{ fontSize: "12.5px", color: "#b3a392", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="lithos-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="lithos-field">
                <label htmlFor="contact-message" className="lithos-field-label">Project brief</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are we mapping?"
                  className="lithos-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="lithos-submit-btn">
                {status === "sending" ? "Sending…" : "Send Brief"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .lithos-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .lithos-success {
          border: 1px solid rgba(232,112,42,0.4);
          border-radius: 10px;
          padding: 44px 30px;
          background-color: #1c1610;
          text-align: center;
        }
        .lithos-form { display: flex; flex-direction: column; gap: 18px; }
        .lithos-field { display: flex; flex-direction: column; gap: 7px; }
        .lithos-field-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; color: #b3a392; text-transform: uppercase; }
        .lithos-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f4ece1;
          background-color: #1c1610;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 4px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .lithos-input::placeholder { color: #6e6152; }
        .lithos-input:focus { border-color: #e8702a; }
        .lithos-submit-btn {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: #fff;
          background-color: #e8702a;
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .lithos-submit-btn:hover:not(:disabled) { background-color: #d2611f; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(232,112,42,0.35); }
        .lithos-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .lithos-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="lithos-field">
      <label htmlFor={id} className="lithos-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="lithos-input" />
    </div>
  );
}
