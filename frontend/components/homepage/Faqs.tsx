"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
    { q: "How to request a design?", a: "Simple and straightforward. Just submit your request through our platform with all the details you have." },
    { q: "Speed of design delivery?", a: "How quick is quick? For most design, we're talking 2-3 business days. We balance speed with quality, ensuring you get top-north design swiftly." },
    { q: "In which program do you create designs?", a: "We primarily design using industry-standard tools like Figma. This ensures flexibility, easy collaboration, and clean handoffs for development." },
    { q: "Why's Norvin instead of full-time designer?", a: "Norvin gives you flexibility without the overhead. You get high-quality design work on demand, without hiring, training, or long-term commitments." },
    { q: "What if i don't like design?", a: "No worries at all. We work iteratively and welcome feedback at every step. If something doesn't feel right, we refine it until it does." },
];

export default function Faqs() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
            <div className="grid gap-10 md:grid-cols-12">
                <Reveal className="md:col-span-5">
                    <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">Common Asked</div>
                    <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight">FAQS</h2>
                    <p className="mt-6 max-w-sm text-xs md:text-sm leading-relaxed text-white/60">
                        "Can't find what you're looking for? Our team is ready to provide personalized answers
                        for your specific project needs. Let's talk about your vision."
                    </p>
                    <div className="mt-8 flex items-center gap-3">
                        <div className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-white/50">Response Time</div>
                        <div className="glass-pill rounded-full px-3 py-1.5 text-[11px] md:text-xs">Under 24h</div>
                    </div>
                </Reveal>
                <div className="md:col-span-7">
                    {FAQS.map((f, i) => (
                        <Reveal key={f.q} delay={i * 0.04}>
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="flex w-full items-center justify-between border-b border-white/10 py-5 md:py-6 text-left cursor-pointer"
                            >
                                <span className="text-base md:text-lg font-medium pr-4 leading-snug">{f.q}</span>
                                <Plus
                                    className={`size-4 md:size-5 shrink-0 transition-transform duration-300 ${open === i ? "rotate-45" : ""}`}
                                />
                            </button>
                            <AnimatePresence initial={false}>
                                {open === i && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <p className="pb-5 md:pb-6 pr-6 md:pr-12 text-xs md:text-sm leading-relaxed text-white/60">{f.a}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
