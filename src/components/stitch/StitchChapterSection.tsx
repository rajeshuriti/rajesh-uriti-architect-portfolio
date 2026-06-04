'use client'

import { useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import type { Chapter } from '@/data/chapters'

interface Props {
  chapter: Chapter
  index: number
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
  const imageRight = index % 2 === 0

  const textMotion = {
    initial: { opacity: 0, x: imageRight ? -24 : 24 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageRight ? -24 : 24 },
  }
  const imageMotion = {
    initial: { opacity: 0, x: imageRight ? 24 : -24 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageRight ? 24 : -24 },
  }
  const transition = { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }

  // Desktop column placement — text column and image column swap based on imageRight
  const textCol = imageRight ? 'lg:col-start-1' : 'lg:col-start-2'
  const imageCol = imageRight ? 'lg:col-start-2' : 'lg:col-start-1'

  return (
    <section
      ref={ref}
      id={index === 0 ? 'journey' : undefined}
      className="py-16 sm:py-20 lg:py-24"
      style={{ background: index % 3 === 1 ? '#0b1120' : '#040e1f' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        {/*
          3-child grid:
          Mobile (1-col): natural DOM order = header → image → content
          Desktop (2-col): header + content share the text column (row 1 + row 2);
                           image spans both rows in the image column
        */}
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-x-16 lg:gap-y-2">

          {/* ── 1. Header: title / role / key-contributions button ── */}
          <motion.div
            {...textMotion}
            transition={transition}
            className={`flex flex-col ${textCol} lg:row-start-1 lg:self-end lg:pb-4`}
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

          {/* ── 2. Image: spans both text rows on desktop ── */}
          <motion.div
            {...imageMotion}
            transition={{ ...transition, delay: 0.08 }}
            className={`relative ${imageCol} lg:row-start-1 lg:row-span-2 lg:self-center`}
          >
            {chapter.transparent && chapter.image ? (
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

          {/* ── 3. Content: description / key lesson / skills ── */}
          <motion.div
            {...textMotion}
            transition={{ ...transition, delay: 0.04 }}
            className={`flex flex-col ${textCol} lg:row-start-2 lg:self-start lg:pt-4`}
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

            <div className="flex flex-wrap gap-2">
              {chapter.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 rounded-full text-xs font-mono transition-colors"
                  style={{
                    background: `${chapter.accentColor}10`,
                    border: `1px solid ${chapter.accentColor}25`,
                    color: chapter.accentColor,
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
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
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 16 }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              onClick={(e) => e.stopPropagation()}
              className="relative rounded-2xl p-6 max-w-lg w-full max-h-[82vh] overflow-y-auto"
              style={{
                background: '#0b1828',
                border: `1px solid ${chapter.accentColor}28`,
                boxShadow: `0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)`,
              }}
            >
              {/* Header */}
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

              {/* Meta row */}
              <div className="flex flex-wrap gap-x-3 gap-y-1 mb-5 text-xs font-mono text-[#424754]">
                <span>{chapter.contribution.dateRange}</span>
                <span>·</span>
                <span>{chapter.contribution.location}</span>
                <span>·</span>
                <span>{chapter.contribution.duration}</span>
              </div>

              {/* Client */}
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

              {/* Points */}
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

              {/* Technologies */}
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
