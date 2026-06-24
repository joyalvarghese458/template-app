"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0b0e14" }}>
      <div className="ech-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: "16px 0 0", lineHeight: 1.2 }}>
            Operator first, title second.
          </h2>

          <div className="ech-focus-card">
            <p className="ech-focus-label">Command focus</p>
            <ul className="ech-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ech-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="ech-about-meta">
            <span>{OWNER.location}</span>
            <span className="ech-about-meta-dot">●</span>
            <span className="ech-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .ech-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .ech-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(238,241,246,0.12);
          border-radius: 14px;
          padding: 20px;
          background-color: #11151d;
        }
        .ech-focus-label {
          font-family: var(--font-display, serif);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #d98a3d;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 600;
        }
        .ech-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #eef1f6; }
        .ech-focus-list li { padding-left: 20px; position: relative; }
        .ech-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #3b6fe0; font-weight: 700; }
        .ech-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #9aa7bb; padding-top: 6px; }
        .ech-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #9aa7bb; }
        .ech-about-meta-dot { color: #d98a3d; font-size: 8px; }
        .ech-about-available { color: #d98a3d; }
        @media (min-width: 860px) {
          .ech-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 600, color: "#3b6fe0" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(238,241,246,0.18)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#9aa7bb", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
