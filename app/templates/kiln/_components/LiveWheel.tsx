"use client";

// A continuously spinning potter's wheel with a vessel silhouette that loops
// through four throwing stages. Pure CSS keyframes — no timers, no client
// state, no Date — so it's identical on the server render and every client
// render and can never trigger a hydration mismatch.
const STAGES = [
  { name: "kln-shape-1", d: "M50 118 C38 118 34 108 34 98 C34 90 38 86 50 86 C62 86 66 90 66 98 C66 108 62 118 50 118 Z" },
  { name: "kln-shape-2", d: "M42 122 L42 70 C42 64 46 60 50 60 C54 60 58 64 58 70 L58 122 Z" },
  { name: "kln-shape-3", d: "M28 96 C28 84 38 78 50 78 C62 78 72 84 72 96 C72 106 64 122 50 122 C36 122 28 106 28 96 Z" },
  { name: "kln-shape-4", d: "M40 122 L38 84 C38 70 42 56 50 50 C58 56 62 70 62 84 L60 122 Z" },
];

export default function LiveWheel() {
  return (
    <div className="kln-wheel">
      <div className="kln-wheel-disc">
        <svg viewBox="0 0 200 200" className="kln-wheel-grooves" aria-hidden="true">
          {[86, 70, 54, 38].map((r) => (
            <circle key={r} cx="100" cy="100" r={r} fill="none" stroke="rgba(58,46,34,0.14)" strokeWidth="1" />
          ))}
        </svg>
      </div>

      <svg viewBox="0 0 100 140" className="kln-wheel-vessel" aria-hidden="true">
        {STAGES.map((s) => (
          <path key={s.name} d={s.d} className={`kln-vessel-shape ${s.name}`} fill="#c15f3c" />
        ))}
      </svg>

      <style>{`
        .kln-wheel {
          position: relative;
          width: clamp(220px, 30vw, 300px);
          aspect-ratio: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .kln-wheel-disc {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: radial-gradient(circle at 42% 38%, #e6d7bf, #c9b48c 55%, #a68a5d 100%);
          box-shadow: 0 30px 70px -18px rgba(58,46,34,0.4), inset 0 0 0 1px rgba(58,46,34,0.14);
          animation: kln-spin 6s linear infinite;
        }
        .kln-wheel-grooves { width: 100%; height: 100%; display: block; }
        .kln-wheel-vessel {
          position: relative;
          width: 42%;
          height: 60%;
          filter: drop-shadow(0 12px 18px rgba(58,46,34,0.3));
        }
        .kln-vessel-shape { opacity: 0; transform-origin: 50px 122px; }
        .kln-shape-1 { animation: kln-shape-1 8s ease-in-out infinite; }
        .kln-shape-2 { animation: kln-shape-2 8s ease-in-out infinite; }
        .kln-shape-3 { animation: kln-shape-3 8s ease-in-out infinite; }
        .kln-shape-4 { animation: kln-shape-4 8s ease-in-out infinite; }
        @keyframes kln-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes kln-shape-1 { 0%, 3% { opacity: 0; } 7%, 19% { opacity: 1; } 24%, 100% { opacity: 0; } }
        @keyframes kln-shape-2 { 0%, 26% { opacity: 0; } 30%, 44% { opacity: 1; } 49%, 100% { opacity: 0; } }
        @keyframes kln-shape-3 { 0%, 51% { opacity: 0; } 55%, 69% { opacity: 1; } 74%, 100% { opacity: 0; } }
        @keyframes kln-shape-4 { 0%, 76% { opacity: 0; } 80%, 94% { opacity: 1; } 99%, 100% { opacity: 0; } }
        @media (prefers-reduced-motion: reduce) {
          .kln-wheel-disc { animation: none; }
          .kln-vessel-shape { animation: none; }
          .kln-shape-2 { opacity: 1; }
        }
      `}</style>
    </div>
  );
}
