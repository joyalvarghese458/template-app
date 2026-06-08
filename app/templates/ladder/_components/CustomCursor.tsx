'use client'

import { useEffect, useState } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

export default function CustomCursor() {
  const [isPointer, setIsPointer] = useState(false)

  const rawX = useMotionValue(-100)
  const rawY = useMotionValue(-100)
  const x = useSpring(rawX, { damping: 28, stiffness: 600, mass: 0.5 })
  const y = useSpring(rawY, { damping: 28, stiffness: 600, mass: 0.5 })

  const ringX = useSpring(rawX, { damping: 35, stiffness: 250, mass: 0.8 })
  const ringY = useSpring(rawY, { damping: 35, stiffness: 250, mass: 0.8 })

  useEffect(() => {
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

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null
  }

  return (
    <>
      {/* Dot */}
      <motion.div
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
        className="fixed top-0 left-0 w-2 h-2 bg-white rounded-full pointer-events-none z-[99999] mix-blend-difference"
        aria-hidden
      />
      {/* Ring */}
      <motion.div
        style={{ x: ringX, y: ringY, translateX: '-50%', translateY: '-50%' }}
        animate={{
          width: isPointer ? 56 : 36,
          height: isPointer ? 56 : 36,
          borderColor: isPointer ? '#FF3D00' : 'rgba(255,61,0,0.5)',
        }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[99998]"
        aria-hidden
      />
    </>
  )
}
