"use client";

import { useEffect, useRef, useState } from "react";
import {
  TIERS,
  TEMPLATES,
  WA_NUMBER,
  waLink,
  templateImage,
  templateHref,
  type Template,
  type TierMeta,
} from "@/lib/templates";

type TierWithTemplates = TierMeta & { templates: Template[] };

const TIERS_WITH_TEMPLATES: TierWithTemplates[] = TIERS.map((tier) => ({
  ...tier,
  templates: TEMPLATES.filter((t) => t.tier === tier.id),
}));

// ────────────────────────────────────────────────────────────────────
// Phone-mockup card
// ────────────────────────────────────────────────────────────────────

function PhoneCard({
  template,
  tier,
  price,
  accent,
}: {
  template: Template;
  tier: string;
  price: number;
  accent: string;
}) {
  return (
    <article className="snap-start shrink-0 w-[180px] sm:w-[210px] flex flex-col items-center select-none">
      {/* ── Phone frame ───────────────────────────────────────── */}
      <div className="relative w-[180px] h-[370px] sm:w-[210px] sm:h-[430px] rounded-[34px] sm:rounded-[40px] bg-ink p-[5px] sm:p-[6px] shadow-[0_20px_50px_-12px_rgba(0,0,0,0.7)] ring-1 ring-ink/10 transition-transform duration-300 hover:-translate-y-1 group">
        {/* Side buttons */}
        <span className="absolute left-[-2px] top-20 w-[3px] h-8 bg-ink/70 rounded-l" />
        <span className="absolute left-[-2px] top-32 w-[3px] h-12 bg-ink/70 rounded-l" />
        <span className="absolute right-[-2px] top-24 w-[3px] h-16 bg-ink/70 rounded-r" />

        {/* Screen */}
        <div className={`relative w-full h-full rounded-[28px] sm:rounded-[34px] overflow-hidden bg-gradient-to-br ${accent}`}>
          {/* Sample preview image */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={templateImage(template)}
            alt={`${template.title} portfolio preview`}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none"
          />

          {/* Top darkening gradient — keeps status bar / island readable */}
          <div
            className="absolute inset-x-0 top-0 h-24 pointer-events-none bg-gradient-to-b from-black/55 to-transparent"
            aria-hidden="true"
          />

          {/* Bottom darkening gradient — keeps title + buttons readable */}
          <div
            className="absolute inset-x-0 bottom-0 h-3/5 pointer-events-none bg-gradient-to-t from-black/85 via-black/55 to-transparent"
            aria-hidden="true"
          />

          {/* Brand colour wash — subtle tint over the photo */}
          <div
            className="absolute inset-0 opacity-25 mix-blend-overlay pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 15%, rgba(59,130,246,0.55), transparent 55%), radial-gradient(circle at 80% 85%, rgba(0,0,0,0.6), transparent 60%)",
            }}
          />

          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-[22px] sm:h-[26px] rounded-full bg-black/90 z-20" />

          {/* Status bar time */}
          <div className="absolute top-[10px] left-4 text-white text-[10px] font-semibold tracking-wide z-10 drop-shadow">
            9:41
          </div>

          {/* Template caption — anchored above the home indicator */}
          <div className="absolute left-0 right-0 bottom-8 px-4 text-center z-10">
            <p className="text-brand text-[9px] sm:text-[10px] uppercase tracking-[0.28em] mb-1.5 drop-shadow">
              {tier} portfolio
            </p>
            <p className="font-serif text-white text-xl sm:text-2xl tracking-tight drop-shadow-md leading-tight">
              {template.title}
            </p>
            <p className="text-white/85 text-[10px] sm:text-[11px] mt-1 max-w-[20ch] mx-auto leading-snug drop-shadow">
              {template.tag}
            </p>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-white/60 z-10" />
        </div>
      </div>

      {/* ── Below phone ───────────────────────────────────────── */}
      <div className="mt-4 text-center w-full">
        <p className="font-serif text-ink text-lg sm:text-xl tracking-tight">
          {template.title}
        </p>

        {/* ── Action buttons ─────────────────────────────────── */}
        <div className="mt-3 flex gap-1.5">
          <a
            href={templateHref(template)}
            className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-2 text-[11px] sm:text-xs font-bold text-brand bg-canvas-bg border border-brand/40 hover:bg-brand/10 rounded-lg transition-all duration-200 active:scale-95"
          >
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View
          </a>
          <a
            href={waLink(tier, template.title, price)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1 px-2 py-2 text-[11px] sm:text-xs font-bold text-canvas-bg bg-brand hover:bg-brand/90 rounded-lg shadow-lg shadow-brand/30 transition-all duration-200 active:scale-95"
          >
            <svg
              className="w-3 h-3 sm:w-3.5 sm:h-3.5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 11l3 3L22 4" />
              <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
            </svg>
            Order
          </a>
        </div>
      </div>
    </article>
  );
}

// ────────────────────────────────────────────────────────────────────
// "View more" card — appended at the end of each tier scroller
// ────────────────────────────────────────────────────────────────────

function ViewMoreCard({ tier }: { tier: TierWithTemplates }) {
  return (
    <article className="snap-start shrink-0 w-[180px] sm:w-[210px] flex flex-col items-center select-none">
      <a
        href={`/templates?tier=${tier.id}`}
        className="relative w-[180px] h-[370px] sm:w-[210px] sm:h-[430px] rounded-[34px] sm:rounded-[40px] bg-canvas-bg border-2 border-dashed border-ink/25 hover:border-brand hover:bg-brand/5 flex flex-col items-center justify-center gap-4 transition-all duration-300 hover:-translate-y-1 group"
      >
        <div className="w-16 h-16 rounded-full bg-brand/10 group-hover:bg-brand/20 border border-brand/30 flex items-center justify-center transition-all duration-300 group-hover:scale-110">
          <svg
            className="w-7 h-7 text-brand"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2.2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12h14" />
            <path d="M13 5l7 7-7 7" />
          </svg>
        </div>
        <div className="text-center px-6">
          <p className="font-serif text-ink text-xl sm:text-2xl tracking-tight leading-tight">
            View all
          </p>
          <p className="font-serif italic text-brand text-lg sm:text-xl tracking-tight leading-tight">
            {tier.label}
          </p>
          <p className="text-ink-soft text-[11px] mt-3 uppercase tracking-widest font-semibold">
            Explore more
          </p>
        </div>
      </a>

      <div className="mt-4 text-center w-full">
        <p className="font-serif text-ink text-lg sm:text-xl tracking-tight">
          More templates
        </p>
        <span className="inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border border-ink/20 text-ink-soft mt-2">
          {tier.label} collection
        </span>
      </div>
    </article>
  );
}

// ────────────────────────────────────────────────────────────────────
// One horizontal scroller per tier
// ────────────────────────────────────────────────────────────────────

function TierCarousel({ tier }: { tier: TierWithTemplates }) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };

    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;

    let isDown = false;
    let startX = 0;
    let startScroll = 0;
    let moved = false;

    const onDown = (e: MouseEvent) => {
      if (e.button !== 0) return;
      const target = e.target as HTMLElement;
      if (target.closest("a, button")) return;
      isDown = true;
      moved = false;
      startX = e.pageX;
      startScroll = el.scrollLeft;
      el.style.cursor = "grabbing";
    };
    const onMove = (e: MouseEvent) => {
      if (!isDown) return;
      const dx = e.pageX - startX;
      if (Math.abs(dx) > 4) moved = true;
      el.scrollLeft = startScroll - dx;
    };
    const onUp = () => {
      isDown = false;
      el.style.cursor = "grab";
    };
    const onClickCapture = (e: MouseEvent) => {
      if (moved) {
        e.preventDefault();
        e.stopPropagation();
        moved = false;
      }
    };

    el.addEventListener("mousedown", onDown);
    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseup", onUp);
    el.addEventListener("mouseleave", onUp);
    el.addEventListener("click", onClickCapture, true);
    el.style.cursor = "grab";

    return () => {
      el.removeEventListener("mousedown", onDown);
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseup", onUp);
      el.removeEventListener("mouseleave", onUp);
      el.removeEventListener("click", onClickCapture, true);
    };
  }, []);

  const scrollBy = (dir: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const card = el.querySelector("article") as HTMLElement | null;
    const step = (card?.offsetWidth ?? 200) + 24;
    el.scrollBy({ left: dir * step * 2, behavior: "smooth" });
  };

  return (
    <div>
      {/* Header row */}
      <div className="flex items-end justify-between gap-4 mb-6 pb-4 border-b border-ink/10">
        <div className="min-w-0 flex-1">
          <span
            className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-2.5 py-1 rounded-full border ${tier.badgeColor} mb-2`}
          >
            Tier — {tier.label}
          </span>
          <h3 className="font-serif text-2xl sm:text-3xl text-ink">
            {tier.label}
            <span className="text-ink/30 mx-2">·</span>
            <span className="text-ink">
              <span className="text-ink-soft text-base sm:text-lg mr-1 font-medium">
                AED
              </span>
              {tier.price}
            </span>
          </h3>
         
        </div>

        {/* Arrow buttons */}
        <div className="flex gap-2 shrink-0">
          <button
            type="button"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            aria-label={`Scroll ${tier.label} templates left`}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-ink/20 text-ink flex items-center justify-center transition-all duration-150 hover:bg-ink/5 hover:border-ink/40 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            aria-label={`Scroll ${tier.label} templates right`}
            className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-ink/20 text-ink flex items-center justify-center transition-all duration-150 hover:bg-ink/5 hover:border-ink/40 disabled:opacity-25 disabled:cursor-not-allowed disabled:hover:bg-transparent"
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M9 6l6 6-6 6" />
            </svg>
          </button>
        </div>
      </div>

      <div
        ref={scrollerRef}
        className="flex gap-8 sm:gap-7 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-6 -mx-4 pl-12 pr-6 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {tier.templates.map((t) => (
          <PhoneCard
            key={t.id}
            template={t}
            tier={tier.label}
            price={tier.price}
            accent={tier.accent}
          />
        ))}
        <ViewMoreCard tier={tier} />
        <div className="shrink-0 w-2" aria-hidden="true" />
      </div>
    </div>
  );
}

// ────────────────────────────────────────────────────────────────────
// Section
// ────────────────────────────────────────────────────────────────────

export default function TemplatesSection() {
  return (
    <section
      id="templates"
      className="relative bg-canvas-bg py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-14 sm:mb-16 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
            <p className="text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
              Portfolio Templates
            </p>
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink mb-4 tracking-tight">
            Pick a tier. Launch{" "}
            <span className="italic text-brand">in days.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed">
            30 hand-crafted portfolio templates across three price tiers — pay
            once, own forever.
          </p>
        </div>

        {/* Profession quick-filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
          {[
            { id: "designers", label: "Designers" },
            { id: "developers", label: "Developers" },
            { id: "photographers", label: "Photographers" },
            { id: "creators", label: "Creators" },
            { id: "founders", label: "Founders" },
            { id: "agencies", label: "Agencies" },
          ].map((a) => (
            <a
              key={a.id}
              href={`/templates?audience=${a.id}`}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-ink-soft hover:text-brand-dark bg-canvas-bg border border-ink/15 hover:border-brand/40 hover:bg-brand/5 rounded-full transition-colors"
            >
              {a.label}
            </a>
          ))}
        </div>

        <div className="space-y-16 sm:space-y-20">
          {TIERS_WITH_TEMPLATES.map((tier) => (
            <TierCarousel key={tier.id} tier={tier} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-ink-soft text-sm mb-5">
            Need a custom build? We tailor portfolios from scratch.
          </p>
          <a
            href={`https://wa.me/${WA_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-canvas-bg bg-brand hover:bg-brand/90 rounded-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Talk to us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}