'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
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
      {/* Grid lines */}
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
      {/* Large chapter number */}
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

export function StitchChapterSection({ chapter, index }: Props) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-80px 0px' })
  const imageRight = index % 2 === 0 // 01,03,05... → text left, image right

  const textMotion = {
    initial: { opacity: 0, x: imageRight ? -24 : 24 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageRight ? -24 : 24 },
  }
  const imageMotion = {
    initial: { opacity: 0, x: imageRight ? 24 : -24 },
    animate: isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: imageRight ? 24 : -24 },
  }
  const transition = { duration: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }

  const textPanel = (
    <motion.div
      {...textMotion}
      transition={transition}
      className="flex flex-col justify-center py-4"
    >
      {/* Chapter number */}
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

      {/* Company + role */}
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-1">
        <span className="text-[#c2c6d6] text-sm font-medium">{chapter.company}</span>
        <span className="text-[#424754] text-xs">·</span>
        <span className="text-[#636775] text-sm">{chapter.role}</span>
      </div>

      <p className="font-mono text-xs tracking-wide text-[#424754] mb-6 uppercase">
        {chapter.years}
      </p>

      <p className="text-[#8c909f] text-base leading-relaxed mb-6 max-w-prose">
        {chapter.description}
      </p>

      {/* Key Lesson */}
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

      {/* Skills */}
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
  )

  const imagePanel = (
    <motion.div
      {...imageMotion}
      transition={{ ...transition, delay: 0.08 }}
      className="relative"
    >
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          border: `1px solid ${chapter.accentColor}18`,
          boxShadow: `0 24px 60px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.03)`,
          aspectRatio: '4/3',
        }}
      >
        {chapter.image ? (
          <>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={chapter.image}
              alt={`${chapter.title} — Chapter ${chapter.number}`}
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#040e1f]/60 via-transparent to-transparent" />
          </>
        ) : (
          <ChapterPlaceholder chapter={chapter} />
        )}
      </div>

      {/* Glow */}
      <div
        className="absolute inset-0 rounded-2xl pointer-events-none -z-10"
        style={{
          background: `radial-gradient(ellipse 70% 70% at 50% 50%, ${chapter.accentColor}08 0%, transparent 70%)`,
          transform: 'scale(1.15)',
        }}
      />
    </motion.div>
  )

  return (
    <section
      ref={ref}
      id={index === 0 ? 'journey' : undefined}
      className="py-16 sm:py-20 lg:py-24"
      style={{
        background: index % 3 === 1 ? '#0b1120' : '#040e1f',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {imageRight ? (
            <>
              {textPanel}
              {imagePanel}
            </>
          ) : (
            <>
              {imagePanel}
              {textPanel}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
