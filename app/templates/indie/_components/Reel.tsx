"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PROFILE } from "../_data/portfolio";
import { ease, viewport } from "../_utils/motion";

export default function Reel() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, viewport);

  return (
    <section
      id="reel"
      ref={ref}
      style={{
        padding: "clamp(3rem, 6vw, 5rem) clamp(1.25rem, 4vw, 2rem)",
        maxWidth: 1240,
        margin: "0 auto",
      }}
    >
      {/* Label */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, ease }}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.75rem",
          marginBottom: "clamp(1.5rem, 4vw, 3rem)",
        }}
      >
        <div
          style={{
            width: 32,
            height: 1,
            background: "var(--i-accent)",
            opacity: 0.6,
          }}
        />
        <span
          style={{
            fontSize: "0.7rem",
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--i-ink-muted)",
          }}
        >
          Showreel 2026
        </span>
      </motion.div>

      {/* Cinematic video frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.94, y: 40 }}
        animate={isInView ? { opacity: 1, scale: 1, y: 0 } : {}}
        transition={{ duration: 1.3, ease }}
        style={{
          position: "relative",
          width: "100%",
          borderRadius: "clamp(0.5rem, 2vw, 0.75rem)",
          overflow: "hidden",
          background: "#0b0b14",
          border: "1px solid var(--i-border)",
          boxShadow:
            "0 40px 120px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(129,140,248,0.06)",
        }}
      >
        {/* Letterbox bars — hidden on mobile */}
        <div
          aria-hidden="true"
          className="indie-reel-bar indie-reel-bar-top"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: "clamp(12px, 3.5%, 36px)",
            background: "#000",
            zIndex: 2,
          }}
        />
        <div
          aria-hidden="true"
          className="indie-reel-bar indie-reel-bar-bottom"
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "clamp(12px, 3.5%, 36px)",
            background: "#000",
            zIndex: 2,
          }}
        />

        {/* Aspect ratio box — cinemascope on desktop, 16:9 on mobile */}
        <div className="indie-reel-ratio" style={{ position: "relative" }}>
          <img
            src={PROFILE.reelPoster}
            alt="Showreel poster"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              display: "block",
            }}
          />

          {/* Gradient vignette */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
            }}
          />

          {/* Play button */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              zIndex: 3,
            }}
          >
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3, ease }}
              style={{
                width: "clamp(56px, 8vw, 96px)",
                height: "clamp(56px, 8vw, 96px)",
                borderRadius: "50%",
                background: "rgba(129, 140, 248, 0.15)",
                border: "1.5px solid rgba(129, 140, 248, 0.6)",
                backdropFilter: "blur(12px)",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 40px rgba(129,140,248,0.25)",
              }}
              aria-label="Play showreel"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                style={{
                  width: "clamp(18px, 2.5vw, 30px)",
                  height: "clamp(18px, 2.5vw, 30px)",
                  color: "#f0f0f8",
                  marginLeft: "3px",
                }}
              >
                <path d="M8 5.14v14l11-7-11-7z" />
              </svg>
            </motion.button>
          </div>

          {/* Duration badge */}
          <div
            style={{
              position: "absolute",
              bottom: "clamp(12px, 5%, 48px)",
              right: "clamp(0.75rem, 3vw, 2rem)",
              zIndex: 3,
              fontSize: "0.72rem",
              letterSpacing: "0.12em",
              color: "rgba(240,240,248,0.7)",
              fontVariantNumeric: "tabular-nums",
            }}
          >
            02:14
          </div>
        </div>
      </motion.div>

      {/* Caption */}
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.9, delay: 0.3, ease }}
        style={{
          marginTop: "clamp(1rem, 3vw, 2rem)",
          fontSize: "0.8rem",
          color: "var(--i-ink-faint)",
          letterSpacing: "0.06em",
          textAlign: "center",
        }}
      >
        {PROFILE.name} · {PROFILE.role} · Selected works 2024–2026
      </motion.p>

      <style>{`
        /* Cinemascope 2.39:1 on desktop, 16:9 on mobile */
        .indie-reel-ratio { aspect-ratio: 2.39 / 1; }
        @media (max-width: 640px) {
          .indie-reel-ratio { aspect-ratio: 16 / 9; }
          .indie-reel-bar { display: none; }
        }
      `}</style>
    </section>
  );
}
