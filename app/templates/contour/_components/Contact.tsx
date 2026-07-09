"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

interface FormState {
  name: string;
  organization: string;
  message: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({ name: "", organization: "", message: "" });
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
    <section id="contact" style={{ backgroundColor: "#212a1f", padding: "clamp(56px, 9vw, 112px) 20px" }}>
      <div className="ctr-contact-grid" style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
          <motion.div variants={fadeUp}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#6f9459" }}>08</span>
              <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(243,240,229,0.25)" }} />
              <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "rgba(243,240,229,0.55)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Start A Site Visit</span>
            </div>
          </motion.div>
          <motion.h2 variants={fadeUp} style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 42px)", color: "#f3f0e5", margin: 0, lineHeight: 1.15 }}>
            Tell me about the ground you&apos;re working with.
          </motion.h2>
          <motion.p variants={fadeUp} style={{ fontSize: "15px", lineHeight: 1.75, color: "rgba(243,240,229,0.65)", margin: 0, maxWidth: "440px" }}>
            A first site walk tells me more than any brief — send a few details and I&apos;ll follow up to schedule one.
          </motion.p>

          <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {[
              { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
              { label: "LinkedIn", value: "in/owen-marsh", href: OWNER.linkedin },
              { label: "Based in", value: OWNER.location, href: undefined },
            ].map((link) => (
              <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "baseline" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, color: "rgba(243,240,229,0.4)", textTransform: "uppercase", minWidth: "64px" }}>{link.label}</span>
                {link.href ? (
                  <a href={link.href} style={{ fontSize: "14px", color: "#f3f0e5", textDecoration: "none", borderBottom: "1px solid rgba(243,240,229,0.24)" }}>{link.value}</a>
                ) : (
                  <span style={{ fontSize: "14px", color: "#f3f0e5" }}>{link.value}</span>
                )}
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          {status === "sent" ? (
            <div className="ctr-success">
              <p style={{ fontSize: "17px", color: "#f3f0e5", margin: 0, fontWeight: 700 }}>Message sent.</p>
              <p style={{ fontSize: "12.5px", color: "rgba(243,240,229,0.6)", margin: "8px 0 0" }}>I&apos;ll reply within two business days.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="ctr-form">
              <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
              <Field id="contact-organization" label="Organization" name="organization" value={form.organization} onChange={handleChange} placeholder="City, developer, or firm" />
              <div className="ctr-field">
                <label htmlFor="contact-message" className="ctr-field-label">About the site</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={6}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Location, size, and what you're hoping the site will do"
                  className="ctr-input"
                  style={{ resize: "vertical", minHeight: "130px" }}
                />
              </div>
              <button type="submit" disabled={status === "sending"} className="ctr-submit-btn">
                {status === "sending" ? "Sending…" : "Send Message"}
              </button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        .ctr-contact-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .ctr-success {
          border: 1px solid rgba(111,148,89,0.4);
          border-radius: 14px;
          padding: 44px 30px;
          background-color: rgba(243,240,229,0.04);
          text-align: center;
        }
        .ctr-form { display: flex; flex-direction: column; gap: 18px; }
        .ctr-field { display: flex; flex-direction: column; gap: 7px; }
        .ctr-field-label { font-size: 10.5px; font-weight: 600; letter-spacing: 0.05em; color: rgba(243,240,229,0.55); text-transform: uppercase; }
        .ctr-input {
          font-family: var(--font-body, sans-serif);
          font-size: 15px;
          color: #f3f0e5;
          background-color: rgba(243,240,229,0.06);
          border: 1px solid rgba(243,240,229,0.16);
          border-radius: 6px;
          padding: 12px 14px;
          width: 100%;
          outline: none;
          transition: border-color 0.2s;
        }
        .ctr-input::placeholder { color: rgba(243,240,229,0.35); }
        .ctr-input:focus { border-color: #6f9459; }
        .ctr-submit-btn {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.01em;
          font-size: 14px;
          font-weight: 700;
          color: #212a1f;
          background-color: #f3f0e5;
          border: none;
          border-radius: 6px;
          padding: 13px 28px;
          cursor: pointer;
          align-self: flex-start;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ctr-submit-btn:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 10px 24px rgba(243,240,229,0.18); }
        .ctr-submit-btn:disabled { opacity: 0.55; cursor: not-allowed; }
        @media (min-width: 860px) {
          .ctr-contact-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 64px; }
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
    <div className="ctr-field">
      <label htmlFor={id} className="ctr-field-label">{label}</label>
      <input id={id} type={type} name={name} required value={value} onChange={onChange} placeholder={placeholder} className="ctr-input" />
    </div>
  );
}
