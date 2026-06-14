import { useEffect } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import {
  AboutSection,
  CTASection,
  FAQSection,
  FounderSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  SocialProofSection,
  TestimonialsSection,
  WhyUsSection,
} from '../components/home/HomeSections'
import { useLenis } from '../hooks/useLenis'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export default function HomePage() {
  const prefersReducedMotion = usePrefersReducedMotion()

  useLenis(!prefersReducedMotion)

  useEffect(() => {
    document.title = 'Code Brand Studio — AI-Native Engineering Studio'
  }, [])

  return (
    <div className="min-h-screen bg-ink text-frost">
      <Navbar />
      <main id="main-content">
        <HeroSection />
        <SocialProofSection />
        <div className="divider-line" aria-hidden="true" />
        <AboutSection />
        <div className="divider-line" aria-hidden="true" />
        <ServicesSection />
        <div className="divider-line" aria-hidden="true" />
        <WhyUsSection />
        <div className="divider-line" aria-hidden="true" />
        <ProjectsSection />
        <div className="divider-line" aria-hidden="true" />
        <ProcessSection />
        <div className="divider-line" aria-hidden="true" />
        <TestimonialsSection />
        <div className="divider-line" aria-hidden="true" />
        <FounderSection />
        <div className="divider-line" aria-hidden="true" />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
