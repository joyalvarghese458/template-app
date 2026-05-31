'use client';

import { FadeIn, Magnet, ContactButton } from './ui';

const PORTRAIT_URL = '/hero-test.webp';

export default function HeroSection() {
    return (
        <section
            className="h-screen flex flex-col relative"
            style={{ overflowX: 'clip', background: '#0C0C0C', paddingTop: 'clamp(3rem, 6vw, 6rem)' }}
        >

            {/* Hero Heading — back layer (behind image) */}
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
                    Hi, i&apos;m Ashi
                </FadeIn>
            </div>

            {/* Hero Heading — front layer (outline only, image shows through letters) */}
            <div className="absolute inset-x-0 z-40 px-8 sm:px-12 md:px-16 lg:px-20"
                style={{ top: 'clamp(3rem, 6vw, 6rem)' }}
            >
                <FadeIn
                    delay={0.15}
                    y={40}
                    as="h1"
                    className="font-black uppercase tracking-tight leading-none
                        whitespace-nowrap w-full text-center
                        text-[14vw] sm:text-[15vw] md:text-[16vw] lg:text-[17.5vw]
                        mt-6 sm:mt-4 md:-mt-5"
                    style={{
                        background: 'none',
                        WebkitTextFillColor: 'transparent',
                        WebkitTextStroke: '1.5px #BBCCD7',
                    }}
                >
                    Hi, i&apos;m Ashi
                </FadeIn>
            </div>

            {/* Portrait — overlapping the heading */}
            <div
                className="absolute left-1/2 -translate-x-1/2 z-30
        top-50
        w-[240px] sm:w-[260px] md:w-[270px] lg:w-[320px]"
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
                className="flex justify-between items-end relative z-20"
                style={{ marginTop: 'auto', paddingLeft: 'clamp(1.5rem, 4vw, 5rem)', paddingRight: 'clamp(1.5rem, 4vw, 5rem)', paddingBottom: 'clamp(1.5rem, 3vw, 3rem)' }}
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
