"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Reveal from "./Reveal";

const PROCESS = [
    {
        n: "Spot a problem",
        body: "We start a product only when there's a real, painful problem worth solving.",
        pct: 30,
        tag: "FOUNDATION",
        icon: (
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <circle cx="6" cy="16" r="2.5" />
                <circle cx="26" cy="16" r="2.5" />
                <circle cx="16" cy="9" r="2.5" />
                <path d="M8.5 16 Q16 4 23.5 16" />
            </svg>
        ),
    },
    {
        n: "Build in-house",
        body: "We design and engineer the product end to end, with our own team.",
        pct: 70,
        tag: "PRODUCTION",
        icon: (
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <path d="M20 4l8 8-14 14H6v-8z" />
                <path d="M18 6l8 8" />
            </svg>
        ),
    },
    {
        n: "Launch & operate",
        body: "We ship it, run it as a product, and keep improving it for the long term.",
        pct: 100,
        tag: "LAUNCH",
        icon: (
            <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                <rect x="8" y="6" width="16" height="22" rx="2" />
                <path d="M12 6V4h8v2" />
                <path d="M12 14h8M12 19h8M12 24h5" />
            </svg>
        ),
    },
];

function ProgressBar({ pct }: { pct: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const inView = useInView(ref, { once: true, margin: "-50px" });
    return (
        <div ref={ref} className="h-1 w-full overflow-hidden rounded-full bg-white/10">
            <motion.div
                className="h-full bg-white"
                initial={{ width: 0 }}
                animate={inView ? { width: `${pct}%` } : {}}
                transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            />
        </div>
    );
}

export default function Process() {
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24 md:pb-48">
            <Reveal>
                <div className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/[0.03] px-3 py-1.5">
                    <span className="h-1.5 w-1.5 rounded-full bg-white" />
                    <span className="text-[11px] font-medium tracking-wide text-white/80">Process</span>
                </div>
            </Reveal>
            <div className="mt-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <Reveal>
                    <h2 className="font-display text-5xl sm:text-7xl md:text-[100px] lg:text-[120px] font-bold tracking-[-0.04em] md:leading-[0.95]">
                        Our Approach
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="max-w-[260px] text-sm leading-snug text-white/55">
                        How an idea becomes a product we own and operate.
                    </p>
                </Reveal>
            </div>
            <motion.div
                className="mt-14 grid gap-6 md:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            >
                {PROCESS.map((p, i) => (
                    <motion.div
                        key={p.n}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                        }}
                        className={`flex h-[380px] md:h-[440px] flex-col rounded-[24px] md:rounded-[28px] border border-white/10 p-6 md:p-7 ${i === 1 ? "md:translate-y-12" : i === 2 ? "md:translate-y-24" : ""
                            }`}
                    >
                        <div className="text-white/90">{p.icon}</div>
                        <div className="mt-auto">
                            <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight">{p.n}</h3>
                            <p className="mt-3 text-xs md:text-sm leading-relaxed text-white/55">{p.body}</p>
                            <div className="mt-6 md:mt-8 border-t border-white/10 pt-4 md:pt-5 space-y-4">
                                <ProgressBar pct={p.pct} />
                                <div className="flex items-center gap-4 text-[11px] md:text-xs text-white/70">
                                    <span className="flex items-center gap-1.5">
                                        <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-3.5 w-3.5">
                                            <circle cx="8" cy="8" r="6.5" />
                                            <path d="M8 4.5V8l2.5 1.5" strokeLinecap="round" />
                                        </svg>
                                        <span className="font-medium">{p.pct}% complete</span>
                                    </span>
                                    <span className="text-white/20">|</span>
                                    <span className="tracking-[0.15em] text-white/80">{p.tag}</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
