"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const FAQS = [
    { q: "What is Rhinon Tech?", a: "A technology company that builds and operates its own house of products — Saleszium, Furrcircle and Rhinon Labs, with more on the way. We're the parent; each product has its own identity." },
    { q: "What products do you build?", a: "Saleszium (customer engagement & sales), Furrcircle (the app for pet parents) and Rhinon Labs (our product studio) — plus new products in active development." },
    { q: "Is Rhinon Labs part of Rhinon Tech?", a: "Yes — Rhinon Labs is our in-house product studio and one of the ventures in the house. It runs with its own identity at rhinonlabs.com." },
    { q: "Do you take on outside projects?", a: "Rhinon Tech builds its own products. Client work is handled by Rhinon Labs — head to rhinonlabs.com to talk to the studio." },
    { q: "Where are you based?", a: "Bhubaneswar, Odisha, India — building for users everywhere." },
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
