import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import TemplatesSection from "@/components/TemplatesSection";
import ReviewSection from "@/components/ReviewSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowItWorks from "@/components/HowItWorks";
import ScrollingBackgroundSection from "@/components/ScrollingBackgroundSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import OfferBanner from "@/components/OfferBanner";

export default function Home() {
  return (
    <main className="bg-canvas-bg">
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden" style={{ height: "100svh" }}>
        {/* Full-width background image */}
        <Image
          src="/landing-img.png"
          alt="Landing"
          fill
          className="object-cover object-top sm:object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" aria-hidden="true" />

        {/* Hero content — grows to fill space above banner */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-4 text-center">
          {/* Rating pill */}
          <div className="inline-flex items-center gap-2 pl-2.5 pr-3.5 py-1.5 rounded-full border border-white/30 mb-4 sm:mb-6 bg-white/10 backdrop-blur-sm">
            <span className="flex items-center gap-0.5" aria-label="4.5 out of 5 stars">
              {[0, 1, 2, 3].map((i) => (
                <svg key={i} className="w-3 h-3 sm:w-[14px] sm:h-[14px] text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                </svg>
              ))}
              <span className="relative inline-block w-3 h-3 sm:w-[14px] sm:h-[14px]">
                <svg className="absolute inset-0 w-full h-full text-yellow-400/30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                </svg>
                <svg className="absolute inset-0 w-full h-full text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ clipPath: "inset(0 50% 0 0)" }}>
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                </svg>
              </span>
            </span>
            <span className="h-3 w-px bg-white/30" aria-hidden="true" />
            <span className="text-xs sm:text-sm font-bold text-white tabular-nums">4.5</span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-white/70 tracking-wide">/ 5</span>
          </div>

          <h1 className="font-serif font-bold text-[1.75rem] xs:text-3xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-[-0.025em] leading-[1.08] mb-3 sm:mb-5">
            Portfolios designed to stand out.
          </h1>

          <p className="text-xs sm:text-base md:text-lg text-white/80 max-w-xl sm:max-w-2xl mb-5 sm:mb-8 leading-relaxed px-2 sm:px-0">
            Premium customizable portfolio templates for creators, agencies,
            freelancers, and personal brands. Launch in days, not weeks.
          </p>

          <a
            href="#templates"
            className="group inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-4 text-sm sm:text-base font-semibold text-white bg-brand rounded-full shadow-[0_10px_40px_-10px_rgba(0,119,181,0.6)] hover:-translate-y-0.5 hover:shadow-[0_18px_50px_-10px_rgba(0,119,181,0.7)] transition-all duration-200 active:translate-y-0"
          >
            Browse Templates
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="M13 5l7 7-7 7" />
            </svg>
          </a>

          {/* Trust strip */}
          <div className="mt-5 sm:mt-8 flex flex-col sm:flex-row flex-wrap items-center justify-center gap-y-1.5 gap-x-5 text-xs text-white/70">
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span><span className="text-white font-semibold">4.9</span> · 280+ reviews</span>
            </span>
            <span className="hidden sm:inline-block w-px h-3.5 bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span><span className="text-white font-semibold">30+</span> templates</span>
            </span>
            <span className="hidden sm:inline-block w-px h-3.5 bg-white/20" />
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-brand" />
              <span>One-time payment · lifetime ownership</span>
            </span>
          </div>
        </div>

        {/* Offer banner always pinned to bottom edge of the viewport */}
        <div className="relative z-10 w-full">
          <OfferBanner />
        </div>
      </section>

      <StatsBar />

      <TemplatesSection />
      <AboutSection />
      <HowItWorks />
      <WhyChooseUs />
      <ReviewSection />
      <ScrollingBackgroundSection />
      <Footer />
    </main>
  );
}