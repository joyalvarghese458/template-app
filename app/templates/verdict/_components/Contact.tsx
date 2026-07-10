"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

interface FormState {
  name: string;
  company: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", company: "", message: "" });
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
    <section id="contact" style={{ backgroundColor: "#0d0d10", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="vd-contact-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#d9b06a" }}>07</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(246,242,232,0.25)" }} />
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "rgba(246,242,232,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Request A Consultation</span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 700, fontSize: "clamp(28px, 4.8vw, 42px)", color: "#f6f2e8", margin: 0, lineHeight: 1.15 }}>
            Bring me the matter you can&apos;t afford to lose.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(246,242,232,0.62)", margin: 0, maxWidth: "440px" }}>
            A confidential 20-minute call is enough to know if this is the right counsel for your matter — and the right timeline.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={OWNER.calendly}
            className="vd-cal-card"
          >
            <span className="vd-cal-card-label">Prefer to talk first?</span>
            <span className="vd-cal-card-cta">Book a confidential case review →</span>
          </motion.a>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "in/layla-haddad", href: OWNER.linkedin },
              { label: "Based in", value: OWNER.location, href: undefined },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(246,242,232,0.4)", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                {link.href ? (
                  <a href={link.href} style={{ fontSize: "14px", color: "#f6f2e8", textDecoration: "none", borderBottom: "1px solid rgba(246,242,232,0.24)" }}>{link.value}</a>
                ) : (
                  <span style={{ fontSize: "14px", color: "#f6f2e8" }}>{link.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="vd-success">
              <p style={{ fontSize: "17px", color: "#f6f2e8", margin: 0, fontWeight: 700 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "rgba(246,242,232,0.6)", margin: "8px 0 0" }}>I&apos;ll reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="vd-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-company" label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Where you work" />
              <div className="vd-field">
                <label htmlFor="contact-message" className="vd-field-label">What&apos;s the matter?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="A few lines on the dispute or deal you're facing"
                  className="vd-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="vd-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .vd-contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .vd-cal-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border: 1px solid rgba(182,144,63,0.4);
          background-color: rgba(182,144,63,0.1);
          border-radius: 12px;
          padding: 16px 18px;
          text-decoration: none;
          width: fit-content;
          transition: transform 0.2s, background-color 0.2s;
        }
        .vd-cal-card:hover { transform: translateY(-2px); background-color: rgba(182,144,63,0.16); }
        .vd-cal-card-label { font-size: 11px; color: rgba(246,242,232,0.55); }
        .vd-cal-card-cta { font-family: var(--font-display, serif); font-weight: 700; font-size: 16px; color: #f6f2e8; }
        .vd-success {
          border: 1px solid rgba(182,144,63,0.4);
          border-radius: 16px;
          padding: 44px 30px;
          background-color: rgba(246,242,232,0.04);
          text-align: center;
        }
        .vd-form { display: flex; flex-direction: column; gap: 18px; }
        .vd-field { display: flex; flex-direction: column; gap: 7px; }
        .vd-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.05em; color: rgba(246,242,232,0.55); text-transform: uppercase; }
        .vd-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f6f2e8;
          background-color: rgba(246,242,232,0.06);
          border: 1px solid rgba(246,242,232,0.16);
          border-radius: 8px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .vd-input::placeholder { color: rgba(246,242,232,0.35); }
        .vd-input:focus { border-color: #b6903f; }
        .vd-submit-btn {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.01em;
          font-size: 14px;
          font-weight: 700;
          color: #0d0d10;
          background-color: #f6f2e8;
          border: none;
          border-radius: 6px;
          padding: 13px 28px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .vd-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(246,242,232,0.18); }
        .vd-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .vd-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="vd-field">
      <label htmlFor={id} className="vd-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="vd-input" />
    </div>
  );
}
