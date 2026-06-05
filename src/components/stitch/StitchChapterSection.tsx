'use client'

import { useRef, useState, useEffect } from 'react'
import {
  motion, useInView, useScroll, useTransform,
  useMotionValue, useSpring, AnimatePresence,
  type MotionValue,
} from 'framer-motion'
import type { Chapter } from '@/data/chapters'

interface Props {
  chapter: Chapter
  index: number
}

const EASE = [0.22, 1, 0.36, 1] as const

const skillsWrap = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.045, delayChildren: 0.08 } },
}
const skillChip = {
  hidden: { opacity: 0, scale: 0.72, y: 8 },
  visible: {
    opacity: 1, scale: 1, y: 0,
    transition: { type: 'spring', stiffness: 380, damping: 22 },
  },
}

function ChapterPlaceholder({ chapter }: { chapter: Chapter }) {
  return (
    <div
      className="relative w-full h-full rounded-2xl overflow-hidden flex items-center justify-center"
      style={{
        background: `radial-gradient(ellipse 80% 80% at 50% 50%, ${chapter.accentColor}12 0%, #0b1120 70%)`,
        border: `1px solid ${chapter.accentColor}20`,
        minHeight: '360px',
      }}
    >
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(${chapter.accentColor} 1px, transparent 1px),
            linear-gradient(90deg, ${chapter.accentColor} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px',
        }}
      />
      <span
        className="font-hanken font-bold select-none"
        style={{
          fontSize: 'clamp(7rem, 18vw, 14rem)',
          color: `${chapter.accentColor}18`,
          lineHeight: 1,
          letterSpacing: '-0.05em',
        }}
      >
        {chapter.number}
      </span>
    </div>
  )
}

function ChapterVideo({
  chapter,
  scrollYProgress,
}: {
  chapter: Chapter
  scrollYProgress: MotionValue<number>
}) {
  const videoRef = useRef<HTMLVideoElement>(null)

  // 5-second video: entering → 0–2s, centered → 2–4s, leaving → 4–5s
  const videoTime = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [0, 2, 4, 5])

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    video.load()

    const seek = (t: number) => {
      if (!video.duration || isNaN(video.duration)) return
      video.currentTime = Math.min(t, video.duration)
    }

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
    <div
      className="relative rounded-2xl overflow-hidden"
      style={{
        border: `1px solid ${chapter.accentColor}18`,
        boxShadow: `0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)`,
        aspectRatio: '4/3',
      }}
    >
      <video
        ref={videoRef}
        src={chapter.video}
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#040e1f]/60 via-transparent to-transparent" />
    </div>
  )
}

function PopupImagePanel({ chapter }: { chapter: Chapter }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const rawRotateX = useTransform(mouseY, [-0.5, 0.5], [10, -10])
  const rawRotateY = useTransform(mouseX, [-0.5, 0.5], [-10, 10])
  const rotateX = useSpring(rawRotateX, { stiffness: 280, damping: 28 })
  const rotateY = useSpring(rawRotateY, { stiffness: 280, damping: 28 })

  function onMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5)
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5)
  }

  function onMouseLeave() {
    mouseX.set(0)
    mouseY.set(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className="relative flex items-center justify-center min-h-[420px]"
      style={{ perspective: '900px' }}
    >
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-40 pointer-events-none blur-3xl opacity-25"
        style={{
          background: `radial-gradient(ellipse at center, ${chapter.accentColor} 0%, transparent 70%)`,
        }}
      />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative select-none w-full flex justify-center"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={chapter.image!}
          alt={`${chapter.title} — Chapter ${chapter.number}`}
          className="w-full max-w-[460px] relative"
          style={{
            filter: `drop-shadow(0px 28px 44px rgba(0,0,0,0.7)) drop-shadow(0px 0px 22px ${chapter.accentColor}38)`,
          }}
          draggable={false}
        />
        <motion.div
          className="absolute top-6 right-6 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap"
          style={{
            translateZ: 50,
            background: 'rgba(4,14,31,0.80)',
            border: `1px solid ${chapter.accentColor}45`,
            color: chapter.accentColor,
            backdropFilter: 'blur(12px)',
          }}
        >
          {chapter.years}
        </motion.div>
        <motion.div
          className="absolute bottom-10 left-6 px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap"
          style={{
            translateZ: 65,
            background: 'rgba(4,14,31,0.80)',
            border: '1px solid rgba(255,255,255,0.09)',
            color: '#8c909f',
            backdropFilter: 'blur(12px)',
          }}
        >
          {chapter.company}
        </motion.div>
      </motion.div>
    </div>
  )
}

export function StitchChapterSection({ chapter, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const [showContributions, setShowContributions] = useState(false)

  useEffect(() => {
    if (showContributions) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [showContributions])

  const imageRight = index % 2 === 0

  // Per-section scroll parallax — outer wrapper handles only y, entry handles opacity/x/scale
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const imageParallaxY = useTransform(scrollYProgress, [0, 1], [20, -20])
  const textParallaxY  = useTransform(scrollYProgress, [0, 1], [10, -10])

  // Direction: text slides in from its column side, image from opposite
  const textX  = imageRight ? -20 : 20
  const imageX = imageRight ?  20 : -20

  // Desktop grid placement — 3-col grid: [1fr 80px 1fr], spine always col-start-2
  const textCol  = imageRight ? 'lg:col-start-1' : 'lg:col-start-3'
  const imageCol = imageRight ? 'lg:col-start-3' : 'lg:col-start-1'

  // Parse 'YYYY – YYYY' or 'YYYY – Present' into start/end
  const [startYear, endYear] = chapter.years.split(' – ')

  // Reusable enter-animation props
  const textEnter = {
    initial: { opacity: 0, x: textX, y: 16 },
    animate: isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x: textX, y: 16 },
  }
  const imageEnter = {
    initial: { opacity: 0, x: imageX, y: 16, scale: 0.97 },
    animate: isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : { opacity: 0, x: imageX, y: 16, scale: 0.97 },
  }

  return (
    <section
      ref={ref}
      id={chapter.id}
      className="py-16 sm:py-20 lg:py-24"
      style={{ background: index % 3 === 1 ? '#0b1120' : '#040e1f' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-[1fr_80px_1fr] gap-6 lg:gap-x-6 lg:gap-y-2">

          {/*
            Each panel = outer motion.div (parallax y only) + inner motion.div (enter anim).
            Keeps scroll parallax and entry animation on separate MotionValues — no conflicts.
          */}

          {/* ── 1. Header ── */}
          <motion.div style={{ y: textParallaxY }} className={`${textCol} lg:row-start-1 lg:self-end`}>
            <motion.div
              {...textEnter}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className="flex flex-col lg:pb-4"
            >
              <span
                className="font-mono text-xs tracking-[0.2em] uppercase mb-4 block"
                style={{ color: chapter.accentColor }}
              >
                Chapter {chapter.number}
              </span>

              <h2
                className="font-hanken font-bold text-[#d8e3fb] leading-tight tracking-tight mb-2"
                style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.025em' }}
              >
                {chapter.title}
              </h2>

              <p className={`text-[#636775] text-base ${chapter.contribution ? 'mb-3' : 'mb-0'}`}>
                {chapter.role}
              </p>

              {chapter.contribution && (
                <button
                  onClick={() => setShowContributions(true)}
                  className="self-start inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono transition-all duration-200 hover:brightness-125 active:scale-95"
                  style={{
                    background: `${chapter.accentColor}12`,
                    border: `1px solid ${chapter.accentColor}35`,
                    color: chapter.accentColor,
                  }}
                >
                  Key Contributions
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
                  </svg>
                </button>
              )}
            </motion.div>
          </motion.div>

          {/* ── 2. Center spine (desktop only) ── */}
          <div className="hidden lg:flex lg:col-start-2 lg:row-start-1 lg:row-span-2 flex-col items-center">
            {/* Top connector line */}
            <div
              className="w-px flex-1"
              style={{
                minHeight: '40px',
                background: `linear-gradient(to bottom, transparent, ${chapter.accentColor}35)`,
              }}
            />

            {/* Start year — slides down from above */}
            <motion.span
              initial={{ opacity: 0, y: -14 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -14 }}
              transition={{ type: 'spring', stiffness: 300, damping: 26, delay: 0.12 }}
              className="font-mono text-center shrink-0 tabular-nums"
              style={{
                fontSize: '10px',
                color: `${chapter.accentColor}cc`,
                letterSpacing: '0.06em',
                marginBottom: '6px',
              }}
            >
              {startYear}
            </motion.span>

            {/* Dot — pops in */}
            <motion.div
              initial={{ opacity: 0, scale: 0.4 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.4 }}
              transition={{ type: 'spring', stiffness: 380, damping: 22, delay: 0.22 }}
              className="shrink-0 rounded-full"
              style={{
                width: 16,
                height: 16,
                background: chapter.accentColor,
                boxShadow: isInView
                  ? `0 0 0 5px ${chapter.accentColor}18, 0 0 22px ${chapter.accentColor}50`
                  : 'none',
                transition: 'box-shadow 0.6s ease',
              }}
            />

            {/* End year — slides up from below */}
            {endYear && (
              <motion.span
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                transition={{ type: 'spring', stiffness: 300, damping: 26, delay: 0.32 }}
                className="font-mono text-center shrink-0 tabular-nums"
                style={{
                  fontSize: '10px',
                  color: `${chapter.accentColor}70`,
                  letterSpacing: '0.06em',
                  marginTop: '6px',
                }}
              >
                {endYear}
              </motion.span>
            )}

            {/* Bottom connector line — draws down when in view */}
            <motion.div
              className="w-px flex-1"
              initial={{ scaleY: 0 }}
              animate={isInView ? { scaleY: 1 } : {}}
              transition={{ duration: 0.9, ease: EASE, delay: 0.3 }}
              style={{
                minHeight: '40px',
                background: `linear-gradient(to bottom, ${chapter.accentColor}35, transparent)`,
                transformOrigin: 'top',
              }}
            />
          </div>

          {/* ── 3. Image ── */}
          <motion.div style={{ y: imageParallaxY }} className={`${imageCol} lg:row-start-1 lg:row-span-2 lg:self-center`}>
            <motion.div
              {...imageEnter}
              transition={{ type: 'spring', stiffness: 260, damping: 24, delay: 0.08 }}
              className="relative"
            >
              {chapter.video ? (
                <ChapterVideo chapter={chapter} scrollYProgress={scrollYProgress} />
              ) : chapter.transparent && chapter.image ? (
                <PopupImagePanel chapter={chapter} />
              ) : chapter.image ? (
                <>
                  <div
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      border: `1px solid ${chapter.accentColor}18`,
                      boxShadow: `0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)`,
                      aspectRatio: '4/3',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={chapter.image}
                      alt={`${chapter.title} — Chapter ${chapter.number}`}
                      className="absolute inset-0 w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#040e1f]/60 via-transparent to-transparent" />
                  </div>
                  <div
                    className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
                    style={{
                      background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${chapter.accentColor}08 0%, transparent 70%)`,
                      transform: 'scale(1.15)',
                    }}
                  />
                </>
              ) : (
                <ChapterPlaceholder chapter={chapter} />
              )}
            </motion.div>
          </motion.div>

          {/* ── 4. Content ── */}
          <motion.div style={{ y: textParallaxY }} className={`${textCol} lg:row-start-2 lg:self-start`}>
            <motion.div
              {...textEnter}
              transition={{ type: 'spring', stiffness: 280, damping: 26, delay: 0.18 }}
              className="flex flex-col lg:pt-4"
            >
              <p className="text-[#8c909f] text-base leading-relaxed mb-6 max-w-prose">
                {chapter.description}
              </p>

              <div
                className="rounded-xl p-4 mb-6"
                style={{
                  background: `${chapter.accentColor}08`,
                  border: `1px solid ${chapter.accentColor}25`,
                }}
              >
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.18em] mb-1.5"
                  style={{ color: chapter.accentColor }}
                >
                  Key Lesson
                </p>
                <p className="text-[#c2c6d6] text-sm italic leading-snug">
                  &ldquo;{chapter.keyLesson}&rdquo;
                </p>
              </div>

              <motion.div
                className="flex flex-wrap gap-2"
                variants={skillsWrap}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
              >
                {chapter.skills.map((skill) => (
                  <motion.span
                    key={skill}
                    variants={skillChip}
                    whileHover={{
                      scale: 1.1,
                      transition: { type: 'spring', stiffness: 400, damping: 18 },
                    }}
                    className="px-3 py-1 rounded-full text-xs font-mono cursor-default"
                    style={{
                      background: `${chapter.accentColor}10`,
                      border: `1px solid ${chapter.accentColor}25`,
                      color: chapter.accentColor,
                    }}
                  >
                    {skill}
                  </motion.span>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>

      {/* Key Contributions modal */}
      <AnimatePresence>
        {showContributions && chapter.contribution && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            style={{ background: 'rgba(4,14,31,0.88)', backdropFilter: 'blur(8px)' }}
            onClick={() => setShowContributions(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.90, y: 28 }}
              animate={{ opacity: 1, scale: 1, y: 0, transition: { type: 'spring', stiffness: 380, damping: 30 } }}
              exit={{ opacity: 0, scale: 0.96, y: 10, transition: { duration: 0.18, ease: [0.4, 0, 1, 1] } }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-2xl p-6 max-w-lg w-full max-h-[82vh] overflow-y-auto"
              style={{
                background: '#0b1828',
                border: `1px solid ${chapter.accentColor}28`,
                boxShadow: `0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)`,
              }}
            >
              <div className="mb-4">
                <p
                  className="font-mono text-[10px] tracking-[0.2em] uppercase mb-2"
                  style={{ color: chapter.accentColor }}
                >
                  Chapter {chapter.number} · Key Contributions
                </p>
                <h3 className="font-hanken font-bold text-[#d8e3fb] text-lg leading-tight">
                  {chapter.company}
                </h3>
                <p className="text-[#636775] text-sm mt-0.5">{chapter.role}</p>
              </div>

              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5 text-xs font-mono text-[#424754]">
                <span>{chapter.contribution.dateRange}</span>
                <span>·</span>
                <span>{chapter.contribution.location}</span>
                <span>·</span>
                <span>{chapter.contribution.duration}</span>
              </div>

              {chapter.contribution.client && (
                <div
                  className="rounded-xl p-3 mb-5"
                  style={{
                    background: `${chapter.accentColor}08`,
                    border: `1px solid ${chapter.accentColor}20`,
                  }}
                >
                  <p className="text-[#c2c6d6] text-sm font-medium">{chapter.contribution.client}</p>
                  {chapter.contribution.clientDesc && (
                    <p className="text-[#636775] text-xs mt-0.5">{chapter.contribution.clientDesc}</p>
                  )}
                </div>
              )}

              <div className="mb-5">
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.18em] mb-3"
                  style={{ color: chapter.accentColor }}
                >
                  Contributions
                </p>
                <ul className="space-y-3">
                  {chapter.contribution.points.map((point, i) => (
                    <li key={i} className="flex gap-2.5 text-[#8c909f] text-sm leading-relaxed">
                      <span className="mt-1 shrink-0" style={{ color: chapter.accentColor }}>›</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p
                  className="font-mono text-[10px] uppercase tracking-[0.18em] mb-3"
                  style={{ color: chapter.accentColor }}
                >
                  Technologies
                </p>
                <div className="flex flex-wrap gap-2">
                  {chapter.contribution.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-full text-xs font-mono"
                      style={{
                        background: `${chapter.accentColor}10`,
                        border: `1px solid ${chapter.accentColor}28`,
                        color: chapter.accentColor,
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-center text-[#2e3545] text-xs font-mono mt-6">
                Click anywhere outside to close
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
