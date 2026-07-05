"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="marea-skip-link">
        Skip to main content
      </a>
      <style>{`
        .marea-skip-link {
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
          background: #2fe2c4;
          color: #04141d;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .marea-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
