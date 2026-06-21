"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, slideRight, stagger, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#eef0ec" }}>
      <div className="strata-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#1f2421", margin: "16px 0 0", lineHeight: 1.08, textTransform: "uppercase" }}>
            Math, checked twice.
          </h2>

          <div className="strata-focus-card">
            <p className="strata-focus-label">Focus areas</p>
            <ul className="strata-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="strata-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="strata-about-meta">
            <span>{OWNER.location}</span>
            <span className="strata-about-meta-dot">·</span>
            <span>{OWNER.license}</span>
          </motion.div>
          <motion.div variants={fadeUp} className="strata-about-meta">
            <span className="strata-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .strata-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .strata-focus-card {
          margin-top: 26px;
          border: 1.5px solid #1f2421;
          border-radius: 6px;
          padding: 20px;
          background-color: #ffffff;
        }
        .strata-focus-label {
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          letter-spacing: 0.06em;
          color: #f15a24;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 700;
        }
        .strata-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #1f2421; }
        .strata-focus-list li { padding-left: 20px; position: relative; }
        .strata-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #2c4a5e; }
        .strata-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #5c655e; padding-top: 6px; }
        .strata-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #5c655e; }
        .strata-about-meta-dot { color: #f15a24; }
        .strata-about-available { color: #f15a24; font-weight: 600; }
        @media (min-width: 860px) {
          .strata-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "13px", fontWeight: 700, color: "#f15a24" }}>{index}</span>
      <span style={{ width: "24px", height: "2px", backgroundColor: "#1f2421" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", fontWeight: 600, color: "#5c655e", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
