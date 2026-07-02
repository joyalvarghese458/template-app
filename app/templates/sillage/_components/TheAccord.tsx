"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { ACCORD_LAYERS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = ACCORD_LAYERS.length;
const STAGGER = 0.08;
const ASSEMBLE_WINDOW = 0.18;
const ASSEMBLE_END = (TOTAL - 1) * STAGGER + ASSEMBLE_WINDOW; // 0.58
const FLATTEN_START = 0.72;

const ACCENTS = ["#d99a4e", "#b6752c", "#c97992", "#b1556b", "#8a6a3f", "#7a3c50"];

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

// The petal fan's position is driven by scroll-linked MotionValues — a
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

export default function TheAccord() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (v) => setActiveIdx(activeIndexFor(v)));
    return unsubscribe;
  }, [scrollYProgress]);

  const phase = useTransform(scrollYProgress, (v): string =>
    v < ASSEMBLE_END ? "BUILDING THE PYRAMID" : v < FLATTEN_START ? "FULL ACCORD" : "SIGNATURE SCENT"
  );

  const active = ACCORD_LAYERS[activeIdx];
  const activeAccent = ACCENTS[activeIdx % ACCENTS.length];

  return (
    <section id="the-accord" style={{ backgroundColor: "#faf5ea" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="The Accord" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(28px, 4.8vw, 40px)", color: "#2b2015", margin: "16px 0 8px", lineHeight: 1.15 }}>
            Six notes. One signature.
          </h2>
          <p style={{ fontSize: "14px", color: "#6f5f47", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — each note settles into the pyramid, then resolves into the fragrance you'd actually wear.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "260vh" }}>
        <div className="sil-accord-sticky">
          <div className="sil-accord-stage">
            {isClient && ACCORD_LAYERS.map((item, i) => (
              <AccordPetal key={item.name} index={i} scrollYProgress={scrollYProgress} accent={ACCENTS[i % ACCENTS.length]} />
            ))}

            <div className="sil-accord-active" style={{ borderColor: activeAccent }}>
              <span className="sil-accord-active-num" style={{ color: activeAccent }}>NOTE {active.layer}</span>
              <h3 className="sil-accord-active-name">{active.name}</h3>
              <p className="sil-accord-active-desc">{active.desc}</p>
            </div>
          </div>

          <div className="sil-accord-readout">
            <motion.span className="sil-accord-readout-phase">{phase}</motion.span>
            <span>ATELIER ROUSSEAU</span>
          </div>
        </div>
      </div>

      <style>{`
        .sil-accord-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .sil-accord-stage { position: relative; perspective: 1300px; width: 1px; height: 1px; }
        .sil-accord-petal {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(74px, 17vw, 108px);
          height: clamp(98px, 22vw, 140px);
          margin-left: calc(clamp(74px, 17vw, 108px) / -2);
          margin-top: calc(clamp(98px, 22vw, 140px) / -2);
          border-radius: 50% 50% 50% 4px;
          border: 1.5px solid;
          background-color: rgba(250,245,234,0.75);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sil-accord-petal-num { font-family: var(--font-display, serif); font-size: 12px; font-weight: 700; }
        .sil-accord-active {
          position: absolute;
          top: 50%;
          left: 50%;
          width: clamp(250px, 64vw, 360px);
          margin-left: calc(clamp(250px, 64vw, 360px) / -2);
          transform: translateY(-50%);
          border-radius: 14px;
          border: 2px solid;
          background-color: #f3ecdc;
          box-shadow: 0 30px 60px -12px rgba(43,32,21,0.28);
          padding: 22px 24px;
          z-index: 20;
        }
        .sil-accord-active-num { font-family: var(--font-body, sans-serif); font-size: 11px; font-weight: 700; letter-spacing: 0.08em; text-transform: uppercase; }
        .sil-accord-active-name { font-family: var(--font-display, serif); font-weight: 600; font-size: clamp(22px, 3.4vw, 28px); color: #2b2015; margin: 8px 0 10px; }
        .sil-accord-active-desc { font-size: 13.5px; line-height: 1.6; color: #6f5f47; margin: 0; }
        .sil-accord-readout {
          position: absolute;
          bottom: 7%;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          font-family: var(--font-body, sans-serif);
          font-size: 10.5px;
          font-weight: 700;
          letter-spacing: 0.1em;
          color: #a39273;
          white-space: nowrap;
          text-transform: uppercase;
          z-index: 30;
        }
        .sil-accord-readout-phase { color: #b1556b; font-size: 10px; }
        @media (max-width: 600px) {
          .sil-accord-readout { bottom: 5%; }
        }
      `}</style>
    </section>
  );
}

function AccordPetal({
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
      className="sil-accord-petal"
      style={{ x, y, z, rotateZ, opacity, zIndex: index + 1, borderColor: accent }}
    >
      <span className="sil-accord-petal-num" style={{ color: accent }}>{ACCORD_LAYERS[index].layer}</span>
    </motion.div>
  );
}
