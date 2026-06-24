"use client";

import { motion } from "framer-motion";
import { COMPETENCIES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const SIZE = 300;
const CENTER = SIZE / 2;
const GRID_RADIUS = 100;
const LABEL_RADIUS = 130;
const AXES = COMPETENCIES.length;
const RING_LEVELS = [0.33, 0.66, 1];
const ACCENT = "#d4af6a";

function axisPoint(index: number, radius: number) {
  const angle = -Math.PI / 2 + (index * 2 * Math.PI) / AXES;
  return { x: CENTER + radius * Math.cos(angle), y: CENTER + radius * Math.sin(angle) };
}

function hexPath(radius: number) {
  return Array.from({ length: AXES }, (_, i) => axisPoint(i, radius))
    .map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`)
    .join(" ");
}

export default function Competencies() {
  const dataPoints = COMPETENCIES.map((c, i) => axisPoint(i, GRID_RADIUS * (c.level / 100)));
  const dataPath = dataPoints.map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");

  return (
    <section id="competencies" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#111a2c" }}>
      <div className="atlas-comp-grid" style={{ maxWidth: "1180px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="08" label="Core Competencies" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 16px", lineHeight: 1.2 }}>
            Six disciplines, one practice.
          </h2>
          <p style={{ fontSize: "14.5px", lineHeight: 1.7, color: "#aab4c9", margin: "0 0 28px", maxWidth: "440px" }}>
            Every engagement draws on the same core skill set — weighted differently depending on whether the work is a turnaround, a raise, or a deal.
          </p>

          <ul className="atlas-comp-legend">
            {COMPETENCIES.map((c) => (
              <li key={c.label} className="atlas-comp-legend-item">
                <span className="atlas-comp-legend-label">{c.label}</span>
                <span className="atlas-comp-legend-value">{c.level}%</span>
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={VIEWPORT}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="atlas-comp-chart-wrap"
        >
          <svg viewBox={`0 0 ${SIZE} ${SIZE}`} className="atlas-comp-svg" aria-hidden="true">
            {RING_LEVELS.map((level) => (
              <polygon key={level} points={hexPath(GRID_RADIUS * level)} fill="none" stroke="rgba(243,239,228,0.14)" strokeWidth="1" />
            ))}
            {Array.from({ length: AXES }, (_, i) => {
              const p = axisPoint(i, GRID_RADIUS);
              return <line key={i} x1={CENTER} y1={CENTER} x2={p.x} y2={p.y} stroke="rgba(243,239,228,0.14)" strokeWidth="1" />;
            })}
            <motion.polygon
              points={dataPath}
              fill="rgba(212,175,106,0.22)"
              stroke={ACCENT}
              strokeWidth="2"
              strokeLinejoin="round"
              style={{ transformOrigin: `${CENTER}px ${CENTER}px` }}
              initial={{ scale: 0, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            />
            {dataPoints.map((p, i) => (
              <circle key={i} cx={p.x} cy={p.y} r="3.5" fill={ACCENT} />
            ))}
          </svg>

          {COMPETENCIES.map((c, i) => {
            const p = axisPoint(i, LABEL_RADIUS);
            return (
              <span
                key={c.label}
                className="atlas-comp-axis-label"
                style={{ left: `${(p.x / SIZE) * 100}%`, top: `${(p.y / SIZE) * 100}%` }}
              >
                {c.label}
              </span>
            );
          })}
        </motion.div>
      </div>

      <style>{`
        .atlas-comp-grid { display: grid; grid-template-columns: 1fr; gap: 36px; align-items: center; }
        .atlas-comp-legend { list-style: none; margin: 0; padding: 0; display: flex; flex-direction: column; gap: 10px; max-width: 320px; }
        .atlas-comp-legend-item { display: flex; align-items: baseline; justify-content: space-between; border-bottom: 1px solid rgba(243,239,228,0.08); padding-bottom: 8px; }
        .atlas-comp-legend-label { font-size: 13.5px; color: #f3efe4; font-weight: 500; }
        .atlas-comp-legend-value { font-family: var(--font-display, serif); font-size: 13px; font-weight: 600; color: #d4af6a; }
        .atlas-comp-chart-wrap { position: relative; width: 100%; max-width: 380px; aspect-ratio: 1 / 1; margin: 0 auto; }
        .atlas-comp-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .atlas-comp-axis-label {
          position: absolute;
          transform: translate(-50%, -50%);
          font-size: 11px;
          font-weight: 600;
          color: #aab4c9;
          text-align: center;
          white-space: nowrap;
        }
        @media (min-width: 860px) {
          .atlas-comp-grid { grid-template-columns: minmax(0,1fr) minmax(0,1fr); gap: 56px; }
        }
      `}</style>
    </section>
  );
}
