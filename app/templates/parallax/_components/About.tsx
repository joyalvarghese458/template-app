"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0c0d10" }}>
      <div className="prlx-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f1f3f6", margin: "16px 0 0", lineHeight: 1.2 }}>
            Self-taught, studio-tested.
          </h2>

          <div className="prlx-focus-card">
            <p className="prlx-focus-label">Focus areas</p>
            <ul className="prlx-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="prlx-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="prlx-about-meta">
            <span>{OWNER.school}</span>
            <span className="prlx-about-meta-dot">●</span>
            <span className="prlx-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .prlx-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .prlx-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(241,243,246,0.12);
          border-radius: 14px;
          padding: 20px;
          background-color: #131419;
        }
        .prlx-focus-label {
          font-family: var(--font-display, sans-serif);
          font-size: 11px;
          letter-spacing: 0.04em;
          color: #ff7a3d;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .prlx-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #f1f3f6; }
        .prlx-focus-list li { padding-left: 20px; position: relative; }
        .prlx-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #2dd4bf; font-weight: 700; }
        .prlx-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #9ba1ad; padding-top: 6px; }
        .prlx-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #9ba1ad; flex-wrap: wrap; }
        .prlx-about-meta-dot { color: #ff7a3d; font-size: 8px; }
        .prlx-about-available { color: #ff7a3d; }
        @media (min-width: 860px) {
          .prlx-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13px", fontWeight: 700, color: "#2dd4bf" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(241,243,246,0.18)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#9ba1ad", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
