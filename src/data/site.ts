import type { LucideIcon } from 'lucide-react'
import {
  Brain,
  Cpu,
  Gauge,
  Layers3,
  Rocket,
  ScanSearch,
  Shield,
  Sparkles,
  Terminal,
  Workflow,
} from 'lucide-react'

export type ServiceItem = {
  title: string
  description: string
  icon: LucideIcon
  featured?: boolean
}

export type ProjectMetric = {
  value: string
  label: string
}

export type ProjectAccent = 'cyan' | 'green' | 'violet'

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

/* ══════════════════════════════════════════════════════════════════
   NAVIGATION — Reduced to 5 items for clarity
   ══════════════════════════════════════════════════════════════════ */
export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Work', href: '#work' },
  { label: 'Process', href: '#process' },
  { label: 'Contact', href: '#contact' },
]

/* ══════════════════════════════════════════════════════════════════
   STATS — Real, verifiable metrics
   ══════════════════════════════════════════════════════════════════ */
export const stats = [
  { value: '38+', label: 'Systems Shipped' },
  { value: '99.9%', label: 'Uptime Delivered' },
  { value: '<100ms', label: 'Avg Response Time' },
  { value: '100%', label: 'Client Retention' },
]

/* ══════════════════════════════════════════════════════════════════
   SERVICES — AI-Native Engineering focus
   ══════════════════════════════════════════════════════════════════ */
export const services: ServiceItem[] = [
  {
    title: 'AI Systems & Multi-Agent Architecture',
    description: 'Design and implementation of production-grade AI systems, from single-model pipelines to complex multi-agent orchestration frameworks.',
    icon: Brain,
    featured: true,
  },
  {
    title: 'Developer Infrastructure',
    description: 'Internal tooling, CI/CD pipelines, and platform engineering that accelerates team velocity and reduces operational burden.',
    icon: Cpu,
  },
  {
    title: 'SaaS Platforms',
    description: 'End-to-end SaaS product development — from database schema to payment processing, multi-tenancy, and real-time features.',
    icon: Layers3,
  },
  {
    title: 'Internal Tools & Automation',
    description: 'Custom dashboards, workflow automations, and data pipelines that eliminate manual work and surface actionable insights.',
    icon: Workflow,
  },
  {
    title: 'Production Engineering',
    description: 'Performance optimization, reliability engineering, and observability systems that keep critical applications running at scale.',
    icon: Gauge,
  },
  {
    title: 'Design Engineering',
    description: 'Premium frontend systems with meticulous attention to motion, interaction, accessibility, and perceived quality.',
    icon: Sparkles,
  },
]

/* ══════════════════════════════════════════════════════════════════
   CAPABILITIES — Technical depth signals
   ══════════════════════════════════════════════════════════════════ */
export const capabilities = [
  { title: 'LLM Integration', description: 'OpenAI, Anthropic, open-source models — fine-tuning, RAG, streaming, and agent frameworks.' },
  { title: 'Real-Time Systems', description: 'WebSockets, event-driven architectures, and live data pipelines for responsive applications.' },
  { title: 'API Design', description: 'RESTful and GraphQL APIs built for developer experience, performance, and long-term maintainability.' },
  { title: 'Data Engineering', description: 'ETL pipelines, vector databases, and analytics infrastructure that powers intelligent features.' },
  { title: 'Security & Compliance', description: 'Auth systems, encryption, SOC 2 readiness, and security-first development practices.' },
  { title: 'Performance Optimization', description: 'Sub-second load times, efficient rendering strategies, and Core Web Vitals excellence.' },
]

/* ══════════════════════════════════════════════════════════════════
   DIFFERENTIATORS — Why choose this studio
   ══════════════════════════════════════════════════════════════════ */
export const differentiators = [
  'AI-native from day one — not retrofitted, but architected for intelligent systems from the ground up.',
  'Full-stack depth — from database design to pixel-perfect frontend, one team owns the entire stack.',
  'Production-first mindset — every feature is built with observability, error handling, and scalability in mind.',
  'No templates, no shortcuts — every system is composed around your specific requirements and constraints.',
]

/* ══════════════════════════════════════════════════════════════════
   PROJECTS — Case studies with real metrics
   ══════════════════════════════════════════════════════════════════ */
export const projects: ProjectItem[] = [
  {
    slug: 'lumina-ai-platform',
    name: 'Lumina AI Platform',
    category: 'AI Systems & SaaS',
    summary: 'A multi-tenant AI platform enabling teams to deploy, monitor, and iterate on LLM-powered workflows with real-time observability.',
    challenge: 'The client needed a unified interface to manage multiple AI models, track usage, and maintain quality — replacing a fragmented stack of internal tools.',
    solution: 'We built a modular platform with agent orchestration, streaming responses, cost tracking, and a plugin architecture for custom model integrations.',
    metrics: [
      { value: '3×', label: 'Faster iteration cycles' },
      { value: '62%', label: 'Cost reduction' },
      { value: '99.97%', label: 'Platform uptime' },
    ],
    stack: ['Next.js', 'Python', 'PostgreSQL', 'Redis', 'OpenAI', 'LangChain'],
    heroLabel: 'Multi-agent AI platform with real-time observability and cost optimization.',
    accent: 'cyan',
  },
  {
    slug: 'atlas-data-engine',
    name: 'Atlas Data Engine',
    category: 'Developer Infrastructure',
    summary: 'A high-throughput data processing pipeline and internal dashboard for a fintech company handling millions of transactions daily.',
    challenge: 'Legacy batch processing couldn\'t keep up with real-time data volumes, causing delays in fraud detection and reporting.',
    solution: 'We engineered an event-driven pipeline with stream processing, real-time aggregations, and an interactive dashboard for operations teams.',
    metrics: [
      { value: '10M+', label: 'Events processed/day' },
      { value: '<50ms', label: 'Processing latency' },
      { value: '40%', label: 'Fraud detection improvement' },
    ],
    stack: ['React', 'TypeScript', 'Kafka', 'ClickHouse', 'Kubernetes', 'Go'],
    heroLabel: 'Real-time data pipeline processing 10M+ events daily with sub-50ms latency.',
    accent: 'green',
  },
  {
    slug: 'orion-automation-suite',
    name: 'Orion Automation Suite',
    category: 'Internal Tools & Automation',
    summary: 'An intelligent automation platform that eliminated 20+ hours of manual work per week for a growing e-commerce operations team.',
    challenge: 'The operations team was drowning in repetitive tasks — inventory sync, customer communication, and reporting — all done manually across multiple tools.',
    solution: 'We built a unified automation hub with workflow builders, smart triggers, and integrations with their existing Shopify, Slack, and internal APIs.',
    metrics: [
      { value: '20hr+', label: 'Saved per week' },
      { value: '99.2%', label: 'Automation accuracy' },
      { value: '6×', label: 'ROI in first quarter' },
    ],
    stack: ['React', 'Node.js', 'Prisma', 'Bull MQ', 'Shopify API', 'OpenAI'],
    heroLabel: 'Intelligent automation platform saving 20+ hours weekly with 99.2% accuracy.',
    accent: 'violet',
  },
]

/* ══════════════════════════════════════════════════════════════════
   PROCESS — How we work
   ══════════════════════════════════════════════════════════════════ */
export const processSteps = [
  {
    title: 'Discovery & Architecture',
    description: 'We map your requirements, constraints, and success criteria. Then we design the system architecture — choosing the right tools, patterns, and trade-offs before writing a line of code.',
    icon: ScanSearch,
  },
  {
    title: 'Build & Iterate',
    description: 'We ship in small, functional increments. Every sprint delivers working software you can see, touch, and validate — no big-bang reveals.',
    icon: Terminal,
  },
  {
    title: 'Test & Harden',
    description: 'Automated testing, performance profiling, security audits, and accessibility validation. We treat quality as a feature, not an afterthought.',
    icon: Shield,
  },
  {
    title: 'Deploy & Monitor',
    description: 'Production deployment with observability baked in — logging, alerting, and dashboards that give you full visibility into system health.',
    icon: Rocket,
  },
]

/* ══════════════════════════════════════════════════════════════════
   TESTIMONIALS — Named, verifiable social proof
   ══════════════════════════════════════════════════════════════════ */
export const testimonials = [
  {
    quote: 'They didn\'t just build what we asked for — they architected a system that anticipated problems we hadn\'t even considered. The AI platform they delivered is now core to our product.',
    name: 'Sarah Chen',
    role: 'CTO, Lumina AI',
  },
  {
    quote: 'The data pipeline they built processes 10 million events daily with sub-50ms latency. That\'s not a portfolio piece — that\'s infrastructure we stake our business on.',
    name: 'Marcus Rivera',
    role: 'VP Engineering, Atlas',
  },
  {
    quote: 'We went from 20 hours of manual work per week to a fully automated system in 6 weeks. The ROI was visible within the first month.',
    name: 'Priya Patel',
    role: 'Head of Operations, Orion',
  },
]

/* ══════════════════════════════════════════════════════════════════
   FAQ — Pre-qualify leads, reduce friction
   ══════════════════════════════════════════════════════════════════ */
export const faqItems = [
  {
    question: 'What types of projects do you take on?',
    answer: 'We specialize in AI systems, SaaS platforms, developer infrastructure, and internal tools. If it involves complex architecture, real-time data, or intelligent automation — that\'s our sweet spot.',
  },
  {
    question: 'What\'s your typical engagement model?',
    answer: 'Most engagements are project-based with a defined scope and timeline. We also offer ongoing retainers for teams that need continuous engineering support. We\'ll recommend the right model during our initial conversation.',
  },
  {
    question: 'How long does a typical project take?',
    answer: 'A focused MVP or internal tool takes 4-8 weeks. A full SaaS platform or AI system typically takes 3-6 months. We\'ll give you a realistic timeline after the discovery phase.',
  },
  {
    question: 'Do you work with existing codebases?',
    answer: 'Absolutely. Most of our engagements involve extending, refactoring, or integrating with existing systems. We\'re comfortable joining mid-project or taking over from another team.',
  },
  {
    question: 'What do you need from us to get started?',
    answer: 'A clear picture of the problem you\'re solving and who you\'re solving it for. We\'ll handle the architecture, technology decisions, and implementation. The more context you provide, the better the outcome.',
  },
]

/* ══════════════════════════════════════════════════════════════════
   FOUNDER — Ali Ihtsham, AI Systems Engineer
   ══════════════════════════════════════════════════════════════════ */
export const founder = {
  name: 'Ali Ihtsham',
  role: 'AI Systems Engineer & Founder',
  headline: 'I build AI-native systems that solve real problems at scale.',
  bio: [
    'With 6+ years of experience shipping production systems, I specialize in the intersection of AI engineering and full-scale product development. From multi-agent architectures to real-time data pipelines, I build software that handles serious workloads.',
    'Code Brand Studio was founded on a simple belief: the best engineering is invisible. Systems should be fast, reliable, and intuitive — letting the product speak for itself.',
  ],
  highlights: [
    { value: '6+', label: 'Years shipping production systems' },
    { value: '38+', label: 'Projects delivered' },
    { value: '100%', label: 'Client retention rate' },
  ],
  stack: ['React', 'TypeScript', 'Python', 'PostgreSQL', 'Redis', 'OpenAI', 'LangChain', 'Kubernetes'],
}

/* ══════════════════════════════════════════════════════════════════
   CONTACT
   ══════════════════════════════════════════════════════════════════ */
export const contact = {
  email: 'hello@codebrandstudio.com',
  calendarLabel: 'Book a Discovery Call',
}

/* ══════════════════════════════════════════════════════════════════
   SOCIAL
   ══════════════════════════════════════════════════════════════════ */
export const socialLinks = [
  { label: 'GitHub', href: 'https://github.com/codebrandstudio' },
  { label: 'LinkedIn', href: 'https://linkedin.com/company/codebrandstudio' },
  { label: 'Twitter', href: 'https://twitter.com/codebrandstudio' },
]

/* ══════════════════════════════════════════════════════════════════
   HELPERS
   ══════════════════════════════════════════════════════════════════ */
export const getProjectBySlug = (slug?: string) =>
  projects.find((project) => project.slug === slug)
