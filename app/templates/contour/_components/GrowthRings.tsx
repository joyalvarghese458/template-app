"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { IMPACT, OWNER } from "../_data/portfolio";
import { fadeUp, drawLine, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

const RINGS = [
  { r: 30, color: "#4b6b3f", width: 3 },
  { r: 46, color: "#6f9459", width: 5 },
  { r: 66, color: "#4b6b3f", width: 3 },
  { r: 80, color: "#2f6b74", width: 6 },
  { r: 96, color: "#3f8a95", width: 3 },
];

export default function GrowthRings() {
  return (
    <section id="impact" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#e7e0cb" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="04" label="Growth Rings" />
          <h2 className="ctr-impact-heading">Fourteen seasons, measured in acres.</h2>
        </motion.div>

        <div className="ctr-impact-layout">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="ctr-rings-wrap"
          >
            <svg viewBox="0 0 220 220" className="ctr-rings-svg" aria-hidden="true">
              <g transform="translate(110 110)">
                {RINGS.map((ring, i) => (
                  <motion.circle
                    key={i}
                    r={ring.r}
                    fill="none"
                    stroke={ring.color}
                    strokeWidth={ring.width}
                    strokeOpacity={0.55}
                    strokeDasharray={2 * Math.PI * ring.r}
                    variants={drawLine(0.2 + i * 0.12)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={VIEWPORT}
                  />
                ))}
              </g>
            </svg>
            <div className="ctr-rings-center">
              <span className="ctr-rings-value">{OWNER.stats[2].value}</span>
              <span className="ctr-rings-label">Years Practicing</span>
            </div>
          </motion.div>

          <div className="ctr-impact-tiles">
            {IMPACT.map((item, i) => (
              <motion.div
                key={item.label}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={VIEWPORT}
                transition={{ delay: i * 0.08 }}
                className="ctr-impact-tile"
              >
                <span className="ctr-impact-value">
                  <Counter value={item.value} decimals={item.decimals} prefix={item.prefix} suffix={item.suffix} />
                </span>
                <span className="ctr-impact-label">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        .ctr-impact-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #212a1f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .ctr-impact-layout { display: flex; flex-direction: column; align-items: center; gap: 36px; }
        .ctr-rings-wrap { position: relative; width: min(260px, 70vw); aspect-ratio: 1; flex-shrink: 0; }
        .ctr-rings-svg { width: 100%; height: 100%; display: block; }
        .ctr-rings-center {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 2px;
        }
        .ctr-rings-value { font-family: var(--font-display, serif); font-weight: 700; font-size: clamp(30px, 5vw, 40px); color: #212a1f; }
        .ctr-rings-label { font-family: var(--font-mono, monospace); font-size: 9px; font-weight: 700; letter-spacing: 0.06em; text-transform: uppercase; color: #4c5343; }
        .ctr-impact-tiles { display: grid; grid-template-columns: repeat(2, minmax(0,1fr)); gap: 16px; width: 100%; }
        .ctr-impact-tile {
          border: 1px solid rgba(33,42,31,0.14);
          border-top: 3px solid #4b6b3f;
          border-radius: 14px;
          padding: 24px 20px;
          background-color: #f3f0e5;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .ctr-impact-value { font-family: var(--font-display, serif); font-weight: 700; font-size: clamp(26px, 4.2vw, 34px); color: #2f6b74; line-height: 1; }
        .ctr-impact-label { font-size: 12px; color: #4c5343; }
        @media (min-width: 720px) {
          .ctr-impact-layout { flex-direction: row; align-items: center; gap: 56px; }
          .ctr-impact-tiles { flex: 1; grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
      `}</style>
    </section>
  );
}

function Counter({ value, decimals = 0, prefix = "", suffix = "" }: { value: number; decimals?: number; prefix?: string; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [display, setDisplay] = useState((0).toFixed(decimals));

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(0, value, {
      duration: 1.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (latest) => setDisplay(latest.toFixed(decimals)),
    });
    return () => controls.stop();
  }, [isInView, value, decimals]);

  return <span ref={ref}>{prefix}{display}{suffix}</span>;
}
