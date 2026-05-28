import type { Metadata } from "next";
import heroImage from "@/app/opengraph-image.jpg";
import heroImageMobile from "@/app/landing-mb.webp";
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

export const metadata: Metadata = {
  title: "Professional Portfolio Templates — Launch in Days",
  description:
    "Browse 30+ premium portfolio templates for designers, developers, photographers & creators. Starting at AED 49. One-time payment, lifetime ownership.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "https://www.myportfoliowebsite.com/",
  },
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "My Portfolio",
  url: "https://www.myportfoliowebsite.com",
  description:
    "Hand-crafted portfolio templates for designers, developers, photographers, and creators.",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://www.myportfoliowebsite.com/templates?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "My Portfolio",
  url: "https://www.myportfoliowebsite.com",
  logo: "https://www.myportfoliowebsite.com/icon.svg",
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971568450406",
    contactType: "customer service",
    areaServed: "AE",
    availableLanguage: "English",
  },
};

export default function Home() {
  return (
    <main className="bg-canvas-bg">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
      />
      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative flex flex-col overflow-hidden" style={{ height: "100svh" }}>
        {/* Full-width background image */}
        <Image
          src={heroImage}
          alt="Landing"
          fill
          className="object-cover object-center hidden sm:block"
          priority
        />
        <Image
          src={heroImageMobile}
          alt="Landing"
          fill
          className="object-cover object-center block sm:hidden"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50" aria-hidden="true" />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center justify-center w-full px-6 sm:px-8 lg:px-12 pt-20 pb-6 text-center">

          {/* Rating pill */}
          <div className="inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full border border-white/25 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm">
            <span className="flex items-center gap-0.5" aria-label="4.5 out of 5 stars">
              {[0, 1, 2, 3].map((i) => (
                <svg key={i} className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                </svg>
              ))}
              <span className="relative inline-block w-3.5 h-3.5">
                <svg className="absolute inset-0 w-full h-full text-yellow-400/30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                </svg>
                <svg className="absolute inset-0 w-full h-full text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ clipPath: "inset(0 50% 0 0)" }}>
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                </svg>
              </span>
            </span>
            <span className="h-3.5 w-px bg-white/30" aria-hidden="true" />
            <span className="text-sm font-bold text-white tabular-nums">4.5</span>
            <span className="text-[10px] font-semibold text-white/60 tracking-wide">/ 5</span>
          </div>

          {/* Heading */}
          <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-[-0.02em] leading-[1.1] mb-5 sm:mb-6 max-w-3xl">
            Portfolio designed to stand out.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-sm sm:max-w-2xl mb-8 sm:mb-10 leading-relaxed">
            Premium portfolio templates for creators, agencies &amp; personal brands.
            Launch in days, not weeks.
          </p>

          {/* CTA */}
          <a
            href="#templates"
            className="group inline-flex items-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-brand rounded-full shadow-[0_8px_32px_-8px_rgba(0,119,181,0.7)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(0,119,181,0.8)] transition-all duration-200 active:translate-y-0 mb-8 sm:mb-10"
          >
            Browse Templates
            <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
            </svg>
          </a>

          {/* Trust strip */}
          <div className="flex flex-col items-center gap-2 text-[11px] sm:text-xs text-white/60">
            <div className="flex items-center gap-2.5">
              <span className="whitespace-nowrap flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-brand shrink-0" /><span className="text-white font-semibold">4.9</span>&nbsp;· 280+ reviews</span>
              <span className="shrink-0 w-px h-3 bg-white/20" />
              <span className="whitespace-nowrap flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-brand shrink-0" /><span className="text-white font-semibold">30+</span>&nbsp;templates</span>
            </div>
            <span className="whitespace-nowrap flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-brand shrink-0" />One-time payment · lifetime ownership</span>
          </div>

        </div>

        {/* Scroll cue */}
        <a
          href="#templates"
          aria-label="Scroll to explore"
          className="relative z-10 flex flex-col items-center gap-1.5 text-white/60 hover:text-white transition-colors duration-150 pb-4"
        >
          <span className="text-[10px] sm:text-xs tracking-wide">Scroll to explore</span>
          <svg className="w-4 h-4 sm:w-5 sm:h-5 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 5v14" />
            <path d="M19 12l-7 7-7-7" />
          </svg>
        </a>

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