"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import heroPhoto from "../_assets/common-hero.webp";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        overflow: "hidden",
        backgroundColor: "#15110f",
        paddingTop: "80px",
      }}
    >
      {/* Soft ember/wine backdrop glows */}
      <div aria-hidden="true" className="umami-glow umami-glow-1" />
      <div aria-hidden="true" className="umami-glow umami-glow-2" />

      <div className="umami-hero-inner">
        <div className="umami-hero-grid">
          <motion.div variants={stagger(0.1, 0.1)} initial="hidden" animate="visible" className="umami-area-kicker">
            <motion.span variants={fadeUp} className="umami-eyebrow">
              {OWNER.title}
            </motion.span>
          </motion.div>

          {/* Photo — no background/card, shown directly with a plate-rim halo + rising steam */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="umami-area-photo umami-photo-col"
          >
            <div className="umami-photo-wrap">
              <span aria-hidden="true" className="umami-plate-halo" />
              <span aria-hidden="true" className="umami-steam umami-steam-1" />
              <span aria-hidden="true" className="umami-steam umami-steam-2" />
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
                className="umami-photo-float"
              >
                <Image
                  src={heroPhoto}
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
                className="umami-chip umami-chip-top"
              >
                <span className="umami-chip-dot" /> 1 Michelin star
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: -18, y: 10 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="umami-chip umami-chip-bottom"
              >
                <span className="umami-chip-dot umami-chip-dot-herb" /> {OWNER.availability}
              </motion.div>
            </div>
          </motion.div>

          <motion.h1 variants={stagger(0.1, 0.18)} initial="hidden" animate="visible" className="umami-headline umami-area-headline">
            <motion.span variants={fadeUp} style={{ display: "block" }}>Great food isn&apos;t plated.</motion.span>
            <motion.span variants={fadeUp} className="umami-headline-gradient" style={{ display: "block" }}>It&apos;s earned, course by course.</motion.span>
          </motion.h1>

          <motion.p variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.3 }} className="umami-subhead umami-area-subhead">
            {OWNER.subtagline}
          </motion.p>

          <motion.div variants={fadeUp} initial="hidden" animate="visible" transition={{ delay: 0.4 }} className="umami-cta-row umami-area-cta">
            <a href="#menus" className="umami-btn-primary">View Menus</a>
            <a href="#contact" className="umami-btn-outline">Get In Touch</a>
          </motion.div>

          <motion.div variants={stagger(0.08, 0.5)} initial="hidden" animate="visible" className="umami-stats-row umami-area-stats">
            {OWNER.stats.map((s, i) => (
              <motion.div key={s.label} variants={fadeUp} className={`umami-stat umami-stat-${i % 4}`}>
                <span className="umami-stat-value">{s.value}</span>
                <span className="umami-stat-label">{s.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style>{`
        .umami-glow { position: absolute; border-radius: 50%; filter: blur(70px); z-index: 0; opacity: 0.22; }
        .umami-glow-1 { width: 340px; height: 340px; top: -110px; left: -100px; background: #e8552c; animation: umami-glow-float-1 17s ease-in-out infinite; }
        .umami-glow-2 { width: 300px; height: 300px; top: 160px; right: -120px; background: #7c2233; animation: umami-glow-float-2 20s ease-in-out infinite; }
        @keyframes umami-glow-float-1 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(30px,20px); } }
        @keyframes umami-glow-float-2 { 0%, 100% { transform: translate(0,0); } 50% { transform: translate(-25px,30px); } }
        .umami-hero-inner {
          position: relative;
          z-index: 2;
          max-width: 1180px;
          margin: 0 auto;
          padding: 24px 20px 56px;
        }
        .umami-hero-grid {
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
        .umami-area-kicker { grid-area: kicker; }
        .umami-area-photo { grid-area: photo; }
        .umami-area-headline { grid-area: headline; }
        .umami-area-subhead { grid-area: subhead; }
        .umami-area-cta { grid-area: cta; }
        .umami-area-stats { grid-area: stats; }
        .umami-eyebrow {
          display: inline-flex;
          font-size: 13px;
          font-weight: 600;
          color: #ff8a4c;
          background-color: rgba(232,85,44,0.14);
          border: 1px solid rgba(232,85,44,0.32);
          border-radius: 100px;
          padding: 7px 16px;
          width: fit-content;
        }
        .umami-headline {
          margin: 0;
          font-family: var(--font-display, serif);
          font-weight: 600;
          font-size: clamp(32px, 7.8vw, 56px);
          line-height: 1.14;
          letter-spacing: -0.01em;
          color: #f5ece0;
        }
        .umami-headline-gradient {
          background-image: linear-gradient(120deg, #e8552c, #ff8a4c);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }
        .umami-photo-col { display: flex; justify-content: center; position: relative; z-index: 1; }
        .umami-photo-wrap {
          position: relative;
          width: clamp(210px, 58vw, 260px);
          aspect-ratio: 418 / 597;
        }
        .umami-plate-halo {
          position: absolute;
          inset: 4% -22%;
          border-radius: 50%;
          border: 1.5px solid rgba(232,85,44,0.4);
          box-shadow: 0 0 0 14px rgba(232,85,44,0.05), inset 0 0 30px rgba(232,85,44,0.08);
        }
        .umami-steam {
          position: absolute;
          width: 18px;
          height: 60px;
          border-radius: 50%;
          background-image: linear-gradient(to top, rgba(245,236,224,0.22), transparent);
          filter: blur(4px);
          animation: umami-steam-rise 4.5s ease-in infinite;
        }
        .umami-steam-1 { top: -8%; left: 38%; animation-delay: 0s; }
        .umami-steam-2 { top: -4%; left: 54%; animation-delay: 1.6s; width: 14px; height: 46px; }
        @keyframes umami-steam-rise {
          0% { transform: translateY(10px) scaleY(0.7); opacity: 0; }
          25% { opacity: 0.8; }
          80% { opacity: 0; }
          100% { transform: translateY(-46px) scaleY(1.25); opacity: 0; }
        }
        .umami-photo-float {
          position: relative;
          width: 100%;
          height: 100%;
          filter: drop-shadow(0 24px 30px rgba(0,0,0,0.5));
        }
        .umami-chip {
          position: absolute;
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 600;
          color: #f5ece0;
          background-color: #231b17;
          border: 1px solid rgba(232,85,44,0.3);
          border-radius: 100px;
          padding: 8px 14px;
          box-shadow: 0 14px 28px rgba(0,0,0,0.45);
          white-space: nowrap;
          z-index: 3;
        }
        .umami-chip-dot { width: 7px; height: 7px; border-radius: 50%; background-color: #e8552c; flex-shrink: 0; }
        .umami-chip-dot-herb { background-color: #6b8f47; }
        .umami-chip-top { top: -6%; right: -8%; }
        .umami-chip-bottom { bottom: 6%; left: -12%; }
        .umami-subhead {
          font-size: 15.5px;
          line-height: 1.7;
          color: #c4b6a8;
          margin: 0;
          max-width: 520px;
        }
        .umami-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
        .umami-btn-primary, .umami-btn-outline {
          font-size: 14.5px;
          font-weight: 600;
          padding: 14px 28px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: transform 0.2s, box-shadow 0.2s, background-color 0.2s;
        }
        .umami-btn-primary {
          color: #15110f;
          background-image: linear-gradient(120deg, #e8552c, #ff8a4c);
        }
        .umami-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 26px rgba(232,85,44,0.35); }
        .umami-btn-outline {
          color: #f5ece0;
          border: 1px solid rgba(245,236,224,0.22);
          background-color: transparent;
        }
        .umami-btn-outline:hover { transform: translateY(-2px); background-color: rgba(245,236,224,0.06); }
        .umami-stats-row {
          display: grid;
          grid-template-columns: repeat(2, minmax(0,1fr));
          gap: 14px;
          margin-top: 6px;
          padding-top: 20px;
          border-top: 1px solid rgba(245,236,224,0.1);
          max-width: 460px;
        }
        .umami-stat { display: flex; flex-direction: column; gap: 2px; }
        .umami-stat-value { font-family: var(--font-display, serif); font-weight: 600; font-size: 24px; }
        .umami-stat-0 .umami-stat-value { color: #ff8a4c; }
        .umami-stat-1 .umami-stat-value { color: #e8552c; }
        .umami-stat-2 .umami-stat-value { color: #c4b6a8; }
        .umami-stat-3 .umami-stat-value { color: #ff8a4c; }
        .umami-stat-label { font-size: 10.5px; color: #c4b6a8; text-transform: uppercase; letter-spacing: 0.02em; }
        @media (min-width: 860px) {
          .umami-hero-grid {
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
          .umami-photo-col { justify-content: flex-end; align-items: center; height: 100%; }
          .umami-photo-wrap { width: clamp(280px, 26vw, 380px); }
        }
        @media (min-width: 700px) {
          .umami-stats-row { grid-template-columns: repeat(4, minmax(0,1fr)); max-width: none; }
        }
        @media (max-width: 520px) {
          .umami-chip { font-size: 10.5px; padding: 7px 12px; }
          .umami-chip-top { right: -2%; }
          .umami-chip-bottom { left: -4%; }
        }
        @media (prefers-reduced-motion: reduce) {
          .umami-glow, .umami-steam { animation: none; }
        }
      `}</style>
    </section>
  );
}
