"use client";

import { motion } from "framer-motion";
import { METHOD } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Method() {
  return (
    <section id="method" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f6f3ea" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="01" label="The Operating Method" />
          <h2 className="vtg-method-heading">Four stages. No slide deck theater.</h2>
          <p className="vtg-method-sub">Every engagement runs the same discipline, whether it&apos;s a five-month operating model rebuild or a three-week pricing sprint.</p>
        </motion.div>

        <motion.div variants={stagger(0.12)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vtg-method-row">
          <div className="vtg-method-connector" aria-hidden="true" />
          {METHOD.map((m) => (
            <motion.div key={m.step} variants={fadeUp} className="vtg-method-card">
              <div className="vtg-method-node">
                <span className="vtg-method-node-num">{m.step}</span>
              </div>
              <h3 className="vtg-method-title">{m.title}</h3>
              <p className="vtg-method-desc">{m.desc}</p>
              <span className="vtg-method-output">{m.output}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vtg-method-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 12px;
          line-height: 1.15;
          max-width: 620px;
        }
        .vtg-method-sub { font-size: 15px; line-height: 1.7; color: #4a4438; margin: 0 0 44px; max-width: 560px; }
        .vtg-method-row { position: relative; display: grid; grid-template-columns: 1fr; gap: 16px; }
        .vtg-method-connector { display: none; }
        .vtg-method-card {
          position: relative;
          border: 1px solid rgba(23,20,15,0.13);
          border-radius: 16px;
          padding: 26px 22px;
          background-color: #eee8d9;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .vtg-method-node {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background-color: #17140f;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 4px;
        }
        .vtg-method-node-num { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 13px; color: #f6f3ea; }
        .vtg-method-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 20px; color: #17140f; margin: 0; }
        .vtg-method-desc { font-size: 13.5px; line-height: 1.65; color: #4a4438; margin: 0; flex: 1; }
        .vtg-method-output {
          display: inline-block;
          width: fit-content;
          font-size: 11px;
          font-weight: 700;
          color: #0f6b56;
          background-color: rgba(15,107,86,0.1);
          border: 1px solid rgba(15,107,86,0.25);
          border-radius: 100px;
          padding: 6px 12px;
          margin-top: 4px;
        }
        @media (min-width: 700px) {
          .vtg-method-row { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        }
        @media (min-width: 1020px) {
          .vtg-method-row { grid-template-columns: repeat(4, minmax(0,1fr)); gap: 20px; padding-top: 8px; }
          .vtg-method-connector {
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
