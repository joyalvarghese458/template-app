"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, slideRight, stagger, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0e17" }}>
      <div className="cortex-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f8", margin: "16px 0 0", lineHeight: 1.18 }}>
            From notebook to production.
          </h2>

          <div className="cortex-focus-card">
            <p className="cortex-focus-label">Focus areas</p>
            <ul className="cortex-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="cortex-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="cortex-about-meta">
            <span>{OWNER.location}</span>
            <span className="cortex-about-meta-dot">·</span>
            <span className="cortex-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .cortex-about-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .cortex-focus-card {
          margin-top: 28px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 18px;
          background-color: #141b2e;
        }
        .cortex-focus-label {
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: #22d3ee;
          text-transform: uppercase;
          margin: 0 0 12px;
        }
        .cortex-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #c4cad8; }
        .cortex-focus-list li { padding-left: 18px; position: relative; }
        .cortex-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #8b5cf6; }
        .cortex-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 16px; line-height: 1.75; color: #b8bfd1; padding-top: 6px; }
        .cortex-about-meta { display: flex; gap: 10px; align-items: center; font-family: var(--font-mono, monospace); font-size: 12.5px; color: #8b93ab; margin-top: 4px; }
        .cortex-about-meta-dot { color: #8b5cf6; }
        .cortex-about-available { color: #34d399; }
        @media (min-width: 860px) {
          .cortex-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#8b5cf6" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", color: "#8b93ab", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
