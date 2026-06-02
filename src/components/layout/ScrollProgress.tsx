import { useEffect, useState } from 'react'

export function ScrollProgress() {
  const [progress, setProgress] = useState(0)
  const [active, setActive] = useState(false)

  useEffect(() => {
    let ticking = false

    const onScroll = () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        const scrollTop = window.scrollY
        const height = document.documentElement.scrollHeight - window.innerHeight
        setProgress(height > 0 ? (scrollTop / height) * 100 : 0)
        setActive(scrollTop > 50)
        ticking = false
      })
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="pointer-events-none fixed inset-x-0 top-0 z-[80] h-[2px] bg-transparent transition-opacity duration-300"
      style={{ opacity: active ? 1 : 0 }}
    >
      <div
        className="h-full bg-gradient-to-r from-cyan-400 via-sky-400 to-violet-400"
        style={{
          width: `${progress}%`,
          boxShadow:
            '0 0 12px rgba(103,232,249,0.7), 0 0 30px rgba(139,233,255,0.3), 0 0 60px rgba(143,131,255,0.15)',
          transition: 'width 0.1s linear',
        }}
      />
    </div>
  )
}
