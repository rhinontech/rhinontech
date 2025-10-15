"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

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
    q: "What is Rhinon?",
    a: "Rhinon is an AI customer engagement platform that replaces your stack of chat, CRM, and support tools. It helps teams capture leads, automate customer support, and manage sales pipelines — all from one place.",
  },
  {
    q: "How does Rhinon’s AI chatbot work?",
    a: "Rhinon’s AI chatbot for websites uses your company data (via RAG) to answer customer questions, route leads to the right team, and engage visitors in real time. It supports multilingual, human-like conversations out of the box.",
  },
  {
    q: "Who is Rhinon best suited for?",
    a: "Rhinon is built for lean SaaS teams, early-stage startups, and online businesses that want to unify support, CRM, and marketing workflows without expensive tool stacks or complex integrations.",
  },
  {
    q: "Can Rhinon integrate with our existing CRM or email tools?",
    a: "Yes. Rhinon connects easily with popular CRMs and email systems, so your data and workflows stay in sync. It’s designed to plug into your tech stack with a single script or npm package. Contact sales for custom queries.",
  },
  {
    q: "How is Rhinon different from other chatbots or support tools?",
    a: "Most chatbots only answer basic queries. Rhinon goes further — combining AI support, CRM, campaign automation, and SEO analytics into one ecosystem, helping you turn customer interactions into conversions.",
  },
  {
    q: "Does Rhinon help with lead generation and sales?",
    a: "Yes. Rhinon includes AI-powered lead capture and qualification, campaign triggers (like behavior or exit intent), and email follow-ups that help your sales and marketing teams convert faster.",
  },
  {
    q: "Is Rhinon easy to set up?",
    a: "Absolutely. You can install Rhinon in under 10 minutes using one script. No dev-heavy setup or complex integrations required.",
  },
  {
    q: "What about data privacy and security?",
    a: "Rhinon follows strict data protection standards and allows you to control what customer and company data is used in AI training.",
  },
  {
    q: "Does Rhinon support multilingual customer interactions?",
    a: "Yes. Rhinon’s AI engine supports multiple languages, making it ideal for global teams that want to offer localized customer support.",
  },
  {
    q: "What’s next on Rhinon’s roadmap?",
    a: "We’re building voice-based support, advanced theming, and deeper analytics to make Rhinon the all-in-one layer for customer engagement and growth.",
  },
];



export default function Faq({
  title = "Frequently Asked Questions",
  description = "Answers to common questions about our platform, pricing, and support.",
  faqs = DEFAULT_FAQS,
  className,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <section
      className={cn(
        "relative w-full bg-neutral-950 text-neutral-100 px-4 pb-10",
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
                    "w-full text-left px-4 py-4 md:px-6 md:py-5",
                    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
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
                              open: { height: "auto", opacity: 1 },
                              collapsed: { height: 0, opacity: 0 },
                            }}
                            transition={{ duration: 0.25 }}
                            className="overflow-hidden"
                          >
                            <motion.p
                              variants={{
                                open: { y: 0 },
                                collapsed: { y: -8 },
                              }}
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
                      transition={{
                        type: "spring",
                        stiffness: 260,
                        damping: 22,
                      }}
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
          Still have questions?{" "}
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
