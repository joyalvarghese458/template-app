'use client'

import { useState } from 'react'
import { CONTACT } from '../_data/portfolio'
import { SectionReveal } from './SectionReveal'
import s from '../theme.module.css'

const SOCIAL_ICONS: Record<string, React.ReactNode> = {
  Behance: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M7.803 5.731c.589 0 1.119.051 1.605.155.483.103.895.273 1.243.508.343.235.611.547.804.938.188.387.284.855.284 1.405 0 .603-.135 1.109-.408 1.519-.271.41-.671.745-1.197 1.005.72.207 1.26.57 1.614 1.089.354.519.53 1.14.53 1.864 0 .603-.115 1.125-.35 1.565a3.102 3.102 0 01-.963 1.105c-.408.285-.882.498-1.419.637A6.668 6.668 0 018.25 17H2V5.731h5.803zm-.351 4.972c.47 0 .857-.115 1.154-.344.298-.232.448-.59.448-1.073 0-.272-.05-.497-.148-.675a1.127 1.127 0 00-.399-.421 1.7 1.7 0 00-.574-.22 3.22 3.22 0 00-.671-.068H4.626v2.801h2.826zm.157 5.189c.249 0 .483-.026.698-.08a1.66 1.66 0 00.573-.252c.163-.115.292-.27.389-.461.097-.191.145-.432.145-.722 0-.578-.161-.999-.484-1.263-.324-.264-.754-.396-1.286-.396H4.626v3.174h2.983zM15.5 7h5V8.5h-5V7zm-1 5.5c0-1.762.505-3.107 1.515-4.036 1.01-.927 2.378-1.39 4.103-1.39 1.86 0 3.285.518 4.275 1.554.991 1.037 1.487 2.53 1.487 4.48v.672h-8.752c.048.872.317 1.542.807 2.011.49.47 1.162.704 2.017.704.672 0 1.231-.163 1.675-.49.444-.327.725-.754.842-1.283H24c-.278 1.219-.897 2.154-1.859 2.805-.962.652-2.131.977-3.509.977-1.734 0-3.095-.49-4.082-1.47-.987-.98-1.48-2.342-1.48-4.087v-.447zm8.773-1.067c-.097-.74-.379-1.32-.843-1.74-.465-.42-1.065-.63-1.803-.63-.761 0-1.371.217-1.83.65-.46.434-.74 1.007-.843 1.72h5.319z" />
    </svg>
  ),
  ArtStation: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M0 17.723l2.027 3.505h.001a2.424 2.424 0 002.164 1.333h13.457l-2.792-4.838H0zm24 .025c0-.484-.143-.935-.388-1.314L15.728 2.728a2.424 2.424 0 00-2.164-1.333H5.09L22.99 18.386a2.41 2.41 0 001.01-1.963zm-11.478-6.842L9.99 4.256 4.555 13.48h7.967z" />
    </svg>
  ),
  Instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  ),
  LinkedIn: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', type: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section
      id="contact"
      className={`${s.grain} relative bg-black py-16 lg:py-20 px-6 sm:px-10 lg:px-20`}
    >
      {/* Subtle red glow top */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[1px] opacity-20"
        style={{ background: 'linear-gradient(to right, transparent, #FF3D00, transparent)' }}
        aria-hidden
      />

      <div className="max-w-5xl mx-auto">
        {/* Section label */}
        <SectionReveal>
          <p className={`${s.monoFont} text-[#FF3D00] text-xs tracking-[0.2em] uppercase mb-8`}>
            / 003 Contact
          </p>
        </SectionReveal>

        {/* Headline */}
        <SectionReveal delay={0.05}>
          <h2
            className={`${s.displayFont} text-white leading-none mb-6`}
            style={{ fontSize: 'clamp(40px, 7vw, 110px)' }}
          >
            {CONTACT.headline.map((line, i) => (
              <span key={i} className="block">{line}</span>
            ))}
          </h2>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <p className="text-white/40 mb-16 max-w-lg text-[15px] leading-relaxed">
            {CONTACT.sub}
          </p>
        </SectionReveal>

        {/* Form */}
        <SectionReveal delay={0.15}>
          {sent ? (
            <div className="py-16 text-center">
              <p className={`${s.displayFont} text-white text-5xl mb-4`}>MESSAGE SENT.</p>
              <p className="text-white/40 text-sm">I&apos;ll get back to you shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
              <div>
                <label className={`${s.monoFont} text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1`}>
                  Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className={s.formInput}
                />
              </div>

              <div>
                <label className={`${s.monoFont} text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1`}>
                  Email
                </label>
                <input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className={s.formInput}
                />
              </div>

              <div>
                <label className={`${s.monoFont} text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1`}>
                  Project Type
                </label>
                <select
                  required
                  value={form.type}
                  onChange={(e) => setForm({ ...form, type: e.target.value })}
                  className={s.formSelect}
                >
                  <option value="" disabled>Select a category</option>
                  <option value="branding">Branding</option>
                  <option value="game-art">Game Art</option>
                  <option value="film-vfx">Film VFX</option>
                  <option value="product-viz">Product Viz</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className={`${s.monoFont} text-[10px] tracking-[0.15em] text-white/30 uppercase block mb-1`}>
                  Message
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Tell me about your project..."
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className={`${s.formInput} resize-none`}
                />
              </div>

              <div className="md:col-span-2">
                <button
                  type="submit"
                  className={`${s.monoFont} w-full py-4 text-sm tracking-widest uppercase text-white font-medium transition-all duration-200 hover:opacity-90 active:scale-[0.99]`}
                  style={{ backgroundColor: '#FF3D00' }}
                >
                  Send Message →
                </button>
              </div>
            </form>
          )}
        </SectionReveal>

        {/* Divider */}
        <div className="mt-20 pt-10 border-t border-white/[0.06]">
          <SectionReveal delay={0.1}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
              {/* Social links */}
              <div className="flex flex-wrap gap-6">
                {CONTACT.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`${s.monoFont} flex items-center gap-2 text-white/40 text-xs tracking-wider hover:text-[#FF3D00] transition-colors duration-200`}
                  >
                    {SOCIAL_ICONS[social.label]}
                    {social.label}
                  </a>
                ))}
              </div>

              {/* Footer copy */}
              <div className="text-right">
                <p className={`${s.monoFont} text-white/20 text-[10px] tracking-wider`}>
                  © 2024 ARIA NOVA. ALL RIGHTS RESERVED.
                </p>
                <p className={`${s.monoFont} text-[#FF3D00]/40 text-[10px] tracking-wider mt-1`}>
                  DESIGNED WITH OBSESSION
                </p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
