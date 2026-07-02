"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroPhoto from "../_assets/hero-perfumer.jpg";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#faf5ea",
        paddingTop: "84px",
      }}
    >
      <div aria-hidden="true" className="sil-rings">
        <span className="sil-ring sil-ring-1" />
        <span className="sil-ring sil-ring-2" />
        <span className="sil-ring sil-ring-3" />
      </div>

      <div className="sil-hero-inner">
        <div className="sil-hero-grid">
          <motion.div
            initial={{ opacity: 0, scale: 1.6, rotate: -10 }}
            animate={{ opacity: 1, scale: 1, rotate: -3 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="sil-area-kicker"
          >
            <span className="sil-eyebrow">Atelier Rousseau · Est. 2018</span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="sil-area-photo sil-photo-col"
          >
            <div className="sil-photo-outer">
              <div className="sil-photo-wrap">
                <Image
                  src={heroPhoto}
                  alt="Camille Rousseau smelling a bundle of fresh lavender"
                  fill
                  priority
                  sizes="(max-width: 860px) 260px, 380px"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <span className="sil-seal">
                <span className="sil-seal-text">N°018</span>
              </span>

              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                className="sil-chip"
              >
                <span className="sil-chip-dot" /> {OWNER.availability}
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 variants={stagger(0.12, 0.25)} initial="hidden" animate="visible" className="sil-headline sil-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>The scent should arrive</motion.span>
            <motion.span variants={fadeUp} className="sil-headline-accent" style={{ display: "block" }}>before you do.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="sil-subhead sil-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.5 }} className="sil-cta-row sil-area-cta">
            <a href="#fragrances" className="sil-btn-primary">View The Collection</a>
            <a href="#contact" className="sil-btn-outline">Commission A Scent</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.65)} initial="hidden" animate="visible" className="sil-stats-row sil-area-stats">
            {OWNER.stats.map((s) => (
              <motion.div key={s.label} variants={fadeUp} className="sil-stat">
                <span className="sil-stat-value">{s.value}</span>
                <span className="sil-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .sil-rings {
          position: absolute;
          top: 8%;
          right: -8%;
          width: 520px;
          height: 520px;
          pointer-events: none;
          z-index: 0;
        }
        .sil-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1px solid rgba(182,117,44,0.28);
          animation: sil-ripple 7s ease-out infinite;
        }
        .sil-ring-2 { animation-delay: 2.3s; border-color: rgba(177,85,107,0.22); }
        .sil-ring-3 { animation-delay: 4.6s; border-color: rgba(182,117,44,0.18); }
        @keyframes sil-ripple {
          0% { transform: scale(0.35); opacity: 0; }
          15% { opacity: 0.9; }
          100% { transform: scale(1); opacity: 0; }
        }
        .sil-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .sil-hero-grid {
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
        .sil-area-kicker { grid-area: kicker; }
        .sil-area-photo { grid-area: photo; }
        .sil-area-headline { grid-area: headline; }
        .sil-area-subhead { grid-area: subhead; }
        .sil-area-cta { grid-area: cta; }
        .sil-area-stats { grid-area: stats; }
        .sil-eyebrow {
          display: inline-flex;
          font-family: var(--font-body, sans-serif);
          font-size: 11.5px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b6752c;
          background-color: rgba(182,117,44,0.1);
          border: 1px solid rgba(182,117,44,0.35);
          border-radius: 100px;
          padding: 8px 18px;
          width: fit-content;
        }
        .sil-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(32px, 7.6vw, 56px);
          line-height: 1.1;
          letter-spacing: -0.01em;
          color: #2b2015;
        }
        .sil-headline-accent { font-style: italic; color: #b1556b; font-weight: 500; }
        .sil-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .sil-photo-outer { position: relative; width: clamp(220px, 58vw, 270px); }
        .sil-photo-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 2 / 3;
          overflow: hidden;
          border-radius: 4px;
          border: 6px solid #faf5ea;
          outline: 1px solid rgba(43,32,21,0.18);
          box-shadow: 0 26px 50px -18px rgba(43,32,21,0.35);
        }
        .sil-seal {
          position: absolute;
          top: -14px;
          right: -14px;
          width: 62px;
          height: 62px;
          border-radius: 50%;
          background-color: #b1556b;
          color: #faf5ea;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 10px 22px rgba(177,85,107,0.4);
          border: 2px solid rgba(250,245,234,0.7);
          z-index: 4;
        }
        .sil-seal-text { font-family: var(--font-display, serif); font-weight: 600; font-size: 13px; letter-spacing: 0.02em; }
        .sil-chip {
          position: absolute;
          bottom: 14px;
          left: -14px;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 11.5px;
          font-weight: 500;
          color: #2b2015;
          background-color: #faf5ea;
          border: 1px solid rgba(43,32,21,0.16);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 14px 28px rgba(43,32,21,0.16);
          white-space: nowrap;
          z-index: 4;
        }
        .sil-chip-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #b6752c; flex-shrink: 0; }
        .sil-subhead {
          font-size: 15.5px;
          line-height: 1.75;
          color: #6f5f47;
          margin: 0;
          max-width: 520px;
        }
        .sil-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .sil-btn-primary, .sil-btn-outline {
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
        .sil-btn-primary {
          color: #faf5ea;
          background-color: #b6752c;
        }
        .sil-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(182,117,44,0.35); }
        .sil-btn-outline {
          color: #2b2015;
          border: 1px solid rgba(43,32,21,0.28);
          background-color: transparent;
        }
        .sil-btn-outline:hover { transform: translateY(-2px); background-color: rgba(43,32,21,0.05); }
        .sil-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(43,32,21,0.14);
          max-width: 460px;
        }
        .sil-stat { display: flex; flex-direction: column; gap: 2px; }
        .sil-stat-value { font-family: var(--font-display, serif); font-weight: 700; font-size: 25px; color: #b6752c; }
        .sil-stat-label { font-size: 10.5px; color: #6f5f47; text-transform: uppercase; letter-spacing: 0.03em; }
        @media (min-width: 860px) {
          .sil-hero-grid {
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
          .sil-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .sil-photo-outer { width: clamp(280px, 26vw, 360px); }
        }
        @media (min-width: 700px) {
          .sil-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .sil-ring { animation: none; opacity: 0; }
        }
      `}</style>
    </section>
  );
}
