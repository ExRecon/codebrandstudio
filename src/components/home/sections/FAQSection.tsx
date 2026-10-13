import { useState, useRef } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  return (
    <div className="border-b border-white/[0.06]">
      <button
        className="group flex w-full items-center justify-between gap-4 py-5 text-left transition-colors hover:text-cyan"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="text-base font-medium text-white/90 transition-colors group-hover:text-white">
          {question}
        </span>
        <span
          className="shrink-0 transition-transform duration-200"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)' }}
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </span>
      </button>
      <div
        ref={contentRef}
        className="overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
        style={{
          maxHeight: open ? `${contentRef.current?.scrollHeight || 0}px` : '0',
          opacity: open ? 1 : 0,
          paddingTop: open ? '0.5rem' : '0',
          paddingBottom: open ? '1.25rem' : '0',
        }}
      >
        <p className="text-sm leading-6 text-white/55">{answer}</p>
      </div>
    </div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="section-shell" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-2xl">
        <Reveal delay={0}>
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Common questions.</h2>
        </Reveal>

        <Reveal delay={100} className="reveal-base">
          <div className="mt-10">
            {faqItems.map((item) => (
              <FAQItem key={item.question} {...item} />
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}