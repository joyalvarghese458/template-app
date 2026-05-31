'use client';

import { useEffect, useState } from 'react';
import { FadeIn } from './ui';

const NAV_LINKS = ['About', 'Price', 'Projects', 'Contact'];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

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
            className="fixed top-0 left-0 right-0 z-50 flex flex-col transition-colors duration-300"
            style={{
                // 100vh always equals the viewport height even inside a transformed ancestor.
                // Using bottom:0 would stretch to the full page height instead.
                height: menuOpen ? '100vh' : 'auto',
                paddingLeft: 'clamp(1.5rem, 4vw, 5rem)',
                paddingRight: 'clamp(1.5rem, 4vw, 5rem)',
                paddingTop: scrolled && !menuOpen ? '1rem' : 'clamp(1.25rem, 3vw, 3rem)',
                paddingBottom: scrolled && !menuOpen ? '1rem' : '0',
                background: menuOpen ? 'rgba(12,12,12,0.97)' : scrolled ? 'rgba(12,12,12,0.88)' : 'transparent',
                backdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
                WebkitBackdropFilter: scrolled || menuOpen ? 'blur(14px)' : 'none',
                borderBottom: scrolled && !menuOpen ? '1px solid rgba(215,226,234,0.08)' : 'none',
            }}
        >
            {/* Top bar: logo + desktop links + hamburger */}
            <div className="flex justify-between items-center w-full">
                <span className="text-white font-black tracking-widest text-lg md:text-xl select-none">
                    ASHWIN
                </span>

                {/* Desktop nav links — hidden on mobile */}
                <div className="hidden md:flex items-center gap-6 md:gap-10 lg:gap-14">
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

                {/* Hamburger button — mobile only */}
                <button
                    className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-[6px] bg-transparent border-0 cursor-pointer"
                    onClick={() => setMenuOpen((o) => !o)}
                    aria-label={menuOpen ? 'Close menu' : 'Open menu'}
                >
                    <span
                        className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
                        style={{ transform: menuOpen ? 'translateY(8px) rotate(45deg)' : 'none' }}
                    />
                    <span
                        className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
                        style={{ opacity: menuOpen ? 0 : 1 }}
                    />
                    <span
                        className="block w-6 h-[2px] bg-white transition-all duration-300 origin-center"
                        style={{ transform: menuOpen ? 'translateY(-8px) rotate(-45deg)' : 'none' }}
                    />
                </button>
            </div>

            {/* Mobile menu — only rendered when open, fills remaining nav height */}
            {menuOpen && (
                <div
                    className="md:hidden flex flex-col items-center justify-center flex-1"
                    style={{ paddingBottom: '4rem' }}
                >
                    {NAV_LINKS.map((link) => (
                        <a
                            key={link}
                            href={`#${link.toLowerCase()}`}
                            className="text-[#D7E2EA] font-black uppercase tracking-[0.2em] text-3xl
                                hover:text-white transition-colors duration-200"
                            style={{ paddingTop: '1.25rem', paddingBottom: '1.25rem' }}
                            onClick={() => setMenuOpen(false)}
                        >
                            {link}
                        </a>
                    ))}
                </div>
            )}
        </FadeIn>
    );
}
