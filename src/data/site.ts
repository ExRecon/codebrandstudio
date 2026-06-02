import type { LucideIcon } from 'lucide-react'
import {
  Blocks,
  BriefcaseBusiness,
  Gauge,
  Gem,
  Layers3,
  Palette,
  PenTool,
  Rocket,
  ScanSearch,
  Sparkles,
  WandSparkles,
} from 'lucide-react'

export type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
  accent: string
  featured?: boolean
}

export type ProjectAccent = 'blue' | 'green' | 'purple'

export type ProjectMetric = {
  value: string
  label: string
}

export type ProjectItem = {
  slug: string
  name: string
  category: string
  summary: string
  challenge: string
  solution: string
  metrics: ProjectMetric[]
  stack: string[]
  heroLabel: string
  accent: ProjectAccent
}

export const navItems = [
  { label: 'Studio', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Work', href: '#projects' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

export const stats = [
  { value: '38+', label: 'Projects Delivered' },
  { value: '96+', label: 'Performance Scores' },
  { value: '100%', label: 'Client Satisfaction' },
  { value: '0.9s', label: 'Average Load Speed' },
]

export const services: ServiceItem[] = [
  {
    title: 'Custom Portfolio Websites',
    description: 'Signature websites designed to amplify authority, craftsmanship, and trust at first scroll.',
    icon: Sparkles,
    accent: 'from-cyan-300/30 to-sky-500/10',
    featured: true,
  },
  {
    title: 'Personal Brand Websites',
    description: 'Editorial brand systems that make founders, consultants, and creators feel unmistakably premium.',
    icon: Gem,
    accent: 'from-violet-300/30 to-blue-500/10',
  },
  {
    title: 'Creative Developer Experiences',
    description: 'Immersive storytelling, WebGL moments, and motion systems that elevate brand memorability.',
    icon: Blocks,
    accent: 'from-fuchsia-300/20 to-violet-500/10',
  },
  {
    title: 'Premium Business Websites',
    description: 'Business-first digital platforms tuned for clarity, conversion, and modern brand positioning.',
    icon: BriefcaseBusiness,
    accent: 'from-white/15 to-cyan-400/5',
  },
  {
    title: 'UI/UX Design',
    description: 'Strategic interface design with elegant hierarchy, premium spacing, and tactile interaction patterns.',
    icon: Palette,
    accent: 'from-cyan-300/20 to-violet-500/10',
  },
  {
    title: 'Frontend Development',
    description: 'Production-grade builds engineered for speed, accessibility, and resilient component architecture.',
    icon: Gauge,
    accent: 'from-slate-200/15 to-sky-400/10',
  },
  {
    title: 'Motion & Interaction Design',
    description: 'Physically believable motion direction that adds emotion, confidence, and perceived value.',
    icon: WandSparkles,
    accent: 'from-violet-300/25 to-cyan-400/10',
  },
  {
    title: 'Website Redesigns',
    description: 'Strategic transformations that replace outdated impressions with authority and sharp product thinking.',
    icon: PenTool,
    accent: 'from-sky-300/20 to-blue-500/10',
  },
]

export const differentiators = [
  'No templates. Every system is composed around your positioning, not reverse-fitted into a theme.',
  'Luxury-level visual direction with performance engineering baked into the first decision, not added later.',
  'Brand strategy, conversion thinking, and technical execution aligned into one cinematic digital product.',
  'Pixel-perfect craft across typography, motion, accessibility, responsiveness, and perceived quality.',
]

export const projects: ProjectItem[] = [
  {
    slug: 'lumina-founder',
    name: 'Lumina Founder Platform',
    category: 'Personal Brand Ecosystem',
    summary: 'A cinematic founder website combining editorial storytelling, product authority, and high-conversion lead capture.',
    challenge: 'The founder had expertise and proof, but the old website looked generic and failed to justify premium pricing.',
    solution: 'We rebuilt the experience with a stronger narrative arc, motion-led proof moments, and a conversion path tailored for high-ticket inquiries.',
    metrics: [
      { value: '+41%', label: 'Higher-quality inquiries' },
      { value: '2.4x', label: 'Longer engagement time' },
      { value: '98', label: 'Performance score' },
    ],
    stack: ['React', 'GSAP', 'Framer Motion', 'Content Strategy'],
    heroLabel: 'Editorial founder identity with cinematic product framing.',
    accent: 'blue',
  },
  {
    slug: 'atlas-private-capital',
    name: 'Atlas Private Capital',
    category: 'Luxury Business Website',
    summary: 'A restrained, high-trust digital presence for a boutique capital firm needing modern authority without startup cliches.',
    challenge: 'The previous site communicated competence but not exclusivity, precision, or modern credibility.',
    solution: 'We paired sharp typography, disciplined motion, and data-led storytelling to create a digital presence that feels composed and expensive.',
    metrics: [
      { value: '+63%', label: 'More meeting bookings' },
      { value: '0.8s', label: 'Hero render speed' },
      { value: 'AA', label: 'Accessibility rating' },
    ],
    stack: ['Tailwind', 'Three.js', 'Semantic SEO', 'Design Systems'],
    heroLabel: 'Private capital storytelling with calm confidence and technical precision.',
    accent: 'green',
  },
  {
    slug: 'orion-creative-suite',
    name: 'Orion Creative Suite',
    category: 'Creative Developer Experience',
    summary: 'An immersive portfolio for a multidisciplinary studio blending interactive visuals with frictionless storytelling.',
    challenge: 'The studio wanted a website that felt unforgettable without sacrificing load speed or clarity.',
    solution: 'We designed a progressive reveal system, ambient 3D motion, and modular project narratives that felt premium on every device.',
    metrics: [
      { value: '34%', label: 'More project views' },
      { value: '28%', label: 'Lower bounce rate' },
      { value: '91+', label: 'Lighthouse score' },
    ],
    stack: ['R3F', 'Lenis', 'Code Splitting', 'Mobile Optimization'],
    heroLabel: 'Immersive studio showcase with layered motion and premium pacing.',
    accent: 'purple',
  },
]

export const testimonials = [
  {
    quote:
      'Code Brand Studio translated our value into an experience that felt precise, elevated, and impossible to compare with our competitors.',
    name: 'Maya R.',
    role: 'Founder, Lumina',
  },
  {
    quote:
      'The site didn’t just look exceptional. It changed how prospects perceived the seriousness of our business in the first minute.',
    name: 'Adrian K.',
    role: 'Managing Partner, Atlas',
  },
  {
    quote:
      'Every detail felt intentional, from the way sections entered to how effortless the mobile version felt under the same visual standard.',
    name: 'Sami H.',
    role: 'Creative Director, Orion',
  },
]

export const processSteps = [
  {
    title: 'Discovery',
    description: 'We map the commercial goal, audience perception, and the authority gap the current brand is leaving open.',
  },
  {
    title: 'Strategy',
    description: 'We turn positioning into a page system, messaging hierarchy, interaction direction, and content narrative.',
  },
  {
    title: 'Design',
    description: 'Visual language, prototypes, and premium UI decisions are shaped into a cohesive luxury digital identity.',
  },
  {
    title: 'Development',
    description: 'We engineer the experience with modern frontend tooling, smooth motion, and resilient components.',
  },
  {
    title: 'Optimization',
    description: 'Performance, accessibility, responsive behavior, and perceived polish are tuned across breakpoints.',
  },
  {
    title: 'Launch',
    description: 'Your website ships as a fast, refined product that is ready to elevate trust, pricing power, and inquiries.',
  },
]

export const socialLinks = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
]

export const contact = {
  email: 'hello@codebrandstudio.com',
  calendarLabel: 'Book a Discovery Call',
}

export const getProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug)

export const studioPrinciples = [
  {
    title: 'Authority by design',
    body: 'A premium website should shift perception immediately, before a visitor reads a full sentence.',
    icon: ScanSearch,
  },
  {
    title: 'Business-first aesthetics',
    body: 'Luxury is useful when it supports trust, clarity, differentiation, and higher-value decisions.',
    icon: Rocket,
  },
  {
    title: 'Modern craft',
    body: 'We combine strong editorial systems with disciplined engineering so the experience feels refined, not fragile.',
    icon: Layers3,
  },
]
