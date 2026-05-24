"use client";

/*
  Graphic Designer Portfolio Template
  ────────────────────────────────────────────────────────────────
  Premium dark-luxury single-page portfolio for graphic designers.

  Tech: Next.js App Router · TypeScript · Tailwind v4 · Framer Motion
        GSAP + ScrollTrigger · Lenis smooth scroll · Lucide Icons

  To deploy standalone: copy the entire `graphic-designer/` folder
  into any Next.js 13+ App Router project.  Customise via _data/portfolio.ts.
  ────────────────────────────────────────────────────────────────
*/

import { useLenis }       from "./_hooks/useLenis";
import GrainOverlay       from "./_components/GrainOverlay";
import ScrollProgress     from "./_components/ScrollProgress";
import CustomCursor       from "./_components/CustomCursor";
import Nav                from "./_components/Nav";
import Hero               from "./_components/Hero";
import Brands             from "./_components/Brands";
import Philosophy         from "./_components/Philosophy";
import FeaturedWork       from "./_components/FeaturedWork";
import About              from "./_components/About";
import Timeline           from "./_components/Timeline";
import Skills             from "./_components/Skills";
import Resume             from "./_components/Resume";
import Testimonials       from "./_components/Testimonials";
import Contact            from "./_components/Contact";
import Footer             from "./_components/Footer";
import styles             from "./theme.module.css";

export default function GraphicDesignerPortfolio() {
  useLenis();

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
        {/* 1 · Hero — full-viewport cinematic video */}
        <Hero />

        {/* 2 · Brands — infinite marquee */}
        <Brands />

        {/* 3 · Philosophy — large statement */}
        <Philosophy />

        {/* 4 · Featured Work — bento grid */}
        <FeaturedWork />

        {/* 5 · About — sticky split layout */}
        <About />

        {/* 6 · Experience Timeline — GSAP scroll line */}
        <Timeline />

        {/* 7 · Skills & Tools */}
        <Skills />

        {/* 8 · Resume CTA */}
        <Resume />

        {/* 9 · Testimonials — auto-sliding */}
        <Testimonials />

        {/* 10 · Contact */}
        <Contact />
      </main>

      {/* ── Footer */}
      <Footer />
    </div>
  );
}
