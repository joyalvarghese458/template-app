"use client";

import { useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { PROFILE } from "../_data/portfolio";
import { ease, viewport } from "../_utils/motion";

type Status = "idle" | "sending" | "sent";

function MagneticBtn({ children, href }: { children: React.ReactNode; href: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 250, damping: 20 });
  const sy = useSpring(y, { stiffness: 250, damping: 20 });

  const onMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = ref.current!.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.35);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.35);
  };
  const onLeave = () => { x.set(0); y.set(0); };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy, display: "inline-block", textDecoration: "none" }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewport);
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1600);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--i-elevated)",
    border: "1px solid var(--i-border)",
    borderRadius: "0.5rem",
    padding: "0.875rem 1.125rem",
    fontSize: "0.9rem",
    color: "var(--i-ink)",
    outline: "none",
    transition: "border-color 0.3s ease, box-shadow 0.3s ease",
    fontFamily: "var(--i-font-body)",
    boxSizing: "border-box" as const,
  };

  return (
    <section
      id="contact"
      ref={ref}
      style={{
        borderTop: "1px solid var(--i-border)",
        padding: "5rem 2rem 5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          bottom: "-20%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "60vw",
          height: "60vw",
          background:
            "radial-gradient(circle, rgba(129,140,248,0.06), transparent 70%)",
          filter: "blur(60px)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "5rem",
          alignItems: "start",
          position: "relative",
          zIndex: 1,
        }}
        className="contact-grid"
      >
        {/* Left: CTA copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "1.5rem",
            }}
          >
            <div
              style={{ width: 32, height: 1, background: "var(--i-accent)", opacity: 0.6 }}
            />
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--i-ink-muted)",
              }}
            >
              Get in Touch
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease }}
            style={{
              fontSize: "clamp(2.5rem, 5vw, 5rem)",
              fontFamily: "var(--i-font-display)",
              fontWeight: 300,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: "0 0 2rem",
              color: "var(--i-ink)",
            }}
          >
            Let&rsquo;s create
            <br />
            <em>something
            <br />extraordinary.</em>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.2, ease }}
            style={{
              fontSize: "0.95rem",
              lineHeight: 1.8,
              color: "var(--i-ink-muted)",
              maxWidth: 380,
              marginBottom: "3rem",
            }}
          >
            Available for select projects in 2026. If you have a vision worth pursuing, I&apos;d love to hear about it.
          </motion.p>

          {/* Status + contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.3, ease }}
            style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
                padding: "0.875rem 1.25rem",
                borderRadius: "0.5rem",
                background: "rgba(129,140,248,0.06)",
                border: "1px solid var(--i-accent-dim)",
                width: "fit-content",
              }}
            >
              <div
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 10px #4ade80",
                  animation: "indieContactPulse 2s ease-in-out infinite",
                }}
              />
              <span
                style={{
                  fontSize: "0.8rem",
                  color: "var(--i-ink)",
                  letterSpacing: "0.04em",
                }}
              >
                {PROFILE.status}
              </span>
            </div>

            <MagneticBtn href={`mailto:${PROFILE.email}`}>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.625rem",
                  fontSize: "0.875rem",
                  color: "var(--i-ink-muted)",
                  padding: "0.5rem 0",
                  transition: "color 0.3s ease",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.color = "var(--i-ink)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLDivElement).style.color = "var(--i-ink-muted)")
                }
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect x="1.5" y="3.5" width="13" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M1.5 5.5l6.5 4 6.5-4" stroke="currentColor" strokeWidth="1.2"/>
                </svg>
                {PROFILE.email}
              </div>
            </MagneticBtn>
          </motion.div>
        </div>

        {/* Right: Form */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1.1, delay: 0.2, ease }}
        >
          {status === "sent" ? (
            <div
              style={{
                padding: "3rem",
                border: "1px solid var(--i-border)",
                borderRadius: "0.75rem",
                background: "var(--i-surface)",
                textAlign: "center",
              }}
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "rgba(129,140,248,0.1)",
                  border: "1px solid var(--i-accent)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 1.5rem",
                }}
              >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 10l4.5 4.5L16 6" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3
                style={{
                  fontSize: "1.25rem",
                  fontFamily: "var(--i-font-display)",
                  fontWeight: 300,
                  color: "var(--i-ink)",
                  marginBottom: "0.75rem",
                }}
              >
                Message received.
              </h3>
              <p style={{ fontSize: "0.875rem", color: "var(--i-ink-muted)", lineHeight: 1.7 }}>
                I&apos;ll be in touch within 48 hours. Looking forward to it.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.25rem",
                padding: "2.5rem",
                border: "1px solid var(--i-border)",
                borderRadius: "0.75rem",
                background: "var(--i-surface)",
              }}
            >
              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--i-ink-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  placeholder="Your name"
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--i-accent)";
                    (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px var(--i-accent-dim)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--i-border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--i-ink-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  required
                  placeholder="you@studio.io"
                  style={inputStyle}
                  onFocus={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--i-accent)";
                    (e.target as HTMLInputElement).style.boxShadow = "0 0 0 3px var(--i-accent-dim)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLInputElement).style.borderColor = "var(--i-border)";
                    (e.target as HTMLInputElement).style.boxShadow = "none";
                  }}
                />
              </div>

              <div>
                <label
                  style={{
                    display: "block",
                    fontSize: "0.7rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--i-ink-muted)",
                    marginBottom: "0.5rem",
                  }}
                >
                  Project Brief
                </label>
                <textarea
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  style={{
                    ...inputStyle,
                    resize: "vertical",
                    minHeight: "100px",
                  }}
                  onFocus={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "var(--i-accent)";
                    (e.target as HTMLTextAreaElement).style.boxShadow = "0 0 0 3px var(--i-accent-dim)";
                  }}
                  onBlur={(e) => {
                    (e.target as HTMLTextAreaElement).style.borderColor = "var(--i-border)";
                    (e.target as HTMLTextAreaElement).style.boxShadow = "none";
                  }}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === "sending"}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: "1rem",
                  borderRadius: "0.5rem",
                  border: "1px solid var(--i-accent)",
                  background:
                    status === "sending"
                      ? "var(--i-accent-dim)"
                      : "var(--i-accent)",
                  color: status === "sending" ? "var(--i-accent)" : "#050508",
                  fontSize: "0.875rem",
                  fontWeight: 600,
                  letterSpacing: "0.06em",
                  cursor: status === "sending" ? "wait" : "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "var(--i-font-body)",
                }}
              >
                {status === "sending" ? "Sending…" : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.div>
      </div>

      <style>{`
        @keyframes indieContactPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
