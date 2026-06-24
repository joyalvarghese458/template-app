"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0f1c" }}>
      <div className="atlas-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 0", lineHeight: 1.2 }}>
            Strategy first, spreadsheet second.
          </h2>

          <div className="atlas-focus-card">
            <p className="atlas-focus-label">Focus areas</p>
            <ul className="atlas-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="atlas-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="atlas-about-meta">
            <span>{OWNER.location}</span>
            <span className="atlas-about-meta-dot">●</span>
            <span className="atlas-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .atlas-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .atlas-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(243,239,228,0.12);
          border-radius: 16px;
          padding: 20px;
          background-color: #111a2c;
        }
        .atlas-focus-label {
          font-family: var(--font-display, serif);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #9c3f4a;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 600;
        }
        .atlas-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #f3efe4; }
        .atlas-focus-list li { padding-left: 20px; position: relative; }
        .atlas-focus-list li::before { content: "→"; position: absolute; left: 0; color: #d4af6a; font-weight: 700; }
        .atlas-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #aab4c9; padding-top: 6px; }
        .atlas-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #aab4c9; }
        .atlas-about-meta-dot { color: #3f8f76; font-size: 8px; }
        .atlas-about-available { color: #3f8f76; }
        @media (min-width: 860px) {
          .atlas-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 600, color: "#d4af6a" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(243,239,228,0.18)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#aab4c9", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
