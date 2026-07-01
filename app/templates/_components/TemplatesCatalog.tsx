"use client";

import { useState } from "react";
import type { SectionId, Template } from "@/lib/templates";
import TemplateCard from "./TemplateCard";

type Currency = "AED" | "INR";

export default function TemplatesCatalog({
  visibleTemplates,
  visibleTemplateCount,
  grouped,
  hasActiveFilter,
}: {
  visibleTemplates: Template[];
  visibleTemplateCount: number;
  grouped: {
    sectionId: SectionId;
    label: string;
    blurb: string;
    templates: Template[];
  }[];
  hasActiveFilter: boolean;
}) {
  const [currency, setCurrency] = useState<Currency>("AED");

  return (
    <div className="pt-6 sm:pt-8">
      <div className="flex flex-col gap-4 mb-5 sm:mb-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-ink-soft">
          <span className="font-semibold text-ink tabular-nums">
            {visibleTemplates.length}
          </span>{" "}
          of {visibleTemplateCount} template
          {visibleTemplates.length === 1 ? "" : "s"}
        </p>

        <div className="inline-flex items-center self-start rounded-full border border-ink/15 bg-ink/5 p-1 gap-1">
          {(["AED", "INR"] as Currency[]).map((value) => (
            <button
              key={value}
              type="button"
              onClick={() => setCurrency(value)}
              className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all duration-200 ${
                currency === value
                  ? "bg-brand text-canvas-bg shadow-sm shadow-brand/30"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              {value}
            </button>
          ))}
        </div>
      </div>

      {visibleTemplates.length > 0 ? (
        hasActiveFilter ? (
          <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
            {visibleTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                currency={currency}
              />
            ))}
          </div>
        ) : (
          <div className="space-y-12 sm:space-y-16">
            {grouped.map((group) => (
              <section key={group.sectionId}>
                <div className="flex items-baseline gap-3 mb-5 sm:mb-6">
                  <h2 className="font-serif text-2xl sm:text-3xl text-ink tracking-tight">
                    {group.label}
                  </h2>
                  <span className="text-sm text-ink-soft hidden sm:inline">
                    {group.blurb}
                  </span>
                  <span className="ml-auto text-xs text-ink-soft tabular-nums shrink-0">
                    {group.templates.length} template
                    {group.templates.length === 1 ? "" : "s"}
                  </span>
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 sm:gap-5 lg:gap-6">
                  {group.templates.map((template) => (
                    <TemplateCard
                      key={template.id}
                      template={template}
                      currency={currency}
                    />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )
      ) : null}
    </div>
  );
}
