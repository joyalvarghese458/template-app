"use client";

import { useEffect, useState } from "react";

// Progress-driven status words — feels varied without being chatty.
const STATUS_WORDS = [
  { until: 25, label: "Loading" },
  { until: 55, label: "Crafting" },
  { until: 80, label: "Polishing" },
  { until: 96, label: "Almost there" },
  { until: 101, label: "Ready" },
];

function statusFor(progress: number) {
  return STATUS_WORDS.find((s) => progress < s.until)?.label ?? "Loading";
}

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);
  const [exiting, setExiting] = useState(false);
  const [gone, setGone] = useState(false);
  const [dots, setDots] = useState("");

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

  // Trailing dot animation — "" → "." → ".." → "..." every 350ms.
  useEffect(() => {
    const id = setInterval(() => {
      setDots((d) => (d.length >= 3 ? "" : d + "."));
    }, 350);
    return () => clearInterval(id);
  }, []);

  if (gone) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9999,
        background: "#ffffff",
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
          background: "linear-gradient(to right, #1d4ed8, #3b82f6, #2563eb)",
          boxShadow: "0 0 12px rgba(59,130,246,0.6)",
        }}
      />

      {/* ── Corner brackets ──────────────────────────────────────── */}
      <div style={{ position: "absolute", top: 24, left: 24, width: 44, height: 44, borderTop: "1px solid rgba(37,99,235,0.35)", borderLeft: "1px solid rgba(37,99,235,0.35)" }} />
      <div style={{ position: "absolute", top: 24, right: 24, width: 44, height: 44, borderTop: "1px solid rgba(37,99,235,0.35)", borderRight: "1px solid rgba(37,99,235,0.35)" }} />
      <div style={{ position: "absolute", bottom: 24, left: 24, width: 44, height: 44, borderBottom: "1px solid rgba(37,99,235,0.35)", borderLeft: "1px solid rgba(37,99,235,0.35)" }} />
      <div style={{ position: "absolute", bottom: 24, right: 24, width: 44, height: 44, borderBottom: "1px solid rgba(37,99,235,0.35)", borderRight: "1px solid rgba(37,99,235,0.35)" }} />

      {/* ── Centre content (CSS entrance animation) ──────────────── */}
      <div className="loader-content">
        {/* Diamond accent */}
        <div
          style={{
            width: 10,
            height: 10,
            background: "#2563eb",
            transform: "rotate(45deg)",
            boxShadow: "0 0 20px rgba(37,99,235,0.8), 0 0 50px rgba(37,99,235,0.3)",
            marginBottom: 32,
          }}
        />

        {/* Animated status word — cycles with progress, dots animate independently */}
        <p
          key={statusFor(progress)}
          style={{
            fontSize: "clamp(1.25rem, 2.8vw, 1.75rem)",
            fontWeight: 600,
            letterSpacing: "-0.01em",
            color: "#000000",
            marginBottom: 10,
            lineHeight: 1.1,
            fontFamily: "var(--font-playfair, ui-serif, Georgia, serif)",
            fontStyle: "italic",
            animation: "loaderEnter 0.45s cubic-bezier(0.4, 0, 0.2, 1) both",
          }}
        >
          {statusFor(progress)}
          <span
            aria-hidden="true"
            style={{
              display: "inline-block",
              width: "0.9em",
              textAlign: "left",
              color: "#2563eb",
              fontStyle: "normal",
            }}
          >
            {dots}
          </span>
        </p>

        {/* Tagline */}
        <p
          style={{
            fontSize: "0.62rem",
            textTransform: "uppercase",
            letterSpacing: "0.28em",
            color: "rgba(37,99,235,0.75)",
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
            background: "rgba(0,0,0,0.1)",
          }}
        >
          {/* Blue fill */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              height: "100%",
              width: `${progress}%`,
              background: "linear-gradient(to right, #1d4ed8, #3b82f6)",
              boxShadow: "0 0 8px rgba(59,130,246,0.6)",
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
                background: "#3b82f6",
                boxShadow: "0 0 12px 4px rgba(59,130,246,0.9)",
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
            color: "rgba(37,99,235,0.65)",
            letterSpacing: "0.15em",
          }}
        >
          {String(progress).padStart(3, "0")}
        </p>
      </div>
    </div>
  );
}
