"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { slideInLeft, slideInRight, slideUp, stagger } from "../_utils/motion";

const PILLS_ROW_1 = ["Product Manager", "UX Designer", "Data Analyst", "Software Engineer", "Marketing Lead", "Customer Success"];
const PILLS_ROW_2 = ["Sales Director", "DevOps Engineer", "Growth Marketer", "Engineering Manager", "Brand Strategist", "Recruiter"];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#faf8ff",
        paddingTop: "88px",
      }}
    >
      {/* Gradient mesh blobs */}
      <div aria-hidden="true" className="ascend-blob ascend-blob-1" />
      <div aria-hidden="true" className="ascend-blob ascend-blob-2" />
      <div aria-hidden="true" className="ascend-blob ascend-blob-3" />

      {/* Sliding job-title pill bands */}
      <div aria-hidden="true" className="ascend-pill-band ascend-pill-band-1">
        <div className="ascend-pill-track ascend-pill-track-left">
          {[...PILLS_ROW_1, ...PILLS_ROW_1].map((p, i) => (
            <span key={i} className="ascend-pill">{p}</span>
          ))}
        </div>
      </div>
      <div aria-hidden="true" className="ascend-pill-band ascend-pill-band-2">
        <div className="ascend-pill-track ascend-pill-track-right">
          {[...PILLS_ROW_2, ...PILLS_ROW_2].map((p, i) => (
            <span key={i} className="ascend-pill">{p}</span>
          ))}
        </div>
      </div>

      <div className="ascend-hero-inner">
        <div className="ascend-hero-grid">
          <motion.div variants={stagger(0.12, 0.1)} initial="hidden" animate="visible" style={{ display: "flex", flexDirection: "column", gap: "22px" }}>
            <motion.span variants={slideInLeft} className="ascend-eyebrow">
              {OWNER.title}
            </motion.span>

            <h1 className="ascend-headline">
              <motion.span variants={slideInLeft} className="ascend-headline-line">Helping ambitious</motion.span>
              <motion.span variants={slideInRight} className="ascend-headline-line">professionals land</motion.span>
              <motion.span variants={slideInLeft} className="ascend-headline-line ascend-headline-gradient">their next role.</motion.span>
            </h1>

            <motion.p variants={slideUp} className="ascend-subhead">
              {OWNER.subtagline}
            </motion.p>

            <motion.div variants={slideUp} className="ascend-cta-row">
              <a href={OWNER.calendarUrl} className="ascend-btn-primary">Book a Free Call</a>
              <a href="#results" className="ascend-btn-outline">See Results</a>
            </motion.div>

            <motion.div variants={slideUp} className="ascend-stats-row">
              {OWNER.stats.map((s) => (
                <div key={s.label} className="ascend-stat">
                  <span className="ascend-stat-value">{s.value}</span>
                  <span className="ascend-stat-label">{s.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Photo — no background/card, shown directly */}
          <div className="ascend-photo-col">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="ascend-photo-wrap"
            >
              <motion.div
                animate={{ y: [0, -14, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                className="ascend-photo-float"
              >
                <Image
                  src="/common-hero.webp"
                  alt={`${OWNER.name}, ${OWNER.title}`}
                  fill
                  priority
                  sizes="(max-width: 860px) 280px, 360px"
                  style={{ objectFit: "contain", objectPosition: "bottom" }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, y: -10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="ascend-chip ascend-chip-top"
              >
                🎯 87% land offers in 90 days
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -30, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.3 }}
                className="ascend-chip ascend-chip-bottom"
              >
                ✦ Now booking June clients
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.7 }}
          className="ascend-scroll-cue"
        >
          <span>Scroll to explore</span>
          <motion.span aria-hidden="true" animate={{ y: [0, 5, 0] }} transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }} style={{ display: "inline-block" }}>
            ↓
          </motion.span>
        </motion.div>
      </div>

      <style>{`
        .ascend-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(50px);
          z-index: 0;
          opacity: 0.45;
        }
        .ascend-blob-1 {
          width: 360px; height: 360px;
          background: #ff7a59;
          top: -120px; left: -100px;
          animation: ascend-blob-float-1 16s ease-in-out infinite;
        }
        .ascend-blob-2 {
          width: 300px; height: 300px;
          background: #7c5cff;
          top: 100px; right: -120px;
          animation: ascend-blob-float-2 18s ease-in-out infinite;
        }
        .ascend-blob-3 {
          width: 260px; height: 260px;
          background: #ff5fa2;
          bottom: -100px; left: 30%;
          animation: ascend-blob-float-3 20s ease-in-out infinite;
        }
        @keyframes ascend-blob-float-1 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(40px, 30px) scale(1.1); }
        }
        @keyframes ascend-blob-float-2 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-30px, 40px) scale(1.08); }
        }
        @keyframes ascend-blob-float-3 {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(20px, -30px) scale(1.12); }
        }
        .ascend-pill-band {
          position: relative;
          z-index: 1;
          overflow: hidden;
          padding: 7px 0;
        }
        .ascend-pill-track { display: flex; gap: 12px; width: max-content; }
        .ascend-pill-track-left { animation: ascend-slide-left 38s linear infinite; }
        .ascend-pill-track-right { animation: ascend-slide-right 34s linear infinite; }
        @keyframes ascend-slide-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes ascend-slide-right {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .ascend-pill {
          font-size: 12.5px;
          font-weight: 600;
          color: #6b6280;
          background-color: rgba(255,255,255,0.7);
          border: 1px solid rgba(28,21,48,0.08);
          border-radius: 100px;
          padding: 7px 16px;
          white-space: nowrap;
          backdrop-filter: blur(6px);
        }
        .ascend-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 28px 20px 64px;
        }
        .ascend-hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 36px;
          align-items: center;
        }
        .ascend-eyebrow {
          display: inline-flex;
          font-size: 12.5px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #ff5fa2;
          text-transform: uppercase;
          background-color: rgba(255,95,162,0.1);
          border-radius: 100px;
          padding: 7px 16px;
          width: fit-content;
        }
        .ascend-headline {
          margin: 0;
          font-weight: 800;
          font-size: clamp(32px, 7.5vw, 56px);
          line-height: 1.12;
          letter-spacing: -0.02em;
          color: #1c1530;
        }
        .ascend-headline-line { display: block; }
        .ascend-headline-gradient {
          background-image: linear-gradient(120deg, #ff7a59, #ff5fa2, #7c5cff);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .ascend-subhead {
          font-size: 16.5px;
          line-height: 1.7;
          color: #6b6280;
          margin: 0;
          max-width: 520px;
        }
        .ascend-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .ascend-btn-primary, .ascend-btn-outline {
          font-size: 14px;
          font-weight: 700;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .ascend-btn-primary {
          color: #fff;
          background: linear-gradient(120deg, #ff7a59, #ff5fa2, #7c5cff);
          box-shadow: 0 10px 24px rgba(124,92,255,0.3);
        }
        .ascend-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 14px 28px rgba(124,92,255,0.4); }
        .ascend-btn-outline {
          color: #1c1530;
          border: 1.5px solid rgba(28,21,48,0.16);
          background-color: rgba(255,255,255,0.6);
        }
        .ascend-btn-outline:hover { transform: translateY(-2px); background-color: #fff; }
        .ascend-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 16px;
          margin-top: 8px;
          padding-top: 22px;
          border-top: 1px solid rgba(28,21,48,0.1);
          max-width: 460px;
        }
        .ascend-stat { display: flex; flex-direction: column; gap: 2px; }
        .ascend-stat-value { font-weight: 800; font-size: 22px; color: #1c1530; }
        .ascend-stat-label { font-size: 11.5px; color: #6b6280; }
        .ascend-photo-col { display: flex; justify-content: center; }
        .ascend-photo-wrap {
          position: relative;
          width: clamp(220px, 64vw, 300px);
          aspect-ratio: 418 / 597;
        }
        .ascend-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 32px rgba(28,21,48,0.18));
        }
        .ascend-chip {
          position: absolute;
          font-size: 12px;
          font-weight: 600;
          color: #1c1530;
          background-color: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(28,21,48,0.08);
          border-radius: 100px;
          padding: 9px 16px;
          box-shadow: 0 10px 24px rgba(28,21,48,0.1);
          white-space: nowrap;
        }
        .ascend-chip-top { top: 6%; right: -4%; }
        .ascend-chip-bottom { bottom: 10%; left: -8%; }
        .ascend-scroll-cue {
          display: flex;
          align-items: center;
          gap: 6px;
          justify-content: center;
          margin-top: 48px;
          font-size: 12px;
          font-weight: 600;
          color: #a39cb0;
        }
        @media (min-width: 860px) {
          .ascend-hero-grid { grid-template-columns: 1.1fr 0.9fr; gap: 56px; }
          .ascend-photo-col { justify-content: flex-end; }
          .ascend-scroll-cue { justify-content: flex-start; }
        }
        @media (min-width: 700px) {
          .ascend-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .ascend-blob, .ascend-pill-track { animation: none; }
        }
      `}</style>
    </section>
  );
}
