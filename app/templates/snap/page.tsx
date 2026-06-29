"use client";

/*
  SNAP — Luxury Cinematic Photography Studio Template
  ──────────────────────────────────────────────────────────────────
  Premium dark-luxury single-page portfolio for photographers.

  Tech: Next.js App Router · TypeScript · Tailwind v4 · Framer Motion
        GSAP + Lenis smooth scroll · CSS Modules · Cormorant Garamond

  Routes:
    /templates/snap            → Home
    /templates/snap/portfolio  → Full portfolio with filtering
    /templates/snap/contact    → Contact & booking form + FAQ

  Customise via _data/portfolio.ts — no component changes needed.
  ──────────────────────────────────────────────────────────────────
*/

import GrainOverlay          from "./_components/GrainOverlay";
import ScrollProgress        from "./_components/ScrollProgress";
import CustomCursor          from "./_components/CustomCursor";
import { useSnapViewport }   from "./_hooks/useSnapViewport";
import Nav                   from "./_components/Nav";
import Hero                  from "./_components/Hero";
import Categories            from "./_components/Categories";
import Story                 from "./_components/Story";
import Awards                from "./_components/Awards";
import PhotoWall             from "./_components/PhotoWall";
import FeaturedProjects      from "./_components/FeaturedProjects";
import HorizontalGallery     from "./_components/HorizontalGallery";
import Testimonials          from "./_components/Testimonials";
import InstagramFeed         from "./_components/InstagramFeed";
import BookingCTA            from "./_components/BookingCTA";
import Footer                from "./_components/Footer";
import styles                from "./theme.module.css";

export default function SnapHome() {
  useSnapViewport();

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
        {/* 1 · Cinematic Hero */}
        <Hero />

        {/* 2 · Featured Categories */}
        <Categories />

        {/* 3 · Photographer Story */}
        <Story />

        {/* 4 · Awards Timeline */}
        <Awards />

        {/* 5 · Infinite Photography Wall */}
        <PhotoWall />

        {/* 6 · Featured Projects */}
        <FeaturedProjects />

        {/* 7 · Horizontal Scroll Gallery */}
        <HorizontalGallery />

        {/* 8 · Testimonials */}
        <Testimonials />

        {/* 9 · Instagram Feed */}
        <InstagramFeed />

        {/* 10 · Booking CTA */}
        <BookingCTA />
      </main>

      {/* ── Footer */}
      <Footer />
    </div>
  );
}
