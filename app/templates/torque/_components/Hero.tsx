"use client";

import { motion } from "framer-motion";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger, drawLine } from "../_utils/motion";

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: "100vh",
        position: "relative",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        backgroundColor: "#0b0e13",
        paddingTop: "68px",
      }}
    >
      {/* Blueprint grid backdrop */}
      <div aria-hidden="true" className="torque-grid" />
      <div aria-hidden="true" className="torque-grid-major" />

      {/* Diagonal scan sweep */}
      <div aria-hidden="true" className="torque-scan" />

      {/* Radial vignette focus */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(ellipse 70% 55% at 50% 35%, transparent 0%, #0b0e13 85%)",
          zIndex: 1,
        }}
      />

      {/* Floating gear assembly (decorative, animated landing motif) */}
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.55 }}
        transition={{ duration: 1.2, delay: 0.4 }}
        style={{ position: "absolute", top: "14%", right: "8%", zIndex: 1 }}
        className="torque-gear-float-slow"
      >
        <motion.svg
          width="170"
          height="170"
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: 360 }}
          transition={{ duration: 26, ease: "linear", repeat: Infinity }}
        >
          <GearPath stroke="#3fa9f5" />
        </motion.svg>
      </motion.div>
      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.35 }}
        transition={{ duration: 1.2, delay: 0.6 }}
        style={{ position: "absolute", bottom: "10%", left: "6%", zIndex: 1 }}
        className="torque-gear-float-fast"
      >
        <motion.svg
          width="100"
          height="100"
          viewBox="0 0 100 100"
          fill="none"
          animate={{ rotate: -360 }}
          transition={{ duration: 18, ease: "linear", repeat: Infinity }}
        >
          <GearPath stroke="#ff6a1f" />
        </motion.svg>
      </motion.div>

      {/* Blueprint dimension lines drawing themselves in */}
      <svg
        aria-hidden="true"
        width="100%"
        height="100%"
        style={{ position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none" }}
      >
        <motion.line
          x1="6%" y1="22%" x2="6%" y2="78%"
          stroke="#3fa9f5" strokeOpacity="0.3" strokeWidth="1"
          variants={drawLine} initial="hidden" animate="visible"
        />
        <motion.line
          x1="94%" y1="22%" x2="94%" y2="78%"
          stroke="#3fa9f5" strokeOpacity="0.3" strokeWidth="1"
          variants={drawLine} initial="hidden" animate="visible"
        />
      </svg>

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: "1200px",
          width: "100%",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <motion.div
          variants={stagger(0.12, 0.2)}
          initial="hidden"
          animate="visible"
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "28px" }}
        >
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "13px",
              fontWeight: 500,
              letterSpacing: "0.18em",
              color: "#ff6a1f",
              textTransform: "uppercase",
              margin: 0,
              border: "1px solid rgba(255,106,31,0.35)",
              borderRadius: "4px",
              padding: "6px 14px",
            }}
          >
            {OWNER.title}
          </motion.p>

          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "inherit",
              fontSize: "clamp(36px, 6vw, 70px)",
              fontWeight: 600,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              color: "#eef1f5",
              margin: 0,
              maxWidth: "840px",
            }}
          >
            {OWNER.tagline}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "inherit",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.65,
              color: "#8a93a3",
              margin: 0,
              maxWidth: "600px",
            }}
          >
            {OWNER.subtagline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
          >
            <a
              href="#projects"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#0b0e13",
                textDecoration: "none",
                backgroundColor: "#ff6a1f",
                borderRadius: "4px",
                padding: "14px 32px",
                transition: "background-color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#ff8347")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#ff6a1f")}
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#eef1f5",
                textDecoration: "none",
                border: "1px solid rgba(255,255,255,0.2)",
                borderRadius: "4px",
                padding: "14px 32px",
                transition: "background-color 0.2s, border-color 0.2s",
                display: "inline-block",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.06)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
              }}
            >
              Get In Touch
            </a>
          </motion.div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            style={{
              display: "flex",
              gap: "clamp(20px, 5vw, 48px)",
              flexWrap: "wrap",
              justifyContent: "center",
              marginTop: "12px",
              paddingTop: "28px",
              borderTop: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {OWNER.stats.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                <span
                  style={{
                    fontFamily: "var(--font-mono, monospace)",
                    fontSize: "26px",
                    fontWeight: 600,
                    color: "#3fa9f5",
                  }}
                >
                  {s.value}
                </span>
                <span
                  style={{
                    fontSize: "12px",
                    color: "#8a93a3",
                    textTransform: "uppercase",
                    letterSpacing: "0.04em",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "-72px",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "8px",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-mono, monospace)",
              fontSize: "11px",
              letterSpacing: "0.14em",
              color: "#8a93a3",
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div className="torque-scroll-pulse" />
        </motion.div>
      </div>

      <style>{`
        .torque-grid {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(63,169,245,0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(63,169,245,0.08) 1px, transparent 1px);
          background-size: 28px 28px;
          animation: torqueGridDrift 40s linear infinite;
        }
        .torque-grid-major {
          position: absolute;
          inset: 0;
          z-index: 0;
          background-image:
            linear-gradient(rgba(63,169,245,0.14) 1px, transparent 1px),
            linear-gradient(90deg, rgba(63,169,245,0.14) 1px, transparent 1px);
          background-size: 140px 140px;
        }
        .torque-scan {
          position: absolute;
          top: -50%;
          left: -20%;
          width: 60%;
          height: 200%;
          background: linear-gradient(100deg, transparent 40%, rgba(63,169,245,0.05) 50%, transparent 60%);
          z-index: 1;
          animation: torqueScanSweep 9s ease-in-out infinite;
        }
        @keyframes torqueGridDrift {
          0% { background-position: 0 0, 0 0; }
          100% { background-position: 28px 28px, 28px 28px; }
        }
        @keyframes torqueScanSweep {
          0%, 100% { transform: translateX(-20%); }
          50% { transform: translateX(160%); }
        }
        .torque-scroll-pulse {
          width: 1px;
          height: 44px;
          background-color: #3fa9f5;
          opacity: 0.3;
          animation: torqueScrollPulse 1.8s ease-in-out infinite;
        }
        @keyframes torqueScrollPulse {
          0%, 100% { opacity: 0.15; transform: scaleY(1); }
          50% { opacity: 0.5; transform: scaleY(0.65); }
        }
        @media (max-width: 640px) {
          .torque-gear-float-slow, .torque-gear-float-fast { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .torque-grid, .torque-scan, .torque-scroll-pulse { animation: none !important; }
        }
      `}</style>
    </section>
  );
}

function GearPath({ stroke }: { stroke: string }) {
  return (
    <>
      <circle cx="50" cy="50" r="18" stroke={stroke} strokeWidth="2" />
      <circle cx="50" cy="50" r="6" stroke={stroke} strokeWidth="2" />
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i * 360) / 8;
        return (
          <line
            key={i}
            x1="50"
            y1="22"
            x2="50"
            y2="8"
            stroke={stroke}
            strokeWidth="3"
            strokeLinecap="round"
            transform={`rotate(${angle} 50 50)`}
          />
        );
      })}
    </>
  );
}
