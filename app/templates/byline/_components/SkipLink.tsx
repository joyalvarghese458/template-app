"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="byline-skip-link">
        Skip to main content
      </a>
      <style>{`
        .byline-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Special Elite', monospace;
          font-size: 14px;
          background: #b3231a;
          color: #f3efe6;
          padding: 8px 16px;
          border-radius: 2px;
          text-decoration: none;
        }
        .byline-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
