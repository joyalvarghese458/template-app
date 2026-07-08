"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="esc-skip-link">
        Skip to main content
      </a>
      <style>{`
        .esc-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          font-weight: 600;
          background: #c9a24b;
          color: #12100d;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .esc-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
