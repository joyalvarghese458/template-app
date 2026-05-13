"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);

  useEffect(() => {
    const DURATION = 2000; // exactly 2 seconds to fill
    const start = performance.now();

    const id = requestAnimationFrame(function tick(now) {
      const p = Math.min(Math.floor(((now - start) / DURATION) * 100), 100);
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        // brief pause at 100% before exit
        setTimeout(() => {
          setExiting(true);
          setTimeout(() => setGone(true), 900);
        }, 200);
      }
    });

    return () => cancelAnimationFrame(id);
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#080808",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        opacity: exiting ? 0 : 1,
        transform: exiting ? "scale(1.045)" : "scale(1)",
        transition: "opacity 0.9s cubic-bezier(0.4,0,0.2,1), transform 0.9s cubic-bezier(0.4,0,0.2,1)",
        willChange: "opacity, transform",
        pointerEvents: exiting ? "none" : "all",
      }}
    >
      {/* ── Top progress line ────────────────────────────────────── */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: 2,
          width: `${progress}%`,
          background: "linear-gradient(to right, #059669, #34d399, #10b981)",
          boxShadow: "0 0 12px rgba(52,211,153,0.6)",
        }}
      />

      {/* ── Corner brackets ──────────────────────────────────────── */}
      <div style={{ position: "absolute", top: 24, left: 24, width: 44, height: 44, borderTop: "1px solid rgba(16,185,129,0.3)", borderLeft: "1px solid rgba(16,185,129,0.3)" }} />
      <div style={{ position: "absolute", top: 24, right: 24, width: 44, height: 44, borderTop: "1px solid rgba(16,185,129,0.3)", borderRight: "1px solid rgba(16,185,129,0.3)" }} />
      <div style={{ position: "absolute", bottom: 24, left: 24, width: 44, height: 44, borderBottom: "1px solid rgba(16,185,129,0.3)", borderLeft: "1px solid rgba(16,185,129,0.3)" }} />
      <div style={{ position: "absolute", bottom: 24, right: 24, width: 44, height: 44, borderBottom: "1px solid rgba(16,185,129,0.3)", borderRight: "1px solid rgba(16,185,129,0.3)" }} />

      {/* ── Centre content (CSS entrance animation) ──────────────── */}
      <div className="loader-content">
        {/* Diamond accent */}
        <div
          style={{
            width: 10,
            height: 10,
            background: "#10b981",
            transform: "rotate(45deg)",
            boxShadow: "0 0 20px rgba(16,185,129,0.8), 0 0 50px rgba(16,185,129,0.3)",
            marginBottom: 32,
          }}
        />

        {/* Brand name */}
        <p
          style={{
            fontSize: "clamp(2.5rem, 6vw, 3.5rem)",
            fontWeight: 800,
            letterSpacing: "-0.02em",
            color: "#ffffff",
            marginBottom: 10,
            lineHeight: 1,
            fontFamily: "var(--font-playfair, ui-serif, Georgia, serif)",
          }}
        >
          Folio<span style={{ color: "#34d399" }}>Craft</span>
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: "0.62rem",
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: "rgba(52,211,153,0.65)",
            marginBottom: 56,
          }}
        >
          Premium Portfolio Templates
        </p>

        {/* Progress bar */}
        <div
          style={{
            position: "relative",
            width: 220,
            height: 1,
            background: "rgba(255,255,255,0.08)",
          }}
        >
          {/* Gold fill */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(to right, #059669, #34d399)",
              boxShadow: "0 0 8px rgba(52,211,153,0.6)",
            }}
          />
          {/* Glowing lead dot */}
          {progress > 0 && progress < 100 && (
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: `${progress}%`,
                width: 7,
                height: 7,
                borderRadius: "50%",
                background: "#6ee7b7",
                boxShadow: "0 0 12px 4px rgba(110,231,183,0.9)",
                transform: "translate(-50%, -50%)",
              }}
            />
          )}
        </div>

        {/* Counter */}
        <p
          style={{
            marginTop: 20,
            fontSize: "0.68rem",
            fontFamily: "ui-monospace, SFMono-Regular, monospace",
            color: "rgba(52,211,153,0.55)",
            letterSpacing: "0.15em",
          }}
        >
          {String(progress).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
}
