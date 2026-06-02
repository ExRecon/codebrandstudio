import { useState, useCallback } from 'react'
import { Play, Pause } from 'lucide-react'

type ProjectVideoPreviewProps = {
  slug: string
  mockupClass: string
  heroLabel: string
}

/**
 * Simulates a video preview on hover using an animated gradient mockup.
 * In production, replace the mockup area with an actual <video> element:
 *
 * <video
 *   src={`/videos/${slug}-preview.mp4`}
 *   muted
 *   loop
 *   playsInline
 *   poster={`/images/${slug}-poster.jpg`}
 * />
 */
export function ProjectVideoPreview({ slug, mockupClass }: ProjectVideoPreviewProps) {
  const [hovering, setHovering] = useState(false)
  const [playing, setPlaying] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setHovering(true)
    // In production: videoRef.current?.play().then(() => setPlaying(true))
    setTimeout(() => setPlaying(true), 300)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setHovering(false)
    setPlaying(false)
    // In production: videoRef.current?.pause()
  }, [])

  // Generate a unique animated gradient per project
  const gradients: Record<string, string> = {
    'lumina-founder':
      'from-[rgba(103,232,249,0.6)] via-[rgba(56,189,248,0.4)] to-[rgba(139,233,255,0.2)]',
    'atlas-private-capital':
      'from-[rgba(52,211,153,0.6)] via-[rgba(16,185,129,0.4)] to-[rgba(110,231,183,0.2)]',
    'orion-creative-suite':
      'from-[rgba(167,139,250,0.6)] via-[rgba(139,92,246,0.4)] to-[rgba(196,181,253,0.2)]',
  }

  const gradient = gradients[slug] || gradients['lumina-founder']

  return (
    <div
      className="relative cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Video element — hidden by default, shown on hover */}
      {/*
        PRODUCTION: Uncomment this and remove the mockup div below:
        <video
          ref={videoRef}
          className={`absolute inset-0 h-full w-full rounded-[1.5rem] object-cover transition-opacity duration-500 ${playing ? 'opacity-100' : 'opacity-0'}`}
          src={`/videos/${slug}-preview.mp4`}
          muted
          loop
          playsInline
          poster={`/images/${slug}-poster.jpg`}
        />
      */}

      {/* Animated mockup that simulates video content */}
      <div
        className={`relative h-40 overflow-hidden rounded-[1.5rem] transition-all duration-700 ${mockupClass} ${playing ? 'scale-[1.02]' : ''}`}
      >
        {/* Animated scan line to simulate video playback */}
        <div
          className="absolute inset-x-0 h-px bg-white/20 transition-all duration-[3000ms] ease-linear"
          style={{
            top: playing ? '100%' : '0%',
            boxShadow: '0 0 20px rgba(255,255,255,0.15), 0 0 60px rgba(103,232,249,0.1)',
          }}
        />

        {/* Animated gradient overlay */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${gradient} transition-opacity duration-700`}
          style={{ opacity: playing ? 1 : 0.5 }}
        />

        {/* Floating UI elements that animate on hover */}
        <div className="absolute inset-4 flex flex-col justify-between">
          <div className="flex items-center gap-2">
            <div className="h-2 w-2 rounded-full bg-white/30" />
            <div className="h-1.5 w-16 rounded-full bg-white/15" />
            <div className="h-1.5 w-10 rounded-full bg-white/10" />
          </div>
          <div className="space-y-2">
            <div
              className="h-2 w-3/4 rounded-full bg-white/20 transition-all duration-700"
              style={{ width: playing ? '75%' : '50%' }}
            />
            <div
              className="h-2 w-1/2 rounded-full bg-white/15 transition-all duration-700 delay-100"
              style={{ width: playing ? '50%' : '35%' }}
            />
            <div
              className="h-8 w-24 rounded-lg bg-white/10 transition-all duration-500"
              style={{
                opacity: playing ? 1 : 0.5,
                transform: playing ? 'translateY(0)' : 'translateY(4px)',
              }}
            />
          </div>
        </div>

        {/* Play/Pause indicator */}
        <div
          className="absolute inset-0 flex items-center justify-center transition-opacity duration-300"
          style={{ opacity: hovering ? 1 : 0 }}
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-black/40 backdrop-blur-sm">
            {playing ? (
              <Pause className="h-4 w-4 text-white/80" />
            ) : (
              <Play className="h-4 w-4 translate-x-0.5 text-white/80" />
            )}
          </div>
        </div>
      </div>

      {/* Duration badge */}
      <div
        className="absolute right-3 bottom-3 flex items-center gap-1.5 rounded-lg bg-black/50 px-2 py-1 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: hovering ? 1 : 0 }}
      >
        <div className="h-1 w-1 animate-pulse rounded-full bg-red-400" />
        <span className="text-[10px] font-medium text-white/70">0:03</span>
      </div>
    </div>
  )
}
