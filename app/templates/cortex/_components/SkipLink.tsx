"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="cortex-skip-link">
        Skip to main content
      </a>
      <style>{`
        .cortex-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Fira Code', monospace;
          font-size: 14px;
          background: #8b5cf6;
          color: #0a0e17;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .cortex-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
