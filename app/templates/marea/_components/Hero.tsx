"use client";

import { useEffect, useRef, useState } from "react";
import type { StaticImageData } from "next/image";
import { HERO_IMAGES } from "../_data/portfolio";

const SPOTLIGHT_R = 260;
const BUBBLES = [
  { left: "8%", size: 6, delay: 0, duration: 9 },
  { left: "18%", size: 10, delay: 1.4, duration: 11 },
  { left: "29%", size: 5, delay: 3.1, duration: 8 },
  { left: "44%", size: 8, delay: 0.6, duration: 10.5 },
  { left: "61%", size: 6, delay: 2.3, duration: 9.5 },
  { left: "74%", size: 11, delay: 4, duration: 12 },
  { left: "86%", size: 5, delay: 1.8, duration: 8.5 },
  { left: "94%", size: 7, delay: 3.6, duration: 10 },
];

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
        backgroundColor: "#04141d",
      }}
    >
      <div style={{ position: "absolute", inset: 0, height: "100dvh" }}>
        {/* Base image — slow Ken Burns zoom-out */}
        <div
          aria-hidden="true"
          className="marea-hero-zoom"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 10,
            backgroundImage: `url(${HERO_IMAGES.base.src})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        />

        {/* Teal caustic-light wash over the base image */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            zIndex: 15,
            backgroundImage: "linear-gradient(180deg, rgba(4,20,29,0.15) 0%, rgba(4,20,29,0.55) 78%, rgba(4,20,29,0.85) 100%)",
          }}
        />

        <RevealLayer image={HERO_IMAGES.reveal} cursorX={cursorPos.x} cursorY={cursorPos.y} />

        {/* Rising bubble particles */}
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, zIndex: 25, overflow: "hidden", pointerEvents: "none" }}>
          {BUBBLES.map((b, i) => (
            <span
              key={i}
              className="marea-bubble"
              style={{
                left: b.left,
                width: `${b.size}px`,
                height: `${b.size}px`,
                animationDelay: `${b.delay}s`,
                animationDuration: `${b.duration}s`,
              }}
            />
          ))}
        </div>

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
              className="marea-hero-anim marea-hero-reveal"
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
              The tide keeps
            </span>
            <span
              className="marea-hero-anim marea-hero-reveal"
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
              its own record
            </span>
          </h1>
        </div>

        {/* Bottom-left paragraph */}
        <div
          className="marea-hero-anim marea-hero-fade marea-hero-left"
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
            Move your cursor across the canopy — every survey in this portfolio starts with looking closer at what&apos;s actually underwater.
          </p>
        </div>

        {/* Bottom-right block */}
        <div
          className="marea-hero-anim marea-hero-fade marea-hero-right"
          style={{
            position: "absolute",
            bottom: "40px",
            zIndex: 50,
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "16px",
            animationDelay: "0.85s",
          }}
        >
          <p style={{ fontSize: "13px", color: "rgba(255,255,255,0.8)", lineHeight: 1.6, margin: 0, maxWidth: "100%" }}>
            From kelp canopies to coral reefs to the animals that depend on both — this is the field data behind the write-ups.
          </p>
          <a href="#research" className="marea-dive-btn">View Research</a>
        </div>
      </div>

      <style>{`
        @keyframes mareaHeroReveal {
          0% { opacity: 0; transform: translateY(28px); filter: blur(12px); }
          100% { opacity: 1; transform: translateY(0); filter: blur(0); }
        }
        @keyframes mareaHeroFadeUp {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes mareaHeroZoom {
          0% { transform: scale(1.12); }
          100% { transform: scale(1); }
        }
        @keyframes mareaBubbleRise {
          0% { transform: translateY(0) scale(1); opacity: 0; }
          10% { opacity: 0.55; }
          85% { opacity: 0.4; }
          100% { transform: translateY(-100vh) scale(1.3); opacity: 0; }
        }
        .marea-hero-anim { opacity: 0; animation-fill-mode: forwards; animation-timing-function: cubic-bezier(0.16,1,0.3,1); }
        .marea-hero-reveal { animation-name: mareaHeroReveal; animation-duration: 1.1s; }
        .marea-hero-fade { animation-name: mareaHeroFadeUp; animation-duration: 1s; }
        .marea-hero-zoom { animation: mareaHeroZoom 1.8s cubic-bezier(0.16,1,0.3,1) forwards; }
        .marea-bubble {
          position: absolute;
          bottom: -20px;
          border-radius: 50%;
          background: radial-gradient(circle at 35% 30%, rgba(255,255,255,0.9), rgba(160,230,220,0.15) 70%, transparent 100%);
          border: 1px solid rgba(255,255,255,0.25);
          animation-name: mareaBubbleRise;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
        }
        .marea-dive-btn {
          background-color: #2fe2c4;
          color: #04141d;
          font-family: var(--font-body, sans-serif);
          font-size: 14px;
          font-weight: 600;
          padding: 13px 30px;
          border-radius: 100px;
          text-decoration: none;
          display: inline-block;
          transition: background-color 0.2s, transform 0.2s, box-shadow 0.2s;
          pointer-events: auto;
        }
        .marea-dive-btn:hover { background-color: #1cb89f; transform: scale(1.03); box-shadow: 0 10px 26px rgba(47,226,196,0.3); }
        .marea-dive-btn:active { transform: scale(0.95); }
        .marea-hero-right {
          left: 20px;
          right: 20px;
        }
        @media (max-width: 639px) {
          .marea-hero-left { display: none; }
        }
        @media (min-width: 640px) {
          .marea-hero-right {
            left: auto;
            right: 40px;
            max-width: 260px;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .marea-hero-anim, .marea-hero-zoom, .marea-bubble { animation: none; opacity: 1; }
        }
      `}</style>
    </section>
  );
}

function RevealLayer({ image, cursorX, cursorY }: { image: StaticImageData; cursorX: number; cursorY: number }) {
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
        zIndex: 20,
        backgroundImage: `url(${image.src})`,
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
