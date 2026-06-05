'use client'

import { useState, useCallback } from 'react'
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { scrollToSection } from '@/components/SmoothScroll'

const chapters = [
  { id: 'opening',       label: 'Intro',                   short: 'Intro' },
  { id: 'foundation',    label: 'I — The First Line',      short: '2009' },
  { id: 'enterprise',    label: 'II — Enterprise',         short: 'Enterprise' },
  { id: 'thinking',      label: 'III — Beyond Code',       short: 'Vision' },
  { id: 'architect',     label: 'IV — The Architect',      short: 'Architect' },
  { id: 'monolith',      label: 'V — Monolith → Services', short: 'Monolith' },
  { id: 'cloud',         label: 'VI — Cloud',              short: 'Cloud' },
  { id: 'ai',            label: 'VII — AI Inflection',     short: 'AI' },
  { id: 'ai-system',     label: 'VIII — AI Architecture',  short: 'AI System' },
  { id: 'enterprise-ai', label: 'IX — Enterprise AI',      short: 'Leader' },
  { id: 'future',        label: 'X — The Future',          short: 'Future' },
]

export function Navigation() {
  const [visible, setVisible]           = useState(false)
  const [activeChapter, setActiveChapter] = useState(0)
  const [menuOpen, setMenuOpen]         = useState(false)
  const { scrollY }                     = useScroll()

  /** Determine which chapter section is currently in the viewport. */
  const updateActive = useCallback((y: number) => {
    let active = 0
    for (let i = chapters.length - 1; i >= 0; i--) {
      const el = document.getElementById(chapters[i].id)
      if (!el) continue
      const sectionTop = el.getBoundingClientRect().top + y
      // Activate once the section's top has passed the upper-quarter of the viewport
      if (y + window.innerHeight * 0.25 >= sectionTop) {
        active = i
        break
      }
    }
    setActiveChapter(active)
  }, [])

  useMotionValueEvent(scrollY, 'change', (y) => {
    setVisible(y > 60)
    updateActive(y)
  })

  const handleChapterClick = (id: string) => {
    setMenuOpen(false)
    // Let the close animation run before scrolling
    setTimeout(() => scrollToSection(id), 320)
  }

  return (
    <>
      {/* ── Top bar ── */}
      <motion.nav
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 sm:px-6 py-3 pointer-events-none"
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: visible ? 1 : 0, y: visible ? 0 : -16 }}
        transition={{ duration: 0.3 }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollToSection('opening')}
          className="pointer-events-auto glass-card px-4 py-2 rounded-xl"
          aria-label="Scroll to top"
        >
          <span className="font-display font-bold text-sm gradient-heading">RU</span>
        </button>

        {/* Desktop: status chip */}
        <div className="pointer-events-auto hidden md:flex glass-card items-center gap-2 px-4 py-2 rounded-xl">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
          <span className="text-xs text-white/60 font-medium">Open to Work · Canada</span>
        </div>

        {/* Mobile: current chapter label + hamburger */}
        <div className="pointer-events-auto flex items-center gap-2 md:hidden">
          <span className="text-xs text-white/40 font-medium">
            {chapters[activeChapter]?.short}
          </span>
          <button
            onClick={() => setMenuOpen(true)}
            className="glass-card p-2.5 rounded-xl text-white/70 hover:text-white transition-colors"
            aria-label="Open chapter navigation"
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>
      </motion.nav>

      {/* ── Desktop: right-side chapter dots ── */}
      <motion.div
        className="fixed right-4 lg:right-5 top-1/2 -translate-y-1/2 z-50 flex-col gap-2.5 hidden md:flex"
        initial={{ opacity: 0, x: 16 }}
        animate={{ opacity: visible ? 1 : 0, x: visible ? 0 : 16 }}
        transition={{ duration: 0.3 }}
      >
        {chapters.map((ch, i) => (
          <button
            key={ch.id}
            onClick={() => scrollToSection(ch.id)}
            className="group flex items-center justify-end gap-2"
            aria-label={`Go to ${ch.label}`}
          >
            <span className="opacity-0 group-hover:opacity-100 text-[10px] text-white/50 transition-opacity duration-200 whitespace-nowrap">
              {ch.short}
            </span>
            <span
              className={`block rounded-full transition-all duration-300 ${
                i === activeChapter
                  ? 'w-2.5 h-2.5 bg-[#00E5FF]'
                  : 'w-1.5 h-1.5 bg-white/35 group-hover:bg-white/70'
              }`}
              style={
                i === activeChapter
                  ? { boxShadow: '0 0 7px rgba(0,229,255,0.9)' }
                  : undefined
              }
            />
          </button>
        ))}
      </motion.div>

      {/* ── Mobile: full-screen chapter menu overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[60] flex flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Backdrop — tap to close */}
            <div
              className="absolute inset-0 bg-[#030712]/96 backdrop-blur-xl"
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              className="relative z-10 flex flex-col h-full px-6 py-8"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-10">
                <span className="font-display font-bold text-lg gradient-heading">RU</span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="glass-card p-2.5 rounded-xl text-white/60 hover:text-white transition-colors"
                  aria-label="Close navigation"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Chapter list */}
              <nav className="flex-1 flex flex-col justify-center gap-1" aria-label="Chapters">
                {chapters.map((ch, i) => (
                  <motion.button
                    key={ch.id}
                    onClick={() => handleChapterClick(ch.id)}
                    className="flex items-center gap-4 px-4 py-3 rounded-xl text-left transition-all duration-200 hover:bg-white/5 group"
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04, duration: 0.25 }}
                    aria-label={`Navigate to ${ch.label}`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full flex-shrink-0 transition-all duration-300 ${
                        i === activeChapter ? 'bg-[#00E5FF] scale-125' : 'bg-white/25'
                      }`}
                      style={
                        i === activeChapter
                          ? { boxShadow: '0 0 6px rgba(0,229,255,0.8)' }
                          : undefined
                      }
                    />
                    <span
                      className={`text-sm font-medium transition-colors duration-200 ${
                        i === activeChapter
                          ? 'text-[#00E5FF]'
                          : 'text-white/55 group-hover:text-white'
                      }`}
                    >
                      {ch.label}
                    </span>
                  </motion.button>
                ))}
              </nav>

              {/* Footer */}
              <div className="flex items-center gap-2 mt-8 pt-6 border-t border-white/10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <span className="text-xs text-white/40">Open to Work · Mississauga, Canada</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
