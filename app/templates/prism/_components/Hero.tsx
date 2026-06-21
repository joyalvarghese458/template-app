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
        backgroundColor: "#0a0a14",
        paddingTop: "84px",
      }}
    >
      {/* Aurora gradient blobs — ambient section backdrop, not behind the photo */}
      <div aria-hidden="true" className="prism-blob prism-blob-1" />
      <div aria-hidden="true" className="prism-blob prism-blob-2" />
      <div aria-hidden="true" className="prism-blob prism-blob-3" />
      <div aria-hidden="true" className="prism-noise" />

      <div className="prism-hero-inner">
        <div className="prism-hero-grid">
          <motion.div
            variants={stagger(0.1, 0.1)}
            initial="hidden"
            animate="visible"
            className="prism-area-kicker"
          >
            <motion.span variants={fadeUp} className="prism-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          <motion.h1
            variants={stagger(0.1, 0.15)}
            initial="hidden"
            animate="visible"
            className="prism-headline prism-area-headline"
          >
            <motion.span variants={fadeUp} style={{ display: "block" }}>Crafting interfaces people</motion.span>
            <motion.span variants={fadeUp} className="prism-headline-gradient" style={{ display: "block" }}>fall for.</motion.span>
          </motion.h1>

          {/* Photo — no background/card, shown directly with small glass-orb accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="prism-area-photo prism-photo-col"
          >
            <div className="prism-photo-wrap">
              <span className="prism-orb prism-orb-1" aria-hidden="true" />
              <span className="prism-orb prism-orb-2" aria-hidden="true" />

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="prism-photo-float"
              >
                <Image
                  src="/common-hero.webp"
                  alt={`${OWNER.name}, ${OWNER.title}`}
                  fill
                  priority
                  sizes="(max-width: 860px) 230px, 360px"
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 18, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="prism-chip prism-chip-top"
              >
                <span className="prism-chip-dot" /> Booking Q3
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="prism-subhead prism-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="prism-cta-row prism-area-cta">
            <a href="#work" className="prism-btn-primary">View Work</a>
            <a href="#contact" className="prism-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="prism-stats-row prism-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="prism-stat-card">
                <span className="prism-stat-value">{s.value}</span>
                <span className="prism-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .prism-blob { position: absolute; border-radius: 50%; filter: blur(70px); z-index: 0; }
        .prism-blob-1 { width: 360px; height: 360px; top: -100px; left: -80px; background: #2dd9c4; opacity: 0.28; animation: prism-blob-float-1 17s ease-in-out infinite; }
        .prism-blob-2 { width: 320px; height: 320px; top: 120px; right: -120px; background: #6c63ff; opacity: 0.32; animation: prism-blob-float-2 19s ease-in-out infinite; }
        .prism-blob-3 { width: 280px; height: 280px; bottom: -120px; left: 30%; background: #e94fd1; opacity: 0.22; animation: prism-blob-float-3 21s ease-in-out infinite; }
        @keyframes prism-blob-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(40px, 30px); } }
        @keyframes prism-blob-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-30px, 40px); } }
        @keyframes prism-blob-float-3 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(20px, -30px); } }
        .prism-noise {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background-image: radial-gradient(rgba(255,255,255,0.025) 1px, transparent 1px);
          background-size: 4px 4px;
        }
        .prism-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .prism-hero-grid {
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
        .prism-area-kicker { grid-area: kicker; }
        .prism-area-headline { grid-area: headline; }
        .prism-area-photo { grid-area: photo; }
        .prism-area-subhead { grid-area: subhead; }
        .prism-area-cta { grid-area: cta; }
        .prism-area-stats { grid-area: stats; }
        .prism-eyebrow {
          display: inline-flex;
          font-size: 12.5px;
          font-weight: 700;
          color: #f5f4fa;
          background-color: rgba(255,255,255,0.07);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 100px;
          padding: 7px 16px;
          width: fit-content;
          backdrop-filter: blur(8px);
        }
        .prism-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 600;
          font-size: clamp(28px, 7.4vw, 50px);
          line-height: 1.16;
          letter-spacing: -0.01em;
          color: #f5f4fa;
        }
        .prism-headline-gradient {
          background-image: linear-gradient(120deg, #2dd9c4, #6c63ff, #e94fd1);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .prism-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .prism-photo-wrap {
          position: relative;
          width: clamp(190px, 56vw, 240px);
          aspect-ratio: 418 / 597;
        }
        .prism-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 26px 34px rgba(0,0,0,0.5));
        }
        .prism-orb {
          position: absolute;
          border-radius: 50%;
          z-index: 2;
          filter: blur(1px);
        }
        .prism-orb-1 { width: 22px; height: 22px; top: -10px; right: -10px; background: radial-gradient(circle, #2dd9c4, transparent 70%); box-shadow: 0 0 18px 4px rgba(45,217,196,0.6); }
        .prism-orb-2 { width: 14px; height: 14px; bottom: 14%; left: -8px; background: radial-gradient(circle, #e94fd1, transparent 70%); box-shadow: 0 0 14px 3px rgba(233,79,209,0.6); }
        .prism-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 700;
          color: #f5f4fa;
          background-color: rgba(20,20,32,0.75);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,255,255,0.16);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 10px 24px rgba(0,0,0,0.35);
          white-space: nowrap;
          z-index: 3;
        }
        .prism-chip-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #2dd9c4; box-shadow: 0 0 6px #2dd9c4; }
        .prism-chip-top { top: 6%; right: -6%; }
        .prism-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #a8a6c0;
          margin: 0;
          max-width: 520px;
        }
        .prism-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .prism-btn-primary, .prism-btn-outline {
          font-size: 14px;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .prism-btn-primary {
          color: #0a0a14;
          background-image: linear-gradient(120deg, #2dd9c4, #6c63ff);
        }
        .prism-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 24px rgba(108,99,255,0.35); }
        .prism-btn-outline {
          color: #f5f4fa;
          border: 1px solid rgba(255,255,255,0.22);
          background-color: rgba(255,255,255,0.05);
          backdrop-filter: blur(8px);
        }
        .prism-btn-outline:hover { transform: translateY(-2px); background-color: rgba(255,255,255,0.1); }
        .prism-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 12px;
        }
        .prism-stat-card {
          border: 1px solid rgba(255,255,255,0.1);
          background-color: rgba(255,255,255,0.04);
          backdrop-filter: blur(10px);
          border-radius: 14px;
          padding: 14px 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .prism-stat-value { font-family: var(--font-display, sans-serif); font-weight: 600; font-size: 19px; color: #f5f4fa; }
        .prism-stat-label { font-size: 10.5px; color: #a8a6c0; }
        @media (min-width: 860px) {
          .prism-hero-grid {
            grid-template-columns: 1.1fr 0.9fr;
            column-gap: 56px;
            row-gap: 20px;
            grid-template-areas:
              "kicker photo"
              "headline photo"
              "subhead photo"
              "cta photo"
              "stats photo";
            align-items: start;
          }
          .prism-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
        }
        @media (min-width: 620px) {
          .prism-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .prism-blob { animation: none; }
        }
      `}</style>
    </section>
  );
}
