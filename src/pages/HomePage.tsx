import { useEffect } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import {
  AboutSection,
  CTASection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  WhyHireUsSection,
} from '../components/home/HomeSections'
import { useLenis } from '../hooks/useLenis'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function HomePage() {
  const prefersReducedMotion = usePrefersReducedMotion()

  useLenis(!prefersReducedMotion)

  useEffect(() => {
    document.title = 'Code Brand Studio | Premium Digital Experiences'
  }, [])

  return (
    <div className="min-h-screen bg-ink text-frost">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <WhyHireUsSection />
        <ProjectsSection />
        <ProcessSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
