function buildTrace(seed: number, points = 96, width = 800, midY = 90, amp = 1) {
  let d = "";
  for (let i = 0; i <= points; i++) {
    const t = i / points;
    const x = t * width;
    const y =
      midY +
      Math.sin(t * Math.PI * 2 * 3 + seed) * 26 * amp +
      Math.sin(t * Math.PI * 2 * 7.3 + seed * 1.7) * 11 * amp +
      Math.sin(t * Math.PI * 2 * 1.2 + seed * 0.6) * 16 * amp;
    d += `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)} `;
  }
  return d.trim();
}

const TRACE_A = buildTrace(0.4, 96, 800, 90, 1);
const TRACE_B = buildTrace(2.1, 96, 800, 90, 0.62);
const TRACE_C = buildTrace(4.8, 96, 800, 90, 0.34);

export default function Waveform() {
  return (
    <div className="wl-scope">
      <div className="wl-scope-head">
        <span className="wl-scope-rec">
          <span className="wl-scope-rec-dot" /> LIVE SIGNAL
        </span>
        <span className="wl-scope-freq">48kHz / 24-bit</span>
      </div>

      <svg viewBox="0 0 800 180" className="wl-scope-svg" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        {/* grid */}
        <g className="wl-scope-grid">
          {Array.from({ length: 9 }).map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1={0} x2={i * 100} y2={180} />
          ))}
          {Array.from({ length: 5 }).map((_, i) => (
            <line key={`h${i}`} x1={0} y1={i * 45} x2={800} y2={i * 45} />
          ))}
        </g>

        <line x1="0" y1="90" x2="800" y2="90" className="wl-scope-baseline" />

        <g className="wl-trace-track wl-trace-track-c">
          <path d={TRACE_C} />
          <path d={TRACE_C} transform="translate(800,0)" />
        </g>
        <g className="wl-trace-track wl-trace-track-b">
          <path d={TRACE_B} />
          <path d={TRACE_B} transform="translate(800,0)" />
        </g>
        <g className="wl-trace-track wl-trace-track-a">
          <path d={TRACE_A} />
          <path d={TRACE_A} transform="translate(800,0)" />
        </g>
      </svg>

      <div className="wl-scope-sweep" />

      <style>{`
        .wl-scope {
          position: relative;
          width: 100%;
          border: 1px solid rgba(242,242,238,0.12);
          border-radius: 14px;
          background-color: #0d0d10;
          overflow: hidden;
          padding: 16px 18px 0;
        }
        .wl-scope-head {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 8px;
        }
        .wl-scope-rec {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 0.08em;
          color: rgba(242,242,238,0.55);
        }
        .wl-scope-rec-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #ff5252;
          animation: wl-rec-blink 1.6s ease-in-out infinite;
        }
        .wl-scope-freq {
          font-family: var(--font-mono, monospace);
          font-size: 10px;
          color: rgba(242,242,238,0.3);
        }
        .wl-scope-svg { display: block; width: 100%; height: clamp(180px, 30vw, 260px); }
        .wl-scope-grid line { stroke: rgba(242,242,238,0.06); stroke-width: 1; }
        .wl-scope-baseline { stroke: rgba(242,242,238,0.14); stroke-width: 1; stroke-dasharray: 2 4; }
        .wl-trace-track path { fill: none; stroke-linecap: round; stroke-linejoin: round; }
        .wl-trace-track-a { animation: wl-scroll 7s linear infinite; }
        .wl-trace-track-a path { stroke: #c6ff3d; stroke-width: 2; filter: drop-shadow(0 0 6px rgba(198,255,61,0.55)); }
        .wl-trace-track-b { animation: wl-scroll 11s linear infinite; }
        .wl-trace-track-b path { stroke: #c6ff3d; stroke-width: 1.4; opacity: 0.4; }
        .wl-trace-track-c { animation: wl-scroll 17s linear infinite reverse; }
        .wl-trace-track-c path { stroke: #f2f2ee; stroke-width: 1; opacity: 0.16; }
        @keyframes wl-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-800px); }
        }
        .wl-scope-sweep {
          position: absolute;
          top: 0;
          bottom: 0;
          left: -20%;
          width: 20%;
          background-image: linear-gradient(90deg, transparent, rgba(242,242,238,0.05), transparent);
          animation: wl-sweep 5s linear infinite;
        }
        @keyframes wl-sweep {
          from { transform: translateX(0); }
          to { transform: translateX(600%); }
        }
        @keyframes wl-rec-blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.25; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wl-trace-track, .wl-scope-sweep, .wl-scope-rec-dot { animation: none; }
        }
      `}</style>
    </div>
  );
}
