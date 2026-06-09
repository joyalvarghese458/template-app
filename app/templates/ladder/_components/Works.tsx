'use client'

import { useRef } from 'react'
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion'
import { PROJECTS } from '../_data/portfolio'
import { SectionReveal } from './SectionReveal'
import s from '../theme.module.css'

function WorkCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const rotateX = useTransform(y, [-80, 80], [6, -6])
  const rotateY = useTransform(x, [-80, 80], [-6, 6])
  const springRotX = useSpring(rotateX, { stiffness: 200, damping: 30 })
  const springRotY = useSpring(rotateY, { stiffness: 200, damping: 30 })

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect()
    if (!rect) return
    x.set(e.clientX - rect.left - rect.width / 2)
    y.set(e.clientY - rect.top - rect.height / 2)
  }
  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: (index % 2) * 0.1 }}
      viewport={{ once: true, margin: '-80px' }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{ rotateX: springRotX, rotateY: springRotY, willChange: 'transform' }}
        className={`${s.workCard} relative rounded-lg overflow-hidden group`}
        css-aspect="true"
      >
        {/* Background gradient */}
        <div
          className="w-full h-full"
          style={{
            background: project.gradient,
            aspectRatio: '16/9',
            minHeight: 200,
          }}
        />

        {/* Subtle inner grid / texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.5) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.5) 40px)`,
          }}
        />

        {/* Highlight line */}
        <div
          className="absolute top-0 left-0 right-0 h-[1px] opacity-30"
          style={{ background: `linear-gradient(to right, transparent, ${project.highlight}, transparent)` }}
        />

        {/* Hover overlay */}
        <div className={s.cardHoverOverlay} />

        {/* Project number */}
        <div className="absolute top-5 left-5 z-10">
          <span
            className={`${s.monoFont} text-[#FF3D00] text-sm font-medium`}
            style={{ textShadow: '0 0 20px rgba(255,61,0,0.5)' }}
          >
            {project.id}
          </span>
        </div>

        {/* Bottom info */}
        <div className="absolute bottom-0 left-0 right-0 p-5 z-10">
          <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300 ease-out">
            <p className={`${s.monoFont} text-[10px] text-white/40 tracking-[0.15em] uppercase mb-1.5 group-hover:text-white/60 transition-colors`}>
              {project.category}
            </p>
            <h3
              className={`${s.displayFont} text-white leading-none mb-3`}
              style={{ fontSize: 'clamp(20px, 2.5vw, 28px)' }}
            >
              {project.title}
            </h3>
            <p className={`${s.monoFont} text-white/30 text-[10px] tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
              {project.tools}
            </p>
          </div>

          {/* View arrow — appears on hover */}
          <div className="mt-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 translate-y-3 group-hover:translate-y-0 transition-all duration-300">
            <span className={`${s.monoFont} text-white text-xs tracking-widest uppercase`}>
              View Project
            </span>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default function Works() {
  return (
    <section id="works" className="bg-black py-16 lg:py-20 px-6 sm:px-10 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <SectionReveal>
          <p className={`${s.monoFont} text-[#FF3D00] text-xs tracking-[0.2em] uppercase mb-6`}>
            / 002 Works
          </p>
        </SectionReveal>

        <SectionReveal delay={0.05}>
          <h2
            className={`${s.displayFont} text-white leading-none mb-16`}
            style={{ fontSize: 'clamp(40px, 6vw, 96px)' }}
          >
            SELECTED<br />PROJECTS
          </h2>
        </SectionReveal>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-7">
          {PROJECTS.map((project, i) => (
            <WorkCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
