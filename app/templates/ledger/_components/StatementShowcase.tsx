"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { STATEMENTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

export default function StatementShowcase() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });
  const spread = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const progressPct = useTransform(spread, (v) => `${Math.round(v * 100)}%`);

  // Rig sway is scroll-driven (not an infinite loop) so it settles flat once
  // the plates resolve into the readable 2x2 grid at full scroll.
  const rigRotateY = useTransform(spread, [0, 0.6, 1], [-18, 16, 0]);
  const rigRotateX = useTransform(spread, [0, 0.6, 1], [10, 10, 0]);

  return (
    <section id="statements" style={{ backgroundColor: "#f8f3e7" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="The Full Picture" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 5vw, 42px)", color: "#16291f", margin: "16px 0 8px", lineHeight: 1.15 }}>
            Every statement, laid out separately.
          </h2>
          <p style={{ fontSize: "14px", color: "#8a9388", margin: "0 0 8px", maxWidth: "480px" }}>
            Keep scrolling — the stack stays pinned while it separates, then settles into four statements you can read side by side.
          </p>
        </motion.div>
      </div>

      {/* Tall scroll runway — the stage below pins in place while the user scrolls through this height */}
      <div ref={runwayRef} style={{ position: "relative", height: "230vh" }}>
        <div className="ledger-stmt-sticky">
          <div className="ledger-stmt-stage">
            <motion.div className="ledger-stmt-rig" style={{ rotateY: rigRotateY, rotateX: rigRotateX }}>
              {STATEMENTS.map((s, i) => (
                <Plate key={s.label} index={i} label={s.label} rev={s.rev} color={s.color} spread={spread} />
              ))}
            </motion.div>
            <div className="ledger-stmt-readout">
              <span>SEPARATE</span>
              <motion.span className="ledger-stmt-readout-pct">{progressPct}</motion.span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .ledger-stmt-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .ledger-stmt-stage {
          position: relative;
          perspective: 1100px;
        }
        .ledger-stmt-rig {
          position: relative;
          width: clamp(140px, 38vw, 280px);
          aspect-ratio: 280 / 184;
          transform-style: preserve-3d;
        }
        .ledger-plate {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(140px, 38vw, 280px);
          aspect-ratio: 280 / 184;
          border-radius: 6px;
          background-color: #fffdf7;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0px, transparent 17px,
            rgba(22,41,31,0.07) 17px, rgba(22,41,31,0.07) 18px
          );
        }
        .ledger-plate-label {
          position: absolute;
          bottom: 10px;
          left: 14px;
          right: 12px;
          font-family: var(--font-display, serif);
          font-size: clamp(10px, 2.8vw, 11.5px);
          font-weight: 700;
          letter-spacing: 0.02em;
          line-height: 1.25;
        }
        .ledger-plate-rev {
          position: absolute;
          top: 10px;
          right: 14px;
          font-family: var(--font-body, sans-serif);
          font-size: 10px;
          font-weight: 600;
          color: #8a9388;
        }
        .ledger-stmt-readout {
          /* 154% = stage's own height (100%) + the bottom-row plates' extension
             past it at full spread (their 4% slot offset + 50% own-height) */
          position: absolute;
          top: calc(154% + 16px);
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-body, sans-serif);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.05em;
          color: #8a9388;
          white-space: nowrap;
        }
        .ledger-stmt-readout-pct { color: #1f5c3f; min-width: 34px; }
      `}</style>
    </section>
  );
}

function Plate({
  index, label, rev, color, spread,
}: {
  index: number; label: string; rev: string; color: string; spread: MotionValue<number>;
}) {
  // 0 = top-left, 1 = top-right, 2 = bottom-left, 3 = bottom-right at full spread.
  const isRightCol = index % 2 === 1;
  const isBottomRow = index >= 2;

  // "-50%,-50%" re-centers the box on its own anchor point (top/left:50%);
  // the grid slots add a further ±~54% of the plate's own (responsive) size
  // on top of that, so the gap scales naturally with clamp()'d plate width.
  const x = useTransform(spread, [0, 0.6, 1], ["-50%", "-50%", isRightCol ? "4%" : "-104%"]);
  const y = useTransform(spread, [0, 0.6, 1], ["-50%", `${-50 + index * 22}%`, isBottomRow ? "4%" : "-104%"]);
  const z = useTransform(spread, [0, 0.6, 1], [-index * 24, index * 66, 0]);
  const rotate = useTransform(spread, [0, 0.6, 1], [0, (index % 2 === 0 ? -1 : 1) * 6, 0]);

  return (
    <motion.div
      className="ledger-plate"
      style={{
        x,
        y,
        translateZ: z,
        rotate,
        borderLeft: `4px solid ${color}`,
        boxShadow: "0 1px 3px rgba(22,41,31,0.12)",
      }}
    >
      <span className="ledger-plate-rev">{rev}</span>
      <span className="ledger-plate-label" style={{ color }}>{label}</span>
    </motion.div>
  );
}
