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
        backgroundColor: "#ffffff",
        paddingTop: "80px",
      }}
    >
      {/* Soft growth-gradient backdrop blobs */}
      <div aria-hidden="true" className="surge-blob surge-blob-1" />
      <div aria-hidden="true" className="surge-blob surge-blob-2" />

      {/* 3D rotating bar chart */}
      <div aria-hidden="true" className="surge-chart-stage">
        <div className="surge-chart-rig">
          <span className="surge-bar surge-bar-1" />
          <span className="surge-bar surge-bar-2" />
          <span className="surge-bar surge-bar-3" />
        </div>
      </div>

      <div className="surge-hero-inner">
        <div className="surge-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="surge-area-kicker">
            <motion.span variants={fadeUp} className="surge-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="surge-headline surge-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Growth isn&apos;t luck.</motion.span>
            <motion.span variants={fadeUp} className="surge-headline-gradient" style={{ display: "block" }}>It&apos;s a funnel, done right.</motion.span>
          </motion.h1>

          {/* Photo — no background/card, shown directly with floating KPI chips */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="surge-area-photo surge-photo-col"
          >
            <div className="surge-photo-wrap">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="surge-photo-float"
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
                className="surge-chip surge-chip-top"
              >
                <span className="surge-chip-emoji">📈</span> ROAS 4.1x
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="surge-chip surge-chip-bottom"
              >
                <span className="surge-chip-emoji">✦</span> Open to roles
              </motion.div>
            </div>
          </motion.div>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="surge-subhead surge-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="surge-cta-row surge-area-cta">
            <a href="#work" className="surge-btn-primary">View Campaigns</a>
            <a href="#contact" className="surge-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="surge-stats-row surge-area-stats">
            {OWNER.stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} className={`surge-stat surge-stat-${i % 4}`}>
                <span className="surge-stat-value">{s.value}</span>
                <span className="surge-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .surge-blob { position: absolute; border-radius: 50%; filter: blur(60px); z-index: 0; opacity: 0.22; }
        .surge-blob-1 { width: 320px; height: 320px; top: -100px; left: -90px; background: #2954ff; animation: surge-blob-float-1 16s ease-in-out infinite; }
        .surge-blob-2 { width: 280px; height: 280px; top: 140px; right: -110px; background: #ff3d7f; animation: surge-blob-float-2 19s ease-in-out infinite; }
        @keyframes surge-blob-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px,20px); } }
        @keyframes surge-blob-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-25px,30px); } }
        .surge-chart-stage {
          position: absolute;
          top: 90px;
          right: 6%;
          width: 140px;
          height: 140px;
          z-index: 0;
          perspective: 800px;
          opacity: 0.85;
        }
        .surge-chart-rig {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          gap: 10px;
          transform-style: preserve-3d;
          animation: surge-chart-spin 13s linear infinite;
        }
        @keyframes surge-chart-spin {
          from { transform: rotateY(0deg) rotateX(6deg); }
          to { transform: rotateY(360deg) rotateX(6deg); }
        }
        .surge-bar { display: block; width: 22px; border-radius: 6px 6px 0 0; }
        .surge-bar-1 { height: 50%; background-color: #2954ff; }
        .surge-bar-2 { height: 85%; background-color: #ff3d7f; }
        .surge-bar-3 { height: 65%; background-color: #00c875; }
        .surge-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .surge-hero-grid {
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
        .surge-area-kicker { grid-area: kicker; }
        .surge-area-headline { grid-area: headline; }
        .surge-area-photo { grid-area: photo; }
        .surge-area-subhead { grid-area: subhead; }
        .surge-area-cta { grid-area: cta; }
        .surge-area-stats { grid-area: stats; }
        .surge-eyebrow {
          display: inline-flex;
          font-size: 13px;
          font-weight: 700;
          color: #2954ff;
          background-color: rgba(41,84,255,0.1);
          border-radius: 100px;
          padding: 7px 16px;
          width: fit-content;
        }
        .surge-headline {
          margin: 0;
          font-family: var(--font-display, sans-serif);
          font-weight: 700;
          font-size: clamp(30px, 7.6vw, 54px);
          line-height: 1.12;
          letter-spacing: -0.01em;
          color: #0f1222;
        }
        .surge-headline-gradient {
          background-image: linear-gradient(120deg, #2954ff, #ff3d7f, #00c875);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .surge-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .surge-photo-wrap {
          position: relative;
          width: clamp(210px, 58vw, 260px);
          aspect-ratio: 418 / 597;
        }
        .surge-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 30px rgba(15,18,34,0.18));
        }
        .surge-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 700;
          color: #0f1222;
          background-color: #ffffff;
          border: 1px solid rgba(15,18,34,0.1);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 14px 28px rgba(15,18,34,0.12);
          white-space: nowrap;
          z-index: 3;
        }
        .surge-chip-emoji { font-size: 13px; }
        .surge-chip-top { top: -8%; right: -6%; }
        .surge-chip-bottom { bottom: 8%; left: -10%; }
        .surge-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #5b6178;
          margin: 0;
          max-width: 520px;
        }
        .surge-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .surge-btn-primary, .surge-btn-outline {
          font-size: 14.5px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .surge-btn-primary {
          color: #ffffff;
          background-image: linear-gradient(120deg, #2954ff, #ff3d7f);
        }
        .surge-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(41,84,255,0.3); }
        .surge-btn-outline {
          color: #0f1222;
          border: 1px solid rgba(15,18,34,0.16);
          background-color: transparent;
        }
        .surge-btn-outline:hover { transform: translateY(-2px); background-color: #f8f9fb; }
        .surge-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(15,18,34,0.08);
          max-width: 460px;
        }
        .surge-stat { display: flex; flex-direction: column; gap: 2px; }
        .surge-stat-value { font-family: var(--font-display, sans-serif); font-weight: 700; font-size: 22px; }
        .surge-stat-0 .surge-stat-value { color: #2954ff; }
        .surge-stat-1 .surge-stat-value { color: #ff3d7f; }
        .surge-stat-2 .surge-stat-value { color: #00c875; }
        .surge-stat-3 .surge-stat-value { color: #ffa629; }
        .surge-stat-label { font-size: 10.5px; color: #5b6178; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .surge-hero-grid {
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
          .surge-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .surge-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 700px) {
          .surge-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .surge-chip { font-size: 10.5px; padding: 7px 12px; }
          .surge-chip-top { right: -2%; }
          .surge-chip-bottom { left: -4%; }
          .surge-chart-stage { width: 100px; height: 100px; top: 70px; }
        }
        @media (prefers-reduced-motion: reduce) {
          .surge-blob, .surge-chart-rig { animation: none; }
        }
      `}</style>
    </section>
  );
}
