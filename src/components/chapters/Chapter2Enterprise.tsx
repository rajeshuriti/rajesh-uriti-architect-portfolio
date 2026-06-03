'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const timeline = [
  {
    year: '2010',
    company: 'ATOS Syntel',
    role: 'Software Engineer',
    domain: 'Healthcare Systems',
    detail: 'Built enterprise healthcare platforms serving thousands of clinical users. First encounter with mission-critical software — systems where quality is not optional.',
    color: '#00E5FF',
  },
  {
    year: '2013',
    company: 'Tata Consultancy Services',
    role: 'Senior Software Engineer',
    domain: 'Large-Scale Enterprise',
    detail: 'Scaled to enterprise-grade delivery. Complex data models, multi-team coordination, performance constraints. Enterprise delivery at its most demanding.',
    color: '#7C3AED',
  },
  {
    year: '2017',
    company: 'Senior Engineer',
    role: 'Technical Lead',
    domain: 'Systems Integration',
    detail: 'Connecting heterogeneous enterprise systems. ETL pipelines, SSIS workflows, SQL Server optimization. Data became the foundation of everything.',
    color: '#10B981',
  },
]

export function Chapter2Enterprise() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const titleOpacity = useTransform(scrollYProgress, [0.22, 0.35], [1, 0])
  const card0Opacity = useTransform(scrollYProgress, [0, 0.55, 0.68], [1, 1, 0])
  const card1Opacity = useTransform(scrollYProgress, [0.28, 0.42, 0.60, 0.72], [0, 1, 1, 0])
  const card2Opacity = useTransform(scrollYProgress, [0.48, 0.60, 0.78, 0.88], [0, 1, 1, 0])
  const card0Y = useTransform(scrollYProgress, [0, 0.08], [16, 0])
  const card1Y = useTransform(scrollYProgress, [0.28, 0.42], [24, 0])
  const card2Y = useTransform(scrollYProgress, [0.48, 0.60], [24, 0])

  const closingOpacity = useTransform(scrollYProgress, [0.80, 0.92, 1], [0, 1, 1])

  return (
    <article ref={containerRef} className="chapter-section bg-[#050a14]" style={{ height: '350vh' }}>
      <div className="sticky-stage">
        {/* Ambient gradient */}
        <div
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 30% 60%, rgba(0,229,255,0.06) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full">
          <motion.div style={{ opacity: titleOpacity }} className="mb-16">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
              {/* Text */}
              <div className="flex-1 text-center lg:text-left">
                <p className="cinematic-label mb-4">Chapter II · 2010 — 2017</p>
                <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
                  Understanding Enterprises
                </h2>
                <p className="text-white/40 mt-3 text-lg max-w-xl mx-auto lg:mx-0">
                  Building software teaches implementation. Building enterprise systems teaches responsibility.
                </p>
              </div>

              {/* Memory snapshot — enterprise era */}
              <div className="relative flex-shrink-0 w-56 sm:w-64 lg:w-72">
                <div className="relative h-44 sm:h-52 overflow-hidden rounded-xl">
                  {/* eslint-disable-next-line @next/next/no-img-element -- intentional: avoids next/image fill-mode left:0/"0px" SSR/CSR mismatch */}
                  <img
                    src="/Pictures/Second%20Menu.jpg"
                    alt="Rajesh Uriti at an enterprise workstation, 2010"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050a14] via-[#050a14]/20 to-transparent" />
                </div>
                <div className="absolute bottom-3 left-3">
                  <p className="cinematic-label">Enterprise Systems · 2010</p>
                </div>
                <div className="absolute inset-0 border border-[#7C3AED]/25 rounded-xl pointer-events-none" />
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical timeline line */}
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent hidden sm:block" />

            <div className="space-y-8">
              {[
                { motion: { opacity: card0Opacity, y: card0Y }, data: timeline[0] },
                { motion: { opacity: card1Opacity, y: card1Y }, data: timeline[1] },
                { motion: { opacity: card2Opacity, y: card2Y }, data: timeline[2] },
              ].map(({ motion: m, data }, i) => (
                <motion.div
                  key={data.year}
                  style={{ opacity: m.opacity, y: m.y }}
                  className={`relative flex ${i % 2 === 0 ? 'sm:justify-start' : 'sm:justify-end'}`}
                >
                  {/* Timeline dot */}
                  <div
                    className="absolute left-4 sm:left-1/2 top-6 -translate-x-1/2 w-3 h-3 rounded-full hidden sm:block"
                    style={{ backgroundColor: data.color, boxShadow: `0 0 10px ${data.color}80` }}
                  />

                  <div className="sm:w-5/12 glass-card p-6 rounded-2xl hover:border-opacity-40 transition-all duration-300">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <p className="cinematic-label" style={{ color: data.color }}>
                          {data.year}
                        </p>
                        <h3 className="text-white font-bold text-lg mt-1">{data.company}</h3>
                        <p className="text-white/50 text-sm">{data.role}</p>
                      </div>
                      <span
                        className="text-xs px-3 py-1 rounded-full border"
                        style={{
                          color: data.color,
                          borderColor: `${data.color}40`,
                          background: `${data.color}10`,
                        }}
                      >
                        {data.domain}
                      </span>
                    </div>
                    <p className="text-white/55 text-sm leading-relaxed">{data.detail}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Closing line */}
          <motion.p
            style={{ opacity: closingOpacity }}
            className="text-center text-xl sm:text-2xl text-white/50 font-display mt-12"
          >
            Seven years. Three organizations. Thousands of enterprise users.
            <br />
            <span className="gradient-heading font-bold">The foundation was set.</span>
          </motion.p>
        </div>
      </div>
    </article>
  )
}
