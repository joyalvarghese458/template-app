"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#eee8d9" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Track Record" />
          <h2 className="vtg-exp-heading">Fourteen years in the room.</h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vtg-exp-list">
          {EXPERIENCE.map((e) => (
            <motion.div key={`${e.role}-${e.period}`} variants={fadeUp} className="vtg-exp-item">
              <div className="vtg-exp-rail">
                <span className="vtg-exp-dot" />
                <span className="vtg-exp-line" />
              </div>
              <div className="vtg-exp-content">
                <div className="vtg-exp-top">
                  <h3 className="vtg-exp-role">{e.role}</h3>
                  <span className="vtg-exp-period">{e.period}</span>
                </div>
                <span className="vtg-exp-company">{e.company}</span>
                <p className="vtg-exp-desc">{e.description}</p>
                <div className="vtg-exp-tags">
                  {e.highlights.map((h) => (
                    <span key={h} className="vtg-exp-tag">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vtg-exp-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vtg-exp-list { display: flex; flex-direction: column; }
        .vtg-exp-item { display: grid; grid-template-columns: 20px 1fr; gap: 20px; }
        .vtg-exp-rail { display: flex; flex-direction: column; align-items: center; }
        .vtg-exp-dot { width: 10px; height: 10px; border-radius: 50%; background-color: #0f6b56; flex-shrink: 0; margin-top: 6px; }
        .vtg-exp-line { flex: 1; width: 1px; background-color: rgba(23,20,15,0.16); margin-top: 6px; }
        .vtg-exp-item:last-child .vtg-exp-line { display: none; }
        .vtg-exp-content { padding-bottom: 34px; }
        .vtg-exp-top { display: flex; flex-direction: column; gap: 2px; margin-bottom: 4px; }
        .vtg-exp-role { font-family: var(--font-display, serif); font-weight: 600; font-size: 19px; color: #17140f; margin: 0; }
        .vtg-exp-period { font-family: var(--font-mono, monospace); font-size: 11px; color: #8a8271; }
        .vtg-exp-company { font-size: 12.5px; font-weight: 700; color: #0f6b56; }
        .vtg-exp-desc { font-size: 13.5px; line-height: 1.7; color: #4a4438; margin: 10px 0 12px; max-width: 560px; }
        .vtg-exp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .vtg-exp-tag {
          font-size: 10.5px;
          font-weight: 600;
          color: #4a4438;
          background-color: #e3dac3;
          border: 1px solid rgba(23,20,15,0.12);
          border-radius: 100px;
          padding: 5px 11px;
        }
        @media (min-width: 640px) {
          .vtg-exp-item { grid-template-columns: 24px 1fr; gap: 28px; }
          .vtg-exp-top { flex-direction: row; align-items: baseline; justify-content: space-between; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
