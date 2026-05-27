"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { href: "#templates", label: "Templates" },
  { href: "#about", label: "Features" },
  { href: "#reviews", label: "Reviews" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,border-color,box-shadow] duration-300 will-change-auto ${
        scrolled
          ? "bg-white border-b border-black/10 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* ── Brand ─────────────────────────────────────────────── */}
        <Link
          href="/"
          aria-label="My Portfolio home"
          className={`group inline-flex items-baseline font-sans text-[22px] sm:text-[26px] font-black tracking-[-0.04em] select-none transition-colors duration-300 hover:-translate-y-0.5 ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          <span>My </span>
          <span className={`transition-colors duration-500 ${scrolled ? "text-brand group-hover:text-brand-light" : "text-white/80 group-hover:text-white"}`}>
            Portfolio
          </span>
        </Link>

        {/* ── Desktop links ─────────────────────────────────────── */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map(({ href, label }) => (
              <li key={label}>
                <Link
                  href={href}
                  className={`text-sm font-medium transition-colors duration-300 ${
                    scrolled ? "text-ink-soft hover:text-ink" : "text-white/80 hover:text-white"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* ── Mobile: hamburger ────────────────────────────────── */}
        <div className="md:hidden flex items-center gap-2">
          <button
            className={`flex flex-col items-center justify-center w-10 h-10 gap-[5px] rounded-md transition-colors ${
              scrolled ? "hover:bg-ink/5" : "hover:bg-white/10"
            }`}
            onClick={() => setIsOpen((v) => !v)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                scrolled ? "bg-ink" : "bg-white"
              } ${isOpen ? "translate-y-[7px] rotate-45" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 ${
                scrolled ? "bg-ink" : "bg-white"
              } ${isOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-6 h-[2px] rounded-full transition-all duration-300 origin-center ${
                scrolled ? "bg-ink" : "bg-white"
              } ${isOpen ? "-translate-y-[7px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>


      {/* ── Mobile drawer ───────────────────────────────────────── */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="bg-white/95 backdrop-blur-xl border-t border-black/10 px-6 py-4 flex flex-col gap-1">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={label}>
              <Link
                href={href}
                className="block py-3 text-base font-medium text-ink-soft hover:text-ink transition-colors duration-150"
                onClick={() => setIsOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
