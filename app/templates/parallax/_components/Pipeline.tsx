"use client";

import { motion } from "framer-motion";
import { PIPELINE } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Pipeline() {
  return (
    <section id="pipeline" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#131419" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="The Pipeline" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f1f3f6", margin: "16px 0 40px", lineHeight: 1.2 }}>
            One pipeline. Every shot.
          </h2>
        </motion.div>

        <div className="prlx-pipeline-track">
          {PIPELINE.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              className="prlx-pipeline-item"
            >
              <span className="prlx-pipeline-marker">
                <span className="prlx-pipeline-marker-num">{p.step}</span>
              </span>
              <div className="prlx-pipeline-card">
                <span className="prlx-pipeline-card-step">{p.step}</span>
                <h3 className="prlx-pipeline-card-title">{p.title}</h3>
                <p className="prlx-pipeline-card-desc">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .prlx-pipeline-track { position: relative; padding-left: 28px; }
        .prlx-pipeline-track::before {
          content: "";
          position: absolute;
          left: 5px;
          top: 8px;
          bottom: 8px;
          width: 1.5px;
          background-image: linear-gradient(#2dd4bf, #67e8d8, #ff7a3d);
          opacity: 0.4;
        }
        .prlx-pipeline-item { position: relative; padding-bottom: 36px; }
        .prlx-pipeline-item:last-child { padding-bottom: 0; }
        .prlx-pipeline-marker {
          position: absolute;
          left: -28px;
          top: 4px;
          width: 13px;
          height: 13px;
          border-radius: 4px;
          background-color: #0c0d10;
          border: 2px solid #2dd4bf;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .prlx-pipeline-marker-num { display: none; }
        .prlx-pipeline-card {
          border: 1px solid rgba(241,243,246,0.1);
          border-radius: 14px;
          padding: 18px 20px;
          background-color: #181a21;
        }
        .prlx-pipeline-card-step { font-family: var(--font-display, sans-serif); font-size: 12px; font-weight: 700; color: #2dd4bf; }
        .prlx-pipeline-card-title { font-size: 17px; font-weight: 700; color: #f1f3f6; margin: 6px 0 8px; font-family: var(--font-display, sans-serif); }
        .prlx-pipeline-card-desc { font-size: 13.5px; line-height: 1.65; color: #9ba1ad; margin: 0; }

        @media (min-width: 860px) {
          .prlx-pipeline-track { padding-left: 0; }
          .prlx-pipeline-track::before { left: 50%; transform: translateX(-50%); }
          .prlx-pipeline-item {
            display: grid;
            grid-template-columns: 1fr 64px 1fr;
            align-items: center;
            padding-bottom: 52px;
          }
          .prlx-pipeline-marker {
            position: relative;
            grid-column: 2;
            width: 44px;
            height: 44px;
            border-radius: 10px;
            margin: 0 auto;
            background-color: #131419;
            border-width: 2px;
            z-index: 1;
          }
          .prlx-pipeline-marker-num {
            display: block;
            font-family: var(--font-display, sans-serif);
            font-size: 14px;
            font-weight: 700;
            color: #2dd4bf;
          }
          .prlx-pipeline-card { grid-column: 1; text-align: right; padding: 22px 36px 22px 22px; }
          .prlx-pipeline-item:nth-child(even) .prlx-pipeline-card { grid-column: 3; text-align: left; padding: 22px 22px 22px 36px; }
        }
      `}</style>
    </section>
  );
}
