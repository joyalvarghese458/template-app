export default function Grain() {
  return (
    <div className="wl-grain" aria-hidden="true">
      <svg width="100%" height="100%">
        <filter id="wl-noise">
          <feTurbulence type="fractalNoise" baseFrequency="0.85" numOctaves="2" stitchTiles="stitch" />
          <feColorMatrix type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.05 0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#wl-noise)" />
      </svg>

      <style>{`
        .wl-grain {
          position: fixed;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          opacity: 0.5;
          mix-blend-mode: overlay;
        }
      `}</style>
    </div>
  );
}
