"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0806" }}>
      <div className="rl-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="Director's Statement" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 0", lineHeight: 1.15 }}>
            No safe coverage.
          </h2>

          <div className="rl-focus-card">
            <p className="rl-focus-label">Focus areas</p>
            <ul className="rl-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="rl-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="rl-about-meta">
            <span>{OWNER.studio}</span>
            <span className="rl-about-meta-dot">●</span>
            <span className="rl-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .rl-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .rl-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(201,161,90,0.22);
          border-radius: 12px;
          padding: 20px;
          background-color: #14100c;
        }
        .rl-focus-label {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #d1263f;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .rl-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #f3ece1; }
        .rl-focus-list li { padding-left: 20px; position: relative; }
        .rl-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #c9a15a; font-weight: 700; }
        .rl-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #b7a996; padding-top: 6px; }
        .rl-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #b7a996; flex-wrap: wrap; }
        .rl-about-meta-dot { color: #d1263f; font-size: 8px; }
        .rl-about-available { color: #c9a15a; }
        @media (min-width: 860px) {
          .rl-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", fontWeight: 700, color: "#c9a15a" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(243,236,225,0.18)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#b7a996", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
