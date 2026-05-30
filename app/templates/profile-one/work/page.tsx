'use client';

import Link from 'next/link';
import ScrollExpandMedia from '../_components/ScrollExpansionHero';

// ═══════════════════════════════════════════════════════════════════
// EDITABLE — swap project details here
// ═══════════════════════════════════════════════════════════════════

const PROJECT = {
  // Two-word title — first word slides left, rest slides right
  title: 'Horizon AI',
  date:  'Case Study · 2025',
  scrollToExpand: '↓  Scroll to explore',

  // Project hero image (expands as user scrolls)
  mediaSrc: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1280&q=80&auto=format&fit=crop',

  // Full-bleed background that fades as media expands
  bgImageSrc: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=1920&q=80&auto=format&fit=crop',

  overview:
    'A full-scale product redesign for Horizon AI — an analytics platform serving 50,000+ enterprise users. The project ran 12 weeks, from discovery research through a complete design system rebuild to a shipped product.',
  challenge:
    'The existing interface buried critical insights behind five-click workflows. Users were churning before ever reaching the "aha moment." We needed to surface the right data at the right time, with zero learning curve.',
  outcome:
    'The redesigned platform reduced time-to-insight by 60%, lifted user activation by 40%, and earned Horizon a nomination for the 2025 SaaS Design Award.',

  metrics: [
    { value: '60%', label: 'Faster time-to-insight' },
    { value: '40%', label: 'Activation increase' },
    { value: '12wk', label: 'Discovery to ship' },
    { value: '50k+', label: 'Enterprise users' },
  ],

  tags: ['Product Design', 'Design System', 'iOS', 'Web', 'UX Research', 'Prototyping'],

  // Previous / next project nav
  prev: { label: 'Nova Platform', href: '/templates/profile-one/work' },
  next: { label: 'Meridian Brand', href: '/templates/profile-one/work' },
};

// ═══════════════════════════════════════════════════════════════════

export default function WorkPage() {
  return (
    // Root must be dark to match the template theme
    <div style={{ background: '#060812', minHeight: '100dvh', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <ScrollExpandMedia
        mediaType="image"
        mediaSrc={PROJECT.mediaSrc}
        bgImageSrc={PROJECT.bgImageSrc}
        title={PROJECT.title}
        date={PROJECT.date}
        scrollToExpand={PROJECT.scrollToExpand}
        textBlend={false}
      >
        <ProjectContent />
      </ScrollExpandMedia>
    </div>
  );
}

// ─── Content that fades in after full expansion ────────────────────────────────

function ProjectContent() {
  return (
    <div style={{ maxWidth: '64rem', margin: '0 auto', color: '#f1f5f9', WebkitFontSmoothing: 'antialiased' }}>

      {/* Back link */}
      <Link
        href="/templates/profile-one"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: '#6366f1',
          textDecoration: 'none',
          fontSize: '0.875rem',
          fontWeight: 600,
          letterSpacing: '0.04em',
          marginBottom: '3.5rem',
          transition: 'color 0.2s',
        }}
      >
        ← Back to Portfolio
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '0.75rem' }}>
          ─── {PROJECT.date}
        </p>
        <h2 style={{ fontSize: 'clamp(2.25rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 1.5rem' }}>
          {PROJECT.title.split(' ')[0]}{' '}
          <span style={{ background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
            {PROJECT.title.split(' ').slice(1).join(' ')}
          </span>
        </h2>
        <p style={{ fontSize: '1.0625rem', lineHeight: 1.75, color: '#94a3b8', maxWidth: '52rem' }}>
          {PROJECT.overview}
        </p>
      </div>

      {/* Metrics strip */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(8rem, 1fr))',
        gap: '1px',
        background: 'rgba(255,255,255,0.07)',
        border: '1px solid rgba(255,255,255,0.07)',
        borderRadius: '12px',
        overflow: 'hidden',
        marginBottom: '3rem',
      }}>
        {PROJECT.metrics.map((m) => (
          <div key={m.label} style={{ padding: '1.5rem 2rem', background: '#0d1020' }}>
            <p style={{ fontSize: '2rem', fontWeight: 900, letterSpacing: '-0.03em', background: 'linear-gradient(135deg, #6366f1, #a78bfa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', lineHeight: 1 }}>
              {m.value}
            </p>
            <p style={{ fontSize: '0.8125rem', color: '#64748b', marginTop: '0.25rem' }}>
              {m.label}
            </p>
          </div>
        ))}
      </div>

      {/* Challenge + Outcome */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
        <div>
          <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#6366f1', marginBottom: '0.75rem' }}>
            The Challenge
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#94a3b8' }}>
            {PROJECT.challenge}
          </p>
        </div>
        <div>
          <p style={{ fontSize: '0.6875rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: '#a78bfa', marginBottom: '0.75rem' }}>
            The Outcome
          </p>
          <p style={{ fontSize: '1rem', lineHeight: 1.75, color: '#94a3b8' }}>
            {PROJECT.outcome}
          </p>
        </div>
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '4rem' }}>
        {PROJECT.tags.map((tag) => (
          <span
            key={tag}
            style={{
              padding: '0.375rem 0.875rem',
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
              borderRadius: '100px',
              fontSize: '0.8125rem',
              fontWeight: 600,
              color: '#a78bfa',
              letterSpacing: '0.02em',
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project nav */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: '2rem',
        borderTop: '1px solid rgba(255,255,255,0.06)',
        flexWrap: 'wrap',
        gap: '1rem',
      }}>
        <Link
          href={PROJECT.prev.href}
          style={{ fontSize: '0.875rem', fontWeight: 600, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
        >
          ← {PROJECT.prev.label}
        </Link>
        <Link
          href="/templates/profile-one"
          style={{ fontSize: '0.8125rem', fontWeight: 700, letterSpacing: '0.08em', color: '#6366f1', textDecoration: 'none', textTransform: 'uppercase' }}
        >
          All Work
        </Link>
        <Link
          href={PROJECT.next.href}
          style={{ fontSize: '0.875rem', fontWeight: 600, color: '#64748b', textDecoration: 'none', transition: 'color 0.2s' }}
        >
          {PROJECT.next.label} →
        </Link>
      </div>

    </div>
  );
}
