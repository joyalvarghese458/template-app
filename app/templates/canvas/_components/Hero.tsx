"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { tiltIn, fadeUp, stagger } from "../_utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#f7f3ea",
        paddingTop: "92px",
      }}
    >
      {/* Line-art Bauhaus shapes backdrop */}
      <svg aria-hidden="true" className="canvas-shape canvas-shape-circle" viewBox="0 0 100 100">
        <circle cx="50" cy="50" r="44" fill="none" stroke="#1a56db" strokeWidth="2" />
      </svg>
      <svg aria-hidden="true" className="canvas-shape canvas-shape-triangle" viewBox="0 0 100 100">
        <polygon points="50,6 94,90 6,90" fill="none" stroke="#e8402c" strokeWidth="2" />
      </svg>
      <svg aria-hidden="true" className="canvas-shape canvas-shape-plus" viewBox="0 0 100 100">
        <path d="M40 4h20v36h36v20h-36v36h-20v-36h-36v-20h36z" fill="#f5c518" />
      </svg>
      <svg aria-hidden="true" className="canvas-shape canvas-shape-squiggle" viewBox="0 0 200 40">
        <path d="M2 20q15-18 30 0t30 0 30 0 30 0 30 0 30 0 30 0" fill="none" stroke="#14110f" strokeWidth="2.5" strokeLinecap="round" />
      </svg>

      <div className="canvas-hero-inner">
        <div className="canvas-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <motion.span variants={fadeUp} className="canvas-eyebrow">
              {OWNER.title}
            </motion.span>

            <h1 className="canvas-headline">
              <motion.span variants={tiltIn} className="canvas-headline-line">Design that grabs</motion.span>
              <motion.span variants={tiltIn} className="canvas-headline-line">
                <span className="canvas-highlight">attention</span> and earns
              </motion.span>
              <motion.span variants={tiltIn} className="canvas-headline-line">
                <span className="canvas-trust">trust.</span>
              </motion.span>
            </h1>

            <motion.p variants={fadeUp} className="canvas-subhead">
              {OWNER.subtagline}
            </motion.p>

            <motion.div variants={fadeUp} className="canvas-cta-row">
              <a href="#work" className="canvas-btn-primary">View Work</a>
              <a href="#contact" className="canvas-btn-outline">Get In Touch</a>
            </motion.div>

            <motion.div variants={fadeUp} className="canvas-stats-row">
              {OWNER.stats.map((s, i) => (
                <div key={s.label} className={`canvas-stamp canvas-stamp-${i % 3}`}>
                  <span className="canvas-stamp-value">{s.value}</span>
                  <span className="canvas-stamp-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo — no background/card, shown directly with offset collage accents */}
          <div className="canvas-photo-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="canvas-photo-wrap"
            >
              <svg aria-hidden="true" className="canvas-photo-ring" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="46" fill="none" stroke="#f5c518" strokeWidth="3" />
              </svg>
              <svg aria-hidden="true" className="canvas-photo-plus" viewBox="0 0 40 40">
                <path d="M16 2h8v14h14v8h-14v14h-8v-14h-14v-8h14z" fill="#e8402c" />
              </svg>

              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="canvas-photo-float"
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
                initial={{ opacity: 0, rotate: 0, x: 20, y: -14 }}
                animate={{ opacity: 1, rotate: -4, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.05 }}
                className="canvas-sticker canvas-sticker-top"
              >
                ✦ Available for freelance
              </motion.div>
              <motion.div
                initial={{ opacity: 0, rotate: 0, x: -20, y: 14 }}
                animate={{ opacity: 1, rotate: 3, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.25 }}
                className="canvas-sticker canvas-sticker-bottom"
              >
                🎨 80+ projects shipped
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      <style>{`
        .canvas-shape { position: absolute; pointer-events: none; z-index: 0; }
        .canvas-shape-circle { width: 110px; height: 110px; top: 14%; left: 4%; opacity: 0.5; animation: canvas-spin 26s linear infinite; }
        .canvas-shape-triangle { width: 90px; height: 90px; top: 64%; left: 9%; opacity: 0.45; animation: canvas-drift-1 9s ease-in-out infinite; }
        .canvas-shape-plus { width: 40px; height: 40px; top: 20%; right: 6%; opacity: 0.6; animation: canvas-drift-2 7s ease-in-out infinite; }
        .canvas-shape-squiggle { width: 160px; height: 32px; bottom: 6%; right: 10%; opacity: 0.55; }
        @keyframes canvas-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes canvas-drift-1 { 0%, 100% { transform: translateY(0) rotate(0deg); } 50% { transform: translateY(-14px) rotate(6deg); } }
        @keyframes canvas-drift-2 { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(12px); } }
        .canvas-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 28px 20px 64px;
        }
        .canvas-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: center;
        }
        .canvas-eyebrow {
          display: inline-flex;
          font-size: 13px;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #14110f;
          background-color: #f5c518;
          border: 2px solid #14110f;
          border-radius: 100px;
          padding: 6px 16px;
          width: fit-content;
        }
        .canvas-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 400;
          font-size: clamp(30px, 6.6vw, 52px);
          line-height: 1.18;
          letter-spacing: -0.01em;
          color: #14110f;
        }
        .canvas-headline-line { display: block; }
        .canvas-highlight {
          display: inline-block;
          background-color: #f5c518;
          padding: 2px 8px;
          transform: rotate(-1.5deg);
        }
        .canvas-trust {
          color: #e8402c;
          text-decoration: underline;
          text-decoration-style: wavy;
          text-decoration-color: #e8402c;
          text-underline-offset: 7px;
        }
        .canvas-subhead {
          font-size: 16.5px;
          line-height: 1.7;
          color: #5b5448;
          margin: 0;
          max-width: 520px;
        }
        .canvas-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .canvas-btn-primary, .canvas-btn-outline {
          font-size: 14.5px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          border: 2px solid #14110f;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .canvas-btn-primary {
          color: #f7f3ea;
          background-color: #14110f;
        }
        .canvas-btn-primary:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 #e8402c; }
        .canvas-btn-outline {
          color: #14110f;
          background-color: transparent;
        }
        .canvas-btn-outline:hover { transform: translate(-2px, -2px); box-shadow: 4px 4px 0 #1a56db; }
        .canvas-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 10px;
          max-width: 460px;
        }
        .canvas-stamp {
          display: flex;
          flex-direction: column;
          gap: 2px;
          border: 1.5px dashed #14110f;
          border-radius: 10px;
          padding: 10px 12px;
        }
        .canvas-stamp-0 { transform: rotate(-1.5deg); }
        .canvas-stamp-1 { transform: rotate(1deg); }
        .canvas-stamp-2 { transform: rotate(-0.5deg); }
        .canvas-stamp-value { font-family: var(--font-display, sans-serif); font-size: 19px; color: #e8402c; }
        .canvas-stamp:nth-child(2) .canvas-stamp-value, .canvas-stamp-1 .canvas-stamp-value { color: #1a56db; }
        .canvas-stamp-2 .canvas-stamp-value { color: #14110f; }
        .canvas-stamp-label { font-size: 10.5px; font-weight: 600; color: #5b5448; text-transform: uppercase; letter-spacing: 0.03em; }
        .canvas-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .canvas-photo-wrap {
          position: relative;
          width: clamp(220px, 64vw, 300px);
          aspect-ratio: 418 / 597;
        }
        .canvas-photo-ring {
          position: absolute;
          width: 34px;
          height: 34px;
          top: -16px;
          right: -16px;
          z-index: 2;
        }
        .canvas-photo-plus {
          position: absolute;
          width: 26px;
          height: 26px;
          bottom: 22%;
          left: -14px;
          z-index: 2;
          opacity: 0.9;
        }
        .canvas-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          z-index: 1;
          filter: drop-shadow(0 24px 30px rgba(20,17,15,0.22));
        }
        .canvas-sticker {
          position: absolute;
          font-size: 12px;
          font-weight: 700;
          color: #14110f;
          background-color: #ffffff;
          border: 2px solid #14110f;
          border-radius: 100px;
          padding: 9px 16px;
          box-shadow: 3px 3px 0 #14110f;
          white-space: nowrap;
          z-index: 2;
        }
        .canvas-sticker-top { top: 6%; right: -8%; }
        .canvas-sticker-bottom { bottom: 8%; left: -10%; }
        @media (min-width: 860px) {
          .canvas-hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 56px; }
          .canvas-photo-col { justify-content: flex-end; }
        }
        @media (min-width: 620px) {
          .canvas-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .canvas-sticker { font-size: 10.5px; padding: 7px 12px; }
          .canvas-sticker-top { right: -2%; }
          .canvas-sticker-bottom { left: -4%; }
          .canvas-shape-circle, .canvas-shape-triangle { opacity: 0.3; }
        }
        @media (prefers-reduced-motion: reduce) {
          .canvas-shape-circle, .canvas-shape-triangle, .canvas-shape-plus { animation: none; }
        }
      `}</style>
    </section>
  );
}
