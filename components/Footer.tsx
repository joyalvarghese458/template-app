import Link from "next/link";

const WA_ICON = (
  <svg
    className="w-5 h-5 shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const IG_ICON = (
  <svg
    className="w-5 h-5 shrink-0"
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-brand">
      {/* Top border */}
      <div className="h-px bg-canvas-bg/30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {/* ── Column 1: Brand ──────────────────────────────────── */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <p className="font-sans text-2xl font-black tracking-[-0.04em] text-canvas-bg mb-2">
              My <span className="text-black">Portfolio</span>
            </p>
            <p className="text-sm text-canvas-bg/60 leading-relaxed mb-5">
              Crafting portfolios that get you hired.
            </p>

            <a
              href="https://wa.me/971568450406"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-brand bg-canvas-bg hover:bg-canvas-bg/90 text-sm font-semibold rounded-md transition-all duration-200 hover:-translate-y-0.5"
            >
              {WA_ICON}
              WhatsApp Us
            </a>
          </div>

          {/* ── Column 2: Quick Links ─────────────────────────────── */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-semibold text-canvas-bg uppercase tracking-[0.22em] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { href: "/templates", label: "Templates" },
                { href: "/pricing", label: "Pricing" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map(({ href, label }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-sm text-canvas-bg/70 hover:text-canvas-bg transition-colors duration-150"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* ── Column 3: Contact ─────────────────────────────────── */}
          <div className="text-center md:text-left">
            <h3 className="text-xs font-semibold text-canvas-bg uppercase tracking-[0.22em] mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-canvas-bg/70">
              <li>UAE Based</li>
              <li>
                <a
                  href="https://wa.me/971568450406"
                  className="hover:text-canvas-bg transition-colors"
                >
                  WhatsApp: +971 56 845 0406
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@myportfoliowebsite.com"
                  className="hover:text-canvas-bg transition-colors"
                >
                  info@myportfoliowebsite.com
                </a>
              </li>
            </ul>

            <div className="flex gap-3 mt-5 justify-center md:justify-start">
              <a
                href="https://wa.me/971568450406"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-canvas-bg/15 hover:bg-canvas-bg/30 text-canvas-bg/80 hover:text-canvas-bg transition-all duration-150"
              >
                {WA_ICON}
              </a>
              <a
                href="https://www.instagram.com/myportfoliowebsite/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 flex items-center justify-center rounded-full bg-canvas-bg/15 hover:bg-canvas-bg/30 text-canvas-bg/80 hover:text-canvas-bg transition-all duration-150"
              >
                {IG_ICON}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-canvas-bg/10 py-5 text-center">
        <p className="text-xs text-canvas-bg/50">
          © 2026 My Portfolio. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
