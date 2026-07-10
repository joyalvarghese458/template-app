"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="vd-skip-link">
        Skip to main content
      </a>
      <style>{`
        .vd-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 700;
          background: #b6903f;
          color: #0d0d10;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
        }
        .vd-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
