"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";
import VerdictScale from "./VerdictScale";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % OWNER.rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="vd-hero">
      <div className="vd-hero-watermark" aria-hidden="true">§</div>
      <svg className="vd-hero-veins" viewBox="0 0 800 800" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 620 C 140 560, 220 700, 380 640 S 620 520, 800 590" stroke="rgba(182,144,63,0.14)" strokeWidth="1.5" fill="none" />
        <path d="M0 120 C 180 200, 260 40, 460 110 S 700 220, 800 130" stroke="rgba(246,242,232,0.06)" strokeWidth="1" fill="none" />
      </svg>

      <div className="vd-hero-inner">
        <div className="vd-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="vd-area-kicker"
          >
            <span className="vd-eyebrow">
              <span className="vd-eyebrow-dot" /> {OWNER.availability}
            </span>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.2)} initial="hidden" animate="visible" className="vd-headline vd-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>{OWNER.tagline}</motion.span>
            <span className="vd-headline-rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={OWNER.rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="vd-headline-word"
                >
                  {OWNER.rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="vd-subhead vd-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="vd-cta-row vd-area-cta">
            <a href="#matters" className="vd-btn-primary">Review Notable Matters</a>
            <a href="#contact" className="vd-btn-outline">Request Consultation</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.65)} initial="hidden" animate="visible" className="vd-stats-row vd-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="vd-stat">
                <span className="vd-stat-value">{s.value}</span>
                <span className="vd-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="vd-area-portrait"
          >
            <div className="vd-portrait-frame">
              <span className="vd-frame-corner vd-frame-corner-tl" aria-hidden="true" />
              <span className="vd-frame-corner vd-frame-corner-tr" aria-hidden="true" />
              <span className="vd-frame-corner vd-frame-corner-bl" aria-hidden="true" />
              <span className="vd-frame-corner vd-frame-corner-br" aria-hidden="true" />
              <Image
                src="/new-hero.png"
                alt={`${OWNER.name}, ${OWNER.title}`}
                fill
                priority
                sizes="(min-width: 860px) 400px, 78vw"
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />
              <div className="vd-portrait-ring" aria-hidden="true" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="vd-dial-badge"
            >
              <VerdictScale />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="vd-docket-tag"
            >
              <span className="vd-docket-tag-num">Docket No. 04.192</span>
              <span className="vd-docket-tag-title">{OWNER.name}</span>
              <span className="vd-docket-tag-role">{OWNER.title}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="vd-hero-scroll" aria-hidden="true">
        <span className="vd-hero-scroll-line" />
        <span className="vd-hero-scroll-text">SCROLL</span>
      </div>

      <style>{`
        .vd-hero {
          position: relative;
          overflow: hidden;
          background-color: #0d0d10;
          background-image: radial-gradient(circle at 88% 10%, rgba(182,144,63,0.16), transparent 55%), radial-gradient(circle at 6% 95%, rgba(124,35,52,0.22), transparent 50%);
          padding-top: 84px;
          min-height: 100svh;
          display: flex;
          align-items: center;
        }
        .vd-hero-watermark {
          position: absolute;
          top: -6%;
          right: -2%;
          font-family: var(--font-display, serif);
          font-size: clamp(220px, 34vw, 460px);
          font-weight: 700;
          color: rgba(246,242,232,0.03);
          line-height: 1;
          pointer-events: none;
          z-index: 0;
          user-select: none;
        }
        .vd-hero-veins { position: absolute; inset: 0; width: 100%; height: 100%; z-index: 0; }
        .vd-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 96px;
          width: 100%;
        }
        .vd-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          grid-template-areas:
            "kicker"
            "headline"
            "subhead"
            "cta"
            "stats"
            "portrait";
          gap: 22px;
        }
        .vd-area-kicker { grid-area: kicker; }
        .vd-area-headline { grid-area: headline; }
        .vd-area-subhead { grid-area: subhead; }
        .vd-area-cta { grid-area: cta; }
        .vd-area-stats { grid-area: stats; }
        .vd-area-portrait { grid-area: portrait; display: flex; justify-content: center; position: relative; margin-top: 8px; }
        .vd-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #d9b06a;
          background-color: rgba(13,13,16,0.6);
          border: 1px solid rgba(182,144,63,0.35);
          border-radius: 100px;
          padding: 8px 16px 8px 12px;
          width: fit-content;
        }
        .vd-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #b6903f; flex-shrink: 0; }
        .vd-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 700;
          font-size: clamp(34px, 8vw, 60px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #f6f2e8;
        }
        .vd-headline-rotator { display: block; position: relative; height: 1.25em; overflow: hidden; }
        .vd-headline-word {
          position: absolute;
          left: 0;
          top: 0;
          font-style: italic;
          font-weight: 600;
          color: #d9b06a;
          white-space: nowrap;
        }
        .vd-subhead {
          font-size: 15.5px;
          line-height: 1.75;
          color: rgba(246,242,232,0.62);
          margin: 0;
          max-width: 520px;
        }
        .vd-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .vd-btn-primary, .vd-btn-outline {
          font-family: var(--font-body, sans-serif);
          letter-spacing: 0.01em;
          font-size: 14px;
          font-weight: 700;
          padding: 14px 26px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .vd-btn-primary {
          color: #0d0d10;
          background-color: #b6903f;
        }
        .vd-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(182,144,63,0.3); }
        .vd-btn-outline {
          color: #f6f2e8;
          border: 1px solid rgba(246,242,232,0.3);
          background-color: transparent;
        }
        .vd-btn-outline:hover { transform: translateY(-2px); background-color: rgba(246,242,232,0.06); }
        .vd-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(246,242,232,0.14);
          max-width: 460px;
        }
        .vd-stat { display: flex; flex-direction: column; gap: 2px; }
        .vd-stat-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 23px; color: #d9b06a; }
        .vd-stat-label { font-size: 10.5px; color: rgba(246,242,232,0.55); text-transform: uppercase; letter-spacing: 0.03em; }
        .vd-portrait-frame {
          position: relative;
          width: min(320px, 78vw);
          aspect-ratio: 2 / 3;
          border-radius: 200px 200px 20px 20px;
          overflow: hidden;
          box-shadow: 0 30px 70px -20px rgba(0,0,0,0.6);
          background-color: #232330;
        }
        .vd-portrait-ring {
          position: absolute;
          inset: 10px;
          border-radius: 190px 190px 12px 12px;
          border: 1.5px solid rgba(182,144,63,0.45);
          pointer-events: none;
        }
        .vd-frame-corner {
          position: absolute;
          width: 16px;
          height: 16px;
          z-index: 3;
          border-color: #d9b06a;
          border-style: solid;
          opacity: 0.85;
        }
        .vd-frame-corner-tl { top: -2px; left: -2px; border-width: 2px 0 0 2px; }
        .vd-frame-corner-tr { top: -2px; right: -2px; border-width: 2px 2px 0 0; }
        .vd-frame-corner-bl { bottom: -2px; left: -2px; border-width: 0 0 2px 2px; }
        .vd-frame-corner-br { bottom: -2px; right: -2px; border-width: 0 2px 2px 0; }
        .vd-dial-badge {
          position: absolute;
          left: -8px;
          bottom: -18px;
          background-color: rgba(24,24,31,0.96);
          border: 1px solid rgba(246,242,232,0.12);
          border-radius: 50%;
          padding: 6px;
          box-shadow: 0 20px 40px -12px rgba(0,0,0,0.5);
          transform: scale(0.62);
          transform-origin: bottom left;
        }
        .vd-docket-tag {
          position: absolute;
          right: -6px;
          top: 14px;
          display: none;
          flex-direction: column;
          gap: 3px;
          background-color: rgba(246,242,232,0.96);
          color: #17140f;
          border-radius: 4px 10px 10px 10px;
          padding: 10px 14px;
          box-shadow: 0 16px 34px -12px rgba(0,0,0,0.5);
        }
        .vd-docket-tag-num { font-family: var(--font-mono, monospace); font-size: 8.5px; font-weight: 700; color: #7c2334; text-transform: uppercase; letter-spacing: 0.04em; }
        .vd-docket-tag-title { font-family: var(--font-display, serif); font-weight: 700; font-size: 13.5px; }
        .vd-docket-tag-role { font-size: 9.5px; color: #57503f; }
        .vd-hero-scroll {
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
        .vd-hero-scroll-line { width: 1px; height: 34px; background-image: linear-gradient(#b6903f, transparent); }
        .vd-hero-scroll-text { font-family: var(--font-mono, monospace); font-size: 9.5px; letter-spacing: 0.2em; color: rgba(246,242,232,0.4); }
        @media (min-width: 640px) {
          .vd-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (min-width: 860px) {
          .vd-hero-grid {
            grid-template-columns: 1.05fr 0.95fr;
            column-gap: 56px;
            row-gap: 20px;
            grid-template-areas:
              "kicker portrait"
              "headline portrait"
              "subhead portrait"
              "cta portrait"
              "stats portrait";
          }
          .vd-area-portrait { justify-content: center; align-items: center; margin-top: 0; }
          .vd-hero-scroll { display: flex; }
          .vd-docket-tag { display: flex; }
        }
      `}</style>
    </section>
  );
}
