import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { processSteps } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

/* ── SVG Architecture Blueprint ─────────────────────────────────── */
function BlueprintDiagram({ activeStep }: { activeStep: number }) {
  const steps = [
    // Step 0: Discovery — nodes appear
    { nodes: [{ x: 120, y: 80 }, { x: 60, y: 160 }, { x: 180, y: 160 }], lines: [[0, 1], [0, 2]] },
    // Step 1: Build — more nodes, more connections
    { nodes: [{ x: 120, y: 60 }, { x: 50, y: 130 }, { x: 190, y: 130 }, { x: 120, y: 190 }], lines: [[0, 1], [0, 2], [1, 3], [2, 3]] },
    // Step 2: Test — dashboard frame appears
    { nodes: [{ x: 40, y: 50 }, { x: 200, y: 50 }, { x: 40, y: 190 }, { x: 200, y: 190 }, { x: 120, y: 120 }], lines: [[0, 4], [1, 4], [2, 4], [3, 4]] },
    // Step 3: Deploy — full grid with checkmarks
    { nodes: [{ x: 40, y: 40 }, { x: 120, y: 40 }, { x: 200, y: 40 }, { x: 40, y: 120 }, { x: 120, y: 120 }, { x: 200, y: 120 }, { x: 40, y: 200 }, { x: 120, y: 200 }, { x: 200, y: 200 }], lines: [[0, 1], [1, 2], [3, 4], [4, 5], [6, 7], [7, 8], [0, 3], [1, 4], [2, 5], [3, 6], [4, 7], [5, 8]] },
  ]

  const current = steps[Math.min(activeStep, steps.length - 1)]

  return (
    <svg viewBox="0 0 240 240" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="rgba(139,233,253,0.4)" />
          <stop offset="100%" stopColor="rgba(189,147,249,0.3)" />
        </linearGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="2" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Grid lines (always visible, faint) */}
      {[60, 120, 180].map((pos) => (
        <g key={`grid-${pos}`}>
          <line x1={pos} y1={20} x2={pos} y2={220} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
          <line x1={20} y1={pos} x2={220} y2={pos} stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
        </g>
      ))}

      {/* Connection lines */}
      {current.lines.map(([from, to], i) => {
        const fromNode = current.nodes[from]
        const toNode = current.nodes[to]
        if (!fromNode || !toNode) return null
        return (
          <motion.line
            key={`line-${i}`}
            x1={fromNode.x}
            y1={fromNode.y}
            x2={toNode.x}
            y2={toNode.y}
            stroke="url(#lineGrad)"
            strokeWidth="1"
            strokeDasharray="4 3"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: i * 0.1, ease: 'easeOut' }}
          />
        )
      })}

      {/* Nodes */}
      {current.nodes.map((node, i) => (
        <motion.g key={`node-${i}`} initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.3, delay: i * 0.05, type: 'spring', damping: 12 }}>
          <circle cx={node.x} cy={node.y} r="6" fill="rgba(139,233,253,0.15)" stroke="rgba(139,233,253,0.5)" strokeWidth="1" filter="url(#glow)" />
          <circle cx={node.x} cy={node.y} r="2" fill="rgba(139,233,253,0.8)" />
        </motion.g>
      ))}

      {/* Checkmarks on step 3 */}
      {activeStep >= 3 && current.nodes.map((node, i) => (
        <motion.g key={`check-${i}`} initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ duration: 0.2, delay: i * 0.04, type: 'spring', damping: 8 }}>
          <text x={node.x + 10} y={node.y - 8} fontSize="8" fill="rgba(80,250,123,0.8)" fontFamily="JetBrains Mono, monospace">✓</text>
        </motion.g>
      ))}
    </svg>
  )
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  // Map scroll progress to active step (0-3)
  const rawStep = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 3])

  // We need to track the integer step for the blueprint
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    return rawStep.on('change', (v) => setActiveStep(Math.round(v)))
  }, [rawStep])

  return (
    <section id="process" className="section-shell" aria-label="Our process">
      <Reveal>
        <p className="section-kicker">Process</p>
        <h2 className="section-title max-w-2xl">
          How we work.
        </h2>
        <p className="section-subtitle">
          A structured process that protects your time and delivers production-ready systems.
        </p>
      </Reveal>

      <div ref={containerRef} className="relative mt-14 grid gap-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
        {/* Left — Text steps */}
        <div className="space-y-16">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <motion.div
                key={step.title}
                className="group relative grid grid-cols-[auto_1fr] gap-6 md:gap-10"
                initial={{ opacity: 0.3 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.4 }}
              >
                <div className="relative flex flex-col items-center">
                  <div className="relative z-10 flex h-[2.5rem] w-[2.5rem] items-center justify-center rounded-full border border-white/[0.08] bg-surface transition-colors duration-300 group-hover:border-cyan/30 group-hover:bg-cyan/[0.05]">
                    <Icon className="h-4 w-4 text-white/50 transition-colors group-hover:text-cyan" />
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="absolute top-[2.5rem] h-[calc(100%+2rem)] w-px bg-gradient-to-b from-white/[0.08] to-transparent" aria-hidden="true" />
                  )}
                </div>

                <div className="pt-1">
                  <h3 className="text-xl font-semibold tracking-tight text-white md:text-2xl">
                    <span className="mr-3 text-white/30">{String(index + 1).padStart(2, '0')}</span>
                    {step.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-base leading-7 text-white/55">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Right — Sticky SVG blueprint */}
        <div className="hidden lg:block">
          <div className="sticky top-32 h-[320px] w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeStep}
                className="h-full w-full rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6"
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.3 }}
              >
                <BlueprintDiagram activeStep={activeStep} />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

