import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { faqItems } from '../../../data/site'
import { Reveal } from '../../ui/Reveal'

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false)

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
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-white/40" />
        </motion.span>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="pb-5 text-sm leading-6 text-white/55">{answer}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQSection() {
  return (
    <section id="faq" className="section-shell" aria-label="Frequently asked questions">
      <div className="mx-auto max-w-2xl">
        <Reveal>
          <p className="section-kicker">FAQ</p>
          <h2 className="section-title">Common questions.</h2>
        </Reveal>

        <Reveal delay={0.1}>
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
