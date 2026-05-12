"use client";

import { useEffect, useRef, useState } from "react";

type Template = { id: string; title: string; tag: string; badge: string };

type Tier = {
  label: string;
  subtitle: string;
  price: number;
  accent: string;
  badgeColor: string;
  templates: Template[];
};

const TIERS: Tier[] = [
  {
    label: "Starter",
    subtitle: "Single-page essentials — for freelancers, students & first portfolios",
    price: 49,
    accent: "from-[#2a2520] via-[#1f1b17] to-[#15110d]",
    badgeColor: "bg-brand/10 text-brand-dark border-brand/30",
    templates: [
      { id: "s1", title: "Minimalist", tag: "Resume · Single page", badge: "Resume" },
      { id: "s2", title: "Pure", tag: "Personal · Light", badge: "Personal" },
      { id: "s3", title: "Cardstock", tag: "CV · Card layout", badge: "CV" },
      { id: "s4", title: "Solo", tag: "Freelancer · Lite", badge: "Freelancer" },
      { id: "s5", title: "Profile One", tag: "Personal brand", badge: "Brand" },
      { id: "s6", title: "Classic", tag: "CV · Print-ready", badge: "Classic" },
      { id: "s7", title: "Quill", tag: "Writer · Lite", badge: "Writer" },
      { id: "s8", title: "Snap", tag: "Photo · Single page", badge: "Photo" },
      { id: "s9", title: "Indie", tag: "Maker · Lite", badge: "Maker" },
      { id: "s10", title: "Onefolio", tag: "Universal · Lite", badge: "Universal" },
    ],
  },
  {
    label: "Pro",
    subtitle: "Multi-page, animated portfolios with rich case-study layouts & blog support",
    price: 99,
    accent: "from-[#3a2f23] via-[#2a2218] to-[#1a1410]",
    badgeColor: "bg-brand/15 text-brand-dark border-brand/40",
    templates: [
      { id: "p1", title: "Designer Pro", tag: "Designer · Multi-page", badge: "Designer" },
      { id: "p2", title: "DevHub", tag: "Developer · Projects grid", badge: "Developer" },
      { id: "p3", title: "Gallery+", tag: "Photographer · Gallery", badge: "Photographer" },
      { id: "p4", title: "Studio", tag: "Creative · Case studies", badge: "Creative" },
      { id: "p5", title: "Architect", tag: "Architect · Project pages", badge: "Architect" },
      { id: "p6", title: "Artisan", tag: "Artist · Collection", badge: "Artist" },
      { id: "p7", title: "Consult", tag: "Consultant · Services", badge: "Consultant" },
      { id: "p8", title: "Stage", tag: "Speaker · Talks", badge: "Speaker" },
      { id: "p9", title: "Aura", tag: "Influencer · Press kit", badge: "Influencer" },
      { id: "p10", title: "Brandmark", tag: "Brand · Identity", badge: "Brand" },
    ],
  },
  {
    label: "Premium",
    subtitle: "Flagship portfolios — custom animations, CMS-ready, e-commerce & SEO tuned",
    price: 149,
    accent: "from-[#b89968] via-[#8e7548] to-[#3a2f23]",
    badgeColor: "bg-brand/20 text-brand-dark border-brand/50",
    templates: [
      { id: "x1", title: "Atelier", tag: "Agency · Flagship", badge: "Agency" },
      { id: "x2", title: "Reel", tag: "Director · Showreel", badge: "Director" },
      { id: "x3", title: "Magnum", tag: "Photographer · Pro Max", badge: "Photographer" },
      { id: "x4", title: "Blueprint", tag: "Architect · Premier", badge: "Architect" },
      { id: "x5", title: "Founder", tag: "Executive · Suite", badge: "Executive" },
      { id: "x6", title: "Maker Pro", tag: "Designer · Elite", badge: "Designer" },
      { id: "x7", title: "Curate", tag: "Artist · Atelier", badge: "Artist" },
      { id: "x8", title: "Atrium", tag: "Studio · Master", badge: "Studio" },
      { id: "x9", title: "Beacon", tag: "Brand · Premier", badge: "Brand" },
      { id: "x10", title: "Lumen", tag: "Editorial · Premium", badge: "Editorial" },
    ],
  },
];

const WA_NUMBER = "971501234567";

function waLink(tier: string, name: string, price: number) {
  const msg = `Hi FolioCraft! I'd like to order the "${name}" (${tier} tier) portfolio template at AED ${price}.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

// ────────────────────────────────────────────────────────────────────
// Phone-mockup card
// ────────────────────────────────────────────────────────────────────

function PhoneCard({
  template,
  tier,
  price,
  accent,
  badgeColor,
}: {
  template: Template;
  tier: string;
  price: number;
  accent: string;
  badgeColor: string;
}) {
  return (
    <article className="snap-start shrink-0 w-[180px] sm:w-[210px] flex flex-col items-center select-none">
      {/* ── Phone frame ───────────────────────────────────────── */}
      <div className="relative w-[180px] h-[370px] sm:w-[210px] sm:h-[430px] rounded-[34px] sm:rounded-[40px] bg-ink p-[5px] sm:p-[6px] shadow-[0_20px_50px_-12px_rgba(26,22,18,0.35)] ring-1 ring-ink/10 transition-transform duration-300 hover:-translate-y-1">
        {/* Side buttons */}
        <span className="absolute left-[-2px] top-20 w-[3px] h-8 bg-ink/70 rounded-l" />
        <span className="absolute left-[-2px] top-32 w-[3px] h-12 bg-ink/70 rounded-l" />
        <span className="absolute right-[-2px] top-24 w-[3px] h-16 bg-ink/70 rounded-r" />

        {/* Screen */}
        <div className={`relative w-full h-full rounded-[28px] sm:rounded-[34px] overflow-hidden bg-gradient-to-br ${accent}`}>
          {/* Light/dark overlay for depth */}
          <div
            className="absolute inset-0 opacity-40 mix-blend-overlay pointer-events-none"
            aria-hidden="true"
            style={{
              backgroundImage:
                "radial-gradient(circle at 25% 15%, rgba(201,171,124,0.6), transparent 50%), radial-gradient(circle at 80% 85%, rgba(0,0,0,0.5), transparent 55%)",
            }}
          />

          {/* Dynamic island */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 sm:w-24 h-[22px] sm:h-[26px] rounded-full bg-black/90 z-20" />

          {/* Status bar time */}
          <div className="absolute top-[10px] left-4 text-canvas-bg text-[10px] font-semibold tracking-wide z-10">
            9:41
          </div>

          {/* Template content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
            <p className="text-brand text-[9px] sm:text-[10px] uppercase tracking-[0.28em] mb-2">
              {tier} portfolio
            </p>
            <p className="font-serif text-canvas-bg text-2xl sm:text-3xl tracking-tight drop-shadow-md leading-tight">
              {template.title}
            </p>
            <p className="text-canvas-bg/80 text-[11px] sm:text-xs mt-2 max-w-[20ch] leading-snug">
              {template.tag}
            </p>

            {/* Faux content blocks */}
            <div className="mt-5 sm:mt-7 w-full max-w-[140px] sm:max-w-[160px] space-y-1.5">
              <div className="h-1.5 rounded-full bg-canvas-bg/40 w-full" />
              <div className="h-1.5 rounded-full bg-canvas-bg/30 w-5/6" />
              <div className="h-1.5 rounded-full bg-canvas-bg/25 w-4/6" />
            </div>
            <div className="mt-3 grid grid-cols-2 gap-1.5 w-full max-w-[140px] sm:max-w-[160px]">
              <div className="aspect-square rounded bg-brand/30" />
              <div className="aspect-square rounded bg-canvas-bg/15" />
            </div>
          </div>

          {/* Home indicator */}
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 w-20 h-1 rounded-full bg-canvas-bg/60 z-10" />
        </div>
      </div>

      {/* ── Below phone ───────────────────────────────────────── */}
      <div className="mt-4 text-center w-full">
        <p className="font-serif text-ink text-lg sm:text-xl tracking-tight">
          {template.title}
        </p>
        <span
          className={`inline-block text-[10px] font-semibold uppercase tracking-widest px-3 py-1 rounded-full border mt-2 ${badgeColor}`}
        >
          {template.badge}
        </span>
      </div>

      <a
        href={waLink(tier, template.title, price)}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-3 inline-flex items-center gap-1.5 px-5 py-2.5 text-canvas-bg bg-ink hover:bg-ink/90 font-semibold text-sm rounded-md transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 whitespace-nowrap"
      >
        Order AED {price}
        <span aria-hidden="true">→</span>
      </a>
    </article>
  );
}

// ────────────────────────────────────────────────────────────────────
// One horizontal scroller per tier
// ────────────────────────────────────────────────────────────────────

function TierCarousel({ tier }: { tier: Tier }) {
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
          <p className="text-ink-soft text-xs sm:text-sm mt-1.5 max-w-xl">
            Templates 1–10 ·{" "}
            <span className="italic text-ink-soft/70">Drag to slide</span>
          </p>
          <p className="text-ink-soft/80 text-xs mt-1 hidden sm:block">
            {tier.subtitle}
          </p>
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
        className="flex gap-5 sm:gap-7 overflow-x-auto overflow-y-hidden snap-x snap-mandatory pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
      >
        {tier.templates.map((t) => (
          <PhoneCard
            key={t.id}
            template={t}
            tier={tier.label}
            price={tier.price}
            accent={tier.accent}
            badgeColor={tier.badgeColor}
          />
        ))}
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

        <div className="space-y-16 sm:space-y-20">
          {TIERS.map((tier) => (
            <TierCarousel key={tier.label} tier={tier} />
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
            className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-canvas-bg bg-ink hover:bg-ink/90 rounded-md transition-all duration-200 hover:-translate-y-0.5"
          >
            Talk to us on WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}
