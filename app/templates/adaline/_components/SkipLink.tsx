"use client";

export default function SkipLink() {
  return (
    <>
      <a
        href="#main-content"
        className="adaline-skip-link"
      >
        Skip to main content
      </a>
      <style>{`
        .adaline-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: inherit;
          font-size: 14px;
          background: #4a3212;
          color: #fbfdf6;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
        }
        .adaline-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
