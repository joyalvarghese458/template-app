"use client";

import { motion } from "framer-motion";
import { ENGAGEMENTS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Engagements() {
  return (
    <section id="engagements" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#eee8d9" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Selected Engagements" />
          <h2 className="vtg-eng-heading">Four decisions, made and delivered.</h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vtg-eng-grid">
          {ENGAGEMENTS.map((e) => (
            <motion.article key={e.id} variants={fadeUp} className="vtg-eng-card">
              <div className="vtg-eng-card-top">
                <span className="vtg-eng-id">{e.id}</span>
                <div>
                  <h3 className="vtg-eng-client">{e.client}</h3>
                  <span className="vtg-eng-sector">{e.sector}</span>
                </div>
                <span className="vtg-eng-category">{e.category}</span>
              </div>

              <dl className="vtg-eng-body">
                <div className="vtg-eng-row">
                  <dt>Challenge</dt>
                  <dd>{e.challenge}</dd>
                </div>
                <div className="vtg-eng-row">
                  <dt>Approach</dt>
                  <dd>{e.approach}</dd>
                </div>
                <div className="vtg-eng-row">
                  <dt>Result</dt>
                  <dd className="vtg-eng-result">{e.result}</dd>
                </div>
              </dl>

              <div className="vtg-eng-metrics">
                {e.metrics.map((m) => (
                  <div key={m.label} className="vtg-eng-metric">
                    <span className="vtg-eng-metric-value">{m.value}</span>
                    <span className="vtg-eng-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vtg-eng-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vtg-eng-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .vtg-eng-card {
          border: 1px solid rgba(23,20,15,0.13);
          border-radius: 16px;
          padding: 26px 24px;
          background-color: #f6f3ea;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .vtg-eng-card-top { display: flex; flex-direction: column; gap: 12px; }
        .vtg-eng-id { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: #b3703b; }
        .vtg-eng-client { font-family: var(--font-display, serif); font-weight: 600; font-size: 21px; color: #17140f; margin: 4px 0 2px; }
        .vtg-eng-sector { font-size: 12px; color: #8a8271; }
        .vtg-eng-category {
          width: fit-content;
          font-size: 10.5px;
          font-weight: 700;
          color: #0f6b56;
          background-color: rgba(15,107,86,0.1);
          border: 1px solid rgba(15,107,86,0.25);
          border-radius: 100px;
          padding: 5px 12px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .vtg-eng-body { display: flex; flex-direction: column; gap: 14px; margin: 0; }
        .vtg-eng-row { display: flex; flex-direction: column; gap: 4px; }
        .vtg-eng-row dt { font-family: var(--font-mono, monospace); font-size: 10px; font-weight: 700; color: #8a8271; text-transform: uppercase; letter-spacing: 0.06em; }
        .vtg-eng-row dd { margin: 0; font-size: 13.5px; line-height: 1.65; color: #4a4438; }
        .vtg-eng-result { color: #17140f; font-weight: 500; }
        .vtg-eng-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid rgba(23,20,15,0.12);
        }
        .vtg-eng-metric { display: flex; flex-direction: column; gap: 2px; }
        .vtg-eng-metric-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 18px; color: #0f6b56; }
        .vtg-eng-metric-label { font-size: 10px; color: #8a8271; }
        @media (min-width: 720px) {
          .vtg-eng-card-top { flex-direction: row; align-items: flex-start; justify-content: space-between; }
        }
        @media (min-width: 980px) {
          .vtg-eng-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
