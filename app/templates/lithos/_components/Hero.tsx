"use client";

import { useEffect, useRef, useState } from "react";
import { HERO_IMAGES } from "../_data/portfolio";

const SPOTLIGHT_R = 260;

export default function Hero() {
  const mouse = useRef({ x: -999, y: -999 });
  const smooth = useRef({ x: -999, y: -999 });
  const rafRef = useRef<number | undefined>(undefined);
  const [cursorPos, setCursorPos] = useState({ x: -999, y: -999 });

  useEffect(() => {
    const onMouseMove = (e: MouseEvent) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      mouse.current.x = t.clientX;
      mouse.current.y = t.clientY;
    };
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const loop = () => {
      smooth.current.x += (mouse.current.x - smooth.current.x) * 0.1;
      smooth.current.y += (mouse.current.y - smooth.current.y) * 0.1;
      setCursorPos({ x: smooth.current.x, y: smooth.current.y });
      rafRef.current = requestAnimationFrame(loop);
    };
    rafRef.current = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("touchmove", onTouchMove);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section
      id="home"
      style={{
        position: "relative",
        width: "100%",
        overflow: "hidden",
        height: "100vh",
        backgroundColor: "#000",
      }}
    >
      <div style={{ position: "absolute", inset: 0, height: "100dvh" }}>
        {/* Base image — slow Ken Burns zoom-out */}
        <div
          aria-hidden="true"
          className="lithos-hero-zoom"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            backgroundImage: `url(${HERO_IMAGES.base})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        <RevealLayer image={HERO_IMAGES.reveal} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        {/* Heading */}
        <div
          style={{
            position: "absolute",
            top: "14%",
            left: 0,
            right: 0,
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            padding: "0 20px",
            pointerEvents: "none",
          }}
        >
          <h1 style={{ color: "#fff", lineHeight: 0.95, margin: 0 }}>
            <span
              className="lithos-hero-anim lithos-hero-reveal"
              style={{
                display: "block",
                fontFamily: "var(--font-display, serif)",
                fontStyle: "italic",
                fontWeight: 400,
                fontSize: "clamp(40px, 11vw, 96px)",
                letterSpacing: "-0.05em",
                animationDelay: "0.25s",
              }}
            >
              Layers hold
            </span>
            <span
              className="lithos-hero-anim lithos-hero-reveal"
              style={{
                display: "block",
                fontFamily: "var(--font-body, sans-serif)",
                fontWeight: 400,
                fontSize: "clamp(40px, 11vw, 96px)",
                letterSpacing: "-0.08em",
                marginTop: "-4px",
                animationDelay: "0.42s",
              }}
            >
              tales of time
            </span>
          </h1>
        </div>

        {/* Bottom-left paragraph */}
        <div
          className="lithos-hero-anim lithos-hero-fade lithos-hero-left"
          style={{
            position: "absolute",
            bottom: "56px",
            left: "40px",
            maxWidth: "260px",
            zIndex: 50,
            animationDelay: "0.7s",
          }}
        >
          <p style={{ fontSize: "14px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0 }}>
            Every layer of sediment records a chapter of our planet, from ancient seabeds to drifting ash, layered across millions of years beneath us.
          </p>
        </div>

        {/* Bottom-right block */}
        <div
          className="lithos-hero-anim lithos-hero-fade lithos-hero-right"
          style={{
            position: "absolute",
            bottom: "40px",
            left: "20px",
            right: "20px",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            animationDelay: "0.85s",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0, maxWidth: "100%" }}>
            Our interactive maps let you peel back the crust to trace how stones, fossils, and deep time combine to shape the ground beneath your feet.
          </p>
          <a href="#research" className="lithos-dig-btn">Start Digging</a>
        </div>
      </div>

      <style>{`
        @keyframes lithosHeroReveal {
          0% { opacity: 0; transform: translateY(28px); filter: blur(12px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes lithosHeroFadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes lithosHeroZoom {
          0% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        .lithos-hero-anim { opacity: 0; animation-fill-mode: forwards; animation-timing-function: cubic-bezier(0.16,1,0.3,1); }
        .lithos-hero-reveal { animation-name: lithosHeroReveal; animation-duration: 1.1s; }
        .lithos-hero-fade { animation-name: lithosHeroFadeUp; animation-duration: 1s; }
        .lithos-hero-zoom { animation: lithosHeroZoom 1.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .lithos-dig-btn {
          background-color: #e8702a;
          color: #fff;
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 500;
          padding: 13px 30px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
          pointer-events: auto;
        }
        .lithos-dig-btn:hover { background-color: #d2611f; transform: scale(1.03); box-shadow: 0 10px 26px rgba(232,112,42,0.3); }
        .lithos-dig-btn:active { transform: scale(0.95); }
        @media (max-width: 639px) {
          .lithos-hero-left { display: none; }
        }
        @media (min-width: 640px) {
          .lithos-hero-right {
            left: auto;
            right: 40px;
            max-width: 260px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .lithos-hero-anim, .lithos-hero-zoom { animation: none; opacity: 1; }
        }
      `}</style>
    </section>
  );
}

function RevealLayer({ image, cursorX, cursorY }: { image: string; cursorX: number; cursorY: number }) {
  // A plain CSS radial-gradient mask centered on the live cursor position —
  // recomputed as a cheap string each frame, no canvas/toDataURL re-encode needed.
  const maskGradient = `radial-gradient(circle ${SPOTLIGHT_R}px at ${cursorX}px ${cursorY}px,
    rgba(255,255,255,1) 0%,
    rgba(255,255,255,1) 40%,
    rgba(255,255,255,0.75) 60%,
    rgba(255,255,255,0.4) 75%,
    rgba(255,255,255,0.12) 88%,
    rgba(255,255,255,0) 100%)`;

  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        zIndex: 30,
        backgroundImage: `url(${image})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        pointerEvents: "none",
        maskImage: maskGradient,
        WebkitMaskImage: maskGradient,
      }}
    />
  );
}
