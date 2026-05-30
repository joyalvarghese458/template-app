'use client';

import { useEffect, useState } from 'react';
import { FadeIn } from './ui';

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        function onScroll() { setScrolled(window.scrollY > 60); }
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <FadeIn
            delay={0}
            y={-20}
            as="nav"
            className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center transition-all duration-300"
            style={{
                paddingLeft: 'clamp(1.5rem, 4vw, 5rem)',
                paddingRight: 'clamp(1.5rem, 4vw, 5rem)',
                paddingTop: scrolled ? '1rem' : 'clamp(1.25rem, 3vw, 3rem)',
                paddingBottom: scrolled ? '1rem' : '0',
                background: scrolled ? 'rgba(12,12,12,0.88)' : 'transparent',
                backdropFilter: scrolled ? 'blur(14px)' : 'none',
                WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
                borderBottom: scrolled ? '1px solid rgba(215,226,234,0.08)' : 'none',
            }}
        >
            <span className="text-white font-black tracking-widest text-lg md:text-xl select-none">
                ASHWIN
            </span>

            <div className="flex items-center gap-6 md:gap-10 lg:gap-14">
                {NAV_LINKS.map((link) => (
                    <a
                        key={link}
                        href={`#${link.toLowerCase()}`}
                        className="text-[#D7E2EA] font-medium uppercase tracking-wider
                            text-sm md:text-base lg:text-lg
                            hover:opacity-70 transition-opacity duration-200"
                    >
                        {link}
                    </a>
                ))}
            </div>
        </FadeIn>
    );
}
