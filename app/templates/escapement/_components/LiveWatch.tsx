"use client";

import { useEffect, useState } from "react";

const TICKS = Array.from({ length: 60 }, (_, i) => i);

// Renders at a fixed 10:10 pose (the classic watch-photography position) on
// first paint — identical on server and client — then, once mounted, starts
// a real-time tick every second. The jump from "posed" to "live" is a
// deliberate reveal, not a bug: it reads as the watch waking up.
export default function LiveWatch() {
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
    const id = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const hours = now ? now.getHours() % 12 : 10;
  const minutes = now ? now.getMinutes() : 10;
  const seconds = now ? now.getSeconds() : 48;

  const hourDeg = hours * 30 + minutes * 0.5;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const secondDeg = seconds * 6;

  return (
    <div className="esc-watch">
      <div className="esc-watch-bezel">
        <svg viewBox="0 0 200 200" className="esc-watch-face" aria-hidden="true">
          <circle cx="100" cy="100" r="98" fill="#1a1610" stroke="#3a3122" strokeWidth="1" />
          <circle cx="100" cy="100" r="82" fill="none" stroke="rgba(242,234,217,0.08)" strokeWidth="1" />

          {TICKS.map((i) => {
            const isHour = i % 5 === 0;
            const angle = (i * 6 * Math.PI) / 180;
            const rOuter = 88;
            const rInner = isHour ? 76 : 82;
            // Math.sin/cos aren't guaranteed bit-identical across JS engines,
            // so Node's SSR pass and the browser's hydration pass can compute
            // last-digit-different floats here. Round to a fixed precision
            // so both sides serialize to the same string and hydration matches.
            const x1 = (100 + rOuter * Math.sin(angle)).toFixed(2);
            const y1 = (100 - rOuter * Math.cos(angle)).toFixed(2);
            const x2 = (100 + rInner * Math.sin(angle)).toFixed(2);
            const y2 = (100 - rInner * Math.cos(angle)).toFixed(2);
            return (
              <line
                key={i}
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={isHour ? "#e8c876" : "rgba(242,234,217,0.35)"}
                strokeWidth={isHour ? 2.2 : 1}
                strokeLinecap="round"
              />
            );
          })}

          <text x="100" y="60" textAnchor="middle" fill="#c9a24b" fontSize="8" fontFamily="'Space Mono', monospace" letterSpacing="1.5">
            ATELIER VOSS
          </text>
          <text x="100" y="146" textAnchor="middle" fill="rgba(242,234,217,0.4)" fontSize="6.5" fontFamily="'Space Mono', monospace" letterSpacing="1">
            LE LOCLE · SUISSE
          </text>

          <line x1="100" y1="100" x2="100" y2="58" stroke="#f2ead9" strokeWidth="4" strokeLinecap="round" transform={`rotate(${hourDeg} 100 100)`} />
          <line x1="100" y1="100" x2="100" y2="38" stroke="#f2ead9" strokeWidth="2.6" strokeLinecap="round" transform={`rotate(${minuteDeg} 100 100)`} />
          <line x1="100" y1="112" x2="100" y2="30" stroke="#c9765a" strokeWidth="1.2" strokeLinecap="round" transform={`rotate(${secondDeg} 100 100)`} />

          <circle cx="100" cy="100" r="4.5" fill="#e8c876" />
          <circle cx="100" cy="100" r="1.6" fill="#12100d" />
        </svg>
      </div>

      <style>{`
        .esc-watch {
          position: relative;
          width: clamp(220px, 30vw, 300px);
          aspect-ratio: 1;
          border-radius: 50%;
          padding: 10px;
          background: linear-gradient(155deg, #cfa863, #7a5f2e 45%, #4a3a1c);
          box-shadow: 0 30px 70px -18px rgba(0,0,0,0.65), inset 0 0 0 1px rgba(242,234,217,0.15);
        }
        .esc-watch-bezel {
          width: 100%;
          height: 100%;
          border-radius: 50%;
          background: #12100d;
          box-shadow: inset 0 0 0 2px rgba(0,0,0,0.6), inset 0 2px 14px rgba(0,0,0,0.7);
          overflow: hidden;
        }
        .esc-watch-face { width: 100%; height: 100%; display: block; }
      `}</style>
    </div>
  );
}
