"use client";

import { useState } from "react";
import Link from "next/link";
import {
  TEMPLATES,
  TIER_BY_ID,
  WA_NUMBER,
  waLink,
  templateImage,
  templateHref,
  type Template,
} from "@/lib/templates";

type Currency = "AED" | "INR";

const INR_MAP: Record<number, number> = {
  49: 999,
  99: 2499,
  149: 3999,
  1599: 39999,
};

function formatPrice(aed: number, currency: Currency): string {
  if (currency === "AED") return aed.toLocaleString("en-US");
  const inr = INR_MAP[aed];
  return inr !== undefined ? inr.toLocaleString("en-IN") : "—";
}

type Category = {
  id: string;
  label: string;
  description: string;
  templateIds: string[];
  href: string;
  aed: number;
};

const CATEGORIES: Category[] = [
  {
    id: "digital-resume",
    label: "Digital Resume",
    description: "Clean, professional resume templates that get you hired.",
    templateIds: ["dr1", "dr2", "dr3", "dr4"],
    href: "/templates?section=digital-resume",
    aed: 49,
  },
  {
    id: "career-portfolio",
    label: "Career Portfolio",
    description: "Showcase your skills and experience to land your next role.",
    templateIds: ["torque", "p11", "cp2", "s8"],
    href: "/templates?section=career-portfolio",
    aed: 99,
  },
  {
    id: "creator-portfolio",
    label: "Creator Portfolio",
    description: "Express your creative vision with striking artistic layouts.",
    templateIds: ["s1", "s2", "p2", "p9"],
    href: "/templates?section=creator-portfolio",
    aed: 149,
  },
  {
    id: "business-portfolio",
    label: "Business Portfolio",
    description: "Premium templates built for agencies, studios, and brands.",
    templateIds: ["bp1", "bp2", "bp3"],
    href: "/templates?section=business-portfolio",
    aed: 1599,
  },
];

const TEMPLATE_BY_ID = Object.fromEntries(TEMPLATES.map((t) => [t.id, t]));

function TemplateCard({
  template,
  currency,
  price,
}: {
  template: Template;
  currency: Currency;
  price: number;
}) {
  const tier = TIER_BY_ID[template.tier];
  const href = templateHref(template);
  const slug = template.slug ?? template.id;
  const fallbackSrc = templateImage(template);
  const [mode, setMode] = useState<"video" | "img">("video");
  const [imgSrc, setImgSrc] = useState(`/previews/${slug}.jpg`);
  const openTemplatePreview = () => {
    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={openTemplatePreview}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          openTemplatePreview();
        }
      }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-ink/10 bg-canvas-bg transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.18)] focus:outline-none focus:ring-2 focus:ring-brand/40"
    >
      {/* Preview image */}
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(event) => event.stopPropagation()}
        className="relative block aspect-[3/4] overflow-hidden bg-ink/5"
        aria-label={`View ${template.title} template`}
      >
        {mode === "video" ? (
          <video
            autoPlay
            loop
            muted
            playsInline
            poster={`/previews/${slug}.jpg`}
            onError={() => setMode("img")}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] bg-gradient-to-br ${tier.accent}`}
          >
            <source src={`/previews/${slug}.webm`} type="video/webm" />
          </video>
        ) : (
          /* eslint-disable-next-line @next/next/no-img-element */
          <img
            src={imgSrc}
            onError={() => setImgSrc(fallbackSrc)}
            alt={`${template.title} portfolio preview`}
            loading="lazy"
            draggable={false}
            className={`absolute inset-0 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.03] bg-gradient-to-br ${tier.accent}`}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
      </Link>

      {/* Body */}
      <div className="flex flex-col gap-2 p-3 sm:p-4">
        <h3 className="font-serif text-[15px] sm:text-lg text-ink tracking-tight leading-tight line-clamp-1">
          {template.title}
        </h3>

        {/* Price row */}
        <div className="flex items-baseline justify-between">
          <span className="text-ink">
            <span className="text-[10px] sm:text-[11px] font-semibold text-ink-soft mr-1">
              {currency}
            </span>
            <span className="font-serif text-xl sm:text-2xl tabular-nums">
              {formatPrice(price, currency)}
            </span>
          </span>
          <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-widest text-ink-soft">
            One-time
          </span>
        </div>

        {/* Buttons */}
        <div className="flex gap-1.5">
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-brand bg-canvas-bg border border-brand/40 hover:bg-brand/10 rounded-lg transition-all duration-200 active:scale-95"
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
          </Link>
          <a
            href={waLink(tier.label, template.title, price)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-canvas-bg bg-brand hover:bg-brand/90 rounded-lg shadow-lg shadow-brand/30 transition-all duration-200 active:scale-95"
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

export default function TemplatesSection() {
  const [currency, setCurrency] = useState<Currency>("AED");

  return (
    <section
      id="templates"
      className="relative bg-canvas-bg py-20 sm:py-24 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-10 sm:mb-12 max-w-2xl mx-auto">
          <div className="flex items-center justify-center gap-4 mb-4">
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
            <p className="text-brand text-[10px] sm:text-xs font-semibold uppercase tracking-[0.28em]">
              Portfolio Templates
            </p>
            <span className="h-px w-8 bg-brand/60" aria-hidden="true" />
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink mb-4 tracking-tight">
            Pick a type.{" "}
            <span className="italic text-brand">Launch in days.</span>
          </h2>
          <p className="text-base sm:text-lg text-ink-soft leading-relaxed mb-6">
            Choose from professionally designed portfolio website layouts
            optimized for credibility, visibility, and conversions.
          </p>

          {/* Currency toggle */}
          <div className="inline-flex items-center rounded-full border border-ink/15 bg-ink/5 p-1 gap-1">
            {(["AED", "INR"] as Currency[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => setCurrency(c)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                  currency === c
                    ? "bg-brand text-canvas-bg shadow-sm shadow-brand/30"
                    : "text-ink-soft hover:text-ink"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Section quick-filters */}
        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-12">
          {[
            { id: "digital-resume", label: "Digital Resume" },
            { id: "career-portfolio", label: "Career Portfolio" },
            { id: "creator-portfolio", label: "Creator Portfolio" },
            { id: "business-portfolio", label: "Business Portfolio" },
          ].map((s) => (
            <a
              key={s.id}
              href={`/templates?section=${s.id}`}
              className="inline-flex items-center px-3 py-1.5 text-xs font-medium text-ink-soft hover:text-brand-dark bg-canvas-bg border border-ink/15 hover:border-brand/40 hover:bg-brand/5 rounded-full transition-colors"
            >
              {s.label}
            </a>
          ))}
        </div>

        {/* Category sections */}
        <div className="space-y-16 sm:space-y-20">
          {CATEGORIES.map((cat) => {
            const templates = cat.templateIds
              .map((id) => TEMPLATE_BY_ID[id])
              .filter((t): t is Template => Boolean(t));

            return (
              <div key={cat.id}>
                {/* Category header */}
                <div className="flex items-end justify-between gap-4 mb-6 pb-4 border-b border-ink/10">
                  <div className="min-w-0">
                    <h3 className="font-serif text-2xl sm:text-3xl text-ink leading-tight">
                      {cat.label}
                    </h3>
                    <p className="text-ink-soft text-sm mt-1 leading-snug">
                      {cat.description}
                    </p>
                  </div>
                  <Link
                    href={cat.href}
                    className="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-brand border border-brand/40 hover:bg-brand/10 rounded-full transition-colors whitespace-nowrap"
                  >
                    Show more
                    <svg
                      className="w-3.5 h-3.5"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.5}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <path d="M5 12h14" />
                      <path d="M13 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                {/* Grid: 2 cols mobile, 4 cols desktop */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
                  {templates.map((t) => (
                    <TemplateCard
                      key={t.id}
                      template={t}
                      currency={currency}
                      price={cat.aed}
                    />
                  ))}
                </div>
              </div>
            );
          })}
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
