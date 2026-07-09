"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#e7e0cb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="From Sheet To Site" />
          <h2 className="ctr-process-heading">A plan is only as good as its punch list.</h2>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ctr-process-row">
          <div className="ctr-process-connector" aria-hidden="true" />
          {PROCESS.map((p) => (
            <motion.div key={p.step} variants={fadeUp} className="ctr-process-card">
              <span className="ctr-process-step">{p.step}</span>
              <h3 className="ctr-process-title">{p.title}</h3>
              <p className="ctr-process-desc">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ctr-process-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #212a1f;
          margin: 16px 0 40px;
          line-height: 1.15;
          max-width: 620px;
        }
        .ctr-process-row { position: relative; display: grid; grid-template-columns: 1fr; gap: 16px; }
        .ctr-process-connector { display: none; }
        .ctr-process-card {
          position: relative;
          border: 1px solid rgba(33,42,31,0.13);
          border-radius: 12px;
          padding: 24px 22px;
          background-color: #f3f0e5;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ctr-process-step {
          font-family: var(--font-mono, monospace);
          font-weight: 700;
          font-size: 12px;
          color: #f3f0e5;
          background-color: #212a1f;
          width: fit-content;
          border-radius: 100px;
          padding: 4px 11px;
          margin-bottom: 6px;
        }
        .ctr-process-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 19px; color: #212a1f; margin: 0; }
        .ctr-process-desc { font-size: 13.5px; line-height: 1.65; color: #4c5343; margin: 0; }
        @media (min-width: 700px) {
          .ctr-process-row { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        }
        @media (min-width: 1020px) {
          .ctr-process-row { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 20px; padding-top: 8px; }
          .ctr-process-connector {
            display: block;
            position: absolute;
            top: 24px;
            left: 12%;
            right: 12%;
            height: 1px;
            background-image: repeating-linear-gradient(90deg, rgba(33,42,31,0.22) 0 6px, transparent 6px 14px);
            z-index: 0;
          }
        }
      `}</style>
    </section>
  );
}
