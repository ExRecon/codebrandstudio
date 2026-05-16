import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY
      const height = document.documentElement.scrollHeight - window.innerHeight
      setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-px bg-white/8">
      <div
        className="h-full bg-gradient-to-r from-cyan-300 via-sky-400 to-violet-400 shadow-[0_0_18px_rgba(139,233,255,0.8)] transition-[width] duration-150"
        style={{ width: `${progress}%` }}
      />
    </div>
  )
}
