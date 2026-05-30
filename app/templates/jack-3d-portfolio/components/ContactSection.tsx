'use client';

import { useState } from 'react';
import { FadeIn, ContactButton } from './ui';

const QUICK_LINKS = [
    { label: 'About',    href: '#about' },
    { label: 'Services', href: '#price' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact' },
];

const SERVICES_LINKS = [
    { label: '3D Modeling',   href: '#price' },
    { label: 'Rendering',     href: '#price' },
    { label: 'Motion Design', href: '#price' },
    { label: 'Branding',      href: '#price' },
    { label: 'Web Design',    href: '#price' },
];

const SOCIALS = [
    { label: 'Instagram', href: '#' },
    { label: 'Behance',   href: '#' },
    { label: 'LinkedIn',  href: '#' },
    { label: 'Twitter',   href: '#' },
];

function LinkList({ items }: { items: { label: string; href: string }[] }) {
    return (
        <>
            {items.map((l) => (
                <a
                    key={l.label}
                    href={l.href}
                    className="flex items-center gap-2 text-sm font-light
                        hover:opacity-60 transition-opacity duration-200"
                    style={{ color: '#0C0C0C', opacity: 0.85 }}
                >
                    <span style={{ opacity: 0.35 }}>—</span>
                    {l.label}
                </a>
            ))}
        </>
    );
}

export default function ContactSection() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (!email.trim()) return;
        setSent(true);
        setEmail('');
    }

    return (
        <section
            id="contact"
            className="bg-white
                rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px]
                rounded-b-[40px] sm:rounded-b-[50px] md:rounded-b-[60px]"
            style={{ marginTop: 'clamp(6rem, 12vw, 14rem)' }}
        >
            {/* ── Contact block ── */}
            <div style={{ padding: 'clamp(3.5rem, 8vw, 8rem) clamp(1.5rem, 6vw, 8rem) clamp(3rem, 6vw, 6rem)' }}>
                <FadeIn delay={0} y={40}>
                    <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">

                        <h2
                            className="text-[#0C0C0C] font-black uppercase leading-none tracking-tight"
                            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
                        >
                            Contact
                        </h2>

                        <p
                            className="text-[#0C0C0C] font-light leading-relaxed text-center mx-auto"
                            style={{ fontSize: 'clamp(1rem, 1.8vw, 1.3rem)', opacity: 0.55, maxWidth: 560 }}
                        >
                            Have a project in mind? Let&apos;s build something striking and unforgettable
                            together. Reach out and let&apos;s start the conversation.
                        </p>

                        <ContactButton />

                        <a
                            href="mailto:hello@jack3d.studio"
                            className="text-[#0C0C0C] font-light text-sm tracking-widest uppercase
                                transition-opacity duration-200 hover:opacity-70"
                            style={{ opacity: 0.35 }}
                        >
                            hello@jack3d.studio
                        </a>
                    </div>
                </FadeIn>
            </div>

            {/* ── Divider ── */}
            <div style={{ height: 1, background: 'rgba(12,12,12,0.1)', margin: '0 clamp(1.5rem, 6vw, 8rem)' }} />

            {/* ── Footer grid ── */}
            <div style={{ padding: 'clamp(3rem, 6vw, 5rem) clamp(1.5rem, 6vw, 8rem) clamp(2rem, 4vw, 4rem)' }}>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16">

                    {/* Col 1 — Brand */}
                    <FadeIn delay={0} y={20} className="flex flex-col gap-4">
                        <span
                            className="font-black tracking-widest text-2xl select-none"
                            style={{ color: '#0C0C0C' }}
                        >
                            JACK
                        </span>
                        <p
                            className="text-sm font-light leading-relaxed"
                            style={{ color: '#0C0C0C', opacity: 0.65, maxWidth: 200 }}
                        >
                            3D creator crafting striking visuals, immersive experiences, and unforgettable brands.
                        </p>
                    </FadeIn>

                    {/* Col 2 — Quick Links */}
                    <FadeIn delay={0.1} y={20} className="flex flex-col gap-4">
                        <h4
                            className="text-xs font-semibold uppercase tracking-[0.2em]"
                            style={{ color: '#0C0C0C', opacity: 0.5 }}
                        >
                            Quick Links
                        </h4>
                        <LinkList items={QUICK_LINKS} />
                    </FadeIn>

                    {/* Col 3 — Services */}
                    <FadeIn delay={0.2} y={20} className="flex flex-col gap-4">
                        <h4
                            className="text-xs font-semibold uppercase tracking-[0.2em]"
                            style={{ color: '#0C0C0C', opacity: 0.5 }}
                        >
                            Services
                        </h4>
                        <LinkList items={SERVICES_LINKS} />
                    </FadeIn>

                    {/* Col 4 — Newsletter */}
                    <FadeIn delay={0.3} y={20} className="flex flex-col gap-4">
                        <h4
                            className="text-xs font-semibold uppercase tracking-[0.2em]"
                            style={{ color: '#0C0C0C', opacity: 0.5 }}
                        >
                            Stay in the Loop
                        </h4>
                        <p
                            className="text-sm font-light leading-relaxed"
                            style={{ color: '#0C0C0C', opacity: 0.65 }}
                        >
                            Get updates on new projects, behind-the-scenes process, and creative drops.
                        </p>

                        {sent ? (
                            <p className="text-sm font-medium tracking-wide" style={{ color: '#B600A8' }}>
                                Thanks! You&apos;re on the list.
                            </p>
                        ) : (
                            <form onSubmit={handleSubmit} className="flex flex-col gap-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={e => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    required
                                    className="w-full rounded-full px-5 py-3 text-sm outline-none transition-colors duration-200"
                                    style={{
                                        background: 'rgba(12,12,12,0.04)',
                                        border: '1px solid rgba(12,12,12,0.15)',
                                        color: '#0C0C0C',
                                    }}
                                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(12,12,12,0.4)')}
                                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(12,12,12,0.15)')}
                                />
                                <button
                                    type="submit"
                                    className="w-full rounded-full py-3 text-sm font-medium uppercase
                                        tracking-widest text-white hover:opacity-80 transition-opacity duration-200"
                                    style={{
                                        background: 'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)',
                                    }}
                                >
                                    Subscribe
                                </button>
                            </form>
                        )}

                        <div className="flex flex-col gap-1" style={{ marginTop: '0.5rem' }}>
                            <span
                                className="text-xs uppercase tracking-[0.2em] font-medium"
                                style={{ color: '#0C0C0C', opacity: 0.5 }}
                            >
                                Direct Contact
                            </span>
                            <a
                                href="mailto:hello@jack3d.studio"
                                className="text-sm font-light hover:opacity-60 transition-opacity duration-200"
                                style={{ color: '#0C0C0C', opacity: 0.8 }}
                            >
                                hello@jack3d.studio
                            </a>
                        </div>
                    </FadeIn>
                </div>

                {/* ── Bottom bar ── */}
                <FadeIn delay={0.15} y={12}>
                    <div
                        className="flex flex-wrap items-center justify-between gap-4"
                        style={{
                            marginTop: 'clamp(2.5rem, 5vw, 4rem)',
                            paddingTop: '1.5rem',
                            borderTop: '1px solid rgba(12,12,12,0.1)',
                        }}
                    >
                        <p className="text-xs tracking-wide" style={{ color: '#0C0C0C', opacity: 0.3 }}>
                            © 2026 Jack. All rights reserved.
                        </p>

                        <nav className="flex gap-6 flex-wrap">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-xs uppercase tracking-widest font-medium
                                        hover:opacity-70 transition-opacity duration-200"
                                    style={{ color: '#0C0C0C', opacity: 0.45 }}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </nav>

                        <p className="text-xs tracking-wide" style={{ color: '#0C0C0C', opacity: 0.3 }}>
                            Designed & built with passion
                        </p>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
