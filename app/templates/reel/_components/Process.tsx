"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#14100c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="The Process" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Script to screen.
          </h2>
        </motion.div>

        <div className="rl-process-track">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="rl-process-item"
            >
              <span className="rl-process-marker">
                <span className="rl-process-marker-num">{p.step}</span>
              </span>
              <div className="rl-process-card">
                <span className="rl-process-card-step">SCENE {p.step}</span>
                <h3 className="rl-process-card-title">{p.title}</h3>
                <p className="rl-process-card-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .rl-process-track { position: relative; padding-left: 28px; }
        .rl-process-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1.5px;
          background-image: repeating-linear-gradient(#c9a15a 0 6px, transparent 6px 12px);
          opacity: 0.6;
        }
        .rl-process-item { position: relative; padding-bottom: 36px; }
        .rl-process-item:last-child { padding-bottom: 0; }
        .rl-process-marker {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 3px;
          background-color: #0a0806;
          border: 2px solid #d1263f;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rl-process-marker-num { display: none; }
        .rl-process-card {
          border: 1px solid rgba(201,161,90,0.2);
          border-radius: 12px;
          padding: 18px 20px;
          background-color: #1c1611;
        }
        .rl-process-card-step { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; letter-spacing: 0.04em; color: #d1263f; }
        .rl-process-card-title { font-size: 18px; font-weight: 400; text-transform: uppercase; letter-spacing: 0.02em; color: #f3ece1; margin: 6px 0 8px; font-family: var(--font-display, sans-serif); }
        .rl-process-card-desc { font-size: 13.5px; line-height: 1.65; color: #b7a996; margin: 0; }

        @media (min-width: 860px) {
          .rl-process-track { padding-left: 0; }
          .rl-process-track::before { left: 50%; transform: translateX(-50%); }
          .rl-process-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .rl-process-marker {
            position: relative;
            grid-column: 2;
            width: 44px;
            height: 44px;
            border-radius: 8px;
            margin: 0 auto;
            background-color: #14100c;
            border-width: 2px;
            z-index: 1;
          }
          .rl-process-marker-num {
            display: block;
            font-family: var(--font-mono, monospace);
            font-size: 13px;
            font-weight: 700;
            color: #d1263f;
          }
          .rl-process-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .rl-process-item:nth-child(even) .rl-process-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
