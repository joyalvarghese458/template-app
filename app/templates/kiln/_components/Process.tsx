"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#efe4d3" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="The Studio" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: "16px 0 40px", lineHeight: 1.15 }}>
            From lump to finished glaze.
          </h2>
        </motion.div>

        <div className="kln-process-track">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="kln-process-item"
            >
              <span className="kln-process-marker">
                <span className="kln-process-marker-num">{p.step}</span>
              </span>
              <div className="kln-process-card">
                <span className="kln-process-card-step">Stage {p.step}</span>
                <h3 className="kln-process-card-title">{p.title}</h3>
                <p className="kln-process-card-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .kln-process-track { position: relative; padding-left: 28px; }
        .kln-process-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background-image: linear-gradient(#c15f3c, #6f7d58);
          opacity: 0.4;
        }
        .kln-process-item { position: relative; padding-bottom: 36px; }
        .kln-process-item:last-child { padding-bottom: 0; }
        .kln-process-marker {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #efe4d3;
          border: 2px solid #c15f3c;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kln-process-marker-num { display: none; }
        .kln-process-card {
          border: 1px solid rgba(58,46,34,0.14);
          border-radius: 14px;
          padding: 18px 20px;
          background-color: #f7f1e8;
        }
        .kln-process-card-step { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #c15f3c; }
        .kln-process-card-title { font-size: 19px; font-weight: 600; color: #3a2e22; margin: 6px 0 8px; font-family: var(--font-display, serif); }
        .kln-process-card-desc { font-size: 13.5px; line-height: 1.65; color: #6b5a45; margin: 0; }

        @media (min-width: 860px) {
          .kln-process-track { padding-left: 0; }
          .kln-process-track::before { left: 50%; transform: translateX(-50%); }
          .kln-process-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .kln-process-marker {
            position: relative;
            grid-column: 2;
            width: 42px;
            height: 42px;
            margin: 0 auto;
            background-color: #efe4d3;
            border-width: 2px;
            z-index: 1;
          }
          .kln-process-marker-num {
            display: block;
            font-family: var(--font-mono, monospace);
            font-size: 14px;
            font-weight: 700;
            color: #c15f3c;
          }
          .kln-process-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .kln-process-item:nth-child(even) .kln-process-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
