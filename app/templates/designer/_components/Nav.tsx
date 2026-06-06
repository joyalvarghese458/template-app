"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { label: "Work",     href: "#work" },
  { label: "Services", href: "#services" },
  { label: "About",    href: "#about" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-5 px-4 transition-all duration-300"
    >
      <nav
        className="w-full max-w-[1100px] flex items-center justify-between rounded-2xl px-5 py-3 transition-all duration-300"
        style={{
          backgroundColor: scrolled ? "hsl(28 8% 5% / 0.92)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          borderBottom: scrolled ? "1px solid hsl(28 7% 14%)" : "1px solid transparent",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="flex items-center gap-2.5 group"
        >
          <span
            className="w-8 h-8 rounded-xl flex items-center justify-center text-xs italic font-medium flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
              color: "#0d0a07",
              fontFamily: "var(--font-serif, serif)",
            }}
          >
            SC
          </span>
          <span
            className="text-sm font-light hidden sm:block"
            style={{ color: "hsl(38 25% 93%)" }}
          >
            Sofia Chen
          </span>
        </button>

        {/* Links */}
        <div className="flex items-center gap-1">
          {LINKS.map(({ label, href }) => (
            <button
              key={label}
              onClick={() => scrollTo(href)}
              className="text-sm rounded-full px-4 py-1.5 transition-all duration-200"
              style={{ color: "hsl(30 8% 50%)" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "hsl(38 25% 93%)";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "hsl(28 7% 14%)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.color = "hsl(30 8% 50%)";
                (e.currentTarget as HTMLButtonElement).style.backgroundColor = "transparent";
              }}
            >
              {label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => scrollTo("#contact")}
          className="relative group flex items-center text-sm rounded-full px-5 py-2 transition-all duration-300 hover:scale-105"
          style={{
            background: "linear-gradient(135deg, #E2B96A, #C07A2E)",
            color: "#0d0a07",
            fontWeight: 500,
          }}
        >
          Let&apos;s talk
        </button>
      </nav>
    </header>
  );
}
