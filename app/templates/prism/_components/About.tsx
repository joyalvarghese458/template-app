"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, scaleIn, stagger, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0a14" }}>
      <div className="prism-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={scaleIn} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f5f4fa", margin: "16px 0 0", lineHeight: 1.2 }}>
            Decisions, not just pixels.
          </h2>

          <div className="prism-focus-card">
            <p className="prism-focus-label">Focus areas</p>
            <ul className="prism-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="prism-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="prism-about-meta">
            <span>{OWNER.location}</span>
            <span className="prism-about-meta-dot">◆</span>
            <span className="prism-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .prism-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .prism-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 18px;
          padding: 20px;
          background-color: rgba(255,255,255,0.04);
          backdrop-filter: blur(12px);
        }
        .prism-focus-label {
          font-family: var(--font-display, sans-serif);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #2dd9c4;
          text-transform: uppercase;
          margin: 0 0 12px;
        }
        .prism-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #d8d6e8; }
        .prism-focus-list li { padding-left: 20px; position: relative; }
        .prism-focus-list li::before { content: ""; position: absolute; left: 0; top: 7px; width: 7px; height: 7px; border-radius: 50%; background-image: linear-gradient(120deg, #2dd9c4, #e94fd1); }
        .prism-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #a8a6c0; padding-top: 6px; }
        .prism-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 600; color: #a8a6c0; }
        .prism-about-meta-dot { color: #6c63ff; font-size: 9px; }
        .prism-about-available { color: #2dd9c4; }
        @media (min-width: 860px) {
          .prism-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "12.5px", color: "#2dd9c4" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 700, color: "#a8a6c0", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
