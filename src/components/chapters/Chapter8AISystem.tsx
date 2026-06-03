'use client'

import { useRef, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const flowNodes = [
  {
    id: 'user',
    label: 'Enterprise User',
    icon: '👤',
    desc: 'Business request initiated',
    color: '#00E5FF',
    sub: 'Natural language query',
  },
  {
    id: 'agent',
    label: 'AI Agent',
    icon: '🤖',
    desc: 'Orchestrates the AI pipeline',
    color: '#A78BFA',
    sub: 'Workflow automation layer',
  },
  {
    id: 'prompt',
    label: 'Prompt Layer',
    icon: '✍️',
    desc: 'Engineered system instructions',
    color: '#60A5FA',
    sub: 'Chain-of-thought · Few-shot',
  },
  {
    id: 'llm',
    label: 'Claude / GPT / Gemini',
    icon: '🧠',
    desc: 'Large Language Model inference',
    color: '#F472B6',
    sub: 'LLM Evaluation & Selection',
  },
  {
    id: 'rag',
    label: 'RAG Layer',
    icon: '🔍',
    desc: 'Retrieval Augmented Generation',
    color: '#34D399',
    sub: 'Semantic search · Context injection',
  },
  {
    id: 'vector',
    label: 'Vector Search',
    icon: '📐',
    desc: 'Embedding-based similarity',
    color: '#FBBF24',
    sub: 'Semantic embeddings · Cosine similarity',
  },
  {
    id: 'kb',
    label: 'Knowledge Base',
    icon: '📚',
    desc: 'Enterprise document corpus',
    color: '#F97316',
    sub: 'Indexed · Chunked · Versioned',
  },
  {
    id: 'response',
    label: 'Business Response',
    icon: '✅',
    desc: 'Accurate, contextual answer',
    color: '#00E5FF',
    sub: 'Production-grade output',
  },
]

export function Chapter8AISystem() {
  const containerRef = useRef<HTMLElement>(null)
  const [activeNode, setActiveNode] = useState(-1)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const nodeIndex = Math.floor(v * (flowNodes.length + 2)) - 1
    setActiveNode(Math.min(Math.max(nodeIndex, -1), flowNodes.length - 1))
  })

  const titleOpacity = useTransform(scrollYProgress, [0.12, 0.20], [1, 0])

  return (
    <article ref={containerRef} className="relative bg-[#04030f]" style={{ height: '500vh' }}>
      {/* Neural glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 30%, rgba(167,139,250,0.06) 0%, transparent 70%)',
        }}
      />

      <div className="sticky-stage">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full">
          {/* Title */}
          <motion.div style={{ opacity: titleOpacity }} className="text-center mb-8">
            <p className="cinematic-label mb-3" style={{ color: 'rgba(167,139,250,0.8)' }}>
              Chapter VIII
            </p>
            <h2 className="display-text text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Inside an{' '}
              <span className="gradient-heading-ai">AI System</span>
            </h2>
            <p className="text-white/40 mt-2 text-sm">Scroll to trace the request through the architecture</p>
          </motion.div>

          {/* Flow diagram */}
          <div className="flex flex-col items-center gap-2 max-w-md mx-auto">
            {flowNodes.map((node, i) => {
              const isActive = i === activeNode
              const isPast = i < activeNode

              return (
                <div key={node.id} className="w-full flex flex-col items-center">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{
                      opacity: i <= activeNode + 1 ? 1 : 0.2,
                      x: 0,
                      scale: isActive ? 1.02 : 1,
                    }}
                    transition={{ duration: 0.4, ease: 'easeOut' }}
                    className="w-full rounded-xl p-3 sm:p-4 border transition-all duration-300"
                    style={{
                      borderColor: isActive
                        ? `${node.color}60`
                        : isPast
                        ? `${node.color}20`
                        : 'rgba(255,255,255,0.06)',
                      background: isActive
                        ? `${node.color}12`
                        : isPast
                        ? `${node.color}06`
                        : 'rgba(15,23,42,0.4)',
                      boxShadow: isActive ? `0 0 20px ${node.color}20` : 'none',
                    }}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="w-9 h-9 rounded-lg flex items-center justify-center text-lg flex-shrink-0"
                        style={{ background: `${node.color}20` }}
                      >
                        {node.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <p
                            className="font-bold text-sm"
                            style={{ color: isActive ? node.color : i <= activeNode ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.3)' }}
                          >
                            {node.label}
                          </p>
                          {isActive && (
                            <motion.span
                              className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                              style={{ background: node.color }}
                              animate={{ opacity: [1, 0.3, 1] }}
                              transition={{ duration: 0.8, repeat: Infinity }}
                            />
                          )}
                        </div>
                        <p className="text-xs text-white/35 mt-0.5">{node.sub}</p>
                      </div>
                    </div>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="text-xs mt-2 pl-12"
                        style={{ color: node.color }}
                      >
                        {node.desc}
                      </motion.p>
                    )}
                  </motion.div>

                  {/* Connector arrow */}
                  {i < flowNodes.length - 1 && (
                    <motion.div
                      className="w-px h-4 my-0.5"
                      style={{
                        background: i < activeNode
                          ? `linear-gradient(180deg, ${node.color}60, ${flowNodes[i+1].color}60)`
                          : 'rgba(255,255,255,0.1)',
                      }}
                      animate={{
                        opacity: i < activeNode ? 1 : 0.3,
                      }}
                    />
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}
