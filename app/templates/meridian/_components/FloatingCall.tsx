"use client";

import { useEffect, useState } from "react";

/* Floating "crew contact" pill — appears after the hero, hides while
   the contact section is on screen. */
export default function FloatingCall() {
  const [pastHero, setPastHero] = useState(false);
  const [inContact, setInContact] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("horizon");
    const contact = document.getElementById("contact");
    if (!hero || !contact) return;

    const heroObserver = new IntersectionObserver(
      ([entry]) => setPastHero(!entry.isIntersecting),
      { threshold: 0.1 },
    );
    const contactObserver = new IntersectionObserver(
      ([entry]) => setInContact(entry.isIntersecting),
      { threshold: 0.2 },
    );
    heroObserver.observe(hero);
    contactObserver.observe(contact);
    return () => {
      heroObserver.disconnect();
      contactObserver.disconnect();
    };
  }, []);

  return (
    <a
      href="#contact"
      className={`mrd-float ${pastHero && !inContact ? "mrd-float-visible" : ""}`}
    >
      <span className="mrd-float-dot" />
      Crew contact
      <style>{`
        .mrd-float {
          position: fixed;
          right: 20px;
          bottom: 20px;
          z-index: 50;
          display: inline-flex;
          align-items: center;
          gap: 9px;
          font-family: var(--font-mono);
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.04em;
          color: #12100a;
          background-color: var(--mrd-amber);
          border-radius: 100px;
          padding: 13px 20px;
          min-height: 44px;
          text-decoration: none;
          box-shadow: 0 12px 30px -8px rgba(245,168,60,0.4);
          opacity: 0;
          transform: translateY(10px) scale(0.94);
          pointer-events: none;
          transition: opacity 0.3s ease, transform 0.3s ease, box-shadow 0.2s ease;
        }
        .mrd-float-visible { opacity: 1; transform: translateY(0) scale(1); pointer-events: auto; }
        .mrd-float:hover { box-shadow: 0 16px 36px -8px rgba(245,168,60,0.55); }
        .mrd-float-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background-color: #12100a;
          animation: mrd-float-pulse 1.8s ease-in-out infinite;
        }
        @keyframes mrd-float-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.35; }
        }
        @media (prefers-reduced-motion: reduce) {
          .mrd-float-dot { animation: none; }
          .mrd-float { transition: none; }
        }
      `}</style>
    </a>
  );
}
