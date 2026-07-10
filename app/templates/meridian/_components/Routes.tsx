"use client";

import { WAYPOINTS } from "../_data/portfolio";
import { useReveal } from "../_utils/reveal";

/* Career journey — an enroute airway chart. Lat/long graticule
   background, dashed great-circle legs between waypoint fixes, then
   waypoint cards beneath. */
export default function Routes() {
  const { ref, visible } = useReveal<HTMLDivElement>();

  const W = 1000;
  const H = 420;
  const pts = WAYPOINTS.map((w) => ({ ...w, px: (w.x / 100) * W, py: (w.y / 100) * H }));

  const legs = pts.slice(0, -1).map((p, i) => {
    const n = pts[i + 1];
    const mx = (p.px + n.px) / 2;
    const my = Math.min(p.py, n.py) - 70;
    return { d: `M ${p.px} ${p.py} Q ${mx} ${my} ${n.px} ${n.py}`, key: `${p.code}-${n.code}-${i}` };
  });

  return (
    <section id="routes" className="mrd-routes">
      <div ref={ref} className={`mrd-routes-inner mrd-reveal ${visible ? "mrd-reveal-in" : ""}`}>
        <header className="mrd-routes-head">
          <span className="mrd-routes-kicker">03 · Career route</span>
          <h2 className="mrd-routes-title">Enroute chart, 2012 — today</h2>
          <p className="mrd-routes-blurb">
            Every command starts somewhere. Five waypoints that shaped the way I fly.
          </p>
        </header>

        <div className="mrd-chart" role="img" aria-label="Career route chart from Phoenix to London">
          <svg viewBox={`0 0 ${W} ${H}`} className="mrd-chart-svg" aria-hidden="true">
            {legs.map((leg, i) => (
              <path
                key={leg.key}
                d={leg.d}
                fill="none"
                stroke="rgba(127,212,242,0.55)"
                strokeWidth="2"
                strokeDasharray="7 8"
                className={`mrd-chart-leg ${visible ? "mrd-chart-leg-in" : ""}`}
                style={{ transitionDelay: `${0.15 + i * 0.18}s` }}
              />
            ))}

            {pts.map((p, i) => (
              <g key={`${p.code}-${i}`} className={`mrd-chart-fix ${visible ? "mrd-chart-fix-in" : ""}`} style={{ transitionDelay: `${0.1 + i * 0.18}s` }}>
                <path
                  d={`M ${p.px} ${p.py - 11} L ${p.px + 10} ${p.py + 7} L ${p.px - 10} ${p.py + 7} Z`}
                  fill="none"
                  stroke="#f5a83c"
                  strokeWidth="2.5"
                />
                <circle cx={p.px} cy={p.py} r="2.6" fill="#f5a83c" />
                <text
                  x={p.px}
                  y={p.py - 24}
                  textAnchor="middle"
                  fill="#e8eefb"
                  fontSize="21"
                  fontWeight="700"
                  style={{ fontFamily: "var(--font-mono)" }}
                  letterSpacing="2"
                >
                  {p.code}
                </text>
                <text
                  x={p.px}
                  y={p.py + 30}
                  textAnchor="middle"
                  fill="rgba(232,238,251,0.5)"
                  fontSize="15"
                  style={{ fontFamily: "var(--font-mono)" }}
                >
                  {p.year}
                </text>
              </g>
            ))}

            {/* aircraft marker on the last leg */}
            <g className={`mrd-chart-fix ${visible ? "mrd-chart-fix-in" : ""}`} style={{ transitionDelay: "0.95s" }}>
              <path
                d="M 0 -9 L 7 6 L 0 3 L -7 6 Z"
                fill="#7fd4f2"
                transform={`translate(${(pts[3].px + pts[4].px) / 2}, ${Math.min(pts[3].py, pts[4].py) - 40}) rotate(105)`}
              />
            </g>
          </svg>
        </div>

        <ol className="mrd-waypoints">
          {WAYPOINTS.map((w, i) => (
            <li key={`${w.code}-${w.year}`} className="mrd-waypoint" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="mrd-waypoint-top">
                <span className="mrd-waypoint-code">{w.code}</span>
                <span className="mrd-waypoint-year">{w.year}</span>
              </div>
              <span className="mrd-waypoint-city">{w.city}</span>
              <p className="mrd-waypoint-note">{w.milestone}</p>
            </li>
          ))}
        </ol>
      </div>

      <style>{`
        .mrd-routes {
          padding: clamp(56px, 9vw, 110px) 20px;
          background-color: var(--mrd-panel);
          border-top: 1px solid var(--mrd-line-soft);
          border-bottom: 1px solid var(--mrd-line-soft);
          background-image:
            linear-gradient(rgba(127,212,242,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(127,212,242,0.05) 1px, transparent 1px);
          background-size: 56px 56px;
        }
        .mrd-routes-inner { max-width: var(--max-w); margin: 0 auto; }
        .mrd-routes .mrd-reveal { opacity: 0; transform: translateY(18px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .mrd-routes .mrd-reveal-in { opacity: 1; transform: translateY(0); }
        .mrd-routes-head { margin-bottom: 30px; max-width: 640px; }
        .mrd-routes-kicker {
          font-family: var(--font-mono);
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: var(--mrd-ice);
        }
        .mrd-routes-title {
          margin: 8px 0 10px;
          font-family: var(--font-display);
          font-weight: 700;
          font-size: clamp(28px, 4.6vw, 42px);
          letter-spacing: -0.01em;
          color: var(--mrd-text);
        }
        .mrd-routes-blurb { margin: 0; font-size: 15px; line-height: 1.7; color: var(--mrd-text-soft); }
        .mrd-chart {
          border: 1px solid var(--mrd-line);
          border-radius: 14px;
          background:
            radial-gradient(ellipse at 30% 20%, rgba(127,212,242,0.06), transparent 60%),
            var(--mrd-bg);
          padding: clamp(10px, 2vw, 24px);
          overflow: hidden;
        }
        .mrd-chart-svg { width: 100%; height: auto; display: block; min-height: 180px; }
        .mrd-chart-leg { opacity: 0; transition: opacity 0.8s ease; }
        .mrd-chart-leg-in { opacity: 1; }
        .mrd-chart-fix { opacity: 0; transform: translateY(6px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .mrd-chart-fix-in { opacity: 1; transform: translateY(0); }
        .mrd-waypoints {
          list-style: none;
          margin: 26px 0 0;
          padding: 0;
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }
        .mrd-waypoint {
          border: 1px solid var(--mrd-line-soft);
          border-radius: 12px;
          background-color: rgba(7, 12, 22, 0.6);
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 6px;
          opacity: 0;
          transform: translateY(12px);
          transition: opacity 0.6s ease, transform 0.6s ease, border-color 0.2s ease;
        }
        .mrd-reveal-in .mrd-waypoint { opacity: 1; transform: translateY(0); }
        .mrd-waypoint:hover { border-color: var(--mrd-amber-dim); }
        .mrd-waypoint-top { display: flex; align-items: baseline; justify-content: space-between; }
        .mrd-waypoint-code { font-family: var(--font-mono); font-size: 17px; font-weight: 700; letter-spacing: 0.14em; color: var(--mrd-amber); }
        .mrd-waypoint-year { font-family: var(--font-mono); font-size: 11.5px; color: var(--mrd-text-faint); }
        .mrd-waypoint-city { font-size: 12.5px; font-weight: 600; color: var(--mrd-text); }
        .mrd-waypoint-note { margin: 0; font-size: 13px; line-height: 1.6; color: var(--mrd-text-soft); }
        @media (min-width: 640px) {
          .mrd-waypoints { grid-template-columns: repeat(2, minmax(0, 1fr)); }
        }
        @media (min-width: 1024px) {
          .mrd-waypoints { grid-template-columns: repeat(5, minmax(0, 1fr)); }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-routes .mrd-reveal, .mrd-chart-leg, .mrd-chart-fix, .mrd-waypoint { opacity: 1; transform: none; transition: none; }
        }
      `}</style>
    </section>
  );
}
