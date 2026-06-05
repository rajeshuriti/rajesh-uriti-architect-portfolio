'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const services = [
  { name: 'Auth Service', color: '#00E5FF', icon: '🔐' },
  { name: 'User Service', color: '#7C3AED', icon: '👤' },
  { name: 'Data Service', color: '#10B981', icon: '💾' },
  { name: 'API Gateway', color: '#F59E0B', icon: '🔀' },
  { name: 'Event Service', color: '#EC4899', icon: '⚡' },
  { name: 'Report Service', color: '#3B82F6', icon: '📊' },
]

export function Chapter5Monolith() {
  const containerRef = useRef<HTMLElement>(null)
  const [showServices, setShowServices] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setShowServices(v > 0.55)
  })

  // Phase 1: Title — visible on entry, fades out when monolith appears
  const titleOpacity = useTransform(scrollYProgress, [0.18, 0.26], [1, 0])

  // Phase 2: Monolith block — visible on entry, fades/shrinks when services appear
  const monolithOpacity = useTransform(scrollYProgress, [0, 0.50, 0.62], [1, 1, 0])
  const monolithScale = useTransform(scrollYProgress, [0.5, 0.62], [1, 0.4])

  // Crack 1 draws in
  const crack1 = useTransform(scrollYProgress, [0.32, 0.48], [0, 1])
  const crack2 = useTransform(scrollYProgress, [0.36, 0.52], [0, 1])
  const crack3 = useTransform(scrollYProgress, [0.40, 0.54], [0, 1])

  // Phase 3: Services
  const servicesOpacity = useTransform(scrollYProgress, [0.58, 0.72, 0.88, 0.96], [0, 1, 1, 0])

  // Phase 4: Closing stats
  const closingOpacity = useTransform(scrollYProgress, [0.88, 0.96, 1], [0, 1, 1])

  // Phase narration
  const narration1 = useTransform(scrollYProgress, [0.28, 0.38, 0.5, 0.58], [0, 1, 1, 0])
  const narration2 = useTransform(scrollYProgress, [0.7, 0.82, 0.92, 1], [0, 1, 1, 1])

  return (
    <article ref={containerRef} className="chapter-section" style={{ height: '450vh' }}>
      <div className="sticky-stage overflow-hidden">
        {/* Ambient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(0,229,255,0.04) 0%, transparent 70%)',
          }}
        />

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center px-4">
          {/* Chapter title */}
          <motion.div style={{ opacity: titleOpacity }} className="absolute top-16 sm:top-20 text-center w-full">
            <p className="cinematic-label mb-3">Chapter V</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              From Monolith to{' '}
              <span className="gradient-heading">Microservices</span>
            </h2>
          </motion.div>

          {/* Narration 1 */}
          <motion.div
            style={{ opacity: narration1 }}
            className="absolute bottom-20 sm:bottom-24 text-center"
          >
            <p className="text-xl sm:text-2xl text-white/50 font-display">
              Scale demands change.
            </p>
            <p className="text-xl sm:text-2xl text-white/50 font-display mt-1">
              Resilience demands <span className="text-white/80">evolution.</span>
            </p>
          </motion.div>

          {/* MONOLITH */}
          <motion.div
            style={{ opacity: monolithOpacity, scale: monolithScale }}
            className="relative"
          >
            <svg
              width="380"
              height="260"
              viewBox="0 0 380 260"
              className="sm:w-[480px] sm:h-[320px]"
            >
              {/* Main monolith box */}
              <rect
                x="10" y="10"
                width="360" height="240"
                rx="6"
                fill="#0F172A"
                stroke="rgba(0,229,255,0.3)"
                strokeWidth="1.5"
              />

              {/* Internal modules (suggesting tight coupling) */}
              {[
                [30, 30, 140, 50],
                [190, 30, 160, 50],
                [30, 100, 100, 50],
                [150, 100, 110, 50],
                [280, 100, 80, 50],
                [30, 170, 320, 50],
              ].map(([x, y, w, h], i) => (
                <rect
                  key={i}
                  x={x} y={y}
                  width={w} height={h}
                  rx="3"
                  fill="rgba(255,255,255,0.04)"
                  stroke="rgba(255,255,255,0.07)"
                  strokeWidth="1"
                />
              ))}

              {/* Internal connections */}
              {[
                [100, 80, 270, 100],
                [80, 80, 150, 100],
                [205, 80, 340, 100],
                [190, 150, 190, 170],
              ].map(([x1, y1, x2, y2], i) => (
                <line
                  key={i}
                  x1={x1} y1={y1} x2={x2} y2={y2}
                  stroke="rgba(255,255,255,0.06)"
                  strokeWidth="1"
                  strokeDasharray="4,4"
                />
              ))}

              {/* Label */}
              <text
                x="190" y="128"
                textAnchor="middle"
                fill="rgba(255,255,255,0.7)"
                fontSize="16"
                fontWeight="700"
                fontFamily="system-ui"
              >
                LEGACY MONOLITH
              </text>
              <text
                x="190" y="148"
                textAnchor="middle"
                fill="rgba(255,255,255,0.3)"
                fontSize="11"
                fontFamily="system-ui"
              >
                .NET Framework · Tightly Coupled · 800K LOC
              </text>

              {/* CRACKS */}
              <motion.path
                d="M 135 10 L 128 60 L 142 110 L 130 160 L 138 250"
                stroke="#FF4444"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                style={{ pathLength: crack1 }}
              />
              <motion.path
                d="M 240 10 L 252 55 L 238 105 L 248 165 L 242 250"
                stroke="#FF4444"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                style={{ pathLength: crack2 }}
              />
              <motion.path
                d="M 10 135 L 60 128 L 120 140 L 200 132 L 280 138 L 370 130"
                stroke="#FF6644"
                strokeWidth="1.5"
                fill="none"
                strokeLinecap="round"
                style={{ pathLength: crack3 }}
              />
            </svg>
          </motion.div>

          {/* SERVICES GRID */}
          <motion.div
            style={{ opacity: servicesOpacity }}
            className="absolute inset-0 flex items-center justify-center"
          >
            <div className="text-center w-full px-4 sm:px-8 max-w-2xl">
              <p className="cinematic-label mb-8">18 Independent Microservices</p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                {services.map((svc, i) => (
                  <motion.div
                    key={svc.name}
                    initial={{ opacity: 0, y: 20, scale: 0.8 }}
                    animate={showServices ? { opacity: 1, y: 0, scale: 1 } : {}}
                    transition={{ delay: i * 0.1, duration: 0.5, ease: 'backOut' }}
                    className="glass-card p-3 sm:p-4 rounded-xl text-center"
                    style={{ borderColor: `${svc.color}30` }}
                  >
                    <div className="text-2xl mb-2">{svc.icon}</div>
                    <p className="text-sm font-medium text-white">{svc.name}</p>
                    <p className="text-[10px] text-white/40 mt-1">REST · Docker · AWS ECS</p>
                    <div className="mt-2 h-0.5 w-full rounded-full" style={{ background: `${svc.color}40` }} />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Narration 2 */}
          <motion.div
            style={{ opacity: narration2 }}
            className="absolute bottom-20 sm:bottom-24 text-center"
          >
            <p className="text-2xl sm:text-3xl font-display font-bold gradient-heading">
              18 Microservices. Deployed. Scalable.
            </p>
            <p className="text-white/40 mt-2">Cloud-native. Independent. AWS ECS + Docker.</p>
          </motion.div>

          {/* Closing */}
          <motion.div
            style={{ opacity: closingOpacity }}
            className="absolute top-16 text-center w-full"
          >
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
              {['SOLID Principles', 'Domain-Driven Design', 'REST APIs', 'Docker', 'AWS ECS', 'CI/CD'].map((tag) => (
                <span
                  key={tag}
                  className="glass-card px-4 py-1.5 rounded-full text-sm text-[#00E5FF]/80"
                >
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
