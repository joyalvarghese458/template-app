"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { SectionLabel } from "./About";

// Scatter offsets are percentages of each card's own size (not fixed pixels),
// so they scale naturally on narrow viewports instead of flying off-screen.
const FORMATIONS = [
  { label: "Sandstone", unit: "Supai Group", color: "#c89a55", from: { x: -120, y: -90, rotate: -14 } },
  { label: "Limestone", unit: "Kaibab Fm.", color: "#cdbfa0", from: { x: 130, y: -70, rotate: 11 } },
  { label: "Shale", unit: "Hermit Fm.", color: "#7c8a55", from: { x: -140, y: 80, rotate: 13 } },
  { label: "Basalt Bedrock", unit: "SF Volcanic Field", color: "#3a2f22", from: { x: 120, y: 95, rotate: -10 } },
];

export default function StrataShowcase() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const [scatterScale, setScatterScale] = useState(1);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });
  const align = useTransform(scrollYProgress, [0.1, 0.9], [0, 1]);
  const alignPct = useTransform(align, (v) => `${Math.round(v * 100)}%`);

  // Cards scatter less on narrow viewports — at full scale they'd fly off-screen
  // since each card already takes up most of a phone-width grid column.
  useEffect(() => {
    const updateScale = () => {
      const w = window.innerWidth;
      setScatterScale(w < 480 ? 0.32 : w < 700 ? 0.5 : w < 1000 ? 0.75 : 1);
    };
    updateScale();
    window.addEventListener("resize", updateScale);
    return () => window.removeEventListener("resize", updateScale);
  }, []);

  return (
    <section id="strata" style={{ backgroundColor: "#120e0a" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Formations" />
          <h2 className="lithos-h2-static" style={{ marginBottom: "8px" }}>Every sample finds its layer.</h2>
          <p style={{ fontSize: "14px", color: "#6e6152", margin: "0 0 8px", maxWidth: "480px" }}>
            Keep scrolling — four field samples settle into the stratigraphic order I logged them in, formation by formation.
          </p>
        </motion.div>
      </div>

      {/* Tall scroll runway — the stage below pins in place while the user scrolls through this height */}
      <div ref={runwayRef} style={{ position: "relative", height: "200vh" }}>
        <div className="lithos-core-sticky">
          <div className="lithos-core-frame">
            <div className="lithos-core-stage">
              <div className="lithos-core-grid">
                {FORMATIONS.map((f) => (
                  <Card key={f.label} label={f.label} unit={f.unit} color={f.color} from={f.from} align={align} scale={scatterScale} />
                ))}
              </div>
            </div>
            <div className="lithos-core-readout">
              <span>ALIGNED</span>
              <motion.span className="lithos-core-readout-val">{alignPct}</motion.span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .lithos-core-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 32px 20px;
        }
        .lithos-core-frame {
          position: relative;
          width: min(620px, 92vw);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 26px;
          padding: clamp(36px, 6vw, 56px) 24px;
          border-radius: 18px;
          border: 1px solid rgba(255,255,255,0.08);
          background-image: radial-gradient(circle at 50% 30%, rgba(232,112,42,0.08), transparent 62%);
          background-color: #171109;
        }
        .lithos-core-stage {
          width: 100%;
          perspective: 1200px;
        }
        .lithos-core-grid {
          display: grid;
          grid-template-columns: repeat(2, minmax(0, 1fr));
          gap: 16px;
          width: 100%;
          transform: rotateX(10deg);
        }
        .lithos-core-card {
          position: relative;
          border-radius: 10px;
          padding: 18px;
          min-height: clamp(100px, 16vw, 150px);
          display: flex;
          flex-direction: column;
          justify-content: flex-end;
          box-shadow: inset 0 0 0 1px rgba(255,255,255,0.12), 0 14px 28px rgba(0,0,0,0.35);
        }
        .lithos-core-card-label {
          font-size: 14px;
          font-weight: 600;
          color: #120e0a;
          text-shadow: 0 1px 0 rgba(255,255,255,0.2);
        }
        .lithos-core-card-unit {
          font-family: var(--font-display, serif);
          font-style: italic;
          font-size: 11px;
          color: rgba(18,14,10,0.65);
          margin-top: 4px;
        }
        .lithos-core-readout {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: #6e6152;
          white-space: nowrap;
        }
        .lithos-core-readout-val { color: #e8702a; min-width: 42px; }
      `}</style>
    </section>
  );
}

function Card({
  label, unit, color, from, align, scale,
}: {
  label: string; unit: string; color: string;
  from: { x: number; y: number; rotate: number };
  align: MotionValue<number>;
  scale: number;
}) {
  // Callback form (vs. a static input/output array) so each transform always
  // reads the latest `scale`/`from` from this render's closure.
  const x = useTransform(align, (v) => `${from.x * scale * (1 - v)}%`);
  const y = useTransform(align, (v) => `${from.y * scale * (1 - v)}%`);
  const rotate = useTransform(align, (v) => from.rotate * (1 - v));
  const opacity = useTransform(align, [0, 0.35], [0.55, 1]);

  return (
    <motion.div
      className="lithos-core-card"
      style={{ backgroundColor: color, x, y, rotate, opacity }}
    >
      <span className="lithos-core-card-label">{label}</span>
      <span className="lithos-core-card-unit">{unit}</span>
    </motion.div>
  );
}
