'use client'

import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { skillDomains } from '@/data/skills'

export function SkillsModal({ open, onClose }: { open: boolean; onClose: () => void }) {
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
            className="relative rounded-2xl w-full max-w-3xl max-h-[88vh] flex flex-col"
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
                    Skills & Expertise
                  </p>
                  <h3 className="font-hanken font-bold text-[#d8e3fb] text-xl leading-tight">
                    16+ years across the full technology stack
                  </h3>
                  <p className="text-[#3e4758] text-sm font-mono mt-1">8 domains · 80+ skills</p>
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
            <div className="overflow-y-auto px-6 py-5">
              <div className="grid sm:grid-cols-2 gap-3">
                {skillDomains.map((domain) => (
                  <div
                    key={domain.domain}
                    className="rounded-xl p-4"
                    style={{
                      background: `${domain.accent}05`,
                      border: `1px solid ${domain.accent}18`,
                    }}
                  >
                    <p
                      className="font-hanken font-semibold text-sm mb-0.5"
                      style={{ color: domain.accent }}
                    >
                      {domain.domain}
                    </p>
                    <p className="font-mono text-[10px] text-[#3e4758] mb-3 tracking-wide uppercase">
                      {domain.subtitle}
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {domain.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-2 py-0.5 rounded text-[10px] font-mono"
                          style={{
                            background: `${domain.accent}08`,
                            border: `1px solid ${domain.accent}20`,
                            color: `${domain.accent}88`,
                          }}
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-center text-[#2e3545] text-xs font-mono mt-5">
                Click anywhere outside to close
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
