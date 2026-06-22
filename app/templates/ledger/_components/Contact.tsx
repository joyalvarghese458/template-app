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
    <section id="contact" style={{ backgroundColor: "#f8f3e7", padding: "clamp(56px, 9vw, 112px) 20px", borderTop: "1px solid rgba(22,41,31,0.12)" }}>
      <div className="ledger-contact-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <SectionLabel index="11" label="Get In Touch" />
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: 0, lineHeight: 1.15 }}>
            Got a set of books to fix?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.7, color: "#4d5f52", margin: 0, maxWidth: "440px" }}>
            Tax filing, bookkeeping cleanup, or year-round advisory — tell me where things stand and I&apos;ll tell you what it takes to get current.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "linkedin.com/in/marcushale", href: OWNER.linkedin },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "11px", fontWeight: 700, color: "#8a9388", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                <a href={link.href} style={{ fontSize: "14px", color: "#16291f", textDecoration: "none", borderBottom: "1px solid rgba(22,41,31,0.2)" }}>{link.value}</a>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="ledger-success">
              <p style={{ fontSize: "17px", color: "#16291f", margin: 0, fontWeight: 700 }}>Message received.</p>
              <p style={{ fontSize: "12.5px", color: "#4d5f52", margin: "8px 0 0" }}>I&apos;ll get back to you within 1–2 business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="ledger-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
              <div className="ledger-field">
                <label htmlFor="contact-message" className="ledger-field-label">What needs reconciling?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your books, filings, or the advisory help you need..."
                  className="ledger-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="ledger-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .ledger-contact-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .ledger-success {
          border: 1px solid rgba(31,92,63,0.35);
          border-radius: 10px;
          padding: 44px 30px;
          background-color: #fffdf7;
          text-align: center;
        }
        .ledger-form { display: flex; flex-direction: column; gap: 18px; }
        .ledger-field { display: flex; flex-direction: column; gap: 7px; }
        .ledger-field-label { font-family: var(--font-body, sans-serif); font-size: 10.5px; font-weight: 700; letter-spacing: 0.03em; color: #4d5f52; text-transform: uppercase; }
        .ledger-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #16291f;
          background-color: #fffdf7;
          border: 1px solid rgba(22,41,31,0.18);
          border-radius: 4px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .ledger-input::placeholder { color: #8a9388; }
        .ledger-input:focus { border-color: #1f5c3f; }
        .ledger-submit-btn {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 600;
          color: #fffdf7;
          background-color: #1f5c3f;
          border: none;
          border-radius: 4px;
          padding: 14px 30px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ledger-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(31,92,63,0.3); }
        .ledger-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .ledger-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="ledger-field">
      <label htmlFor={id} className="ledger-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="ledger-input" />
    </div>
  );
}
