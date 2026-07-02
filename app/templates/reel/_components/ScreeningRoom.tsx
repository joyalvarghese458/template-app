"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { SCREENING_FRAMES } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = SCREENING_FRAMES.length;
const STAGGER = 0.08;
const ASSEMBLE_WINDOW = 0.18;
const ASSEMBLE_END = (TOTAL - 1) * STAGGER + ASSEMBLE_WINDOW; // 0.58
const FLATTEN_START = 0.72;

const ACCENTS = ["#6b5f4f", "#c9a15a", "#d1263f", "#c9a15a", "#d1263f", "#c9a15a"];

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

// The frame fan's position is driven by scroll-linked MotionValues — a
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

export default function ScreeningRoom() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setActiveIdx(activeIndexFor(v)));
    return unsubscribe;
  }, [scrollYProgress]);

  const phase = useTransform(scrollYProgress, (v): string =>
    v < ASSEMBLE_END ? "ASSEMBLING FRAMES" : v < FLATTEN_START ? "FULL SEQUENCE" : "FINAL CUT"
  );

  const active = SCREENING_FRAMES[activeIdx];
  const activeAccent = ACCENTS[activeIdx % ACCENTS.length];

  return (
    <section id="screening-room" style={{ backgroundColor: "#0a0806" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="The Screening Room" />
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 400, textTransform: "uppercase", fontSize: "clamp(28px, 4.8vw, 40px)", color: "#f3ece1", margin: "16px 0 8px", lineHeight: 1.15 }}>
            Six frames. One cut.
          </h2>
          <p style={{ fontSize: "14px", color: "#b7a996", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — the reel fans out one frame at a time, then locks into the final print.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "260vh" }}>
        <div className="rl-screen-sticky">
          <div className="rl-screen-stage">
            {isClient && SCREENING_FRAMES.map((item, i) => (
              <ScreenFrame key={item.name} index={i} scrollYProgress={scrollYProgress} accent={ACCENTS[i % ACCENTS.length]} />
            ))}

            <div className="rl-screen-active" style={{ borderColor: activeAccent }}>
              <span className="rl-screen-active-num" style={{ color: activeAccent }}>FRAME {active.frame}</span>
              <h3 className="rl-screen-active-name">{active.name}</h3>
              <p className="rl-screen-active-desc">{active.desc}</p>
            </div>
          </div>

          <div className="rl-screen-readout">
            <motion.span className="rl-screen-readout-phase">{phase}</motion.span>
            <span>NOW SCREENING</span>
          </div>
        </div>
      </div>

      <style>{`
        .rl-screen-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .rl-screen-stage { position: relative; perspective: 1300px; width: 1px; height: 1px; }
        .rl-screen-frame {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(76px, 18vw, 112px);
          height: clamp(102px, 24vw, 150px);
          margin-left: calc(clamp(76px, 18vw, 112px) / -2);
          margin-top: calc(clamp(102px, 24vw, 150px) / -2);
          border-radius: 4px;
          border: 1.5px solid;
          background-color: rgba(20,16,12,0.6);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          padding: 6px;
        }
        .rl-screen-frame-sprockets { display: flex; justify-content: space-between; }
        .rl-screen-frame-sprockets span { width: 5px; height: 5px; border-radius: 1px; background-color: rgba(201,161,90,0.5); }
        .rl-screen-frame-num { font-family: var(--font-mono, monospace); font-size: 10px; font-weight: 700; align-self: flex-start; }
        .rl-screen-active {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(250px, 64vw, 360px);
          margin-left: calc(clamp(250px, 64vw, 360px) / -2);
          transform: translateY(-50%);
          border-radius: 12px;
          border: 2px solid;
          background-color: #14100c;
          box-shadow: 0 30px 60px rgba(0,0,0,0.6);
          padding: 22px 24px;
          z-index: 20;
        }
        .rl-screen-active-num { font-family: var(--font-mono, monospace); font-size: 12px; font-weight: 700; letter-spacing: 0.06em; }
        .rl-screen-active-name { font-family: var(--font-display, sans-serif); font-weight: 400; text-transform: uppercase; letter-spacing: 0.02em; font-size: clamp(22px, 3.4vw, 28px); color: #f3ece1; margin: 8px 0 10px; }
        .rl-screen-active-desc { font-size: 13.5px; line-height: 1.6; color: #b7a996; margin: 0; }
        .rl-screen-readout {
          position: absolute;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: #6b5f4f;
          white-space: nowrap;
          text-transform: uppercase;
          z-index: 30;
        }
        .rl-screen-readout-phase { color: #d1263f; font-size: 10px; }
        @media (max-width: 600px) {
          .rl-screen-readout { bottom: 5%; }
        }
      `}</style>
    </section>
  );
}

function ScreenFrame({
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
      className="rl-screen-frame"
      style={{ x, y, z, rotateZ, opacity, zIndex: index + 1, borderColor: accent }}
    >
      <span className="rl-screen-frame-sprockets" aria-hidden="true"><span /><span /><span /></span>
      <span className="rl-screen-frame-num" style={{ color: accent }}>{SCREENING_FRAMES[index].frame}</span>
      <span className="rl-screen-frame-sprockets" aria-hidden="true"><span /><span /><span /></span>
    </motion.div>
  );
}
