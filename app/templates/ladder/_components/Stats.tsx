'use client'

import { motion } from 'framer-motion'
import { STATS } from '../_data/portfolio'
import s from '../theme.module.css'

export default function Stats() {
  return (
    <div className="bg-black border-y border-white/[0.06] px-6 sm:px-10 lg:px-20 py-10">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {STATS.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
            viewport={{ once: true }}
            className="flex flex-col gap-1"
          >
            <span
              className={`${s.displayFont} text-white leading-none`}
              style={{ fontSize: 'clamp(36px, 4vw, 56px)' }}
            >
              {stat.value}
            </span>
            <span className={`${s.monoFont} text-white/35 text-[11px] tracking-[0.15em] uppercase`}>
              {stat.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
