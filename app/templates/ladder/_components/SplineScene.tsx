'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
}

export function SplineScene({ scene, className }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [load, setLoad] = useState(false)

  // Only start downloading Spline when the container enters the viewport
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setLoad(true); observer.disconnect() } },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={containerRef} className={`w-full h-full ${className ?? ''}`}>
      {load && (
        <Suspense
          fallback={
            <div className="w-full h-full flex items-center justify-center">
              <span style={{
                display: 'block', width: 32, height: 32, borderRadius: '50%',
                border: '2px solid rgba(255,61,0,0.15)', borderTopColor: '#FF3D00',
                animation: 'spin 0.7s linear infinite',
              }} />
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          }
        >
          <Spline scene={scene} className="w-full h-full" />
        </Suspense>
      )}
    </div>
  )
}
