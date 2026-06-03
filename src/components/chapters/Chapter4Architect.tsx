'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const stats = [
  { value: 16, suffix: '+', label: 'Years Experience', sub: 'Enterprise software delivery', color: '#00E5FF' },
  { value: 12, suffix: '', label: 'Enterprise Applications', sub: 'Architected & delivered', color: '#7C3AED' },
  { value: 38, suffix: '+', label: 'Engineers Led', sub: 'Cross-functional teams', color: '#10B981' },
  { value: 18, suffix: '', label: 'Microservices', sub: 'Monolith transformation', color: '#F59E0B' },
]

function Counter({ to, suffix, active }: { to: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    let start = 0
    const duration = 2000
    const step = 16
    const increment = to / (duration / step)
    const timer = setInterval(() => {
      start += increment
      if (start >= to) {
        setCount(to)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, step)
    return () => clearInterval(timer)
  }, [active, to])

  return (
    <span>
      {count}
      {suffix}
    </span>
  )
}

export function Chapter4Architect() {
  const containerRef = useRef<HTMLElement>(null)
  const [countersActive, setCountersActive] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.3, 0.38], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.12], [30, 0])
  const statsOpacity = useTransform(scrollYProgress, [0.25, 0.45, 0.75, 0.88], [0, 1, 1, 0])
  const badgeOpacity = useTransform(scrollYProgress, [0.65, 0.8, 0.95, 1], [0, 1, 1, 1])

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    if (v > 0.35) setCountersActive(true)
  })

  return (
    <article ref={containerRef} className="chapter-section bg-[#030712]" style={{ height: '300vh' }}>
      {/* Deep background radial */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 50%, rgba(124,58,237,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="sticky-stage">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full text-center">
          {/* Chapter label + title */}
          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="mb-16">
            <p className="cinematic-label mb-4">Chapter IV · 2019 — Present</p>
            <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="text-white">The</span>{' '}
              <span className="gradient-heading">Architect</span>
            </h2>
            <p className="text-white/40 mt-4 text-lg max-w-xl mx-auto">
              Architecture is not about technology.
              <br />
              It is about enabling business outcomes at scale.
            </p>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            style={{ opacity: statsOpacity }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
          >
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={countersActive ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.6, ease: 'easeOut' }}
                className="glass-card rounded-2xl p-6 sm:p-8"
              >
                <div
                  className="text-5xl sm:text-6xl font-display font-bold"
                  style={{ color: stat.color, textShadow: `0 0 30px ${stat.color}50` }}
                >
                  <Counter to={stat.value} suffix={stat.suffix} active={countersActive} />
                </div>
                <p className="text-white font-semibold mt-2 text-sm sm:text-base">{stat.label}</p>
                <p className="text-white/40 text-xs sm:text-sm mt-1">{stat.sub}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Cognizant badge */}
          <motion.div style={{ opacity: badgeOpacity }} className="mt-12 flex justify-center">
            <div className="glass-card inline-flex items-center gap-4 px-6 py-4 rounded-2xl">
              <div className="w-12 h-12 rounded-xl bg-[#00E5FF]/10 flex items-center justify-center flex-shrink-0">
                <span className="text-[#00E5FF] font-bold text-sm">COG</span>
              </div>
              <div className="text-left">
                <p className="text-white font-bold">Cognizant Technology Solutions</p>
                <p className="text-white/40 text-sm">Solution Architect · Technical Lead · 2019 – Present</p>
              </div>
              <div className="hidden sm:flex flex-col gap-1 text-right">
                <span className="text-xs text-emerald-400 border border-emerald-400/20 px-2 py-0.5 rounded-full">
                  NextEra Energy
                </span>
                <span className="text-xs text-[#00E5FF]/60">Mississauga, ON</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
