'use client';

import React, { useRef, useEffect, useState, ReactNode, memo } from 'react';
import {
    motion,
    useScroll,
    useTransform,
    MotionProps,
} from 'framer-motion';

// ─── Pre-built motion element map (no per-render creation) ─────────────────
const M = {
    div:     motion.div,
    h1:      motion.h1,
    h2:      motion.h2,
    h3:      motion.h3,
    h4:      motion.h4,
    p:       motion.p,
    span:    motion.span,
    nav:     motion.nav,
    section: motion.section,
    header:  motion.header,
    footer:  motion.footer,
    main:    motion.main,
    article: motion.article,
    aside:   motion.aside,
    ul:      motion.ul,
    li:      motion.li,
    a:       motion.a,
    button:  motion.button,
} as const;

type MotionTag = keyof typeof M;

// ─── FadeIn ────────────────────────────────────────────────────────────────
interface FadeInProps extends Omit<MotionProps, 'style'> {
    children: ReactNode;
    delay?: number;
    duration?: number;
    x?: number;
    y?: number;
    as?: MotionTag;
    className?: string;
    style?: React.CSSProperties;
}

export const FadeIn = memo(function FadeIn({
    children,
    delay = 0,
    duration = 0.7,
    x = 0,
    y = 30,
    as = 'div',
    className,
    style,
    ...rest
}: FadeInProps) {
    const Tag = M[as] ?? M.div;
    return (
        <Tag
            className={className}
            style={style}
            initial={{ opacity: 0, x, y }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: '50px', amount: 0 }}
            transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
            {...(rest as object)}
        >
            {children}
        </Tag>
    );
});

// ─── Magnet ────────────────────────────────────────────────────────────────
interface MagnetProps {
    children: ReactNode;
    padding?: number;
    strength?: number;
    activeTransition?: string;
    inactiveTransition?: string;
    className?: string;
}

export function Magnet({
    children,
    padding = 150,
    strength = 3,
    activeTransition = 'transform 0.3s ease-out',
    inactiveTransition = 'transform 0.6s ease-in-out',
    className,
}: MagnetProps) {
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Skip on touch devices
        if (window.matchMedia('(pointer: coarse)').matches) return;

        function onMouseMove(e: MouseEvent) {
            const rect = el!.getBoundingClientRect();
            const centerX = rect.left + rect.width / 2;
            const centerY = rect.top + rect.height / 2;

            const inZone =
                e.clientX > rect.left - padding &&
                e.clientX < rect.right + padding &&
                e.clientY > rect.top - padding &&
                e.clientY < rect.bottom + padding;

            if (inZone) {
                const distX = e.clientX - centerX;
                const distY = e.clientY - centerY;
                el!.style.transform = `translate3d(${distX / strength}px,${distY / strength}px,0)`;
                el!.style.transition = activeTransition;
            } else {
                el!.style.transform = 'translate3d(0,0,0)';
                el!.style.transition = inactiveTransition;
            }
        }

        window.addEventListener('mousemove', onMouseMove, { passive: true });
        return () => window.removeEventListener('mousemove', onMouseMove);
    }, [padding, strength, activeTransition, inactiveTransition]);

    return (
        <div
            ref={ref}
            className={className}
            style={{ willChange: 'transform', transition: inactiveTransition }}
        >
            {children}
        </div>
    );
}

// ─── AnimatedText ──────────────────────────────────────────────────────────
interface AnimatedTextProps {
    text: string;
    className?: string;
    style?: React.CSSProperties;
}

export function AnimatedText({ text, className, style }: AnimatedTextProps) {
    const ref = useRef<HTMLParagraphElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start 0.8', 'end 0.2'],
    });

    const chars = text.split('');

    return (
        <p
            ref={ref}
            className={className}
            aria-label={text}
            style={{ position: 'relative', ...style }}
        >
            {chars.map((char, i) => {
                const start = i / chars.length;
                const end = (i + 1) / chars.length;
                return (
                    <CharSpan
                        key={i}
                        char={char}
                        scrollYProgress={scrollYProgress}
                        start={start}
                        end={end}
                    />
                );
            })}
        </p>
    );
}

const CharSpan = memo(function CharSpan({
    char,
    scrollYProgress,
    start,
    end,
}: {
    char: string;
    scrollYProgress: ReturnType<typeof useScroll>['scrollYProgress'];
    start: number;
    end: number;
}) {
    const opacity = useTransform(scrollYProgress, [start, end], [0.2, 1]);
    return (
        <span style={{ position: 'relative', display: 'inline', whiteSpace: 'pre-wrap' }}>
            {/* Invisible placeholder preserves layout */}
            <span style={{ opacity: 0 }}>{char}</span>
            <motion.span
                style={{ opacity, position: 'absolute', left: 0, top: 0 }}
                aria-hidden
            >
                {char}
            </motion.span>
        </span>
    );
});

// ─── ContactButton ─────────────────────────────────────────────────────────
interface ButtonProps {
    className?: string;
    onClick?: () => void;
}

export function ContactButton({ className = '', onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full font-medium uppercase tracking-widest text-white cursor-pointer ${className}`}
            style={{
                // Inline padding beats the .jack-portfolio * { padding:0 } reset
                paddingInline: 'clamp(1.75rem, 3vw, 3rem)',
                paddingBlock:  'clamp(0.65rem, 1vw, 1rem)',
                fontSize:      'clamp(0.7rem, 1vw, 0.95rem)',
                background:    'linear-gradient(123deg,#18011F 7%,#B600A8 37%,#7621B0 72%,#BE4C00 100%)',
                boxShadow:     '0px 4px 4px rgba(181,1,167,0.25),inset 4px 4px 12px #7721B1',
                outline:       '2px solid white',
                outlineOffset: '-3px',
            }}
        >
            Contact Me
        </button>
    );
}

// ─── LiveProjectButton ─────────────────────────────────────────────────────
export function LiveProjectButton({ className = '', onClick }: ButtonProps) {
    return (
        <button
            onClick={onClick}
            className={`rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA]
        font-medium uppercase tracking-widest cursor-pointer
        hover:bg-[#D7E2EA]/10 transition-colors ${className}`}
            style={{
                // Inline padding beats the .jack-portfolio * { padding:0 } reset
                paddingInline: 'clamp(1.5rem, 2.5vw, 2.5rem)',
                paddingBlock:  'clamp(0.55rem, 0.85vw, 0.85rem)',
                fontSize:      'clamp(0.75rem, 0.9vw, 0.9rem)',
            }}
        >
            Live Project
        </button>
    );
}
