"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { FORMATION } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = FORMATION.length;
const ASSEMBLY_END = 0.62;
const ACCENTS = ["#3b6fe0", "#d98a3d", "#6f97f2", "#b7c0cf", "#3b6fe0"];

// Formation slot each panel settles into — an "echelon right" stagger:
// each successive pillar sits further right, lower, and deeper than the leader.
// STEP_X (190) deliberately exceeds the panel width (160) so adjacent panels
// never overlap horizontally, regardless of their y/z offsets.
const STEP_X = 190;
const STEP_Y = 26;
const STEP_Z = -85;

function targetFor(i: number) {
  return {
    x: (i - (TOTAL - 1) / 2) * STEP_X,
    y: i * STEP_Y - ((TOTAL - 1) * STEP_Y) / 2,
    z: i * STEP_Z - ((TOTAL - 1) * STEP_Z) / 2 + 140,
    rotateY: -8 + i * 1.5,
    scale: 1 - i * 0.06,
  };
}

const noopSubscribe = () => () => {};

// Panels are positioned via scroll-linked MotionValues — a client-only concept.
// Deferring their first render to the client avoids a hydration mismatch from
// framer-motion's scroll-linked values resolving differently between the SSR
// pass (scroll position 0) and the live client render.
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export default function Formation() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const bankRotate = useTransform(scrollYProgress, [ASSEMBLY_END, 1], [0, 16]);
  const activeIndex = useTransform(scrollYProgress, (v) => {
    const t = Math.min(v / ASSEMBLY_END, 1);
    return Math.min(Math.round(t * (TOTAL - 1)), TOTAL - 1);
  });
  const activeLabel = useTransform(activeIndex, (i) => FORMATION[i].label);
  const phase = useTransform(scrollYProgress, (v): string =>
    v < ASSEMBLY_END * 0.55 ? "ASSEMBLING" : v < ASSEMBLY_END ? "CLOSING RANKS" : v < 0.94 ? "IN FORMATION" : "HOLDING THE LINE"
  );

  return (
    <section id="command" style={{ backgroundColor: "#0b0e14" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Command" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#eef1f6", margin: "16px 0 8px", lineHeight: 1.2 }}>
            Five pillars, held in formation.
          </h2>
          <p style={{ fontSize: "14px", color: "#9aa7bb", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — the command pillars assemble into formation, then bank together as one.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "220vh" }}>
        <div className="ech-formation-sticky">
          <div className="ech-formation-stage">
            <div className="ech-formation-scale">
              <motion.div className="ech-formation-rig" style={{ rotateY: bankRotate }}>
                {isClient && FORMATION.map((item, i) => (
                  <FormationPanel
                    key={item.label}
                    item={item}
                    index={i}
                    scrollYProgress={scrollYProgress}
                    accent={ACCENTS[i % ACCENTS.length]}
                  />
                ))}
              </motion.div>
            </div>
          </div>

          <div className="ech-formation-readout">
            <motion.span className="ech-formation-readout-phase">{phase}</motion.span>
            <span>ACTIVE PILLAR</span>
            <motion.span className="ech-formation-readout-val">{activeLabel}</motion.span>
          </div>
        </div>
      </div>

      <style>{`
        .ech-formation-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .ech-formation-stage { position: relative; perspective: 1400px; width: 1px; height: 1px; }
        .ech-formation-scale { transform-style: preserve-3d; }
        .ech-formation-rig { position: absolute; top: 0; left: 0; width: 1px; height: 1px; transform-style: preserve-3d; }
        @media (max-width: 480px) {
          .ech-formation-scale { transform: scale(0.32); }
        }
        @media (min-width: 481px) and (max-width: 700px) {
          .ech-formation-scale { transform: scale(0.46); }
        }
        @media (min-width: 701px) and (max-width: 900px) {
          .ech-formation-scale { transform: scale(0.58); }
        }
        @media (min-width: 901px) and (max-width: 1100px) {
          .ech-formation-scale { transform: scale(0.72); }
        }
        @media (min-width: 1101px) and (max-width: 1320px) {
          .ech-formation-scale { transform: scale(0.88); }
        }
        .ech-formation-panel {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 160px;
          height: 126px;
          margin: -63px 0 0 -80px;
          border-radius: 12px;
          border: 1.5px solid;
          background-color: rgba(17,21,29,0.92);
          backdrop-filter: blur(6px);
          padding: 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
        }
        .ech-formation-panel-index { font-family: var(--font-display, serif); font-size: 11px; font-weight: 600; letter-spacing: 0.04em; }
        .ech-formation-panel-label { font-family: var(--font-display, serif); font-size: 17px; font-weight: 600; color: #eef1f6; margin: 0; }
        .ech-formation-panel-desc { font-size: 11.5px; line-height: 1.5; color: #9aa7bb; margin: 0; }
        .ech-formation-readout {
          position: absolute;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-family: var(--font-display, serif);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          color: #5c6679;
          white-space: nowrap;
          text-transform: uppercase;
          z-index: 30;
        }
        .ech-formation-readout-phase { color: #d98a3d; font-size: 10px; margin-bottom: 4px; }
        .ech-formation-readout-val { color: #6f97f2; font-size: 14px; text-transform: none; letter-spacing: 0; }
        @media (max-width: 600px) {
          .ech-formation-readout { bottom: 5%; }
        }
      `}</style>
    </section>
  );
}

function FormationPanel({
  item, index, scrollYProgress, accent,
}: {
  item: (typeof FORMATION)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
  accent: string;
}) {
  const target = targetFor(index);
  const t0 = (index / TOTAL) * ASSEMBLY_END * 0.85;
  const t1 = t0 + 0.3;
  const formed = useTransform(scrollYProgress, [t0, t1], [0, 1]);

  const x = useTransform(formed, [0, 1], [target.x - 70, target.x]);
  const y = useTransform(formed, [0, 1], [target.y + 200, target.y]);
  const z = useTransform(formed, [0, 1], [target.z - 240, target.z]);
  const rotateY = useTransform(formed, [0, 1], [target.rotateY - 65, target.rotateY]);
  const scale = useTransform(formed, [0, 1], [0.5, target.scale]);
  const opacity = useTransform(formed, [0, 1], [0, 1]);
  const zIndex = TOTAL - index;

  return (
    <motion.div
      className="ech-formation-panel"
      style={{ x, y, z, rotateY, scale, opacity, zIndex, borderColor: accent }}
    >
      <span className="ech-formation-panel-index" style={{ color: accent }}>0{index + 1}</span>
      <h3 className="ech-formation-panel-label">{item.label}</h3>
      <p className="ech-formation-panel-desc">{item.desc}</p>
    </motion.div>
  );
}
