"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ease } from "../_utils/motion";

const WORDS = ["cinematic", "intentional", "immersive", "unforgettable"];

export default function Statement() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      style={{
        borderTop: "1px solid var(--i-border)",
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2rem)",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Subtle radial glow */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "70vw",
          height: "40vh",
          background: "radial-gradient(ellipse, rgba(129,140,248,0.05), transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: "5rem",
          alignItems: "center",
          position: "relative",
          zIndex: 1,
        }}
        className="indie-statement-grid"
      >
        {/* ── LEFT: label + descriptor words ─────────────── */}
        <div className="indie-statement-left">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
              marginBottom: "2rem",
            }}
          >
            <div style={{ width: 32, height: 1, background: "var(--i-accent)", opacity: 0.6 }} />
            <span
              style={{
                fontSize: "0.7rem",
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "var(--i-ink-muted)",
              }}
            >
              The approach
            </span>
          </motion.div>

          {/* Desktop: vertical bordered list */}
          <div className="indie-words-list" style={{ display: "flex", flexDirection: "column", gap: "0.625rem" }}>
            {WORDS.map((word, i) => (
              <motion.div
                key={word}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.1, ease }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.875rem",
                  padding: "0.625rem 0",
                  borderBottom: "1px solid var(--i-border)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.6rem",
                    letterSpacing: "0.12em",
                    color: "var(--i-accent)",
                    fontVariantNumeric: "tabular-nums",
                    width: "1.5rem",
                    flexShrink: 0,
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: "0.85rem",
                    fontFamily: "var(--i-font-display)",
                    fontStyle: "italic",
                    color: "var(--i-ink-muted)",
                    letterSpacing: "0.02em",
                    textTransform: "capitalize",
                  }}
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Mobile only: pill grid (shown via CSS) */}
          <div className="indie-words-pills">
            {WORDS.map((word, i) => (
              <motion.div
                key={`pill-${word}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  padding: "0.55rem 1rem",
                  border: "1px solid var(--i-border)",
                  borderRadius: "100px",
                  background: "var(--i-surface)",
                }}
              >
                <span
                  style={{
                    fontSize: "0.55rem",
                    letterSpacing: "0.1em",
                    color: "var(--i-accent)",
                    fontVariantNumeric: "tabular-nums",
                  }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  style={{
                    fontSize: "0.8rem",
                    fontFamily: "var(--i-font-display)",
                    fontStyle: "italic",
                    color: "var(--i-ink-muted)",
                    textTransform: "capitalize",
                  }}
                >
                  {word}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── RIGHT: large statement + stats ─────────────── */}
        <div className="indie-statement-right">
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, delay: 0.2, ease }}
            style={{
              fontSize: "clamp(1.5rem, 3.5vw, 3rem)",
              fontFamily: "var(--i-font-display)",
              fontWeight: 300,
              lineHeight: 1.35,
              letterSpacing: "-0.02em",
              color: "var(--i-ink)",
              margin: "0 0 2.5rem",
            }}
          >
            Every project I take starts with a single question —&nbsp;
            <em style={{ color: "var(--i-accent)" }}>
              what does this world feel like?
            </em>{" "}
            The answer shapes every keyframe, every render, every final cut.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5, ease }}
            className="indie-statement-stats"
            style={{
              display: "flex",
              gap: "3rem",
              flexWrap: "wrap",
              paddingTop: "2rem",
              borderTop: "1px solid var(--i-border)",
            }}
          >
            {[
              { num: "12+", label: "Years in the industry" },
              { num: "60+", label: "Studios & brands served" },
              { num: "200+", label: "Projects delivered" },
            ].map(({ num, label }) => (
              <div key={label}>
                <div
                  style={{
                    fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)",
                    fontFamily: "var(--i-font-display)",
                    fontWeight: 300,
                    color: "var(--i-ink)",
                    letterSpacing: "-0.025em",
                    lineHeight: 1,
                  }}
                >
                  {num}
                </div>
                <div
                  style={{
                    fontSize: "0.72rem",
                    color: "var(--i-ink-muted)",
                    letterSpacing: "0.06em",
                    marginTop: "0.375rem",
                  }}
                >
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Hide mobile pills on desktop */
        .indie-words-pills { display: none; }

        /* ── Tablet ── */
        @media (max-width: 768px) {
          .indie-statement-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
          /* Quote first, words second on mobile */
          .indie-statement-right { order: 1; margin-bottom: 2rem; }
          .indie-statement-left  { order: 2; }

          .indie-statement-right p { margin-bottom: 2rem !important; }
          .indie-statement-stats {
            gap: 2rem !important;
            padding-top: 1.5rem !important;
          }

          /* Switch word list → pill row */
          .indie-words-list { display: none !important; }
          .indie-words-pills {
            display: flex !important;
            flex-wrap: wrap;
            gap: 0.5rem;
          }
          /* Remove approach label margin on mobile (it's above the pills now) */
          .indie-statement-left > div:first-child {
            margin-bottom: 1.25rem !important;
          }
        }

        /* ── Small phones ── */
        @media (max-width: 480px) {
          .indie-statement-stats {
            gap: 1.5rem !important;
          }
          .indie-words-pills > div {
            padding: 0.45rem 0.875rem !important;
          }
        }
      `}</style>
    </section>
  );
}
