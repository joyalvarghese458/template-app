"use client";

import { motion } from "framer-motion";
import { ABOUT, OWNER } from "../_data/portfolio";
import { fadeUp, slideRight, stagger, VIEWPORT } from "../_utils/motion";

export default function About() {
  return (
    <section id="about" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#070a08" }}>
      <div className="cipher-about-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={slideRight} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="About" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#e9f5ee", margin: "16px 0 0", lineHeight: 1.18 }}>
            Trained to think like the attacker.
          </h2>

          <div className="cipher-focus-card">
            <p className="cipher-focus-label">Focus areas</p>
            <ul className="cipher-focus-list">
              {ABOUT.focus.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="cipher-about-copy">
          <motion.p variants={fadeUp}>{ABOUT.intro}</motion.p>
          <motion.p variants={fadeUp}>{ABOUT.philosophy}</motion.p>

          <motion.div variants={fadeUp} className="cipher-coursework-card">
            <p className="cipher-focus-label">Relevant coursework</p>
            <div className="cipher-coursework-grid">
              {ABOUT.coursework.map((item) => (
                <span key={item} className="cipher-coursework-tag">{item}</span>
              ))}
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="cipher-about-meta">
            <span>{OWNER.university}</span>
            <span className="cipher-about-meta-dot">·</span>
            <span>{OWNER.degree}</span>
          </motion.div>
          <motion.div variants={fadeUp} className="cipher-about-meta">
            <span>{OWNER.location}</span>
            <span className="cipher-about-meta-dot">·</span>
            <span className="cipher-about-available">{OWNER.availability}</span>
          </motion.div>
        </motion.div>
      </div>

      <style>{`
        .cipher-about-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        .cipher-focus-card {
          margin-top: 28px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 18px;
          background-color: #121810;
        }
        .cipher-focus-label {
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          color: #39ff8c;
          text-transform: uppercase;
          margin: 0 0 12px;
        }
        .cipher-focus-list { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; font-size: 14px; color: #c8d6cd; }
        .cipher-focus-list li { padding-left: 18px; position: relative; }
        .cipher-focus-list li::before { content: "▸"; position: absolute; left: 0; color: #39ff8c; }
        .cipher-about-copy { display: flex; flex-direction: column; gap: 18px; font-size: 16px; line-height: 1.75; color: #b9c7be; padding-top: 6px; }
        .cipher-coursework-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 16px 18px;
          background-color: #0d120f;
        }
        .cipher-coursework-grid { display: flex; flex-wrap: wrap; gap: 8px; }
        .cipher-coursework-tag {
          font-family: var(--font-mono, monospace);
          font-size: 11.5px;
          color: #8aa194;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 4px;
          padding: 5px 9px;
        }
        .cipher-about-meta { display: flex; gap: 10px; align-items: center; font-family: var(--font-mono, monospace); font-size: 12.5px; color: #8aa194; }
        .cipher-about-meta-dot { color: #39ff8c; }
        .cipher-about-available { color: #39ff8c; }
        @media (min-width: 860px) {
          .cipher-about-grid { grid-template-columns: minmax(0,1fr) minmax(0,1.3fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}

export function SectionLabel({ index, label }: { index: string; label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "13px", color: "#39ff8c" }}>{index}</span>
      <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
      <span style={{ fontFamily: "var(--font-mono, monospace)", fontSize: "12px", color: "#8aa194", letterSpacing: "0.1em", textTransform: "uppercase" }}>
        {label}
      </span>
    </div>
  );
}
