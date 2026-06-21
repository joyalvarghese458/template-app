"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0d0d0f",
        paddingTop: "82px",
      }}
    >
      {/* Carbon fiber texture */}
      <div aria-hidden="true" className="redline-carbon" />

      {/* Speed lines */}
      <div aria-hidden="true" className="redline-speedlines">
        <span /><span /><span /><span /><span />
      </div>

      {/* 3D rotating gear — pure CSS, GPU-accelerated, no WebGL */}
      <div aria-hidden="true" className="redline-gear-stage">
        <svg className="redline-gear-3d" viewBox="0 0 100 100">
          <g fill="none" stroke="#e10600" strokeWidth="2.2" opacity="0.5">
            <circle cx="50" cy="50" r="30" />
            <circle cx="50" cy="50" r="10" />
            {Array.from({ length: 12 }).map((_, i) => {
              const angle = (i / 12) * 360;
              return (
                <line
                  key={i}
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="14"
                  transform={`rotate(${angle} 50 50)`}
                />
              );
            })}
          </g>
        </svg>
      </div>

      <div className="redline-hero-inner">
        <div className="redline-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="redline-area-kicker">
            <motion.span variants={fadeUp} className="redline-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="redline-headline redline-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Built for speed.</motion.span>
            <motion.span variants={fadeUp} className="redline-headline-accent" style={{ display: "block" }}>Engineered for precision.</motion.span>
          </motion.h1>

          {/* Photo — no background/card, shown directly with a small race-proven badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="redline-area-photo redline-photo-col"
          >
            <div className="redline-photo-wrap">
              <span className="redline-tick redline-tick-tl" aria-hidden="true" />
              <span className="redline-tick redline-tick-br" aria-hidden="true" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="redline-photo-float"
              >
                <Image
                  src="/common-hero.webp"
                  alt={`${OWNER.name}, ${OWNER.title}`}
                  fill
                  priority
                  sizes="(max-width: 860px) 230px, 380px"
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="redline-chip redline-chip-top"
              >
                <span className="redline-chip-dot" /> Race-Proven
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="redline-subhead redline-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="redline-cta-row redline-area-cta">
            <a href="#work" className="redline-btn-primary">View Work</a>
            <a href="#contact" className="redline-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="redline-stats-row redline-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="redline-stat">
                <span className="redline-stat-value">{s.value}</span>
                <span className="redline-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .redline-carbon {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          background-image:
            repeating-linear-gradient(45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 6px),
            repeating-linear-gradient(-45deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 1px, transparent 1px, transparent 6px);
        }
        .redline-speedlines { position: absolute; inset: 0; z-index: 0; overflow: hidden; opacity: 0.5; }
        .redline-speedlines span {
          position: absolute;
          height: 1px;
          width: 50%;
          background-image: linear-gradient(90deg, transparent, rgba(225,6,0,0.5), transparent);
          animation: redline-speed-move 3.2s linear infinite;
        }
        .redline-speedlines span:nth-child(1) { top: 18%; animation-duration: 2.6s; }
        .redline-speedlines span:nth-child(2) { top: 34%; animation-duration: 3.4s; animation-delay: -1s; }
        .redline-speedlines span:nth-child(3) { top: 52%; animation-duration: 2.9s; animation-delay: -0.4s; }
        .redline-speedlines span:nth-child(4) { top: 68%; animation-duration: 3.8s; animation-delay: -2s; }
        .redline-speedlines span:nth-child(5) { top: 84%; animation-duration: 3.1s; animation-delay: -1.4s; }
        @keyframes redline-speed-move {
          0% { transform: translateX(-60%); opacity: 0; }
          15% { opacity: 1; }
          85% { opacity: 1; }
          100% { transform: translateX(220%); opacity: 0; }
        }
        .redline-gear-stage {
          position: absolute;
          top: -60px;
          right: -60px;
          width: 320px;
          height: 320px;
          z-index: 0;
          perspective: 900px;
          opacity: 0.55;
        }
        .redline-gear-3d {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: redline-spin-3d 14s linear infinite;
        }
        @keyframes redline-spin-3d {
          from { transform: rotateY(0deg) rotateX(8deg); }
          to { transform: rotateY(360deg) rotateX(8deg); }
        }
        .redline-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .redline-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "kicker"
            "headline"
            "photo"
            "subhead"
            "cta"
            "stats";
          gap: 18px;
        }
        .redline-area-kicker { grid-area: kicker; }
        .redline-area-headline { grid-area: headline; }
        .redline-area-photo { grid-area: photo; }
        .redline-area-subhead { grid-area: subhead; }
        .redline-area-cta { grid-area: cta; }
        .redline-area-stats { grid-area: stats; }
        .redline-eyebrow {
          display: inline-flex;
          font-family: var(--font-display, sans-serif);
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #f2f2f0;
          background-color: rgba(225,6,0,0.16);
          border: 1px solid rgba(225,6,0,0.5);
          border-radius: 4px;
          padding: 6px 14px;
          width: fit-content;
        }
        .redline-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 700;
          font-size: clamp(32px, 8vw, 58px);
          line-height: 1.06;
          letter-spacing: 0.01em;
          color: #f2f2f0;
          text-transform: uppercase;
        }
        .redline-headline-accent { color: #e10600; }
        .redline-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .redline-photo-wrap {
          position: relative;
          width: clamp(210px, 58vw, 260px);
          aspect-ratio: 418 / 597;
        }
        .redline-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 30px rgba(0,0,0,0.55));
        }
        .redline-tick { position: absolute; width: 18px; height: 18px; border: 2px solid #e10600; z-index: 2; }
        .redline-tick-tl { top: -8px; left: -8px; border-right: none; border-bottom: none; }
        .redline-tick-br { bottom: -8px; right: -8px; border-left: none; border-top: none; }
        .redline-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-display, sans-serif);
          font-size: 11.5px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          color: #f2f2f0;
          background-color: rgba(22,22,26,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(225,6,0,0.5);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.4);
          white-space: nowrap;
          z-index: 3;
        }
        .redline-chip-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #e10600; box-shadow: 0 0 6px #e10600; }
        .redline-chip-top { top: -8%; right: -4%; }
        .redline-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #9a9aa0;
          margin: 0;
          max-width: 520px;
        }
        .redline-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .redline-btn-primary, .redline-btn-outline {
          font-family: var(--font-display, sans-serif);
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
          padding: 13px 26px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .redline-btn-primary {
          color: #f2f2f0;
          background-color: #e10600;
        }
        .redline-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(225,6,0,0.4); }
        .redline-btn-outline {
          color: #f2f2f0;
          border: 1px solid rgba(255,255,255,0.25);
          background-color: rgba(255,255,255,0.04);
        }
        .redline-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.08); }
        .redline-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.1);
          max-width: 460px;
        }
        .redline-stat { display: flex; flex-direction: column; gap: 2px; }
        .redline-stat-value { font-family: var(--font-display, sans-serif); font-weight: 700; font-size: 22px; color: #e10600; }
        .redline-stat-label { font-size: 10.5px; color: #9a9aa0; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .redline-hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            column-gap: 56px;
            row-gap: 20px;
            grid-template-areas:
              "kicker photo"
              "headline photo"
              "subhead photo"
              "cta photo"
              "stats photo";
          }
          .redline-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .redline-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 700px) {
          .redline-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .redline-chip { font-size: 10px; padding: 7px 11px; }
          .redline-gear-stage { width: 200px; height: 200px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .redline-gear-3d, .redline-speedlines span { animation: none; }
        }
      `}</style>
    </section>
  );
}
