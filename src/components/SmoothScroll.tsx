'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    let raf: number

    function onFrame(time: number) {
      lenis.raf(time)
      raf = requestAnimationFrame(onFrame)
    }

    raf = requestAnimationFrame(onFrame)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
    }
  }, [])

  return <>{children}</>
}
