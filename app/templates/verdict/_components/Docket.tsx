"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { DOCKET } from "../_data/portfolio";
import { fadeUp, growWidth, drawLine, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

const CHART_W = 300;
const CHART_H = 72;

export default function Docket() {
  const min = Math.min(...DOCKET.trend);
  const max = Math.max(...DOCKET.trend);
  const points = DOCKET.trend.map((v, i) => {
    const x = (i / (DOCKET.trend.length - 1)) * CHART_W;
    const y = CHART_H - ((v - min) / (max - min || 1)) * (CHART_H - 10) - 5;
    return { x, y };
  });
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${CHART_W},${CHART_H} L0,${CHART_H} Z`;

  return (
    <section id="docket" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f6f2e8" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="The Docket, By The Numbers" />
          <h2 className="vd-dock-heading">The practice, on the record.</h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} transition={{ delay: 0.15 }} className="vd-dock-panel">
          <div className="vd-dock-kpi-row">
            {DOCKET.kpis.map((k) => (
              <div key={k.label} className="vd-dock-kpi">
                <span className="vd-dock-kpi-value">
                  <Counter value={k.value} decimals={k.decimals} prefix={k.prefix} suffix={k.suffix} />
                </span>
                <span className="vd-dock-kpi-label">{k.label}</span>
              </div>
            ))}
          </div>

          <div className="vd-dock-lower">
            <div className="vd-dock-mix">
              <span className="vd-dock-panel-title">Caseload, by practice area</span>
              <div className="vd-dock-bars">
                {DOCKET.focusMix.map((f, i) => (
                  <div key={f.label} className="vd-dock-bar-row">
                    <span className="vd-dock-bar-label">{f.label}</span>
                    <div className="vd-dock-bar-track">
                      <motion.div
                        variants={growWidth(f.value, i * 0.08)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        className="vd-dock-bar-fill"
                        style={{ backgroundColor: f.color }}
                      />
                    </div>
                    <span className="vd-dock-bar-value">{f.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="vd-dock-trend">
              <span className="vd-dock-panel-title">{DOCKET.trendLabel}</span>
              <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="vd-dock-chart" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="vd-trend-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#d9b06a" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#d9b06a" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={areaPath}
                  fill="url(#vd-trend-fill)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="#d9b06a"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  variants={drawLine(0.1)}
                  initial="hidden"
                  whileInView="visible"
                  viewport={VIEWPORT}
                />
              </svg>
            </div>
          </div>
        </motion.div>
      </div>

      <style>{`
        .vd-dock-heading {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vd-dock-panel {
          background-color: #0d0d10;
          border-radius: 20px;
          padding: clamp(22px, 4vw, 40px);
          color: #f6f2e8;
          border: 1px solid rgba(182,144,63,0.18);
        }
        .vd-dock-kpi-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
          padding-bottom: 28px;
          margin-bottom: 28px;
          border-bottom: 1px solid rgba(246,242,232,0.14);
        }
        .vd-dock-kpi { display: flex; flex-direction: column; gap: 4px; }
        .vd-dock-kpi-value { font-family: var(--font-display, serif); font-weight: 700; font-size: clamp(24px, 4vw, 32px); color: #f6f2e8; }
        .vd-dock-kpi-label { font-size: 11px; color: rgba(246,242,232,0.55); text-transform: uppercase; letter-spacing: 0.03em; }
        .vd-dock-lower { display: grid; grid-template-columns: 1fr; gap: 32px; }
        .vd-dock-panel-title {
          display: block;
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          font-weight: 700;
          color: rgba(246,242,232,0.5);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }
        .vd-dock-bars { display: flex; flex-direction: column; gap: 14px; }
        .vd-dock-bar-row { display: grid; grid-template-columns: 1fr; gap: 6px; }
        .vd-dock-bar-label { font-size: 12px; color: rgba(246,242,232,0.85); }
        .vd-dock-bar-track { position: relative; height: 8px; border-radius: 100px; background-color: rgba(246,242,232,0.12); overflow: hidden; }
        .vd-dock-bar-fill { height: 100%; border-radius: 100px; }
        .vd-dock-bar-value { font-family: var(--font-mono, monospace); font-size: 11px; color: rgba(246,242,232,0.6); text-align: right; }
        .vd-dock-chart { width: 100%; height: 90px; display: block; }
        @media (min-width: 640px) {
          .vd-dock-kpi-row { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        @media (min-width: 900px) {
          .vd-dock-lower { grid-template-columns: 1.1fr 0.9fr; gap: 44px; }
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
