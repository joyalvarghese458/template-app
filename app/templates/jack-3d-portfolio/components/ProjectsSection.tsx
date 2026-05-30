'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';
import { FadeIn, LiveProjectButton } from './ui';

const PROJECTS = [
    {
        num: '01',
        name: 'Nextlevel Studio',
        category: 'Client',
        col1: [
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055344_5eff02e0-87a5-41ce-b64f-eb08da8f33db.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055431_11d841fd-8b41-46a5-82e4-b04f2407a7d8.png&w=1280&q=85',
        ],
        col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055451_e317bf2d-28d4-48cc-86b0-6f72f25b6327.png&w=1280&q=85',
    },
    {
        num: '02',
        name: 'Aura Brand Identity',
        category: 'Personal',
        col1: [
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055654_911201c5-36d9-4bc6-bac7-331adfce159f.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055723_5ceda0b8-d9c2-4665-b2e3-83ba19ba76d1.png&w=1280&q=85',
        ],
        col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055753_adc5dcbd-a8e6-49c0-b43a-9b030d835cea.png&w=1280&q=85',
    },
    {
        num: '03',
        name: 'Solaris Digital',
        category: 'Client',
        col1: [
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055759_963cfb0b-4bd1-4b0f-9d0a-09bd6cf95b2f.png&w=1280&q=85',
            'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_060108_438f781a-9846-4dcc-89ab-c4e6cb830f5b.png&w=1280&q=85',
        ],
        col2: 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260412_055818_9d062121-ad7e-46b9-999a-1a6a692ef1ee.png&w=1280&q=85',
    },
];

const TOTAL = PROJECTS.length;
// How far each card sticks down from the viewport top (card 0 = base, each
// subsequent card is 28px lower so you can see the stack depth behind it).
const CARD_TOP_BASE = 96; // px  ≈ top-24
const CARD_TOP_STEP = 28; // px

function ProjectCard({
    project,
    index,
    scrollProgress,
}: {
    project: (typeof PROJECTS)[0];
    index: number;
    scrollProgress: MotionValue<number>;
}) {
    // Cards that have been "passed" shrink slightly so you can see depth.
    // Last card (index = TOTAL-1) never scales below 1.
    const targetScale = 1 - (TOTAL - 1 - index) * 0.03;

    // Each card scales across its own 1/TOTAL slice of the scroll range.
    const scale = useTransform(
        scrollProgress,
        [index / TOTAL, (index + 1) / TOTAL],
        [1, targetScale]
    );

    return (
        <motion.div
            style={{ scale, background: '#0C0C0C', padding: 'clamp(1.25rem, 3vw, 2.5rem)' }}
            className="w-full h-full
        rounded-[40px] sm:rounded-[50px] md:rounded-[60px]
        border-2 border-[#D7E2EA]
        flex flex-col"
        >
            {/* ── Top row: number · info · button ── */}
            <div
                className="flex flex-nowrap items-start flex-shrink-0"
                style={{ gap: 'clamp(0.75rem, 2vw, 1.75rem)', marginBottom: 'clamp(0.75rem, 1.5vw, 1.5rem)' }}
            >
                {/* Number */}
                <span
                    className="font-black text-[#D7E2EA] leading-[0.9] flex-shrink-0"
                    style={{ fontSize: 'clamp(2.5rem, 7vw, 100px)' }}
                >
                    {project.num}
                </span>

                {/* Category + Name */}
                <div
                    className="flex-1 min-w-0 flex flex-col"
                    style={{
                        paddingTop: 'clamp(0.25rem, 0.5vw, 0.5rem)',
                        gap: 'clamp(0.15rem, 0.3vw, 0.3rem)',
                    }}
                >
                    <p
                        className="text-[#D7E2EA]/50 font-light uppercase tracking-[0.18em] leading-none"
                        style={{ fontSize: 'clamp(0.6rem, 0.9vw, 0.8rem)' }}
                    >
                        {project.category}
                    </p>
                    <p
                        className="text-[#D7E2EA] font-black uppercase leading-tight"
                        style={{ fontSize: 'clamp(1rem, 2.5vw, 2.5rem)' }}
                    >
                        {project.name}
                    </p>
                </div>

                {/* Button — pulled away from the rounded corner */}
                <div
                    className="flex-shrink-0"
                    style={{ paddingTop: 'clamp(0.25rem, 0.5vw, 0.5rem)' }}
                >
                    <LiveProjectButton />
                </div>
            </div>

            {/* ── Image grid ── */}
            <div className="flex gap-3 sm:gap-4 flex-1 min-h-0">

                {/* Left column: 2 stacked images, 40% width */}
                <div className="flex flex-col gap-3 sm:gap-4" style={{ width: '40%' }}>
                    <div
                        className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden flex-shrink-0"
                        style={{ height: 'clamp(110px, 16vw, 230px)' }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.col1[0]} alt="" loading="lazy" decoding="async"
                            className="w-full h-full object-cover" />
                    </div>

                    {/* Bottom image fills remaining height */}
                    <div className="rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden flex-1 min-h-0">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={project.col1[1]} alt="" loading="lazy" decoding="async"
                            className="w-full h-full object-cover" />
                    </div>
                </div>

                {/* Right column: one tall image, 60% */}
                <div className="flex-1 min-w-0 rounded-[24px] sm:rounded-[32px] md:rounded-[40px] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={project.col2} alt="" loading="lazy" decoding="async"
                        className="w-full h-full object-cover" />
                </div>
            </div>
        </motion.div>
    );
}

export default function ProjectsSection() {
    // Attach useScroll to the CARDS container only (not the whole section) so
    // the heading + padding don't dilute the scroll-progress range.
    const cardsRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: cardsRef,
        offset: ['start start', 'end end'],
    });

    return (
        <section
            id="projects"
            className="rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10
        px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-20"
            style={{ background: '#0C0C0C' }}
        >
            <FadeIn y={40}>
                <h2
                    className="hero-heading font-black uppercase text-center
            leading-none tracking-tight mb-20 sm:mb-24 md:mb-32"
                    style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
                >
                    Project
                </h2>
            </FadeIn>

            {/*
              ONE shared container — the only source of scroll-space for all cards.
              Total height = TOTAL * 100vh so each card gets a full viewport of
              "pin time" before the next card slides in from below.

              All sticky divs are direct children (siblings), so they share the
              same scroll context and can coexist simultaneously — that is what
              produces the "deck of cards" stacking visual.

              z-index increases with index → later cards render on top.
            */}
            <div
                ref={cardsRef}
                className="relative"
                style={{ height: `${TOTAL * 100}vh` }}
            >
                {PROJECTS.map((project, i) => (
                    <div
                        key={project.num}
                        style={{
                            position: 'sticky',
                            top: CARD_TOP_BASE + i * CARD_TOP_STEP,
                            height: '85vh',
                            zIndex: i + 1,
                        }}
                    >
                        <ProjectCard
                            project={project}
                            index={i}
                            scrollProgress={scrollYProgress}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
