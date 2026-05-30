'use client';

import { FadeIn, Magnet, ContactButton } from './ui';

const PORTRAIT_URL =
    'https://shrug-person-78902957.figma.site/_components/v2/d24c01ad3a56fc65e942a1f501eb73db42d7cf9a/Rectangle_40443.81459862.png';

export default function HeroSection() {
    return (
        <section
            className="h-screen flex flex-col relative"
            style={{ overflowX: 'clip', background: '#0C0C0C', paddingTop: 'clamp(3rem, 6vw, 6rem)' }}
        >

            {/* Hero Heading */}
            <div className="overflow-hidden relative z-20 px-8 sm:px-12 md:px-16 lg:px-20">
                <FadeIn
                    delay={0.15}
                    y={40}
                    as="h1"
                    className="hero-heading font-black uppercase tracking-tight leading-none
                        whitespace-nowrap w-full text-center
                        text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
                        mt-6 sm:mt-4 md:-mt-5"
                >
                    Hi, i&apos;m jack
                </FadeIn>
            </div>

            {/* Portrait — centered absolutely */}
            <div
                className="absolute left-1/2 -translate-x-1/2 z-10
                    top-1/2 -translate-y-1/2
                    sm:top-auto sm:translate-y-0 sm:bottom-0
                    w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px]"
            >
                <FadeIn delay={0.6} y={30}>
                    <Magnet
                        padding={150}
                        strength={3}
                        activeTransition="transform 0.3s ease-out"
                        inactiveTransition="transform 0.6s ease-in-out"
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                            src={PORTRAIT_URL}
                            alt="Jack – 3D Creator portrait"
                            className="w-full object-contain select-none pointer-events-none"
                            loading="eager"
                            fetchPriority="high"
                            draggable={false}
                        />
                    </Magnet>
                </FadeIn>
            </div>

            {/* Bottom bar */}
            <div
                className="mt-auto flex justify-between items-end relative z-20"
                style={{ paddingLeft: 'clamp(1.5rem, 4vw, 5rem)', paddingRight: 'clamp(1.5rem, 4vw, 5rem)', paddingBottom: 'clamp(1.5rem, 3vw, 3rem)' }}
            >
                <FadeIn delay={0.35} y={20}>
                    <p
                        className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug
                            max-w-[180px] sm:max-w-[240px] md:max-w-[280px]"
                        style={{ fontSize: 'clamp(0.8rem, 1.4vw, 1.4rem)' }}
                    >
                        a 3d creator driven by crafting striking and unforgettable projects
                    </p>
                </FadeIn>

                <FadeIn delay={0.5} y={20}>
                    <ContactButton />
                </FadeIn>
            </div>
        </section>
    );
}
