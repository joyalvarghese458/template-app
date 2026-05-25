"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { WORKS } from "../_data/portfolio";
import { ease } from "../_utils/motion";

// Duplicate each row for seamless infinite loop (–50% lands exactly at the repeat seam)
const ROW_1 = [...WORKS, ...WORKS];
const ROW_2 = [...[...WORKS].reverse(), ...[...WORKS].reverse()];

// ── Single project card ─────────────────────────────────────────────
function WorkCard({ project }: { project: (typeof WORKS)[0] }) {
  return (
    <article
      className="indie-wcard"
      style={{
        position: "relative",
        width: "clamp(200px, 56vw, 360px)",
        height: "clamp(240px, 40vh, 400px)",
        borderRadius: "0.625rem",
        overflow: "hidden",
        flexShrink: 0,
        marginRight: "1rem",
        border: "1px solid rgba(240,240,248,0.07)",
        background: project.color,
        cursor: "pointer",
      }}
    >
      {/* Cover image */}
      <img
        src={project.image}
        alt={project.title}
        className="indie-wcard__img"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transition: "transform 0.75s cubic-bezier(0.16,1,0.3,1)",
          pointerEvents: "none",
        }}
      />

      {/* Dark gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.08) 55%, transparent 100%)",
        }}
      />

      {/* Accent colour bleed */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(ellipse at 50% 130%, ${project.accent}1a, transparent 60%)`,
        }}
      />

      {/* Top row — category badge + year */}
      <div
        style={{
          position: "absolute",
          top: "0.875rem",
          left: "0.875rem",
          right: "0.875rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
        }}
      >
        <span
          style={{
            fontSize: "0.55rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: project.accent,
            background: `${project.accent}18`,
            border: `1px solid ${project.accent}35`,
            padding: "0.2rem 0.55rem",
            borderRadius: "100px",
          }}
        >
          {project.category}
        </span>
        <span
          style={{
            fontSize: "0.55rem",
            color: "rgba(240,240,248,0.3)",
            fontVariantNumeric: "tabular-nums",
            letterSpacing: "0.05em",
          }}
        >
          {project.year}
        </span>
      </div>

      {/* Bottom info */}
      <div
        style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem" }}
      >
        {/* Tool badges (max 2) */}
        <div style={{ display: "flex", gap: "0.3rem", marginBottom: "0.4rem", flexWrap: "wrap" }}>
          {project.tools.slice(0, 2).map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.5rem",
                padding: "0.12rem 0.4rem",
                borderRadius: "100px",
                border: `1px solid ${project.accent}38`,
                color: project.accent,
                letterSpacing: "0.05em",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3
          style={{
            fontSize: "clamp(0.85rem, 1.5vw, 1.2rem)",
            fontFamily: "var(--i-font-display)",
            fontWeight: 300,
            letterSpacing: "-0.02em",
            margin: "0 0 0.2rem",
            color: "#f0f0f8",
            lineHeight: 1.15,
          }}
        >
          {project.title}
        </h3>

        <span
          style={{
            fontSize: "0.6rem",
            color: "rgba(240,240,248,0.35)",
            letterSpacing: "0.04em",
          }}
        >
          {project.role}
        </span>

        {/* Description — revealed on card hover via CSS */}
        <p
          className="indie-wcard__desc"
          style={{
            fontSize: "0.68rem",
            lineHeight: 1.55,
            color: "rgba(240,240,248,0.55)",
            margin: 0,
            maxHeight: 0,
            overflow: "hidden",
            opacity: 0,
            paddingTop: 0,
            borderTop: "1px solid transparent",
            transition:
              "max-height 0.4s ease, opacity 0.35s ease, padding-top 0.35s ease, border-color 0.35s ease",
          }}
        >
          {project.description}
        </p>
      </div>
    </article>
  );
}

// ── Main Work section ───────────────────────────────────────────────
export default function Work() {
  const headRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(headRef, { once: true, margin: "-60px" });

  return (
    <section
      id="work"
      style={{
        background: "var(--i-surface)",
        borderTop: "1px solid var(--i-border)",
        borderBottom: "1px solid var(--i-border)",
        paddingTop: "clamp(2.5rem, 5vw, 4rem)",
        paddingBottom: "clamp(2.5rem, 5vw, 4rem)",
        overflow: "hidden",
      }}
    >
      {/* ── Section heading ─────────────────────────────── */}
      <div
        ref={headRef}
        style={{
          maxWidth: 1240,
          margin: "0 auto",
          padding: "0 clamp(1.25rem, 4vw, 2rem) clamp(1.5rem, 4vw, 3rem)",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "2rem",
          alignItems: "end",
        }}
        className="indie-work-head"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease }}
            style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1rem" }}
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
              Selected Work
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 28 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.0, delay: 0.1, ease }}
            style={{
              fontSize: "clamp(1.8rem, 4.5vw, 4rem)",
              fontFamily: "var(--i-font-display)",
              fontWeight: 300,
              letterSpacing: "-0.025em",
              lineHeight: 1.05,
              margin: 0,
              color: "var(--i-ink)",
            }}
          >
            Five projects.
            <br />
            <em style={{ color: "var(--i-ink-muted)" }}>Every frame counts.</em>
          </motion.h2>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.2, ease }}
          className="indie-work-desc"
        >
          <p
            style={{
              fontSize: "0.875rem",
              lineHeight: 1.78,
              color: "var(--i-ink-muted)",
              margin: "0 0 1.25rem",
              maxWidth: 360,
            }}
          >
            Built from concept to final render — no shortcuts, no stock footage. Hover any row to pause and explore.
          </p>

          {/* Direction labels */}
          <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
            {[
              { label: "Row 1 →", color: "var(--i-accent)" },
              { label: "← Row 2", color: "var(--i-cyan)" },
            ].map(({ label, color }) => (
              <span
                key={label}
                style={{
                  fontSize: "0.62rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color,
                  display: "flex",
                  alignItems: "center",
                  gap: "0.375rem",
                  opacity: 0.7,
                }}
              >
                <span
                  style={{
                    width: 16,
                    height: 1,
                    background: color,
                    display: "inline-block",
                  }}
                />
                {label}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* ── Row 1 — scrolls LEFT ─────────────────────────────── */}
      <div style={{ overflow: "hidden", marginBottom: "1rem", paddingLeft: "clamp(1.25rem, 4vw, 2rem)" }}>
        <div className="indie-row-left" style={{ display: "flex", width: "max-content" }}>
          {ROW_1.map((p, i) => (
            <WorkCard key={`r1-${p.id}-${i}`} project={p} />
          ))}
        </div>
      </div>

      {/* ── Row 2 — scrolls RIGHT ────────────────────────────── */}
      <div style={{ overflow: "hidden", paddingLeft: "clamp(1.25rem, 4vw, 2rem)" }}>
        <div className="indie-row-right" style={{ display: "flex", width: "max-content" }}>
          {ROW_2.map((p, i) => (
            <WorkCard key={`r2-${p.id}-${i}`} project={p} />
          ))}
        </div>
      </div>

      {/* ── Footer hint ──────────────────────────────────────── */}
      <div
        style={{
          maxWidth: 1240,
          margin: "clamp(1.25rem, 3vw, 2.5rem) auto 0",
          padding: "0 clamp(1.25rem, 4vw, 2rem)",
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
        }}
      >
        <div style={{ width: 24, height: 1, background: "var(--i-border)" }} />
        <span
          style={{
            fontSize: "0.65rem",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--i-ink-faint)",
          }}
        >
          <span className="indie-work-hint-long">Hover to pause · </span>
          {WORKS.length} projects
        </span>
      </div>

      {/* ── CSS animations ───────────────────────────────────── */}
      <style>{`
        @keyframes indieLeft {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        @keyframes indieRight {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }

        .indie-row-left {
          animation: indieLeft 40s linear infinite;
          will-change: transform;
        }
        .indie-row-right {
          animation: indieRight 34s linear infinite;
          will-change: transform;
        }
        .indie-row-left:hover,
        .indie-row-right:hover {
          animation-play-state: paused;
        }

        /* Card hover — scale image + reveal description */
        @media (hover: hover) {
          .indie-wcard:hover .indie-wcard__img {
            transform: scale(1.07);
          }
          .indie-wcard:hover .indie-wcard__desc {
            max-height: 64px;
            opacity: 1;
            padding-top: 0.5rem;
            border-color: rgba(240,240,248,0.08);
            margin-top: 0.375rem;
          }
        }

        @media (max-width: 640px) {
          .indie-work-head { grid-template-columns: 1fr !important; }
          .indie-work-desc { display: none !important; }
          .indie-work-hint-long { display: none; }
        }
        @media (max-width: 480px) {
          .indie-wcard {
            width: clamp(180px, 72vw, 260px) !important;
            height: clamp(220px, 52vw, 320px) !important;
            margin-right: 0.75rem !important;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .indie-row-left, .indie-row-right { animation: none; overflow-x: auto; }
        }
      `}</style>
    </section>
  );
}
