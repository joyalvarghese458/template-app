"use client";

import { motion } from "framer-motion";
import { ROADMAP } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Roadmap() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#111a2c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="How I Work" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 40px", lineHeight: 1.2 }}>
            One roadmap. Every engagement.
          </h2>
        </motion.div>

        <div className="atlas-roadmap-track">
          {ROADMAP.map((r, i) => (
            <motion.div
              key={r.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="atlas-roadmap-item"
            >
              <span className="atlas-roadmap-marker">
                <span className="atlas-roadmap-marker-num">{r.step}</span>
              </span>
              <div className="atlas-roadmap-card">
                <span className="atlas-roadmap-card-step">{r.step}</span>
                <h3 className="atlas-roadmap-card-title">{r.title}</h3>
                <p className="atlas-roadmap-card-desc">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .atlas-roadmap-track { position: relative; padding-left: 28px; }
        .atlas-roadmap-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1.5px;
          background-image: linear-gradient(#d4af6a, #9c3f4a, #3f8f76);
          opacity: 0.4;
        }
        .atlas-roadmap-item { position: relative; padding-bottom: 36px; }
        .atlas-roadmap-item:last-child { padding-bottom: 0; }
        .atlas-roadmap-marker {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #0a0f1c;
          border: 2px solid #d4af6a;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .atlas-roadmap-marker-num { display: none; }
        .atlas-roadmap-card {
          border: 1px solid rgba(243,239,228,0.1);
          border-radius: 14px;
          padding: 18px 20px;
          background-color: #16213a;
        }
        .atlas-roadmap-card-step { font-family: var(--font-display, serif); font-size: 12px; font-weight: 600; color: #d4af6a; }
        .atlas-roadmap-card-title { font-size: 17px; font-weight: 600; color: #f3efe4; margin: 6px 0 8px; }
        .atlas-roadmap-card-desc { font-size: 13.5px; line-height: 1.65; color: #aab4c9; margin: 0; }

        @media (min-width: 860px) {
          .atlas-roadmap-track { padding-left: 0; }
          .atlas-roadmap-track::before { left: 50%; transform: translateX(-50%); }
          .atlas-roadmap-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .atlas-roadmap-marker {
            position: static;
            grid-column: 2;
            width: 44px;
            height: 44px;
            margin: 0 auto;
            background-color: #111a2c;
            border-width: 2px;
            z-index: 1;
          }
          .atlas-roadmap-marker-num {
            display: block;
            font-family: var(--font-display, serif);
            font-size: 14px;
            font-weight: 600;
            color: #d4af6a;
          }
          .atlas-roadmap-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .atlas-roadmap-item:nth-child(even) .atlas-roadmap-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
