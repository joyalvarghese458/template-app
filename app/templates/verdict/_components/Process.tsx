"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f6f2e8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="How A Case Moves" />
          <h2 className="vd-process-heading">Four stages. No holding pattern.</h2>
          <p className="vd-process-sub">Every matter runs the same discipline, whether it&apos;s a five-week injunction or a two-year arbitration.</p>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vd-process-row">
          <div className="vd-process-connector" aria-hidden="true" />
          {PROCESS.map((m) => (
            <motion.div key={m.step} variants={fadeUp} className="vd-process-card">
              <div className="vd-process-node">
                <span className="vd-process-node-num">{m.step}</span>
              </div>
              <h3 className="vd-process-title">{m.title}</h3>
              <p className="vd-process-desc">{m.desc}</p>
              <span className="vd-process-output">{m.output}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vd-process-heading {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 12px;
          line-height: 1.15;
          max-width: 620px;
        }
        .vd-process-sub { font-size: 15px; line-height: 1.7; color: #57503f; margin: 0 0 44px; max-width: 560px; }
        .vd-process-row { position: relative; display: grid; grid-template-columns: 1fr; gap: 16px; }
        .vd-process-connector { display: none; }
        .vd-process-card {
          position: relative;
          border: 1px solid rgba(23,20,15,0.13);
          border-radius: 16px;
          padding: 26px 22px;
          background-color: #ece3cf;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vd-process-node {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #17140f;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }
        .vd-process-node-num { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 13px; color: #d9b06a; }
        .vd-process-title { font-family: var(--font-display, serif); font-weight: 700; font-size: 20px; color: #17140f; margin: 0; }
        .vd-process-desc { font-size: 13.5px; line-height: 1.65; color: #57503f; margin: 0; flex: 1; }
        .vd-process-output {
          display: inline-block;
          width: fit-content;
          font-size: 11px;
          font-weight: 700;
          color: #7c2334;
          background-color: rgba(124,35,52,0.08);
          border: 1px solid rgba(124,35,52,0.25);
          border-radius: 100px;
          padding: 6px 12px;
          margin-top: 4px;
        }
        @media (min-width: 700px) {
          .vd-process-row { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        }
        @media (min-width: 1020px) {
          .vd-process-row { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 20px; padding-top: 8px; }
          .vd-process-connector {
            display: block;
            position: absolute;
            top: 46px;
            left: 12%;
            right: 12%;
            height: 1px;
            background-image: repeating-linear-gradient(90deg, rgba(23,20,15,0.22) 0 6px, transparent 6px 14px);
            z-index: 0;
          }
        }
      `}</style>
    </section>
  );
}
