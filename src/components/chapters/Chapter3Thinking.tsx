'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const nodes = [
  { id: 'user', label: 'Users', x: '50%', y: '10%', color: '#00E5FF', delay: 0 },
  { id: 'api', label: 'REST API', x: '20%', y: '35%', color: '#7C3AED', delay: 0.1 },
  { id: 'api2', label: 'API Gateway', x: '80%', y: '35%', color: '#7C3AED', delay: 0.15 },
  { id: 'svc1', label: 'Business Logic', x: '15%', y: '60%', color: '#10B981', delay: 0.2 },
  { id: 'svc2', label: 'Data Layer', x: '50%', y: '65%', color: '#10B981', delay: 0.25 },
  { id: 'svc3', label: 'Integrations', x: '82%', y: '60%', color: '#10B981', delay: 0.3 },
  { id: 'db', label: 'SQL Server', x: '50%', y: '88%', color: '#F59E0B', delay: 0.35 },
]

const connections = [
  ['50%', '10%', '20%', '35%'],
  ['50%', '10%', '80%', '35%'],
  ['20%', '35%', '15%', '60%'],
  ['20%', '35%', '50%', '65%'],
  ['80%', '35%', '82%', '60%'],
  ['80%', '35%', '50%', '65%'],
  ['15%', '60%', '50%', '88%'],
  ['50%', '65%', '50%', '88%'],
  ['82%', '60%', '50%', '88%'],
]

export function Chapter3Thinking() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const titleOpacity = useTransform(scrollYProgress, [0, 0.12, 0.3, 0.4], [0, 1, 1, 0])
  const diagramScale = useTransform(scrollYProgress, [0.2, 0.5], [0.6, 1])
  const diagramOpacity = useTransform(scrollYProgress, [0.15, 0.4, 0.75, 0.9], [0, 1, 1, 0])
  const quoteOpacity = useTransform(scrollYProgress, [0.6, 0.75, 0.9, 1], [0, 1, 1, 1])
  const quoteY = useTransform(scrollYProgress, [0.6, 0.75], [30, 0])

  return (
    <article ref={containerRef} className="chapter-section" style={{ height: '300vh' }}>
      <div className="sticky-stage">
        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          {/* Title */}
          <motion.div style={{ opacity: titleOpacity }} className="text-center mb-12">
            <p className="cinematic-label mb-4">Chapter III · 2017 — 2019</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              Thinking Beyond Code
            </h2>
          </motion.div>

          {/* System diagram */}
          <motion.div
            className="relative w-full max-w-2xl"
            style={{ height: '360px', opacity: diagramOpacity, scale: diagramScale }}
          >
            {/* SVG connections */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 600 360" preserveAspectRatio="xMidYMid meet">
              {connections.map(([x1, y1, x2, y2], i) => (
                <motion.line
                  key={i}
                  x1={parseFloat(x1) * 6}
                  y1={parseFloat(y1) * 3.6}
                  x2={parseFloat(x2) * 6}
                  y2={parseFloat(y2) * 3.6}
                  stroke="rgba(0,229,255,0.15)"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                />
              ))}
            </svg>

            {/* Nodes */}
            {nodes.map((node) => (
              <motion.div
                key={node.id}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: node.x, top: node.y }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: node.delay + 0.3, duration: 0.5, ease: 'backOut' }}
              >
                <div
                  className="px-3 py-1.5 rounded-lg text-xs font-medium text-white border"
                  style={{
                    borderColor: `${node.color}40`,
                    background: `${node.color}15`,
                    boxShadow: `0 0 12px ${node.color}20`,
                  }}
                >
                  {node.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Quote reveal */}
          <motion.div
            style={{ opacity: quoteOpacity, y: quoteY }}
            className="text-center max-w-2xl mt-12 px-4"
          >
            <p className="text-xl sm:text-2xl lg:text-3xl font-display text-white leading-relaxed">
              "The challenge was no longer{' '}
              <span className="gradient-heading font-bold">writing software.</span>
              <br />
              It was designing{' '}
              <span className="gradient-heading font-bold">systems capable of evolving.</span>"
            </p>
            <div className="mt-6 flex flex-wrap gap-2 justify-center">
              {['API Design', 'System Design', 'Architecture Reviews', 'Domain-Driven Design', 'SOLID'].map((tag) => (
                <span key={tag} className="text-xs px-3 py-1 rounded-full border border-[#00E5FF]/20 text-[#00E5FF]/70">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
