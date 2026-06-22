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
        backgroundColor: "#f8f3e7",
        paddingTop: "82px",
      }}
    >
      {/* Ledger-ruled paper texture */}
      <div aria-hidden="true" className="ledger-rule-lines" />

      {/* 3D rotating coin — pure CSS, GPU-accelerated, no WebGL */}
      <div aria-hidden="true" className="ledger-coin-stage">
        <div className="ledger-coin-3d">
          <div className="ledger-coin-face ledger-coin-front">
            <span>$</span>
          </div>
          <div className="ledger-coin-face ledger-coin-back">
            <span className="ledger-coin-back-line" />
            <span className="ledger-coin-back-line" />
            <span className="ledger-coin-back-line" />
          </div>
        </div>
      </div>

      <div className="ledger-hero-inner">
        <div className="ledger-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="ledger-area-kicker">
            <motion.span variants={fadeUp} className="ledger-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="ledger-headline ledger-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Clarity in every</motion.span>
            <motion.span variants={fadeUp} className="ledger-headline-accent" style={{ display: "block" }}>ledger line.</motion.span>
          </motion.h1>

          {/* Photo — no background/card, shown directly with a small credential chip */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="ledger-area-photo ledger-photo-col"
          >
            <div className="ledger-photo-wrap">
              <span className="ledger-tick ledger-tick-tl" aria-hidden="true" />
              <span className="ledger-tick ledger-tick-br" aria-hidden="true" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="ledger-photo-float"
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
                className="ledger-chip ledger-chip-top"
              >
                <span className="ledger-chip-dot" /> CPA Licensed
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="ledger-subhead ledger-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="ledger-cta-row ledger-area-cta">
            <a href={OWNER.ctaHref} className="ledger-btn-primary">{OWNER.ctaLabel}</a>
            <a href="#process" className="ledger-btn-outline">See My Process</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="ledger-stats-row ledger-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="ledger-stat">
                <span className="ledger-stat-value">{s.value}</span>
                <span className="ledger-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ledger-rule-lines {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.55;
          background-image: repeating-linear-gradient(
            to bottom,
            transparent 0px,
            transparent 27px,
            rgba(31,92,63,0.08) 27px,
            rgba(31,92,63,0.08) 28px
          );
        }
        .ledger-coin-stage {
          position: absolute;
          top: -40px;
          right: -50px;
          width: 260px;
          height: 260px;
          z-index: 0;
          perspective: 1000px;
          opacity: 0.7;
        }
        .ledger-coin-3d {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: ledger-coin-spin 11s linear infinite;
        }
        @keyframes ledger-coin-spin {
          from { transform: rotateY(0deg) rotateX(12deg); }
          to { transform: rotateY(360deg) rotateX(12deg); }
        }
        .ledger-coin-face {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          backface-visibility: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 3px solid #d8b563;
        }
        .ledger-coin-front {
          background: radial-gradient(circle at 35% 30%, #f3d98f, #b8862c 70%, #8a651e 100%);
          font-family: var(--font-display, serif);
          font-size: 96px;
          font-weight: 600;
          color: rgba(22,41,31,0.55);
        }
        .ledger-coin-back {
          background: radial-gradient(circle at 35% 30%, #ead9a6, #b8862c 70%, #8a651e 100%);
          transform: rotateY(180deg);
          flex-direction: column;
          gap: 14px;
          padding: 0 50px;
        }
        .ledger-coin-back-line { width: 100%; height: 4px; border-radius: 2px; background-color: rgba(22,41,31,0.35); }
        .ledger-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .ledger-hero-grid {
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
        .ledger-area-kicker { grid-area: kicker; }
        .ledger-area-headline { grid-area: headline; }
        .ledger-area-photo { grid-area: photo; }
        .ledger-area-subhead { grid-area: subhead; }
        .ledger-area-cta { grid-area: cta; }
        .ledger-area-stats { grid-area: stats; }
        .ledger-eyebrow {
          display: inline-flex;
          font-family: var(--font-body, sans-serif);
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #16291f;
          background-color: rgba(31,92,63,0.1);
          border: 1px solid rgba(31,92,63,0.3);
          border-radius: 4px;
          padding: 6px 14px;
          width: fit-content;
        }
        .ledger-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(34px, 8.5vw, 58px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #16291f;
        }
        .ledger-headline-accent { color: #1f5c3f; font-style: italic; }
        .ledger-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .ledger-photo-wrap {
          position: relative;
          width: clamp(210px, 58vw, 260px);
          aspect-ratio: 418 / 597;
        }
        .ledger-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 30px rgba(22,41,31,0.22));
        }
        .ledger-tick { position: absolute; width: 18px; height: 18px; border: 2px solid #b8862c; z-index: 2; }
        .ledger-tick-tl { top: -8px; left: -8px; border-right: none; border-bottom: none; }
        .ledger-tick-br { bottom: -8px; right: -8px; border-left: none; border-top: none; }
        .ledger-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-body, sans-serif);
          font-size: 11.5px;
          font-weight: 600;
          color: #16291f;
          background-color: rgba(255,253,247,0.92);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(31,92,63,0.3);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 10px 24px rgba(22,41,31,0.14);
          white-space: nowrap;
          z-index: 3;
        }
        .ledger-chip-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #1f5c3f; box-shadow: 0 0 6px #1f5c3f; }
        .ledger-chip-top { top: -8%; right: -4%; }
        .ledger-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #4d5f52;
          margin: 0;
          max-width: 520px;
        }
        .ledger-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ledger-btn-primary, .ledger-btn-outline {
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 600;
          padding: 13px 26px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .ledger-btn-primary {
          color: #fffdf7;
          background-color: #1f5c3f;
        }
        .ledger-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 22px rgba(31,92,63,0.3); }
        .ledger-btn-outline {
          color: #16291f;
          border: 1px solid rgba(22,41,31,0.22);
          background-color: rgba(255,253,247,0.5);
        }
        .ledger-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,253,247,0.9); }
        .ledger-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(22,41,31,0.12);
          max-width: 460px;
        }
        .ledger-stat { display: flex; flex-direction: column; gap: 2px; }
        .ledger-stat-value { font-family: var(--font-display, serif); font-weight: 600; font-size: 22px; color: #1f5c3f; }
        .ledger-stat-label { font-size: 10.5px; color: #4d5f52; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .ledger-hero-grid {
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
          .ledger-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .ledger-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 700px) {
          .ledger-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .ledger-chip { font-size: 10px; padding: 7px 11px; }
          .ledger-coin-stage { width: 170px; height: 170px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ledger-coin-3d { animation: none; }
        }
      `}</style>
    </section>
  );
}
