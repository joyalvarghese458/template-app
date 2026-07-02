"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f3ecdc" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="The Process" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 40px", lineHeight: 1.15 }}>
            From note to bottle.
          </h2>
        </motion.div>

        <div className="sil-process-track">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="sil-process-item"
            >
              <span className="sil-process-marker">
                <span className="sil-process-marker-num">{p.step}</span>
              </span>
              <div className="sil-process-card">
                <span className="sil-process-card-step">Étape {p.step}</span>
                <h3 className="sil-process-card-title">{p.title}</h3>
                <p className="sil-process-card-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .sil-process-track { position: relative; padding-left: 28px; }
        .sil-process-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background-image: linear-gradient(#b6752c, #b1556b);
          opacity: 0.4;
        }
        .sil-process-item { position: relative; padding-bottom: 36px; }
        .sil-process-item:last-child { padding-bottom: 0; }
        .sil-process-marker {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #faf5ea;
          border: 2px solid #b1556b;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sil-process-marker-num { display: none; }
        .sil-process-card {
          border: 1px solid rgba(43,32,21,0.14);
          border-radius: 14px;
          padding: 18px 20px;
          background-color: #faf5ea;
        }
        .sil-process-card-step { font-family: var(--font-body, sans-serif); font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #b1556b; }
        .sil-process-card-title { font-size: 19px; font-weight: 600; color: #2b2015; margin: 6px 0 8px; font-family: var(--font-display, serif); }
        .sil-process-card-desc { font-size: 13.5px; line-height: 1.65; color: #6f5f47; margin: 0; }

        @media (min-width: 860px) {
          .sil-process-track { padding-left: 0; }
          .sil-process-track::before { left: 50%; transform: translateX(-50%); }
          .sil-process-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .sil-process-marker {
            position: relative;
            grid-column: 2;
            width: 42px;
            height: 42px;
            margin: 0 auto;
            background-color: #f3ecdc;
            border-width: 2px;
            z-index: 1;
          }
          .sil-process-marker-num {
            display: block;
            font-family: var(--font-display, serif);
            font-size: 15px;
            font-weight: 700;
            color: #b1556b;
          }
          .sil-process-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .sil-process-item:nth-child(even) .sil-process-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
