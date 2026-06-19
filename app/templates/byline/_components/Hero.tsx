"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OWNER, TICKER } from "../_data/portfolio";
import { fadeUp, stagger, stampIn } from "../_utils/motion";
import Typewriter from "./Typewriter";

export default function Hero() {
  const tickerLoop = [...TICKER, ...TICKER];

  return (
    <section
      id="home"
      style={{
        position: "relative",
        backgroundColor: "#f3efe6",
        overflow: "hidden",
        paddingTop: "84px",
      }}
    >
      {/* Paper grain + halftone texture */}
      <div aria-hidden="true" className="byline-grain" />
      <div aria-hidden="true" className="byline-halftone" />

      {/* News ticker */}
      <div className="byline-ticker-bar" aria-label="Latest coverage">
        <span className="byline-ticker-tag">LATEST</span>
        <div className="byline-ticker-viewport">
          <div className="byline-ticker-track">
            {tickerLoop.map((item, i) => (
              <span key={i} className="byline-ticker-item">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Press stamp */}
      <motion.div
        aria-hidden="true"
        variants={stampIn}
        initial="hidden"
        animate="visible"
        className="byline-stamp"
      >
        <span>ON THE</span>
        <span>RECORD</span>
      </motion.div>

      <div className="byline-hero-inner">
        <div className="byline-hero-grid">
        <motion.div
          variants={stagger(0.1, 0.15)}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", gap: "20px" }}
        >
          <motion.div variants={fadeUp} className="byline-kicker-row">
            <span className="byline-rule" />
            <span className="byline-kicker">{OWNER.title}</span>
            <span className="byline-rule" />
          </motion.div>

          <motion.h1 variants={fadeUp} className="byline-headline">
            <Typewriter text={OWNER.tagline} startDelay={500} speed={42} />
          </motion.h1>

          <motion.p variants={fadeUp} className="byline-dateline">
            By {OWNER.name} <span className="byline-dateline-dot">—</span> {OWNER.dateline}
          </motion.p>

          <motion.p variants={fadeUp} className="byline-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} className="byline-cta-row">
            <a href="#stories" className="byline-btn-primary">
              Read My Work
            </a>
            <a href="#contact" className="byline-btn-outline">
              Get In Touch
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="byline-stats-row">
            {OWNER.stats.map((s) => (
              <div key={s.label} className="byline-stat">
                <span className="byline-stat-value">{s.value}</span>
                <span className="byline-stat-label">{s.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="byline-portrait-col"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
            className="byline-press-card"
          >
            <span className="byline-press-card-tag">Press Pass</span>
            <div className="byline-press-card-photo">
              <Image
                src="/common-hero.webp"
                alt={`${OWNER.name}, ${OWNER.title}`}
                fill
                priority
                sizes="(max-width: 860px) 260px, 300px"
                style={{ objectFit: "contain", objectPosition: "bottom" }}
              />
            </div>
            <div className="byline-press-card-caption">
              <span className="byline-press-card-name">{OWNER.name}</span>
              <span className="byline-press-card-title">{OWNER.title}</span>
              <span className="byline-press-card-id">PRESS ID NO. 0427</span>
            </div>
          </motion.div>
        </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.7 }}
          className="byline-scroll-cue"
        >
          <span>Continued Below</span>
          <motion.span
            aria-hidden="true"
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            style={{ display: "inline-block" }}
          >
            ▾
          </motion.span>
        </motion.div>
      </div>

      <style>{`
        .byline-grain {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          mix-blend-mode: multiply;
          background-image: url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='120' height='120'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%25' height='100%25' filter='url(%23n)' opacity='0.35'/></svg>");
        }
        .byline-halftone {
          position: absolute;
          top: -40px;
          right: -60px;
          width: 240px;
          height: 240px;
          z-index: 0;
          opacity: 0.5;
          background-image: radial-gradient(rgba(26,23,20,0.18) 1.6px, transparent 1.6px);
          background-size: 11px 11px;
          mask-image: radial-gradient(circle, black 0%, transparent 75%);
        }
        .byline-ticker-bar {
          position: relative;
          z-index: 2;
          display: flex;
          align-items: stretch;
          background-color: #1a1714;
          overflow: hidden;
        }
        .byline-ticker-tag {
          flex-shrink: 0;
          background-color: #b3231a;
          color: #f3efe6;
          font-family: var(--font-type, monospace);
          font-size: 10.5px;
          letter-spacing: 0.08em;
          padding: 8px 12px;
          display: flex;
          align-items: center;
        }
        .byline-ticker-viewport {
          flex: 1 1 auto;
          min-width: 0;
          overflow: hidden;
          position: relative;
          display: flex;
          align-items: center;
        }
        .byline-ticker-track {
          display: flex;
          gap: 48px;
          white-space: nowrap;
          align-items: center;
          padding-left: 16px;
          animation: byline-ticker-scroll 26s linear infinite;
          width: max-content;
        }
        .byline-ticker-bar:hover .byline-ticker-track { animation-play-state: paused; }
        .byline-ticker-item {
          font-family: var(--font-type, monospace);
          font-size: 11px;
          letter-spacing: 0.02em;
          color: #ece4d3;
        }
        @keyframes byline-ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .byline-stamp {
          position: absolute;
          top: 104px;
          right: 16px;
          z-index: 2;
          width: 84px;
          height: 84px;
          border-radius: 50%;
          border: 2px dashed rgba(179,35,26,0.55);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          color: #b3231a;
          font-family: var(--font-type, monospace);
          font-size: 9px;
          letter-spacing: 0.05em;
          line-height: 1.6;
          text-align: center;
        }
        .byline-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1160px;
          margin: 0 auto;
          padding: 40px 20px 96px;
        }
        .byline-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }
        .byline-portrait-col {
          display: flex;
          justify-content: center;
        }
        .byline-press-card {
          width: clamp(190px, 58vw, 240px);
          background-color: #ece4d3;
          border: 1px solid rgba(26,23,20,0.18);
          box-shadow: 0 10px 24px rgba(26,23,20,0.12);
          transform: rotate(-1.6deg);
          padding-bottom: 2px;
        }
        .byline-press-card-tag {
          display: block;
          text-align: center;
          background-color: #b3231a;
          color: #f3efe6;
          font-family: var(--font-type, monospace);
          font-size: 10.5px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          padding: 7px 0;
        }
        .byline-press-card-photo {
          position: relative;
          width: 100%;
          aspect-ratio: 418 / 597;
          background-color: #f3efe6;
        }
        .byline-press-card-caption {
          display: flex;
          flex-direction: column;
          gap: 3px;
          padding: 12px 14px 14px;
          border-top: 1px dashed rgba(26,23,20,0.25);
        }
        .byline-press-card-name {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: 16px;
          color: #1a1714;
        }
        .byline-press-card-title {
          font-family: var(--font-type, monospace);
          font-size: 10px;
          letter-spacing: 0.04em;
          color: #b3231a;
          text-transform: uppercase;
        }
        .byline-press-card-id {
          font-family: var(--font-type, monospace);
          font-size: 9.5px;
          color: #8a8276;
          margin-top: 4px;
        }
        @media (min-width: 860px) {
          .byline-hero-grid { grid-template-columns: 1.15fr 0.85fr; gap: 48px; }
          .byline-portrait-col { justify-content: flex-end; }
          .byline-press-card { width: clamp(220px, 24vw, 280px); }
        }
        .byline-kicker-row {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .byline-rule {
          height: 1px;
          flex: 1;
          background-color: rgba(26,23,20,0.25);
          max-width: 36px;
        }
        .byline-kicker {
          font-family: var(--font-type, monospace);
          font-size: 11.5px;
          letter-spacing: 0.12em;
          color: #b3231a;
          text-transform: uppercase;
          white-space: nowrap;
        }
        .byline-headline {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(32px, 9vw, 64px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #1a1714;
          margin: 0;
          min-height: 1.2em;
        }
        .byline-dateline {
          font-family: var(--font-type, monospace);
          font-size: 12.5px;
          letter-spacing: 0.03em;
          color: #5b554c;
          margin: 0;
        }
        .byline-dateline-dot { color: #b3231a; }
        .byline-subhead {
          font-family: var(--font-body, serif);
          font-size: 17px;
          line-height: 1.7;
          color: #3c372f;
          margin: 0;
          max-width: 560px;
        }
        .byline-cta-row {
          display: flex;
          gap: 12px;
          flex-wrap: wrap;
        }
        .byline-btn-primary, .byline-btn-outline {
          font-family: var(--font-type, monospace);
          font-size: 13px;
          letter-spacing: 0.02em;
          padding: 13px 26px;
          border-radius: 2px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, background-color 0.2s, color 0.2s;
        }
        .byline-btn-primary {
          background-color: #b3231a;
          color: #f3efe6;
        }
        .byline-btn-primary:hover { transform: translateY(-2px); background-color: #921c15; }
        .byline-btn-outline {
          background-color: transparent;
          color: #1a1714;
          border: 1px solid rgba(26,23,20,0.4);
        }
        .byline-btn-outline:hover { transform: translateY(-2px); background-color: rgba(26,23,20,0.06); }
        .byline-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 18px;
          margin-top: 14px;
          padding-top: 24px;
          border-top: 1px solid rgba(26,23,20,0.16);
          max-width: 480px;
        }
        .byline-stat { display: flex; flex-direction: column; gap: 2px; }
        .byline-stat-value {
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: 24px;
          color: #b3231a;
        }
        .byline-stat-label {
          font-family: var(--font-type, monospace);
          font-size: 10.5px;
          letter-spacing: 0.03em;
          color: #5b554c;
          text-transform: uppercase;
        }
        .byline-scroll-cue {
          display: flex;
          align-items: center;
          gap: 6px;
          margin-top: 40px;
          font-family: var(--font-type, monospace);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: #8a8276;
        }
        @media (min-width: 700px) {
          .byline-stats-row {
            grid-template-columns: repeat(4, minmax(0,1fr));
            max-width: none;
          }
        }
        @media (min-width: 768px) {
          .byline-hero-inner { padding: 56px 32px 120px; }
          .byline-stamp { width: 112px; height: 112px; font-size: 10.5px; top: 116px; right: 40px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .byline-ticker-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
