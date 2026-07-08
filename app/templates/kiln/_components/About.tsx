"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f7f1e8" }}>
      <div className="kln-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="The Ceramicist" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: "16px 0 0", lineHeight: 1.15 }}>
            Honest, not perfect.
          </h2>

          <div className="kln-focus-card">
            <p className="kln-focus-label">Focus areas</p>
            <ul className="kln-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="kln-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="kln-about-meta">
            <span>{OWNER.atelier}</span>
            <span className="kln-about-meta-dot">●</span>
            <span className="kln-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .kln-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .kln-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(58,46,34,0.16);
          border-radius: 14px;
          padding: 20px;
          background-color: #efe4d3;
        }
        .kln-focus-label {
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: #6f7d58;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .kln-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #3a2e22; }
        .kln-focus-list li { padding-left: 20px; position: relative; }
        .kln-focus-list li::before { content: "●"; position: absolute; left: 0; top: 3px; color: #c15f3c; font-size: 8px; }
        .kln-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.8; color: #6b5a45; padding-top: 6px; }
        .kln-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #6b5a45; flex-wrap: wrap; }
        .kln-about-meta-dot { color: #6f7d58; font-size: 8px; }
        .kln-about-available { color: #c15f3c; }
        @media (min-width: 860px) {
          .kln-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#c15f3c" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(58,46,34,0.25)" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "#6b5a45", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
