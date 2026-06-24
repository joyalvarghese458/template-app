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
        backgroundColor: "#0b0e14",
        paddingTop: "80px",
      }}
    >
      {/* Soft cobalt/copper backdrop glows */}
      <div aria-hidden="true" className="ech-glow ech-glow-1" />
      <div aria-hidden="true" className="ech-glow ech-glow-2" />
      <div aria-hidden="true" className="ech-grid-overlay" />

      <div className="ech-hero-inner">
        <div className="ech-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="ech-area-kicker">
            <motion.span variants={fadeUp} className="ech-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          {/* Photo — no background/card, shown directly with a HUD targeting frame */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="ech-area-photo ech-photo-col"
          >
            <div className="ech-photo-wrap">
              <span aria-hidden="true" className="ech-hud-ring ech-hud-ring-1" />
              <span aria-hidden="true" className="ech-hud-ring ech-hud-ring-2" />
              <span aria-hidden="true" className="ech-hud-corner ech-hud-corner-tl" />
              <span aria-hidden="true" className="ech-hud-corner ech-hud-corner-br" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="ech-photo-float"
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
                className="ech-chip ech-chip-top"
              >
                <span className="ech-chip-dot" /> $4.2B+ revenue scaled
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="ech-chip ech-chip-bottom"
              >
                <span className="ech-chip-dot ech-chip-dot-copper" /> {OWNER.availability}
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="ech-headline ech-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Command shouldn&apos;t feel like chaos</motion.span>
            <motion.span variants={fadeUp} className="ech-headline-gradient" style={{ display: "block" }}>with better slides.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="ech-subhead ech-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="ech-cta-row ech-area-cta">
            <a href="#mandates" className="ech-btn-primary">View Mandates</a>
            <a href="#contact" className="ech-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="ech-stats-row ech-area-stats">
            {OWNER.stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} className={`ech-stat ech-stat-${i % 4}`}>
                <span className="ech-stat-value">{s.value}</span>
                <span className="ech-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .ech-glow { position: absolute; border-radius: 50%; filter: blur(70px); z-index: 0; opacity: 0.22; }
        .ech-glow-1 { width: 340px; height: 340px; top: -110px; left: -100px; background: #3b6fe0; animation: ech-glow-float-1 17s ease-in-out infinite; }
        .ech-glow-2 { width: 300px; height: 300px; top: 160px; right: -120px; background: #d98a3d; animation: ech-glow-float-2 20s ease-in-out infinite; }
        @keyframes ech-glow-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px,20px); } }
        @keyframes ech-glow-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-25px,30px); } }
        .ech-grid-overlay {
          position: absolute;
          inset: 0;
          z-index: 0;
          opacity: 0.5;
          background-image:
            linear-gradient(rgba(238,241,246,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(238,241,246,0.035) 1px, transparent 1px);
          background-size: 42px 42px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.9), transparent 75%);
        }
        .ech-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .ech-hero-grid {
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
        .ech-area-kicker { grid-area: kicker; }
        .ech-area-photo { grid-area: photo; }
        .ech-area-headline { grid-area: headline; }
        .ech-area-subhead { grid-area: subhead; }
        .ech-area-cta { grid-area: cta; }
        .ech-area-stats { grid-area: stats; }
        .ech-eyebrow {
          display: inline-flex;
          font-size: 13px;
          font-weight: 700;
          color: #6f97f2;
          background-color: rgba(59,111,224,0.14);
          border: 1px solid rgba(59,111,224,0.35);
          border-radius: 100px;
          padding: 7px 16px;
          width: fit-content;
          letter-spacing: 0.01em;
        }
        .ech-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(30px, 7.6vw, 54px);
          line-height: 1.16;
          letter-spacing: -0.01em;
          color: #eef1f6;
        }
        .ech-headline-gradient {
          background-image: linear-gradient(120deg, #3b6fe0, #6f97f2);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .ech-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .ech-photo-wrap {
          position: relative;
          width: clamp(210px, 58vw, 260px);
          aspect-ratio: 418 / 597;
        }
        .ech-hud-ring {
          position: absolute;
          border: 1px solid rgba(59,111,224,0.32);
          border-radius: 50%;
        }
        .ech-hud-ring-1 { inset: -7% -24%; animation: ech-hud-spin 26s linear infinite; }
        .ech-hud-ring-2 { inset: -2% -14%; border-color: rgba(217,138,61,0.28); border-style: dashed; animation: ech-hud-spin-rev 34s linear infinite; }
        @keyframes ech-hud-spin { from { transform: rotateX(70deg) rotateZ(0deg); } to { transform: rotateX(70deg) rotateZ(360deg); } }
        @keyframes ech-hud-spin-rev { from { transform: rotateX(70deg) rotateZ(360deg); } to { transform: rotateX(70deg) rotateZ(0deg); } }
        .ech-hud-corner {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 2px solid rgba(111,151,242,0.55);
          z-index: 2;
        }
        .ech-hud-corner-tl { top: -4%; left: -10%; border-right: none; border-bottom: none; }
        .ech-hud-corner-br { bottom: -4%; right: -10%; border-left: none; border-top: none; }
        .ech-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 30px rgba(0,0,0,0.5));
        }
        .ech-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          color: #eef1f6;
          background-color: #161b25;
          border: 1px solid rgba(59,111,224,0.3);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.45);
          white-space: nowrap;
          z-index: 3;
        }
        .ech-chip-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #3b6fe0; flex-shrink: 0; }
        .ech-chip-dot-copper { background-color: #d98a3d; }
        .ech-chip-top { top: -6%; right: -8%; }
        .ech-chip-bottom { bottom: 6%; left: -12%; }
        .ech-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #9aa7bb;
          margin: 0;
          max-width: 520px;
        }
        .ech-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ech-btn-primary, .ech-btn-outline {
          font-size: 14.5px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .ech-btn-primary {
          color: #0b0e14;
          background-image: linear-gradient(120deg, #3b6fe0, #6f97f2);
        }
        .ech-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(59,111,224,0.35); }
        .ech-btn-outline {
          color: #eef1f6;
          border: 1px solid rgba(238,241,246,0.22);
          background-color: transparent;
        }
        .ech-btn-outline:hover { transform: translateY(-2px); background-color: rgba(238,241,246,0.06); }
        .ech-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(238,241,246,0.1);
          max-width: 460px;
        }
        .ech-stat { display: flex; flex-direction: column; gap: 2px; }
        .ech-stat-value { font-family: var(--font-display, serif); font-weight: 600; font-size: 22px; }
        .ech-stat-0 .ech-stat-value { color: #6f97f2; }
        .ech-stat-1 .ech-stat-value { color: #d98a3d; }
        .ech-stat-2 .ech-stat-value { color: #b7c0cf; }
        .ech-stat-3 .ech-stat-value { color: #6f97f2; }
        .ech-stat-label { font-size: 10.5px; color: #9aa7bb; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .ech-hero-grid {
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
          .ech-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .ech-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 700px) {
          .ech-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .ech-chip { font-size: 10.5px; padding: 7px 12px; }
          .ech-chip-top { right: -2%; }
          .ech-chip-bottom { left: -4%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ech-glow, .ech-hud-ring { animation: none; }
        }
      `}</style>
    </section>
  );
}
