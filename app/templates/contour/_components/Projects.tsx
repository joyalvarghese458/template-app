"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "../_data/portfolio";
import { fadeUp, stagger, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3f0e5" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Selected Sites" />
          <h2 className="ctr-proj-heading">Four sites, four hundred acres.</h2>
        </motion.div>

        <motion.div variants={stagger(0.1)} initial="hidden" whileInView="visible" viewport={VIEWPORT} className="ctr-proj-grid">
          {PROJECTS.map((p) => (
            <motion.article key={p.id} variants={fadeUp} className="ctr-proj-card">
              <div className="ctr-proj-card-top">
                <span className="ctr-proj-id">{p.id}</span>
                <div>
                  <h3 className="ctr-proj-name">{p.name}</h3>
                  <span className="ctr-proj-location">{p.location} · {p.area}</span>
                </div>
                <span className="ctr-proj-typology">{p.typology}</span>
              </div>

              <dl className="ctr-proj-body">
                <div className="ctr-proj-row">
                  <dt>Challenge</dt>
                  <dd>{p.challenge}</dd>
                </div>
                <div className="ctr-proj-row">
                  <dt>Approach</dt>
                  <dd>{p.approach}</dd>
                </div>
                <div className="ctr-proj-row">
                  <dt>Result</dt>
                  <dd className="ctr-proj-result">{p.result}</dd>
                </div>
              </dl>

              <div className="ctr-proj-metrics">
                {p.metrics.map((m) => (
                  <div key={m.label} className="ctr-proj-metric">
                    <span className="ctr-proj-metric-value">{m.value}</span>
                    <span className="ctr-proj-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>

      <style>{`
        .ctr-proj-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #212a1f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .ctr-proj-grid { display: grid; grid-template-columns: 1fr; gap: 18px; }
        .ctr-proj-card {
          border: 1px solid rgba(33,42,31,0.13);
          border-radius: 14px;
          padding: 26px 24px;
          background-color: #e7e0cb;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .ctr-proj-card-top { display: flex; flex-direction: column; gap: 12px; }
        .ctr-proj-id { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: #2f6b74; }
        .ctr-proj-name { font-family: var(--font-display, serif); font-weight: 600; font-size: 21px; color: #212a1f; margin: 4px 0 2px; }
        .ctr-proj-location { font-size: 12px; color: #868c76; }
        .ctr-proj-typology {
          width: fit-content;
          font-size: 10.5px;
          font-weight: 700;
          color: #4b6b3f;
          background-color: rgba(75,107,63,0.12);
          border: 1px solid rgba(75,107,63,0.28);
          border-radius: 100px;
          padding: 5px 12px;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .ctr-proj-body { display: flex; flex-direction: column; gap: 14px; margin: 0; }
        .ctr-proj-row { display: flex; flex-direction: column; gap: 4px; }
        .ctr-proj-row dt { font-family: var(--font-mono, monospace); font-size: 10px; font-weight: 700; color: #868c76; text-transform: uppercase; letter-spacing: 0.06em; }
        .ctr-proj-row dd { margin: 0; font-size: 13.5px; line-height: 1.65; color: #4c5343; }
        .ctr-proj-result { color: #212a1f; font-weight: 500; }
        .ctr-proj-metrics {
          display: grid;
          grid-template-columns: repeat(3, minmax(0,1fr));
          gap: 10px;
          padding-top: 16px;
          border-top: 1px solid rgba(33,42,31,0.12);
        }
        .ctr-proj-metric { display: flex; flex-direction: column; gap: 2px; }
        .ctr-proj-metric-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 17px; color: #4b6b3f; }
        .ctr-proj-metric-label { font-size: 10px; color: #868c76; }
        @media (min-width: 720px) {
          .ctr-proj-card-top { flex-direction: row; align-items: flex-start; justify-content: space-between; }
        }
        @media (min-width: 980px) {
          .ctr-proj-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
