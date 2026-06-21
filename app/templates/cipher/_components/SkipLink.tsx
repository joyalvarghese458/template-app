"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="cipher-skip-link">
        Skip to main content
      </a>
      <style>{`
        .cipher-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: 'JetBrains Mono', monospace;
          font-size: 14px;
          background: #39ff8c;
          color: #070a08;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .cipher-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
