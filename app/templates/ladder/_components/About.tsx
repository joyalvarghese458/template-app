'use client'

import { motion } from 'framer-motion'
import { ABOUT } from '../_data/portfolio'
import { SectionReveal } from './SectionReveal'
import s from '../theme.module.css'

export default function About() {
  return (
    <section id="about" className="bg-black py-16 lg:py-20 px-6 sm:px-10 lg:px-20">
      {/* Section label */}
      <SectionReveal>
        <p className={`${s.monoFont} text-[#FF3D00] text-xs tracking-[0.2em] uppercase mb-10`}>
          / 001 About
        </p>
      </SectionReveal>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        {/* Left */}
        <div>
          <SectionReveal delay={0.05}>
            <blockquote
              className={`${s.displayFont} text-white mb-10 leading-tight`}
              style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}
            >
              {ABOUT.quote}
            </blockquote>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <p className="text-white/55 leading-relaxed mb-10 text-[15px]">
              {ABOUT.bio}
            </p>
          </SectionReveal>

          <SectionReveal delay={0.15}>
            <div className="flex flex-wrap gap-2">
              {ABOUT.skills.map((skill) => (
                <span key={skill} className={s.skillPill}>
                  {skill}
                </span>
              ))}
            </div>
          </SectionReveal>
        </div>

        {/* Right */}
        <div className="space-y-12">
          {/* Experience */}
          <SectionReveal delay={0.1}>
            <h3 className={`${s.monoFont} text-[#FF3D00] text-xs tracking-[0.18em] uppercase mb-8`}>
              Experience
            </h3>
            <div className="space-y-8">
              {ABOUT.experience.map((item, i) => (
                <motion.div
                  key={item.role}
                  className={s.timelineEntry}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                    <span className="text-white font-medium text-sm">{item.role}</span>
                    <span className={`${s.monoFont} text-white/30 text-[11px]`}>{item.period}</span>
                  </div>
                  <p className={`${s.monoFont} text-[#FF3D00] text-[11px] tracking-wider mb-2`}>
                    {item.company}
                  </p>
                  <p className="text-white/45 text-[13px] leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>

          {/* Education */}
          <SectionReveal delay={0.2}>
            <h3 className={`${s.monoFont} text-[#FF3D00] text-xs tracking-[0.18em] uppercase mb-8`}>
              Education
            </h3>
            <div className="space-y-7">
              {ABOUT.education.map((item, i) => (
                <motion.div
                  key={item.degree}
                  className={s.timelineEntry}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                  viewport={{ once: true, margin: '-60px' }}
                >
                  <div className="flex items-baseline justify-between gap-4 flex-wrap mb-1">
                    <span className="text-white font-medium text-sm">{item.degree}</span>
                    <span className={`${s.monoFont} text-white/30 text-[11px]`}>{item.year}</span>
                  </div>
                  <p className="text-white/45 text-[13px]">{item.school}</p>
                </motion.div>
              ))}
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  )
}
