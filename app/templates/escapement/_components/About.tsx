"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#12100d" }}>
      <div className="esc-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="The Watchmaker" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f2ead9", margin: "16px 0 0", lineHeight: 1.15 }}>
            Fussy, on purpose.
          </h2>

          <div className="esc-focus-card">
            <p className="esc-focus-label">Focus areas</p>
            <ul className="esc-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="esc-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="esc-about-meta">
            <span>{OWNER.atelier}</span>
            <span className="esc-about-meta-dot">✧</span>
            <span className="esc-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .esc-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .esc-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(242,234,217,0.14);
          border-radius: 14px;
          padding: 20px;
          background-color: #1f1a13;
        }
        .esc-focus-label {
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          color: #6fa295;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .esc-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #f2ead9; }
        .esc-focus-list li { padding-left: 20px; position: relative; }
        .esc-focus-list li::before { content: "✧"; position: absolute; left: 0; top: 1px; color: #c9a24b; font-size: 11px; }
        .esc-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.8; color: #b9ac93; padding-top: 6px; }
        .esc-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #b9ac93; flex-wrap: wrap; }
        .esc-about-meta-dot { color: #6fa295; font-size: 10px; }
        .esc-about-available { color: #c9a24b; }
        @media (min-width: 860px) {
          .esc-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontWeight: 700, fontSize: "12px", color: "#c9a24b" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(242,234,217,0.25)" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "11px", fontWeight: 700, color: "#b9ac93", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
