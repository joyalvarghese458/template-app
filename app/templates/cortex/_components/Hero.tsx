"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger, drawLine, popDot } from "../_utils/motion";
import TypedCode from "./TypedCode";

const SPARK_POINTS = "0,46 20,38 40,42 60,18 80,26 100,6";
const SPARK_DOTS = [
  { x: 20, y: 38 },
  { x: 60, y: 18 },
  { x: 100, y: 6 },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        backgroundColor: "#0a0e17",
        paddingTop: "84px",
      }}
    >
      {/* Plot grid backdrop */}
      <div aria-hidden="true" className="cortex-grid" />

      {/* Scatter / network nodes */}
      <svg aria-hidden="true" className="cortex-scatter" viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice">
        <line x1="60" y1="80" x2="140" y2="60" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
        <line x1="140" y1="60" x2="120" y2="160" stroke="rgba(139,92,246,0.25)" strokeWidth="1" />
        <line x1="120" y1="160" x2="60" y2="80" stroke="rgba(139,92,246,0.15)" strokeWidth="1" />
        <line x1="300" y1="220" x2="350" y2="140" stroke="rgba(34,211,238,0.22)" strokeWidth="1" />
        <line x1="300" y1="220" x2="330" y2="300" stroke="rgba(34,211,238,0.18)" strokeWidth="1" />
        {[
          { cx: 60, cy: 80, r: 4, fill: "#8b5cf6" },
          { cx: 140, cy: 60, r: 3, fill: "#8b5cf6" },
          { cx: 120, cy: 160, r: 5, fill: "#22d3ee" },
          { cx: 300, cy: 220, r: 4, fill: "#22d3ee" },
          { cx: 350, cy: 140, r: 3, fill: "#22d3ee" },
          { cx: 330, cy: 300, r: 3, fill: "#8b5cf6" },
          { cx: 70, cy: 320, r: 5, fill: "#fbbf24" },
        ].map((dot, i) => (
          <motion.circle
            key={i}
            cx={dot.cx}
            cy={dot.cy}
            r={dot.r}
            fill={dot.fill}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 0.8, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 + i * 0.08, ease: "backOut" }}
          />
        ))}
      </svg>

      <div className="cortex-hero-inner">
        <div className="cortex-hero-grid">
          <motion.div
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <motion.div variants={fadeUp} className="cortex-terminal">
              <div className="cortex-terminal-bar">
                <span className="cortex-dot" style={{ background: "#fb6363" }} />
                <span className="cortex-dot" style={{ background: "#fbbf24" }} />
                <span className="cortex-dot" style={{ background: "#34d399" }} />
                <span className="cortex-terminal-title">model.py</span>
              </div>
              <div className="cortex-terminal-body">
                <span className="cortex-prompt">&gt;&gt;&gt;</span>{" "}
                <TypedCode text="model.deploy(env='production')" startDelay={400} speed={28} />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6, duration: 0.5 }}
                  className="cortex-terminal-output"
                >
                  ✓ deployed — latency 42ms, accuracy 0.94
                </motion.div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="cortex-kicker-row">
              <span className="cortex-kicker">{OWNER.title}</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="cortex-headline">
              {OWNER.tagline}
            </motion.h1>

            <motion.p variants={fadeUp} className="cortex-subhead">
              {OWNER.subtagline}
            </motion.p>

            <motion.div variants={fadeUp} className="cortex-cta-row">
              <a href="#projects" className="cortex-btn-primary">View Projects</a>
              <a href="#contact" className="cortex-btn-outline">Get In Touch</a>
            </motion.div>

            <motion.div variants={fadeUp} className="cortex-stats-row">
              {OWNER.stats.map((s) => (
                <div key={s.label} className="cortex-stat">
                  <span className="cortex-stat-value">{s.value}</span>
                  <span className="cortex-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 14 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="cortex-portrait-col"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
              className="cortex-model-card"
            >
              <div className="cortex-model-card-tag">MODEL CARD</div>
              <div className="cortex-model-card-photo">
                <Image
                  src="/common-hero.webp"
                  alt={`${OWNER.name}, ${OWNER.title}`}
                  fill
                  priority
                  sizes="(max-width: 860px) 260px, 300px"
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
              </div>
              <div className="cortex-model-card-meta">
                <div className="cortex-model-card-row">
                  <span className="cortex-model-card-key">NAME</span>
                  <span className="cortex-model-card-value">{OWNER.name}</span>
                </div>
                <div className="cortex-model-card-row">
                  <span className="cortex-model-card-key">ROLE</span>
                  <span className="cortex-model-card-value">{OWNER.title}</span>
                </div>
                <div className="cortex-model-card-row">
                  <span className="cortex-model-card-key">STATUS</span>
                  <span className="cortex-model-card-value cortex-model-card-status">
                    <span className="cortex-status-dot" /> Production
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Sparkline chart accent */}
            <svg aria-hidden="true" className="cortex-sparkline" viewBox="0 0 100 50" preserveAspectRatio="none">
              <motion.polyline
                points={SPARK_POINTS}
                fill="none"
                stroke="#22d3ee"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                variants={drawLine}
                initial="hidden"
                animate="visible"
              />
              {SPARK_DOTS.map((d, i) => (
                <motion.circle
                  key={i}
                  cx={d.x}
                  cy={d.y}
                  r="2.6"
                  fill="#fbbf24"
                  variants={popDot(1.2 + i * 0.15)}
                  initial="hidden"
                  animate="visible"
                />
              ))}
            </svg>
          </motion.div>
        </div>
      </div>

      <style>{`
        .cortex-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(139,92,246,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139,92,246,0.08) 1px, transparent 1px);
          background-size: 32px 32px;
          animation: cortex-grid-drift 50s linear infinite;
        }
        @keyframes cortex-grid-drift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 32px 32px, 32px 32px; }
        }
        .cortex-scatter {
          position: absolute;
          inset: 0;
          z-index: 0;
          width: 100%;
          height: 100%;
          opacity: 0.7;
        }
        .cortex-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
          padding: 32px 20px 80px;
        }
        .cortex-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .cortex-terminal {
          background-color: #0f1525;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
          max-width: 420px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.35);
        }
        .cortex-terminal-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background-color: #141b2e;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cortex-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
        .cortex-terminal-title {
          margin-left: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: #5b6378;
        }
        .cortex-terminal-body {
          padding: 14px 16px;
          font-family: var(--font-mono, monospace);
          font-size: 12.5px;
          color: #eef1f8;
          min-height: 1.4em;
        }
        .cortex-prompt { color: #8b5cf6; }
        .cortex-terminal-output {
          margin-top: 8px;
          color: #34d399;
          font-size: 12px;
        }
        .cortex-kicker-row { display: flex; }
        .cortex-kicker {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          letter-spacing: 0.12em;
          color: #22d3ee;
          text-transform: uppercase;
          border: 1px solid rgba(34,211,238,0.3);
          border-radius: 4px;
          padding: 6px 14px;
        }
        .cortex-headline {
          font-family: var(--font-display, sans-serif);
          font-weight: 700;
          font-size: clamp(32px, 7vw, 58px);
          line-height: 1.1;
          letter-spacing: -0.02em;
          color: #eef1f8;
          margin: 0;
          max-width: 680px;
        }
        .cortex-subhead {
          font-size: 16.5px;
          line-height: 1.7;
          color: #8b93ab;
          margin: 0;
          max-width: 540px;
        }
        .cortex-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .cortex-btn-primary, .cortex-btn-outline {
          font-family: var(--font-mono, monospace);
          font-size: 13px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
        }
        .cortex-btn-primary {
          background-image: linear-gradient(120deg, #8b5cf6, #22d3ee);
          color: #0a0e17;
        }
        .cortex-btn-primary:hover { transform: translateY(-2px); opacity: 0.92; }
        .cortex-btn-outline {
          color: #eef1f8;
          border: 1px solid rgba(255,255,255,0.2);
          background-color: transparent;
        }
        .cortex-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.06); }
        .cortex-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 16px;
          margin-top: 10px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.08);
          max-width: 460px;
        }
        .cortex-stat { display: flex; flex-direction: column; gap: 2px; }
        .cortex-stat-value {
          font-family: var(--font-mono, monospace);
          font-weight: 600;
          font-size: 23px;
          background-image: linear-gradient(120deg, #8b5cf6, #22d3ee);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .cortex-stat-label {
          font-size: 11.5px;
          color: #8b93ab;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .cortex-portrait-col {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 18px;
        }
        .cortex-model-card {
          width: clamp(200px, 60vw, 260px);
          background-color: #141b2e;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 16px 36px rgba(0,0,0,0.4);
        }
        .cortex-model-card-tag {
          text-align: center;
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          letter-spacing: 0.12em;
          color: #0a0e17;
          background-image: linear-gradient(120deg, #8b5cf6, #22d3ee);
          padding: 8px 0;
        }
        .cortex-model-card-photo {
          position: relative;
          width: 100%;
          aspect-ratio: 418 / 597;
          background-color: #0f1525;
        }
        .cortex-model-card-meta {
          display: flex;
          flex-direction: column;
          gap: 8px;
          padding: 14px 16px 16px;
        }
        .cortex-model-card-row { display: flex; justify-content: space-between; align-items: baseline; }
        .cortex-model-card-key {
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          letter-spacing: 0.06em;
          color: #5b6378;
        }
        .cortex-model-card-value {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          color: #eef1f8;
        }
        .cortex-model-card-status { display: flex; align-items: center; gap: 6px; color: #34d399; }
        .cortex-status-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #34d399;
          box-shadow: 0 0 6px #34d399;
        }
        .cortex-sparkline {
          width: 140px;
          height: 70px;
          opacity: 0.85;
        }
        @media (min-width: 860px) {
          .cortex-hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 56px; }
          .cortex-portrait-col { align-items: flex-end; }
          .cortex-model-card { width: clamp(220px, 24vw, 280px); }
        }
        @media (min-width: 700px) {
          .cortex-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cortex-grid { animation: none; }
        }
      `}</style>
    </section>
  );
}
