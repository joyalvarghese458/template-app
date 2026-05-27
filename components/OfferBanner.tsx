"use client";

import Link from "next/link";

const REPEATS = 6;

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {Array.from({ length: REPEATS }).map((_, i) => (
        <span key={i} className="flex shrink-0 items-center gap-3 px-6">
          <svg
            className="w-3.5 h-3.5 text-brand shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
          <span className="whitespace-nowrap text-[12px] sm:text-[13px] font-medium tracking-wide text-white/70">
            <span className="font-bold uppercase tracking-[0.18em] text-white">Eid Special</span>
            <span className="mx-2 text-white/30">·</span>
            Up to{" "}
            <span className="font-bold text-white">50% OFF</span>{" "}
            on Premium tier portfolios
          </span>
          <span className="text-white/20">✦</span>
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
      className="group relative block overflow-hidden backdrop-blur-md"
      style={{ background: "rgba(0, 0, 0, 0.45)" }}
    >
      <div
        className="flex w-max py-2.5"
        style={{
          animation: "infinite-scroll 55s linear infinite",
          animationPlayState: "running",
        }}
      >
        <Track />
        <Track ariaHidden />
      </div>

      <span
        className="pointer-events-none absolute inset-y-0 left-0 w-16 to-transparent"
        style={{ backgroundImage: "linear-gradient(to right, rgba(0,0,0,0.45), transparent)" }}
        aria-hidden="true"
      />
      <span
        className="pointer-events-none absolute inset-y-0 right-0 w-16 to-transparent"
        style={{ backgroundImage: "linear-gradient(to left, rgba(0,0,0,0.45), transparent)" }}
        aria-hidden="true"
      />
    </Link>
  );
}
