'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)
  const [mounted, setMounted] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)

  // Dot follows instantly — no spring delay
  const dotX = useSpring(rawX, { stiffness: 2000, damping: 60, mass: 0.2 })
  const dotY = useSpring(rawY, { stiffness: 2000, damping: 60, mass: 0.2 })

  // Ring trails slightly behind
  const ringX = useSpring(rawX, { stiffness: 500, damping: 40, mass: 0.4 })
  const ringY = useSpring(rawY, { stiffness: 500, damping: 40, mass: 0.4 })

  useEffect(() => {
    setMounted(true)

    const move = (e: MouseEvent) => {
      rawX.set(e.clientX)
      rawY.set(e.clientY)
    }

    const checkPointer = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      setIsPointer(
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') !== null ||
        target.closest('button') !== null ||
        window.getComputedStyle(target).cursor === 'pointer'
      )
    }

    window.addEventListener('mousemove', move)
    window.addEventListener('mouseover', checkPointer)
    return () => {
      window.removeEventListener('mousemove', move)
      window.removeEventListener('mouseover', checkPointer)
    }
  }, [rawX, rawY])

  if (!mounted) return null
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Dot — instant */}
      <motion.div
        style={{ x: dotX, y: dotY, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
        aria-hidden
      />
      {/* Ring — trails smoothly */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          borderColor: isPointer ? '#FF3D00' : 'rgba(120,120,120,0.5)',
          opacity: isPointer ? 1 : 0.65,
        }}
        transition={{ duration: 0.15, ease: 'easeOut' }}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[99998]"
        aria-hidden
      />
    </>
  )
}
