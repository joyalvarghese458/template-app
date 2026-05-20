"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import {
  AUDIENCES,
  TIERS,
  AUDIENCE_COUNTS,
  TIER_COUNTS,
  SPECIALTY_COUNTS,
  getAllSpecialties,
  filterTemplates,
  parseQuery,
  type AudienceId,
  type TierId,
} from "@/lib/templates";

const ALL_SPECIALTIES = getAllSpecialties();
const SPECIALTY_PREVIEW_COUNT = 6;

type Props = {
  open: boolean;
  onClose: () => void;
  currentAudiences: AudienceId[];
  currentSpecialties: string[];
  currentTiers: TierId[];
};

export default function FilterDrawer({
  open,
  onClose,
  currentAudiences,
  currentSpecialties,
  currentTiers,
}: Props) {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();

  // ── Pending selections — local until "Apply" ──────────────────────
  const [audiences, setAudiences] = useState<Set<AudienceId>>(new Set(currentAudiences));
  const [specialties, setSpecialties] = useState<Set<string>>(new Set(currentSpecialties));
  const [tiers, setTiers] = useState<Set<TierId>>(new Set(currentTiers));

  // Resync from URL each time the drawer opens (in case URL changed
  // via active-filter chip removal while the drawer was closed).
  useEffect(() => {
    if (!open) return;
    setAudiences(new Set(currentAudiences));
    setSpecialties(new Set(currentSpecialties));
    setTiers(new Set(currentTiers));
  }, [open]); // eslint-disable-line react-hooks/exhaustive-deps

  // ── Section collapse state ────────────────────────────────────────
  const [openSections, setOpenSections] = useState({
    audience: true,
    specialty: true,
    tier: true,
  });
  const [showAllSpecialties, setShowAllSpecialties] = useState(false);

  // ── Body scroll lock + ESC + focus management ─────────────────────
  const closeBtnRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  // ── Apply + clear ─────────────────────────────────────────────────
  const toggle = <T,>(set: Set<T>, value: T, setter: (s: Set<T>) => void) => {
    const next = new Set(set);
    if (next.has(value)) next.delete(value);
    else next.add(value);
    setter(next);
  };

  const apply = useCallback(() => {
    const next = new URLSearchParams(sp.toString());
    audiences.size ? next.set("audience", [...audiences].join(",")) : next.delete("audience");
    specialties.size ? next.set("specialty", [...specialties].join(",")) : next.delete("specialty");
    tiers.size ? next.set("tier", [...tiers].join(",")) : next.delete("tier");
    const qs = next.toString();
    router.push(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    onClose();
  }, [audiences, specialties, tiers, sp, router, pathname, onClose]);

  const clearAll = () => {
    setAudiences(new Set());
    setSpecialties(new Set());
    setTiers(new Set());
  };

  // Live preview of how many templates will match if Apply is clicked
  const previewCount = useMemo(() => {
    return filterTemplates({
      audiences: [...audiences],
      specialties: [...specialties],
      tiers: [...tiers],
      q: parseQuery(sp.get("q") ?? undefined),
    }).length;
  }, [audiences, specialties, tiers, sp]);

  const totalActive = audiences.size + specialties.size + tiers.size;
  const visibleSpecialties = showAllSpecialties
    ? ALL_SPECIALTIES
    : ALL_SPECIALTIES.slice(0, SPECIALTY_PREVIEW_COUNT);

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={onClose}
        className={`fixed inset-0 z-40 bg-ink/40 backdrop-blur-sm transition-opacity duration-200 ${
          open ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!open}
      />

      {/* Drawer */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Filter templates"
        className={`fixed top-0 left-0 bottom-0 z-50 w-full max-w-sm bg-canvas-bg shadow-2xl flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <header className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-ink/10 shrink-0">
          <h2 className="font-serif text-xl text-ink tracking-tight">
            Filters
            {totalActive > 0 && (
              <span className="ml-2 text-sm font-sans font-normal text-ink-soft">
                · <span className="text-brand">{totalActive} selected</span>
              </span>
            )}
          </h2>
          <button
            ref={closeBtnRef}
            type="button"
            onClick={onClose}
            className="-mr-2 w-9 h-9 flex items-center justify-center rounded-full text-ink hover:bg-ink/5 transition"
            aria-label="Close filters"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M18 6L6 18" />
              <path d="M6 6l12 12" />
            </svg>
          </button>
        </header>

        {/* Body — scrollable */}
        <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-2 divide-y divide-ink/10">
          {/* Profession */}
          <FilterSection
            title="Profession"
            selectedCount={audiences.size}
            open={openSections.audience}
            onToggle={() => setOpenSections((s) => ({ ...s, audience: !s.audience }))}
          >
            {AUDIENCES.map((a) => (
              <CheckboxRow
                key={a.id}
                checked={audiences.has(a.id)}
                onChange={() => toggle(audiences, a.id, setAudiences)}
                label={a.label}
                count={AUDIENCE_COUNTS[a.id]}
              />
            ))}
          </FilterSection>

          {/* Specialty */}
          <FilterSection
            title="Specialty"
            selectedCount={specialties.size}
            open={openSections.specialty}
            onToggle={() => setOpenSections((s) => ({ ...s, specialty: !s.specialty }))}
          >
            {visibleSpecialties.map((s) => (
              <CheckboxRow
                key={s.id}
                checked={specialties.has(s.id)}
                onChange={() => toggle(specialties, s.id, setSpecialties)}
                label={s.label}
                count={SPECIALTY_COUNTS[s.id] ?? 0}
              />
            ))}
            {ALL_SPECIALTIES.length > SPECIALTY_PREVIEW_COUNT && (
              <button
                type="button"
                onClick={() => setShowAllSpecialties((v) => !v)}
                className="inline-flex items-center gap-1.5 px-1 py-2 text-sm font-medium text-brand-dark hover:text-brand transition"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  {showAllSpecialties ? (
                    <path d="M5 12h14" />
                  ) : (
                    <>
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </>
                  )}
                </svg>
                {showAllSpecialties
                  ? "Show less"
                  : `View more (${ALL_SPECIALTIES.length - SPECIALTY_PREVIEW_COUNT})`}
              </button>
            )}
          </FilterSection>

          {/* Tier */}
          <FilterSection
            title="Tier"
            selectedCount={tiers.size}
            open={openSections.tier}
            onToggle={() => setOpenSections((s) => ({ ...s, tier: !s.tier }))}
          >
            {TIERS.map((t) => (
              <CheckboxRow
                key={t.id}
                checked={tiers.has(t.id)}
                onChange={() => toggle(tiers, t.id, setTiers)}
                label={t.label}
                count={TIER_COUNTS[t.id]}
                suffix={`AED ${t.price}`}
              />
            ))}
          </FilterSection>
        </div>

        {/* Footer */}
        <footer className="flex items-center gap-3 px-5 sm:px-6 py-4 border-t border-ink/10 shrink-0 bg-canvas-bg">
          <button
            type="button"
            onClick={clearAll}
            disabled={totalActive === 0}
            className="flex-1 px-4 py-3 text-sm font-semibold text-ink bg-canvas-bg border border-ink/20 hover:border-ink/40 rounded-full transition disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:border-ink/20"
          >
            Clear all
          </button>
          <button
            type="button"
            onClick={apply}
            className="flex-1 px-4 py-3 text-sm font-semibold text-canvas-bg bg-brand hover:bg-brand/90 rounded-full shadow-lg shadow-brand/30 transition-all duration-150 active:scale-95"
          >
            Show {previewCount}{" "}
            <span className="font-normal opacity-90">
              {previewCount === 1 ? "result" : "results"}
            </span>
          </button>
        </footer>
      </aside>
    </>
  );
}

// ────────────────────────────────────────────────────────────────────

function FilterSection({
  title,
  selectedCount,
  open,
  onToggle,
  children,
}: {
  title: string;
  selectedCount: number;
  open: boolean;
  onToggle: () => void;
  children: React.ReactNode;
}) {
  return (
    <section className="py-4">
      <button
        type="button"
        onClick={onToggle}
        className="w-full flex items-center justify-between text-left group"
        aria-expanded={open}
      >
        <span className="font-semibold text-ink text-[15px]">
          {title}
          {selectedCount > 0 && (
            <span className="ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-bold text-canvas-bg bg-brand rounded-full tabular-nums align-middle">
              {selectedCount}
            </span>
          )}
        </span>
        <svg
          className={`w-4 h-4 text-ink-soft group-hover:text-ink transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-out ${
          open ? "grid-rows-[1fr] mt-2" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col">{children}</div>
        </div>
      </div>
    </section>
  );
}

function CheckboxRow({
  checked,
  onChange,
  label,
  count,
  suffix,
}: {
  checked: boolean;
  onChange: () => void;
  label: string;
  count: number;
  suffix?: string;
}) {
  return (
    <label className="flex items-center gap-3 px-1 py-2 cursor-pointer rounded-md hover:bg-ink/[0.03] transition group">
      <span
        className={`relative w-[18px] h-[18px] shrink-0 rounded border transition-colors ${
          checked
            ? "bg-brand border-brand"
            : "bg-canvas-bg border-ink/30 group-hover:border-ink/50"
        }`}
      >
        <input
          type="checkbox"
          checked={checked}
          onChange={onChange}
          className="absolute inset-0 opacity-0 cursor-pointer"
        />
        {checked && (
          <svg
            className="absolute inset-0 w-full h-full text-canvas-bg p-[2px]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={3.5}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M5 12l5 5L20 7" />
          </svg>
        )}
      </span>
      <span className="text-sm text-ink flex-1 select-none">
        {label}
        {suffix && (
          <span className="ml-2 text-[11px] font-medium text-ink-soft">· {suffix}</span>
        )}
      </span>
      <span className="text-xs text-ink-soft tabular-nums select-none">{count}</span>
    </label>
  );
}
