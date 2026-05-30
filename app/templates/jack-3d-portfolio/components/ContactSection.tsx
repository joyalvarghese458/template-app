'use client';

import React from 'react';
import { FadeIn, ContactButton } from './ui';

const SOCIALS = [
    { label: 'Instagram', href: '#' },
    { label: 'Behance', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Twitter', href: '#' },
];

export default function ContactSection() {
    return (
        <section
            id="contact"
            className="bg-white rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
        -mt-10 sm:-mt-12 md:-mt-14 relative z-10
        px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20"
        >
            {/* Heading */}
            <FadeIn y={40}>
                <h2
                    className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight
            mb-12 sm:mb-16 md:mb-20"
                    style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
                >
                    Contact
                </h2>
            </FadeIn>

            {/* CTA block */}
            <FadeIn delay={0.15} y={30}>
                <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8 sm:gap-10">
                    <p
                        className="text-[#0C0C0C] font-medium leading-relaxed"
                        style={{ fontSize: 'clamp(1rem, 2vw, 1.35rem)', opacity: 0.7 }}
                    >
                        Have a project in mind? Let&apos;s build something
                        striking and unforgettable together. Reach out and
                        let&apos;s start the conversation.
                    </p>

                    <a href="mailto:hello@jack3d.studio">
                        <ContactButton />
                    </a>

                    <p
                        className="text-[#0C0C0C] font-light"
                        style={{ fontSize: 'clamp(0.85rem, 1.4vw, 1rem)', opacity: 0.5 }}
                    >
                        hello@jack3d.studio
                    </p>
                </div>
            </FadeIn>

            {/* Divider */}
            <div
                className="my-12 sm:my-16"
                style={{ height: 1, background: 'rgba(12,12,12,0.12)' }}
            />

            {/* Footer row */}
            <FadeIn delay={0.25} y={20}>
                <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
                    <p
                        className="text-[#0C0C0C] font-black uppercase tracking-tight leading-none"
                        style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                    >
                        Jack<span style={{ opacity: 0.3 }}>.</span>
                    </p>

                    <nav className="flex gap-6 sm:gap-8 flex-wrap justify-center">
                        {SOCIALS.map((s) => (
                            <a
                                key={s.label}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#0C0C0C] font-medium uppercase tracking-widest
                  hover:opacity-50 transition-opacity"
                                style={{ fontSize: 'clamp(0.7rem, 1.2vw, 0.9rem)' }}
                            >
                                {s.label}
                            </a>
                        ))}
                    </nav>

                    <p
                        className="text-[#0C0C0C] font-light"
                        style={{ fontSize: 'clamp(0.75rem, 1.2vw, 0.88rem)', opacity: 0.4 }}
                    >
                        © {new Date().getFullYear()} Jack. All rights reserved.
                    </p>
                </div>
            </FadeIn>
        </section>
    );
}
