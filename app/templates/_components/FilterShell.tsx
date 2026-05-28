"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import FilterDrawer from "./FilterDrawer";
import ActiveFilters from "./ActiveFilters";
import {
  parseAudiences,
  parseSpecialties,
  parseTiers,
  parseQuery,
} from "@/lib/templates";

const SEARCH_DEBOUNCE_MS = 250;

export default function FilterShell() {
  const router = useRouter();
  const pathname = usePathname();
  const sp = useSearchParams();
  const spString = sp.toString();

  // Current URL-driven state (recomputed on every render — cheap)
  const audiences = parseAudiences(sp.get("audience") ?? undefined);
  const specialties = parseSpecialties(sp.get("specialty") ?? undefined);
  const tiers = parseTiers(sp.get("tier") ?? undefined);
  const urlQuery = parseQuery(sp.get("q") ?? undefined);

  const activeCount = audiences.length + specialties.length + tiers.length;

  // ── Search input — local state with debounced URL sync ────────────
  const [query, setQuery] = useState(urlQuery);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const lastPushedRef = useRef(urlQuery);

  // Sync local state if URL changes from outside (back button, chip remove)
  // but not while the user is actively typing in the field.
  useEffect(() => {
    if (urlQuery !== query && document.activeElement !== inputRef.current) {
      setQuery(urlQuery);
      lastPushedRef.current = urlQuery;
    }
  }, [urlQuery]); // eslint-disable-line react-hooks/exhaustive-deps

  // Debounced URL sync on typing
  useEffect(() => {
    if (query === lastPushedRef.current) return;
    const id = setTimeout(() => {
      const next = new URLSearchParams(spString);
      if (query) next.set("q", query);
      else next.delete("q");
      lastPushedRef.current = query;
      const qs = next.toString();
      router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
    }, SEARCH_DEBOUNCE_MS);
    return () => clearTimeout(id);
  }, [query, spString, pathname, router]);

  // ── Drawer open/close ─────────────────────────────────────────────
  const [drawerOpen, setDrawerOpen] = useState(false);
  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  return (
    <>
      {/* Sticky search + filter bar */}
      <div className="sticky top-16 z-30 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-3 sm:py-4 bg-canvas-bg/85 backdrop-blur-md border-b border-ink/10">
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Search input pill */}
          <div className="relative flex-1 min-w-0">
            <svg
              className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-ink-soft pointer-events-none"
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
            <input
              ref={inputRef}
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search templates"
              aria-label="Search templates"
              className="w-full pl-11 pr-10 py-3 text-sm text-ink placeholder:text-ink-soft bg-canvas-bg border border-ink/15 rounded-full focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/20 transition-shadow [&::-webkit-search-cancel-button]:hidden"
            />
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery("");
                  inputRef.current?.focus();
                }}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-7 h-7 flex items-center justify-center rounded-full text-ink-soft hover:text-ink hover:bg-ink/10 transition"
                aria-label="Clear search"
              >
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
                  <circle cx="12" cy="12" r="9" fill="currentColor" stroke="none" opacity="0.15" />
                  <path d="M15 9l-6 6M9 9l6 6" />
                </svg>
              </button>
            )}
          </div>

          {/* All filters button */}
          <button
            type="button"
            onClick={openDrawer}
            className="shrink-0 inline-flex items-center gap-2 px-4 sm:px-5 py-3 text-sm font-semibold text-ink bg-canvas-bg border border-ink/15 hover:border-brand/40 hover:bg-brand/5 rounded-full transition-all duration-150 active:scale-95"
            aria-haspopup="dialog"
            aria-expanded={drawerOpen}
          >
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <line x1="21" y1="6" x2="14" y2="6" />
              <line x1="10" y1="6" x2="3" y2="6" />
              <line x1="21" y1="12" x2="12" y2="12" />
              <line x1="8" y1="12" x2="3" y2="12" />
              <line x1="21" y1="18" x2="16" y2="18" />
              <line x1="12" y1="18" x2="3" y2="18" />
              <circle cx="12" cy="6" r="2" fill="currentColor" stroke="none" />
              <circle cx="10" cy="12" r="2" fill="currentColor" stroke="none" />
              <circle cx="14" cy="18" r="2" fill="currentColor" stroke="none" />
            </svg>
            <span className="hidden sm:inline">All filters</span>
            <span className="sm:hidden">Filters</span>
            {activeCount > 0 && (
              <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 text-[11px] font-bold text-canvas-bg bg-brand rounded-full tabular-nums">
                {activeCount}
              </span>
            )}
          </button>
        </div>

        <ActiveFilters
          audiences={audiences}
          specialties={specialties}
          tiers={tiers}
          query={urlQuery}
        />
      </div>

      <FilterDrawer
        open={drawerOpen}
        onClose={closeDrawer}
        currentAudiences={audiences}
        currentSpecialties={specialties}
        currentTiers={tiers}
      />
    </>
  );
}
