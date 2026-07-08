"use client";

import { motion } from "framer-motion";
import { TIMEPIECES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Timepieces() {
  return (
    <section id="collection" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#17140f" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="The Collection" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f2ead9", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Six calibers, one bench.
          </h2>
        </motion.div>

        <div className="esc-piece-grid">
          {TIMEPIECES.map((piece, i) => (
            <motion.article
              key={piece.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: (i % 3) * 0.08 }}
              className="esc-piece-card"
            >
              <div className="esc-piece-head">
                <span className="esc-piece-id">{piece.id}</span>
                <span className="esc-piece-category">{piece.category}</span>
              </div>
              <h3 className="esc-piece-title">{piece.title}</h3>
              <p className="esc-piece-desc">{piece.description}</p>
              <ul className="esc-piece-notes">
                {piece.notes.map((n) => (
                  <li key={n}>{n}</li>
                ))}
              </ul>
              <div className="esc-piece-metrics">
                {piece.metrics.map((m) => (
                  <div key={m.label} className="esc-piece-metric">
                    <span className="esc-piece-metric-value">{m.value}</span>
                    <span className="esc-piece-metric-label">{m.label}</span>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <style>{`
        .esc-piece-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .esc-piece-card {
          border: 1px solid rgba(242,234,217,0.12);
          border-radius: 14px;
          padding: 24px 22px;
          background-color: #1f1a13;
          transition: transform 0.3s, border-color 0.3s, box-shadow 0.3s;
        }
        .esc-piece-card:hover {
          transform: translateY(-4px);
          border-color: rgba(201,162,75,0.4);
          box-shadow: 0 20px 40px -16px rgba(0,0,0,0.5);
        }
        .esc-piece-head { display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 10px; }
        .esc-piece-id { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; color: #c9a24b; }
        .esc-piece-category { font-family: var(--font-mono, monospace); font-size: 10px; color: #7d7362; text-transform: uppercase; letter-spacing: 0.04em; }
        .esc-piece-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 22px; color: #f2ead9; margin: 0 0 10px; }
        .esc-piece-desc { font-size: 13.5px; line-height: 1.65; color: #b9ac93; margin: 0 0 16px; }
        .esc-piece-notes { list-style: none; margin: 0 0 18px; padding: 0; display: flex; flex-direction: column; gap: 6px; }
        .esc-piece-notes li { font-size: 12px; color: #b9ac93; padding-left: 16px; position: relative; }
        .esc-piece-notes li::before { content: "—"; position: absolute; left: 0; color: #6fa295; }
        .esc-piece-metrics { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; padding-top: 14px; border-top: 1px solid rgba(242,234,217,0.1); }
        .esc-piece-metric { display: flex; flex-direction: column; gap: 2px; }
        .esc-piece-metric-value { font-family: var(--font-mono, monospace); font-size: 13px; font-weight: 700; color: #e8c876; }
        .esc-piece-metric-label { font-size: 9.5px; color: #7d7362; text-transform: uppercase; letter-spacing: 0.03em; }
        @media (min-width: 700px) {
          .esc-piece-grid { grid-template-columns: repeat(2, minmax(0,1fr)); }
        }
        @media (min-width: 1040px) {
          .esc-piece-grid { grid-template-columns: repeat(3, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
