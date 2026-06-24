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
        backgroundColor: "#0a0f1c",
        paddingTop: "80px",
      }}
    >
      {/* Soft navy/gold backdrop glows */}
      <div aria-hidden="true" className="atlas-glow atlas-glow-1" />
      <div aria-hidden="true" className="atlas-glow atlas-glow-2" />

      <div className="atlas-hero-inner">
        <div className="atlas-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="atlas-area-kicker">
            <motion.span variants={fadeUp} className="atlas-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          {/* Photo — no background/card, shown directly with floating impact chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="atlas-area-photo atlas-photo-col"
          >
            <div className="atlas-photo-wrap">
              <span aria-hidden="true" className="atlas-orbit-ring" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="atlas-photo-float"
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
                className="atlas-chip atlas-chip-top"
              >
                <span className="atlas-chip-emoji">📈</span> $280M+ growth driven
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="atlas-chip atlas-chip-bottom"
              >
                <span className="atlas-chip-emoji">✦</span> {OWNER.availability}
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="atlas-headline atlas-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Big strategy decks don&apos;t grow revenue.</motion.span>
            <motion.span variants={fadeUp} className="atlas-headline-gradient" style={{ display: "block" }}>Disciplined execution does.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="atlas-subhead atlas-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="atlas-cta-row atlas-area-cta">
            <a href="#work" className="atlas-btn-primary">View Case Studies</a>
            <a href="#contact" className="atlas-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="atlas-stats-row atlas-area-stats">
            {OWNER.stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} className={`atlas-stat atlas-stat-${i % 4}`}>
                <span className="atlas-stat-value">{s.value}</span>
                <span className="atlas-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .atlas-glow { position: absolute; border-radius: 50%; filter: blur(70px); z-index: 0; opacity: 0.22; }
        .atlas-glow-1 { width: 340px; height: 340px; top: -110px; left: -100px; background: #d4af6a; animation: atlas-glow-float-1 17s ease-in-out infinite; }
        .atlas-glow-2 { width: 300px; height: 300px; top: 160px; right: -120px; background: #9c3f4a; animation: atlas-glow-float-2 20s ease-in-out infinite; }
        @keyframes atlas-glow-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px,20px); } }
        @keyframes atlas-glow-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-25px,30px); } }
        .atlas-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .atlas-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "kicker"
            "photo"
            "headline"
            "subhead"
            "cta"
            "stats";
          gap: 18px;
        }
        .atlas-area-kicker { grid-area: kicker; }
        .atlas-area-photo { grid-area: photo; }
        .atlas-area-headline { grid-area: headline; }
        .atlas-area-subhead { grid-area: subhead; }
        .atlas-area-cta { grid-area: cta; }
        .atlas-area-stats { grid-area: stats; }
        .atlas-eyebrow {
          display: inline-flex;
          font-size: 13px;
          font-weight: 600;
          color: #d4af6a;
          background-color: rgba(212,175,106,0.12);
          border: 1px solid rgba(212,175,106,0.3);
          border-radius: 100px;
          padding: 7px 16px;
          width: fit-content;
        }
        .atlas-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(30px, 7.6vw, 54px);
          line-height: 1.16;
          letter-spacing: -0.01em;
          color: #f3efe4;
        }
        .atlas-headline-gradient {
          background-image: linear-gradient(120deg, #d4af6a, #f1d49b);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .atlas-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .atlas-photo-wrap {
          position: relative;
          width: clamp(210px, 58vw, 260px);
          aspect-ratio: 418 / 597;
        }
        .atlas-orbit-ring {
          position: absolute;
          inset: -8% -28%;
          border: 1px dashed rgba(212,175,106,0.3);
          border-radius: 50%;
          transform: rotateX(72deg);
          animation: atlas-orbit-spin 24s linear infinite;
        }
        @keyframes atlas-orbit-spin {
          from { transform: rotateX(72deg) rotateZ(0deg); }
          to { transform: rotateX(72deg) rotateZ(360deg); }
        }
        .atlas-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 30px rgba(0,0,0,0.45));
        }
        .atlas-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          color: #f3efe4;
          background-color: #16213a;
          border: 1px solid rgba(212,175,106,0.25);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.4);
          white-space: nowrap;
          z-index: 3;
        }
        .atlas-chip-emoji { font-size: 13px; }
        .atlas-chip-top { top: -6%; right: -8%; }
        .atlas-chip-bottom { bottom: 6%; left: -12%; }
        .atlas-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #aab4c9;
          margin: 0;
          max-width: 520px;
        }
        .atlas-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .atlas-btn-primary, .atlas-btn-outline {
          font-size: 14.5px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .atlas-btn-primary {
          color: #0a0f1c;
          background-image: linear-gradient(120deg, #d4af6a, #f1d49b);
        }
        .atlas-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(212,175,106,0.3); }
        .atlas-btn-outline {
          color: #f3efe4;
          border: 1px solid rgba(243,239,228,0.22);
          background-color: transparent;
        }
        .atlas-btn-outline:hover { transform: translateY(-2px); background-color: rgba(243,239,228,0.06); }
        .atlas-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(243,239,228,0.1);
          max-width: 460px;
        }
        .atlas-stat { display: flex; flex-direction: column; gap: 2px; }
        .atlas-stat-value { font-family: var(--font-display, serif); font-weight: 600; font-size: 22px; }
        .atlas-stat-0 .atlas-stat-value { color: #d4af6a; }
        .atlas-stat-1 .atlas-stat-value { color: #9c3f4a; }
        .atlas-stat-2 .atlas-stat-value { color: #3f8f76; }
        .atlas-stat-3 .atlas-stat-value { color: #5b7ba6; }
        .atlas-stat-label { font-size: 10.5px; color: #aab4c9; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .atlas-hero-grid {
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
          .atlas-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .atlas-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 700px) {
          .atlas-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .atlas-chip { font-size: 10.5px; padding: 7px 12px; }
          .atlas-chip-top { right: -2%; }
          .atlas-chip-bottom { left: -4%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .atlas-glow, .atlas-orbit-ring { animation: none; }
        }
      `}</style>
    </section>
  );
}
