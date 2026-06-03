'use client'

import { motion } from 'framer-motion'

export function StitchHero() {
  return (
    <section className="min-h-screen bg-[#040e1f] flex items-center pt-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 w-full py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text panel */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#adc6ff] mb-6">
              The Journey
            </p>

            <h1 className="font-hanken font-bold leading-[1.08] tracking-[-0.04em] text-[#d8e3fb] mb-6"
                style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}>
              A 16+ year<br />
              journey of<br />
              learning, building,<br />
              and evolving.
            </h1>

            <p className="text-[#8c909f] text-lg leading-relaxed mb-3 max-w-lg">
              From Software Developer to Solution Architect and GenAI Architect.
            </p>
            <p className="text-[#636775] text-base leading-relaxed mb-10 max-w-lg">
              Sixteen years of enterprise software, cloud transformation, and AI architecture —
              told as chapters in a story that is still being written.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{ background: '#adc6ff', color: '#002e6a' }}
              >
                Explore the Journey
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </a>
              <a
                href="/Rajesh Uriti_Detailed_Resume.pdf"
                download="Rajesh_Uriti_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10"
                style={{
                  background: 'transparent',
                  border: '1px solid rgba(173,198,255,0.25)',
                  color: '#adc6ff',
                }}
              >
                Download Resume
              </a>
            </div>

            {/* Quick stats */}
            <div className="flex gap-8 mt-12 pt-8 border-t border-white/5">
              {[
                { value: '16+', label: 'Years Experience' },
                { value: '12+', label: 'Enterprise Apps' },
                { value: '38+', label: 'Engineers Led' },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="font-hanken font-bold text-2xl text-[#d8e3fb]">{stat.value}</p>
                  <p className="text-xs text-[#636775] mt-0.5 font-mono tracking-wide">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Image panel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[580px]"
                 style={{
                   background: '#111c2d',
                   border: '1px solid rgba(173,198,255,0.12)',
                   boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
                 }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Pictures/Stitch/stitch_the_curious_developer/Explore The Journey.png"
                alt="Rajesh Uriti — The Curious Developer"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              {/* Subtle gradient overlay at bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e1f]/80 via-transparent to-transparent" />

              {/* Name card */}
              <div className="absolute bottom-6 left-6 right-6">
                <div
                  className="rounded-xl p-4"
                  style={{
                    background: 'rgba(21, 32, 49, 0.85)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }}
                >
                  <p className="font-hanken font-semibold text-[#d8e3fb] text-sm">Rajesh Uriti</p>
                  <p className="text-[#8c909f] text-xs mt-0.5">Solution Architect · GenAI Architect</p>
                  <p className="font-mono text-[#adc6ff] text-[10px] mt-1.5 tracking-wide uppercase">
                    🇨🇦 Mississauga, Ontario
                  </p>
                </div>
              </div>
            </div>

            {/* Floating accent blob */}
            <div
              className="absolute -top-8 -right-8 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(173,198,255,0.06) 0%, transparent 70%)',
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
