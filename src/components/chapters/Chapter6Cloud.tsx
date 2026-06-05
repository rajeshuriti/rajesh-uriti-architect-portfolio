'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const awsServices = [
  { name: 'EC2', desc: 'Compute', icon: '⚙️', color: '#FF9900' },
  { name: 'ECS', desc: 'Containers', icon: '🐳', color: '#FF9900' },
  { name: 'S3', desc: 'Object Storage', icon: '🪣', color: '#FF9900' },
  { name: 'Lambda', desc: 'Serverless', icon: '⚡', color: '#FF9900' },
  { name: 'IAM', desc: 'Security', icon: '🔐', color: '#DD344C' },
  { name: 'DMS', desc: 'Migration', icon: '🔄', color: '#7C3AED' },
  { name: 'FSx', desc: 'File Storage', icon: '📁', color: '#3B82F6' },
  { name: 'ECR', desc: 'Registry', icon: '📦', color: '#10B981' },
]

const pipeline = [
  { label: 'Code', detail: 'GitHub', color: '#24292E' },
  { label: 'Build', detail: 'Actions', color: '#2088FF' },
  { label: 'Test', detail: 'Automated', color: '#10B981' },
  { label: 'Docker', detail: 'Build Image', color: '#2496ED' },
  { label: 'ECR', detail: 'Push', color: '#FF9900' },
  { label: 'ECS', detail: 'Deploy', color: '#FF9900' },
  { label: '🚀', detail: 'Production', color: '#10B981' },
]

export function Chapter6Cloud() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const titleOpacity    = useTransform(scrollYProgress, [0.22, 0.33], [1, 0])
  const awsOpacity      = useTransform(scrollYProgress, [0, 0.60, 0.72], [1, 1, 0])
  const pipelineOpacity = useTransform(scrollYProgress, [0.65, 0.80, 0.92, 1], [0, 1, 1, 1])

  return (
    <article ref={containerRef} className="chapter-section bg-[#060810]" style={{ height: '350vh' }}>
      {/* Warm amber glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 70% 40%, rgba(255,153,0,0.05) 0%, transparent 60%)',
        }}
      />

      <div className="sticky-stage">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full">
          {/* Title */}
          <motion.div style={{ opacity: titleOpacity }} className="text-center mb-14">
            <p className="cinematic-label mb-4">Chapter VI</p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              The Cloud{' '}
              <span className="gradient-heading-warm">Transformation</span>
            </h2>
            <p className="text-white/40 mt-3 text-lg">
              Modern architecture requires agility. Cloud transformed how enterprises deliver value.
            </p>
          </motion.div>

          {/* AWS Services Grid */}
          <motion.div style={{ opacity: awsOpacity }}>
            <p className="cinematic-label text-center mb-6">AWS Cloud Architecture</p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
              {awsServices.map((svc, i) => (
                <motion.div
                  key={svc.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.4 }}
                  className="glass-card p-4 rounded-xl text-center group hover:border-amber-500/30 transition-colors"
                >
                  <div className="text-2xl mb-2">{svc.icon}</div>
                  <p className="font-bold text-sm" style={{ color: svc.color }}>
                    {svc.name}
                  </p>
                  <p className="text-white/40 text-xs mt-0.5">{svc.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CI/CD Pipeline */}
          <motion.div
            style={{ opacity: pipelineOpacity }}
            className="mt-12 sm:mt-16"
          >
            <p className="cinematic-label text-center mb-6">GitHub Actions CI/CD Pipeline</p>
            <div className="flex flex-wrap items-center justify-center gap-1 sm:gap-2">
              {pipeline.map((step, i) => (
                <div key={step.label} className="flex items-center gap-1 sm:gap-2">
                  <div className="text-center">
                    <div
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex flex-col items-center justify-center text-white border"
                      style={{
                        background: `${step.color}15`,
                        borderColor: `${step.color}30`,
                      }}
                    >
                      <span className="text-base sm:text-xl">
                        {step.label === '🚀' ? '🚀' : step.label.slice(0, 2)}
                      </span>
                      <span className="text-[9px] sm:text-[10px] text-white/50 mt-0.5">{step.detail}</span>
                    </div>
                  </div>
                  {i < pipeline.length - 1 && (
                    <svg width="20" height="12" viewBox="0 0 20 12" className="flex-shrink-0 hidden sm:block">
                      <motion.path
                        d="M 0 6 L 14 6 M 10 2 L 14 6 L 10 10"
                        stroke="rgba(255,153,0,0.4)"
                        strokeWidth="1.5"
                        fill="none"
                        strokeLinecap="round"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: i * 0.1 + 0.3 }}
                      />
                    </svg>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-10 text-center">
              <p className="text-xl sm:text-2xl font-display text-white/60">
                Infrastructure as Code.{' '}
                <span className="text-white font-bold">Zero-downtime deployments.</span>
                <br />
                Scalable. Reliable. <span className="gradient-heading-warm font-bold">Cloud-native.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
