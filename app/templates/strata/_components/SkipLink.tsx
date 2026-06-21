"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="strata-skip-link">
        Skip to main content
      </a>
      <style>{`
        .strata-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'IBM Plex Mono', monospace;
          font-size: 14px;
          font-weight: 600;
          background: #f15a24;
          color: #1f2421;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .strata-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
