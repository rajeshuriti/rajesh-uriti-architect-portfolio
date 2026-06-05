'use client'

import { useEffect, ReactNode } from 'react'
import Lenis from 'lenis'

// Module-level singleton so any component can call scrollToSection()
let _lenis: Lenis | null = null

/**
 * Programmatically scroll to a section by its DOM id.
 * Uses Lenis when available (preserves custom easing), falls back to native.
 */
export function scrollToSection(id: string, immediate = false) {
  const el = document.getElementById(id)
  if (!el) return

  if (_lenis) {
    _lenis.scrollTo(el, {
      offset: 0,
      immediate,
      duration: immediate ? 0 : 1.4,
    })
  } else {
    el.scrollIntoView({ behavior: immediate ? 'instant' : 'smooth' })
  }
}

export function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    })

    _lenis = lenis

    let raf: number
    const onFrame = (time: number) => {
      lenis.raf(time)
      raf = requestAnimationFrame(onFrame)
    }
    raf = requestAnimationFrame(onFrame)

    return () => {
      cancelAnimationFrame(raf)
      lenis.destroy()
      _lenis = null
    }
  }, [])

  return <>{children}</>
}
