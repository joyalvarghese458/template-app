"use client";

export default function SkipLink() {
  return (
    <>
      <a href="#main-content" className="ascend-skip-link">
        Skip to main content
      </a>
      <style>{`
        .ascend-skip-link {
          position: absolute;
          left: -9999px;
          top: 16px;
          width: 1px;
          height: 1px;
          overflow: hidden;
          z-index: -1;
          font-size: 14px;
          font-weight: 600;
          background: linear-gradient(120deg, #ff7a59, #ff5fa2, #7c5cff);
          color: #fff;
          padding: 10px 18px;
          border-radius: 100px;
          text-decoration: none;
        }
        .ascend-skip-link:focus {
          left: 16px;
          width: auto;
          height: auto;
          z-index: 9999;
        }
      `}</style>
    </>
  );
}
