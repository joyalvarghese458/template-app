"use client";

import { motion } from "framer-motion";
import { drawLine } from "../_utils/motion";

// Hand-drawn elevation-style contour lines. Pure SVG paths, no photography —
// each ring is a closed loop at a different "elevation," drawn in on mount.
const RINGS = [
  { d: "M40 380 C 90 300, 160 260, 240 270 C 330 282, 380 340, 420 300 C 460 260, 430 190, 480 160", opacity: 0.9 },
  { d: "M20 420 C 90 340, 180 300, 260 320 C 350 342, 400 400, 450 350 C 500 300, 460 220, 520 190", opacity: 0.75 },
  { d: "M0 460 C 90 380, 200 350, 290 370 C 380 392, 420 450, 480 400 C 540 350, 490 260, 560 220", opacity: 0.6 },
  { d: "M-10 500 C 100 420, 220 400, 320 420 C 410 440, 440 500, 510 450 C 580 400, 520 300, 600 250", opacity: 0.45 },
  { d: "M-10 540 C 110 460, 240 445, 350 465 C 430 480, 460 540, 540 490 C 610 445, 550 340, 600 300", opacity: 0.3 },
];

const SPOT_ELEVATIONS = [
  { x: 118, y: 260, label: "412" },
  { x: 340, y: 205, label: "486" },
  { x: 470, y: 340, label: "358" },
];

export default function ContourField() {
  return (
    <div className="ctr-field">
      <svg viewBox="0 0 600 600" className="ctr-field-svg" aria-hidden="true">
        <defs>
          <linearGradient id="ctr-field-fade" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#4b6b3f" />
            <stop offset="100%" stopColor="#2f6b74" />
          </linearGradient>
        </defs>

        <g stroke="url(#ctr-field-fade)" fill="none" strokeWidth="1.6">
          {RINGS.map((r, i) => (
            <motion.path
              key={i}
              d={r.d}
              style={{ opacity: r.opacity }}
              variants={drawLine(0.25 + i * 0.12)}
              initial="hidden"
              animate="visible"
            />
          ))}
        </g>

        {SPOT_ELEVATIONS.map((s, i) => (
          <motion.g
            key={s.label}
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 1.1 + i * 0.15 }}
          >
            <circle cx={s.x} cy={s.y} r="3" fill="#212a1f" />
            <text x={s.x + 9} y={s.y + 4} fontSize="12" fontFamily="var(--font-mono, monospace)" fill="#4c5343">
              {s.label}&apos;
            </text>
          </motion.g>
        ))}
      </svg>

      <div className="ctr-field-scalebar" aria-hidden="true">
        <span className="ctr-field-scalebar-line" />
        <span className="ctr-field-scalebar-text">0&nbsp;&nbsp;&nbsp;&nbsp;100&nbsp;FT</span>
      </div>

      <style>{`
        .ctr-field {
          position: relative;
          width: 100%;
          height: 100%;
        }
        .ctr-field-svg { width: 100%; height: 100%; display: block; }
        .ctr-field-scalebar {
          position: absolute;
          left: 20px;
          bottom: 18px;
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        .ctr-field-scalebar-line {
          width: 64px;
          height: 3px;
          background-image: repeating-linear-gradient(90deg, #212a1f 0 8px, transparent 8px 16px);
        }
        .ctr-field-scalebar-text {
          font-family: var(--font-mono, monospace);
          font-size: 9px;
          letter-spacing: 0.04em;
          color: #4c5343;
        }
      `}</style>
    </div>
  );
}
