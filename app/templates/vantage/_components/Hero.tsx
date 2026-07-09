"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";
import ClarityDial from "./ClarityDial";

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setWordIndex((i) => (i + 1) % OWNER.rotatingWords.length);
    }, 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="home" className="vtg-hero">
      <div className="vtg-hero-inner">
        <div className="vtg-hero-grid">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="vtg-area-kicker"
          >
            <span className="vtg-eyebrow">
              <span className="vtg-eyebrow-dot" /> {OWNER.availability}
            </span>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.2)} initial="hidden" animate="visible" className="vtg-headline vtg-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Strategy advice that</motion.span>
            <motion.span variants={fadeUp} style={{ display: "block" }}>ends in</motion.span>
            <span className="vtg-headline-rotator">
              <AnimatePresence mode="wait">
                <motion.span
                  key={OWNER.rotatingWords[wordIndex]}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -16 }}
                  transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                  className="vtg-headline-word"
                >
                  {OWNER.rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="vtg-subhead vtg-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="vtg-cta-row vtg-area-cta">
            <a href="#engagements" className="vtg-btn-primary">Review Engagements</a>
            <a href="#contact" className="vtg-btn-outline">Book A Call</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.65)} initial="hidden" animate="visible" className="vtg-stats-row vtg-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="vtg-stat">
                <span className="vtg-stat-value">{s.value}</span>
                <span className="vtg-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="vtg-area-portrait"
          >
            <div className="vtg-portrait-frame">
              <Image
                src="/new-hero.png"
                alt={`${OWNER.name}, ${OWNER.title}`}
                fill
                priority
                sizes="(min-width: 860px) 420px, 80vw"
                style={{ objectFit: "cover", objectPosition: "center 15%" }}
              />
              <div className="vtg-portrait-ring" aria-hidden="true" />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="vtg-dial-badge"
            >
              <ClarityDial />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="vtg-name-badge"
            >
              <span className="vtg-name-badge-title">{OWNER.name}</span>
              <span className="vtg-name-badge-role">{OWNER.title} · {OWNER.practice}</span>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="vtg-hero-scroll" aria-hidden="true">
        <span className="vtg-hero-scroll-line" />
        <span className="vtg-hero-scroll-text">SCROLL</span>
      </div>

      <style>{`
        .vtg-hero {
          position: relative;
          overflow: hidden;
          background-color: #f6f3ea;
          background-image: radial-gradient(circle at 88% 8%, rgba(15,107,86,0.1), transparent 55%), radial-gradient(circle at 6% 92%, rgba(179,112,59,0.12), transparent 50%);
          padding-top: 84px;
          min-height: 100svh;
          display: flex;
          align-items: center;
        }
        .vtg-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1200px;
          margin: 0 auto;
          padding: 32px 20px 96px;
          width: 100%;
        }
        .vtg-hero-grid {
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
        .vtg-area-kicker { grid-area: kicker; }
        .vtg-area-headline { grid-area: headline; }
        .vtg-area-subhead { grid-area: subhead; }
        .vtg-area-cta { grid-area: cta; }
        .vtg-area-stats { grid-area: stats; }
        .vtg-area-portrait { grid-area: portrait; display: flex; justify-content: center; position: relative; margin-top: 8px; }
        .vtg-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #0f6b56;
          background-color: rgba(246,243,234,0.9);
          border: 1px solid rgba(15,107,86,0.3);
          border-radius: 100px;
          padding: 8px 16px 8px 12px;
          width: fit-content;
        }
        .vtg-eyebrow-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #0f6b56; flex-shrink: 0; }
        .vtg-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(34px, 8vw, 60px);
          line-height: 1.08;
          letter-spacing: -0.01em;
          color: #17140f;
        }
        .vtg-headline-rotator { display: block; position: relative; height: 1.2em; overflow: hidden; }
        .vtg-headline-word {
          position: absolute;
          left: 0;
          top: 0;
          font-style: italic;
          font-weight: 500;
          color: #0f6b56;
          white-space: nowrap;
        }
        .vtg-subhead {
          font-size: 15.5px;
          line-height: 1.75;
          color: #4a4438;
          margin: 0;
          max-width: 520px;
        }
        .vtg-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .vtg-btn-primary, .vtg-btn-outline {
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
        .vtg-btn-primary {
          color: #f6f3ea;
          background-color: #17140f;
        }
        .vtg-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(23,20,15,0.25); }
        .vtg-btn-outline {
          color: #17140f;
          border: 1px solid rgba(23,20,15,0.3);
          background-color: transparent;
        }
        .vtg-btn-outline:hover { transform: translateY(-2px); background-color: rgba(23,20,15,0.05); }
        .vtg-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(23,20,15,0.14);
          max-width: 460px;
        }
        .vtg-stat { display: flex; flex-direction: column; gap: 2px; }
        .vtg-stat-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 23px; color: #0f6b56; }
        .vtg-stat-label { font-size: 10.5px; color: #4a4438; text-transform: uppercase; letter-spacing: 0.03em; }
        .vtg-portrait-frame {
          position: relative;
          width: min(320px, 78vw);
          aspect-ratio: 2 / 3;
          border-radius: 160px 160px 20px 20px;
          overflow: hidden;
          box-shadow: 0 30px 70px -20px rgba(23,20,15,0.35);
          background-color: #e3dac3;
        }
        .vtg-portrait-ring {
          position: absolute;
          inset: 10px;
          border-radius: 150px 150px 12px 12px;
          border: 1.5px solid rgba(246,243,234,0.5);
          pointer-events: none;
        }
        .vtg-dial-badge {
          position: absolute;
          left: -8px;
          bottom: -18px;
          background-color: rgba(246,243,234,0.96);
          border: 1px solid rgba(23,20,15,0.12);
          border-radius: 50%;
          padding: 6px;
          box-shadow: 0 20px 40px -12px rgba(23,20,15,0.28);
          transform: scale(0.62);
          transform-origin: bottom left;
        }
        .vtg-name-badge {
          position: absolute;
          right: -6px;
          top: 14px;
          display: none;
          flex-direction: column;
          gap: 2px;
          background-color: rgba(23,20,15,0.92);
          color: #f6f3ea;
          border-radius: 10px;
          padding: 10px 14px;
          box-shadow: 0 16px 34px -12px rgba(23,20,15,0.4);
        }
        .vtg-name-badge-title { font-family: var(--font-display, serif); font-weight: 600; font-size: 13.5px; }
        .vtg-name-badge-role { font-size: 9.5px; color: rgba(246,243,234,0.7); text-transform: uppercase; letter-spacing: 0.04em; }
        .vtg-hero-scroll {
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
        .vtg-hero-scroll-line { width: 1px; height: 34px; background-image: linear-gradient(#0f6b56, transparent); }
        .vtg-hero-scroll-text { font-family: var(--font-mono, monospace); font-size: 9.5px; letter-spacing: 0.2em; color: #8a8271; }
        @media (min-width: 640px) {
          .vtg-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (min-width: 860px) {
          .vtg-hero-grid {
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
          .vtg-area-portrait { justify-content: center; align-items: center; margin-top: 0; }
          .vtg-hero-scroll { display: flex; }
          .vtg-name-badge { display: flex; }
        }
      `}</style>
    </section>
  );
}
