"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#17140f" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="The Bench" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f2ead9", margin: "16px 0 40px", lineHeight: 1.15 }}>
            From mainplate to wrist.
          </h2>
        </motion.div>

        <div className="esc-process-track">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="esc-process-item"
            >
              <span className="esc-process-marker">
                <span className="esc-process-marker-num">{p.step}</span>
              </span>
              <div className="esc-process-card">
                <span className="esc-process-card-step">Stage {p.step}</span>
                <h3 className="esc-process-card-title">{p.title}</h3>
                <p className="esc-process-card-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .esc-process-track { position: relative; padding-left: 28px; }
        .esc-process-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1px;
          background-image: linear-gradient(#c9a24b, #4f8577);
          opacity: 0.45;
        }
        .esc-process-item { position: relative; padding-bottom: 36px; }
        .esc-process-item:last-child { padding-bottom: 0; }
        .esc-process-marker {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #17140f;
          border: 2px solid #c9a24b;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .esc-process-marker-num { display: none; }
        .esc-process-card {
          border: 1px solid rgba(242,234,217,0.12);
          border-radius: 14px;
          padding: 18px 20px;
          background-color: #1f1a13;
        }
        .esc-process-card-step { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #c9a24b; }
        .esc-process-card-title { font-size: 19px; font-weight: 600; color: #f2ead9; margin: 6px 0 8px; font-family: var(--font-display, serif); }
        .esc-process-card-desc { font-size: 13.5px; line-height: 1.65; color: #b9ac93; margin: 0; }

        @media (min-width: 860px) {
          .esc-process-track { padding-left: 0; }
          .esc-process-track::before { left: 50%; transform: translateX(-50%); }
          .esc-process-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .esc-process-marker {
            position: relative;
            grid-column: 2;
            width: 42px;
            height: 42px;
            margin: 0 auto;
            background-color: #17140f;
            border-width: 2px;
            z-index: 1;
          }
          .esc-process-marker-num {
            display: block;
            font-family: var(--font-mono, monospace);
            font-size: 14px;
            font-weight: 700;
            color: #c9a24b;
          }
          .esc-process-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .esc-process-item:nth-child(even) .esc-process-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
