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
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
  };

  return (
    <section
      id="contact"
      style={{
        backgroundColor: "#fbfdf6",
        padding: "120px 24px 160px",
        borderTop: "1px solid #e0e5d5",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "80px",
            alignItems: "start",
          }}
          className="adaline-contact-grid"
        >
          {/* Left — closing statement */}
          <motion.div
            variants={stagger(0.12)}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
            style={{ display: "flex", flexDirection: "column", gap: "32px" }}
          >
            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
                fontSize: "14px",
                fontWeight: 400,
                letterSpacing: "0.02em",
                color: "#0a1d08",
                textTransform: "uppercase",
                margin: 0,
              }}
            >
              Get in Touch
            </motion.p>

            <motion.h2
              variants={fadeUp}
              style={{
                fontFamily: "inherit",
                fontSize: "clamp(32px, 3.5vw, 47px)",
                fontWeight: 400,
                lineHeight: 0.98,
                letterSpacing: "-1.88px",
                color: "#0a1d08",
                margin: 0,
              }}
            >
              Let's build something meaningful together.
            </motion.h2>

            <motion.p
              variants={fadeUp}
              style={{
                fontFamily: "inherit",
                fontSize: "18px",
                fontWeight: 400,
                lineHeight: 1.67,
                letterSpacing: "-0.72px",
                color: "#0a1d08",
                opacity: 0.65,
                margin: 0,
                maxWidth: "440px",
              }}
            >
              Whether you're building a new system from scratch or untangling a complex one, I'd love to hear about your project.
            </motion.p>

            <motion.div
              variants={fadeUp}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              {[
                {
                  label: "Email",
                  value: OWNER.email,
                  href: `mailto:${OWNER.email}`,
                },
                {
                  label: "LinkedIn",
                  value: "linkedin.com/in/alexmorgan",
                  href: OWNER.linkedin,
                },
                {
                  label: "GitHub",
                  value: "github.com/alexmorgan",
                  href: OWNER.github,
                },
              ].map((link) => (
                <div key={link.label} style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                  <span
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.02em",
                      color: "#0a1d08",
                      opacity: 0.4,
                      textTransform: "uppercase",
                      minWidth: "64px",
                    }}
                  >
                    {link.label}
                  </span>
                  <a
                    href={link.href}
                    style={{
                      fontFamily: "inherit",
                      fontSize: "14px",
                      fontWeight: 400,
                      letterSpacing: "-0.56px",
                      color: "#0a1d08",
                      textDecoration: "none",
                      borderBottom: "1px solid #e0e5d5",
                      paddingBottom: "2px",
                      transition: "border-color 0.2s",
                    }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.borderColor = "#0a1d08")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.borderColor = "#e0e5d5")
                    }
                  >
                    {link.value}
                  </a>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={VIEWPORT}
          >
            {status === "sent" ? (
              <div
                style={{
                  border: "1px solid #e0e5d5",
                  borderRadius: "8px",
                  padding: "48px 40px",
                  backgroundColor: "#eff2e8",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "16px",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: "48px",
                    height: "48px",
                    borderRadius: "9999px",
                    backgroundColor: "#d7e8b5",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M4 10L8 14L16 6"
                      stroke="#203b14"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <p
                  style={{
                    fontFamily: "inherit",
                    fontSize: "18px",
                    fontWeight: 400,
                    letterSpacing: "-0.72px",
                    color: "#0a1d08",
                    margin: 0,
                  }}
                >
                  Message received.
                </p>
                <p
                  style={{
                    fontFamily: "inherit",
                    fontSize: "14px",
                    letterSpacing: "-0.56px",
                    color: "#0a1d08",
                    opacity: 0.6,
                    margin: 0,
                  }}
                >
                  I'll be in touch within 1–2 business days.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "24px",
                }}
              >
                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label
                    htmlFor="contact-name"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.02em",
                      color: "#0a1d08",
                      textTransform: "uppercase",
                      opacity: 0.55,
                    }}
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0a1d08";
                      e.currentTarget.style.outline = "none";
                    }}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e5d5")}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label
                    htmlFor="contact-email"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.02em",
                      color: "#0a1d08",
                      textTransform: "uppercase",
                      opacity: 0.55,
                    }}
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    style={inputStyle}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0a1d08";
                      e.currentTarget.style.outline = "none";
                    }}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e5d5")}
                  />
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
                  <label
                    htmlFor="contact-message"
                    style={{
                      fontFamily: "'JetBrains Mono', monospace",
                      fontSize: "12px",
                      letterSpacing: "0.02em",
                      color: "#0a1d08",
                      textTransform: "uppercase",
                      opacity: 0.55,
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={6}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    style={{ ...inputStyle, resize: "vertical", minHeight: "140px" }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = "#0a1d08";
                      e.currentTarget.style.outline = "none";
                    }}
                    onBlur={(e) => (e.currentTarget.style.borderColor = "#e0e5d5")}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  style={{
                    fontFamily: "inherit",
                    fontSize: "14px",
                    fontWeight: 700,
                    letterSpacing: "-0.56px",
                    color: "#fbfdf6",
                    backgroundColor: status === "sending" ? "#7a6240" : "#4a3212",
                    border: "none",
                    borderRadius: "20px",
                    padding: "14px 32px",
                    cursor: status === "sending" ? "not-allowed" : "pointer",
                    transition: "background-color 0.2s",
                    alignSelf: "flex-start",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "sending")
                      e.currentTarget.style.backgroundColor = "#203b14";
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "sending")
                      e.currentTarget.style.backgroundColor = "#4a3212";
                  }}
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
          .adaline-contact-grid {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  );
}

const inputStyle: React.CSSProperties = {
  fontFamily: "inherit",
  fontSize: "16px",
  fontWeight: 400,
  letterSpacing: "-0.04em",
  color: "#0a1d08",
  backgroundColor: "#fbfdf6",
  border: "1px solid #e0e5d5",
  borderRadius: "8px",
  padding: "12px 16px",
  width: "100%",
  transition: "border-color 0.2s",
};
