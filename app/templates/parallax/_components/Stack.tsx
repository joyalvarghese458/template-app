"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { STACK_LAYERS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = STACK_LAYERS.length;
const STAGGER = 0.08;
const ASSEMBLE_WINDOW = 0.18;
const ASSEMBLE_END = (TOTAL - 1) * STAGGER + ASSEMBLE_WINDOW; // 0.58
const FLATTEN_START = 0.72;

const ACCENTS = ["#5a5f6b", "#9089fc", "#2dd4bf", "#ff7a3d", "#67e8d8", "#2dd4bf"];

function slotFor(i: number) {
  const mid = (TOTAL - 1) / 2;
  return {
    x: (i - mid) * 13,
    y: (i - mid) * 11,
    z: i * 16 - 40,
    rotateZ: (i - mid) * 3.2,
  };
}

const noopSubscribe = () => () => {};

// The backdrop fan's position is driven by scroll-linked MotionValues — a
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

export default function Stack() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setActiveIdx(activeIndexFor(v)));
    return unsubscribe;
  }, [scrollYProgress]);

  const phase = useTransform(scrollYProgress, (v): string =>
    v < ASSEMBLE_END ? "STACKING LAYERS" : v < FLATTEN_START ? "FULL BREAKDOWN" : "FINAL COMPOSITE"
  );

  const active = STACK_LAYERS[activeIdx];
  const activeAccent = ACCENTS[activeIdx % ACCENTS.length];

  return (
    <section id="stack" style={{ backgroundColor: "#0c0d10" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="The Stack" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f1f3f6", margin: "16px 0 8px", lineHeight: 1.2 }}>
            Six layers. One composite.
          </h2>
          <p style={{ fontSize: "14px", color: "#9ba1ad", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — every pass stacks behind the active layer, then the breakdown flattens into the final shot.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "260vh" }}>
        <div className="prlx-stack-sticky">
          <div className="prlx-stack-stage">
            {isClient && STACK_LAYERS.map((item, i) => (
              <StackBackdrop key={item.name} index={i} scrollYProgress={scrollYProgress} accent={ACCENTS[i % ACCENTS.length]} />
            ))}

            <div className="prlx-stack-active" style={{ borderColor: activeAccent }}>
              <span className="prlx-stack-active-num" style={{ color: activeAccent }}>{active.layer}</span>
              <h3 className="prlx-stack-active-name">{active.name}</h3>
              <p className="prlx-stack-active-desc">{active.desc}</p>
            </div>
          </div>

          <div className="prlx-stack-readout">
            <motion.span className="prlx-stack-readout-phase">{phase}</motion.span>
            <span>NOW COMPOSITING</span>
          </div>
        </div>
      </div>

      <style>{`
        .prlx-stack-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .prlx-stack-stage { position: relative; perspective: 1300px; width: 1px; height: 1px; }
        .prlx-stack-backdrop {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(80px, 19vw, 120px);
          height: clamp(108px, 25vw, 162px);
          margin-left: calc(clamp(80px, 19vw, 120px) / -2);
          margin-top: calc(clamp(108px, 25vw, 162px) / -2);
          border-radius: 10px;
          border: 1.5px solid;
          background-color: rgba(19,20,25,0.55);
          display: flex;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 8px;
        }
        .prlx-stack-backdrop-num { font-family: var(--font-display, sans-serif); font-size: 11px; font-weight: 700; }
        .prlx-stack-active {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(250px, 64vw, 360px);
          margin-left: calc(clamp(250px, 64vw, 360px) / -2);
          transform: translateY(-50%);
          border-radius: 14px;
          border: 2px solid;
          background-color: #131419;
          box-shadow: 0 30px 60px rgba(0,0,0,0.55);
          padding: 22px 24px;
          z-index: 20;
        }
        .prlx-stack-active-num { font-family: var(--font-display, sans-serif); font-size: 13px; font-weight: 700; letter-spacing: 0.04em; }
        .prlx-stack-active-name { font-family: var(--font-display, sans-serif); font-size: clamp(22px, 3.4vw, 28px); font-weight: 700; color: #f1f3f6; margin: 8px 0 10px; }
        .prlx-stack-active-desc { font-size: 13.5px; line-height: 1.6; color: #9ba1ad; margin: 0; }
        .prlx-stack-readout {
          position: absolute;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-family: var(--font-display, sans-serif);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #5a5f6b;
          white-space: nowrap;
          text-transform: uppercase;
          z-index: 30;
        }
        .prlx-stack-readout-phase { color: #ff7a3d; font-size: 10px; }
        @media (max-width: 600px) {
          .prlx-stack-readout { bottom: 5%; }
        }
      `}</style>
    </section>
  );
}

function StackBackdrop({
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
      className="prlx-stack-backdrop"
      style={{ x, y, z, rotateZ, opacity, zIndex: index + 1, borderColor: accent }}
    >
      <span className="prlx-stack-backdrop-num" style={{ color: accent }}>{STACK_LAYERS[index].layer}</span>
    </motion.div>
  );
}
