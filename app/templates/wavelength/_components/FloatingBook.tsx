"use client";

import { useEffect, useState } from "react";

export default function FloatingBook() {
  const [pastIntro, setPastIntro] = useState(false);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const intro = document.getElementById("intro");
    const contact = document.getElementById("contact");
    if (!intro || !contact) return;

    const introObserver = new IntersectionObserver(
      ([entry]) => setPastIntro(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    const contactObserver = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { threshold: 0.2 },
    );
    introObserver.observe(intro);
    contactObserver.observe(contact);
    return () => {
      introObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <a
      href="#contact"
      className={`wl-float-book ${pastIntro && !inContact ? "wl-float-book-visible" : ""}`}
    >
      <span className="wl-float-dot" />
      Book a session
      <style>{`
        .wl-float-book {
          position: fixed;
          right: 24px;
          bottom: 24px;
          z-index: 40;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-mono, monospace);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
          color: #0a0a0c;
          background-color: #c6ff3d;
          border-radius: 100px;
          padding: 13px 20px;
          text-decoration: none;
          box-shadow: 0 12px 30px -8px rgba(198,255,61,0.35);
          opacity: 0;
          transform: translateY(10px) scale(0.94);
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease;
        }
        .wl-float-book-visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
        .wl-float-book:hover { box-shadow: 0 16px 36px -8px rgba(198,255,61,0.5); }
        .wl-float-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #0a0a0c;
          animation: wl-pulse 1.8s ease-in-out infinite;
        }
        @keyframes wl-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @media (prefers-reduced-motion: reduce) {
          .wl-float-dot { animation: none; }
        }
      `}</style>
    </a>
  );
}
