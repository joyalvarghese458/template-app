'use client'

import { SERVICES } from '../_data/portfolio'
import { SectionReveal } from './SectionReveal'
import s from '../theme.module.css'

export default function Services() {
  return (
    <section className="bg-black px-6 sm:px-10 lg:px-20 py-16 lg:py-20">
      <div className="max-w-7xl mx-auto">
        <SectionReveal>
          <p className={`${s.monoFont} text-[#FF3D00] text-xs tracking-[0.2em] uppercase mb-4`}>
            / What I Do
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2
            className={`${s.displayFont} text-white leading-none mb-12`}
            style={{ fontSize: 'clamp(36px, 5vw, 76px)' }}
          >
            SERVICES
          </h2>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/[0.06]">
          {SERVICES.map((svc, i) => (
            <SectionReveal key={svc.number} delay={i * 0.07}>
              <div className="bg-black p-8 lg:p-10 group hover:bg-white/[0.03] transition-colors duration-300">
                <div className="flex items-start justify-between mb-6">
                  <span className={`${s.monoFont} text-[#FF3D00] text-xs tracking-widest`}>
                    {svc.number}
                  </span>
                  <svg
                    className="w-5 h-5 text-white/20 group-hover:text-[#FF3D00] group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}
                  >
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
                <h3
                  className={`${s.displayFont} text-white mb-4 leading-none`}
                  style={{ fontSize: 'clamp(22px, 2.5vw, 30px)' }}
                >
                  {svc.title}
                </h3>
                <p className="text-white/40 text-[13px] leading-relaxed">{svc.desc}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
