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
    <section id="contact" style={{ backgroundColor: "#04141d", padding: "clamp(56px, 9vw, 112px) 20px", borderTop: "1px solid rgba(255,255,255,0.09)" }}>
      <div className="marea-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <SectionLabel index="10" label="Get In Touch" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="marea-h2-static" style={{ margin: 0 }}>
            Got a site worth surveying?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#9fc0c2", margin: 0, maxWidth: "440px" }}>
            Field technician roles, research collaborations, or a dataset that needs a second pair of eyes — send the brief.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/marisolvega", href: OWNER.linkedin },
              { label: "Scholar", value: "scholar.google.com/marisolvega", href: OWNER.scholar },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#5c7c80", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#eaf6f5", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.18)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="marea-success">
              <p style={{ fontSize: "17px", color: "#eaf6f5", margin: 0, fontWeight: 700 }}>Message received.</p>
              <p style={{ fontSize: "12.5px", color: "#9fc0c2", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="marea-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="marea-field">
                <label htmlFor="contact-message" className="marea-field-label">Project brief</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="What are we surveying?"
                  className="marea-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="marea-submit-btn">
                {status === "sending" ? "Sending…" : "Send Brief"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .marea-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .marea-success {
          border: 1px solid rgba(47,226,196,0.4);
          border-radius: 10px;
          padding: 44px 30px;
          background-color: #071c27;
          text-align: center;
        }
        .marea-form { display: flex; flex-direction: column; gap: 18px; }
        .marea-field { display: flex; flex-direction: column; gap: 7px; }
        .marea-field-label { font-size: 10.5px; font-weight: 700; letter-spacing: 0.04em; color: #9fc0c2; text-transform: uppercase; }
        .marea-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #eaf6f5;
          background-color: #071c27;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 4px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .marea-input::placeholder { color: #5c7c80; }
        .marea-input:focus { border-color: #2fe2c4; }
        .marea-submit-btn {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: #04141d;
          background-color: #2fe2c4;
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
        }
        .marea-submit-btn:hover:not(:disabled) { background-color: #1cb89f; transform: translateY(-2px); box-shadow: 0 10px 22px rgba(47,226,196,0.35); }
        .marea-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .marea-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="marea-field">
      <label htmlFor={id} className="marea-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="marea-input" />
    </div>
  );
}
