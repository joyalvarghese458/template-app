"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="vtg-skip-link">
        Skip to main content
      </a>
      <style>{`
        .vtg-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Manrope', sans-serif;
          font-size: 14px;
          font-weight: 700;
          background: #0f6b56;
          color: #f6f3ea;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
        }
        .vtg-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
