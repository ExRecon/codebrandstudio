import { useEffect } from 'react'
import { Footer } from '../components/layout/Footer'
import { Navbar } from '../components/layout/Navbar'
import {
  AboutSection,
  CTASection,
  FounderSection,
  HeroSection,
  ProcessSection,
  ProjectsSection,
  ServicesSection,
  TestimonialsSection,
  WhyChooseUsSection,
  WhyHireUsSection,
} from '../components/home/HomeSections'
import { SectionDivider } from '../components/ui/SectionDivider'
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
        <SectionDivider variant="glow" />
        <section className="section-shift-a">
          <AboutSection />
        </section>
        <SectionDivider />
        <section className="section-shift-b">
          <FounderSection />
        </section>
        <SectionDivider />
        <section className="section-shift-b">
          <ServicesSection />
        </section>
        <SectionDivider variant="glow" />
        <section className="section-shift-a">
          <WhyHireUsSection />
        </section>
        <SectionDivider />
        <section className="section-shift-a">
          <WhyChooseUsSection />
        </section>
        <SectionDivider />
        <section className="section-shift-b">
          <ProjectsSection />
        </section>
        <SectionDivider variant="thin" />
        <section className="section-shift-a">
          <ProcessSection />
        </section>
        <SectionDivider />
        <section className="section-shift-b">
          <TestimonialsSection />
        </section>
        <SectionDivider variant="glow" />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
