'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ParticleCanvas } from '@/components/ParticleCanvas'

export function Chapter10Future() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.35, 0.45], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.12], [30, 0])
  const quoteOpacity = useTransform(scrollYProgress, [0.3, 0.48, 0.65, 0.75], [0, 1, 1, 0])
  const ctaOpacity = useTransform(scrollYProgress, [0.68, 0.82, 1], [0, 1, 1])
  const ctaY = useTransform(scrollYProgress, [0.68, 0.82], [30, 0])

  // Horizon glow
  const horizonOpacity = useTransform(scrollYProgress, [0.1, 0.5], [0, 1])

  return (
    <article ref={containerRef} className="relative bg-[#030712]" style={{ height: '280vh' }}>
      {/* Particle canvas — sparse, violet */}
      <div className="absolute inset-0">
        <ParticleCanvas count={40} color="#7C3AED" connectionDistance={90} speed={0.2} />
      </div>

      {/* Horizon line glow */}
      <motion.div
        style={{ opacity: horizonOpacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div
          className="absolute"
          style={{
            left: '0',
            right: '0',
            top: '50%',
            height: '1px',
            background:
              'linear-gradient(90deg, transparent 0%, rgba(0,229,255,0.3) 20%, rgba(124,58,237,0.6) 50%, rgba(0,229,255,0.3) 80%, transparent 100%)',
            boxShadow: '0 0 40px rgba(124,58,237,0.3)',
          }}
        />
        <div
          className="absolute"
          style={{
            left: '0',
            right: '0',
            top: '50%',
            height: '120px',
            marginTop: '-60px',
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 100%)',
          }}
        />
      </motion.div>

      <div className="sticky-stage">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full text-center">
          {/* Chapter label */}
          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="mb-8">
            <p className="cinematic-label mb-4" style={{ color: 'rgba(167,139,250,0.7)' }}>
              Chapter X · The Future
            </p>
            <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              What Comes{' '}
              <span className="gradient-heading">Next</span>
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div style={{ opacity: quoteOpacity }} className="max-w-2xl mx-auto space-y-4">
            <p className="text-xl sm:text-2xl text-white/60 font-display leading-relaxed">
              "The next decade belongs to organizations that combine{' '}
              <span className="text-white font-semibold">human expertise</span> with{' '}
              <span className="gradient-heading font-semibold">artificial intelligence.</span>"
            </p>
            <p className="text-white/40 text-lg">That journey has only begun.</p>
          </motion.div>

          {/* CTA Section */}
          <motion.div style={{ opacity: ctaOpacity, y: ctaY }} className="mt-16">
            {/* Name */}
            <div className="mb-10">
              <h3 className="display-text text-4xl sm:text-5xl font-bold gradient-heading">
                Rajesh Uriti
              </h3>
              <p className="text-white/50 mt-2">Solution Architect · GenAI Architect · AI Transformation Leader</p>
              <p className="text-white/30 text-sm mt-1">🇨🇦 Mississauga, Ontario · Authorized to work in Canada</p>
            </div>

            {/* Action buttons */}
            <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://linkedin.com/in/rajeshuriti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(0,119,181,0.2)',
                  border: '1px solid rgba(0,119,181,0.4)',
                  color: '#5BBAD5',
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                LinkedIn
              </a>

              <a
                href="https://github.com/rajeshuriti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(255,255,255,0.06)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: 'rgba(255,255,255,0.8)',
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                </svg>
                GitHub
              </a>

              <a
                href="/Rajesh Uriti_Detailed_Resume.pdf"
                download="Rajesh_Uriti_Resume.pdf"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 neon-glow-cyan"
                style={{
                  background: 'rgba(0,229,255,0.12)',
                  border: '1px solid rgba(0,229,255,0.4)',
                  color: '#00E5FF',
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                  <path d="M12 15l-3-3m0 0l3-3m-3 3h12M3 12a9 9 0 1 1 18 0 9 9 0 0 1-18 0z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Download Resume
              </a>

              <a
                href="mailto:rajeshuriti@gmail.com"
                className="flex items-center gap-2.5 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105"
                style={{
                  background: 'rgba(16,185,129,0.1)',
                  border: '1px solid rgba(16,185,129,0.3)',
                  color: '#34D399',
                }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                  <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Contact Me
              </a>
            </div>

            {/* Footer note */}
            <p className="mt-12 text-white/20 text-sm">
              Built with Next.js 15 · React 19 · Framer Motion · Lenis
            </p>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
