"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";
import TypedLines from "./TypedLines";

const RAIN_COLUMNS = 10;
const BIN_STRING = "01001101010111000101100101011010010100110101110001011001";

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
        backgroundColor: "#070a08",
        paddingTop: "84px",
      }}
    >
      {/* Binary rain backdrop */}
      <div aria-hidden="true" className="cipher-rain">
        {Array.from({ length: RAIN_COLUMNS }).map((_, i) => (
          <span
            key={i}
            className="cipher-rain-col"
            style={{
              left: `${(i / RAIN_COLUMNS) * 100}%`,
              animationDuration: `${14 + (i % 5) * 3}s`,
              animationDelay: `${-(i * 2.3)}s`,
            }}
          >
            {BIN_STRING}
          </span>
        ))}
      </div>

      {/* CRT scanline texture */}
      <div aria-hidden="true" className="cipher-scanlines" />

      <div className="cipher-hero-inner">
        <div className="cipher-hero-grid">
          <motion.div
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            animate="visible"
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <motion.div variants={fadeUp} className="cipher-terminal">
              <div className="cipher-terminal-bar">
                <span className="cipher-dot" style={{ background: "#ff3b5c" }} />
                <span className="cipher-dot" style={{ background: "#ffb627" }} />
                <span className="cipher-dot" style={{ background: "#39ff8c" }} />
                <span className="cipher-terminal-title">recon.sh</span>
              </div>
              <div className="cipher-terminal-body">
                <TypedLines
                  lines={[
                    { prefix: "root@cipher:~$", text: "nmap -p- leo-navarro.dev" },
                    { text: "1000 ports scanned in 4.21s" },
                    { prefix: "[+]", text: "0 critical vulnerabilities found", color: "#39ff8c" },
                  ]}
                  startDelay={350}
                  speed={20}
                />
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="cipher-kicker-row">
              <span className="cipher-kicker">{OWNER.title}</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="cipher-headline">
              {OWNER.tagline}
            </motion.h1>

            <motion.p variants={fadeUp} className="cipher-subhead">
              {OWNER.subtagline}
            </motion.p>

            <motion.div variants={fadeUp} className="cipher-cta-row">
              <a href="#operations" className="cipher-btn-primary">View Operations</a>
              <a href="#contact" className="cipher-btn-outline">Get In Touch</a>
            </motion.div>

            <motion.div variants={fadeUp} className="cipher-stats-row">
              {OWNER.stats.map((s) => (
                <div key={s.label} className="cipher-stat">
                  <span className="cipher-stat-value">{s.value}</span>
                  <span className="cipher-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo — no background/card, shown directly with a HUD recon frame */}
          <div className="cipher-photo-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="cipher-photo-wrap"
            >
              <span className="cipher-bracket cipher-bracket-tl" aria-hidden="true" />
              <span className="cipher-bracket cipher-bracket-tr" aria-hidden="true" />
              <span className="cipher-bracket cipher-bracket-bl" aria-hidden="true" />
              <span className="cipher-bracket cipher-bracket-br" aria-hidden="true" />
              <span className="cipher-scanbeam" aria-hidden="true" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="cipher-photo-float"
              >
                <Image
                  src="/common-hero.webp"
                  alt={`${OWNER.name}, ${OWNER.title}`}
                  fill
                  priority
                  sizes="(max-width: 860px) 280px, 360px"
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="cipher-chip cipher-chip-top"
              >
                <span className="cipher-chip-dot" />
                ACCESS GRANTED
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -24, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="cipher-chip cipher-chip-bottom"
              >
                🎯 Top 2% on HackTheBox
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .cipher-rain {
          position: absolute;
          inset: 0;
          z-index: 0;
          overflow: hidden;
          opacity: 0.16;
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 20%, black 75%, transparent);
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 75%, transparent);
        }
        .cipher-rain-col {
          position: absolute;
          top: -50%;
          font-family: var(--font-mono, monospace);
          font-size: 13px;
          line-height: 22px;
          color: #39ff8c;
          white-space: pre-wrap;
          width: 1.2ch;
          word-break: break-all;
          animation-name: cipher-rain-fall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
        @keyframes cipher-rain-fall {
          0% { transform: translateY(0); }
          100% { transform: translateY(120%); }
        }
        .cipher-scanlines {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image: repeating-linear-gradient(
            to bottom,
            rgba(255,255,255,0.025) 0px,
            rgba(255,255,255,0.025) 1px,
            transparent 1px,
            transparent 3px
          );
        }
        .cipher-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          width: 100%;
          margin: 0 auto;
          padding: 32px 20px 80px;
        }
        .cipher-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .cipher-terminal {
          background-color: #0d120f;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 8px;
          overflow: hidden;
          max-width: 420px;
          box-shadow: 0 12px 28px rgba(0,0,0,0.45);
        }
        .cipher-terminal-bar {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 8px 12px;
          background-color: #121810;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }
        .cipher-dot { width: 9px; height: 9px; border-radius: 50%; display: inline-block; }
        .cipher-terminal-title {
          margin-left: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          color: #4d5d54;
        }
        .cipher-terminal-body {
          padding: 14px 16px;
          font-family: var(--font-mono, monospace);
          font-size: 12.5px;
          color: #e9f5ee;
          min-height: 4.8em;
        }
        .cipher-kicker-row { display: flex; }
        .cipher-kicker {
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          letter-spacing: 0.12em;
          color: #39ff8c;
          text-transform: uppercase;
          border: 1px solid rgba(57,255,140,0.3);
          border-radius: 4px;
          padding: 6px 14px;
        }
        .cipher-headline {
          font-family: var(--font-display, sans-serif);
          font-weight: 700;
          font-size: clamp(32px, 7vw, 56px);
          line-height: 1.12;
          letter-spacing: -0.01em;
          color: #e9f5ee;
          margin: 0;
          max-width: 680px;
        }
        .cipher-subhead {
          font-size: 16.5px;
          line-height: 1.7;
          color: #8aa194;
          margin: 0;
          max-width: 540px;
        }
        .cipher-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .cipher-btn-primary, .cipher-btn-outline {
          font-family: var(--font-mono, monospace);
          font-size: 13px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
        }
        .cipher-btn-primary {
          background-color: #39ff8c;
          color: #070a08;
        }
        .cipher-btn-primary:hover { transform: translateY(-2px); opacity: 0.9; }
        .cipher-btn-outline {
          color: #e9f5ee;
          border: 1px solid rgba(255,255,255,0.2);
          background-color: transparent;
        }
        .cipher-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.06); }
        .cipher-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 16px;
          margin-top: 10px;
          padding-top: 22px;
          border-top: 1px solid rgba(255,255,255,0.08);
          max-width: 460px;
        }
        .cipher-stat { display: flex; flex-direction: column; gap: 2px; }
        .cipher-stat-value {
          font-family: var(--font-mono, monospace);
          font-weight: 700;
          font-size: 22px;
          color: #39ff8c;
        }
        .cipher-stat-label {
          font-size: 11.5px;
          color: #8aa194;
          text-transform: uppercase;
          letter-spacing: 0.03em;
        }
        .cipher-photo-col { display: flex; justify-content: center; }
        .cipher-photo-wrap {
          position: relative;
          width: clamp(220px, 64vw, 300px);
          aspect-ratio: 418 / 597;
        }
        .cipher-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 32px rgba(0,0,0,0.5));
        }
        .cipher-bracket {
          position: absolute;
          width: 26px;
          height: 26px;
          border: 2px solid rgba(57,255,140,0.55);
          z-index: 3;
        }
        .cipher-bracket-tl { top: -10px; left: -10px; border-right: none; border-bottom: none; }
        .cipher-bracket-tr { top: -10px; right: -10px; border-left: none; border-bottom: none; }
        .cipher-bracket-bl { bottom: -10px; left: -10px; border-right: none; border-top: none; }
        .cipher-bracket-br { bottom: -10px; right: -10px; border-left: none; border-top: none; }
        .cipher-scanbeam {
          position: absolute;
          left: 4%;
          right: 4%;
          height: 2px;
          background: linear-gradient(90deg, transparent, #39ff8c, transparent);
          opacity: 0.7;
          z-index: 3;
          animation: cipher-scanbeam-sweep 4.5s ease-in-out infinite;
        }
        @keyframes cipher-scanbeam-sweep {
          0%, 100% { top: 4%; opacity: 0; }
          8% { opacity: 0.8; }
          50% { top: 92%; opacity: 0.8; }
          58% { opacity: 0; }
        }
        .cipher-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-mono, monospace);
          font-size: 11.5px;
          font-weight: 600;
          color: #e9f5ee;
          background-color: rgba(13,18,15,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(57,255,140,0.3);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.35);
          white-space: nowrap;
          z-index: 4;
        }
        .cipher-chip-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #39ff8c;
          box-shadow: 0 0 6px #39ff8c;
          animation: cipher-pulse 1.6s ease-in-out infinite;
        }
        @keyframes cipher-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        .cipher-chip-top { top: 4%; right: -6%; }
        .cipher-chip-bottom { bottom: 8%; left: -10%; }
        @media (min-width: 860px) {
          .cipher-hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 56px; }
          .cipher-photo-col { justify-content: flex-end; }
        }
        @media (min-width: 700px) {
          .cipher-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .cipher-chip { font-size: 10.5px; padding: 7px 11px; }
          .cipher-chip-top { right: -2%; }
          .cipher-chip-bottom { left: -4%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .cipher-rain-col, .cipher-scanbeam, .cipher-chip-dot { animation: none; }
        }
      `}</style>
    </section>
  );
}
