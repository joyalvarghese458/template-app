"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#16161a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="Design Process" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: "16px 0 40px", lineHeight: 1.1, textTransform: "uppercase" }}>
            Four gates. Every part.
          </h2>
        </motion.div>

        <div className="redline-process-grid" style={{ perspective: "1200px" }}>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03, borderColor: "rgba(225,6,0,0.5)" }}
              style={{ transformStyle: "preserve-3d" }}
              className="redline-process-card"
            >
              <span className="redline-process-step">{p.step}</span>
              <h3 className="redline-process-title">{p.title}</h3>
              <p className="redline-process-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .redline-process-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .redline-process-card {
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 10px;
          padding: 24px;
          background-color: #1d1d22;
          transition: border-color 0.2s;
          will-change: transform;
        }
        .redline-process-step { font-family: var(--font-display, sans-serif); font-size: 30px; font-weight: 700; color: #e10600; display: block; margin-bottom: 12px; }
        .redline-process-title { font-family: var(--font-display, sans-serif); font-size: 18px; font-weight: 700; color: #f2f2f0; margin: 0 0 8px; text-transform: uppercase; }
        .redline-process-desc { font-size: 13.5px; line-height: 1.6; color: #9a9aa0; margin: 0; }
        @media (min-width: 700px) {
          .redline-process-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
