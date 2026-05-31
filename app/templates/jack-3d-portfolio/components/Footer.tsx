'use client';

import { useState } from 'react';
import { FadeIn } from './ui';

const QUICK_LINKS = [
    { label: 'About',    href: '#about' },
    { label: 'Services', href: '#price' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact',  href: '#contact' },
];

const SERVICES_LINKS = [
    { label: '3D Modeling',  href: '#price' },
    { label: 'Rendering',    href: '#price' },
    { label: 'Motion Design', href: '#price' },
    { label: 'Branding',     href: '#price' },
    { label: 'Web Design',   href: '#price' },
];

const SOCIALS = [
    { label: 'Instagram', href: '#' },
    { label: 'Behance',   href: '#' },
    { label: 'LinkedIn',  href: '#' },
    { label: 'Twitter',   href: '#' },
];

const COL_HEADING = 'text-[#D7E2EA] text-xs font-medium uppercase tracking-[0.2em] mb-2';

function LinkList({ items }: { items: { label: string; href: string }[] }) {
    return (
        <>
            {items.map((l) => (
                <a
                    key={l.label}
                    href={l.href}
                    className="text-[#D7E2EA] text-sm font-light flex items-center gap-2
                        hover:opacity-70 transition-opacity duration-200"
                    style={{ opacity: 1 }}
                >
                    <span style={{ opacity: 0.4 }}>—</span>
                    {l.label}
                </a>
            ))}
        </>
    );
}

export default function Footer() {
    const [email, setEmail] = useState('');
    const [sent, setSent] = useState(false);

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        if (!email.trim()) return;
        setSent(true);
        setEmail('');
    }

    return (
        <footer
            className="bg-[#0C0C0C]"
            style={{ borderTop: '1px solid rgba(215,226,234,0.1)' }}
        >
            {/* ── Main grid ── */}
            <div className="px-8 sm:px-12 md:px-20 py-14 sm:py-16 md:py-20">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 md:gap-16">

                    {/* Col 1 — Brand */}
                    <FadeIn delay={0} y={20} className="flex flex-col gap-4">
                        <span className="text-white font-black tracking-widest text-2xl mb-2 select-none">
                            JACK
                        </span>
                        <p
                            className="text-[#D7E2EA] font-light text-sm leading-relaxed"
                            style={{ opacity: 0.5, maxWidth: 200 }}
                        >
                            3D creator crafting striking visuals, immersive experiences, and unforgettable brands.
                        </p>
                    </FadeIn>

                    {/* Col 2 — Quick Links */}
                    <FadeIn delay={0.1} y={20} className="flex flex-col gap-4">
                        <h4 className={COL_HEADING} style={{ opacity: 0.4 }}>Quick Links</h4>
                        <LinkList items={QUICK_LINKS} />
                    </FadeIn>

                    {/* Col 3 — Services */}
                    <FadeIn delay={0.2} y={20} className="flex flex-col gap-4">
                        <h4 className={COL_HEADING} style={{ opacity: 0.4 }}>Services</h4>
                        <LinkList items={SERVICES_LINKS} />
                    </FadeIn>

                    {/* Col 4 — Newsletter */}
                    <FadeIn delay={0.3} y={20} className="flex flex-col gap-4">
                        <h4 className={COL_HEADING} style={{ opacity: 0.4 }}>Stay in the Loop</h4>
                        <p className="text-[#D7E2EA] text-sm font-light leading-relaxed mb-4" style={{ opacity: 0.5 }}>
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
                                    className="w-full rounded-full px-5 py-3 text-sm text-[#D7E2EA]
                                        outline-none transition-colors duration-200"
                                    style={{
                                        background: 'rgba(255,255,255,0.05)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        color: '#D7E2EA',
                                    }}
                                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)')}
                                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)')}
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

                        <div className="flex flex-col gap-1 mt-4">
                            <span
                                className="text-[#D7E2EA] text-xs uppercase tracking-[0.2em] font-medium"
                                style={{ opacity: 0.4 }}
                            >
                                Direct Contact
                            </span>
                            <a
                                href="mailto:hello@jack3d.studio"
                                className="text-[#D7E2EA] text-sm font-light hover:opacity-80 transition-opacity duration-200"
                                style={{ opacity: 0.5 }}
                            >
                                hello@jack3d.studio
                            </a>
                        </div>
                    </FadeIn>

                </div>

                {/* ── Bottom bar ── */}
                <FadeIn delay={0.15} y={12}>
                    <div
                        className="flex flex-wrap items-center justify-between gap-4 mt-12 pt-6"
                        style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}
                    >
                        <p className="text-[#D7E2EA] text-xs tracking-wide" style={{ opacity: 0.3 }}>
                            © 2026 Jack. All rights reserved.
                        </p>

                        <nav className="flex gap-6">
                            {SOCIALS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-[#D7E2EA] text-xs uppercase tracking-widest
                                        hover:opacity-80 transition-opacity duration-200"
                                    style={{ opacity: 0.5 }}
                                >
                                    {s.label}
                                </a>
                            ))}
                        </nav>

                        <p className="text-[#D7E2EA] text-xs tracking-wide" style={{ opacity: 0.3 }}>
                            Designed & built with passion
                        </p>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}
