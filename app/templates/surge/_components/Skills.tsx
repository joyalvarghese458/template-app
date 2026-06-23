"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, growBar, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const ACCENTS = ["#2954ff", "#ff3d7f", "#00c875", "#ffa629"];

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f8f9fb" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="07" label="Skills" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#0f1222", margin: "16px 0 40px", lineHeight: 1.18 }}>
            The dashboard, if you could see it.
          </h2>
        </motion.div>

        <div className="surge-chart-groups">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="surge-chart-cat">{category}</h3>
              <div className="surge-bar-chart">
                {skills.map((skill, i) => (
                  <div key={skill.name} className="surge-bar-col">
                    <span className="surge-bar-pct">{skill.level}%</span>
                    <div className="surge-bar-track">
                      <motion.div
                        className="surge-bar-fill"
                        style={{ backgroundColor: ACCENTS[i % ACCENTS.length] }}
                        variants={growBar(skill.level, i * 0.08)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                      />
                    </div>
                    <span className="surge-bar-name">{skill.name}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .surge-chart-groups { display: flex; flex-direction: column; gap: 44px; }
        .surge-chart-cat {
          font-family: var(--font-display, sans-serif);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: #2954ff;
          margin: 0 0 20px;
        }
        .surge-bar-chart { display: grid; grid-template-columns: repeat(4, minmax(0,1fr)); gap: 14px; align-items: end; }
        .surge-bar-col { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .surge-bar-pct { font-family: var(--font-display, sans-serif); font-size: 13px; font-weight: 700; color: #0f1222; }
        .surge-bar-track {
          position: relative;
          width: 100%;
          max-width: 46px;
          height: 140px;
          border-radius: 8px;
          background-color: #e8ebf2;
          overflow: hidden;
          display: flex;
          align-items: flex-end;
        }
        .surge-bar-fill { width: 100%; border-radius: 8px 8px 0 0; }
        .surge-bar-name { font-size: 11px; color: #5b6178; text-align: center; line-height: 1.3; }
        @media (min-width: 760px) {
          .surge-chart-groups { flex-direction: row; gap: 64px; }
          .surge-chart-groups > * { flex: 1; }
        }
      `}</style>
    </section>
  );
}
