"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="surge-skip-link">
        Skip to main content
      </a>
      <style>{`
        .surge-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Hanken Grotesk', sans-serif;
          font-size: 14px;
          font-weight: 600;
          background: #2954ff;
          color: #ffffff;
          padding: 8px 16px;
          border-radius: 100px;
          text-decoration: none;
        }
        .surge-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
