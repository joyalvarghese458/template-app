"use client";

import { motion } from "framer-motion";
import { CRAFT } from "../_data/portfolio";
import { fadeUp, growWidth, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#c15f3c", "#6f7d58", "#c15f3c", "#6f7d58", "#c15f3c", "#6f7d58"];

export default function Craft() {
  return (
    <section id="craft" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f7f1e8" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="The Craft" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Measured at the wheel.
          </h2>
        </motion.div>

        <div className="kln-craft-shelf">
          {CRAFT.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.06 }}
              className="kln-craft-row"
            >
              <span className="kln-craft-label">{s.label}</span>
              <div className="kln-craft-track">
                <motion.div
                  variants={growWidth(s.level, i * 0.06 + 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="kln-craft-clip"
                  style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                />
              </div>
              <span className="kln-craft-value">{s.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .kln-craft-shelf { display: flex; flex-direction: column; gap: 14px; padding: 8px 0; }
        .kln-craft-row { display: grid; grid-template-columns: 168px 1fr 40px; align-items: center; gap: 10px; }
        .kln-craft-label { font-size: 12.5px; font-weight: 600; color: #3a2e22; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .kln-craft-track {
          position: relative;
          height: 20px;
          border-radius: 100px;
          background-color: #efe4d3;
          border: 1px solid rgba(58,46,34,0.14);
          overflow: hidden;
        }
        .kln-craft-clip { position: relative; height: 100%; border-radius: 100px; opacity: 0.9; }
        .kln-craft-value { font-family: var(--font-mono, monospace); font-size: 12.5px; font-weight: 700; color: #6b5a45; text-align: right; }
        @media (min-width: 600px) {
          .kln-craft-row { grid-template-columns: 200px 1fr 44px; }
        }
      `}</style>
    </section>
  );
}
