import { useState, useCallback, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion'
import { Play, Pause } from 'lucide-react'

type ProjectVideoPreviewProps = {
  slug: string
  mockupClass: string
  heroLabel: string
}

/* ═══════════════════════════════════════════════════════════════════
   LUMINA — Editorial founder identity
   ═══════════════════════════════════════════════════════════════════ */
function LuminaMockup({ playing }: { playing: boolean }) {
  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#0a0a0f]">
      {/* Background grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(103,232,249,1) 1px, transparent 1px), linear-gradient(90deg, rgba(103,232,249,1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Ambient glow */}
      <motion.div
        className="absolute -top-20 left-1/2 h-60 w-60 -translate-x-1/2 rounded-full bg-cyan-300/[0.08] blur-[80px]"
        animate={{ opacity: playing ? 1 : 0.3, scale: playing ? 1.2 : 1 }}
        transition={{ duration: 1.5, ease: 'easeInOut' }}
      />

      {/* Scroll container */}
      <motion.div
        className="relative flex h-full flex-col items-center justify-center px-6 md:px-10"
        animate={{ y: playing ? -8 : 0 }}
        transition={{ duration: 3, ease: 'easeInOut', repeat: playing ? Infinity : 0 }}
      >
        {/* Category kicker */}
        <motion.p
          className="mb-4 text-[10px] uppercase tracking-[0.35em] text-cyan-300/60 md:text-xs"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: playing ? 1 : 0.5, y: playing ? 0 : 8 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Personal Brand Platform
        </motion.p>

        {/* Hero text */}
        <motion.h3
          className="text-center font-display text-xl font-semibold tracking-[-0.04em] leading-tight text-white md:text-3xl"
          initial={{ opacity: 0, y: 16, filter: 'blur(8px)' }}
          animate={{
            opacity: playing ? 1 : 0.4,
            y: playing ? 0 : 16,
            filter: playing ? 'blur(0px)' : 'blur(8px)',
          }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          We build digital identities
          <br />
          <span className="bg-gradient-to-r from-cyan-300 to-sky-400 bg-clip-text text-transparent">
            that feel premium.
          </span>
        </motion.h3>

        {/* Subtitle with cursor */}
        <motion.div
          className="mt-3 flex items-center gap-0.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: playing ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <span className="text-xs text-white/30 md:text-sm">
            Premium websites for founders who
          </span>
          <motion.span
            className="inline-block h-3 w-px bg-cyan-300"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
        </motion.div>

        {/* CTA button */}
        <motion.div
          className="mt-6 flex items-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: playing ? 1 : 0, y: playing ? 0 : 12 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="rounded-full bg-gradient-to-r from-cyan-400 to-sky-400 px-5 py-2 text-[10px] font-bold tracking-wide text-[#070c1c] shadow-[0_0_20px_rgba(103,232,249,0.3)] md:px-6 md:text-xs">
            Start a Project
          </div>
          <div className="rounded-full border border-white/10 px-5 py-2 text-[10px] font-medium tracking-wide text-white/50 md:text-xs">
            View Work
          </div>
        </motion.div>

        {/* Metric cards */}
        <motion.div
          className="mt-8 grid grid-cols-3 gap-3 md:gap-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: playing ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 1.6 }}
        >
          {[
            { value: '+41%', label: 'Inquiries' },
            { value: '2.4×', label: 'Engagement' },
            { value: '98', label: 'Performance' },
          ].map((m, i) => (
            <motion.div
              key={m.label}
              className="rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5 text-center backdrop-blur-sm md:px-5 md:py-3"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: playing ? 1 : 0, y: playing ? 0 : 12 }}
              transition={{ duration: 0.4, delay: 1.8 + i * 0.1 }}
            >
              <p className="font-display text-sm font-semibold tracking-[-0.03em] text-cyan-300/90 md:text-lg">
                {m.value}
              </p>
              <p className="mt-0.5 text-[9px] text-white/30 md:text-[10px]">{m.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   ATLAS — Private capital dashboard
   ═══════════════════════════════════════════════════════════════════ */
function AtlasMockup({ playing }: { playing: boolean }) {
  const chartPath = 'M0,80 C20,75 35,60 50,55 C65,50 80,30 100,25 C120,20 140,35 160,20 C180,5 200,15 220,10'

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#060a08]">
      {/* Ambient glow */}
      <motion.div
        className="absolute -bottom-10 right-10 h-48 w-48 rounded-full bg-emerald-400/[0.06] blur-[60px]"
        animate={{ opacity: playing ? 1 : 0.2 }}
        transition={{ duration: 1.5 }}
      />

      <div className="relative flex h-full flex-col justify-between p-5 md:p-8">
        {/* Top bar */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: playing ? 1 : 0.3, y: playing ? 0 : -8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-emerald-400/60" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
              Atlas Capital
            </span>
          </div>
          <div className="flex gap-1.5">
            {['Overview', 'Performance', 'Reports'].map((tab, i) => (
              <div
                key={tab}
                className={`rounded-md px-2 py-1 text-[8px] md:px-3 md:text-[10px] ${
                  i === 1
                    ? 'bg-emerald-400/10 text-emerald-300/80'
                    : 'text-white/20'
                }`}
              >
                {tab}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="mt-4 grid grid-cols-3 gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: playing ? 1 : 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {[
            { value: '+63%', label: 'Meeting bookings', color: 'text-emerald-300/90' },
            { value: '0.8s', label: 'Render speed', color: 'text-emerald-300/70' },
            { value: 'AA', label: 'Accessibility', color: 'text-emerald-300/70' },
          ].map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: playing ? 1 : 0, x: playing ? 0 : -12 }}
              transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
            >
              <p className={`font-display text-base font-semibold tracking-[-0.04em] md:text-xl ${s.color}`}>
                {s.value}
              </p>
              <p className="mt-0.5 text-[8px] text-white/25 md:text-[10px]">{s.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Chart area */}
        <motion.div
          className="relative mt-4 flex-1 overflow-hidden rounded-xl border border-white/[0.04] bg-white/[0.01]"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: playing ? 1 : 0.3, scale: playing ? 1 : 0.95 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          {/* Y-axis labels */}
          <div className="absolute left-2 top-2 flex flex-col gap-4 text-[7px] text-white/15 md:left-3 md:top-3 md:gap-6 md:text-[8px]">
            <span>$2M</span>
            <span>$1M</span>
            <span>$0</span>
          </div>

          {/* SVG chart */}
          <svg
            viewBox="0 0 240 100"
            className="absolute inset-0 h-full w-full"
            preserveAspectRatio="none"
          >
            {/* Grid lines */}
            {[25, 50, 75].map((y) => (
              <line
                key={y}
                x1="0" y1={y} x2="240" y2={y}
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="0.5"
              />
            ))}
            {/* Area fill */}
            <motion.path
              d={chartPath + " L240,100 L0,100 Z"}
              fill="url(#atlasGradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: playing ? 0.3 : 0 }}
              transition={{ duration: 1, delay: 0.8 }}
            />
            {/* Line */}
            <motion.path
              d={chartPath}
              fill="none"
              stroke="rgba(52,211,153,0.6)"
              strokeWidth="1.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: playing ? 1 : 0 }}
              transition={{ duration: 2, delay: 0.6, ease: 'easeInOut' }}
            />
            {/* End dot */}
            <motion.circle
              cx="220" cy="10" r="3"
              fill="rgba(52,211,153,0.8)"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: playing ? 1 : 0, scale: playing ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 2.4 }}
            />
            <defs>
              <linearGradient id="atlasGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(52,211,153,0.15)" />
                <stop offset="100%" stopColor="rgba(52,211,153,0)" />
              </linearGradient>
            </defs>
          </svg>

          {/* X-axis labels */}
          <div className="absolute bottom-1.5 right-3 flex gap-4 text-[7px] text-white/15 md:bottom-2 md:gap-8 md:text-[9px]">
            <span>Jan</span><span>Apr</span><span>Jul</span><span>Oct</span>
          </div>
        </motion.div>

        {/* Bottom trust badges */}
        <motion.div
          className="mt-3 flex items-center gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: playing ? 1 : 0 }}
          transition={{ duration: 0.4, delay: 1.5 }}
        >
          {['Awwwards', 'FWA', 'Lighthouse 100'].map((badge) => (
            <span
              key={badge}
              className="rounded-md border border-white/[0.04] bg-white/[0.02] px-2 py-1 text-[7px] text-white/25 md:text-[9px]"
            >
              {badge}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   ORION — Creative suite gallery
   ═══════════════════════════════════════════════════════════════════ */
function OrionMockup({ playing }: { playing: boolean }) {
  const tiles = [
    { color: 'from-violet-400/30 to-fuchsia-400/20', size: 'col-span-2 row-span-2' },
    { color: 'from-violet-300/20 to-blue-400/15', size: 'col-span-1 row-span-1' },
    { color: 'from-fuchsia-300/25 to-violet-400/15', size: 'col-span-1 row-span-1' },
    { color: 'from-blue-300/20 to-violet-300/15', size: 'col-span-1 row-span-1' },
    { color: 'from-violet-400/20 to-indigo-400/15', size: 'col-span-1 row-span-1' },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden rounded-2xl bg-[#08060e]">
      {/* Floating gradient blobs */}
      <motion.div
        className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-violet-500/[0.08] blur-[50px]"
        animate={{
          x: playing ? [0, 20, 0] : 0,
          y: playing ? [0, -15, 0] : 0,
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute -bottom-10 right-10 h-36 w-36 rounded-full bg-fuchsia-500/[0.06] blur-[40px]"
        animate={{
          x: playing ? [0, -15, 0] : 0,
          y: playing ? [0, 10, 0] : 0,
        }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative flex h-full flex-col p-5 md:p-8">
        {/* Header */}
        <motion.div
          className="flex items-center justify-between"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: playing ? 1 : 0.3, y: playing ? 0 : -8 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-violet-400/60" />
            <span className="text-[10px] uppercase tracking-[0.25em] text-white/40 md:text-xs">
              Orion Creative
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[8px] text-white/20 md:text-[10px]">Immersive Portfolio</span>
          </div>
        </motion.div>

        {/* Gallery grid */}
        <div className="mt-4 flex-1 grid grid-cols-3 grid-rows-3 gap-2 md:gap-3">
          {tiles.map((tile, i) => (
            <motion.div
              key={i}
              className={`relative overflow-hidden rounded-lg bg-gradient-to-br ${tile.color} ${tile.size}`}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: playing ? 1 : 0.2,
                scale: playing ? 1 : 0.8,
              }}
              transition={{
                duration: 0.5,
                delay: 0.2 + i * 0.12,
                ease: [0.22, 1, 0.36, 1],
              }}
            >
              {/* Inner content lines */}
              <div className="absolute inset-2 flex flex-col justify-end gap-1.5 md:inset-3">
                <div
                  className="h-1.5 rounded-full bg-white/10"
                  style={{ width: `${50 + i * 10}%` }}
                />
                <div
                  className="h-1 rounded-full bg-white/[0.06]"
                  style={{ width: `${30 + i * 8}%` }}
                />
              </div>
              {/* Play icon on the large tile */}
              {i === 0 && (
                <motion.div
                  className="absolute inset-0 flex items-center justify-center"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: playing ? 1 : 0 }}
                  transition={{ duration: 0.4, delay: 1 }}
                >
                  <motion.div
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/30 backdrop-blur-sm md:h-14 md:w-14"
                    animate={{ scale: playing ? [1, 1.05, 1] : 1 }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="h-3.5 w-3.5 translate-x-0.5 text-white/70 md:h-5 md:w-5" />
                  </motion.div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom metrics */}
        <motion.div
          className="mt-4 flex items-center justify-between"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: playing ? 1 : 0, y: playing ? 0 : 8 }}
          transition={{ duration: 0.5, delay: 1.2 }}
        >
          <div className="flex gap-4">
            {[
              { value: '34%', label: 'More views' },
              { value: '28%', label: 'Lower bounce' },
              { value: '91+', label: 'Lighthouse' },
            ].map((m) => (
              <div key={m.label}>
                <p className="font-display text-xs font-semibold tracking-[-0.03em] text-violet-300/80 md:text-sm">
                  {m.value}
                </p>
                <p className="text-[7px] text-white/20 md:text-[9px]">{m.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-1.5">
            {['R3F', 'Lenis', 'GSAP'].map((t) => (
              <span
                key={t}
                className="rounded-md border border-white/[0.04] bg-white/[0.02] px-1.5 py-0.5 text-[7px] text-white/20 md:px-2 md:text-[9px]"
              >
                {t}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

/* ═══════════════════════════════════════════════════════════════════
   MAIN COMPONENT
   ═══════════════════════════════════════════════════════════════════ */
export function ProjectVideoPreview({ slug, mockupClass }: ProjectVideoPreviewProps) {
  const [hovering, setHovering] = useState(false)
  const [playing, setPlaying] = useState(false)
  const [touched, setTouched] = useState(false)
  const prefersReducedMotion = useReducedMotion()
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  const startPlaying = useCallback(() => {
    if (playing) return
    setHovering(true)
    if (prefersReducedMotion) {
      setPlaying(true)
      return
    }
    timeoutRef.current = setTimeout(() => setPlaying(true), 300)
  }, [prefersReducedMotion, playing])

  const stopPlaying = useCallback(() => {
    setHovering(false)
    setPlaying(false)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
  }, [])

  const handleMouseEnter = useCallback(() => {
    startPlaying()
  }, [startPlaying])

  const handleMouseLeave = useCallback(() => {
    if (!touched) stopPlaying()
  }, [touched, stopPlaying])

  // Touch support: tap to toggle play state
  const handleTouchStart = useCallback(() => {
    setTouched(true)
    if (playing) {
      stopPlaying()
    } else {
      startPlaying()
      // Auto-stop after 8 seconds on touch to avoid "stuck" playing state
      timeoutRef.current = setTimeout(() => {
        setPlaying(false)
        setHovering(false)
        setTouched(false)
      }, 8000)
    }
  }, [playing, startPlaying, stopPlaying])

  // Stop touch state when scrolling away
  useEffect(() => {
    if (!touched) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting && playing) {
          stopPlaying()
          setTouched(false)
        }
      },
      { threshold: 0.3 }
    )

    if (containerRef.current) {
      observer.observe(containerRef.current)
    }

    return () => observer.disconnect()
  }, [touched, playing, stopPlaying])

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const mockups: Record<string, React.ReactNode> = {
    'lumina-founder': <LuminaMockup playing={playing} />,
    'atlas-private-capital': <AtlasMockup playing={playing} />,
    'orion-creative-suite': <OrionMockup playing={playing} />,
  }

  // Determine if the play indicator should show (hover on desktop OR touch on mobile)
  const showIndicator = hovering || touched

  return (
    <div
      ref={containerRef}
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onTouchStart={handleTouchStart}
      role="button"
      aria-label={`${playing ? 'Pause' : 'Play'} project preview animation`}
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault()
          handleTouchStart()
        }
      }}
    >
      {/* Background gradient layer */}
      <div
        className={`absolute inset-0 rounded-2xl transition-all duration-700 ${mockupClass} ${
          playing ? 'scale-[1.01] opacity-100' : 'scale-100 opacity-60'
        }`}
      />

      {/* Animated mockup content */}
      <div className="relative h-64 overflow-hidden rounded-2xl md:h-[28rem]">
        {mockups[slug] || mockups['lumina-founder']}

        {/* Scan line overlay */}
        <motion.div
          className="pointer-events-none absolute inset-x-0 h-px bg-white/15"
          style={{
            boxShadow: '0 0 15px rgba(255,255,255,0.1), 0 0 40px rgba(103,232,249,0.08)',
            top: playing && !prefersReducedMotion ? '100%' : '0%',
            transition: playing ? 'top 3s linear' : 'top 0.3s ease',
          }}
        />

        {/* Play/Pause indicator */}
        <AnimatePresence>
          {showIndicator && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
                {playing ? (
                  <Pause className="h-4 w-4 text-white/80" />
                ) : (
                  <Play className="h-4 w-4 translate-x-0.5 text-white/80" />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Duration badge */}
        <AnimatePresence>
          {showIndicator && (
            <motion.div
              className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-lg bg-black/50 px-2 py-1 backdrop-blur-sm"
              initial={{ opacity: 0, y: 4 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 4 }}
              transition={{ duration: 0.2 }}
            >
              <div className="h-1 w-1 animate-pulse rounded-full bg-red-400" />
              <span className="text-[10px] font-medium text-white/70">0:03</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}
