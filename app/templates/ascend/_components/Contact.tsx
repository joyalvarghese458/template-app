"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { slideInLeft, slideInRight, stagger, slideUp, VIEWPORT } from "../_utils/motion";
import { Eyebrow } from "./About";

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
    <section id="contact" style={{ backgroundColor: "#fff", padding: "clamp(56px, 9vw, 112px) 20px", borderTop: "1px solid rgba(28,21,48,0.08)" }}>
      <div className="ascend-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={slideInLeft}><Eyebrow label="Get In Touch" /></motion.div>
          <motion.h2 variants={slideInLeft} style={{ fontWeight: 800, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#1c1530", margin: 0, lineHeight: 1.18 }}>
            Ready for your next role?
          </motion.h2>
          <motion.p variants={slideInLeft} style={{ fontSize: "15.5px", lineHeight: 1.7, color: "#6b6280", margin: 0, maxWidth: "440px" }}>
            Book a free 20-minute call. We&apos;ll talk through where you&apos;re stuck and whether coaching is the right next step.
          </motion.p>
          <motion.div variants={slideInLeft} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/adriancole", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 700, color: "#a39cb0", textTransform: "uppercase", minWidth: "60px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#1c1530", textDecoration: "none", borderBottom: "1px solid rgba(28,21,48,0.15)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={slideInRight} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="ascend-success">
              <p style={{ fontSize: "17px", fontWeight: 700, color: "#1c1530", margin: 0 }}>Message received.</p>
              <p style={{ fontSize: "13px", color: "#6b6280", margin: "8px 0 0" }}>I&apos;ll follow up within 1–2 business days to schedule your call.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="ascend-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="ascend-field">
                <label htmlFor="contact-message" className="ascend-field-label">What are you working on?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your job search..."
                  className="ascend-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="ascend-submit-btn">
                {status === "sending" ? "Sending…" : "Book a Free Call"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .ascend-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .ascend-success {
          border: 1px solid rgba(43,182,115,0.3);
          border-radius: 16px;
          padding: 44px 30px;
          background-color: rgba(43,182,115,0.06);
          text-align: center;
        }
        .ascend-form { display: flex; flex-direction: column; gap: 18px; }
        .ascend-field { display: flex; flex-direction: column; gap: 7px; }
        .ascend-field-label { font-size: 12px; font-weight: 700; color: #6b6280; }
        .ascend-input {
          font-family: inherit;
          font-size: 15px;
          color: #1c1530;
          background-color: #faf8ff;
          border: 1.5px solid rgba(28,21,48,0.1);
          border-radius: 12px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .ascend-input:focus { border-color: #7c5cff; }
        .ascend-submit-btn {
          font-size: 14px;
          font-weight: 700;
          color: #fff;
          background: linear-gradient(120deg, #ff7a59, #ff5fa2, #7c5cff);
          border: none;
          border-radius: 100px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          box-shadow: 0 10px 24px rgba(124,92,255,0.3);
          transition: transform 0.2s;
        }
        .ascend-submit-btn:hover:not(:disabled) { transform: translateY(-2px); }
        .ascend-submit-btn:disabled { opacity: 0.6; cursor: not-allowed; }
        @media (min-width: 860px) {
          .ascend-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="ascend-field">
      <label htmlFor={id} className="ascend-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="ascend-input" />
    </div>
  );
}
