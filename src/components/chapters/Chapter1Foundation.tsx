'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const codeLines = [
  { n: 1, tokens: [{ t: 'using', c: 'violet' }, { t: ' System;', c: 'white' }] },
  { n: 2, tokens: [] },
  { n: 3, tokens: [{ t: 'namespace', c: 'violet' }, { t: ' Cyient.Enterprise {', c: 'white' }] },
  { n: 4, tokens: [{ t: '  class', c: 'violet' }, { t: ' ', c: 'white' }, { t: 'SolutionBuilder', c: 'yellow' }, { t: ' {', c: 'white' }] },
  { n: 5, tokens: [{ t: '    static', c: 'violet' }, { t: ' void', c: 'cyan' }, { t: ' ', c: 'white' }, { t: 'Main', c: 'sky' }, { t: '() {', c: 'white' }] },
  { n: 6, tokens: [{ t: '      // First line. First system.', c: 'gray' }] },
  { n: 7, tokens: [{ t: '      Console', c: 'yellow' }, { t: '.', c: 'white' }, { t: 'WriteLine', c: 'sky' }, { t: '(', c: 'white' }, { t: '"Hello, Enterprise"', c: 'green' }, { t: ');', c: 'white' }] },
  { n: 8, tokens: [{ t: '    }', c: 'white' }] },
  { n: 9, tokens: [{ t: '  }', c: 'white' }] },
  { n: 10, tokens: [{ t: '}', c: 'white' }] },
]

const colorMap: Record<string, string> = {
  violet: '#A78BFA',
  cyan: '#22D3EE',
  yellow: '#FDE68A',
  sky: '#7DD3FC',
  green: '#86EFAC',
  gray: '#64748B',
  white: '#E2E8F0',
}

export function Chapter1Foundation() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.4, 0.5], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.12], [40, 0])

  const editorOpacity = useTransform(scrollYProgress, [0.1, 0.25, 0.7, 0.85], [0, 1, 1, 0])
  const editorX = useTransform(scrollYProgress, [0.1, 0.25], [-60, 0])

  const infoOpacity = useTransform(scrollYProgress, [0.15, 0.3, 0.7, 0.85], [0, 1, 1, 0])
  const infoX = useTransform(scrollYProgress, [0.15, 0.3], [60, 0])

  return (
    <article ref={containerRef} className="chapter-section" style={{ height: '280vh' }}>
      <div className="sticky-stage">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,229,255,1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,229,255,1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full">
          {/* Chapter label */}
          <motion.div
            style={{ opacity: titleOpacity, y: titleY }}
            className="text-center mb-12 lg:mb-16"
          >
            <p className="cinematic-label mb-4">Chapter I</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              The First Line of Code
            </h2>
            <p className="text-white/40 mt-4 text-lg">2009 · Hyderabad, India</p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Code editor */}
            <motion.div style={{ opacity: editorOpacity, x: editorX }}>
              <div className="bg-[#0a0e1a] border border-[#00E5FF]/15 rounded-2xl overflow-hidden shadow-2xl">
                {/* Editor header */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-black/30">
                  <div className="w-3 h-3 rounded-full bg-red-400/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                  <span className="ml-3 text-white/30 text-xs mono-code">Program.cs — Cyient · 2009</span>
                </div>

                {/* Code content */}
                <div className="p-6 mono-code text-sm leading-relaxed">
                  {codeLines.map((line) => (
                    <div key={line.n} className="flex gap-6">
                      <span className="text-white/20 select-none w-4 text-right flex-shrink-0">
                        {line.n}
                      </span>
                      <span>
                        {line.tokens.map((tok, i) => (
                          <span key={i} style={{ color: colorMap[tok.c] }}>
                            {tok.t}
                          </span>
                        ))}
                      </span>
                    </div>
                  ))}
                  {/* Blinking cursor */}
                  <div className="flex gap-6 mt-0.5">
                    <span className="text-white/20 select-none w-4 text-right flex-shrink-0">11</span>
                    <span className="inline-block w-2 h-4 bg-[#00E5FF] animate-blink" />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Story content */}
            <motion.div style={{ opacity: infoOpacity, x: infoX }} className="space-y-8">
              <div>
                <span className="text-7xl sm:text-8xl font-display font-bold gradient-heading opacity-20 leading-none block">
                  2009
                </span>
                <p className="text-2xl sm:text-3xl font-display font-medium text-white leading-snug mt-2">
                  "Every architect starts as a builder."
                </p>
              </div>

              <div className="space-y-4">
                <p className="text-white/60 text-lg leading-relaxed">
                  A single line of code. The beginning of sixteen years of enterprise software delivery.
                  At Cyient, the first professional role: writing C# in Visual Studio, building systems
                  for real users with real consequences.
                </p>
                <p className="text-white/60 leading-relaxed">
                  Every transformation begins with understanding how things are built — brick by brick,
                  line by line.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {['Software Developer', 'C# · .NET', 'Visual Studio', 'Cyient'].map((tag) => (
                  <span
                    key={tag}
                    className="glass-card px-4 py-1.5 rounded-full text-sm text-white/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Company badge */}
              <div className="glass-card p-4 rounded-xl inline-flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#00E5FF]/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-[#00E5FF] font-bold text-sm">CY</span>
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Cyient</p>
                  <p className="text-white/40 text-xs">Engineering & Technology Services · 2009</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </article>
  )
}
