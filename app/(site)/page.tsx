import type { Metadata } from "next";
import heroImage from "@/app/opengraph-image.jpg";
import heroImageMobile from "@/app/new-landing.webp";
import StatsBar from "@/components/StatsBar";
import AboutSection from "@/components/AboutSection";
import TemplatesSection from "@/components/TemplatesSection";
import ReviewSection from "@/components/ReviewSection";
import FAQSection from "@/components/FAQSection";
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
    images: [
      {
        url: "/Opengraph.jpg",
        width: 1200,
        height: 630,
        alt: "My Portfolio — Professional Portfolio Templates",
      },
    ],
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
          sizes="(max-width: 639px) 0px, 100vw"
          className="object-cover object-center hidden sm:block"
          priority
        />
        <Image
          src={heroImageMobile}
          alt="Landing"
          fill
          sizes="(min-width: 640px) 0px, 100vw"
          className="object-cover object-top block sm:hidden"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35 sm:bg-black/50" aria-hidden="true" />

        {/* Hero content */}
        <div className="relative z-10 flex-1 flex flex-col items-center w-full px-6 sm:px-8 lg:px-12 pt-16 sm:pt-20 pb-12 sm:pb-14 text-center">

          {/* Top content group */}
          <div className="flex flex-col items-center">
            {/* Rating pill */}
            <div className="inline-flex items-center gap-2 pl-3 pr-4 py-2 rounded-full border border-white/25 mb-6 sm:mb-8 bg-white/10 backdrop-blur-sm">
              <span className="flex items-center gap-0.5" aria-label="4.9 out of 5 stars">
                {[0, 1, 2, 3].map((i) => (
                  <svg key={i} className="w-3.5 h-3.5 text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                  </svg>
                ))}
                <span className="relative inline-block w-3.5 h-3.5">
                  <svg className="absolute inset-0 w-full h-full text-yellow-400/30" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                  </svg>
                  <svg className="absolute inset-0 w-full h-full text-yellow-400" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" style={{ clipPath: "inset(0 10% 0 0)" }}>
                    <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                  </svg>
                </span>
              </span>
              <span className="h-3.5 w-px bg-white/30" aria-hidden="true" />
              <span className="text-sm font-bold text-white tabular-nums">4.9</span>
              <span className="text-[10px] font-semibold text-white/60 tracking-wide">/ 5</span>
            </div>

            {/* Heading */}
            <h1 className="font-serif font-bold text-4xl sm:text-5xl md:text-6xl xl:text-7xl text-white tracking-[-0.02em] leading-[1.1] mb-5 sm:mb-6 max-w-3xl">
              Professional{" "}
              <span className="text-brand">Portfolio Website</span>{" "}
              for Modern Professionals.
            </h1>

            {/* Subtitle */}
            {/* <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-sm sm:max-w-2xl mb-7 sm:mb-10 leading-relaxed">
              Premium portfolio templates for creators, agencies &amp; personal brands.
              Launch in days, not weeks.
            </p> */}
            <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-sm sm:max-w-2xl mb-7 sm:mb-10 leading-relaxed">
              Launch a professional portfolio website that showcases your <br /> expertise &amp; attracts new opportunities.
            </p>
            {/* <p className="text-sm sm:text-base md:text-lg text-white/75 max-w-sm sm:max-w-2xl mb-7 sm:mb-10 leading-relaxed">
              Launch a professional portfolio website<br />
              that showcases your work and builds credibility,<br />
              helping you attract clients &amp; opportunities faster.
            </p> */}

            {/* CTA */}
            <a
              href="#templates"
              className="group inline-flex items-center gap-2.5 px-8 py-3.5 text-sm sm:text-base font-semibold text-white bg-brand rounded-full shadow-[0_8px_32px_-8px_rgba(0,119,181,0.7)] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-8px_rgba(0,119,181,0.8)] transition-all duration-200 active:translate-y-0 mb-8 sm:mb-10"
            >
              Launch Your Portfolio
              <svg className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14" /><path d="M13 5l7 7-7 7" />
              </svg>
            </a>

          </div>

          {/* Flexible spacer — grows to fill available space, collapses on small viewports */}
          <div className="flex-1 min-h-0" aria-hidden="true" />

          {/* Stats grid — all screen sizes, pinned to bottom */}
          <div className="w-full border-t border-white/15 pt-3 max-w-lg sm:max-w-xl mx-auto">
            <div className="grid grid-cols-4 gap-1">
              {/* 4.9 reviews */}
              <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.78 1.401 8.169L12 19.243l-7.335 3.917 1.401-8.169L.132 9.211l8.2-1.193z" />
                </svg>
                <span className="text-white font-bold text-sm leading-none">4.9 Rating</span>
                <span className="text-white/55 text-[10px] leading-tight text-center">Trusted by pros</span>
              </div>
              {/* 30+ templates */}
              <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                </svg>
                <span className="text-white font-bold text-sm leading-none">30+ Templates</span>
                <span className="text-white/55 text-[10px] leading-tight text-center">Modern & responsive</span>
              </div>
              {/* One-time payment */}
              <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <span className="text-white font-bold text-sm leading-none">7 day delivery</span>
                <span className="text-white/55 text-[10px] leading-tight text-center">Fast turnaround time</span>
              </div>
              {/* Lifetime ownership */}
              <div className="flex flex-col items-center gap-1">
                <svg className="w-5 h-5 text-brand" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.75} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18.178 8c5.096 0 5.096 8 0 8-5.095 0-7.133-8-12.739-8-4.585 0-4.585 8 0 8 5.606 0 7.644-8 12.739-8z" />
                </svg>
                <span className="text-white font-bold text-sm leading-none">Lifetime</span>
                <span className="text-white/55 text-[10px] leading-tight text-center">ownership</span>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll cue — absolute bottom-right, sits above the offer banner */}
        <a
          href="#templates"
          aria-label="Scroll to explore"
          className="absolute right-6 sm:right-8 bottom-14 z-10 text-brand hover:opacity-70 transition-opacity duration-200 animate-bounce"
        >
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
            <circle cx="20" cy="20" r="19" fill="currentColor" fillOpacity="0.15" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.5" />
            <path d="M13 17l7 7 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>

        {/* Offer banner pinned to the very bottom of the hero */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <OfferBanner />
        </div>
      </section>

      <StatsBar />

      <TemplatesSection />
      <AboutSection />
      <HowItWorks />
      <WhyChooseUs />
      <ReviewSection />
      <FAQSection />
      <ScrollingBackgroundSection />
      <Footer />
    </main>
  );
}