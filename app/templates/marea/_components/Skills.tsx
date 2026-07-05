"use client";

import { motion } from "framer-motion";
import { SKILLS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const W = 400;
const H = 170;
const TOP = 14;
const BOTTOM = 150;
const GRID_FRACTIONS = [0.25, 0.5, 0.75, 1];

function xFor(i: number, n: number) {
  const pad = 32;
  if (n === 1) return W / 2;
  return pad + (i * (W - pad * 2)) / (n - 1);
}

function yFor(level: number) {
  return TOP + (level / 100) * (BOTTOM - TOP);
}

export default function Skills() {
  const categories = Object.entries(SKILLS);

  return (
    <section id="skills" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#04141d" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="06" label="Skills" />
          <h2 className="marea-h2-static">Sounded like a bathymetric trace.</h2>
        </motion.div>

        <div className="marea-sound-groups">
          {categories.map(([category, skills], catIndex) => {
            const points = skills.map((s, i) => ({ x: xFor(i, skills.length), y: yFor(s.level), ...s }));
            const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"} ${p.x} ${p.y}`).join(" ");
            const areaPath = `${linePath} L ${points[points.length - 1].x} ${BOTTOM} L ${points[0].x} ${BOTTOM} Z`;

            return (
              <motion.div
                key={category}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                transition={{ delay: catIndex * 0.08 }}
                className="marea-sound-block"
              >
                <h3 className="marea-sound-cat">{category}</h3>

                <svg viewBox={`0 0 ${W} ${H}`} className="marea-sound-svg" aria-hidden="true">
                  <line x1="0" y1={TOP} x2={W} y2={TOP} stroke="rgba(234,246,245,0.22)" strokeWidth="1" />
                  {GRID_FRACTIONS.map((f) => (
                    <line
                      key={f}
                      x1="0" x2={W}
                      y1={TOP + f * (BOTTOM - TOP)} y2={TOP + f * (BOTTOM - TOP)}
                      stroke="rgba(234,246,245,0.07)"
                      strokeDasharray="3 4"
                    />
                  ))}

                  <defs>
                    <linearGradient id={`marea-sound-fill-${catIndex}`} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#2fe2c4" stopOpacity="0.32" />
                      <stop offset="100%" stopColor="#2fe2c4" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                  <motion.path
                    d={areaPath}
                    fill={`url(#marea-sound-fill-${catIndex})`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  />
                  <motion.path
                    d={linePath}
                    fill="none"
                    stroke="#2fe2c4"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={VIEWPORT}
                    transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                  />
                  {points.map((p, i) => (
                    <motion.circle
                      key={p.name}
                      cx={p.x}
                      cy={p.y}
                      r="4.5"
                      fill="#ff6f59"
                      stroke="#04141d"
                      strokeWidth="2"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={VIEWPORT}
                      transition={{ duration: 0.4, delay: 0.5 + i * 0.1 }}
                      style={{ transformOrigin: `${p.x}px ${p.y}px` }}
                    />
                  ))}
                </svg>

                <ul className="marea-sound-legend">
                  {skills.map((skill) => (
                    <li key={skill.name}>
                      <span className="marea-sound-dot" />
                      <span className="marea-sound-name">{skill.name}</span>
                      <span className="marea-sound-level">{skill.level}%</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>

      <style>{`
        .marea-sound-groups { display: flex; flex-direction: column; gap: 44px; }
        .marea-sound-cat {
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #2fe2c4;
          text-transform: uppercase;
          margin: 0 0 16px;
        }
        .marea-sound-svg { width: 100%; max-width: 620px; height: auto; display: block; }
        .marea-sound-legend { list-style: none; margin: 14px 0 0; padding: 0; display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 10px 24px; max-width: 620px; }
        .marea-sound-legend li { display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: #d6ebe9; }
        .marea-sound-dot { width: 8px; height: 8px; border-radius: 50%; background-color: #ff6f59; flex-shrink: 0; }
        .marea-sound-name { flex: 1; }
        .marea-sound-level { font-weight: 700; color: #eaf6f5; }
      `}</style>
    </section>
  );
}
