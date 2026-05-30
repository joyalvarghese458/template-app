'use client';

import React, { useEffect } from 'react';
import Navbar           from './components/Navbar';
import HeroSection      from './components/HeroSection';
import MarqueeSection   from './components/MarqueeSection';
import AboutSection     from './components/AboutSection';
import ServicesSection  from './components/ServicesSection';
import ProjectsSection  from './components/ProjectsSection';
import ContactSection   from './components/ContactSection';
import Footer           from './components/Footer';

export default function JackPortfolio() {

    useEffect(() => {
        // ── Horizontal-scroll lock ─────────────────────────────────────
        // Set ONLY on <html>, NOT on <body>.
        // Setting overflow-x:hidden on both html+body forces overflow-y:auto
        // on both, which creates two independent scroll containers and two
        // visible scrollbars on the right. One is enough.
        const html = document.documentElement;
        const prev = html.style.overflowX;
        html.style.overflowX = 'hidden';

        // ── Lenis smooth scroll ────────────────────────────────────────
        type LenisInstance = { raf: (t: number) => void; destroy: () => void };
        let lenis: LenisInstance | null = null;
        let rafId = 0;
        let active = true;

        (async () => {
            const { default: Lenis } = await import('lenis');
            if (!active) return;

            lenis = new Lenis({ duration: 1.1, touchMultiplier: 1.5 }) as LenisInstance;

            function tick(t: number) {
                lenis?.raf(t);
                rafId = requestAnimationFrame(tick);
            }
            rafId = requestAnimationFrame(tick);
        })();

        return () => {
            active = false;
            cancelAnimationFrame(rafId);
            lenis?.destroy();
            html.style.overflowX = prev;
        };
    }, []);

    return (
        <>
            <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Kanit:wght@300;400;500;600;700;800;900&display=swap');

        .jack-portfolio,
        .jack-portfolio * {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
          font-family: 'Kanit', sans-serif;
        }

        /* Gradient text used by all major headings */
        .jack-portfolio .hero-heading {
          background: linear-gradient(180deg, #646973 0%, #BBCCD7 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
      `}</style>

            {/*
              overflow-x: clip  ← NOT 'hidden'
              'hidden' forces overflow-y to 'auto', silently turning this div
              into a scroll container. That traps position:sticky descendants
              so they can never stick to the viewport. 'clip' clips content
              visually without creating a scroll context.
            */}
            <div
                className="jack-portfolio"
                style={{ background: '#0C0C0C', overflowX: 'clip' }}
            >
                <Navbar />
                <HeroSection />
                <MarqueeSection />
                <AboutSection />
                <ServicesSection />
                <ProjectsSection />
                <ContactSection />
                <Footer />
            </div>
        </>
    );
}
