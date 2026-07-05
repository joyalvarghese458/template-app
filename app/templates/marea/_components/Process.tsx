"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="method" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#071c27" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Field Method" />
          <h2 className="marea-h2-static">Four steps. Every dive.</h2>
        </motion.div>

        <div className="marea-process-grid" style={{ perspective: "1200px" }}>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03, borderColor: "rgba(47,226,196,0.5)" }}
              style={{ transformStyle: "preserve-3d" }}
              className="marea-process-card"
            >
              <span className="marea-process-step">{p.step}</span>
              <h3 className="marea-process-title">{p.title}</h3>
              <p className="marea-process-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .marea-process-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .marea-process-card {
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 24px;
          background-color: #0b2531;
          transition: border-color 0.2s;
          will-change: transform;
        }
        .marea-process-step { font-family: var(--font-display, serif); font-style: italic; font-size: 32px; font-weight: 500; color: #2fe2c4; display: block; margin-bottom: 12px; }
        .marea-process-title { font-size: 18px; font-weight: 600; color: #eaf6f5; margin: 0 0 8px; }
        .marea-process-desc { font-size: 13.5px; line-height: 1.6; color: #9fc0c2; margin: 0; }
        @media (min-width: 700px) {
          .marea-process-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
