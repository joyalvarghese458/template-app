"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { FIRING_STAGES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = FIRING_STAGES.length;
const STAGGER = 0.08;
const ASSEMBLE_WINDOW = 0.18;
const ASSEMBLE_END = (TOTAL - 1) * STAGGER + ASSEMBLE_WINDOW; // 0.58
const FLATTEN_START = 0.72;

const ACCENTS = ["#a08d70", "#c15f3c", "#d97e56", "#8c9c72", "#6f7d58", "#7a5b3c"];

function slotFor(i: number) {
  const mid = (TOTAL - 1) / 2;
  const angle = (i - mid) * 11;
  const rad = (angle * Math.PI) / 180;
  const radius = 230;
  return {
    x: Math.sin(rad) * radius,
    y: (1 - Math.cos(rad)) * -90 + (i - mid) * 6,
    z: i * 14 - 36,
    rotateZ: angle * 0.8,
  };
}

const noopSubscribe = () => () => {};

// The stage fan's position is driven by scroll-linked MotionValues — a
// client-only concept. Deferring its first render to the client avoids a
// hydration mismatch from framer-motion's scroll-linked values resolving
// differently between the SSR pass (scroll position 0) and the live client.
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

function activeIndexFor(v: number) {
  const t = Math.min(v / ASSEMBLE_END, 1);
  return Math.min(Math.round(t * (TOTAL - 1)), TOTAL - 1);
}

export default function TheKiln() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setActiveIdx(activeIndexFor(v)));
    return unsubscribe;
  }, [scrollYProgress]);

  const phase = useTransform(scrollYProgress, (v): string =>
    v < ASSEMBLE_END ? "IN PROGRESS" : v < FLATTEN_START ? "FULL SEQUENCE" : "KILN LOAD #38"
  );

  const active = FIRING_STAGES[activeIdx];
  const activeAccent = ACCENTS[activeIdx % ACCENTS.length];

  return (
    <section id="the-kiln" style={{ backgroundColor: "#f7f1e8" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="The Kiln" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#3a2e22", margin: "16px 0 8px", lineHeight: 1.15 }}>
            Six stages. One pot.
          </h2>
          <p style={{ fontSize: "14px", color: "#6b5a45", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — each stage settles into place, then flattens into the piece that leaves the studio.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "260vh" }}>
        <div className="kln-kiln-sticky">
          <div className="kln-kiln-stage">
            {isClient && FIRING_STAGES.map((item, i) => (
              <StagePart key={item.name} index={i} scrollYProgress={scrollYProgress} accent={ACCENTS[i % ACCENTS.length]} />
            ))}

            <div className="kln-kiln-active" style={{ borderColor: activeAccent }}>
              <span className="kln-kiln-active-num" style={{ color: activeAccent }}>STAGE {active.layer}</span>
              <h3 className="kln-kiln-active-name">{active.name}</h3>
              <p className="kln-kiln-active-desc">{active.desc}</p>
            </div>
          </div>

          <div className="kln-kiln-readout">
            <motion.span className="kln-kiln-readout-phase">{phase}</motion.span>
            <span>STUDIO SOLBERG</span>
          </div>
        </div>
      </div>

      <style>{`
        .kln-kiln-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .kln-kiln-stage { position: relative; perspective: 1300px; width: 1px; height: 1px; }
        .kln-shard {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(78px, 17vw, 112px);
          height: clamp(78px, 17vw, 112px);
          margin-left: calc(clamp(78px, 17vw, 112px) / -2);
          margin-top: calc(clamp(78px, 17vw, 112px) / -2);
          border-radius: 50% 50% 50% 6px;
          border: 1.5px solid;
          background-color: rgba(239,228,211,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kln-shard-num { font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 700; }
        .kln-kiln-active {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(250px, 64vw, 360px);
          margin-left: calc(clamp(250px, 64vw, 360px) / -2);
          transform: translateY(-50%);
          border-radius: 14px;
          border: 2px solid;
          background-color: #efe4d3;
          box-shadow: 0 30px 60px -12px rgba(58,46,34,0.28);
          padding: 22px 24px;
          z-index: 20;
        }
        .kln-kiln-active-num { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .kln-kiln-active-name { font-family: var(--font-display, serif); font-weight: 600; font-size: clamp(22px, 3.4vw, 28px); color: #3a2e22; margin: 8px 0 10px; }
        .kln-kiln-active-desc { font-size: 13.5px; line-height: 1.6; color: #6b5a45; margin: 0; }
        .kln-kiln-readout {
          position: absolute;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #a08d70;
          white-space: nowrap;
          text-transform: uppercase;
          z-index: 30;
        }
        .kln-kiln-readout-phase { color: #6f7d58; font-size: 10px; }
        @media (max-width: 600px) {
          .kln-kiln-readout { bottom: 5%; }
        }
      `}</style>
    </section>
  );
}

function StagePart({
  index, scrollYProgress, accent,
}: {
  index: number;
  scrollYProgress: MotionValue<number>;
  accent: string;
}) {
  const slot = slotFor(index);
  const t0 = index * STAGGER;
  const t1 = t0 + ASSEMBLE_WINDOW;
  const stops = [t0, t1, FLATTEN_START, 1];

  const x = useTransform(scrollYProgress, stops, [slot.x - 60, slot.x, slot.x, 0]);
  const y = useTransform(scrollYProgress, stops, [slot.y + 120, slot.y, slot.y, 0]);
  const z = useTransform(scrollYProgress, stops, [slot.z - 160, slot.z, slot.z, 0]);
  const rotateZ = useTransform(scrollYProgress, stops, [slot.rotateZ - 24, slot.rotateZ, slot.rotateZ, 0]);
  const opacity = useTransform(scrollYProgress, stops, [0, 0.9, 0.9, 0]);

  return (
    <motion.div
      className="kln-shard"
      style={{ x, y, z, rotateZ, opacity, zIndex: index + 1, borderColor: accent, color: accent }}
    >
      <span className="kln-shard-num" style={{ color: accent }}>{FIRING_STAGES[index].layer}</span>
    </motion.div>
  );
}
