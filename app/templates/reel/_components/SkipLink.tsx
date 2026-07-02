"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="rl-skip-link">
        Skip to main content
      </a>
      <style>{`
        .rl-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          background: #d1263f;
          color: #f3ece1;
          padding: 8px 16px;
          border-radius: 6px;
          text-decoration: none;
        }
        .rl-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
