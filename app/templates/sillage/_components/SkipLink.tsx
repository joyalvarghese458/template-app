"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="sil-skip-link">
        Skip to main content
      </a>
      <style>{`
        .sil-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'Jost', sans-serif;
          font-size: 14px;
          font-weight: 600;
          background: #b6752c;
          color: #faf5ea;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .sil-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
