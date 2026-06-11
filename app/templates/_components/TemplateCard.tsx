"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  TIER_BY_ID,
  templateHref,
  templateImage,
  waLink,
  type Template,
} from "@/lib/templates";

export default function TemplateCard({ template }: { template: Template }) {
  const router = useRouter();
  const tier = TIER_BY_ID[template.tier];
  const href = templateHref(template);

  return (
    <article
      role="link"
      tabIndex={0}
      onClick={() => router.push(href)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          router.push(href);
        }
      }}
      className="group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl border border-ink/10 bg-canvas-bg transition-all duration-300 hover:-translate-y-1 hover:border-brand/40 hover:shadow-[0_20px_50px_-12px_rgba(37,99,235,0.18)] focus:outline-none focus:ring-2 focus:ring-brand/40"
    >
      {/* Preview */}
      <Link
        href={href}
        onClick={(event) => event.stopPropagation()}
        className="relative block aspect-[3/4] overflow-hidden bg-ink/5"
        aria-label={`View ${template.title} template`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={templateImage(template)}
          alt={`${template.title} portfolio preview`}
          loading="lazy"
          draggable={false}
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03] bg-gradient-to-br ${tier.accent}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent pointer-events-none" />
        <span
          className={`absolute top-3 left-3 inline-flex items-center px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest rounded-full border backdrop-blur-sm ${tier.badgeColor}`}
        >
          {tier.label}
        </span>
      </Link>

      {/* Body */}
      <div className="flex flex-col gap-2.5 sm:gap-3 p-3 sm:p-5">
        <div className="min-h-[3rem] sm:min-h-[3.5rem]">
          <h3 className="font-serif text-[15px] sm:text-xl text-ink tracking-tight leading-tight line-clamp-1">
            {template.title}
          </h3>
          <p className="text-[11px] sm:text-[13px] text-ink-soft mt-0.5 sm:mt-1 line-clamp-1">
            {template.tag}
          </p>
        </div>

        <div className="flex items-baseline justify-between">
          <span className="text-ink">
            <span className="text-[10px] sm:text-[11px] font-semibold text-ink-soft mr-1">AED</span>
            <span className="font-serif text-xl sm:text-2xl tabular-nums">{tier.price}</span>
          </span>
          <span className="hidden sm:inline text-[10px] font-medium uppercase tracking-widest text-ink-soft">
            One-time
          </span>
        </div>

        <div className="flex gap-1.5 mt-0.5 sm:mt-1">
          <Link
            href={href}
            onClick={(event) => event.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-brand bg-canvas-bg border border-brand/40 hover:bg-brand/10 rounded-lg transition-all duration-200 active:scale-95"
          >
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
            View
          </Link>
          <a
            href={waLink(tier.label, template.title, tier.price)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex-1 inline-flex items-center justify-center gap-1 px-1.5 sm:px-2 py-1.5 sm:py-2 text-[11px] sm:text-xs font-bold text-canvas-bg bg-brand hover:bg-brand/90 rounded-lg shadow-lg shadow-brand/30 transition-all duration-200 active:scale-95"
          >
            <svg className="w-3 h-3 sm:w-3.5 sm:h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
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
