"use client";

import { motion } from "framer-motion";
import { CRAFT } from "../_data/portfolio";
import { fadeUp, growWidth, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#b6752c", "#b1556b", "#b6752c", "#b1556b", "#b6752c", "#b1556b"];

export default function Craft() {
  return (
    <section id="craft" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#faf5ea" }}>
      <div style={{ maxWidth: "920px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="The Craft" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 40px", lineHeight: 1.15 }}>
            Measured in maceration time.
          </h2>
        </motion.div>

        <div className="sil-craft-shelf">
          {CRAFT.map((s, i) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: i * 0.06 }}
              className="sil-craft-row"
            >
              <span className="sil-craft-label">{s.label}</span>
              <div className="sil-craft-track">
                <motion.div
                  variants={growWidth(s.level, i * 0.06 + 0.15)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                  className="sil-craft-clip"
                  style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                />
              </div>
              <span className="sil-craft-value">{s.level}%</span>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .sil-craft-shelf { display: flex; flex-direction: column; gap: 14px; padding: 8px 0; }
        .sil-craft-row { display: grid; grid-template-columns: 128px 1fr 40px; align-items: center; gap: 10px; }
        .sil-craft-label { font-size: 12.5px; font-weight: 600; color: #2b2015; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .sil-craft-track {
          position: relative;
          height: 20px;
          border-radius: 100px;
          background-color: #f3ecdc;
          border: 1px solid rgba(43,32,21,0.14);
          overflow: hidden;
        }
        .sil-craft-clip { position: relative; height: 100%; border-radius: 100px; opacity: 0.88; }
        .sil-craft-value { font-family: var(--font-display, serif); font-size: 13px; font-weight: 700; color: #6f5f47; text-align: right; }
        @media (min-width: 600px) {
          .sil-craft-row { grid-template-columns: 168px 1fr 44px; }
        }
      `}</style>
    </section>
  );
}
