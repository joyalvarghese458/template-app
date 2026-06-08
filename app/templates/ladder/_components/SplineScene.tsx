'use client'

import { Suspense, lazy } from 'react'

const Spline = lazy(() => import('@splinetool/react-spline'))

interface SplineSceneProps {
  scene: string
  className?: string
  loaderClassName?: string
}

export function SplineScene({ scene, className, loaderClassName }: SplineSceneProps) {
  return (
    <Suspense
      fallback={
        <div className={`w-full h-full flex items-center justify-center ${loaderClassName ?? ''}`}>
          <span
            style={{
              display: 'block',
              width: 36,
              height: 36,
              borderRadius: '50%',
              border: '2px solid rgba(255,61,0,0.15)',
              borderTopColor: '#FF3D00',
              animation: 'spin 0.7s linear infinite',
            }}
          />
          <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        </div>
      }
    >
      <Spline scene={scene} className={className} />
    </Suspense>
  )
}
