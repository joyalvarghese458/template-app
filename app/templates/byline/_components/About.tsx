"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3efe6" }}>
      <div className="byline-about-grid" style={{ maxWidth: "1160px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <Kicker index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#1a1714", margin: 0, lineHeight: 1.15 }}>
            From tip to published record.
          </h2>

          <div className="byline-credentials-card">
            <p className="byline-credentials-label">Credentials</p>
            <ul className="byline-credentials-list">
              {ABOUT.credentials.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div
          variants={stagger(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={VIEWPORT}
          className="byline-about-copy"
        >
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>
          <motion.div variants={fadeUp} className="byline-about-meta">
            <span>{OWNER.location}</span>
            <span className="byline-about-meta-dot">·</span>
            <span className="byline-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .byline-about-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
        }
        .byline-credentials-card {
          margin-top: 28px;
          border: 1px solid rgba(26,23,20,0.16);
          border-radius: 4px;
          padding: 18px;
          background-color: #ece4d3;
        }
        .byline-credentials-label {
          font-family: var(--font-type, monospace);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: #b3231a;
          text-transform: uppercase;
          margin: 0 0 12px;
        }
        .byline-credentials-list {
          list-style: none;
          margin: 0;
          padding: 0;
          display: flex;
          flex-direction: column;
          gap: 10px;
          font-size: 14px;
          color: #3c372f;
        }
        .byline-credentials-list li { padding-left: 16px; position: relative; }
        .byline-credentials-list li::before {
          content: "—";
          position: absolute;
          left: 0;
          color: #b3231a;
        }
        .byline-about-copy {
          display: flex;
          flex-direction: column;
          gap: 18px;
          font-size: 16.5px;
          line-height: 1.75;
          color: #3c372f;
          padding-top: 6px;
        }
        .byline-about-meta {
          display: flex;
          gap: 10px;
          align-items: center;
          font-family: var(--font-type, monospace);
          font-size: 12.5px;
          color: #5b554c;
          margin-top: 4px;
        }
        .byline-about-meta-dot { color: #b3231a; }
        .byline-about-available { color: #6e7c4a; }
        @media (min-width: 860px) {
          .byline-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function Kicker({ index, label }: { index: string; label: string }) {
  return (
    <div className="byline-section-kicker">
      <span className="byline-section-kicker-index">{index}</span>
      <span className="byline-section-kicker-rule" />
      <span className="byline-section-kicker-label">{label}</span>
      <style>{`
        .byline-section-kicker { display: flex; align-items: center; gap: 10px; margin-bottom: 14px; }
        .byline-section-kicker-index { font-family: var(--font-type, monospace); font-size: 12px; color: #b3231a; }
        .byline-section-kicker-rule { width: 22px; height: 1px; background-color: rgba(26,23,20,0.3); }
        .byline-section-kicker-label {
          font-family: var(--font-type, monospace);
          font-size: 12px;
          letter-spacing: 0.1em;
          color: #5b554c;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
}
