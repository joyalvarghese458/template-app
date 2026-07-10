"use client";

import { motion } from "framer-motion";
import { MATTERS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Matters() {
  return (
    <section id="matters" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#ece3cf" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Notable Matters" />
          <h2 className="vd-matter-heading">Four matters, closed and collected.</h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="vd-matter-grid">
          {MATTERS.map((e) => (
            <motion.article key={e.id} variants={fadeUp} className="vd-matter-card">
              <div className="vd-matter-card-top">
                <span className="vd-matter-id">{e.id}</span>
                <div>
                  <h3 className="vd-matter-client">{e.client}</h3>
                  <span className="vd-matter-sector">{e.sector}</span>
                </div>
                <span className="vd-matter-category">{e.category}</span>
              </div>

              <dl className="vd-matter-body">
                <div className="vd-matter-row">
                  <dt>Challenge</dt>
                  <dd>{e.challenge}</dd>
                </div>
                <div className="vd-matter-row">
                  <dt>Approach</dt>
                  <dd>{e.approach}</dd>
                </div>
                <div className="vd-matter-row">
                  <dt>Result</dt>
                  <dd className="vd-matter-result">{e.result}</dd>
                </div>
              </dl>

              <div className="vd-matter-metrics">
                {e.metrics.map((m) => (
                  <div key={m.label} className="vd-matter-metric">
                    <span className="vd-matter-metric-value">{m.value}</span>
                    <span className="vd-matter-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        .vd-matter-heading {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vd-matter-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .vd-matter-card {
          border: 1px solid rgba(23,20,15,0.13);
          border-radius: 16px;
          padding: 26px 24px;
          background-color: #f6f2e8;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .vd-matter-card-top { display: flex; flex-direction: column; gap: 12px; }
        .vd-matter-id { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: #7c2334; }
        .vd-matter-client { font-family: var(--font-display, serif); font-weight: 700; font-size: 21px; color: #17140f; margin: 4px 0 2px; }
        .vd-matter-sector { font-size: 12px; color: #948b74; }
        .vd-matter-category {
          width: fit-content;
          font-size: 10.5px;
          font-weight: 700;
          color: #b6903f;
          background-color: rgba(182,144,63,0.12);
          border: 1px solid rgba(182,144,63,0.3);
          border-radius: 100px;
          padding: 5px 12px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .vd-matter-body { display: flex; flex-direction: column; gap: 14px; margin: 0; }
        .vd-matter-row { display: flex; flex-direction: column; gap: 4px; }
        .vd-matter-row dt { font-family: var(--font-mono, monospace); font-size: 10px; font-weight: 700; color: #948b74; text-transform: uppercase; letter-spacing: 0.06em; }
        .vd-matter-row dd { margin: 0; font-size: 13.5px; line-height: 1.65; color: #57503f; }
        .vd-matter-result { color: #17140f; font-weight: 500; }
        .vd-matter-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid rgba(23,20,15,0.12);
        }
        .vd-matter-metric { display: flex; flex-direction: column; gap: 2px; }
        .vd-matter-metric-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 18px; color: #7c2334; }
        .vd-matter-metric-label { font-size: 10px; color: #948b74; }
        @media (min-width: 720px) {
          .vd-matter-card-top { flex-direction: row; align-items: flex-start; justify-content: space-between; }
        }
        @media (min-width: 980px) {
          .vd-matter-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
