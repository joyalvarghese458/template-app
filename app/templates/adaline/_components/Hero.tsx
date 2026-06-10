"use client";

import { motion } from "framer-motion";
import BotanicalLandscape from "./BotanicalLandscape";
import { OWNER } from "../_data/portfolio";
import { fadeUp, stagger } from "../_utils/motion";

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
        backgroundColor: "#fbfdf6",
        paddingTop: "64px",
        backgroundImage: "radial-gradient(ellipse 80% 50% at 50% -10%, #d7e8b5 0%, transparent 70%)",
      }}
    >
      {/* Botanical landscape backdrop */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          opacity: 0.85,
        }}
      >
        <BotanicalLandscape />
      </div>

      {/* Top fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "160px",
          background: "linear-gradient(to bottom, #fbfdf6 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

      {/* Bottom fade */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "200px",
          background: "linear-gradient(to top, #fbfdf6 0%, transparent 100%)",
          zIndex: 1,
        }}
      />

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
          style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "32px" }}
        >
          {/* Micro-label */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "'JetBrains Mono', 'IBM Plex Mono', monospace",
              fontSize: "14px",
              fontWeight: 400,
              letterSpacing: "0.02em",
              color: "#0a1d08",
              textTransform: "uppercase",
              margin: 0,
            }}
          >
            Full Stack Developer
          </motion.p>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            style={{
              fontFamily: "inherit",
              fontSize: "clamp(38px, 6vw, 72px)",
              fontWeight: 400,
              lineHeight: 1.0,
              letterSpacing: "clamp(-1.5px, -0.04em, -2.5px)",
              color: "#0a1d08",
              margin: 0,
              maxWidth: "820px",
            }}
          >
            {OWNER.tagline}
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            style={{
              fontFamily: "inherit",
              fontSize: "18px",
              fontWeight: 400,
              lineHeight: 1.67,
              letterSpacing: "-0.72px",
              color: "#0a1d08",
              opacity: 0.7,
              margin: 0,
              maxWidth: "600px",
            }}
          >
            {OWNER.subtagline}
          </motion.p>

          {/* CTA buttons */}
          <motion.div
            variants={fadeUp}
            style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}
          >
            <a
              href="#projects"
              style={{
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "-0.56px",
                color: "#fbfdf6",
                textDecoration: "none",
                backgroundColor: "#4a3212",
                borderRadius: "20px",
                padding: "14px 32px",
                transition: "background-color 0.2s",
                display: "inline-block",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = "#203b14")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = "#4a3212")
              }
            >
              View Projects
            </a>
            <a
              href="#contact"
              style={{
                fontFamily: "inherit",
                fontSize: "14px",
                fontWeight: 700,
                letterSpacing: "-0.56px",
                color: "#0a1d08",
                textDecoration: "none",
                border: "1px solid #0a1d08",
                borderRadius: "20px",
                padding: "14px 32px",
                transition: "background-color 0.2s, color 0.2s",
                display: "inline-block",
                backgroundColor: "transparent",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0a1d08";
                e.currentTarget.style.color = "#fbfdf6";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = "#0a1d08";
              }}
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          style={{
            position: "absolute",
            bottom: "-80px",
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
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "12px",
              letterSpacing: "0.1em",
              color: "#0a1d08",
              opacity: 0.4,
              textTransform: "uppercase",
            }}
          >
            Scroll
          </span>
          <div
            style={{
              width: "1px",
              height: "48px",
              backgroundColor: "#0a1d08",
              opacity: 0.25,
              animation: "scrollPulse 1.8s ease-in-out infinite",
            }}
          />
        </motion.div>
      </div>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.1; transform: scaleY(1); }
          50% { opacity: 0.35; transform: scaleY(0.7); }
        }
        @media (max-width: 640px) {
          #home h1 { font-size: 36px !important; }
        }
      `}</style>
    </section>
  );
}
