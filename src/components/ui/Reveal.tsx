import { useEffect, useRef, useState, type ReactNode } from 'react'

interface RevealProps {
  children: ReactNode
  delay?: number
  className?: string
  once?: boolean
}

const THRESHOLD = 0.12
const ROOT_MARGIN = '0px 0px -60px 0px'

export function Reveal({ children, delay = 0, className = '', once = true }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, once])

  return (
    <div
      ref={ref}
      className={`${className} reveal-base ${visible ? 'reveal-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}

export function RevealText({ children, delay = 0, className = '', once = true }: RevealProps) {
  const ref = useRef<HTMLParagraphElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setVisible(true), delay)
          if (once) observer.unobserve(el)
        } else if (!once) {
          setVisible(false)
        }
      },
      { threshold: THRESHOLD, rootMargin: ROOT_MARGIN }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [delay, once])

  return (
    <p
      ref={ref}
      className={`${className} reveal-text-base ${visible ? 'reveal-text-visible' : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </p>
  )
}