'use client';

import React from 'react';
import { FadeIn } from './ui';

const SERVICES = [
    {
        num: '01',
        name: '3D Modeling',
        desc: 'Creation of detailed objects, characters, or environments tailored to specific client needs, ideal for games, products, and visualizations.',
    },
    {
        num: '02',
        name: 'Rendering',
        desc: 'High-quality, photorealistic renders that showcase designs with custom lighting, textures, and materials to bring concepts to life.',
    },
    {
        num: '03',
        name: 'Motion Design',
        desc: 'Dynamic animations and motion graphics that add energy and storytelling to brands, products, and digital experiences.',
    },
    {
        num: '04',
        name: 'Branding',
        desc: 'Crafting cohesive visual identities — from logos to full brand systems — that communicate a clear and memorable presence.',
    },
    {
        num: '05',
        name: 'Web Design',
        desc: 'Designing clean, modern, and conversion-focused websites with attention to layout, typography, and user experience.',
    },
];

export default function ServicesSection() {
    return (
        <section
            id="price"
            className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
                       rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px]"
        >
            {/* Heading — not sticky, scrolls normally */}
            <div className="px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-16 sm:pb-20 md:pb-28">
                <FadeIn y={40}>
                    <h2
                        className="text-[#0C0C0C] font-black uppercase text-center"
                        style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
                    >
                        Services
                    </h2>
                </FadeIn>
            </div>

            {/* Stacking service rows — each sticks at top and the next overlaps it */}
            <div className="pb-20 sm:pb-24 md:pb-32">
                {SERVICES.map((svc, i) => (
                    <div
                        key={svc.num}
                        style={{
                            position: 'sticky',
                            top: 0,
                            zIndex: i + 1,
                            background: 'white',
                        }}
                        className="px-5 sm:px-8 md:px-10"
                    >
                        <div className="max-w-5xl mx-auto">
                            <div
                                className="flex flex-row items-start gap-6 md:gap-10 py-8 sm:py-10 md:py-12"
                                style={{
                                    borderTop: i === 0 ? '1px solid rgba(12,12,12,0.15)' : undefined,
                                    borderBottom: '1px solid rgba(12,12,12,0.15)',
                                }}
                            >
                                {/* Number */}
                                <span
                                    className="font-black text-[#0C0C0C] leading-none flex-shrink-0"
                                    style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                                >
                                    {svc.num}
                                </span>

                                {/* Name + Desc */}
                                <div className="flex flex-col justify-center pt-2 text-left">
                                    <p
                                        className="font-medium uppercase text-[#0C0C0C] leading-tight"
                                        style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                                    >
                                        {svc.name}
                                    </p>
                                    <p
                                        className="font-light leading-relaxed text-[#0C0C0C] max-w-2xl mt-2"
                                        style={{
                                            fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)',
                                            opacity: 0.6,
                                        }}
                                    >
                                        {svc.desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
