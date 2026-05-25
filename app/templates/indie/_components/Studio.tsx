"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { SERVICES, TOOLS, CLIENTS, TESTIMONIALS } from "../_data/portfolio";
import { ease, viewport } from "../_utils/motion";

const doubled = [...CLIENTS, ...CLIENTS];

// ── Services accordion row ──────────────────────────────────────────
function ServiceRow({
  service,
  index,
  isOpen,
  onToggle,
  isInView,
}: {
  service: (typeof SERVICES)[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
  isInView: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: index * 0.07, ease }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      style={{
        borderBottom: "1px solid var(--i-border)",
        background: isOpen
          ? "rgba(129,140,248,0.03)"
          : hovered
          ? "rgba(240,240,248,0.02)"
          : "transparent",
        transition: "background 0.3s ease",
      }}
    >
      {/* Row header — always visible */}
      <button
        onClick={onToggle}
        style={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "2.5rem 1fr auto auto",
          gap: "1.25rem",
          alignItems: "center",
          padding: "1.5rem 0",
          background: "none",
          border: "none",
          cursor: "pointer",
          textAlign: "left",
          WebkitTapHighlightColor: "transparent",
        }}
        className="indie-service-row"
      >
        {/* Number */}
        <span
          style={{
            fontSize: "0.68rem",
            letterSpacing: "0.12em",
            color: isOpen ? "var(--i-accent)" : "var(--i-ink-faint)",
            fontVariantNumeric: "tabular-nums",
            transition: "color 0.3s ease",
            paddingTop: "0.15rem",
            flexShrink: 0,
          }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Title */}
        <span
          style={{
            fontSize: "clamp(1.1rem, 2.5vw, 2rem)",
            fontFamily: "var(--i-font-display)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            color: "var(--i-ink)",
            transition: "color 0.3s ease",
            lineHeight: 1.2,
            wordBreak: "break-word",
          }}
        >
          {service.title}
        </span>

        {/* Category tag — desktop only */}
        <span
          style={{
            fontSize: "0.72rem",
            letterSpacing: "0.07em",
            color: "var(--i-ink-muted)",
            whiteSpace: "nowrap",
            display: "none",
          }}
          className="indie-service-cat"
        >
          {service.category}
        </span>

        {/* Toggle icon — 40×40 touch target */}
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.35, ease }}
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            border: `1px solid ${isOpen ? "var(--i-accent)" : "var(--i-border)"}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: isOpen ? "var(--i-accent)" : "var(--i-ink-faint)",
            flexShrink: 0,
            transition: "border-color 0.3s ease, color 0.3s ease, background 0.3s ease",
            background: isOpen ? "rgba(129,140,248,0.06)" : "transparent",
          }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M6 1v10M1 6h10"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
            />
          </svg>
        </motion.div>
      </button>

      {/* Expandable content */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            style={{ overflow: "hidden" }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2.5rem 1fr 1fr",
                gap: "1.25rem",
                paddingBottom: "2rem",
              }}
              className="indie-service-expand"
            >
              {/* Spacer to align with title */}
              <div />

              {/* Description */}
              <div>
                <p
                  style={{
                    fontSize: "0.9rem",
                    lineHeight: 1.85,
                    color: "var(--i-ink-muted)",
                    margin: "0 0 1.5rem",
                    maxWidth: 440,
                  }}
                >
                  {service.desc}
                </p>

                {/* Deliverables */}
                <div>
                  <div
                    style={{
                      fontSize: "0.62rem",
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--i-ink-faint)",
                      marginBottom: "0.75rem",
                    }}
                  >
                    Deliverables
                  </div>
                  <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "0.4rem" }}>
                    {service.deliverables.map((d) => (
                      <li
                        key={d}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "0.625rem",
                          fontSize: "0.82rem",
                          color: "var(--i-ink-muted)",
                        }}
                      >
                        <span
                          style={{
                            width: 4,
                            height: 4,
                            borderRadius: "50%",
                            background: "var(--i-accent)",
                            flexShrink: 0,
                          }}
                        />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Tools used */}
              <div>
                <div
                  style={{
                    fontSize: "0.62rem",
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--i-ink-faint)",
                    marginBottom: "0.75rem",
                  }}
                >
                  Tools
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {service.tools.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontSize: "0.75rem",
                        padding: "0.3rem 0.75rem",
                        borderRadius: "100px",
                        border: "1px solid var(--i-accent)",
                        color: "var(--i-accent)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    marginTop: "2rem",
                    fontSize: "0.78rem",
                    color: "var(--i-ink-muted)",
                    textDecoration: "none",
                    letterSpacing: "0.04em",
                    transition: "color 0.3s ease",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--i-ink)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLAnchorElement).style.color = "var(--i-ink-muted)")
                  }
                >
                  Enquire about this service
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6h8M6 2l4 4-4 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ── Main Studio component ───────────────────────────────────────────
export default function Studio() {
  const servicesRef = useRef<HTMLDivElement>(null);
  const isServicesInView = useInView(servicesRef, { once: true, margin: "-60px" });
  const [openService, setOpenService] = useState<number | null>(0);

  const toggle = (i: number) => setOpenService(openService === i ? null : i);

  return (
    <section id="studio">

      {/* ══ Services accordion — sticky left heading ═══════════════ */}
      <div
        ref={servicesRef}
        style={{
          borderTop: "1px solid var(--i-border)",
          padding: "0 clamp(1.25rem, 4vw, 2rem)",
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "260px 1fr",
            gap: "5rem",
            alignItems: "start",
          }}
          className="indie-studio-outer"
        >
          {/* Sticky left label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={isServicesInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1.0, ease }}
            style={{
              position: "sticky",
              top: "6rem",
              paddingTop: "5rem",
              paddingBottom: "3rem",
            }}
          >
            <div style={{ fontSize: "0.6rem", letterSpacing: "0.16em", color: "var(--i-accent)", textTransform: "uppercase", marginBottom: "2rem" }}>
              05 / Services
            </div>
            <h2
              style={{
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontFamily: "var(--i-font-display)",
                fontWeight: 300,
                letterSpacing: "-0.025em",
                lineHeight: 1.1,
                margin: "0 0 1.5rem",
                color: "var(--i-ink)",
              }}
            >
              What I bring
              <br />
              <em style={{ color: "var(--i-ink-muted)" }}>to every project</em>
            </h2>
            <p style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "var(--i-ink-muted)", margin: "0 0 2rem" }}>
              Six disciplines. One obsession — craft that commands attention.
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: "0.625rem" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--i-accent)" }} />
              <span style={{ fontSize: "0.68rem", color: "var(--i-ink-faint)", letterSpacing: "0.06em" }}>
                Click to expand
              </span>
            </div>
          </motion.div>

          {/* Right: accordion list */}
          <div style={{ paddingTop: "5rem", paddingBottom: "4rem" }}>
            {SERVICES.map((s, i) => (
              <ServiceRow
                key={s.title}
                service={s}
                index={i}
                isOpen={openService === i}
                onToggle={() => toggle(i)}
                isInView={isServicesInView}
              />
            ))}
          </div>
        </div>
      </div>

      {/* ══ Clients marquee ════════════════════════════════════════ */}
      <div
        style={{
          borderTop: "1px solid var(--i-border)",
          borderBottom: "1px solid var(--i-border)",
          padding: "2.5rem 0",
          overflow: "hidden",
          background: "var(--i-surface)",
        }}
      >
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 30, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: "0", width: "max-content" }}
        >
          {doubled.map((client, i) => (
            <span
              key={`${client}-${i}`}
              style={{
                fontSize: "0.72rem",
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--i-ink-faint)",
                whiteSpace: "nowrap",
                padding: "0 2.5rem",
                fontWeight: 500,
                display: "inline-flex",
                alignItems: "center",
                gap: "2.5rem",
              }}
            >
              {client}
              <span style={{ width: 3, height: 3, borderRadius: "50%", background: "var(--i-accent)", opacity: 0.4, flexShrink: 0, display: "inline-block" }} />
            </span>
          ))}
        </motion.div>
      </div>

      {/* ══ Toolkit ════════════════════════════════════════════════ */}
      <div
        style={{
          borderBottom: "1px solid var(--i-border)",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2rem)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 3fr",
              gap: "4rem",
              alignItems: "start",
            }}
            className="indie-tools-grid"
          >
            <div>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.8, ease }}
                style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}
              >
                <div style={{ width: 32, height: 1, background: "var(--i-accent)", opacity: 0.6 }} />
                <span style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--i-ink-muted)" }}>
                  Toolkit
                </span>
              </motion.div>
              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.9, delay: 0.1, ease }}
                style={{
                  fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
                  fontFamily: "var(--i-font-display)",
                  fontWeight: 300,
                  letterSpacing: "-0.02em",
                  lineHeight: 1.2,
                  margin: "0 0 0.75rem",
                  color: "var(--i-ink)",
                }}
              >
                Industry-grade
                <br />
                <em>software stack</em>
              </motion.h3>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.9, delay: 0.2, ease }}
                style={{ fontSize: "0.82rem", lineHeight: 1.75, color: "var(--i-ink-muted)", margin: 0 }}
              >
                12 tools. Every project gets the right pipeline — not the fashionable one.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 1.0, delay: 0.15, ease }}
              style={{ display: "flex", flexWrap: "wrap", gap: "0.625rem", paddingTop: "0.25rem" }}
            >
              {TOOLS.map((tool) => (
                <div
                  key={tool.name}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.5rem",
                    padding: "0.45rem 1rem",
                    borderRadius: "100px",
                    border: "1px solid var(--i-border)",
                    background: "var(--i-surface)",
                    transition: "border-color 0.25s ease, background 0.25s ease",
                    cursor: "default",
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--i-accent)";
                    el.style.background = "var(--i-accent-dim)";
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLDivElement;
                    el.style.borderColor = "var(--i-border)";
                    el.style.background = "var(--i-surface)";
                  }}
                >
                  <span style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--i-ink)", letterSpacing: "0.02em" }}>
                    {tool.name}
                  </span>
                  <span style={{ fontSize: "0.6rem", color: "var(--i-ink-faint)", letterSpacing: "0.07em" }}>
                    {tool.category}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* ══ Testimonials ═══════════════════════════════════════════ */}
      <div
        style={{
          background: "var(--i-surface)",
          borderBottom: "1px solid var(--i-border)",
          padding: "clamp(2.5rem, 5vw, 4rem) clamp(1.25rem, 4vw, 2rem) clamp(3rem, 6vw, 5rem)",
        }}
      >
        <div style={{ maxWidth: 1240, margin: "0 auto" }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={viewport}
            transition={{ duration: 0.8, ease }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "3rem" }}
          >
            <div style={{ width: 32, height: 1, background: "var(--i-accent)", opacity: 0.6 }} />
            <span style={{ fontSize: "0.7rem", letterSpacing: "0.18em", textTransform: "uppercase", color: "var(--i-ink-muted)" }}>
              Client voices
            </span>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "1.25rem",
            }}
            className="indie-testimonials-grid"
          >
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={viewport}
                transition={{ duration: 0.9, delay: i * 0.1, ease }}
                style={{
                  padding: "2rem",
                  border: "1px solid var(--i-border)",
                  borderRadius: "0.625rem",
                  background: "var(--i-elevated)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.25rem",
                  transition: "border-color 0.3s ease",
                }}
                onHoverStart={(e) => {
                  (e.target as HTMLDivElement).style?.setProperty?.("border-color", "var(--i-accent)");
                }}
              >
                {/* Stars */}
                <div style={{ display: "flex", gap: "0.2rem" }}>
                  {Array.from({ length: t.stars }).map((_, si) => (
                    <svg key={si} width="11" height="11" viewBox="0 0 11 11" fill="#818cf8">
                      <path d="M5.5 1l1.07 2.18 2.43.35-1.75 1.7.41 2.41L5.5 6.45 3.34 7.64l.41-2.41L2 3.53l2.43-.35L5.5 1z"/>
                    </svg>
                  ))}
                </div>

                <p
                  style={{
                    fontSize: "0.875rem",
                    lineHeight: 1.78,
                    color: "var(--i-ink-muted)",
                    flex: 1,
                    fontStyle: "italic",
                    margin: 0,
                  }}
                >
                  &ldquo;{t.text}&rdquo;
                </p>

                <div style={{ display: "flex", alignItems: "center", gap: "0.875rem", paddingTop: "0.5rem", borderTop: "1px solid var(--i-border)" }}>
                  <img
                    src={t.avatar}
                    alt={t.name}
                    style={{ width: 38, height: 38, borderRadius: "50%", objectFit: "cover", border: "1px solid var(--i-border)", flexShrink: 0 }}
                  />
                  <div>
                    <div style={{ fontSize: "0.82rem", fontWeight: 500, color: "var(--i-ink)" }}>{t.name}</div>
                    <div style={{ fontSize: "0.68rem", color: "var(--i-ink-faint)", marginTop: "0.125rem" }}>{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* ── Services sticky grid ── */
        @media (max-width: 860px) {
          .indie-studio-outer {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          .indie-studio-outer > div:first-child {
            position: static !important;
            padding-top: 2.5rem !important;
            padding-bottom: 1.75rem !important;
            border-bottom: 1px solid var(--i-border);
          }
          .indie-studio-outer > div:last-child {
            padding-top: 1.5rem !important;
            padding-bottom: 3rem !important;
          }
        }

        /* ── Accordion rows ── */
        .indie-service-row { color: var(--i-ink); }

        /* ── Smooth expand on all sizes ── */
        .indie-service-expand {
          transition: none;
        }

        /* ── Tablet: hide category tag ── */
        @media (max-width: 860px) {
          .indie-service-cat { display: none !important; }
          .indie-services-head { grid-template-columns: 1fr !important; gap: 1.5rem !important; }
          .indie-tools-grid { grid-template-columns: 1fr !important; gap: 2rem !important; }
          .indie-testimonials-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 861px) {
          .indie-service-cat { display: inline !important; }
        }

        /* ── Mobile: collapse expand panel, tighter row ── */
        @media (max-width: 640px) {
          .indie-service-expand {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
            padding-bottom: 1.5rem !important;
          }
          /* Hide number spacer column */
          .indie-service-expand > div:first-child { display: none !important; }

          /* Tighter row button */
          .indie-service-row {
            grid-template-columns: 2rem 1fr auto !important;
            gap: 0.875rem !important;
            padding: 1.25rem 0 !important;
          }
        }

        /* ── Small phone refinements ── */
        @media (max-width: 480px) {
          .indie-tools-flex { gap: 0.375rem !important; }
          .indie-testimonials-grid > div { padding: 1.25rem !important; }
        }
      `}</style>
    </section>
  );
}
