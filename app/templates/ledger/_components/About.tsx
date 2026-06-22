"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, tiltUp, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f8f3e7" }}>
      <div className="ledger-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={tiltUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} style={{ perspective: "1000px" }}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 0", lineHeight: 1.15 }}>
            Numbers that hold up under scrutiny.
          </h2>

          <div className="ledger-focus-card">
            <p className="ledger-focus-label">Focus areas</p>
            <ul className="ledger-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ledger-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="ledger-about-meta">
            <span>{OWNER.location}</span>
            <span className="ledger-about-meta-dot">●</span>
            <span className="ledger-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .ledger-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .ledger-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(22,41,31,0.14);
          border-left: 3px solid #1f5c3f;
          border-radius: 8px;
          padding: 20px;
          background-color: #fffdf7;
        }
        .ledger-focus-label {
          font-family: var(--font-body, sans-serif);
          font-size: 11px;
          letter-spacing: 0.05em;
          color: #1f5c3f;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .ledger-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #16291f; }
        .ledger-focus-list li { padding-left: 20px; position: relative; }
        .ledger-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #b8862c; }
        .ledger-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #4d5f52; padding-top: 6px; }
        .ledger-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #4d5f52; }
        .ledger-about-meta-dot { color: #1f5c3f; font-size: 8px; }
        .ledger-about-available { color: #b8862c; font-weight: 600; }
        @media (min-width: 860px) {
          .ledger-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 700, color: "#1f5c3f" }}>{index}</span>
      <span style={{ width: "24px", height: "2px", backgroundColor: "#1f5c3f" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#4d5f52", letterSpacing: "0.07em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
