'use client'

import { useEffect } from 'react'

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    let lenis: any = null
    let rafId: number
    let active = true

    // Global CSS sets scroll-behavior: smooth which conflicts with Lenis
    const html = document.documentElement
    html.style.scrollBehavior = 'auto'

    ;(async () => {
      const { default: Lenis } = await import('lenis')
      if (!active) return

      // lerp (not duration) gives the signature "floating" deceleration feel.
      // 0.08 = very smooth; increase toward 0.15 for snappier response.
      lenis = new Lenis({
        lerp: 0.08,
        smoothWheel: true,
        wheelMultiplier: 1,
        touchMultiplier: 1.8,
        syncTouch: true,
      })

      function raf(time: number) {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }
      rafId = requestAnimationFrame(raf)
    })()

    return () => {
      active = false
      html.style.scrollBehavior = ''
      cancelAnimationFrame(rafId)
      lenis?.destroy()
    }
  }, [])

  return <>{children}</>
}
