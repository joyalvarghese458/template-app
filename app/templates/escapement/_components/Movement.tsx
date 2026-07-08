"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { MOVEMENT_LAYERS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = MOVEMENT_LAYERS.length;
const STAGGER = 0.08;
const ASSEMBLE_WINDOW = 0.18;
const ASSEMBLE_END = (TOTAL - 1) * STAGGER + ASSEMBLE_WINDOW; // 0.58
const FLATTEN_START = 0.72;

const ACCENTS = ["#e8c876", "#c9a24b", "#6fa295", "#4f8577", "#b98a5e", "#8a7350"];

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

// The gear fan's position is driven by scroll-linked MotionValues — a
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

export default function Movement() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setActiveIdx(activeIndexFor(v)));
    return unsubscribe;
  }, [scrollYProgress]);

  const phase = useTransform(scrollYProgress, (v): string =>
    v < ASSEMBLE_END ? "EXPLODED VIEW" : v < FLATTEN_START ? "FULL CALIBER" : "CALIBER EV-01"
  );

  const active = MOVEMENT_LAYERS[activeIdx];
  const activeAccent = ACCENTS[activeIdx % ACCENTS.length];

  return (
    <section id="the-movement" style={{ backgroundColor: "#12100d" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="The Movement" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f2ead9", margin: "16px 0 8px", lineHeight: 1.15 }}>
            Six parts. One caliber.
          </h2>
          <p style={{ fontSize: "14px", color: "#b9ac93", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — each component settles into place, then flattens into the movement you'd actually wear.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "260vh" }}>
        <div className="esc-movement-sticky">
          <div className="esc-movement-stage">
            {isClient && MOVEMENT_LAYERS.map((item, i) => (
              <GearPart key={item.name} index={i} scrollYProgress={scrollYProgress} accent={ACCENTS[i % ACCENTS.length]} />
            ))}

            <div className="esc-movement-active" style={{ borderColor: activeAccent }}>
              <span className="esc-movement-active-num" style={{ color: activeAccent }}>PART {active.layer}</span>
              <h3 className="esc-movement-active-name">{active.name}</h3>
              <p className="esc-movement-active-desc">{active.desc}</p>
            </div>
          </div>

          <div className="esc-movement-readout">
            <motion.span className="esc-movement-readout-phase">{phase}</motion.span>
            <span>ATELIER VOSS</span>
          </div>
        </div>
      </div>

      <style>{`
        .esc-movement-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .esc-movement-stage { position: relative; perspective: 1300px; width: 1px; height: 1px; }
        .esc-gear {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(78px, 17vw, 112px);
          height: clamp(78px, 17vw, 112px);
          margin-left: calc(clamp(78px, 17vw, 112px) / -2);
          margin-top: calc(clamp(78px, 17vw, 112px) / -2);
          border-radius: 50%;
          border: 1.5px solid;
          background-color: rgba(23,20,15,0.8);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .esc-gear::before {
          content: "";
          position: absolute;
          inset: 14%;
          border-radius: 50%;
          border: 1px dashed currentColor;
          opacity: 0.35;
        }
        .esc-gear-num { font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 700; }
        .esc-movement-active {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(250px, 64vw, 360px);
          margin-left: calc(clamp(250px, 64vw, 360px) / -2);
          transform: translateY(-50%);
          border-radius: 14px;
          border: 2px solid;
          background-color: #1f1a13;
          box-shadow: 0 30px 60px -12px rgba(0,0,0,0.55);
          padding: 22px 24px;
          z-index: 20;
        }
        .esc-movement-active-num { font-family: var(--font-mono, monospace); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .esc-movement-active-name { font-family: var(--font-display, serif); font-weight: 600; font-size: clamp(22px, 3.4vw, 28px); color: #f2ead9; margin: 8px 0 10px; }
        .esc-movement-active-desc { font-size: 13.5px; line-height: 1.6; color: #b9ac93; margin: 0; }
        .esc-movement-readout {
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
          color: #7d7362;
          white-space: nowrap;
          text-transform: uppercase;
          z-index: 30;
        }
        .esc-movement-readout-phase { color: #6fa295; font-size: 10px; }
        @media (max-width: 600px) {
          .esc-movement-readout { bottom: 5%; }
        }
      `}</style>
    </section>
  );
}

function GearPart({
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
  const rotateZ = useTransform(scrollYProgress, stops, [slot.rotateZ * 4 - 40, slot.rotateZ, slot.rotateZ, 0]);
  const opacity = useTransform(scrollYProgress, stops, [0, 0.92, 0.92, 0]);

  return (
    <motion.div
      className="esc-gear"
      style={{ x, y, z, rotateZ, opacity, zIndex: index + 1, borderColor: accent, color: accent }}
    >
      <span className="esc-gear-num" style={{ color: accent }}>{MOVEMENT_LAYERS[index].layer}</span>
    </motion.div>
  );
}
