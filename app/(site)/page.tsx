import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import TemplatesSection from "@/components/TemplatesSection";
import ReviewSection from "@/components/ReviewSection";
import ScrollingBackgroundSection from "@/components/ScrollingBackgroundSection";
import Footer from "@/components/Footer";
import HeroPortfolioCarousel from "@/components/HeroPortfolioCarousel";

export default function Home() {
  return (
    <main className="bg-canvas-bg">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative min-h-svh flex items-center overflow-hidden bg-canvas-bg">
        {/* ── Ambient background: glow orbs + grid + noise ──────── */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          {/* Top-left brand orb */}
          <div
            className="absolute -top-32 -left-32 w-[28rem] h-[28rem] sm:w-[36rem] sm:h-[36rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-brand) 0%, transparent 60%)",
              opacity: 0.35,
              animation: "heroGlow 9s ease-in-out infinite",
            }}
          />
          {/* Bottom-right brand orb */}
          <div
            className="absolute -bottom-40 -right-32 w-[26rem] h-[26rem] sm:w-[40rem] sm:h-[40rem] rounded-full blur-3xl"
            style={{
              background:
                "radial-gradient(circle, var(--color-brand-light) 0%, transparent 60%)",
              opacity: 0.25,
              animation: "heroGlow 11s ease-in-out infinite 2s",
            }}
          />
          {/* Center vertical wash */}
          <div
            className="absolute inset-x-0 top-0 h-[60%]"
            style={{
              background:
                "radial-gradient(ellipse 80% 60% at 50% 0%, var(--hero-glow) 0%, transparent 75%)",
            }}
          />
          {/* Subtle grid */}
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(0,0,0,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.6) 1px, transparent 1px)",
              backgroundSize: "44px 44px",
              maskImage:
                "radial-gradient(ellipse at center, black 30%, transparent 75%)",
            }}
          />
          {/* Film grain */}
          <svg
            className="absolute inset-0 w-full h-full opacity-[0.05] mix-blend-overlay"
            xmlns="http://www.w3.org/2000/svg"
          >
            <filter id="hero-noise">
              <feTurbulence
                type="fractalNoise"
                baseFrequency="0.9"
                numOctaves="2"
                stitchTiles="stitch"
              />
              <feColorMatrix values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 0.8 0" />
            </filter>
            <rect width="100%" height="100%" filter="url(#hero-noise)" />
          </svg>
        </div>

        {/* Hero content — single column on mobile, two columns on lg+ */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-20 pb-16 sm:pt-24 sm:pb-20 grid grid-cols-1 lg:grid-cols-[1fr_1.1fr] gap-12 sm:gap-14 lg:gap-12 items-center">
          {/* ── Copy column ───────────────────────────────────────── */}
          <div className="animate-fade-in-up text-center lg:text-left order-1">
            {/* Rating pill — 4.5 / 5 blue stars */}
            <div
              className="group inline-flex items-center gap-2.5 pl-3 pr-4 py-2 rounded-full border border-brand/40 mt-6 sm:mt-0 mb-6 shadow-[0_4px_18px_-6px_rgba(37,99,235,0.35)] hover:shadow-[0_8px_24px_-8px_rgba(37,99,235,0.5)] hover:-translate-y-0.5 transition-all duration-300"
              style={{
                background:
                  "linear-gradient(135deg, #eff6ff 0%, #ffffff 60%, #dbeafe 100%)",
              }}
            >
              <span className="flex items-center gap-0.5" aria-label="4.5 out of 5 stars">
                {[0, 1, 2, 3].map((i) => (
                  <svg
                    key={i}
                    className="w-[15px] h-[15px] text-brand drop-shadow-[0_1px_1px_rgba(29,78,216,0.35)] transition-transform duration-300 group-hover:scale-110"
                    style={{ transitionDelay: `${i * 40}ms` }}
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
                {/* Half star — blue left half over faded right half */}
                <span className="relative inline-block w-[15px] h-[15px] transition-transform duration-300 group-hover:scale-110" style={{ transitionDelay: "160ms" }}>
                  <svg
                    className="absolute inset-0 w-[15px] h-[15px] text-brand/25"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                  </svg>
                  <svg
                    className="absolute inset-0 w-[15px] h-[15px] text-brand drop-shadow-[0_1px_1px_rgba(29,78,216,0.35)]"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true"
                    style={{ clipPath: "inset(0 50% 0 0)" }}
                  >
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                  </svg>
                </span>
              </span>

              <span className="h-3.5 w-px bg-brand/40" aria-hidden="true" />

              <span className="flex items-baseline gap-1 leading-none">
                <span className="text-sm sm:text-base font-bold text-brand-dark tabular-nums">
                  4.5
                </span>
                <span className="text-[10px] font-semibold text-brand-dark/70 tracking-wide">
                  / 5
                </span>
              </span>
            </div>

            <h1 className="font-serif font-bold text-[2.5rem] leading-[1.02] sm:text-6xl md:text-7xl xl:text-[5.25rem] text-ink tracking-[-0.025em] mb-5 sm:mb-7">
              Portfolios
              <br className="hidden sm:block" /> designed{" "}
              <span className="relative inline-block">
                <span className="italic font-medium bg-gradient-to-r from-brand via-brand-light to-brand bg-clip-text text-transparent">
                  to stand out
                </span>
                <span
                  className="absolute -inset-x-2 -inset-y-1 -z-10 blur-2xl opacity-50"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-brand), var(--color-brand-light))",
                  }}
                  aria-hidden="true"
                />
              </span>
              .
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-ink-soft max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 leading-relaxed">
              Premium customizable portfolio templates for creators, agencies,
              freelancers, and personal brands. Launch in days, not weeks.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start items-stretch sm:items-center">
              <a
                href="#templates"
                className="group relative w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-canvas-bg bg-brand rounded-full overflow-hidden shadow-[0_10px_40px_-10px_var(--color-brand)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_var(--color-brand)] active:translate-y-0"
              >
                <span className="relative z-10">Browse Templates</span>
                <svg
                  className="relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5"
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
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background:
                      "linear-gradient(90deg, var(--color-brand-light), var(--color-brand))",
                  }}
                  aria-hidden="true"
                />
              </a>

            </div>

            {/* Trust strip */}
            <div className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-x-5 gap-y-2 text-xs text-ink-soft/80">
              <span className="inline-flex items-center gap-1.5">
                <svg
                  className="w-3.5 h-3.5 text-brand"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M12 2l2.4 7.4H22l-6.2 4.5L18.2 22 12 17.5 5.8 22l2.4-8.1L2 9.4h7.6z" />
                </svg>
                <span>
                  <span className="text-ink font-semibold">4.9</span> · 280+ reviews
                </span>
              </span>
              <span className="hidden sm:inline-block w-px h-3.5 bg-ink/15" />
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span>
                  <span className="text-ink font-semibold">30+</span> templates
                </span>
              </span>
              <span className="hidden sm:inline-block w-px h-3.5 bg-ink/15" />
              <span className="inline-flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand" />
                <span>One-time payment · lifetime ownership</span>
              </span>
            </div>
          </div>

          {/* ── Mobile-only scroll-to-explore cue (above preview) ── */}
          <a
            href="#templates"
            aria-label="Scroll to explore"
            className="order-2 md:hidden -mb-4 flex flex-col items-center gap-1 text-ink-soft hover:text-ink transition-colors duration-150"
          >
            <span className="text-xs tracking-wide">Scroll to explore</span>
            <svg
              className="w-5 h-5 animate-scroll-bounce"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M12 5v14" />
              <path d="M19 12l-7 7-7-7" />
            </svg>
          </a>

          {/* ── Device showcase column ────────────────────────────── */}
          <div className="relative order-3 lg:order-2 animate-fade-in-up w-full">
            <HeroPortfolioCarousel />
          </div>
        </div>

        {/* ── Scroll-to-explore cue ──────────────────────────────── */}
        <a
          href="#templates"
          aria-label="Scroll to explore"
          className="absolute bottom-6 sm:bottom-10 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-ink-soft hover:text-ink transition-colors duration-150"
        >
          <span className="text-xs tracking-wide">Scroll to explore</span>
          <svg
            className="w-5 h-5 animate-scroll-bounce"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>
        </a>
      </section>

      <StatsBar />
      
      <TemplatesSection />
      <AboutSection />
      <ReviewSection />
      <ScrollingBackgroundSection />
      <Footer />
    </main>
  );
}