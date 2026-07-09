"use client";

import { useEffect, useRef, useState } from "react";
import { motion, animate, useInView } from "framer-motion";
import { DASHBOARD } from "../_data/portfolio";
import { fadeUp, growWidth, drawLine, VIEWPORT } from "../_utils/motion";
import SectionLabel from "./SectionLabel";

const CHART_W = 300;
const CHART_H = 72;

export default function Dashboard() {
  const min = Math.min(...DASHBOARD.trend);
  const max = Math.max(...DASHBOARD.trend);
  const points = DASHBOARD.trend.map((v, i) => {
    const x = (i / (DASHBOARD.trend.length - 1)) * CHART_W;
    const y = CHART_H - ((v - min) / (max - min || 1)) * (CHART_H - 10) - 5;
    return { x, y };
  });
  const linePath = points.map((p, i) => `${i === 0 ? "M" : "L"}${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
  const areaPath = `${linePath} L${CHART_W},${CHART_H} L0,${CHART_H} Z`;

  return (
    <section id="results" style={{ padding: "clamp(56px, 9vw, 112px) 20px", backgroundColor: "#f6f3ea" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT}>
          <SectionLabel index="03" label="By The Numbers" />
          <h2 className="vtg-dash-heading">The practice, instrumented.</h2>
        </motion.div>

        <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={VIEWPORT} transition={{ delay: 0.15 }} className="vtg-dash-panel">
          <div className="vtg-dash-kpi-row">
            {DASHBOARD.kpis.map((k) => (
              <div key={k.label} className="vtg-dash-kpi">
                <span className="vtg-dash-kpi-value">
                  <Counter value={k.value} decimals={k.decimals} prefix={k.prefix} suffix={k.suffix} />
                </span>
                <span className="vtg-dash-kpi-label">{k.label}</span>
              </div>
            ))}
          </div>

          <div className="vtg-dash-lower">
            <div className="vtg-dash-mix">
              <span className="vtg-dash-panel-title">Focus mix, by engagement type</span>
              <div className="vtg-dash-bars">
                {DASHBOARD.focusMix.map((f, i) => (
                  <div key={f.label} className="vtg-dash-bar-row">
                    <span className="vtg-dash-bar-label">{f.label}</span>
                    <div className="vtg-dash-bar-track">
                      <motion.div
                        variants={growWidth(f.value, i * 0.08)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={VIEWPORT}
                        className="vtg-dash-bar-fill"
                        style={{ backgroundColor: f.color }}
                      />
                    </div>
                    <span className="vtg-dash-bar-value">{f.value}%</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="vtg-dash-trend">
              <span className="vtg-dash-panel-title">{DASHBOARD.trendLabel}</span>
              <svg viewBox={`0 0 ${CHART_W} ${CHART_H}`} className="vtg-dash-chart" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                  <linearGradient id="vtg-trend-fill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#17916f" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#17916f" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path
                  d={areaPath}
                  fill="url(#vtg-trend-fill)"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={VIEWPORT}
                  transition={{ duration: 0.8, delay: 0.6 }}
                />
                <motion.path
                  d={linePath}
                  fill="none"
                  stroke="#17916f"
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
        .vtg-dash-heading {
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(28px, 4.8vw, 42px);
          color: #17140f;
          margin: 16px 0 40px;
          line-height: 1.15;
        }
        .vtg-dash-panel {
          background-color: #17140f;
          border-radius: 20px;
          padding: clamp(22px, 4vw, 40px);
          color: #f6f3ea;
        }
        .vtg-dash-kpi-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
          padding-bottom: 28px;
          margin-bottom: 28px;
          border-bottom: 1px solid rgba(246,243,234,0.14);
        }
        .vtg-dash-kpi { display: flex; flex-direction: column; gap: 4px; }
        .vtg-dash-kpi-value { font-family: var(--font-display, serif); font-weight: 700; font-size: clamp(24px, 4vw, 32px); color: #f6f3ea; }
        .vtg-dash-kpi-label { font-size: 11px; color: rgba(246,243,234,0.55); text-transform: uppercase; letter-spacing: 0.03em; }
        .vtg-dash-lower { display: grid; grid-template-columns: 1fr; gap: 32px; }
        .vtg-dash-panel-title {
          display: block;
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          font-weight: 700;
          color: rgba(246,243,234,0.5);
          text-transform: uppercase;
          letter-spacing: 0.06em;
          margin-bottom: 18px;
        }
        .vtg-dash-bars { display: flex; flex-direction: column; gap: 14px; }
        .vtg-dash-bar-row { display: grid; grid-template-columns: 1fr; gap: 6px; }
        .vtg-dash-bar-label { font-size: 12px; color: rgba(246,243,234,0.85); }
        .vtg-dash-bar-track { position: relative; height: 8px; border-radius: 100px; background-color: rgba(246,243,234,0.12); overflow: hidden; }
        .vtg-dash-bar-fill { height: 100%; border-radius: 100px; }
        .vtg-dash-bar-value { font-family: var(--font-mono, monospace); font-size: 11px; color: rgba(246,243,234,0.6); text-align: right; }
        .vtg-dash-chart { width: 100%; height: 90px; display: block; }
        @media (min-width: 640px) {
          .vtg-dash-kpi-row { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        @media (min-width: 900px) {
          .vtg-dash-lower { grid-template-columns: 1.1fr 0.9fr; gap: 44px; }
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
