"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroPhoto from "../_assets/hero-wheel.jpg";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";
import LiveWheel from "./LiveWheel";

export default function Hero() {
  return (
    <section id="home" className="kln-hero">
      <div className="kln-hero-bg" aria-hidden="true">
        <Image
          src={heroPhoto}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 42%" }}
        />
        <div className="kln-hero-scrim" />
      </div>

      <div className="kln-hero-inner">
        <div className="kln-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="kln-area-kicker"
          >
            <span className="kln-eyebrow">Studio Solberg · Est. 2016</span>
          </motion.div>

          <motion.h1 variants={stagger(0.12, 0.2)} initial="hidden" animate="visible" className="kln-headline kln-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Shaped by hand,</motion.span>
            <motion.span variants={fadeUp} className="kln-headline-accent" style={{ display: "block" }}>fired by fire.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="kln-subhead kln-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="kln-cta-row kln-area-cta">
            <a href="#collection" className="kln-btn-primary">View The Collection</a>
            <a href="#contact" className="kln-btn-outline">Commission A Piece</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.65)} initial="hidden" animate="visible" className="kln-stats-row kln-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="kln-stat">
                <span className="kln-stat-value">{s.value}</span>
                <span className="kln-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="kln-area-wheel"
          >
            <LiveWheel />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="kln-chip"
            >
              <span className="kln-chip-dot" /> {OWNER.availability}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="kln-hero-scroll" aria-hidden="true">
        <span className="kln-hero-scroll-line" />
        <span className="kln-hero-scroll-text">SCROLL</span>
      </div>

      <style>{`
        .kln-hero {
          position: relative;
          overflow: hidden;
          background-color: #f7f1e8;
          padding-top: 84px;
          min-height: 100svh;
          display: flex;
          align-items: center;
        }
        .kln-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .kln-hero-scrim {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(180deg, rgba(247,241,232,0.4) 0%, rgba(247,241,232,0.3) 30%, rgba(247,241,232,0.92) 62%, #f7f1e8 100%),
            linear-gradient(100deg, rgba(247,241,232,0.92) 0%, rgba(247,241,232,0.66) 32%, rgba(247,241,232,0.05) 62%);
        }
        .kln-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 96px;
          width: 100%;
        }
        .kln-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "kicker"
            "headline"
            "subhead"
            "cta"
            "stats"
            "wheel";
          gap: 20px;
        }
        .kln-area-kicker { grid-area: kicker; }
        .kln-area-headline { grid-area: headline; }
        .kln-area-subhead { grid-area: subhead; }
        .kln-area-cta { grid-area: cta; }
        .kln-area-stats { grid-area: stats; }
        .kln-area-wheel { grid-area: wheel; display: flex; flex-direction: column; align-items: center; gap: 16px; position: relative; margin-top: 8px; }
        .kln-eyebrow {
          display: inline-flex;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #a0491f;
          background-color: rgba(247,241,232,0.88);
          border: 1px solid rgba(193,95,60,0.35);
          border-radius: 100px;
          padding: 8px 18px;
          width: fit-content;
          backdrop-filter: blur(6px);
          box-shadow: 0 6px 18px rgba(58,46,34,0.14);
        }
        .kln-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(36px, 8.4vw, 64px);
          line-height: 1.06;
          letter-spacing: -0.01em;
          color: #3a2e22;
        }
        .kln-headline-accent { font-style: italic; color: #c15f3c; font-weight: 500; }
        .kln-subhead {
          font-size: 15.5px;
          line-height: 1.75;
          color: #6b5a45;
          margin: 0;
          max-width: 520px;
        }
        .kln-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .kln-btn-primary, .kln-btn-outline {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.02em;
          font-size: 14px;
          font-weight: 600;
          padding: 14px 26px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .kln-btn-primary {
          color: #f7f1e8;
          background-color: #c15f3c;
        }
        .kln-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(193,95,60,0.3); }
        .kln-btn-outline {
          color: #3a2e22;
          border: 1px solid rgba(58,46,34,0.3);
          background-color: transparent;
        }
        .kln-btn-outline:hover { transform: translateY(-2px); background-color: rgba(58,46,34,0.05); }
        .kln-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(58,46,34,0.16);
          max-width: 460px;
        }
        .kln-stat { display: flex; flex-direction: column; gap: 2px; }
        .kln-stat-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 24px; color: #c15f3c; }
        .kln-stat-label { font-size: 10.5px; color: #6b5a45; text-transform: uppercase; letter-spacing: 0.03em; }
        .kln-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 500;
          color: #3a2e22;
          background-color: rgba(247,241,232,0.85);
          border: 1px solid rgba(58,46,34,0.16);
          border-radius: 100px;
          padding: 8px 14px;
          white-space: nowrap;
          backdrop-filter: blur(6px);
        }
        .kln-chip-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #6f7d58; flex-shrink: 0; }
        .kln-hero-scroll {
          position: absolute;
          bottom: 22px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 2;
          display: none;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }
        .kln-hero-scroll-line { width: 1px; height: 34px; background-image: linear-gradient(#c15f3c, transparent); }
        .kln-hero-scroll-text { font-family: var(--font-mono, monospace); font-size: 9.5px; letter-spacing: 0.2em; color: #a08d70; }
        @media (min-width: 860px) {
          .kln-hero-grid {
            grid-template-columns: 1.05fr 0.95fr;
            column-gap: 56px;
            row-gap: 20px;
            grid-template-areas:
              "kicker wheel"
              "headline wheel"
              "subhead wheel"
              "cta wheel"
              "stats wheel";
          }
          .kln-area-wheel { align-items: center; justify-content: center; margin-top: 0; }
          .kln-hero-scroll { display: flex; }
        }
        @media (min-width: 700px) {
          .kln-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
      `}</style>
    </section>
  );
}
