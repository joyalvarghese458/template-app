"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#ffffff" }}>
      <div className="surge-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#0f1222", margin: "16px 0 0", lineHeight: 1.18 }}>
            Strategy first, spend second.
          </h2>

          <div className="surge-focus-card">
            <p className="surge-focus-label">Focus areas</p>
            <ul className="surge-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="surge-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="surge-about-meta">
            <span>{OWNER.location}</span>
            <span className="surge-about-meta-dot">●</span>
            <span className="surge-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .surge-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .surge-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(15,18,34,0.1);
          border-radius: 16px;
          padding: 20px;
          background-color: #f8f9fb;
        }
        .surge-focus-label {
          font-family: var(--font-display, sans-serif);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #ff3d7f;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .surge-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #0f1222; }
        .surge-focus-list li { padding-left: 20px; position: relative; }
        .surge-focus-list li::before { content: "→"; position: absolute; left: 0; color: #2954ff; font-weight: 700; }
        .surge-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #5b6178; padding-top: 6px; }
        .surge-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 600; color: #5b6178; }
        .surge-about-meta-dot { color: #00c875; font-size: 8px; }
        .surge-about-available { color: #00c875; }
        @media (min-width: 860px) {
          .surge-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13px", fontWeight: 700, color: "#2954ff" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(15,18,34,0.16)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 700, color: "#5b6178", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
