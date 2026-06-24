"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#1c1613" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Mise en Place" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.6vw, 40px)", color: "#f5ece0", margin: "16px 0 40px", lineHeight: 1.2 }}>
            One method. Every service.
          </h2>
        </motion.div>

        <div className="umami-process-track">
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="umami-process-item"
            >
              <span className="umami-process-marker">
                <span className="umami-process-marker-num">{p.step}</span>
              </span>
              <div className="umami-process-card">
                <span className="umami-process-card-step">{p.step}</span>
                <h3 className="umami-process-card-title">{p.title}</h3>
                <p className="umami-process-card-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .umami-process-track { position: relative; padding-left: 28px; }
        .umami-process-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1.5px;
          background-image: linear-gradient(#e8552c, #ff8a4c, #7c2233);
          opacity: 0.4;
        }
        .umami-process-item { position: relative; padding-bottom: 36px; }
        .umami-process-item:last-child { padding-bottom: 0; }
        .umami-process-marker {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 50%;
          background-color: #15110f;
          border: 2px solid #e8552c;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .umami-process-marker-num { display: none; }
        .umami-process-card {
          border: 1px solid rgba(245,236,224,0.1);
          border-radius: 14px;
          padding: 18px 20px;
          background-color: #231b17;
        }
        .umami-process-card-step { font-family: var(--font-display, serif); font-size: 12px; font-weight: 600; color: #e8552c; }
        .umami-process-card-title { font-size: 18px; font-weight: 600; color: #f5ece0; margin: 6px 0 8px; font-family: var(--font-display, serif); }
        .umami-process-card-desc { font-size: 13.5px; line-height: 1.65; color: #c4b6a8; margin: 0; }

        @media (min-width: 860px) {
          .umami-process-track { padding-left: 0; }
          .umami-process-track::before { left: 50%; transform: translateX(-50%); }
          .umami-process-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .umami-process-marker {
            position: relative;
            grid-column: 2;
            width: 44px;
            height: 44px;
            margin: 0 auto;
            background-color: #1c1613;
            border-width: 2px;
            z-index: 1;
          }
          .umami-process-marker-num {
            display: block;
            font-family: var(--font-display, serif);
            font-size: 14px;
            font-weight: 600;
            color: #e8552c;
          }
          .umami-process-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .umami-process-item:nth-child(even) .umami-process-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
