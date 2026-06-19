"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="torque-skip-link">
        Skip to main content
      </a>
      <style>{`
        .torque-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-family: inherit;
          font-size: 14px;
          background: #ff6a1f;
          color: #0b0e13;
          padding: 8px 16px;
          border-radius: 4px;
          text-decoration: none;
          font-weight: 700;
        }
        .torque-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
