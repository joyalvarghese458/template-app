import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  AUDIENCES,
  TEMPLATES,
  filterTemplates,
  parseAudiences,
  parseSpecialties,
  parseTiers,
  parseQuery,
} from "@/lib/templates";
import FilterShell from "./_components/FilterShell";
import TemplateCard from "./_components/TemplateCard";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "All Portfolio Templates — Browse 30+ Designs",
  description:
    "Browse 30+ hand-crafted portfolio templates. Filter by profession — designer, developer, photographer, creator, founder, or agency. Starting from AED 49.",
  alternates: {
    canonical: "/templates",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates",
    title: "All Portfolio Templates — Browse 30+ Designs",
    description:
      "Browse 30+ hand-crafted portfolio templates. Filter by profession — designer, developer, photographer, creator, founder, or agency. Starting from AED 49.",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Portfolio Templates — Browse 30+ Designs",
    description:
      "Browse 30+ hand-crafted portfolio templates. Filter by profession and price. Starting from AED 49.",
  },
};

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const audiences = parseAudiences(sp.audience);
  const specialties = parseSpecialties(sp.specialty);
  const tiers = parseTiers(sp.tier);
  const q = parseQuery(sp.q);

  const filtered = filterTemplates({ audiences, specialties, tiers, q });

  // Single-audience header personalization
  const soloAudience = audiences.length === 1 ? AUDIENCES.find((a) => a.id === audiences[0]) : null;

  return (
    <main className="bg-canvas-bg min-h-svh">
      <Navbar />
      {/* ── Header ─────────────────────────────────────────────────── */}
      <header className="relative overflow-hidden pt-16 sm:pt-20 pb-6 sm:pb-8 px-4 sm:px-6 lg:px-8 border-b border-ink/10">
        <div
          className="absolute inset-x-0 top-0 h-full pointer-events-none opacity-60"
          aria-hidden="true"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, var(--hero-glow) 0%, transparent 70%)",
          }}
        />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-3xl sm:text-4xl md:text-5xl text-ink tracking-tight mb-2 sm:mb-3">
            {soloAudience ? (
              <>
                Portfolios for{" "}
                <span className="italic text-brand">{soloAudience.label}</span>
              </>
            ) : (
              <>
                Every portfolio,{" "}
                <span className="italic text-brand">filterable</span>
              </>
            )}
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed">
            {soloAudience
              ? soloAudience.blurb
              : `Search 30+ hand-crafted templates and filter by profession, specialty, or price.`}
          </p>
        </div>
      </header>

      {/* ── Filter + grid ──────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<FilterShellFallback />}>
          <FilterShell />
        </Suspense>

        <div className="pt-6 sm:pt-8">
          {/* Result count */}
          <div className="flex items-center justify-between mb-5 sm:mb-6">
            <p className="text-sm text-ink-soft">
              <span className="font-semibold text-ink tabular-nums">{filtered.length}</span>{" "}
              of {TEMPLATES.length} template{filtered.length === 1 ? "" : "s"}
            </p>
          </div>

          {filtered.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
              {filtered.map((t) => (
                <TemplateCard key={t.id} template={t} />
              ))}
            </div>
          ) : (
            <EmptyState />
          )}

          {/* Footer CTA */}
          <div className="text-center mt-20 mb-20">
            <p className="text-ink-soft text-sm mb-5">
              Can&apos;t find a fit? We custom-build portfolios from scratch.
            </p>
            <a
              href="https://wa.me/971568450406"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-sm font-semibold text-canvas-bg bg-brand hover:bg-brand/90 rounded-md transition-all duration-200 hover:-translate-y-0.5"
            >
              Talk to us on WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}

function FilterShellFallback() {
  return (
    <div className="h-16 -mx-4 sm:-mx-6 lg:-mx-8 mb-2 bg-ink/5 animate-pulse" aria-hidden="true" />
  );
}

function EmptyState() {
  return (
    <div className="text-center py-20 px-6 border border-dashed border-ink/20 rounded-2xl">
      <div className="w-14 h-14 mx-auto rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mb-5">
        <svg className="w-6 h-6 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </div>
      <h3 className="font-serif text-2xl text-ink mb-2">No templates match those filters</h3>
      <p className="text-ink-soft text-sm max-w-md mx-auto mb-6">
        Try removing a filter above, or browse everything we&apos;ve got.
      </p>
      <Link
        href="/templates"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-canvas-bg bg-brand hover:bg-brand/90 rounded-full transition-all duration-200"
      >
        Show all {TEMPLATES.length} templates
      </Link>
    </div>
  );
}
