import { ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export type CaseStudyLayoutProps = {
  name: string
  category: string
  summary: string
  challenge: string
  solution: string
  metrics: { value: string; label: string }[]
  stack: string[]
  accent: 'cyan' | 'green' | 'violet'
}

const accentColors: Record<string, string> = {
  cyan: 'text-cyan',
  green: 'text-[#50fa7b]',
  violet: 'text-violet',
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
  const color = accentColors[accent] || 'text-cyan'

  return (
    <main className="min-h-screen">
      <section className="relative overflow-hidden px-5 pb-16 pt-32 sm:px-6 md:px-8">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-surface/50 to-ink" aria-hidden="true" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <Link
            to="/"
            className="mb-8 inline-flex items-center gap-2 text-sm text-white/50 transition hover:text-white/80"
          >
            <ChevronRight className="h-4 w-4 rotate-180" />
            Back to home
          </Link>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-end">
            <div>
              <p className={`text-xs uppercase tracking-[0.25em] ${color}`}>{category}</p>
              <h1 className="mt-4 text-display-lg font-bold tracking-[-0.04em] text-white">
                {name}
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/60">{summary}</p>
            </div>
            <div className="grid grid-cols-3 gap-6">
              {metrics.map((metric) => (
                <div key={metric.label}>
                  <p className={`text-2xl font-bold tracking-tight ${color} md:text-3xl`}>
                    {metric.value}
                  </p>
                  <p className="mt-1 text-xs text-white/45">{metric.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell pt-6 md:pt-8">
        <div className="grid gap-4 lg:grid-cols-2">
          <div className="card-surface">
            <p className={`mb-4 text-xs uppercase tracking-[0.25em] ${color}`}>Problem Statement</p>
            <p className="text-base leading-7 text-white/60">{challenge}</p>
          </div>
          <div className="card-surface">
            <p className={`mb-4 text-xs uppercase tracking-[0.25em] ${color}`}>Solution Overview</p>
            <p className="text-base leading-7 text-white/60">{solution}</p>
          </div>
        </div>

        <div className="mt-4 card-surface">
          <p className={`mb-4 text-xs uppercase tracking-[0.25em] ${color}`}>Technology Stack</p>
          <div className="flex flex-wrap gap-2">
            {stack.map((item) => (
              <span key={item} className="rounded-full border border-white/[0.06] bg-white/[0.02] px-4 py-2 text-sm text-white/60">
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
