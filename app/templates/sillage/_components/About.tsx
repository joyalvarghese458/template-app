"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf5ea" }}>
      <div className="sil-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="The Perfumer" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 0", lineHeight: 1.15 }}>
            A sentence, not a word.
          </h2>

          <div className="sil-focus-card">
            <p className="sil-focus-label">Focus areas</p>
            <ul className="sil-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="sil-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="sil-about-meta">
            <span>{OWNER.atelier}</span>
            <span className="sil-about-meta-dot">✦</span>
            <span className="sil-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .sil-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .sil-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(43,32,21,0.16);
          border-radius: 14px;
          padding: 20px;
          background-color: #f3ecdc;
        }
        .sil-focus-label {
          font-family: var(--font-body, sans-serif);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: #b1556b;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .sil-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #2b2015; }
        .sil-focus-list li { padding-left: 20px; position: relative; }
        .sil-focus-list li::before { content: "✦"; position: absolute; left: 0; top: 1px; color: #b6752c; font-size: 11px; }
        .sil-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.8; color: #6f5f47; padding-top: 6px; }
        .sil-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #6f5f47; flex-wrap: wrap; }
        .sil-about-meta-dot { color: #b1556b; font-size: 10px; }
        .sil-about-available { color: #b6752c; }
        @media (min-width: 860px) {
          .sil-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "13px", color: "#b6752c" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(43,32,21,0.2)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#6f5f47", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
