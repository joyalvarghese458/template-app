"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const PETAL_COLORS = ["#e8702a", "#c89a55", "#7c8a55", "#a8674a"];
const CENTER = 100;
const INNER_R = 16;
const MAX_R = 84;

function polar(radius: number, angleDeg: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

function petalPath(level: number, angleStart: number, angleEnd: number) {
  const r = INNER_R + (level / 100) * (MAX_R - INNER_R);
  const p1 = polar(INNER_R, angleStart);
  const p2 = polar(r, angleStart);
  const p3 = polar(r, angleEnd);
  const p4 = polar(INNER_R, angleEnd);
  return `M ${p1.x} ${p1.y} L ${p2.x} ${p2.y} A ${r} ${r} 0 0 1 ${p3.x} ${p3.y} L ${p4.x} ${p4.y} A ${INNER_R} ${INNER_R} 0 0 0 ${p1.x} ${p1.y} Z`;
}

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#120e0a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Skills" />
          <h2 className="lithos-h2-static">Plotted like a strike-and-dip rose.</h2>
        </motion.div>

        <div className="lithos-rose-groups">
          {categories.map(([category, skills], catIndex) => (
            <motion.div
              key={category}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={VIEWPORT}
              transition={{ delay: catIndex * 0.06 }}
              className="lithos-rose-block"
            >
              <h3 className="lithos-rose-cat">{category}</h3>
              <div className="lithos-rose-row">
                <svg viewBox="0 0 200 200" className="lithos-rose-svg" aria-hidden="true">
                  <circle cx={CENTER} cy={CENTER} r={MAX_R} fill="none" stroke="rgba(255,255,255,0.06)" />
                  <circle cx={CENTER} cy={CENTER} r={(MAX_R + INNER_R) / 2} fill="none" stroke="rgba(255,255,255,0.05)" />
                  {skills.map((skill, i) => {
                    const span = 360 / skills.length;
                    const angleStart = i * span + span * 0.08;
                    const angleEnd = (i + 1) * span - span * 0.08;
                    return (
                      <motion.path
                        key={skill.name}
                        d={petalPath(skill.level, angleStart, angleEnd)}
                        fill={PETAL_COLORS[i % PETAL_COLORS.length]}
                        opacity={0.88}
                        style={{ transformOrigin: "100px 100px" }}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={VIEWPORT}
                        transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                      />
                    );
                  })}
                  <circle cx={CENTER} cy={CENTER} r={INNER_R - 4} fill="#1c1610" stroke="rgba(255,255,255,0.1)" />
                </svg>

                <ul className="lithos-rose-legend">
                  {skills.map((skill, i) => (
                    <li key={skill.name}>
                      <span className="lithos-rose-dot" style={{ backgroundColor: PETAL_COLORS[i % PETAL_COLORS.length] }} />
                      <span className="lithos-rose-name">{skill.name}</span>
                      <span className="lithos-rose-level">{skill.level}%</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .lithos-rose-groups { display: flex; flex-direction: column; gap: 44px; }
        .lithos-rose-cat {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #e8702a;
          text-transform: uppercase;
          margin: 0 0 20px;
        }
        .lithos-rose-row { display: flex; flex-direction: column; align-items: center; gap: 20px; }
        .lithos-rose-svg { width: 220px; height: 220px; flex-shrink: 0; }
        .lithos-rose-legend { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; width: 100%; max-width: 320px; }
        .lithos-rose-legend li { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: #d8cdbe; }
        .lithos-rose-dot { width: 9px; height: 9px; border-radius: 50%; flex-shrink: 0; }
        .lithos-rose-name { flex: 1; }
        .lithos-rose-level { font-weight: 700; color: #f4ece1; }
        @media (min-width: 640px) {
          .lithos-rose-row { flex-direction: row; justify-content: center; gap: 40px; }
        }
      `}</style>
    </section>
  );
}
