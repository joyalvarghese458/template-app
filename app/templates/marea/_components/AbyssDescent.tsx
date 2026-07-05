"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, type MotionValue } from "framer-motion";
import { fadeUp, VIEWPORT } from "../_utils/motion";
import { ZONES } from "../_data/portfolio";
import { SectionLabel } from "./About";

const MAX_DEPTH_M = 10916; // Challenger Deep, Mariana Trench — the ocean's deepest known point

// Fixed positions/timings (not Math.random) so server- and client-rendered
// markup match exactly — avoids a hydration mismatch on first paint.
const PARTICLES = [
  { left: "8%", top: "22%", size: 3, appearAt: 0.45, delay: 0 },
  { left: "18%", top: "58%", size: 2, appearAt: 0.55, delay: 0.6 },
  { left: "27%", top: "34%", size: 4, appearAt: 0.5, delay: 1.2 },
  { left: "36%", top: "72%", size: 2, appearAt: 0.68, delay: 0.3 },
  { left: "46%", top: "20%", size: 3, appearAt: 0.6, delay: 1.6 },
  { left: "54%", top: "48%", size: 2, appearAt: 0.72, delay: 0.9 },
  { left: "63%", top: "64%", size: 3, appearAt: 0.58, delay: 1.9 },
  { left: "71%", top: "30%", size: 2, appearAt: 0.8, delay: 0.5 },
  { left: "79%", top: "54%", size: 4, appearAt: 0.65, delay: 1.1 },
  { left: "87%", top: "40%", size: 2, appearAt: 0.85, delay: 1.4 },
  { left: "92%", top: "68%", size: 3, appearAt: 0.5, delay: 0.2 },
  { left: "15%", top: "80%", size: 2, appearAt: 0.9, delay: 1.7 },
  { left: "58%", top: "84%", size: 3, appearAt: 0.78, delay: 0.8 },
  { left: "34%", top: "12%", size: 2, appearAt: 0.42, delay: 1.3 },
];

export default function AbyssDescent() {
  const runwayRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: runwayRef, offset: ["start start", "end end"] });

  const bgColor = useTransform(
    scrollYProgress,
    [0, 0.1, 0.3, 0.5, 0.7, 0.9, 1],
    [ZONES[0].bg, ZONES[0].bg, ZONES[1].bg, ZONES[2].bg, ZONES[3].bg, ZONES[4].bg, ZONES[4].bg],
  );
  const depthValue = useTransform(scrollYProgress, [0, 1], [0, MAX_DEPTH_M]);
  const depthText = useTransform(depthValue, (v) => `${Math.round(v).toLocaleString()} m`);
  const markerTop = useTransform(scrollYProgress, (v) => `${v * 100}%`);

  return (
    <section id="depths" style={{ backgroundColor: "#04141d" }}>
      <div style={{ maxWidth: "1180px", margin: "0 auto", padding: "clamp(56px, 9vw, 112px) 20px 0" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="Water Column" />
          <h2 className="marea-h2-static" style={{ marginBottom: "8px" }}>Scroll to descend the water column.</h2>
          <p style={{ fontSize: "14px", color: "#5c7c80", margin: "0 0 8px", maxWidth: "480px" }}>
            Keep scrolling — the same five depth zones every dive, tag, and eDNA sample in this portfolio is filed under.
          </p>
        </motion.div>
      </div>

      {/* Tall scroll runway — the stage below pins in place while the user scrolls through this height */}
      <div ref={runwayRef} style={{ position: "relative", height: "300vh" }}>
        <motion.div className="marea-abyss-sticky" style={{ backgroundColor: bgColor }}>
          <div aria-hidden="true" className="marea-abyss-particles">
            {PARTICLES.map((p, i) => (
              <Particle key={i} p={p} progress={scrollYProgress} />
            ))}
          </div>

          <div className="marea-abyss-frame">
            <div className="marea-abyss-scale" aria-hidden="true">
              <span className="marea-abyss-scale-line" />
              {ZONES.map((z, i) => (
                <span key={z.name} className="marea-abyss-scale-tick" style={{ top: `${((i + 0.5) / ZONES.length) * 100}%` }}>
                  {z.depth.split(" ")[0]}
                </span>
              ))}
              <motion.span className="marea-abyss-marker" style={{ top: markerTop }} />
            </div>

            <div className="marea-abyss-zones">
              {ZONES.map((z, i) => (
                <ZoneCard key={z.name} zone={z} index={i} total={ZONES.length} progress={scrollYProgress} />
              ))}
            </div>
          </div>

          <div className="marea-abyss-readout">
            <span>DEPTH</span>
            <motion.span className="marea-abyss-readout-val">{depthText}</motion.span>
          </div>
        </motion.div>
      </div>

      <style>{`
        .marea-abyss-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          padding: 32px 20px;
        }
        .marea-abyss-particles { position: absolute; inset: 0; pointer-events: none; }
        .marea-abyss-frame {
          position: relative;
          width: min(680px, 92vw);
          display: flex;
          align-items: stretch;
          gap: clamp(16px, 4vw, 36px);
          z-index: 2;
        }
        .marea-abyss-scale {
          position: relative;
          width: 44px;
          flex-shrink: 0;
        }
        .marea-abyss-scale-line {
          position: absolute;
          left: 50%;
          top: 0;
          bottom: 0;
          width: 1px;
          background-color: rgba(234,246,245,0.18);
        }
        .marea-abyss-scale-tick {
          position: absolute;
          left: 0;
          right: 0;
          transform: translateY(-50%);
          text-align: center;
          font-size: 9.5px;
          font-weight: 700;
          color: rgba(234,246,245,0.4);
          white-space: nowrap;
        }
        .marea-abyss-marker {
          position: absolute;
          left: 50%;
          width: 11px;
          height: 11px;
          margin-left: -5.5px;
          margin-top: -5.5px;
          border-radius: 50%;
          background-color: #2fe2c4;
          box-shadow: 0 0 0 4px rgba(47,226,196,0.22), 0 0 14px rgba(47,226,196,0.7);
        }
        .marea-abyss-zones {
          position: relative;
          flex: 1;
          min-height: clamp(220px, 34vw, 300px);
        }
        .marea-abyss-zone-card {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          gap: 10px;
          border-left: 2px solid rgba(255,255,255,0.14);
          padding-left: clamp(16px, 3vw, 26px);
        }
        .marea-abyss-zone-common {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #2fe2c4;
        }
        .marea-abyss-zone-name {
          font-family: var(--font-display, serif);
          font-style: italic;
          font-weight: 500;
          font-size: clamp(26px, 4.5vw, 38px);
          color: #eaf6f5;
          margin: 0;
          line-height: 1.1;
        }
        .marea-abyss-zone-depth {
          font-size: 13px;
          font-weight: 600;
          color: #ff6f59;
        }
        .marea-abyss-zone-note {
          font-size: 13.5px;
          line-height: 1.6;
          color: #9fc0c2;
          max-width: 380px;
          margin: 4px 0 0;
        }
        .marea-abyss-readout {
          position: absolute;
          bottom: 20px;
          right: 24px;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.06em;
          color: rgba(234,246,245,0.5);
          white-space: nowrap;
          z-index: 2;
        }
        .marea-abyss-readout-val { color: #2fe2c4; min-width: 80px; }
        @media (max-width: 560px) {
          .marea-abyss-scale { width: 34px; }
        }
        @keyframes marea-abyss-twinkle {
          0%, 100% { opacity: 0.35; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.4); }
        }
        @media (prefers-reduced-motion: reduce) {
          .marea-abyss-particles span { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

type Zone = (typeof ZONES)[number];

function ZoneCard({
  zone, index, total, progress,
}: {
  zone: Zone; index: number; total: number; progress: MotionValue<number>;
}) {
  const seg = 1 / total;
  const start = index * seg;
  const end = start + seg;
  const fadeEdge = seg * 0.18;
  const isFirst = index === 0;
  const isLast = index === total - 1;
  // Strictly-increasing breakpoints only — the first/last zone would otherwise
  // duplicate a 0 or 1 endpoint, which framer-motion's interpolator rejects.
  const opacity = useTransform(
    progress,
    isFirst ? [end - fadeEdge, end] : isLast ? [start, start + fadeEdge] : [start, start + fadeEdge, end - fadeEdge, end],
    isFirst ? [1, 0] : isLast ? [0, 1] : [0, 1, 1, 0],
  );

  return (
    <motion.div className="marea-abyss-zone-card" style={{ opacity }}>
      <span className="marea-abyss-zone-common">{zone.common}</span>
      <h3 className="marea-abyss-zone-name">{zone.name}</h3>
      <span className="marea-abyss-zone-depth">{zone.depth}</span>
      <p className="marea-abyss-zone-note">{zone.note}</p>
    </motion.div>
  );
}

function Particle({
  p, progress,
}: {
  p: { left: string; top: string; size: number; appearAt: number; delay: number };
  progress: MotionValue<number>;
}) {
  const reveal = useTransform(progress, [Math.max(0, p.appearAt - 0.06), p.appearAt + 0.04], [0, 1]);

  return (
    <motion.span
      style={{
        position: "absolute",
        left: p.left,
        top: p.top,
        width: `${p.size}px`,
        height: `${p.size}px`,
        borderRadius: "50%",
        backgroundColor: "#7ef7e2",
        boxShadow: "0 0 6px 2px rgba(126,247,226,0.8)",
        opacity: reveal,
        animation: `marea-abyss-twinkle ${3 + p.delay}s ease-in-out ${p.delay}s infinite`,
      }}
    />
  );
}
