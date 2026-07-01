import { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import {
  AUDIENCES,
  SECTIONS,
  SECTION_ORDER,
  TEMPLATES,
  filterTemplates,
  parseAudiences,
  parseSections,
  parseSpecialties,
  parseTiers,
  parseQuery,
  type SectionId,
} from "@/lib/templates";
import FilterShell from "./_components/FilterShell";
import TemplatesCatalog from "./_components/TemplatesCatalog";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "All Portfolio Templates â€” Browse 30+ Designs",
  description:
    "Browse 30+ hand-crafted portfolio templates. Filter by section, profession, or price. Starting from AED 49.",
  alternates: {
    canonical: "/templates",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/templates",
    title: "All Portfolio Templates â€” Browse 30+ Designs",
    description:
      "Browse 30+ hand-crafted portfolio templates. Filter by section, profession, or price. Starting from AED 49.",
  },
  twitter: {
    card: "summary_large_image",
    title: "All Portfolio Templates â€” Browse 30+ Designs",
    description:
      "Browse 30+ hand-crafted portfolio templates. Filter by section, profession, or price. Starting from AED 49.",
  },
};

const CREATOR_PORTFOLIO_TEMPLATE_IDS = new Set(["x5", "s1", "s2", "p2"]);

type SearchParams = Promise<{ [key: string]: string | string[] | undefined }>;

export default async function TemplatesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const sp = await searchParams;
  const sections = parseSections(sp.section);
  const audiences = parseAudiences(sp.audience);
  const specialties = parseSpecialties(sp.specialty);
  const tiers = parseTiers(sp.tier);
  const q = parseQuery(sp.q);

  const filtered = filterTemplates({
    sections,
    audiences,
    specialties,
    tiers,
    q,
  });
  const visibleTemplates = filtered.filter(
    (template) =>
      template.section !== "creator-portfolio" ||
      CREATOR_PORTFOLIO_TEMPLATE_IDS.has(template.id),
  );
  const visibleTemplateCount = TEMPLATES.filter(
    (template) =>
      template.section !== "creator-portfolio" ||
      CREATOR_PORTFOLIO_TEMPLATE_IDS.has(template.id),
  ).length;

  const hasActiveFilter =
    sections.length > 0 ||
    audiences.length > 0 ||
    specialties.length > 0 ||
    tiers.length > 0 ||
    q.length > 0;

  const soloAudience =
    audiences.length === 1 ? AUDIENCES.find((a) => a.id === audiences[0]) : null;
  const soloSection =
    sections.length === 1 ? SECTIONS.find((s) => s.id === sections[0]) : null;

  const grouped: {
    sectionId: SectionId;
    label: string;
    blurb: string;
    templates: typeof filtered;
  }[] = SECTION_ORDER.map((sectionId) => {
    const meta = SECTIONS.find((s) => s.id === sectionId)!;
    return {
      sectionId,
      label: meta.label,
      blurb: meta.blurb,
      templates: visibleTemplates.filter((template) => template.section === sectionId),
    };
  }).filter((group) => group.templates.length > 0);

  return (
    <main className="bg-canvas-bg min-h-svh">
      <Navbar />
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
            {soloSection ? (
              <>
                <span className="italic text-brand">{soloSection.label}</span>{" "}
                Templates
              </>
            ) : soloAudience ? (
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
            {soloSection
              ? soloSection.blurb
              : soloAudience
                ? soloAudience.blurb
                : `Search ${visibleTemplateCount}+ hand-crafted templates and filter by section, profession, specialty, or price.`}
          </p>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Suspense fallback={<FilterShellFallback />}>
          <FilterShell />
        </Suspense>

        <TemplatesCatalog
          visibleTemplates={visibleTemplates}
          visibleTemplateCount={visibleTemplateCount}
          grouped={grouped}
          hasActiveFilter={hasActiveFilter}
        />

        {visibleTemplates.length === 0 ? (
          <EmptyState visibleTemplateCount={visibleTemplateCount} />
        ) : null}

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
      <Footer />
    </main>
  );
}

function FilterShellFallback() {
  return (
    <div
      className="h-16 -mx-4 sm:-mx-6 lg:-mx-8 mb-2 bg-ink/5 animate-pulse"
      aria-hidden="true"
    />
  );
}

function EmptyState({ visibleTemplateCount }: { visibleTemplateCount: number }) {
  return (
    <div className="text-center py-20 px-6 border border-dashed border-ink/20 rounded-2xl">
      <div className="w-14 h-14 mx-auto rounded-full bg-brand/10 border border-brand/30 flex items-center justify-center mb-5">
        <svg
          className="w-6 h-6 text-brand"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="M21 21l-4.3-4.3" />
        </svg>
      </div>
      <h3 className="font-serif text-2xl text-ink mb-2">
        No templates match those filters
      </h3>
      <p className="text-ink-soft text-sm max-w-md mx-auto mb-6">
        Try removing a filter above, or browse everything we&apos;ve got.
      </p>
      <Link
        href="/templates"
        className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-canvas-bg bg-brand hover:bg-brand/90 rounded-full transition-all duration-200"
      >
        Show all {visibleTemplateCount} templates
      </Link>
    </div>
  );
}
