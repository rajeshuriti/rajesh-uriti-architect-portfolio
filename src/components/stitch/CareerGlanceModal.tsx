'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const stats = [
  { label: 'Total Experience',       value: '16+ years',              accent: '#adc6ff' },
  { label: 'Enterprise Applications', value: '12+ apps',               accent: '#4edea3' },
  { label: 'Engineers Led',           value: '38+ developers',         accent: '#d0bcff' },
  { label: 'Organizations',           value: '4 companies',            accent: '#adc6ff' },
  { label: 'Current Focus',           value: 'GenAI & Cloud Architecture', accent: '#4edea3' },
]

const techEras = [
  { era: '.NET / SQL era',       years: '2009 – 2017',    color: '#adc6ff' },
  { era: 'Cloud / Microservices', years: '2017 – 2022',   color: '#4edea3' },
  { era: 'GenAI / LLMs',          years: '2022 – Present', color: '#d0bcff' },
]

const timeline = [
  { period: '2009',         company: 'Cyient Limited',                role: 'Software Developer' },
  { period: '2010 – 2012',  company: 'ATOS Syntel',                   role: 'Software Engineer' },
  { period: '2012 – 2017',  company: 'Tata Consultancy Services',     role: 'Application Developer' },
  { period: '2017 – 2022',  company: 'Cognizant Technology Solutions', role: 'Full-Stack Application Architect' },
  { period: '2022 – Present', company: 'Cognizant Technology Solutions', role: 'Solution Architect & GenAI Architect' },
]

export function CareerGlanceModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  useEffect(() => {
    if (open) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth
      document.body.style.overflow = 'hidden'
      document.body.style.paddingRight = `${scrollbarWidth}px`
    } else {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
    return () => {
      document.body.style.overflow = ''
      document.body.style.paddingRight = ''
    }
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
          style={{ background: 'rgba(4,14,31,0.88)', backdropFilter: 'blur(8px)' }}
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            onClick={(e) => e.stopPropagation()}
            className="relative rounded-2xl w-full max-w-2xl max-h-[88vh] flex flex-col"
            style={{
              background: '#0b1828',
              border: '1px solid rgba(173,198,255,0.1)',
              boxShadow: '0 40px 80px rgba(0,0,0,0.65), 0 0 0 1px rgba(255,255,255,0.04)',
            }}
          >
            {/* Fixed header */}
            <div
              className="px-6 pt-6 pb-4 shrink-0"
              style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.2em] uppercase mb-1.5 text-[#adc6ff]">
                    Career Summary
                  </p>
                  <h3 className="font-hanken font-bold text-[#d8e3fb] text-xl leading-tight">
                    Career at a Glance
                  </h3>
                  <p className="text-[#3e4758] text-sm font-mono mt-1">
                    16 years · 4 organisations · 3 technology eras
                  </p>
                </div>
                <button
                  onClick={onClose}
                  className="shrink-0 mt-1 p-1.5 rounded-lg text-[#3e4758] hover:text-[#8c909f] hover:bg-white/5 transition-all duration-200"
                  aria-label="Close"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Scrollable content */}
            <div className="overflow-y-auto px-6 py-5 space-y-6">

              {/* Key stats */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2e3545] mb-3">
                  Key Stats
                </p>
                <div className="space-y-2.5">
                  {stats.map(({ label, value, accent }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 rounded-lg px-4 py-2.5"
                      style={{ background: `${accent}05`, border: `1px solid ${accent}14` }}
                    >
                      <span className="text-[#636775] text-sm">{label}</span>
                      <span className="font-hanken font-semibold text-sm" style={{ color: accent }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech eras */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2e3545] mb-3">
                  Technology Generations
                </p>
                <div className="space-y-2">
                  {techEras.map(({ era, years, color }) => (
                    <div
                      key={era}
                      className="flex items-center gap-3 rounded-lg px-4 py-2.5"
                      style={{ background: `${color}06`, border: `1px solid ${color}16` }}
                    >
                      <div className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
                      <span className="text-[#8c909f] text-sm flex-1">{era}</span>
                      <span className="font-mono text-xs text-[#3e4758]">{years}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Career timeline */}
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#2e3545] mb-3">
                  Career Timeline
                </p>
                <div className="relative">
                  <div
                    className="absolute left-[7px] top-2 bottom-2 w-px"
                    style={{ background: 'linear-gradient(to bottom, #adc6ff30, #4edea320, #d0bcff15)' }}
                  />
                  <div className="space-y-4 pl-6">
                    {timeline.map(({ period, company, role }, i) => {
                      const colors = ['#adc6ff', '#adc6ff', '#4edea3', '#4edea3', '#d0bcff']
                      const color = colors[i] ?? '#adc6ff'
                      return (
                        <div key={period} className="relative">
                          <div
                            className="absolute -left-[22px] top-[5px] w-2 h-2 rounded-full"
                            style={{ background: color, boxShadow: `0 0 6px ${color}50` }}
                          />
                          <p className="font-mono text-[10px] text-[#3e4758] mb-0.5">{period}</p>
                          <p className="text-[#c2c6d6] text-sm font-medium leading-tight">{company}</p>
                          <p className="text-[#636775] text-xs mt-0.5">{role}</p>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <p className="text-center text-[#2e3545] text-xs font-mono">
                Click anywhere outside to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
