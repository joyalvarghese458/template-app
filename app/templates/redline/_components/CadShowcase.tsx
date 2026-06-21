"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const PLATES = [
  { label: "TOP COVER", rev: "REV C", color: "#e10600" },
  { label: "GASKET SEAL", rev: "REV A", color: "#ffb700" },
  { label: "MAIN HOUSING", rev: "REV D", color: "#9a9aa0" },
  { label: "BASE MOUNT", rev: "REV B", color: "#5e5e66" },
];

export default function CadShowcase() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });
  const spread = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const progressPct = useTransform(spread, (v) => `${Math.round(v * 100)}%`);

  return (
    <section id="cad" style={{ backgroundColor: "#0d0d0f" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Exploded View" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(28px, 5vw, 42px)", color: "#f2f2f0", margin: "16px 0 8px", lineHeight: 1.1, textTransform: "uppercase" }}>
            Every assembly, taken apart.
          </h2>
          <p style={{ fontSize: "14px", color: "#5e5e66", margin: "0 0 8px", maxWidth: "480px" }}>
            Keep scrolling — the stack stays pinned while it separates, the same view I check before any part goes to the shop floor.
          </p>
        </motion.div>
      </div>

      {/* Tall scroll runway — the stage below pins in place while the user scrolls through this height */}
      <div ref={runwayRef} style={{ position: "relative", height: "230vh" }}>
        <div className="redline-cad-sticky">
          <div className="redline-cad-stage">
            <div className="redline-cad-rig">
              {PLATES.map((p, i) => (
                <Plate key={p.label} index={i} label={p.label} rev={p.rev} color={p.color} spread={spread} />
              ))}
            </div>
            <div className="redline-cad-readout">
              <span>EXPLODE</span>
              <motion.span className="redline-cad-readout-pct">{progressPct}</motion.span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .redline-cad-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .redline-cad-stage {
          position: relative;
          perspective: 1100px;
        }
        .redline-cad-rig {
          position: relative;
          width: 280px;
          height: 184px;
          transform-style: preserve-3d;
          animation: redline-cad-spin 16s linear infinite;
        }
        @keyframes redline-cad-spin {
          from { transform: rotateY(-18deg) rotateX(10deg); }
          50% { transform: rotateY(18deg) rotateX(10deg); }
          to { transform: rotateY(-18deg) rotateX(10deg); }
        }
        .redline-plate {
          position: absolute;
          inset: 0;
          border-radius: 8px;
          background-color: rgba(22,22,26,0.92);
          backdrop-filter: blur(2px);
        }
        .redline-plate-label {
          position: absolute;
          bottom: 10px;
          left: 14px;
          font-family: var(--font-display, sans-serif);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          text-transform: uppercase;
        }
        .redline-plate-rev {
          position: absolute;
          top: 10px;
          right: 14px;
          font-family: var(--font-display, sans-serif);
          font-size: 10px;
          font-weight: 600;
          color: #5e5e66;
        }
        .redline-plate-bolt { position: absolute; width: 6px; height: 6px; border-radius: 50%; border: 1.5px solid rgba(255,255,255,0.25); }
        .redline-cad-readout {
          position: absolute;
          bottom: -56px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display, sans-serif);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #5e5e66;
          white-space: nowrap;
        }
        .redline-cad-readout-pct { color: #e10600; min-width: 34px; }
        @media (prefers-reduced-motion: reduce) {
          .redline-cad-rig { animation: none; }
        }
      `}</style>
    </section>
  );
}

function Plate({
  index, label, rev, color, spread,
}: {
  index: number; label: string; rev: string; color: string; spread: MotionValue<number>;
}) {
  const z = useTransform(spread, (v) => -index * 24 + v * index * 90);
  const y = useTransform(spread, (v) => index * 40 * v);
  const rotate = useTransform(spread, (v) => (index % 2 === 0 ? -1 : 1) * v * 6);

  return (
    <motion.div
      className="redline-plate"
      style={{
        translateZ: z,
        y,
        rotate,
        border: `1.5px solid ${color}`,
      }}
    >
      <span className="redline-plate-bolt" style={{ top: 8, left: 8 }} />
      <span className="redline-plate-bolt" style={{ top: 8, right: 8 }} />
      <span className="redline-plate-bolt" style={{ bottom: 8, left: 8 }} />
      <span className="redline-plate-bolt" style={{ bottom: 8, right: 8 }} />
      <span className="redline-plate-rev">{rev}</span>
      <span className="redline-plate-label" style={{ color }}>{label}</span>
    </motion.div>
  );
}
