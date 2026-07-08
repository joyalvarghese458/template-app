"use client";

import { motion } from "framer-motion";
import { COLLECTION } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Collection() {
  return (
    <section id="collection" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#efe4d3" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="The Collection" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Six forms, one studio.
          </h2>
        </motion.div>

        <div className="kln-piece-grid">
          {COLLECTION.map((piece, i) => (
            <motion.article
              key={piece.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: (i % 3) * 0.08 }}
              className="kln-piece-card"
            >
              <div className="kln-piece-head">
                <span className="kln-piece-id">{piece.id}</span>
                <span className="kln-piece-category">{piece.category}</span>
              </div>
              <h3 className="kln-piece-title">{piece.title}</h3>
              <p className="kln-piece-desc">{piece.description}</p>
              <ul className="kln-piece-notes">
                {piece.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <div className="kln-piece-metrics">
                {piece.metrics.map((m) => (
                  <div key={m.label} className="kln-piece-metric">
                    <span className="kln-piece-metric-value">{m.value}</span>
                    <span className="kln-piece-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .kln-piece-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .kln-piece-card {
          border: 1px solid rgba(58,46,34,0.14);
          border-radius: 14px;
          padding: 24px 22px;
          background-color: #f7f1e8;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .kln-piece-card:hover {
          transform: translateY(-4px);
          border-color: rgba(193,95,60,0.4);
          box-shadow: 0 20px 40px -16px rgba(58,46,34,0.22);
        }
        .kln-piece-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
        .kln-piece-id { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: #c15f3c; }
        .kln-piece-category { font-family: var(--font-mono, monospace); font-size: 10px; color: #a08d70; text-transform: uppercase; letter-spacing: 0.04em; }
        .kln-piece-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 22px; color: #3a2e22; margin: 0 0 10px; }
        .kln-piece-desc { font-size: 13.5px; line-height: 1.65; color: #6b5a45; margin: 0 0 16px; }
        .kln-piece-notes { list-style: none; margin: 0 0 18px; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .kln-piece-notes li { font-size: 12px; color: #6b5a45; padding-left: 16px; position: relative; }
        .kln-piece-notes li::before { content: "—"; position: absolute; left: 0; color: #6f7d58; }
        .kln-piece-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding-top: 14px; border-top: 1px solid rgba(58,46,34,0.12); }
        .kln-piece-metric { display: flex; flex-direction: column; gap: 2px; }
        .kln-piece-metric-value { font-family: var(--font-mono, monospace); font-size: 13px; font-weight: 700; color: #a0491f; }
        .kln-piece-metric-label { font-size: 9.5px; color: #a08d70; text-transform: uppercase; letter-spacing: 0.03em; }
        @media (min-width: 700px) {
          .kln-piece-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1040px) {
          .kln-piece-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
