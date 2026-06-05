'use client'

import { useState, useEffect } from 'react'

export function StitchNav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handler, { passive: true })
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#040e1f]/85 backdrop-blur-xl border-b border-white/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 h-16 flex items-center justify-between">
        {/* Left spacer (desktop) */}
        <div className="hidden md:flex flex-1" />

        {/* Desktop nav — centred */}
        <nav className="hidden md:flex items-center gap-7">
          <a
            href="#journey"
            className="text-sm text-[#8c909f] hover:text-[#d8e3fb] transition-colors duration-200"
          >
            The Journey
          </a>
          <a
            href="#projects"
            className="text-sm text-[#8c909f] hover:text-[#d8e3fb] transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-sm text-[#8c909f] hover:text-[#d8e3fb] transition-colors duration-200"
          >
            Contact
          </a>
        </nav>

        {/* Right side — CTA + mobile toggle */}
        <div className="flex items-center justify-end md:flex-1">
          <a
            href="mailto:rajeshuriti@gmail.com"
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-200 hover:brightness-110 active:scale-95"
            style={{ background: '#adc6ff', color: '#002e6a' }}
          >
            Let&apos;s Connect
          </a>

          <button
            className="md:hidden p-2 text-[#8c909f] hover:text-[#d8e3fb] transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              {menuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#040e1f]/95 backdrop-blur-xl px-6 py-4 space-y-3">
          <a
            href="#journey"
            className="block text-sm text-[#c2c6d6] hover:text-[#adc6ff] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            The Journey
          </a>
          <a
            href="#projects"
            className="block text-sm text-[#c2c6d6] hover:text-[#adc6ff] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
          <a
            href="#contact"
            className="block text-sm text-[#c2c6d6] hover:text-[#adc6ff] py-2 transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
          <a
            href="mailto:rajeshuriti@gmail.com"
            className="block mt-2 text-center px-4 py-2.5 rounded-lg text-sm font-semibold"
            style={{ background: '#adc6ff', color: '#002e6a' }}
          >
            Let&apos;s Connect
          </a>
        </div>
      )}
    </header>
  )
}
