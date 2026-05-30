'use client';

import React, { useRef, useEffect } from 'react';

const GIFS = [
    'https://motionsites.ai/assets/hero-space-voyage-preview-eECLH3Yc.gif',
    'https://motionsites.ai/assets/hero-codenest-preview-Cgppc2qV.gif',
    'https://motionsites.ai/assets/hero-vex-ventures-preview-BczMFIiw.gif',
    'https://motionsites.ai/assets/hero-stellar-ai-v2-preview-DjvxjG3C.gif',
    'https://motionsites.ai/assets/hero-asme-preview-B_nGDnTP.gif',
    'https://motionsites.ai/assets/hero-transform-data-preview-Cx5OU29N.gif',
    'https://motionsites.ai/assets/hero-vitara-preview-Cjz2QYyU.gif',
    'https://motionsites.ai/assets/hero-terra-preview-BFjrCr7T.gif',
    'https://motionsites.ai/assets/hero-skyelite-preview-DHaZIgUv.gif',
    'https://motionsites.ai/assets/hero-aethera-preview-DknSlcTa.gif',
    'https://motionsites.ai/assets/hero-designpro-preview-D8c5_een.gif',
    'https://motionsites.ai/assets/hero-stellar-ai-preview-D3HL6bw1.gif',
    'https://motionsites.ai/assets/hero-xportfolio-preview-D4A8maiC.gif',
    'https://motionsites.ai/assets/hero-orbit-web3-preview-BXt4OttD.gif',
    'https://motionsites.ai/assets/hero-nexora-preview-cx5HmUgo.gif',
    'https://motionsites.ai/assets/hero-evr-ventures-preview-DZxeVFEX.gif',
    'https://motionsites.ai/assets/hero-planet-orbit-preview-DWAP8Z1P.gif',
    'https://motionsites.ai/assets/hero-new-era-preview-CocuDUm9.gif',
    'https://motionsites.ai/assets/hero-wealth-preview-B70idl_u.gif',
    'https://motionsites.ai/assets/hero-luminex-preview-CxOP7ce6.gif',
    'https://motionsites.ai/assets/hero-celestia-preview-0yO3jXO8.gif',
];

const ROW1 = GIFS.slice(0, 11);
const ROW2 = GIFS.slice(11);

// Triple for seamless loop
const ROW1_T = [...ROW1, ...ROW1, ...ROW1];
const ROW2_T = [...ROW2, ...ROW2, ...ROW2];

export default function MarqueeSection() {
    const sectionRef = useRef<HTMLElement>(null);
    const row1Ref = useRef<HTMLDivElement>(null);
    const row2Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let rafId = 0;

        function update() {
            if (!sectionRef.current) return;
            const rect = sectionRef.current.getBoundingClientRect();
            const sectionTop = window.scrollY + rect.top;
            const offset = (window.scrollY - sectionTop + window.innerHeight) * 0.3;

            // Write directly to DOM — zero React re-renders
            if (row1Ref.current) {
                row1Ref.current.style.transform = `translateX(${offset - 200}px)`;
            }
            if (row2Ref.current) {
                row2Ref.current.style.transform = `translateX(${-(offset - 200)}px)`;
            }
        }

        function onScroll() {
            cancelAnimationFrame(rafId);
            rafId = requestAnimationFrame(update);
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        update(); // Initial position
        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);

    return (
        <section
            ref={sectionRef}
            className="pt-24 sm:pt-32 md:pt-40 pb-10 overflow-hidden"
            style={{ background: '#0C0C0C' }}
        >
            <div className="flex flex-col gap-3">
                {/* Row 1 — moves right */}
                <div
                    ref={row1Ref}
                    className="flex gap-3"
                    style={{ willChange: 'transform', transform: 'translateX(-200px)' }}
                >
                    {ROW1_T.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={i}
                            src={src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="rounded-2xl object-cover flex-shrink-0"
                            style={{ width: 420, height: 270 }}
                        />
                    ))}
                </div>

                {/* Row 2 — moves left */}
                <div
                    ref={row2Ref}
                    className="flex gap-3"
                    style={{ willChange: 'transform', transform: 'translateX(200px)' }}
                >
                    {ROW2_T.map((src, i) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            key={i}
                            src={src}
                            alt=""
                            loading="lazy"
                            decoding="async"
                            className="rounded-2xl object-cover flex-shrink-0"
                            style={{ width: 420, height: 270 }}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
