import { Check, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { ProjectAccent, AccentStyle } from '../../../data/accents'
import { projectAccents } from '../../../data/accents'

export type CaseStudyLayoutProps = {
  name: string
  category: string
  summary: string
  challenge: string
  solution: string
  metrics: { value: string; label: string }[]
  stack: string[]
  accent: ProjectAccent
}

export function CaseStudyLayout({
  name,
  category,
  summary,
  challenge,
  solution,
  metrics,
  stack,
  accent,
}: CaseStudyLayoutProps) {
  const studyAccent: AccentStyle = projectAccents[accent as ProjectAccent] ?? projectAccents.blue

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden px-4 pb-16 pt-32 md:px-8">
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            background: studyAccent.mockup.replace('bg-[', '').replace(']', ''),
          }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-[1440px]">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-base text-white/65 transition hover:text-white"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <p className={`section-kicker ${studyAccent.category}`}>{category}</p>
              <h1 className="font-display text-5xl leading-none tracking-[-0.06em] text-white md:text-6xl lg:text-7xl">
                {name}
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{summary}</p>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className={`font-display text-3xl tracking-[-0.04em] ${studyAccent.category}`}>{metric.value}</p>
                  <p className="mt-2 text-base leading-6 text-white/60">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-6 md:pt-8">
        <div className="grid gap-px bg-white/[0.04] lg:grid-cols-2">
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Problem statement</p>
            <p className="max-w-2xl text-base leading-8 text-white/70">{challenge}</p>
          </div>
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Solution overview</p>
            <p className="max-w-2xl text-base leading-8 text-white/70">{solution}</p>
          </div>
        </div>
        <div className="mt-px grid gap-px bg-white/[0.04] lg:grid-cols-[1.05fr_0.95fr]">
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Process breakdown</p>
            <div className="space-y-4">
              {[
                'Narrative positioning and content mapping',
                'Visual direction and premium UI composition',
                'Motion prototyping and interaction tuning',
                'High-performance build and optimization',
              ].map((item) => (
                <div key={item} className="flex items-start gap-3 text-white/70">
                  <Check className={`mt-1 h-4 w-4 flex-shrink-0 ${studyAccent.category}`} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-ink p-8">
            <p className={`mb-4 text-xs uppercase tracking-[0.3em] ${studyAccent.category}`}>Stack</p>
            <div className="flex flex-wrap gap-3">
              {stack.map((item) => (
                <span key={item} className="rounded-full bg-white/[0.04] px-4 py-2 text-sm text-white/70">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
