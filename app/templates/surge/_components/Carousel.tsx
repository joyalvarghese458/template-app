"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { HIGHLIGHTS } from "../_data/portfolio";
import { fadeUp, VIEWPORT } from "../_utils/motion";

const ANGLE_STEP = 360 / HIGHLIGHTS.length;
const ACCENTS = ["#2954ff", "#ff3d7f", "#00c875", "#ffa629"];

export default function Carousel() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });
  const rigRotate = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const activeIndex = useTransform(scrollYProgress, (v) =>
    (Math.round((v * 300) / ANGLE_STEP) % HIGHLIGHTS.length + HIGHLIGHTS.length) % HIGHLIGHTS.length
  );
  const activeLabel = useTransform(activeIndex, (i) => `${i + 1} / ${HIGHLIGHTS.length}`);

  return (
    <section id="highlights" style={{ backgroundColor: "#0f1222" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <span style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <span style={{ fontFamily: "var(--font-display, sans-serif)", fontSize: "13px", fontWeight: 700, color: "#00c875" }}>04</span>
            <span style={{ width: "24px", height: "1px", backgroundColor: "rgba(255,255,255,0.2)" }} />
            <span style={{ fontSize: "12px", fontWeight: 700, color: "#9aa0b4", letterSpacing: "0.08em", textTransform: "uppercase" }}>Highlight Reel</span>
          </span>
          <h2 style={{ fontFamily: "var(--font-display, sans-serif)", fontWeight: 700, fontSize: "clamp(26px, 4.5vw, 38px)", color: "#ffffff", margin: "16px 0 8px", lineHeight: 1.18 }}>
            The numbers, on a loop.
          </h2>
          <p style={{ fontSize: "14px", color: "#9aa0b4", margin: 0, maxWidth: "480px" }}>
            Keep scrolling — the carousel spins through six campaign wins while it stays pinned.
          </p>
        </motion.div>
      </div>

      <div ref={runwayRef} style={{ position: "relative", height: "200vh" }}>
        <div className="surge-carousel-sticky">
          <div className="surge-carousel-stage">
            <motion.div className="surge-carousel-rig" style={{ rotateY: rigRotate }}>
              {HIGHLIGHTS.map((h, i) => (
                <div
                  key={h.label}
                  className="surge-carousel-card"
                  style={{
                    transform: `rotateY(${i * ANGLE_STEP}deg) translateZ(190px)`,
                    borderColor: ACCENTS[i % ACCENTS.length],
                  }}
                >
                  <span className="surge-carousel-icon">{h.icon}</span>
                  <span className="surge-carousel-label">{h.label}</span>
                </div>
              ))}
            </motion.div>
            <div className="surge-carousel-readout">
              <span>VIEWING</span>
              <motion.span className="surge-carousel-readout-val">{activeLabel}</motion.span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .surge-carousel-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .surge-carousel-stage { position: relative; perspective: 900px; }
        .surge-carousel-rig {
          position: relative;
          width: 200px;
          height: 130px;
          transform-style: preserve-3d;
        }
        .surge-carousel-card {
          position: absolute;
          inset: 0;
          border-radius: 14px;
          border: 1.5px solid;
          background-color: rgba(255,255,255,0.04);
          backdrop-filter: blur(6px);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 10px;
        }
        .surge-carousel-icon { font-size: 28px; }
        .surge-carousel-label { font-family: var(--font-display, sans-serif); font-size: 13px; font-weight: 700; color: #ffffff; text-align: center; padding: 0 14px; }
        .surge-carousel-readout {
          position: absolute;
          bottom: -52px;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-display, sans-serif);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #5b6178;
          white-space: nowrap;
        }
        .surge-carousel-readout-val { color: #00c875; }
      `}</style>
    </section>
  );
}
