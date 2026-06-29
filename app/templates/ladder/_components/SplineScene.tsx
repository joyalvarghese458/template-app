'use client'

import { Suspense, lazy, useEffect, useRef, useState } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  priority?: boolean
  posterSrc?: string
}

export function SplineScene({ scene, className, priority = false, posterSrc }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [shouldLoad, setShouldLoad] = useState(priority)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    if (priority) return

    const el = containerRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setShouldLoad(true)
        observer.disconnect()
      },
      { rootMargin: '300px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [priority])

  return (
    <div
      ref={containerRef}
      data-spline-scene="true"
      data-spline-ready={isReady ? 'true' : 'false'}
      className={`relative w-full h-full overflow-hidden ${className ?? ''}`}
    >
      {posterSrc ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={posterSrc}
          alt=""
          aria-hidden="true"
          draggable={false}
          className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-500 ${
            isReady ? 'opacity-0' : 'opacity-100'
          }`}
        />
      ) : null}

      {shouldLoad && (
        <Suspense
          fallback={
            <div className="absolute inset-0 flex h-full w-full items-center justify-center">
              <span style={{
                display: 'block', width: 32, height: 32, borderRadius: '50%',
                border: '2px solid rgba(255,61,0,0.15)', borderTopColor: '#FF3D00',
                animation: 'spin 0.7s linear infinite',
              }} />
              <style>{`@keyframes spin{to{transform:rotate(360deg)}}`}</style>
            </div>
          }
        >
          <Spline
            scene={scene}
            onLoad={() => setIsReady(true)}
            className={`h-full w-full transition-opacity duration-500 ${isReady ? 'opacity-100' : 'opacity-0'}`}
          />
        </Suspense>
      )}
    </div>
  )
}
