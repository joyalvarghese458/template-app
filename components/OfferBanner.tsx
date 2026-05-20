"use client";

import Link from "next/link";

// One repetition of the marquee message; rendered N×REPEATS, then the whole
// track is duplicated by the parent for a seamless -50% translate loop.
const REPEATS = 6;

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span key={i} className="flex shrink-0 items-center gap-3 px-6">
          {/* Crescent moon (Eid icon) */}
          <svg
            className="w-3.5 h-3.5 text-white/90 shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span className="whitespace-nowrap text-[12px] sm:text-[13px] font-medium tracking-wide text-white">
            <span className="font-bold uppercase tracking-[0.18em]">Eid Special</span>
            <span className="mx-2 opacity-60">·</span>
            Up to{" "}
            <span className="font-bold">50% OFF</span>{" "}
            on Premium tier portfolios
          </span>
          <span className="text-white/40">✦</span>
        </span>
      ))}
    </div>
  );
}

export default function OfferBanner() {
  return (
    <Link
      href="/templates?tier=premium"
      aria-label="Eid Special: up to 50% off on Premium tier portfolios"
      className="group relative block overflow-hidden bg-gradient-to-r from-brand-dark via-brand to-brand-light"
    >
      <div
        className="flex w-max"
        style={{
          animation: "infinite-scroll 55s linear infinite",
          animationPlayState: "running",
        }}
      >
        <Track />
        <Track ariaHidden />
      </div>

      {/* Subtle edge fade so text isn't cut sharply at viewport edges */}
      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-brand-dark to-transparent"
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-brand-light to-transparent"
        aria-hidden="true"
      />
    </Link>
  );
}
