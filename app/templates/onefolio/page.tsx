"use client";

/*
  Creative Flow — Premium Graphic Designer Portfolio Template
  ────────────────────────────────────────────────────────────────────
  Design: cinematic · vibrant · immersive · luxury creative studio
  Tech:   Next.js App Router · TypeScript · Tailwind v4 · Framer Motion
          GSAP + ScrollTrigger · Lenis smooth scroll

  Sections:
    1. Hero            — fullscreen gradient mesh + animated blobs
    2. Brands          — infinite marquee of trusted brands
    3. Featured Work   — bento grid with cinematic hover effects
    4. About           — sticky split layout
    5. Timeline        — GSAP scroll-driven experience line
    6. Skills & Tools  — animated bars + colorful tool chips
    7. Resume          — gradient-border CTA card
    8. Testimonials    — auto-sliding testimonial carousel
    9. Contact         — form + contact details
   10. Footer          — big brand name + links

  Customise via _data/portfolio.ts without touching any component.
  ────────────────────────────────────────────────────────────────────
*/

import { useEffect }      from "react";
import GrainOverlay       from "./_components/GrainOverlay";
import ScrollProgress     from "./_components/ScrollProgress";
import CustomCursor       from "./_components/CustomCursor";
import Nav                from "./_components/Nav";
import Hero               from "./_components/Hero";
import Brands             from "./_components/Brands";
import FeaturedWork       from "./_components/FeaturedWork";
import About              from "./_components/About";
import Timeline           from "./_components/Timeline";
import Skills             from "./_components/Skills";
import Resume             from "./_components/Resume";
import Testimonials       from "./_components/Testimonials";
import Contact            from "./_components/Contact";
import Footer             from "./_components/Footer";
import styles             from "./theme.module.css";

export default function CreativeFlowPortfolio() {
  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    const previousHtmlOverflowX = html.style.overflowX;
    const previousBodyOverflowX = body.style.overflowX;
    const previousScrollBehavior = html.style.scrollBehavior;

    html.style.overflowX = "hidden";
    body.style.overflowX = "hidden";
    html.style.scrollBehavior = "auto";

    return () => {
      html.style.overflowX = previousHtmlOverflowX;
      body.style.overflowX = previousBodyOverflowX;
      html.style.scrollBehavior = previousScrollBehavior;
    };
  }, []);

  return (
    <div className={styles.page}>
      {/* ── Global UI overlays */}
      <GrainOverlay />
      <ScrollProgress />
      <CustomCursor />

      {/* ── Navigation */}
      <Nav />

      {/* ── Main content */}
      <main>
        {/* 1 · Hero — fullscreen cinematic gradient mesh */}
        <Hero />

        {/* 2 · Brands — infinite marquee */}
        <Brands />

        {/* 3 · Featured Work — bento grid */}
        <FeaturedWork />

        {/* 4 · About — sticky split layout */}
        <About />

        {/* 5 · Experience Timeline — GSAP scroll line */}
        <Timeline />

        {/* 6 · Skills & Tools */}
        <Skills />

        {/* 7 · Resume CTA */}
        <Resume />

        {/* 8 · Testimonials — auto-sliding */}
        <Testimonials />

        {/* 9 · Contact */}
        <Contact />
      </main>

      {/* ── Footer */}
      <Footer />
    </div>
  );
}
