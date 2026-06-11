'use client'

import { useEffect, useRef, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [visible,   setVisible]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const root = document.documentElement

    if (pathname === '/templates/swift') {
      root.classList.remove('has-custom-cursor')
      return
    }

    if (window.matchMedia('(pointer: coarse)').matches) {
      root.classList.remove('has-custom-cursor')
      return
    }

    root.classList.add('has-custom-cursor')

    let shown = false

    const onMove = (e: MouseEvent) => {
      const x = e.clientX
      const y = e.clientY

      if (dotRef.current)  dotRef.current.style.transform  = `translate(${x - 4}px, ${y - 4}px)`
      if (ringRef.current) ringRef.current.style.transform = `translate(${x - 16}px, ${y - 16}px)`

      if (!shown) { shown = true; setVisible(true) }
    }

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement
      setIsPointer(
        t.tagName === 'A' ||
        t.tagName === 'BUTTON' ||
        !!t.closest('a') ||
        !!t.closest('button')
      )
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    window.addEventListener('mouseover', onOver, { passive: true })

    return () => {
      root.classList.remove('has-custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mouseover', onOver)
    }
  }, [pathname])

  if (pathname === '/templates/swift') return null

  return (
    <>
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full pointer-events-none z-[99999] bg-white mix-blend-difference will-change-transform"
        style={{ opacity: visible ? 1 : 0 }}
        aria-hidden
      />
      <div
        ref={ringRef}
        className="fixed top-0 left-0 rounded-full border pointer-events-none z-[99998] will-change-transform"
        style={{
          opacity: visible ? (isPointer ? 1 : 0.65) : 0,
          width:  isPointer ? 48 : 32,
          height: isPointer ? 48 : 32,
          borderColor: isPointer ? '#FF3D00' : 'rgba(140,140,140,0.5)',
          transition: 'width 0.18s ease, height 0.18s ease, border-color 0.18s ease, opacity 0.18s ease',
        }}
        aria-hidden
      />
    </>
  )
}
