"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#16161a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="07" label="Skills" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: "16px 0 40px", lineHeight: 1.1, textTransform: "uppercase" }}>
            Redlined and verified.
          </h2>
        </motion.div>

        <div className="redline-skills-groups">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
            >
              <h3 className="redline-skills-cat">{category}</h3>
              <div className="redline-gauge-grid">
                {skills.map((skill, i) => (
                  <Gauge key={skill.name} name={skill.name} level={skill.level} delay={i * 0.08} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .redline-skills-groups { display: flex; flex-direction: column; gap: 44px; }
        .redline-skills-cat {
          font-family: var(--font-display, sans-serif);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #e10600;
          text-transform: uppercase;
          margin: 0 0 20px;
        }
        .redline-gauge-grid { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 18px; }
        @media (min-width: 700px) {
          .redline-gauge-grid { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        .redline-gauge-card { display: flex; flex-direction: column; align-items: center; gap: 4px; text-align: center; }
        .redline-gauge-pct { font-family: var(--font-display, sans-serif); font-size: 18px; font-weight: 700; color: #f2f2f0; margin-top: -4px; }
        .redline-gauge-name { font-size: 11.5px; color: #9a9aa0; max-width: 110px; line-height: 1.3; }
      `}</style>
    </section>
  );
}

function Gauge({ name, level, delay }: { name: string; level: number; delay: number }) {
  const needleRotate = -90 + (level / 100) * 180;

  return (
    <div className="redline-gauge-card">
      <svg viewBox="0 0 120 66" width="100" height="56">
        <path d="M10,60 A50,50 0 0,1 110,60" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="8" strokeLinecap="round" />
        <path d="M10,60 A50,50 0 0,1 36,16" fill="none" stroke="#ffb700" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        <path d="M84,16 A50,50 0 0,1 110,60" fill="none" stroke="#e10600" strokeWidth="8" strokeLinecap="round" opacity="0.6" />
        <motion.line
          x1="60" y1="60" x2="60" y2="18"
          stroke="#f2f2f0"
          strokeWidth="2.5"
          strokeLinecap="round"
          style={{ transformOrigin: "60px 60px" }}
          initial={{ rotate: -90 }}
          whileInView={{ rotate: needleRotate }}
          viewport={VIEWPORT}
          transition={{ duration: 1, ease: [0.65, 0, 0.35, 1], delay }}
        />
        <circle cx="60" cy="60" r="4" fill="#f2f2f0" />
      </svg>
      <span className="redline-gauge-pct">{level}%</span>
      <span className="redline-gauge-name">{name}</span>
    </div>
  );
}
