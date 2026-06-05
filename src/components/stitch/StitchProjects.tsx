'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import type { Project } from '@/data/projects'
import { projects } from '@/data/projects'

const EASE = [0.22, 1, 0.36, 1] as const

function GitHubIcon({ className = 'w-3.5 h-3.5' }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={`${className} fill-current shrink-0`}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}

function ProjectCard({
  project,
  index,
  sectionInView,
}: {
  project: Project
  index: number
  sectionInView: boolean
}) {
  const col   = index % 3
  const row   = Math.floor(index / 3)
  const delay = col * 0.06 + row * 0.09

  return (
    <motion.a
      href={project.githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 28 }}
      animate={sectionInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.65, ease: EASE, delay }}
      whileHover={{ y: -5, transition: { duration: 0.2, ease: 'easeOut' } }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.borderColor = `${project.accentColor}28`
        el.style.boxShadow = `0 20px 60px rgba(0,0,0,0.55), 0 0 0 1px ${project.accentColor}20`
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.borderColor = 'rgba(255,255,255,0.055)'
        el.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)'
      }}
      className="group relative flex flex-col rounded-2xl p-6 overflow-hidden cursor-pointer"
      style={{
        background: '#07101f',
        border: '1px solid rgba(255,255,255,0.055)',
        boxShadow: '0 2px 20px rgba(0,0,0,0.3)',
        transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
      }}
    >
      {/* Accent corner glow — visible only on hover */}
      <div
        className="absolute -top-12 -right-12 w-48 h-48 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background: `radial-gradient(circle, ${project.accentColor}22 0%, transparent 65%)`,
        }}
      />

      {/* Project number watermark */}
      <span
        className="absolute bottom-4 right-5 font-hanken font-bold leading-none pointer-events-none select-none"
        style={{ fontSize: '4.5rem', color: `${project.accentColor}08` }}
      >
        {String(index + 1).padStart(2, '0')}
      </span>

      {/* Category */}
      <p
        className="font-mono text-[10px] tracking-[0.18em] uppercase mb-3"
        style={{ color: `${project.accentColor}70` }}
      >
        {project.category}
      </p>

      {/* Name */}
      <h3
        className="font-hanken font-semibold text-[#b8c6e0] leading-snug mb-3 group-hover:text-[#d8e3fb] transition-colors duration-200"
        style={{ fontSize: '1.05rem' }}
      >
        {project.name}
      </h3>

      {/* Description */}
      <p className="text-[#3e4758] text-sm leading-relaxed mb-5 flex-1">
        {project.description}
      </p>

      {/* Tech pills */}
      <div className="flex flex-wrap gap-1.5 mb-5">
        {project.technologies.map((tech) => (
          <span
            key={tech}
            className="px-2 py-0.5 rounded text-[10px] font-mono"
            style={{
              background: `${project.accentColor}07`,
              border: `1px solid ${project.accentColor}16`,
              color: `${project.accentColor}88`,
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* GitHub row */}
      <div className="flex items-center gap-1.5 text-[11px] font-mono" style={{ color: `${project.accentColor}55` }}>
        <GitHubIcon className="w-3 h-3" />
        <span className="group-hover:text-[#adc6ff] transition-colors duration-200" style={{ color: 'inherit' }}>
          View on GitHub
        </span>
        {/* Arrow slides in on hover */}
        <svg
          className="w-3 h-3 ml-auto opacity-0 -translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          viewBox="0 0 24 24"
          style={{ color: project.accentColor }}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
        </svg>
      </div>
    </motion.a>
  )
}

export function StitchProjects() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-60px 0px' })

  return (
    <section
      ref={ref}
      id="projects"
      className="relative py-20 sm:py-24 lg:py-28 overflow-hidden"
      style={{ background: '#0b1120' }}
    >
      {/* Atmospheric background glows */}
      <div
        className="absolute top-16 left-0 w-[600px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at top left, rgba(173,198,255,0.035) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />
      <div
        className="absolute bottom-0 right-0 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at bottom right, rgba(78,222,163,0.025) 0%, transparent 65%)',
          filter: 'blur(40px)',
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8">

        {/* Section header — no label, title leads directly */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.65, ease: EASE }}
          className="mb-14"
        >
          <h2
            className="font-hanken font-bold text-[#d8e3fb] leading-[1.15] mb-4"
            style={{ fontSize: 'clamp(1.85rem, 3.8vw, 2.75rem)', letterSpacing: '-0.03em' }}
          >
            Explorations in AI,{' '}
            <span style={{ color: '#2e3a4e' }}>developer tooling,</span>
            <br />
            and full-stack engineering.
          </h2>
          <p className="text-[#353d50] text-base max-w-lg leading-relaxed">
            Built outside of work — experiments, learning projects, and tools I wished existed.
          </p>
        </motion.div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} sectionInView={isInView} />
          ))}
        </div>

        {/* More on GitHub */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, ease: EASE, delay: 0.7 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://github.com/rajeshuriti"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-5 py-2.5 rounded-lg text-sm font-mono transition-all duration-200"
            style={{
              background: 'rgba(255,255,255,0.03)',
              border: '1px solid rgba(255,255,255,0.07)',
              color: '#3a4155',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = '#adc6ff'
              e.currentTarget.style.borderColor = 'rgba(173,198,255,0.2)'
              e.currentTarget.style.background = 'rgba(173,198,255,0.05)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#3a4155'
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.07)'
              e.currentTarget.style.background = 'rgba(255,255,255,0.03)'
            }}
          >
            <GitHubIcon />
            More on GitHub
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15M19.5 4.5H8.25M19.5 4.5v11.25" />
            </svg>
          </a>
        </motion.div>

      </div>
    </section>
  )
}
