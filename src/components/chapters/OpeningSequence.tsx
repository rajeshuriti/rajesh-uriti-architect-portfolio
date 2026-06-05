'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ParticleCanvas } from '@/components/ParticleCanvas'

const lines = [
  'Every system tells a story.',
  'Every transformation begins with a vision.',
  'Some architects build software.',
  'Others transform the future.',
]

export function OpeningSequence() {
  const [phase, setPhase] = useState(0)
  const [lineIndex, setLineIndex] = useState(0)

  useEffect(() => {
    const timings = [
      { delay: 800,  fn: () => setPhase(1) },      // Start showing lines
      { delay: 2800, fn: () => setLineIndex(1) },
      { delay: 4800, fn: () => setLineIndex(2) },
      { delay: 6500, fn: () => setLineIndex(3) },
      { delay: 8200, fn: () => setPhase(2) },       // Show name reveal
      { delay: 9600, fn: () => setPhase(3) },       // Show scroll cue
    ]

    const timeouts = timings.map(({ delay, fn }) => setTimeout(fn, delay))
    return () => timeouts.forEach(clearTimeout)
  }, [])

  return (
    <div className="relative h-screen-safe overflow-hidden bg-[#030712]">
      {/* Particle background */}
      <ParticleCanvas count={80} color="#00E5FF" connectionDistance={120} speed={0.3} />

      {/* Radial gradient vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #030712 100%)',
        }}
      />

      {/* Center stage */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6">
        {/* Phase 1: Sequential quote lines */}
        <AnimatePresence mode="wait">
          {phase === 1 && (
            <motion.div
              key={`line-${lineIndex}`}
              className="text-center max-w-2xl"
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -24 }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <p className="text-2xl sm:text-3xl lg:text-4xl text-white/80 font-display font-medium leading-tight">
                {lines[lineIndex]}
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Phase 2: Name reveal */}
        {phase >= 2 && (
          <motion.div
            className="text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Cinematic label */}
            <motion.p
              className="cinematic-label mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Solution Architect · AI Transformation Leader
            </motion.p>

            {/* Main name */}
            <motion.h1
              className="display-text text-5xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              <span className="gradient-heading">RAJESH</span>
              <br />
              <span className="text-white">URITI</span>
            </motion.h1>

            {/* Location + status */}
            <motion.div
              className="mt-8 flex flex-wrap items-center justify-center gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <span className="glass-card px-4 py-2 rounded-full text-sm text-white/70">
                🇨🇦 Mississauga, Ontario
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm text-white/70">
                16+ Years Enterprise
              </span>
              <span className="glass-card px-4 py-2 rounded-full text-sm text-emerald-400 border border-emerald-400/20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 inline-block mr-2 animate-pulse" />
                Open to Opportunities
              </span>
            </motion.div>
          </motion.div>
        )}
      </div>

      {/* Scroll indicator */}
      {phase >= 3 && (
        <motion.div
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span className="cinematic-label">Begin the story</span>
          <motion.div
            className="w-6 h-10 rounded-full border border-white/20 flex items-start justify-center pt-2"
            animate={{ borderColor: ['rgba(255,255,255,0.2)', 'rgba(0,229,255,0.5)', 'rgba(255,255,255,0.2)'] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-2 rounded-full bg-[#00E5FF]"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.div>
        </motion.div>
      )}

      {/* SVG line art in background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 pointer-events-none"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <motion.line
          x1="0" y1="400" x2="1200" y2="400"
          stroke="#00E5FF" strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: 'linear' }}
        />
        <motion.circle cx="300" cy="400" r="60" fill="none" stroke="#00E5FF" strokeWidth="0.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
        />
        <motion.circle cx="600" cy="400" r="80" fill="none" stroke="#7C3AED" strokeWidth="0.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}
        />
        <motion.circle cx="900" cy="400" r="60" fill="none" stroke="#00E5FF" strokeWidth="0.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 2, duration: 1 }}
        />
        <motion.line x1="300" y1="400" x2="600" y2="400" stroke="#00E5FF" strokeWidth="0.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2, duration: 0.8 }}
        />
        <motion.line x1="600" y1="400" x2="900" y2="400" stroke="#00E5FF" strokeWidth="0.5"
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.8, duration: 0.8 }}
        />
      </svg>
    </div>
  )
}
