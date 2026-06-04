'use client'

import { useRef } from 'react'
import { motion, useInView, useMotionValue, useTransform, useSpring } from 'framer-motion'
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
      {/* Ambient ground glow */}
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

        {/* Floating year badge — pops forward */}
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

        {/* Floating company badge — pops forward more */}
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

  const textPanel = (
    <motion.div
      {...textMotion}
      transition={transition}
      className="flex flex-col justify-center py-4"
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

      <p className="text-[#636775] text-base mb-6">{chapter.role}</p>

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
  )

  const imagePanel = (
    <motion.div
      {...imageMotion}
      transition={{ ...transition, delay: 0.08 }}
      className="relative"
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
