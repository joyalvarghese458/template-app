"use client";

import { useRef, useSyncExternalStore } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { GLOBAL_FOOTPRINT } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

const TOTAL = GLOBAL_FOOTPRINT.length;
const ANGLE_STEP = 360 / TOTAL;
const SPIN_RANGE = 300;
const ACCENTS = ["#d4af6a", "#9c3f4a", "#3f8f76", "#5b7ba6"];
const RADIUS_X = 46; // % of orbit container
const RADIUS_Y = 17; // % of orbit container — compressed for a tilted-ring look

const noopSubscribe = () => () => {};

// The orbiting pins are driven by scroll position, a client-only concept —
// deferring their first render to the client avoids a hydration mismatch
// from framer-motion's scroll-linked MotionValues resolving to slightly
// different float precision between the SSR pass and the live client render.
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export default function Globe() {
  const isClient = useIsClient();
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });
  const activeIndex = useTransform(scrollYProgress, (v) =>
    (Math.round((v * SPIN_RANGE) / ANGLE_STEP) % TOTAL + TOTAL) % TOTAL
  );
  const activeReadout = useTransform(activeIndex, (i) => {
    const loc = GLOBAL_FOOTPRINT[i];
    return `${loc.city} — ${loc.note}`;
  });

  return (
    <section id="global" style={{ backgroundColor: "#0a0f1c" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="05" label="Global Footprint" />
          <h2 style={{ fontFamily: "var(--font-display, serif)", fontWeight: 600, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#f3efe4", margin: "16px 0 8px", lineHeight: 1.2 }}>
            Advisory work, on six continents.
          </h2>
          <p style={{ fontSize: "14px", color: "#aab4c9", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — the ring orbits through six active engagement hubs while the globe stays pinned.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "200vh" }}>
        <div className="atlas-globe-sticky">
          <div className="atlas-globe-stage">
            <div className="atlas-globe-sphere">
              <span className="atlas-globe-core" />
              <span className="atlas-globe-meridian" style={{ transform: "rotateY(0deg)" }} />
              <span className="atlas-globe-meridian" style={{ transform: "rotateY(45deg)" }} />
              <span className="atlas-globe-meridian" style={{ transform: "rotateY(90deg)" }} />
              <span className="atlas-globe-meridian" style={{ transform: "rotateY(135deg)" }} />
              <span className="atlas-globe-latitude" style={{ transform: "rotateX(62deg)" }} />
              <span className="atlas-globe-latitude" style={{ transform: "rotateX(-62deg)" }} />
            </div>

            <div className="atlas-globe-orbit">
              {isClient && GLOBAL_FOOTPRINT.map((loc, i) => (
                <OrbitPin
                  key={loc.city}
                  loc={loc}
                  index={i}
                  scrollYProgress={scrollYProgress}
                  accent={ACCENTS[i % ACCENTS.length]}
                />
              ))}
            </div>
          </div>

          <div className="atlas-globe-readout">
            <span>NOW VIEWING</span>
            <motion.span className="atlas-globe-readout-val">{activeReadout}</motion.span>
          </div>
        </div>
      </div>

      <style>{`
        .atlas-globe-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .atlas-globe-stage { position: relative; perspective: 1000px; width: 1px; height: 1px; }
        .atlas-globe-sphere {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 220px;
          height: 220px;
          margin: -110px 0 0 -110px;
          transform-style: preserve-3d;
          animation: atlas-globe-ambient-spin 50s linear infinite;
          z-index: 10;
        }
        @keyframes atlas-globe-ambient-spin {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .atlas-globe-core {
          position: absolute;
          inset: 6px;
          border-radius: 50%;
          background-image: radial-gradient(circle at 35% 30%, #2a3a5c 0%, #16213a 55%, #0a0f1c 100%);
          box-shadow: 0 0 80px rgba(212,175,106,0.22), inset -20px -20px 50px rgba(0,0,0,0.55);
        }
        .atlas-globe-meridian, .atlas-globe-latitude {
          position: absolute;
          inset: 0;
          border: 1px solid rgba(212,175,106,0.35);
          border-radius: 50%;
        }
        .atlas-globe-orbit {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 460px;
          height: 460px;
          margin: -230px 0 0 -230px;
        }
        .atlas-globe-pin {
          position: absolute;
          width: 124px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          padding: 10px 8px;
          border-radius: 12px;
          border: 1.5px solid;
          background-color: rgba(17,26,44,0.9);
          backdrop-filter: blur(6px);
          text-align: center;
          transform: translate(-50%, -50%);
        }
        .atlas-globe-pin-dot { width: 7px; height: 7px; border-radius: 50%; }
        .atlas-globe-pin-city { font-family: var(--font-display, serif); font-size: 13px; font-weight: 600; color: #f3efe4; }
        .atlas-globe-pin-region { font-size: 10px; color: #6c7790; text-transform: uppercase; letter-spacing: 0.03em; }
        .atlas-globe-readout {
          position: absolute;
          bottom: 6%;
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
          color: #6c7790;
          white-space: nowrap;
          text-transform: uppercase;
          z-index: 30;
        }
        .atlas-globe-readout-val { color: #d4af6a; font-size: 13px; text-transform: none; letter-spacing: 0; }
        @media (max-width: 600px) {
          .atlas-globe-sphere { width: 160px; height: 160px; margin: -80px 0 0 -80px; }
          .atlas-globe-orbit { width: 320px; height: 320px; margin: -160px 0 0 -160px; }
          .atlas-globe-pin { width: 92px; padding: 7px 6px; }
          .atlas-globe-pin-region { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .atlas-globe-sphere { animation: none; }
        }
      `}</style>
    </section>
  );
}

function OrbitPin({
  loc, index, scrollYProgress, accent,
}: {
  loc: (typeof GLOBAL_FOOTPRINT)[number];
  index: number;
  scrollYProgress: MotionValue<number>;
  accent: string;
}) {
  const baseAngle = index * ANGLE_STEP;

  const angleRad = useTransform(scrollYProgress, (v) => {
    const deg = baseAngle + v * SPIN_RANGE;
    return (deg * Math.PI) / 180;
  });
  const depth = useTransform(angleRad, (a) => (Math.sin(a) + 1) / 2); // 0 = far/behind, 1 = near/front

  const left = useTransform(angleRad, (a) => `${50 + Math.cos(a) * RADIUS_X}%`);
  const top = useTransform(angleRad, (a) => `${50 + Math.sin(a) * RADIUS_Y}%`);
  const scale = useTransform(depth, (d) => 0.68 + d * 0.42);
  const opacity = useTransform(depth, (d) => 0.5 + d * 0.5);
  const zIndex = useTransform(depth, (d) => Math.round(d * 20));

  return (
    <motion.div
      className="atlas-globe-pin"
      style={{ left, top, scale, opacity, zIndex, borderColor: accent }}
    >
      <span className="atlas-globe-pin-dot" style={{ backgroundColor: accent }} />
      <span className="atlas-globe-pin-city">{loc.city}</span>
      <span className="atlas-globe-pin-region">{loc.region}</span>
    </motion.div>
  );
}
