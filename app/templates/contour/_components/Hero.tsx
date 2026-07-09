"use client";

import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";
import ContourField from "./ContourField";
import Compass from "./Compass";

export default function Hero() {
  return (
    <section id="home" className="ctr-hero">
      <div className="ctr-hero-inner">
        <div className="ctr-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="ctr-area-kicker"
          >
            <span className="ctr-eyebrow">
              <span className="ctr-eyebrow-dot" /> {OWNER.availability}
            </span>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.2)} initial="hidden" animate="visible" className="ctr-headline ctr-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>I design ground that</motion.span>
            <motion.span variants={fadeUp} className="ctr-headline-accent" style={{ display: "block" }}>outlives the building.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="ctr-subhead ctr-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="ctr-cta-row ctr-area-cta">
            <a href="#projects" className="ctr-btn-primary">View Projects</a>
            <a href="#contact" className="ctr-btn-outline">Start A Site Visit</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.65)} initial="hidden" animate="visible" className="ctr-stats-row ctr-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="ctr-stat">
                <span className="ctr-stat-value">{s.value}</span>
                <span className="ctr-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="ctr-area-plan"
          >
            <div className="ctr-plan-card">
              <div className="ctr-plan-header">
                <span className="ctr-plan-title">Site Plan — Sheet L-01</span>
                <span className="ctr-plan-coords">{OWNER.coordinates}</span>
              </div>
              <div className="ctr-plan-field">
                <ContourField />
              </div>
              <div className="ctr-plan-footer">
                <Compass />
                <div className="ctr-plan-badge">
                  <span className="ctr-plan-badge-title">{OWNER.name}</span>
                  <span className="ctr-plan-badge-role">{OWNER.title}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="ctr-hero-scroll" aria-hidden="true">
        <span className="ctr-hero-scroll-line" />
        <span className="ctr-hero-scroll-text">SCROLL</span>
      </div>

      <style>{`
        .ctr-hero {
          position: relative;
          overflow: hidden;
          background-color: #f3f0e5;
          background-image: radial-gradient(circle at 90% 6%, rgba(75,107,63,0.12), transparent 55%), radial-gradient(circle at 4% 94%, rgba(47,107,116,0.12), transparent 50%);
          padding-top: 84px;
          min-height: 100svh;
          display: flex;
          align-items: center;
        }
        .ctr-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 96px;
          width: 100%;
        }
        .ctr-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "kicker"
            "headline"
            "subhead"
            "cta"
            "stats"
            "plan";
          gap: 22px;
        }
        .ctr-area-kicker { grid-area: kicker; }
        .ctr-area-headline { grid-area: headline; }
        .ctr-area-subhead { grid-area: subhead; }
        .ctr-area-cta { grid-area: cta; }
        .ctr-area-stats { grid-area: stats; }
        .ctr-area-plan { grid-area: plan; margin-top: 8px; }
        .ctr-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #4b6b3f;
          background-color: rgba(243,240,229,0.9);
          border: 1px solid rgba(75,107,63,0.3);
          border-radius: 100px;
          padding: 8px 16px 8px 12px;
          width: fit-content;
        }
        .ctr-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #4b6b3f; flex-shrink: 0; }
        .ctr-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(32px, 7.6vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #212a1f;
        }
        .ctr-headline-accent { font-style: italic; color: #4b6b3f; font-weight: 500; }
        .ctr-subhead {
          font-size: 15.5px;
          line-height: 1.75;
          color: #4c5343;
          margin: 0;
          max-width: 540px;
        }
        .ctr-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ctr-btn-primary, .ctr-btn-outline {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.01em;
          font-size: 14px;
          font-weight: 700;
          padding: 14px 26px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .ctr-btn-primary {
          color: #f3f0e5;
          background-color: #212a1f;
        }
        .ctr-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(33,42,31,0.25); }
        .ctr-btn-outline {
          color: #212a1f;
          border: 1px solid rgba(33,42,31,0.3);
          background-color: transparent;
        }
        .ctr-btn-outline:hover { transform: translateY(-2px); background-color: rgba(33,42,31,0.05); }
        .ctr-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(33,42,31,0.14);
          max-width: 460px;
        }
        .ctr-stat { display: flex; flex-direction: column; gap: 2px; }
        .ctr-stat-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 23px; color: #4b6b3f; }
        .ctr-stat-label { font-size: 10.5px; color: #4c5343; text-transform: uppercase; letter-spacing: 0.03em; }
        .ctr-plan-card {
          background-color: rgba(243,240,229,0.7);
          border: 1px solid rgba(33,42,31,0.18);
          border-radius: 14px;
          padding: 18px;
          box-shadow: 0 30px 70px -24px rgba(33,42,31,0.3);
          backdrop-filter: blur(6px);
        }
        .ctr-plan-header {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          gap: 12px;
          padding-bottom: 12px;
          border-bottom: 1px dashed rgba(33,42,31,0.25);
          margin-bottom: 12px;
          flex-wrap: wrap;
        }
        .ctr-plan-title { font-family: var(--font-mono, monospace); font-size: 10.5px; font-weight: 700; color: #212a1f; text-transform: uppercase; letter-spacing: 0.04em; }
        .ctr-plan-coords { font-family: var(--font-mono, monospace); font-size: 9.5px; color: #868c76; }
        .ctr-plan-field { aspect-ratio: 1.1 / 1; }
        .ctr-plan-footer {
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 12px;
          padding-top: 12px;
          border-top: 1px dashed rgba(33,42,31,0.25);
          margin-top: 12px;
        }
        .ctr-plan-badge { display: flex; flex-direction: column; gap: 2px; text-align: right; }
        .ctr-plan-badge-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 15px; color: #212a1f; }
        .ctr-plan-badge-role { font-size: 10.5px; color: #4c5343; }
        .ctr-hero-scroll {
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
        .ctr-hero-scroll-line { width: 1px; height: 34px; background-image: linear-gradient(#4b6b3f, transparent); }
        .ctr-hero-scroll-text { font-family: var(--font-mono, monospace); font-size: 9.5px; letter-spacing: 0.2em; color: #868c76; }
        @media (min-width: 640px) {
          .ctr-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (min-width: 900px) {
          .ctr-hero-grid {
            grid-template-columns: 1.05fr 0.95fr;
            column-gap: 56px;
            row-gap: 20px;
            grid-template-areas:
              "kicker plan"
              "headline plan"
              "subhead plan"
              "cta plan"
              "stats plan";
          }
          .ctr-area-plan { margin-top: 0; }
          .ctr-hero-scroll { display: flex; }
        }
      `}</style>
    </section>
  );
}
