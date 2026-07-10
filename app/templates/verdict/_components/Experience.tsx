"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#ece3cf" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Track Record" />
          <h2 className="vd-exp-heading">Fifteen years at the bar.</h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vd-exp-list">
          {EXPERIENCE.map((e) => (
            <motion.div key={`${e.role}-${e.period}`} variants={fadeUp} className="vd-exp-item">
              <div className="vd-exp-rail">
                <span className="vd-exp-dot" />
                <span className="vd-exp-line" />
              </div>
              <div className="vd-exp-content">
                <div className="vd-exp-top">
                  <h3 className="vd-exp-role">{e.role}</h3>
                  <span className="vd-exp-period">{e.period}</span>
                </div>
                <span className="vd-exp-company">{e.company}</span>
                <p className="vd-exp-desc">{e.description}</p>
                <div className="vd-exp-tags">
                  {e.highlights.map((h) => (
                    <span key={h} className="vd-exp-tag">{h}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vd-exp-heading {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vd-exp-list { display: flex; flex-direction: column; }
        .vd-exp-item { display: grid; grid-template-columns: 20px 1fr; gap: 20px; }
        .vd-exp-rail { display: flex; flex-direction: column; align-items: center; }
        .vd-exp-dot { width: 10px; height: 10px; border-radius: 50%; background-color: #7c2334; flex-shrink: 0; margin-top: 6px; }
        .vd-exp-line { flex: 1; width: 1px; background-color: rgba(23,20,15,0.16); margin-top: 6px; }
        .vd-exp-item:last-child .vd-exp-line { display: none; }
        .vd-exp-content { padding-bottom: 34px; }
        .vd-exp-top { display: flex; flex-direction: column; gap: 2px; margin-bottom: 4px; }
        .vd-exp-role { font-family: var(--font-display, serif); font-weight: 700; font-size: 19px; color: #17140f; margin: 0; }
        .vd-exp-period { font-family: var(--font-mono, monospace); font-size: 11px; color: #948b74; }
        .vd-exp-company { font-size: 12.5px; font-weight: 700; color: #7c2334; }
        .vd-exp-desc { font-size: 13.5px; line-height: 1.7; color: #57503f; margin: 10px 0 12px; max-width: 560px; }
        .vd-exp-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .vd-exp-tag {
          font-size: 10.5px;
          font-weight: 600;
          color: #57503f;
          background-color: #ddcfa8;
          border: 1px solid rgba(23,20,15,0.12);
          border-radius: 100px;
          padding: 5px 11px;
        }
        @media (min-width: 640px) {
          .vd-exp-item { grid-template-columns: 24px 1fr; gap: 28px; }
          .vd-exp-top { flex-direction: row; align-items: baseline; justify-content: space-between; gap: 12px; }
        }
      `}</style>
    </section>
  );
}
