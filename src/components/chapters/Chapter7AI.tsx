'use client'

import { useRef, useEffect, useState } from 'react'
import { motion, useScroll, useTransform, useMotionValueEvent } from 'framer-motion'

const models = [
  {
    name: 'Anthropic Claude',
    role: 'Primary enterprise LLM',
    tags: ['Anthropic SDK', 'RAG', 'Production AI'],
    color: '#FF6B35',
    gradient: 'from-orange-600/20 to-rose-500/10',
  },
  {
    name: 'OpenAI GPT',
    role: 'Feature integration & automation',
    tags: ['GPT API', 'Code Gen', 'AI workflows'],
    color: '#10A37F',
    gradient: 'from-emerald-600/20 to-teal-500/10',
  },
  {
    name: 'Google Gemini',
    role: 'Multimodal evaluation',
    tags: ['Gemini API', 'Multimodal', 'Evaluation'],
    color: '#4285F4',
    gradient: 'from-blue-600/20 to-indigo-500/10',
  },
]

function NeuralCanvas({ active }: { active: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!active) return
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    const nodes: { x: number; y: number; r: number; phase: number }[] = []
    const cols = 6
    const rows = 4
    const w = canvas.width / (cols + 1)
    const h = canvas.height / (rows + 1)

    for (let row = 1; row <= rows; row++) {
      for (let col = 1; col <= cols; col++) {
        nodes.push({
          x: col * w + (Math.random() - 0.5) * 20,
          y: row * h + (Math.random() - 0.5) * 20,
          r: Math.random() * 3 + 2,
          phase: Math.random() * Math.PI * 2,
        })
      }
    }

    let t = 0
    let raf: number

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      t += 0.02

      // Draw connections
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x
          const dy = nodes[i].y - nodes[j].y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 120) {
            const alpha = (1 - d / 120) * 0.2
            const pulse = (Math.sin(t + nodes[i].phase) + 1) / 2
            ctx.beginPath()
            ctx.moveTo(nodes[i].x, nodes[i].y)
            ctx.lineTo(nodes[j].x, nodes[j].y)
            ctx.strokeStyle = `rgba(167,139,250,${alpha * (0.5 + pulse * 0.5)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      for (const n of nodes) {
        const pulse = (Math.sin(t * 1.5 + n.phase) + 1) / 2
        const r = n.r + pulse * 1.5

        ctx.beginPath()
        ctx.arc(n.x, n.y, r, 0, Math.PI * 2)
        const grd = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, r * 2)
        grd.addColorStop(0, `rgba(167,139,250,${0.8 + pulse * 0.2})`)
        grd.addColorStop(1, 'rgba(167,139,250,0)')
        ctx.fillStyle = grd
        ctx.fill()
      }

      raf = requestAnimationFrame(animate)
    }

    animate()
    return () => cancelAnimationFrame(raf)
  }, [active])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
    />
  )
}

export function Chapter7AI() {
  const containerRef = useRef<HTMLElement>(null)
  const [neuralActive, setNeuralActive] = useState(false)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    setNeuralActive(v > 0.15)
  })

  const bgOpacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const titleOpacity = useTransform(scrollYProgress, [0, 0.1, 0.3, 0.38], [0, 1, 1, 0])
  const titleY = useTransform(scrollYProgress, [0, 0.1], [30, 0])

  const quoteOpacity = useTransform(scrollYProgress, [0.2, 0.35, 0.5, 0.58], [0, 1, 1, 0])

  const cardsOpacity = useTransform(scrollYProgress, [0.52, 0.68, 0.88, 0.96], [0, 1, 1, 0])
  const cardsY = useTransform(scrollYProgress, [0.52, 0.68], [40, 0])

  return (
    <article ref={containerRef} className="relative" style={{ height: '400vh' }}>
      {/* Background shifts to deep violet */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ opacity: bgOpacity }}
      >
        <div
          className="absolute inset-0"
          style={{ background: '#06031a' }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)',
          }}
        />
      </motion.div>

      {/* Neural canvas */}
      <div className="absolute inset-0" style={{ opacity: 0.6 }}>
        <NeuralCanvas active={neuralActive} />
      </div>

      <div className="sticky-stage">
        <div className="relative z-10 container mx-auto px-4 sm:px-8 w-full text-center">
          {/* Title */}
          <motion.div style={{ opacity: titleOpacity, y: titleY }} className="mb-12">
            <p className="cinematic-label mb-4" style={{ color: 'rgba(167,139,250,0.8)' }}>
              Chapter VII · The Inflection Point
            </p>
            <h2 className="display-text text-5xl sm:text-6xl lg:text-7xl font-bold text-white">
              The{' '}
              <span className="gradient-heading-ai">AI</span>{' '}
              Inflection
            </h2>
          </motion.div>

          {/* Quote */}
          <motion.div style={{ opacity: quoteOpacity }} className="max-w-2xl mx-auto">
            <p className="text-2xl sm:text-3xl lg:text-4xl font-display text-white/80 leading-tight">
              "A new paradigm emerged."
            </p>
            <p className="text-xl sm:text-2xl text-white/50 mt-4 font-display">
              For the first time, software could{' '}
              <span
                className="font-bold"
                style={{ color: '#A78BFA' }}
              >
                reason.
              </span>
            </p>
          </motion.div>

          {/* AI Model Cards */}
          <motion.div
            style={{ opacity: cardsOpacity, y: cardsY }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-3xl mx-auto mt-4"
          >
            {models.map((model, i) => (
              <motion.div
                key={model.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15, duration: 0.6, ease: 'easeOut' }}
                className={`rounded-2xl p-5 sm:p-6 text-left bg-gradient-to-br ${model.gradient} border`}
                style={{ borderColor: `${model.color}25` }}
              >
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4 text-sm font-bold text-white"
                  style={{ background: `${model.color}25`, border: `1px solid ${model.color}40` }}
                >
                  AI
                </div>
                <h3 className="font-bold text-white text-base">{model.name}</h3>
                <p className="text-white/50 text-xs mt-1">{model.role}</p>
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {model.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] px-2 py-0.5 rounded-full"
                      style={{ background: `${model.color}15`, color: model.color }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </article>
  )
}
