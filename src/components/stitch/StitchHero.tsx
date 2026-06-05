'use client'

import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion'
import { SkillsModal } from './SkillsModal'
import { CareerGlanceModal } from './CareerGlanceModal'

const EASE = [0.22, 1, 0.36, 1] as const

// Stagger container — orchestrates children sequentially
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
}

// Each text line fades up individually — spring for natural deceleration
const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 300, damping: 28 },
  },
}

function MagneticButton({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const sx = useSpring(x, { stiffness: 350, damping: 30 })
  const sy = useSpring(y, { stiffness: 350, damping: 30 })

  function onMouseMove(e: React.MouseEvent) {
    const rect = ref.current?.getBoundingClientRect()
    if (!rect) return
    x.set((e.clientX - (rect.left + rect.width / 2)) * 0.35)
    y.set((e.clientY - (rect.top + rect.height / 2)) * 0.35)
  }

  return (
    <motion.div
      ref={ref}
      style={{ x: sx, y: sy, display: 'inline-flex' }}
      onMouseMove={onMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0) }}
    >
      {children}
    </motion.div>
  )
}

export function StitchHero() {
  const ref = useRef<HTMLElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)
  const [showSkills, setShowSkills] = useState(false)
  const [showCareerGlance, setShowCareerGlance] = useState(false)

  // Parallax as hero scrolls out of view — image lags behind scroll (feels deeper)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [0, 70])
  const textParallaxY  = useTransform(scrollYProgress, [0, 1], [0, 35])

  // 5-second video split into 3 scroll segments:
  //   scroll 0–40%  → frames 1–2 (0s–2s)  — hero entering / visible
  //   scroll 40–80% → frames 3–4 (2s–4s)  — hero centered
  //   scroll 80–100%→ frame  5   (4s–5s)  — hero scrolling away
  const videoTime = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 2, 4, 5])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()

    const seek = (t: number) => {
      if (!video.duration || isNaN(video.duration)) return
      video.currentTime = Math.min(t, video.duration)
    }

    // play→pause primes the buffer so seeks work in all browsers
    const onCanPlay = () => {
      video.play()
        .then(() => { video.pause(); seek(videoTime.get()) })
        .catch(() => seek(videoTime.get()))
    }
    video.addEventListener('canplay', onCanPlay, { once: true })

    const unsubscribe = videoTime.on('change', seek)

    return () => {
      video.removeEventListener('canplay', onCanPlay)
      unsubscribe()
    }
  }, [videoTime])

  return (
    <section ref={ref} className="relative min-h-screen bg-[#040e1f] flex items-center pt-16">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 w-full py-16 sm:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text panel — staggered children */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            style={{ y: textParallaxY }}
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/Assets/Images/Profile.jpg"
                alt="Rajesh Uriti"
                className="w-12 h-12 rounded-full object-cover object-top shrink-0"
                style={{ border: '2px solid rgba(173,198,255,0.25)' }}
              />
              <div>
                <p className="font-hanken font-semibold text-[#d8e3fb] text-base leading-tight">Rajesh Uriti</p>
                <p className="font-mono text-xs text-[#adc6ff] tracking-[0.12em] mt-0.5">Solution Architect</p>
                <p className="font-mono text-xs text-[#adc6ff]/60 tracking-[0.12em] mt-0.5">Cloud, AI &amp; Digital Transformation</p>
              </div>
            </motion.div>

            <motion.p variants={fadeUp} className="font-mono text-xs tracking-[0.2em] uppercase text-[#636775] mb-6">
              The Journey
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-hanken font-bold leading-[1.08] tracking-[-0.04em] text-[#d8e3fb] mb-6"
              style={{ fontSize: 'clamp(2.5rem, 5.5vw, 4.5rem)' }}
            >
              A 16+ year<br />
              journey of<br />
              learning, building,<br />
              and evolving.
            </motion.h1>

            <motion.p variants={fadeUp} className="text-[#8c909f] text-lg leading-relaxed mb-3 max-w-lg">
              From Software Developer to Solution Architect and GenAI Architect.
            </motion.p>

            <motion.p variants={fadeUp} className="text-[#636775] text-base leading-relaxed mb-10 max-w-lg">
              The stack changed every few years. The curiosity, discipline, and drive to solve hard problems at scale — those never did.
            </motion.p>

            {/* Contact details */}
            <motion.div variants={fadeUp} className="mb-8 flex flex-col gap-2.5">
              {/* Row 1: Phone + Email */}
              <div className="flex flex-wrap items-center gap-x-5 gap-y-1.5">
                <a
                  href="tel:+16475489789"
                  className="font-mono text-base text-[#4a5060] hover:text-[#8c909f] transition-colors duration-200 flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +1-647-548-9789
                </a>
                <a
                  href="mailto:rajeshuriti@gmail.com"
                  className="font-mono text-base text-[#4a5060] hover:text-[#adc6ff] transition-colors duration-200 flex items-center gap-1.5"
                >
                  <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  rajeshuriti@gmail.com
                </a>
                <span className="font-mono text-sm text-[#adc6ff]/60 flex items-center gap-1">
                  🇨🇦 Canadian Permanent Resident
                </span>
              </div>
              {/* Row 2: Social links */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                <a href="https://linkedin.com/in/rajeshuriti" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#4a5060] hover:text-[#adc6ff] transition-colors duration-200 flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                  LinkedIn Profile
                </a>
                <span className="text-[#252b35] text-sm select-none">·</span>
                <a href="https://github.com/rajeshuriti" target="_blank" rel="noopener noreferrer" className="font-mono text-sm text-[#4a5060] hover:text-[#adc6ff] transition-colors duration-200 flex items-center gap-1.5">
                  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 shrink-0 fill-current">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
                  </svg>
                  GitHub
                </a>
              </div>
              {/* Row 3: Address */}
              <span className="font-mono text-sm text-[#3a404f] flex items-center gap-1.5">
                <svg className="w-3.5 h-3.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                Mississauga, Ontario, Canada
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3">
              <MagneticButton>
                <a
                  href="/Rajesh Uriti_Detailed_Resume.pdf"
                  download="Rajesh_Uriti_Resume.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ background: '#adc6ff', color: '#002e6a' }}
                >
                  Download Resume
                </a>
              </MagneticButton>
              <MagneticButton>
                <button
                  onClick={() => setShowSkills(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10 active:scale-95"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(173,198,255,0.25)',
                    color: '#adc6ff',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2v-4M9 21H5a2 2 0 01-2-2v-4m0 0h18" />
                  </svg>
                  View Skills
                </button>
              </MagneticButton>
              <MagneticButton>
                <button
                  onClick={() => setShowCareerGlance(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm transition-all duration-200 hover:bg-white/10 active:scale-95"
                  style={{
                    background: 'transparent',
                    border: '1px solid rgba(78,222,163,0.25)',
                    color: '#4edea3',
                  }}
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  Career at a Glance
                </button>
              </MagneticButton>
            </motion.div>

          </motion.div>

          {/* Image panel — slides in from right, parallax on scroll-out */}
          <motion.div
            initial={{ opacity: 0, x: 28, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.85, delay: 0.18, ease: EASE }}
            style={{ y: imageParallaxY }}
            className="relative"
          >
            <div
              className="relative rounded-2xl overflow-hidden aspect-[4/5] max-h-[580px]"
              style={{
                background: '#111c2d',
                border: '1px solid rgba(173,198,255,0.12)',
                boxShadow: '0 40px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.04)',
              }}
            >
              <video
                ref={videoRef}
                src="/Assets/Videos/Explore The Journey.mp4"
                muted
                playsInline
                preload="auto"
                className="absolute inset-0 w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040e1f]/80 via-transparent to-transparent" />
            </div>

            <div
              className="absolute -top-8 -right-8 w-48 h-48 rounded-full pointer-events-none"
              style={{
                background: 'radial-gradient(circle, rgba(173,198,255,0.06) 0%, transparent 70%)',
              }}
            />
          </motion.div>

        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5">
        <a href="#journey" aria-label="Scroll to journey">
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1"
          >
            <span className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#2e3545]">scroll</span>
            <svg
              className="w-4 h-4 text-[#2e3545]"
              fill="none"
              stroke="currentColor"
              strokeWidth={1.5}
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </motion.div>
        </a>
      </div>

      <SkillsModal open={showSkills} onClose={() => setShowSkills(false)} />
      <CareerGlanceModal open={showCareerGlance} onClose={() => setShowCareerGlance(false)} />
    </section>
  )
}
