'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';

type FAQ = {
  q: string;
  a: string;
};

type FAQSectionProps = {
  title?: string;
  description?: string;
  faqs?: FAQ[];
  className?: string;
};

const DEFAULT_FAQS: FAQ[] = [
  {
    q: 'What is your ERP’s deployment model?',
    a: 'We support cloud and on-prem deployments. You can migrate between them without losing data or customizations.',
  },
  {
    q: 'How long does implementation take?',
    a: 'Typical go-live is 4–8 weeks depending on modules and integrations. We run staggered rollouts to minimize downtime.',
  },
  {
    q: 'Is there role-based access control?',
    a: 'Yes. Roles, permissions, and data scopes are fully configurable. We also support SSO with major IdPs.',
  },
  {
    q: 'Do you offer customer support?',
    a: '24/7 support with response-time SLAs. Dedicated success managers are available on Growth and Enterprise plans.',
  },
];

export default function Faq({
  title = 'Frequently Asked Questions',
  description = 'Answers to common questions about our platform, pricing, and support.',
  faqs = DEFAULT_FAQS,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      className={cn(
        'relative w-full bg-neutral-950 text-neutral-100 px-4',
        className
      )}
    >
      {/* subtle background accents */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_10%_0%,rgba(255,255,255,0.06)_0%,transparent_55%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(50%_40%_at_90%_10%,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-5xl">
        <header className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {title}
          </h2>
          <p className="mt-2 text-sm text-neutral-400 md:text-base">
            {description}
          </p>
        </header>

        <ul className="divide-y divide-white/10 rounded-xl border border-white/10 bg-white/[0.02]">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li key={i}>
                <button
                  className={cn(
                    'w-full text-left px-4 py-4 md:px-6 md:py-5',
                    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40'
                  )}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${i}`}
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                >
                  <div className="flex items-start gap-3">
                    <div className="flex-1">
                      <h3 className="text-base font-medium md:text-lg">
                        {item.q}
                      </h3>
                      <AnimatePresence initial={false}>
                        {isOpen && (
                          <motion.div
                            id={`faq-panel-${i}`}
                            role="region"
                            initial="collapsed"
                            animate="open"
                            exit="collapsed"
                            variants={{
                              open: { height: 'auto', opacity: 1 },
                              collapsed: { height: 0, opacity: 0 },
                            }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <motion.p
                              variants={{ open: { y: 0 }, collapsed: { y: -8 } }}
                              transition={{ duration: 0.25 }}
                              className="mt-2 pr-2 text-sm leading-6 text-neutral-300 md:text-[15px]"
                            >
                              {item.a}
                            </motion.p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                    <motion.svg
                      viewBox="0 0 20 20"
                      className="mt-1 size-5 shrink-0 text-neutral-300"
                      initial={false}
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ type: 'spring', stiffness: 260, damping: 22 }}
                    >
                      <path
                        d="M5 8l5 5 5-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </div>
                </button>
              </li>
            );
          })}
        </ul>

        {/* small callout */}
        <motion.div
          className="mt-6 rounded-lg border border-white/10 bg-white/[0.02] px-4 py-3 text-sm text-neutral-300 md:px-5"
          initial={{ opacity: 0, y: 6 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
        >
          Still have questions?{' '}
          <a
            href="#contact"
            className="underline decoration-white/40 underline-offset-4 hover:decoration-white/80"
          >
            Contact our team
          </a>
          .
        </motion.div>
      </div>
    </section>
  );
}
