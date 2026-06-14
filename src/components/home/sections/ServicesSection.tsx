import { useRef, useState, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { services } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

/* ── Terminal log lines for the featured card ───────────────────── */
const terminalLines = [
  { text: '▶ ORCHESTRATOR: Spawning Agent [Analyst]... SUCCESS', delay: 0 },
  { text: '▶ AGENT_ANALYST: Processing schema downstream...', delay: 400 },
  { text: '▶ SYSTEM: Latency optimized to 42ms.', delay: 800 },
  { text: '▶ ORCHESTRATOR: All agents nominal. Pipeline active.', delay: 1200 },
]

function TerminalHoverCard({ title, description, icon: Icon }: { title: string; description: string; icon: React.ComponentType<{ className?: string }> }) {
  const [hovered, setHovered] = useState(false)
  const [visibleLines, setVisibleLines] = useState(0)

  const handleMouseEnter = () => {
    setHovered(true)
    setVisibleLines(0)

    terminalLines.forEach((line, i) => {
      setTimeout(() => setVisibleLines(i + 1), line.delay)
    })
  }

  const handleMouseLeave = () => {
    setHovered(false)
    setVisibleLines(0)
  }

  return (
    <div
      className="card-surface relative overflow-hidden cursor-default"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Terminal overlay */}
      <motion.div
        className="absolute inset-0 z-10 flex flex-col justify-end rounded-2xl bg-ink/95 p-4 font-mono text-[10px] leading-5"
        initial={false}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        style={{ pointerEvents: hovered ? 'auto' : 'none' }}
      >
        {terminalLines.slice(0, visibleLines).map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.15 }}
            className={i === 1 ? 'text-cyan/80' : i === 2 ? 'text-emerald-400/80' : 'text-white/60'}
          >
            {line.text}
          </motion.div>
        ))}
        {hovered && (
          <motion.span
            className="mt-1 inline-block h-3 w-1.5 bg-cyan"
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.6, repeat: Infinity }}
          />
        )}
      </motion.div>

      <Icon className="h-5 w-5 text-cyan/70 transition-colors group-hover:text-cyan" />
      <h3 className="mt-4 text-base font-semibold text-white">{title}</h3>
      <p className="mt-2 text-sm leading-6 text-white/50">{description}</p>
    </div>
  )
}

/* ── Bento grid with mouse-tracking spotlight ──────────────────── */
function BentoGrid({ children }: { children: React.ReactNode }) {
  const gridRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-200)
  const mouseY = useMotionValue(-200)
  const springX = useSpring(mouseX, { damping: 25, stiffness: 200 })
  const springY = useSpring(mouseY, { damping: 25, stiffness: 200 })

  const onMouseMove = useCallback((e: React.MouseEvent) => {
    if (!gridRef.current) return
    const rect = gridRef.current.getBoundingClientRect()
    mouseX.set(e.clientX - rect.left)
    mouseY.set(e.clientY - rect.top)
  }, [mouseX, mouseY])

  const onMouseLeave = useCallback(() => {
    mouseX.set(-200)
    mouseY.set(-200)
  }, [mouseX, mouseY])

  return (
    <div
      ref={gridRef}
      className="relative"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
    >
      {/* Spotlight glow following cursor */}
      <motion.div
        className="pointer-events-none absolute z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          x: springX,
          y: springY,
          background: 'radial-gradient(circle, rgba(139,233,253,0.06) 0%, transparent 70%)',
        }}
        aria-hidden="true"
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

export function ServicesSection() {
  const featured = services.find((s) => s.featured)
  const rest = services.filter((s) => !s.featured)

  return (
    <section id="services" className="section-shell" aria-label="Services">
      <Reveal>
        <p className="section-kicker">Services</p>
        <h2 className="section-title">What we build.</h2>
        <p className="section-subtitle">
          From AI systems to developer infrastructure — we engineer the full stack.
        </p>
      </Reveal>

      <div className="mt-14">
        <BentoGrid>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((service, i) => {
              const Icon = service.icon
              return (
                <Reveal key={service.title} delay={i * 0.06}>
                  <div className="card-surface group">
                    <Icon className="h-5 w-5 text-cyan/70 transition-colors group-hover:text-cyan" />
                    <h3 className="mt-4 text-base font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-white/50">
                      {service.description}
                    </p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </BentoGrid>
      </div>

      {/* Featured service banner with terminal hover */}
      {featured && (
        <Reveal>
          <div className="mt-6">
            <TerminalHoverCard
              title={featured.title}
              description={featured.description}
              icon={featured.icon}
            />
          </div>
        </Reveal>
      )}
    </section>
  )
}
