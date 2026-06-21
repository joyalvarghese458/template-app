"use client";

import { motion } from "framer-motion";
import { ARSENAL } from "../_data/portfolio";
import { fadeUp, growBar, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Arsenal() {
  const categories = Object.entries(ARSENAL);

  return (
    <section id="arsenal" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#0a0f0c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Arsenal" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#e9f5ee", margin: "16px 0 40px", lineHeight: 1.18 }}>
            Tools &amp; techniques, scanned.
          </h2>
        </motion.div>

        <div className="cipher-arsenal-grid">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="cipher-arsenal-cat">{`// ${category}`}</h3>
              <div className="cipher-arsenal-rows">
                {skills.map((skill, i) => (
                  <div key={skill.name} className="cipher-arsenal-row">
                    <div className="cipher-arsenal-row-head">
                      <span className="cipher-arsenal-name">{skill.name}</span>
                      <span className="cipher-arsenal-pct">{skill.level}%</span>
                    </div>
                    <div className="cipher-arsenal-track" role="img" aria-label={`${skill.name}: ${skill.level}%`}>
                      <motion.div
                        className="cipher-arsenal-fill"
                        variants={growBar(skill.level, i * 0.08)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .cipher-arsenal-grid { display: grid; grid-template-columns: 1fr; gap: 36px; }
        .cipher-arsenal-cat {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          letter-spacing: 0.06em;
          color: #39ff8c;
          margin: 0 0 18px;
        }
        .cipher-arsenal-rows { display: flex; flex-direction: column; gap: 16px; }
        .cipher-arsenal-row-head { display: flex; justify-content: space-between; margin-bottom: 6px; }
        .cipher-arsenal-name { font-size: 13.5px; color: #c8d6cd; }
        .cipher-arsenal-pct { font-family: var(--font-mono, monospace); font-size: 12px; color: #8aa194; }
        .cipher-arsenal-track {
          position: relative;
          width: 100%;
          height: 8px;
          border-radius: 4px;
          background-color: rgba(255,255,255,0.06);
          overflow: hidden;
        }
        .cipher-arsenal-fill {
          position: absolute;
          inset: 0 auto 0 0;
          height: 100%;
          border-radius: 4px;
          background-image: linear-gradient(90deg, #1f8a52, #39ff8c);
        }
        @media (min-width: 760px) {
          .cipher-arsenal-grid { grid-template-columns: repeat(2, minmax(0,1fr)); gap: 40px 48px; }
        }
      `}</style>
    </section>
  );
}
