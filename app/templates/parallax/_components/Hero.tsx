"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroPhoto from "../_assets/common-hero.webp";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0c0d10",
        paddingTop: "80px",
      }}
    >
      {/* Soft teal/orange backdrop glows */}
      <div aria-hidden="true" className="prlx-glow prlx-glow-1" />
      <div aria-hidden="true" className="prlx-glow prlx-glow-2" />
      <div aria-hidden="true" className="prlx-grid-overlay" />

      <div className="prlx-hero-inner">
        <div className="prlx-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="prlx-area-kicker">
            <motion.span variants={fadeUp} className="prlx-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          {/* Photo — no background/card, shown directly with a viewport-bracket + scanline frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="prlx-area-photo prlx-photo-col"
          >
            <div className="prlx-photo-wrap">
              <span aria-hidden="true" className="prlx-bracket prlx-bracket-tl" />
              <span aria-hidden="true" className="prlx-bracket prlx-bracket-tr" />
              <span aria-hidden="true" className="prlx-bracket prlx-bracket-bl" />
              <span aria-hidden="true" className="prlx-bracket prlx-bracket-br" />
              <span aria-hidden="true" className="prlx-scanline" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="prlx-photo-float"
              >
                <Image
                  src={heroPhoto}
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
                className="prlx-chip prlx-chip-top"
              >
                <span className="prlx-chip-dot" /> 1.4K+ render hrs
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="prlx-chip prlx-chip-bottom"
              >
                <span className="prlx-chip-dot prlx-chip-dot-orange" /> {OWNER.availability}
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="prlx-headline prlx-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>I make the impossible</motion.span>
            <motion.span variants={fadeUp} className="prlx-headline-gradient" style={{ display: "block" }}>look like it was filmed that way.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="prlx-subhead prlx-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="prlx-cta-row prlx-area-cta">
            <a href="#reel" className="prlx-btn-primary">Watch The Reel</a>
            <a href="#contact" className="prlx-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="prlx-stats-row prlx-area-stats">
            {OWNER.stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} className={`prlx-stat prlx-stat-${i % 4}`}>
                <span className="prlx-stat-value">{s.value}</span>
                <span className="prlx-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .prlx-glow { position: absolute; border-radius: 50%; filter: blur(70px); z-index: 0; opacity: 0.22; }
        .prlx-glow-1 { width: 340px; height: 340px; top: -110px; left: -100px; background: #2dd4bf; animation: prlx-glow-float-1 17s ease-in-out infinite; }
        .prlx-glow-2 { width: 300px; height: 300px; top: 160px; right: -120px; background: #ff7a3d; animation: prlx-glow-float-2 20s ease-in-out infinite; }
        @keyframes prlx-glow-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px,20px); } }
        @keyframes prlx-glow-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-25px,30px); } }
        .prlx-grid-overlay {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          background-image:
            linear-gradient(rgba(241,243,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(241,243,246,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 75%);
        }
        .prlx-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .prlx-hero-grid {
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
        .prlx-area-kicker { grid-area: kicker; }
        .prlx-area-photo { grid-area: photo; }
        .prlx-area-headline { grid-area: headline; }
        .prlx-area-subhead { grid-area: subhead; }
        .prlx-area-cta { grid-area: cta; }
        .prlx-area-stats { grid-area: stats; }
        .prlx-eyebrow {
          display: inline-flex;
          font-size: 13px;
          font-weight: 600;
          color: #67e8d8;
          background-color: rgba(45,212,191,0.14);
          border: 1px solid rgba(45,212,191,0.35);
          border-radius: 100px;
          padding: 7px 16px;
          width: fit-content;
        }
        .prlx-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 700;
          font-size: clamp(30px, 7.6vw, 54px);
          line-height: 1.12;
          letter-spacing: -0.01em;
          color: #f1f3f6;
        }
        .prlx-headline-gradient {
          background-image: linear-gradient(120deg, #2dd4bf, #67e8d8);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .prlx-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .prlx-photo-wrap {
          position: relative;
          width: clamp(210px, 58vw, 260px);
          aspect-ratio: 418 / 597;
          overflow: hidden;
          border-radius: 8px;
        }
        .prlx-bracket {
          position: absolute;
          width: 22px;
          height: 22px;
          border: 2px solid #2dd4bf;
          z-index: 3;
        }
        .prlx-bracket-tl { top: -2%; left: -8%; border-right: none; border-bottom: none; }
        .prlx-bracket-tr { top: -2%; right: -8%; border-left: none; border-bottom: none; border-color: #ff7a3d; }
        .prlx-bracket-bl { bottom: -2%; left: -8%; border-right: none; border-top: none; border-color: #ff7a3d; }
        .prlx-bracket-br { bottom: -2%; right: -8%; border-left: none; border-top: none; }
        .prlx-scanline {
          position: absolute;
          left: -8%;
          right: -8%;
          height: 2px;
          background-image: linear-gradient(90deg, transparent, #2dd4bf, transparent);
          box-shadow: 0 0 12px 1px rgba(45,212,191,0.6);
          z-index: 2;
          animation: prlx-scan 5s ease-in-out infinite;
        }
        @keyframes prlx-scan {
          0%, 100% { top: 2%; opacity: 0.85; }
          50% { top: 96%; opacity: 0.85; }
        }
        .prlx-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 30px rgba(0,0,0,0.5));
        }
        .prlx-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          color: #f1f3f6;
          background-color: #181a21;
          border: 1px solid rgba(45,212,191,0.3);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.45);
          white-space: nowrap;
          z-index: 4;
        }
        .prlx-chip-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #2dd4bf; flex-shrink: 0; }
        .prlx-chip-dot-orange { background-color: #ff7a3d; }
        .prlx-chip-top { top: -6%; right: -8%; }
        .prlx-chip-bottom { bottom: 6%; left: -12%; }
        .prlx-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #9ba1ad;
          margin: 0;
          max-width: 520px;
        }
        .prlx-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .prlx-btn-primary, .prlx-btn-outline {
          font-size: 14.5px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .prlx-btn-primary {
          color: #0c0d10;
          background-image: linear-gradient(120deg, #2dd4bf, #67e8d8);
        }
        .prlx-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(45,212,191,0.35); }
        .prlx-btn-outline {
          color: #f1f3f6;
          border: 1px solid rgba(241,243,246,0.22);
          background-color: transparent;
        }
        .prlx-btn-outline:hover { transform: translateY(-2px); background-color: rgba(241,243,246,0.06); }
        .prlx-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(241,243,246,0.1);
          max-width: 460px;
        }
        .prlx-stat { display: flex; flex-direction: column; gap: 2px; }
        .prlx-stat-value { font-family: var(--font-display, sans-serif); font-weight: 700; font-size: 22px; }
        .prlx-stat-0 .prlx-stat-value { color: #2dd4bf; }
        .prlx-stat-1 .prlx-stat-value { color: #ff7a3d; }
        .prlx-stat-2 .prlx-stat-value { color: #9ba1ad; }
        .prlx-stat-3 .prlx-stat-value { color: #2dd4bf; }
        .prlx-stat-label { font-size: 10.5px; color: #9ba1ad; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .prlx-hero-grid {
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
          .prlx-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .prlx-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 700px) {
          .prlx-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .prlx-chip { font-size: 10.5px; padding: 7px 12px; }
          .prlx-chip-top { right: -2%; }
          .prlx-chip-bottom { left: -4%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .prlx-glow, .prlx-scanline { animation: none; }
        }
      `}</style>
    </section>
  );
}
