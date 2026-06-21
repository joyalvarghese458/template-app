"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, tiltUp, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0d0d0f" }}>
      <div className="redline-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={tiltUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ perspective: "1000px" }}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: "16px 0 0", lineHeight: 1.1, textTransform: "uppercase" }}>
            From CAD model to checkered flag.
          </h2>

          <div className="redline-focus-card">
            <p className="redline-focus-label">Focus areas</p>
            <ul className="redline-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="redline-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="redline-about-meta">
            <span>{OWNER.location}</span>
            <span className="redline-about-meta-dot">●</span>
            <span className="redline-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .redline-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .redline-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(255,255,255,0.1);
          border-left: 3px solid #e10600;
          border-radius: 8px;
          padding: 20px;
          background-color: #16161a;
        }
        .redline-focus-label {
          font-family: var(--font-display, sans-serif);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #e10600;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .redline-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #d4d4d8; }
        .redline-focus-list li { padding-left: 20px; position: relative; }
        .redline-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #ffb700; }
        .redline-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #9a9aa0; padding-top: 6px; }
        .redline-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #9a9aa0; }
        .redline-about-meta-dot { color: #e10600; font-size: 8px; }
        .redline-about-available { color: #ffb700; font-weight: 600; }
        @media (min-width: 860px) {
          .redline-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13px", fontWeight: 700, color: "#e10600" }}>{index}</span>
      <span style={{ width: "24px", height: "2px", backgroundColor: "#e10600" }} />
      <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#9a9aa0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
