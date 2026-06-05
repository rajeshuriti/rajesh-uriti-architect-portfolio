'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { chapters, type Chapter } from '@/data/chapters'

const EASE = [0.22, 1, 0.36, 1] as const

function TimelineNode({
  chapter,
  index,
  total,
}: {
  chapter: Chapter
  index: number
  total: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-40px 0px' })
  const isLast = index === total - 1

  function scrollToChapter() {
    document.getElementById(chapter.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.55, ease: EASE, delay: Math.min(index * 0.06, 0.36) }}
      className="relative flex gap-5 sm:gap-8 group"
    >
      {/* ── Left spine: dot + connector ── */}
      <div className="flex flex-col items-center shrink-0" style={{ width: '20px' }}>
        <div
          className="relative z-10 w-3 h-3 rounded-full mt-[6px] shrink-0 transition-transform duration-300 group-hover:scale-125"
          style={{
            background: chapter.accentColor,
            boxShadow: `0 0 0 3px ${chapter.accentColor}20`,
          }}
        />
        {!isLast && (
          <div
            className="flex-1 w-px mt-2"
            style={{
              background: `linear-gradient(to bottom, ${chapter.accentColor}30, ${chapter.accentColor}06)`,
              minHeight: '32px',
            }}
          />
        )}
      </div>

      {/* ── Right: content card ── */}
      <button
        onClick={scrollToChapter}
        className="flex-1 text-left pb-8 sm:pb-10 min-w-0"
        aria-label={`Scroll to Chapter ${chapter.number}: ${chapter.title}`}
      >
        <div
          className="rounded-xl p-4 sm:p-5 transition-all duration-300 group-hover:translate-x-1"
          style={{
            background: `${chapter.accentColor}05`,
            border: `1px solid ${chapter.accentColor}14`,
          }}
        >
          {/* Header row */}
          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mb-2">
            <span
              className="font-mono text-[10px] tracking-[0.18em] uppercase px-2 py-0.5 rounded"
              style={{
                background: `${chapter.accentColor}14`,
                color: chapter.accentColor,
              }}
            >
              Ch. {chapter.number}
            </span>
            <span className="font-mono text-xs text-[#3e4758]">{chapter.years}</span>
            <span className="font-mono text-xs text-[#2e3545] hidden sm:inline">·</span>
            <span className="font-mono text-xs text-[#3e4758] hidden sm:inline">{chapter.company}</span>
          </div>

          {/* Title */}
          <h3
            className="font-hanken font-bold text-[#d8e3fb] leading-tight mb-1 transition-colors duration-200 group-hover:text-white"
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
          >
            {chapter.title}
          </h3>

          {/* Company + role (mobile only) */}
          <p className="text-[#3e4758] text-xs font-mono mb-3 sm:hidden">
            {chapter.company} · {chapter.role}
          </p>

          {/* Role (desktop) */}
          <p className="text-[#636775] text-sm mb-3 hidden sm:block">{chapter.role}</p>

          {/* Skill tags */}
          <div className="flex flex-wrap gap-1.5">
            {chapter.skills.slice(0, 5).map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 rounded text-[10px] font-mono"
                style={{
                  background: `${chapter.accentColor}08`,
                  border: `1px solid ${chapter.accentColor}1c`,
                  color: `${chapter.accentColor}88`,
                }}
              >
                {skill}
              </span>
            ))}
            {chapter.skills.length > 5 && (
              <span className="text-[10px] font-mono text-[#2e3545] self-center">
                +{chapter.skills.length - 5}
              </span>
            )}
          </div>

          {/* Arrow hint */}
          <div
            className="mt-3 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
            style={{ color: chapter.accentColor }}
          >
            <span className="font-mono text-[10px] tracking-[0.12em] uppercase">View chapter</span>
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
            </svg>
          </div>
        </div>
      </button>
    </motion.div>
  )
}

export function StitchTimeline() {
  const ref = useRef<HTMLElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section
      ref={ref}
      id="journey"
      className="py-20 sm:py-28"
      style={{ background: '#040e1f', borderTop: '1px solid rgba(255,255,255,0.04)' }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-14 sm:mb-18"
        >
          <p className="font-mono text-xs tracking-[0.2em] uppercase text-[#636775] mb-4">
            The Journey
          </p>
          <h2
            className="font-hanken font-bold text-[#d8e3fb] leading-tight mb-3"
            style={{ fontSize: 'clamp(1.75rem, 3.5vw, 2.75rem)', letterSpacing: '-0.025em' }}
          >
            16+ years across the full stack
          </h2>
          <p className="text-[#636775] text-base max-w-lg leading-relaxed">
            From first lines of code to cloud architecture and enterprise AI — each chapter built directly on the last.
          </p>
        </motion.div>

        {/* Two-column layout on large screens */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-x-20 lg:items-start">

          {/* Timeline column */}
          <div className="relative">
            {chapters.map((chapter, i) => (
              <TimelineNode
                key={chapter.id}
                chapter={chapter}
                index={i}
                total={chapters.length}
              />
            ))}
          </div>

          {/* Stats / summary panel (desktop only) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, ease: EASE, delay: 0.2 }}
            className="hidden lg:block sticky top-28 self-start"
          >
            <div
              className="rounded-2xl p-6"
              style={{
                background: '#0b1828',
                border: '1px solid rgba(173,198,255,0.1)',
              }}
            >
              <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-[#adc6ff] mb-5">
                Career at a Glance
              </p>

              <div className="space-y-4 mb-6">
                {[
                  { label: 'Total Experience', value: '16+ years', accent: '#adc6ff' },
                  { label: 'Enterprise Applications', value: '12+ apps', accent: '#4edea3' },
                  { label: 'Engineers Led', value: '38+ developers', accent: '#d0bcff' },
                  { label: 'Companies', value: '4 organisations', accent: '#adc6ff' },
                  { label: 'Current Focus', value: 'GenAI & Cloud Architecture', accent: '#4edea3' },
                ].map(({ label, value, accent }) => (
                  <div key={label} className="flex items-start justify-between gap-4">
                    <span className="text-[#636775] text-sm">{label}</span>
                    <span
                      className="font-hanken font-semibold text-sm text-right"
                      style={{ color: accent }}
                    >
                      {value}
                    </span>
                  </div>
                ))}
              </div>

              <div style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }} className="pt-5">
                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-[#2e3545] mb-3">
                  Tech generations
                </p>
                <div className="flex flex-col gap-2">
                  {[
                    { era: '.NET / SQL era', years: '2009–2017', color: '#adc6ff' },
                    { era: 'Cloud / Microservices', years: '2017–2022', color: '#4edea3' },
                    { era: 'GenAI / LLMs', years: '2022–Present', color: '#d0bcff' },
                  ].map(({ era, years, color }) => (
                    <div key={era} className="flex items-center gap-2.5">
                      <div
                        className="w-1.5 h-1.5 rounded-full shrink-0"
                        style={{ background: color }}
                      />
                      <span className="text-[#636775] text-xs flex-1">{era}</span>
                      <span className="font-mono text-[10px] text-[#3e4758]">{years}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <p className="text-center font-mono text-[10px] text-[#2e3545] mt-4 tracking-[0.12em] uppercase">
              Click any chapter to read the full story
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
