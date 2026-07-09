"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3f0e5" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Fieldwork" />
          <h2 className="ctr-exp-heading">Fourteen years of site visits.</h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ctr-exp-list">
          {EXPERIENCE.map((e) => (
            <motion.div key={`${e.role}-${e.period}`} variants={fadeUp} className="ctr-exp-item">
              <div className="ctr-exp-rail">
                <span className="ctr-exp-dot" />
                <span className="ctr-exp-line" />
              </div>
              <div className="ctr-exp-content">
                <div className="ctr-exp-top">
                  <h3 className="ctr-exp-role">{e.role}</h3>
                  <span className="ctr-exp-period">{e.period}</span>
                </div>
                <span className="ctr-exp-company">{e.company}</span>
                <p className="ctr-exp-desc">{e.description}</p>
                <div className="ctr-exp-tags">
                  {e.highlights.map((h) => (
                    <span key={h} className="ctr-exp-tag">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ctr-exp-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #212a1f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .ctr-exp-list { display: flex; flex-direction: column; }
        .ctr-exp-item { display: grid; grid-template-columns: 20px 1fr; gap: 20px; }
        .ctr-exp-rail { display: flex; flex-direction: column; align-items: center; }
        .ctr-exp-dot { width: 10px; height: 10px; border-radius: 50%; background-color: #4b6b3f; flex-shrink: 0; margin-top: 6px; }
        .ctr-exp-line { flex: 1; width: 1px; background-color: rgba(33,42,31,0.16); margin-top: 6px; }
        .ctr-exp-item:last-child .ctr-exp-line { display: none; }
        .ctr-exp-content { padding-bottom: 34px; }
        .ctr-exp-top { display: flex; flex-direction: column; gap: 2px; margin-bottom: 4px; }
        .ctr-exp-role { font-family: var(--font-display, serif); font-weight: 600; font-size: 19px; color: #212a1f; margin: 0; }
        .ctr-exp-period { font-family: var(--font-mono, monospace); font-size: 11px; color: #868c76; }
        .ctr-exp-company { font-size: 12.5px; font-weight: 700; color: #4b6b3f; }
        .ctr-exp-desc { font-size: 13.5px; line-height: 1.7; color: #4c5343; margin: 10px 0 12px; max-width: 560px; }
        .ctr-exp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .ctr-exp-tag {
          font-size: 10.5px;
          font-weight: 600;
          color: #4c5343;
          background-color: #e7e0cb;
          border: 1px solid rgba(33,42,31,0.12);
          border-radius: 100px;
          padding: 5px 11px;
        }
        @media (min-width: 640px) {
          .ctr-exp-item { grid-template-columns: 24px 1fr; gap: 28px; }
          .ctr-exp-top { flex-direction: row; align-items: baseline; justify-content: space-between; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
