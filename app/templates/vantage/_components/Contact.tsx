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
    <section id="contact" style={{ backgroundColor: "#17140f", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="vtg-contact-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#17916f" }}>07</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(246,243,234,0.25)" }} />
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "rgba(246,243,234,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Start An Engagement</span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 42px)", color: "#f6f3ea", margin: 0, lineHeight: 1.15 }}>
            Bring me the decision you&apos;re avoiding.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(246,243,234,0.65)", margin: 0, maxWidth: "440px" }}>
            A 20-minute call is enough to know if this is the right fit — for the problem and for the timeline.
          </motion.p>

          <motion.a
            variants={fadeUp}
            href={OWNER.calendly}
            className="vtg-cal-card"
          >
            <span className="vtg-cal-card-label">Prefer to talk first?</span>
            <span className="vtg-cal-card-cta">Book a 20-minute call →</span>
          </motion.a>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "in/meera-anand", href: OWNER.linkedin },
              { label: "Based in", value: OWNER.location, href: undefined },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(246,243,234,0.4)", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                {link.href ? (
                  <a href={link.href} style={{ fontSize: "14px", color: "#f6f3ea", textDecoration: "none", borderBottom: "1px solid rgba(246,243,234,0.24)" }}>{link.value}</a>
                ) : (
                  <span style={{ fontSize: "14px", color: "#f6f3ea" }}>{link.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="vtg-success">
              <p style={{ fontSize: "17px", color: "#f6f3ea", margin: 0, fontWeight: 700 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "rgba(246,243,234,0.6)", margin: "8px 0 0" }}>I&apos;ll reply within one business day.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="vtg-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-company" label="Company" name="company" value={form.company} onChange={handleChange} placeholder="Where you work" />
              <div className="vtg-field">
                <label htmlFor="contact-message" className="vtg-field-label">What&apos;s the decision?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="A few lines on the problem you're facing"
                  className="vtg-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="vtg-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .vtg-contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .vtg-cal-card {
          display: flex;
          flex-direction: column;
          gap: 4px;
          border: 1px solid rgba(23,145,111,0.4);
          background-color: rgba(23,145,111,0.1);
          border-radius: 12px;
          padding: 16px 18px;
          text-decoration: none;
          width: fit-content;
          transition: transform 0.2s, background-color 0.2s;
        }
        .vtg-cal-card:hover { transform: translateY(-2px); background-color: rgba(23,145,111,0.16); }
        .vtg-cal-card-label { font-size: 11px; color: rgba(246,243,234,0.55); }
        .vtg-cal-card-cta { font-family: var(--font-display, serif); font-weight: 600; font-size: 16px; color: #f6f3ea; }
        .vtg-success {
          border: 1px solid rgba(23,145,111,0.4);
          border-radius: 16px;
          padding: 44px 30px;
          background-color: rgba(246,243,234,0.04);
          text-align: center;
        }
        .vtg-form { display: flex; flex-direction: column; gap: 18px; }
        .vtg-field { display: flex; flex-direction: column; gap: 7px; }
        .vtg-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.05em; color: rgba(246,243,234,0.55); text-transform: uppercase; }
        .vtg-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f6f3ea;
          background-color: rgba(246,243,234,0.06);
          border: 1px solid rgba(246,243,234,0.16);
          border-radius: 8px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .vtg-input::placeholder { color: rgba(246,243,234,0.35); }
        .vtg-input:focus { border-color: #17916f; }
        .vtg-submit-btn {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.01em;
          font-size: 14px;
          font-weight: 700;
          color: #17140f;
          background-color: #f6f3ea;
          border: none;
          border-radius: 6px;
          padding: 13px 28px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .vtg-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(246,243,234,0.18); }
        .vtg-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .vtg-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="vtg-field">
      <label htmlFor={id} className="vtg-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="vtg-input" />
    </div>
  );
}
