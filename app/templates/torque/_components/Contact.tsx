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
    <section
      id="contact"
      style={{
        backgroundColor: "#0d1117",
        padding: "clamp(64px, 10vw, 128px) 24px",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "64px", alignItems: "start" }}
          className="torque-contact-grid"
        >
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{ display: "flex", flexDirection: "column", gap: "28px" }}
          >
            <motion.div variants={fadeUp}>
              <SectionLabel index="06" label="Get In Touch" />
            </motion.div>

            <motion.h2
              variants={fadeUp}
              style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, color: "#eef1f5", margin: 0, lineHeight: 1.15 }}
            >
              Have a part that needs designing right?
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{ fontSize: "16px", lineHeight: 1.7, color: "#8a93a3", margin: 0, maxWidth: "440px" }}
            >
              Whether it's a structural review, a DFM pass before tooling, or a full design from spec — I'd like to hear about it.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { label: "Email", value: OWNER.email, href: `mailto:${OWNER.email}` },
                { label: "LinkedIn", value: "linkedin.com/in/marcushale", href: OWNER.linkedin },
              ].map((link) => (
                <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", color: "#8a93a3", textTransform: "uppercase", minWidth: "64px" }}>
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    style={{ fontSize: "14px", color: "#eef1f5", textDecoration: "none", borderBottom: "1px solid rgba(255,255,255,0.15)", paddingBottom: "2px", transition: "border-color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#3fa9f5")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)")}
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
            {status === "sent" ? (
              <div
                style={{
                  border: "1px solid rgba(45,212,191,0.3)",
                  borderRadius: "10px",
                  padding: "48px 36px",
                  backgroundColor: "#11151b",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "14px",
                  textAlign: "center",
                }}
              >
                <div style={{ width: "44px", height: "44px", borderRadius: "9999px", backgroundColor: "rgba(45,212,191,0.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10L8 14L16 6" stroke="#2dd4bf" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <p style={{ fontSize: "17px", color: "#eef1f5", margin: 0 }}>Message received.</p>
                <p style={{ fontSize: "13.5px", color: "#8a93a3", margin: 0 }}>I&apos;ll get back to you within 1–2 business days.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                <Field id="contact-name" label="Name" name="name" value={form.name} onChange={handleChange} placeholder="Your name" />
                <Field id="contact-email" label="Email" name="email" type="email" value={form.email} onChange={handleChange} placeholder="your@email.com" />
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label htmlFor="contact-message" style={labelStyle}>Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about the part or system..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "130px" }}
                    onFocus={(e) => (e.currentTarget.style.borderColor = "#3fa9f5")}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    fontSize: "14px",
                    fontWeight: 700,
                    color: "#0b0e13",
                    backgroundColor: status === "sending" ? "#a8541c" : "#ff6a1f",
                    border: "none",
                    borderRadius: "4px",
                    padding: "14px 32px",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => { if (status !== "sending") e.currentTarget.style.backgroundColor = "#ff8347"; }}
                  onMouseLeave={(e) => { if (status !== "sending") e.currentTarget.style.backgroundColor = "#ff6a1f"; }}
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .torque-contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
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
    <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
      <label htmlFor={id} style={labelStyle}>{label}</label>
      <input
        id={id}
        type={type}
        name={name}
        required
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={inputStyle}
        onFocus={(e) => (e.currentTarget.style.borderColor = "#3fa9f5")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)")}
      />
    </div>
  );
}

const labelStyle: React.CSSProperties = {
  fontFamily: "var(--font-mono, monospace)",
  fontSize: "11px",
  letterSpacing: "0.04em",
  color: "#8a93a3",
  textTransform: "uppercase",
};

const inputStyle: React.CSSProperties = {
  fontSize: "15px",
  color: "#eef1f5",
  backgroundColor: "#11151b",
  border: "1px solid rgba(255,255,255,0.12)",
  borderRadius: "6px",
  padding: "12px 16px",
  width: "100%",
  transition: "border-color 0.2s",
  outline: "none",
};
