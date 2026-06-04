'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export function StitchFooter() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <footer
      ref={ref}
      id="contact"
      className="bg-[#040e1f] border-t border-white/5 py-20 sm:py-24"
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <p className="font-hanken font-light text-[#8c909f] leading-relaxed max-w-2xl mx-auto mb-4"
             style={{ fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)' }}>
            Different titles. Same mindset.
          </p>
          <p className="font-hanken font-bold text-[#d8e3fb] leading-tight mb-12 max-w-2xl mx-auto"
             style={{ fontSize: 'clamp(1.5rem, 3.5vw, 2.25rem)', letterSpacing: '-0.02em' }}>
            Keep learning. Keep solving problems.
          </p>

          {/* Avatar + identity */}
          <div className="flex flex-col items-center gap-3 mb-10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Pictures/Stitch/stitch_the_curious_developer/Profile.jpg"
              alt="Rajesh Uriti"
              className="w-14 h-14 rounded-full object-cover object-top"
              style={{ border: '2px solid rgba(173,198,255,0.25)' }}
            />
            <div>
              <p className="font-hanken font-semibold text-[#d8e3fb]">Rajesh Uriti</p>
              <p className="text-[#636775] text-sm mt-0.5">
                Solution Architect · GenAI Architect · AI Transformation Leader
              </p>
              <p className="font-mono text-[11px] text-[#adc6ff] mt-1 tracking-wide">
                🇨🇦 Mississauga, Ontario · Authorized to work in Canada
              </p>
            </div>
          </div>

          {/* Action links */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
            <a
              href="https://linkedin.com/in/rajeshuriti"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:brightness-110"
              style={{
                background: 'rgba(0,119,181,0.15)',
                border: '1px solid rgba(0,119,181,0.3)',
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10"
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'rgba(255,255,255,0.75)',
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
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-110"
              style={{
                background: '#adc6ff',
                color: '#002e6a',
              }}
            >
              Download Resume
            </a>

            <a
              href="mailto:rajeshuriti@gmail.com"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-white/10"
              style={{
                background: 'rgba(78,222,163,0.08)',
                border: '1px solid rgba(78,222,163,0.25)',
                color: '#4edea3',
              }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current" strokeWidth={2}>
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              rajeshuriti@gmail.com
            </a>
          </div>

          <p className="text-[#424754] text-xs font-mono">
            Built with Next.js 15 · React 19 · Framer Motion · Hanken Grotesk
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
