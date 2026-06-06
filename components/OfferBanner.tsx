"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAsterisk } from "@fortawesome/free-solid-svg-icons";

const ITEMS = [
  <>
    <span className="font-bold uppercase tracking-[0.18em] text-white">Limited Offer</span>
    <span className="mx-2 text-white/30">•</span>
    Up to <span className="font-bold text-white">40% OFF</span> on Professional Portfolio Websites
  </>,
  <>Launch Your Portfolio Website This Week</>,
  <>Premium Quality Without the Premium Price Tag</>,
];

function Track({ ariaHidden }: { ariaHidden?: boolean }) {
  return (
    <div
      className="flex shrink-0 items-center"
      aria-hidden={ariaHidden || undefined}
    >
      {Array.from({ length: 4 }).map((_, repeat) =>
        ITEMS.map((item, i) => (
          <span key={`${repeat}-${i}`} className="flex shrink-0 items-center">
            <span className="whitespace-nowrap text-[12px] sm:text-[13px] font-medium tracking-wide text-white/70 px-6">
              {item}
            </span>
            <FontAwesomeIcon icon={faAsterisk} className="text-white/20 w-2.5 h-2.5 shrink-0" />
          </span>
        ))
      )}
    </div>
  );
}

export default function OfferBanner() {
  return (
    <Link
      href="/templates?section=creator-portfolio"
      aria-label="Limited Offer: up to 40% off on Professional Portfolio Websites starting at ₹2499"
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
