"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="ctr-skip-link">
        Skip to main content
      </a>
      <style>{`
        .ctr-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Work Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          background: #4b6b3f;
          color: #f3f0e5;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .ctr-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
