"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, popIn, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#15110f" }}>
      <div className="umami-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={popIn(0)} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 0", lineHeight: 1.2 }}>
            Trained by fire, not by theory.
          </h2>

          <div className="umami-focus-card">
            <p className="umami-focus-label">Kitchen focus</p>
            <ul className="umami-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="umami-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="umami-about-meta">
            <span>{OWNER.location}</span>
            <span className="umami-about-meta-dot">●</span>
            <span className="umami-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .umami-about-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .umami-focus-card {
          margin-top: 26px;
          border: 1px solid rgba(245,236,224,0.12);
          border-radius: 14px;
          padding: 20px;
          background-color: #1c1613;
        }
        .umami-focus-label {
          font-family: var(--font-display, serif);
          font-size: 12px;
          letter-spacing: 0.04em;
          color: #ff8a4c;
          text-transform: uppercase;
          margin: 0 0 12px;
          font-weight: 600;
        }
        .umami-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 11px; font-size: 14px; color: #f5ece0; }
        .umami-focus-list li { padding-left: 20px; position: relative; }
        .umami-focus-list li::before { content: "🔥"; position: absolute; left: 0; top: -1px; font-size: 11px; }
        .umami-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 15.5px; line-height: 1.75; color: #c4b6a8; padding-top: 6px; }
        .umami-about-meta { display: flex; gap: 10px; align-items: center; font-size: 13px; font-weight: 500; color: #c4b6a8; }
        .umami-about-meta-dot { color: #6b8f47; font-size: 8px; }
        .umami-about-available { color: #6b8f47; }
        @media (min-width: 860px) {
          .umami-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-display, serif)", fontSize: "13px", fontWeight: 600, color: "#e8552c" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(245,236,224,0.18)" }} />
      <span style={{ fontFamily: "var(--font-body, sans-serif)", fontSize: "12px", fontWeight: 600, color: "#c4b6a8", letterSpacing: "0.08em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
