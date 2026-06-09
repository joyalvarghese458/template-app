'use client'

import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { SplineScene } from './SplineScene'
import { Spotlight } from './Spotlight'
import { HERO } from '../_data/portfolio'
import s from '../theme.module.css'

export default function Hero() {
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const autoPlayedRef = useRef(false)

  useEffect(() => {
    const audio = new Audio('/sounds/robo.mp3')
    audio.volume = 0.8
    audioRef.current = audio

    // Desktop: try immediate autoplay
    audio.play().then(() => { autoPlayedRef.current = true }).catch(() => {})

    // Mobile fallback: play on the very first pointer interaction anywhere on screen
    const onFirstPointer = () => {
      if (autoPlayedRef.current) return
      autoPlayedRef.current = true
      audio.currentTime = 0
      audio.play().catch(() => {})
    }
    window.addEventListener('pointerdown', onFirstPointer, { once: true })

    return () => {
      window.removeEventListener('pointerdown', onFirstPointer)
      audio.pause()
    }
  }, [])

  // Called when robot is tapped — mark autoplay done early so window listener doesn't double-play
  const onRoboPointerDown = () => { autoPlayedRef.current = true }

  const playRobo = () => {
    const audio = audioRef.current
    if (!audio) return
    audio.currentTime = 0
    audio.play().catch(() => {})
  }

  return (
    <section
      className="relative w-full overflow-hidden bg-black"
      style={{ minHeight: '100svh' }}
    >
      <Spotlight
        className={`${s.animateSpotlight} -top-40 left-0 md:left-60 md:-top-20`}
        fill="white"
      />

      <div className="flex flex-col md:flex-row" style={{ minHeight: '100svh' }}>

        {/* Mobile Spline */}
        <div
          className="md:hidden w-full shrink-0 relative cursor-pointer"
          style={{ height: 440, paddingTop: 48 }}
          onPointerDown={onRoboPointerDown}
          onClick={playRobo}
        >
          <SplineScene scene={HERO.splineScene} className="w-full h-full" />
        </div>

        {/* Left — text */}
        <div className="flex-1 flex flex-col justify-center px-6 sm:px-10 lg:px-20 pt-4 pb-12 md:pt-24 lg:pt-28 relative z-10">

          {/* Greeting */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className={`${s.displayFont} text-white leading-none mb-4`}
            style={{ fontSize: 'clamp(52px, 8vw, 110px)' }}
          >
            {HERO.greeting}
          </motion.h1>

          {/* Title */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.38 }}
            className={`${s.monoFont} text-[#FF3D00] text-sm tracking-[0.18em] uppercase mb-8`}
          >
            {HERO.title}
          </motion.p>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.52 }}
            className="text-white/45 max-w-[420px] mb-10 text-[15px] leading-relaxed"
          >
            {HERO.sub}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.66 }}
            className="flex flex-wrap gap-4"
          >
            <a
              href="#works"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`${s.monoFont} inline-flex items-center px-8 py-4 text-[11px] tracking-[0.2em] uppercase text-white rounded-sm transition-all duration-200 hover:brightness-110 active:scale-[0.98]`}
              style={{ backgroundColor: '#FF3D00' }}
            >
              View Works
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className={`${s.monoFont} inline-flex items-center px-8 py-4 text-[11px] tracking-[0.2em] uppercase text-white border border-white/25 rounded-sm transition-all duration-200 hover:border-white/60 hover:bg-white/5 active:scale-[0.98]`}
            >
              Get In Touch
            </a>
          </motion.div>
        </div>

        {/* Right — Spline (desktop only) */}
        <div className="hidden md:block flex-1 relative cursor-pointer" onPointerDown={onRoboPointerDown} onClick={playRobo}>
          <SplineScene
            scene={HERO.splineScene}
            className="w-full h-full absolute inset-0"
          />
        </div>
      </div>
    </section>
  )
}
