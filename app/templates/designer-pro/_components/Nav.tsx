"use client";

import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";

const LINKS = [
  { label: "Home",  href: "/templates/designer-pro" },
  { label: "About", href: "/templates/designer-pro/about" },
  { label: "Work",  href: "/templates/designer-pro/work" },
] as const;

const CONTACT_HREF = "/templates/designer-pro/contact";

const noopSubscribe = () => () => {};

// SSR-safe "are we mounted on the client" check (no setState-in-effect needed):
// false during server render/hydration, true once running in the browser.
function useIsClient() {
  return useSyncExternalStore(noopSubscribe, () => true, () => false);
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  // The shared site layout wraps every template page in a page-enter transition
  // div. Any non-"none" transform on that ancestor gives position:fixed
  // descendants a new containing block, so they drift with scroll instead of
  // staying pinned. Portaling straight to <body> sidesteps that ancestor
  // entirely, without needing changes outside this template's own folder.
  const isClient = useIsClient();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!isClient) return null;

  const nav = (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4">
      <nav
        className="inline-flex items-center rounded-full backdrop-blur-md border px-2 py-2 transition-all duration-300"
        style={{
          borderColor: "rgba(255,255,255,0.1)",
          backgroundColor: "hsl(0 0% 8%)",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none",
        }}
      >
        {/* Logo ring */}
        <Link
          href="/templates/designer-pro"
          className="relative w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 hover:scale-110"
          style={{ padding: "2px", background: "linear-gradient(90deg, #89AACC, #4E85BF)" }}
          aria-label="Home"
        >
          <span
            className="w-full h-full rounded-full flex items-center justify-center text-[13px] italic leading-none"
            style={{
              fontFamily: '"Playfair Display", serif',
              backgroundColor: "hsl(0 0% 4%)",
              color: "hsl(0 0% 96%)",
            }}
          >
            JA
          </span>
        </Link>

        {/* Divider */}
        <div
          className="hidden sm:block w-px h-5 mx-2 flex-shrink-0"
          style={{ backgroundColor: "hsl(0 0% 12%)" }}
        />

        {/* Nav links */}
        {LINKS.map(({ label, href }) => {
          const isActive =
            pathname === href || (href !== "/templates/designer-pro" && pathname.startsWith(href));

          return (
            <Link
              key={label}
              href={href}
              className="text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-all duration-200 whitespace-nowrap"
              style={{
                color: isActive ? "hsl(0 0% 96%)" : "hsl(0 0% 53%)",
                backgroundColor: isActive ? "hsl(0 0% 12% / 0.5)" : "transparent",
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "hsl(0 0% 96%)";
                  el.style.backgroundColor = "hsl(0 0% 12% / 0.5)";
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.color = "hsl(0 0% 53%)";
                  el.style.backgroundColor = "transparent";
                }
              }}
            >
              {label}
            </Link>
          );
        })}

        {/* Divider */}
        <div
          className="hidden sm:block w-px h-5 mx-2 flex-shrink-0"
          style={{ backgroundColor: "hsl(0 0% 12%)" }}
        />

        {/* Say hi button */}
        <Link
          href={CONTACT_HREF}
          className="relative group flex items-center"
        >
          <span
            className="absolute inset-[-2px] rounded-full transition-opacity duration-300"
            style={{
              background: "linear-gradient(90deg, #89AACC, #4E85BF)",
              opacity: pathname === CONTACT_HREF ? 1 : 0,
            }}
            aria-hidden="true"
          />
          <span
            className="absolute inset-[-2px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={{ background: "linear-gradient(90deg, #89AACC, #4E85BF)" }}
            aria-hidden="true"
          />
          <span
            className="relative z-10 flex items-center gap-1 rounded-full text-xs sm:text-sm px-3 sm:px-4 py-1.5 sm:py-2 whitespace-nowrap"
            style={{
              backgroundColor: "hsl(0 0% 8%)",
              color: "hsl(0 0% 96%)",
            }}
          >
            Say hi <span aria-hidden="true">↗</span>
          </span>
        </Link>
      </nav>
    </header>
  );

  return createPortal(nav, document.body);
}
