"use client";

import { motion } from "framer-motion";
import { PROCESS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Process() {
  return (
    <section id="process" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f1e8d3" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="02" label="How Engagements Run" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Four steps. Every engagement.
          </h2>
        </motion.div>

        <div className="ledger-process-grid" style={{ perspective: "1200px" }}>
          {PROCESS.map((p, i) => (
            <motion.div
              key={p.step}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.08 }}
              whileHover={{ rotateX: -6, rotateY: 6, scale: 1.03, borderColor: "rgba(31,92,63,0.5)" }}
              style={{ transformStyle: "preserve-3d" }}
              className="ledger-process-card"
            >
              <span className="ledger-process-step">{p.step}</span>
              <h3 className="ledger-process-title">{p.title}</h3>
              <p className="ledger-process-desc">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .ledger-process-grid { display: grid; grid-template-columns: 1fr; gap: 16px; }
        .ledger-process-card {
          border: 1px solid rgba(22,41,31,0.14);
          border-radius: 10px;
          padding: 24px;
          background-color: #fffdf7;
          transition: border-color 0.2s;
          will-change: transform;
        }
        .ledger-process-step { font-family: var(--font-display, serif); font-size: 30px; font-weight: 600; color: #1f5c3f; display: block; margin-bottom: 12px; }
        .ledger-process-title { font-family: var(--font-display, serif); font-size: 18px; font-weight: 600; color: #16291f; margin: 0 0 8px; }
        .ledger-process-desc { font-size: 13.5px; line-height: 1.6; color: #4d5f52; margin: 0; }
        @media (min-width: 700px) {
          .ledger-process-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}
