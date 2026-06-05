'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

const roles = [
  {
    title: 'Solution Architect',
    desc: '12 enterprise applications. Architecture governance. Technology roadmaps.',
    icon: '🏗️',
    color: '#00E5FF',
    delay: 0,
  },
  {
    title: 'Cloud Architect',
    desc: 'AWS cloud-native. EC2, ECS, Lambda, S3. Infrastructure as Code.',
    icon: '☁️',
    color: '#FF9900',
    delay: 0.1,
  },
  {
    title: 'GenAI Architect',
    desc: 'Claude, GPT, Gemini. RAG pipelines. Prompt engineering. Production AI.',
    icon: '🧠',
    color: '#A78BFA',
    delay: 0.2,
  },
  {
    title: 'Technology Leader',
    desc: '38+ engineers. Cross-functional teams. Architecture reviews. Mentoring.',
    icon: '👥',
    color: '#10B981',
    delay: 0.3,
  },
  {
    title: 'AI Transformation Leader',
    desc: 'Enterprise AI adoption. Governance frameworks. Responsible AI strategy.',
    icon: '🚀',
    color: '#F472B6',
    delay: 0.4,
  },
]

const capabilities = [
  'Anthropic Claude SDK',
  'OpenAI GPT API',
  'RAG Pipelines',
  'Prompt Engineering',
  'Semantic Search',
  'Vector Embeddings',
  'AI Agents',
  'LLM Evaluation',
  'FastAPI · Python',
  'Enterprise AI Governance',
]

export function Chapter9EnterpriseAI() {
  const containerRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  const titleOpacity        = useTransform(scrollYProgress, [0.22, 0.30], [1, 0])
  const rolesOpacity        = useTransform(scrollYProgress, [0, 0.72, 0.88], [1, 1, 0])
  const capabilitiesOpacity = useTransform(scrollYProgress, [0.80, 0.92, 1], [0, 1, 1])

  return (
    <article ref={containerRef} className="relative bg-[#030712]" style={{ height: '320vh' }}>
      {/* Layered gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 100% 70% at 50% 50%, rgba(167,139,250,0.05) 0%, rgba(0,229,255,0.03) 50%, transparent 80%)',
        }}
      />

      <div className="sticky-stage">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full">
          {/* Title */}
          <motion.div style={{ opacity: titleOpacity }} className="text-center mb-12">
            <p className="cinematic-label mb-4" style={{ color: 'rgba(167,139,250,0.7)' }}>
              Chapter IX
            </p>
            <h2 className="display-text text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              The Enterprise{' '}
              <span className="gradient-heading-ai">AI Architect</span>
            </h2>
            <p className="text-white/40 mt-3 max-w-xl mx-auto">
              Technology alone does not create transformation. Transformation happens when architecture,
              strategy, and intelligence align.
            </p>
          </motion.div>

          {/* Role cards */}
          <motion.div style={{ opacity: rolesOpacity }}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {roles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: role.delay, duration: 0.5, ease: 'easeOut' }}
                  className={`glass-card rounded-2xl p-5 sm:p-6 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}`}
                  style={{ borderColor: `${role.color}20` }}
                >
                  <div className="flex items-start gap-3">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                      style={{ background: `${role.color}15` }}
                    >
                      {role.icon}
                    </div>
                    <div>
                      <h3 className="font-bold text-sm" style={{ color: role.color }}>
                        {role.title}
                      </h3>
                      <p className="text-white/55 text-xs mt-1.5 leading-relaxed">{role.desc}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* AI Capabilities */}
          <motion.div style={{ opacity: capabilitiesOpacity }} className="mt-12 text-center">
            <p className="cinematic-label mb-5">AI Engineering Stack</p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3 max-w-2xl mx-auto">
              {capabilities.map((cap) => (
                <span
                  key={cap}
                  className="text-xs sm:text-sm px-3 sm:px-4 py-1.5 rounded-full border border-violet-500/20 text-violet-300/80"
                  style={{ background: 'rgba(124,58,237,0.08)' }}
                >
                  {cap}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </article>
  )
}
