"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroPhoto from "../_assets/hero-movement.jpg";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";
import LiveWatch from "./LiveWatch";

export default function Hero() {
  return (
    <section id="home" className="esc-hero">
      <div className="esc-hero-bg" aria-hidden="true">
        <Image
          src={heroPhoto}
          alt=""
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover", objectPosition: "center 35%" }}
        />
        <div className="esc-hero-scrim" />
      </div>

      <div className="esc-hero-inner">
        <div className="esc-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="esc-area-kicker"
          >
            <span className="esc-eyebrow">Atelier Voss · Est. 2015</span>
          </motion.div>

          <motion.h1 variants={stagger(0.12, 0.2)} initial="hidden" animate="visible" className="esc-headline esc-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Time, assembled</motion.span>
            <motion.span variants={fadeUp} className="esc-headline-accent" style={{ display: "block" }}>by hand.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="esc-subhead esc-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="esc-cta-row esc-area-cta">
            <a href="#collection" className="esc-btn-primary">View The Collection</a>
            <a href="#contact" className="esc-btn-outline">Commission A Timepiece</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.65)} initial="hidden" animate="visible" className="esc-stats-row esc-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="esc-stat">
                <span className="esc-stat-value">{s.value}</span>
                <span className="esc-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -6 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="esc-area-watch"
          >
            <LiveWatch />
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="esc-chip"
            >
              <span className="esc-chip-dot" /> {OWNER.availability}
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="esc-hero-scroll" aria-hidden="true">
        <span className="esc-hero-scroll-line" />
        <span className="esc-hero-scroll-text">SCROLL</span>
      </div>

      <style>{`
        .esc-hero {
          position: relative;
          overflow: hidden;
          background-color: #12100d;
          padding-top: 84px;
          min-height: 100svh;
          display: flex;
          align-items: center;
        }
        .esc-hero-bg { position: absolute; inset: 0; z-index: 0; }
        .esc-hero-scrim {
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(180deg, rgba(18,16,13,0.55) 0%, rgba(18,16,13,0.78) 55%, #12100d 100%),
            linear-gradient(100deg, rgba(18,16,13,0.9) 20%, rgba(18,16,13,0.35) 65%);
        }
        .esc-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 96px;
          width: 100%;
        }
        .esc-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "kicker"
            "headline"
            "subhead"
            "cta"
            "stats"
            "watch";
          gap: 20px;
        }
        .esc-area-kicker { grid-area: kicker; }
        .esc-area-headline { grid-area: headline; }
        .esc-area-subhead { grid-area: subhead; }
        .esc-area-cta { grid-area: cta; }
        .esc-area-stats { grid-area: stats; }
        .esc-area-watch { grid-area: watch; display: flex; flex-direction: column; align-items: center; gap: 16px; position: relative; margin-top: 8px; }
        .esc-eyebrow {
          display: inline-flex;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #e8c876;
          background-color: rgba(201,162,75,0.12);
          border: 1px solid rgba(201,162,75,0.4);
          border-radius: 100px;
          padding: 8px 18px;
          width: fit-content;
        }
        .esc-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(36px, 8.4vw, 64px);
          line-height: 1.06;
          letter-spacing: -0.01em;
          color: #f2ead9;
        }
        .esc-headline-accent { font-style: italic; color: #c9a24b; font-weight: 500; }
        .esc-subhead {
          font-size: 15.5px;
          line-height: 1.75;
          color: #b9ac93;
          margin: 0;
          max-width: 520px;
        }
        .esc-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .esc-btn-primary, .esc-btn-outline {
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
        .esc-btn-primary {
          color: #12100d;
          background-color: #c9a24b;
        }
        .esc-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(201,162,75,0.3); }
        .esc-btn-outline {
          color: #f2ead9;
          border: 1px solid rgba(242,234,217,0.3);
          background-color: transparent;
        }
        .esc-btn-outline:hover { transform: translateY(-2px); background-color: rgba(242,234,217,0.06); }
        .esc-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(242,234,217,0.14);
          max-width: 460px;
        }
        .esc-stat { display: flex; flex-direction: column; gap: 2px; }
        .esc-stat-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 25px; color: #c9a24b; }
        .esc-stat-label { font-size: 10.5px; color: #b9ac93; text-transform: uppercase; letter-spacing: 0.03em; }
        .esc-chip {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 500;
          color: #f2ead9;
          background-color: rgba(23,20,15,0.7);
          border: 1px solid rgba(242,234,217,0.16);
          border-radius: 100px;
          padding: 8px 14px;
          white-space: nowrap;
          backdrop-filter: blur(6px);
        }
        .esc-chip-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #6fa295; flex-shrink: 0; }
        .esc-hero-scroll {
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
        .esc-hero-scroll-line { width: 1px; height: 34px; background-image: linear-gradient(#c9a24b, transparent); }
        .esc-hero-scroll-text { font-family: var(--font-mono, monospace); font-size: 9.5px; letter-spacing: 0.2em; color: #7d7362; }
        @media (min-width: 860px) {
          .esc-hero-grid {
            grid-template-columns: 1.05fr 0.95fr;
            column-gap: 56px;
            row-gap: 20px;
            grid-template-areas:
              "kicker watch"
              "headline watch"
              "subhead watch"
              "cta watch"
              "stats watch";
          }
          .esc-area-watch { align-items: center; justify-content: center; margin-top: 0; }
          .esc-hero-scroll { display: flex; }
        }
        @media (min-width: 700px) {
          .esc-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
      `}</style>
    </section>
  );
}
