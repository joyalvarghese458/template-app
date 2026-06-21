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
        backgroundColor: "#eef0ec",
        paddingTop: "88px",
      }}
    >
      {/* Topographic contour backdrop */}
      <svg aria-hidden="true" className="strata-topo" viewBox="0 0 500 460" preserveAspectRatio="xMidYMid slice">
        <path d="M70,260 C60,170 140,80 250,75 C355,70 430,150 420,250 C410,345 320,410 220,400 C130,392 80,340 70,260 Z" fill="none" stroke="#8b8d87" strokeWidth="1.3" opacity="0.5" />
        <path d="M110,255 C102,185 165,115 250,112 C335,109 392,170 386,248 C380,322 310,372 232,365 C160,358 117,318 110,255 Z" fill="none" stroke="#8b8d87" strokeWidth="1.3" opacity="0.45" />
        <path d="M150,252 C145,200 192,150 251,148 C312,146 354,192 350,247 C346,300 296,335 240,330 C188,325 154,298 150,252 Z" fill="none" stroke="#8b8d87" strokeWidth="1.3" opacity="0.4" />
        <path d="M188,250 C185,216 215,184 251,183 C288,182 314,212 312,248 C310,282 282,304 248,301 C217,298 190,280 188,250 Z" fill="none" stroke="#8b8d87" strokeWidth="1.3" opacity="0.35" />
        <text x="60" y="172" className="strata-topo-label">5,280 FT</text>
        <text x="392" y="252" className="strata-topo-label">5,300 FT</text>
        <text x="318" y="338" className="strata-topo-label">5,320 FT</text>
      </svg>

      {/* Compass / benchmark mark */}
      <svg aria-hidden="true" className="strata-compass" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="22" fill="none" stroke="#1f2421" strokeWidth="1.2" opacity="0.5" />
        <path d="M30 8v8M30 44v8M8 30h8M44 30h8" stroke="#f15a24" strokeWidth="1.6" strokeLinecap="round" />
        <path d="M30 18l4 12-4 12-4-12z" fill="#1f2421" opacity="0.7" />
      </svg>

      <div className="strata-hero-inner">
        <div className="strata-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="strata-area-kicker">
            <motion.span variants={fadeUp} className="strata-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="strata-headline strata-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Built to hold.</motion.span>
            <motion.span variants={fadeUp} className="strata-headline-accent" style={{ display: "block" }}>Designed to last.</motion.span>
          </motion.h1>

          {/* Photo — no background/card, shown directly with small license-stamp accents */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="strata-area-photo strata-photo-col"
          >
            <div className="strata-photo-wrap">
              <span className="strata-tick strata-tick-tl" aria-hidden="true" />
              <span className="strata-tick strata-tick-br" aria-hidden="true" />

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="strata-photo-float"
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
                className="strata-chip strata-chip-top"
              >
                <span className="strata-chip-seal">P.E.</span> Licensed Engineer
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="strata-subhead strata-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="strata-cta-row strata-area-cta">
            <a href="#work" className="strata-btn-primary">View Work</a>
            <a href="#contact" className="strata-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="strata-stats-row strata-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="strata-stat-plate">
                <span className="strata-stat-bolt strata-bolt-tl" />
                <span className="strata-stat-bolt strata-bolt-tr" />
                <span className="strata-stat-bolt strata-bolt-bl" />
                <span className="strata-stat-bolt strata-bolt-br" />
                <span className="strata-stat-value">{s.value}</span>
                <span className="strata-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .strata-topo { position: absolute; top: -40px; right: -80px; width: 560px; height: 520px; z-index: 0; opacity: 0.9; }
        .strata-topo-label { font-family: var(--font-mono, monospace); font-size: 9px; fill: #8b8d87; letter-spacing: 0.04em; }
        .strata-compass { position: absolute; top: 96px; left: 4%; width: 48px; height: 48px; z-index: 0; opacity: 0.85; }
        .strata-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .strata-hero-grid {
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
        .strata-area-kicker { grid-area: kicker; }
        .strata-area-headline { grid-area: headline; }
        .strata-area-photo { grid-area: photo; }
        .strata-area-subhead { grid-area: subhead; }
        .strata-area-cta { grid-area: cta; }
        .strata-area-stats { grid-area: stats; }
        .strata-eyebrow {
          display: inline-flex;
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.04em;
          text-transform: uppercase;
          color: #1f2421;
          background-color: #ffffff;
          border: 1.5px solid #1f2421;
          border-radius: 4px;
          padding: 6px 14px;
          width: fit-content;
        }
        .strata-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 700;
          font-size: clamp(34px, 9vw, 62px);
          line-height: 1.04;
          letter-spacing: 0;
          color: #1f2421;
          text-transform: uppercase;
        }
        .strata-headline-accent { color: #f15a24; }
        .strata-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .strata-photo-wrap {
          position: relative;
          width: clamp(190px, 56vw, 240px);
          aspect-ratio: 418 / 597;
        }
        .strata-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 22px 28px rgba(31,36,33,0.28));
        }
        .strata-tick {
          position: absolute;
          width: 18px;
          height: 18px;
          border: 2px solid #1f2421;
          z-index: 2;
        }
        .strata-tick-tl { top: -8px; left: -8px; border-right: none; border-bottom: none; }
        .strata-tick-br { bottom: -8px; right: -8px; border-left: none; border-top: none; }
        .strata-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-mono, monospace);
          font-size: 11px;
          font-weight: 600;
          color: #1f2421;
          background-color: #ffffff;
          border: 1.5px solid #1f2421;
          border-radius: 100px;
          padding: 7px 14px 7px 7px;
          box-shadow: 3px 3px 0 rgba(31,36,33,0.18);
          white-space: nowrap;
          z-index: 3;
        }
        .strata-chip-seal {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #f15a24;
          color: #fff;
          font-size: 9px;
          font-weight: 700;
        }
        .strata-chip-top { top: -7%; right: -4%; }
        .strata-subhead {
          font-size: 15px;
          line-height: 1.7;
          color: #5c655e;
          margin: 0;
          max-width: 520px;
        }
        .strata-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .strata-btn-primary, .strata-btn-outline {
          font-family: var(--font-mono, monospace);
          font-size: 13.5px;
          font-weight: 700;
          padding: 13px 26px;
          border-radius: 4px;
          text-decoration: none;
          display: inline-block;
          border: 1.5px solid #1f2421;
          transition: transform 0.15s, box-shadow 0.15s;
        }
        .strata-btn-primary {
          color: #fff;
          background-color: #f15a24;
          border-color: #f15a24;
        }
        .strata-btn-primary:hover { transform: translate(-2px, -2px); box-shadow: 3px 3px 0 #1f2421; }
        .strata-btn-outline {
          color: #1f2421;
          background-color: transparent;
        }
        .strata-btn-outline:hover { transform: translate(-2px, -2px); box-shadow: 3px 3px 0 #1f2421; }
        .strata-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 12px;
        }
        .strata-stat-plate {
          position: relative;
          border: 1.5px solid #1f2421;
          background-color: #ffffff;
          padding: 14px 14px;
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .strata-stat-bolt { position: absolute; width: 4px; height: 4px; border-radius: 50%; background-color: #8b8d87; }
        .strata-bolt-tl { top: 4px; left: 4px; }
        .strata-bolt-tr { top: 4px; right: 4px; }
        .strata-bolt-bl { bottom: 4px; left: 4px; }
        .strata-bolt-br { bottom: 4px; right: 4px; }
        .strata-stat-value { font-family: var(--font-display, sans-serif); font-weight: 700; font-size: 21px; color: #1f2421; }
        .strata-stat-label { font-size: 10px; color: #5c655e; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .strata-hero-grid {
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
          .strata-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .strata-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 620px) {
          .strata-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); }
        }
        @media (max-width: 520px) {
          .strata-chip { font-size: 10px; padding: 6px 11px 6px 6px; }
          .strata-chip-top { right: -2%; }
          .strata-topo { opacity: 0.55; }
        }
      `}</style>
    </section>
  );
}
