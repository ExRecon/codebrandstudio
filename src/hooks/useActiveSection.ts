import { useEffect, useState } from 'react'

const SECTION_IDS = [
  'hero',
  'about',
  'services',
  'why-us',
  'work',
  'process',
  'faq',
  'founder',
  'contact',
]

export function useActiveSection() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observers: IntersectionObserver[] = []
    const visibleSections = new Map<string, number>()

    SECTION_IDS.forEach((id) => {
      const element = document.getElementById(id)
      if (!element) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              visibleSections.set(id, entry.intersectionRatio)
            } else {
              visibleSections.delete(id)
            }
          })

          // Pick the section with the highest intersection ratio
          let best = 'hero'
          let bestRatio = 0
          visibleSections.forEach((ratio, sectionId) => {
            if (ratio > bestRatio) {
              bestRatio = ratio
              best = sectionId
            }
          })
          setActiveSection(best)
        },
        {
          threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1],
          rootMargin: '-80px 0px -40% 0px',
        },
      )

      observer.observe(element)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return activeSection
}
