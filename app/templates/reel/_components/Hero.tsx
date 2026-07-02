"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import heroPhoto from "../_assets/hero-director.jpg";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";

function useClapIntro() {
  const [showClap, setShowClap] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShowClap(false);
      return;
    }
    const timer = setTimeout(() => setShowClap(false), 1150);
    return () => clearTimeout(timer);
  }, []);

  return showClap;
}

function useSpotlight() {
  useEffect(() => {
    let raf = 0;
    const onMove = (e: PointerEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = document.getElementById("rl-hero-spotlight");
        if (!el) return;
        el.style.setProperty("--rl-mx", `${e.clientX}px`);
        el.style.setProperty("--rl-my", `${e.clientY}px`);
      });
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);
}

export default function Hero() {
  const showClap = useClapIntro();
  useSpotlight();

  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#0a0806",
        paddingTop: "80px",
      }}
    >
      <div id="rl-hero-spotlight" aria-hidden="true" className="rl-spotlight" />
      <div aria-hidden="true" className="rl-vignette" />

      <AnimatePresence>
        {showClap && (
          <motion.div
            aria-hidden="true"
            className="rl-clap-overlay"
            exit={{ opacity: 0, transition: { duration: 0.4, delay: 0.15 } }}
          >
            <div className="rl-clap-slate">
              <motion.div
                className="rl-clap-arm"
                initial={{ rotate: -22 }}
                animate={{ rotate: 0 }}
                transition={{ duration: 0.45, delay: 0.45, ease: [0.6, 0, 0.4, 1] }}
              />
              <div className="rl-clap-base" />
              <span className="rl-clap-label">CALLAHAN PICTURES — TAKE 01</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="rl-hero-inner">
        <div className="rl-hero-grid">
          <motion.div variants={stagger(0.1, 1)} initial="hidden" animate="visible" className="rl-area-kicker">
            <motion.span variants={fadeUp} className="rl-eyebrow">
              <span className="rl-rec-dot" /> Now Screening
            </motion.span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1.05, ease: [0.16, 1, 0.3, 1] }}
            className="rl-area-photo rl-photo-col"
          >
            <div className="rl-photo-outer">
              <div className="rl-photo-wrap">
                <span aria-hidden="true" className="rl-bracket rl-bracket-tl" />
                <span aria-hidden="true" className="rl-bracket rl-bracket-tr" />
                <span aria-hidden="true" className="rl-bracket rl-bracket-bl" />
                <span aria-hidden="true" className="rl-bracket rl-bracket-br" />
                <Image
                  src={heroPhoto}
                  alt="Reid Callahan checking a shot through a camera monitor on set"
                  fill
                  priority
                  sizes="(max-width: 860px) 260px, 380px"
                  style={{ objectFit: "cover" }}
                />
                <div aria-hidden="true" className="rl-viewfinder-hud">
                  <span className="rl-hud-rec"><span className="rl-hud-rec-dot" /> REC</span>
                  <span className="rl-hud-timecode">01:14:22:08</span>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 18, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.5 }}
                className="rl-chip rl-chip-top"
              >
                <span className="rl-chip-dot" /> {OWNER.studio}
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.65 }}
                className="rl-chip rl-chip-bottom"
              >
                <span className="rl-chip-dot rl-chip-dot-brass" /> {OWNER.availability}
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 variants={stagger(0.12, 1.1)} initial="hidden" animate="visible" className="rl-headline rl-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Cut to black.</motion.span>
            <motion.span variants={fadeUp} className="rl-headline-accent" style={{ display: "block" }}>Then, somehow, cut to hope.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 1.3 }} className="rl-subhead rl-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 1.4 }} className="rl-cta-row rl-area-cta">
            <a href="#filmography" className="rl-btn-primary">Watch The Reel</a>
            <a href="#contact" className="rl-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 1.6)} initial="hidden" animate="visible" className="rl-stats-row rl-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="rl-stat">
                <span className="rl-stat-value">{s.value}</span>
                <span className="rl-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .rl-spotlight {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(480px circle at var(--rl-mx, 50%) var(--rl-my, 20%), rgba(209,38,63,0.14), transparent 70%);
        }
        .rl-vignette {
          position: absolute;
          inset: 0;
          z-index: 0;
          pointer-events: none;
          background: radial-gradient(120% 90% at 50% -10%, transparent 40%, rgba(10,8,6,0.7) 100%);
        }
        .rl-clap-overlay {
          position: absolute;
          inset: 0;
          z-index: 10;
          background-color: #0a0806;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .rl-clap-slate { position: relative; width: min(300px, 62vw); }
        .rl-clap-base {
          height: 74px;
          background-color: #14100c;
          border: 2px solid #c9a15a;
          border-radius: 4px;
          background-image: repeating-linear-gradient(45deg, #14100c 0 14px, #f3ece1 14px 28px);
        }
        .rl-clap-arm {
          height: 26px;
          margin-bottom: 4px;
          background-color: #14100c;
          border: 2px solid #c9a15a;
          border-radius: 4px;
          background-image: repeating-linear-gradient(-45deg, #14100c 0 14px, #d1263f 14px 28px);
          transform-origin: left center;
        }
        .rl-clap-label {
          position: absolute;
          bottom: -30px;
          left: 0;
          right: 0;
          text-align: center;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          letter-spacing: 0.08em;
          color: #6b5f4f;
        }
        .rl-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .rl-hero-grid {
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
        .rl-area-kicker { grid-area: kicker; }
        .rl-area-photo { grid-area: photo; }
        .rl-area-headline { grid-area: headline; }
        .rl-area-subhead { grid-area: subhead; }
        .rl-area-cta { grid-area: cta; }
        .rl-area-stats { grid-area: stats; }
        .rl-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 500;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: #f0435c;
          background-color: rgba(209,38,63,0.12);
          border: 1px solid rgba(209,38,63,0.4);
          border-radius: 100px;
          padding: 7px 16px 7px 12px;
          width: fit-content;
        }
        .rl-rec-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #f0435c; animation: rl-rec-pulse 1.6s ease-in-out infinite; }
        @keyframes rl-rec-pulse { 0%, 100% { opacity: 1; } 50% { opacity: 0.3; } }
        .rl-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 400;
          text-transform: uppercase;
          font-size: clamp(34px, 8.4vw, 60px);
          line-height: 1.04;
          letter-spacing: 0.01em;
          color: #f3ece1;
        }
        .rl-headline-accent { color: #c9a15a; }
        .rl-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .rl-photo-outer {
          position: relative;
          width: clamp(220px, 58vw, 270px);
        }
        .rl-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 2 / 3;
          overflow: hidden;
          border-radius: 6px;
          border: 1px solid rgba(201,161,90,0.3);
        }
        .rl-bracket {
          position: absolute;
          width: 20px;
          height: 20px;
          border: 2px solid #c9a15a;
          z-index: 3;
        }
        .rl-bracket-tl { top: 6px; left: 6px; border-right: none; border-bottom: none; }
        .rl-bracket-tr { top: 6px; right: 6px; border-left: none; border-bottom: none; border-color: #d1263f; }
        .rl-bracket-bl { bottom: 6px; left: 6px; border-right: none; border-top: none; border-color: #d1263f; }
        .rl-bracket-br { bottom: 6px; right: 6px; border-left: none; border-top: none; }
        .rl-viewfinder-hud {
          position: absolute;
          left: 16px;
          right: 16px;
          bottom: 14px;
          z-index: 3;
          display: flex;
          align-items: center;
          justify-content: space-between;
          font-family: var(--font-mono, monospace);
          font-size: 10.5px;
          color: #f3ece1;
          text-shadow: 0 1px 3px rgba(0,0,0,0.8);
        }
        .rl-hud-rec { display: flex; align-items: center; gap: 5px; letter-spacing: 0.06em; }
        .rl-hud-rec-dot { width: 6px; height: 6px; border-radius: 50%; background-color: #f0435c; animation: rl-rec-pulse 1.6s ease-in-out infinite; }
        .rl-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 600;
          color: #f3ece1;
          background-color: #14100c;
          border: 1px solid rgba(201,161,90,0.35);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.55);
          white-space: nowrap;
          z-index: 4;
        }
        .rl-chip-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #d1263f; flex-shrink: 0; }
        .rl-chip-dot-brass { background-color: #c9a15a; }
        .rl-chip-top { top: -6%; right: -8%; }
        .rl-chip-bottom { bottom: 6%; left: -12%; }
        .rl-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #b7a996;
          margin: 0;
          max-width: 520px;
        }
        .rl-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .rl-btn-primary, .rl-btn-outline {
          font-family: var(--font-display, sans-serif);
          letter-spacing: 0.03em;
          font-size: 15px;
          font-weight: 400;
          padding: 13px 26px;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .rl-btn-primary {
          color: #f3ece1;
          background-color: #d1263f;
        }
        .rl-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(209,38,63,0.4); }
        .rl-btn-outline {
          color: #f3ece1;
          border: 1px solid rgba(201,161,90,0.4);
          background-color: transparent;
        }
        .rl-btn-outline:hover { transform: translateY(-2px); background-color: rgba(201,161,90,0.08); }
        .rl-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(243,236,225,0.1);
          max-width: 460px;
        }
        .rl-stat { display: flex; flex-direction: column; gap: 2px; }
        .rl-stat-value { font-family: var(--font-mono, monospace); font-weight: 700; font-size: 21px; color: #c9a15a; }
        .rl-stat-label { font-size: 10.5px; color: #b7a996; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .rl-hero-grid {
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
          .rl-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .rl-photo-outer { width: clamp(280px, 26vw, 360px); }
        }
        @media (min-width: 700px) {
          .rl-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .rl-chip { font-size: 10px; padding: 7px 12px; }
          .rl-chip-top { right: -2%; }
          .rl-chip-bottom { left: -4%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .rl-rec-dot, .rl-hud-rec-dot { animation: none; }
        }
      `}</style>
    </section>
  );
}
