"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="method" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#1c1610" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Field Method" />
          <h2 className="lithos-h2-static">Four steps. Every outcrop.</h2>
        </motion.div>

        <div className="lithos-process-grid" style={{ perspective: "1200px" }}>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03, borderColor: "rgba(232,112,42,0.5)" }}
              style={{ transformStyle: "preserve-3d" }}
              className="lithos-process-card"
            >
              <span className="lithos-process-step">{p.step}</span>
              <h3 className="lithos-process-title">{p.title}</h3>
              <p className="lithos-process-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .lithos-process-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .lithos-process-card {
          border: 1px solid rgba(255,255,255,0.09);
          border-radius: 10px;
          padding: 24px;
          background-color: #251d15;
          transition: border-color 0.2s;
          will-change: transform;
        }
        .lithos-process-step { font-family: var(--font-display, serif); font-style: italic; font-size: 32px; font-weight: 500; color: #e8702a; display: block; margin-bottom: 12px; }
        .lithos-process-title { font-size: 18px; font-weight: 600; color: #f4ece1; margin: 0 0 8px; }
        .lithos-process-desc { font-size: 13.5px; line-height: 1.6; color: #b3a392; margin: 0; }
        @media (min-width: 700px) {
          .lithos-process-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
