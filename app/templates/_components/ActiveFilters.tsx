"use client";

import { useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  AUDIENCE_LABEL,
  SECTION_LABEL,
  SPECIALTY_LABEL,
  TIER_BY_ID,
  type AudienceId,
  type SectionId,
  type TierId,
} from "@/lib/templates";

type Props = {
  sections: SectionId[];
  audiences: AudienceId[];
  specialties: string[];
  tiers: TierId[];
  query: string;
};

export default function ActiveFilters({ sections, audiences, specialties, tiers, query }: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  const hasAny =
    sections.length > 0 || audiences.length > 0 || specialties.length > 0 || tiers.length > 0 || query !== "";

  const removeFrom = useCallback(
    (key: "section" | "audience" | "specialty" | "tier" | "q", value?: string) => {
      const next = new URLSearchParams(sp.toString());
      if (key === "q" || !value) {
        next.delete(key);
      } else {
        const current = (next.get(key) ?? "").split(",").filter(Boolean);
        const filtered = current.filter((v) => v !== value);
        if (filtered.length) next.set(key, filtered.join(","));
        else next.delete(key);
      }
      const qs = next.toString();
      router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    },
    [sp, router, pathname]
  );

  if (!hasAny) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 mt-3">
      {query && (
        <Chip label={`"${query}"`} onRemove={() => removeFrom("q")} />
      )}
      {sections.map((s) => (
        <Chip
          key={`sec-${s}`}
          label={SECTION_LABEL[s]}
          onRemove={() => removeFrom("section", s)}
        />
      ))}
      {audiences.map((a) => (
        <Chip
          key={`a-${a}`}
          label={AUDIENCE_LABEL[a]}
          onRemove={() => removeFrom("audience", a)}
        />
      ))}
      {specialties.map((s) => (
        <Chip
          key={`s-${s}`}
          label={SPECIALTY_LABEL[s] ?? s}
          onRemove={() => removeFrom("specialty", s)}
        />
      ))}
      {tiers.map((t) => (
        <Chip
          key={`t-${t}`}
          label={`${TIER_BY_ID[t].label} · AED ${TIER_BY_ID[t].price}`}
          onRemove={() => removeFrom("tier", t)}
        />
      ))}

      <button
        type="button"
        onClick={() => router.push(pathname, { scroll: false })}
        className="ml-1 inline-flex items-center px-2.5 py-1 text-[11px] font-semibold text-brand-dark hover:bg-brand/10 rounded-full transition"
      >
        Clear all
      </button>
    </div>
  );
}

function Chip({ label, onRemove }: { label: string; onRemove: () => void }) {
  return (
    <span className="inline-flex items-center gap-1 pl-3 pr-1 py-1 text-xs font-medium text-brand-dark bg-brand/10 border border-brand/25 rounded-full">
      {label}
      <button
        type="button"
        onClick={onRemove}
        className="w-5 h-5 inline-flex items-center justify-center rounded-full text-brand-dark hover:bg-brand/20 transition"
        aria-label={`Remove ${label} filter`}
      >
        <svg className="w-3 h-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <path d="M18 6L6 18" />
          <path d="M6 6l12 12" />
        </svg>
      </button>
    </span>
  );
}
