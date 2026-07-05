"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, tiltUp, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#04141d" }}>
      <div className="marea-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={tiltUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ perspective: "1000px" }}>
          <SectionLabel index="01" label="About" />
          <h2 className="marea-h2">
            Reading the water column&apos;s <em>long memory</em>.
          </h2>

          <div className="marea-focus-card">
            <p className="marea-focus-label">Focus areas</p>
            <ul className="marea-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="marea-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="marea-about-meta">
            <span>{OWNER.location}</span>
            <span className="marea-about-meta-dot">●</span>
            <span>{OWNER.university}</span>
            <span className="marea-about-meta-dot">●</span>
            <span className="marea-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .marea-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .marea-h2 {
          font-family: var(--font-body, sans-serif);
          font-weight: 600;
          font-size: clamp(28px, 5vw, 42px);
          color: #eaf6f5;
          margin: 16px 0 0;
          line-height: 1.15;
        }
        .marea-h2 em { font-family: var(--font-display, serif); font-style: italic; font-weight: 500; color: #2fe2c4; }
        .marea-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(255,255,255,0.09);
          border-left: 3px solid #2fe2c4;
          border-radius: 8px;
          padding: 20px;
          background-color: #071c27;
        }
        .marea-focus-label {
          font-family: var(--font-body, sans-serif);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #2fe2c4;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .marea-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #d6ebe9; }
        .marea-focus-list li { padding-left: 20px; position: relative; }
        .marea-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #ff6f59; }
        .marea-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #9fc0c2; padding-top: 6px; }
        .marea-about-meta { display: flex; gap: 10px; align-items: center; flex-wrap: wrap; font-size: 13px; font-weight: 500; color: #9fc0c2; }
        .marea-about-meta-dot { color: #2fe2c4; font-size: 8px; }
        .marea-about-available { color: #ff6f59; font-weight: 600; }
        @media (min-width: 860px) {
          .marea-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "13px", fontWeight: 700, color: "#2fe2c4" }}>{index}</span>
      <span style={{ width: "24px", height: "2px", backgroundColor: "#2fe2c4" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#9fc0c2", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
