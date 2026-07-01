"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { ArrowUpRight, Plus, Minus } from "lucide-react";
import Reveal from "./Reveal";
import Button from "@/components/Button";
import { IMG } from "./constants";

/* ============================================================ SERVICE 01 */
export function ServiceBrand() {
    const tiles = [
        { t: "AI Chatbot", img: IMG.brand1, body: "An AI assistant trained on your content, answering customers 24/7." },
        { t: "CRM & Pipeline", img: IMG.brand2, body: "Leads, contacts, deals and forecasting — captured automatically." },
        { t: "Omnichannel Inbox", img: IMG.brand3, body: "Website chat, WhatsApp and email in one shared inbox." },
        { t: "Automation", img: IMG.brand4, body: "Workflows and campaigns that nurture and convert on autopilot." },
    ];
    const [active, setActive] = useState(1);
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
            <div className="relative flex flex-col items-center text-center">
                {/* Large Background Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 w-full flex justify-center">
                    <Reveal>
                        <div className="font-display text-[150px] sm:text-[240px] md:text-[340px] lg:text-[420px] leading-none font-semibold bg-gradient-to-b from-white/[0.01] to-white/[0.2] bg-clip-text text-transparent">
                            01
                        </div>
                    </Reveal>
                </div>

                {/* Foreground Title & Text - Positioned at the bottom of the number */}
                <div className="relative z-10 mt-[100px] sm:mt-[160px] md:mt-[230px] lg:mt-[280px] pb-6 md:pb-12">
                    <Reveal>
                        <h2 className="font-display text-4xl sm:text-6xl md:text-9xl font-semibold tracking-tight text-white leading-none">
                            Saleszium
                        </h2>
                    </Reveal>
                    <Reveal className="flex justify-center mt-6">
                        <p className="max-w-lg text-sm sm:text-base text-white/55 leading-relaxed mx-auto">
                            Our all-in-one customer engagement & sales platform — AI chatbots, CRM,
                            automation and campaigns in one place.
                        </p>
                    </Reveal>
                </div>

            </div>

            <div
                className="mt-14 flex flex-col md:flex-row h-[640px] md:h-[420px] gap-3 md:gap-4"
            >
                {tiles.map((t, i) => {
                    const isActive = active === i;
                    return (
                        <motion.div
                            key={t.t}
                            onMouseEnter={() => setActive(i)}
                            onMouseLeave={() => setActive(i)}
                            animate={{ flexGrow: isActive ? (typeof window !== "undefined" && window.innerWidth < 768 ? 6 : 5) : 1 }}
                            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="relative h-full min-w-0 cursor-pointer overflow-hidden rounded-2xl bg-white/5"
                            style={{ flexBasis: 0 }}
                        >
                            <img
                                src={t.img}
                                alt={t.t}
                                className="absolute inset-0 h-full w-full object-cover transition-all duration-700"
                                style={{
                                    filter: isActive ? "grayscale(0) brightness(1)" : "grayscale(1) brightness(0.45)",
                                }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
                            <AnimatePresence>
                                {!isActive && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="absolute inset-0 flex items-center justify-center px-4"
                                    >
                                        <div className="text-center text-sm font-semibold leading-tight text-white tracking-wide uppercase">
                                            {t.t}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <AnimatePresence>
                                {isActive && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.4, delay: 0.15 }}
                                        className="absolute inset-0 flex flex-col justify-between p-6 md:p-7"
                                    >
                                        <h3 className="text-xl md:text-3xl font-semibold text-white">{t.t}</h3>
                                        <p className="max-w-sm text-xs md:text-sm font-medium text-white/95 leading-relaxed">{t.body}</p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    );
                })}
            </div>

            <div className="mt-10 flex justify-center">
                <Button href="https://app.saleszium.com" text="Visit Saleszium" />
            </div>
        </section>
    );
}

/* ============================================================ SERVICE 02 */
export function ServiceMarketing() {
    const rows = [
        { n: "01.", t: "Pet-first social network", count: "Feed · Stories · Reels", img: IMG.mk1, body: "A feed, stories and reels made for pets and the people who love them." },
        { n: "02.", t: "Digital health passport", count: "Vaccines · Vitals · Reminders", img: IMG.mk2, body: "Every vaccination, medication and vital in one place, with care reminders." },
        { n: "03.", t: "Local pet community", count: "Circles · Vets · Adoption", img: IMG.mk3, body: "Circles, playdates, vet discovery, adoption and lost & found near you." },
    ];
    const [open, setOpen] = useState(0);
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
            <div className="grid items-start gap-8 md:grid-cols-12">
                <div className="relative md:col-span-5">
                    {/* Large Background Number */}
                    <div className="absolute top-0 left-0 select-none pointer-events-none z-0">
                        <Reveal>
                            <div className="font-display text-[150px] sm:text-[240px] md:text-[340px] lg:text-[420px] leading-none font-semibold bg-gradient-to-b from-white/[0.01] to-white/[0.2] bg-clip-text text-transparent">
                                02
                            </div>
                        </Reveal>
                    </div>
                    {/* Foreground Title */}
                    <div className="relative z-10 mt-[100px] sm:mt-[160px] md:mt-[230px] lg:mt-[280px] pb-2">
                        <Reveal>
                            <h2 className="font-display text-4xl sm:text-6xl md:text-9xl font-semibold tracking-tight text-white leading-none">
                                Furrcircle
                            </h2>
                        </Reveal>
                    </div>
                </div>
                <Reveal className="md:col-span-4 mt-4 md:mt-[160px] md:pt-4 lg:mt-[300px] md:pl-24">
                    <p className="max-w-sm text-sm text-white/60">
                        India's all-in-one app for pet parents — social, health and community in one place.
                    </p>
                </Reveal>
                <Reveal className="md:col-span-3 md:pt-10 md:text-right">
                    <a href="https://furrcircle.com" target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 border-b border-white/60 pb-1 text-sm font-medium text-white hover:text-white/80 transition-colors">
                        Visit Furrcircle <ArrowUpRight className="size-3.5" />
                    </a>
                </Reveal>
            </div>

            <div className="mt-12 md:ml-64 border-t border-white/10">
                {rows.map((r, i) => {
                    const isOpen = open === i;
                    return (
                        <Reveal key={r.n} delay={i * 0.08}>
                            <div className="border-b border-white/10">
                                <button
                                    onClick={() => setOpen(isOpen ? -1 : i)}
                                    className="grid w-full grid-cols-12 items-center gap-4 py-6 text-left cursor-pointer"
                                >
                                    <div className="col-span-1 text-xs text-white/40">{r.n}</div>
                                    <div className="col-span-9 md:col-span-7 text-base font-medium text-white md:text-lg">{r.t}</div>
                                    <div className="col-span-3 hidden text-xs text-white/40 md:block">
                                        {isOpen ? `[ ${r.count} ]` : ""}
                                    </div>
                                    <div className="col-span-2 md:col-span-1 flex justify-end">
                                        <span className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white">
                                            {isOpen ? <Minus className="size-4" /> : <Plus className="size-4" />}
                                        </span>
                                    </div>
                                </button>
                                <AnimatePresence initial={false}>
                                    {isOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                            className="overflow-hidden"
                                        >
                                            <div className="grid grid-cols-12 gap-6 pb-8 md:pl-[8.33%]">
                                                <div className="col-span-12 md:col-span-5 overflow-hidden rounded-xl">
                                                    <img src={r.img} alt={r.t} className="aspect-[16/10] w-full object-cover" />
                                                </div>
                                                <div className="col-span-12 md:col-span-6 md:col-start-7 text-sm leading-relaxed text-white/60">
                                                    {r.body}
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}

/* ============================================================ SERVICE 03 */
const INTERACTION = [
    {
        icon: "https://framerusercontent.com/images/j6HWn7LptAhxihEwJfKHn7UhIR4.svg",
        t: "UI/UX Design",
        bullets: ["User research", "Product & UX design", "High-fidelity prototypes"],
        badge: "Figma to ship",
        kind: "STRATEGIC",
    },
    {
        icon: "https://framerusercontent.com/images/hwD6BrZM6gkv12RiOnA4NwcWcQ.svg",
        t: "SaaS & MVP",
        bullets: ["Rapid MVP build", "Multi-tenant SaaS", "Launch-ready in weeks"],
        badge: "For founders",
        kind: "RAPID",
    },
    {
        icon: "https://framerusercontent.com/images/yUDZLgc27PaBBL69prsPLhFpg.png",
        t: "Cloud & DevOps",
        bullets: ["Cloud architecture", "CI/CD pipelines", "Deploy & scale"],
        badge: "100% On-time",
        kind: "RELIABLE",
    },
    {
        icon: "https://framerusercontent.com/images/OPY249jgxIS4H4NfL7ncanmiJWU.png",
        t: "Mobile Apps",
        bullets: ["iOS & Android", "One codebase", "Push & realtime"],
        badge: "Cross-platform",
        kind: "PROFESSIONAL",
    },
    {
        icon: "https://framerusercontent.com/images/6WJhpchqkcptppty6gWho8qPTQ4.png",
        t: "E-Commerce",
        bullets: ["Custom storefronts", "Inventory sync", "Payment gateways"],
        badge: "Storefronts",
        kind: "COMMERCE",
    },
];

export function ServiceInteraction() {
    const [cardWidth, setCardWidth] = useState(360);
    const gap = 24;
    const step = cardWidth + gap;
    const [active, setActive] = useState(Math.floor(INTERACTION.length / 2));
    const containerRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);

    React.useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 480) {
                setCardWidth(290);
            } else if (window.innerWidth < 768) {
                setCardWidth(320);
            } else {
                setCardWidth(360);
            }
        };
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const snapTo = (index: number) => {
        const clamped = Math.max(0, Math.min(INTERACTION.length - 1, index));
        setActive(clamped);
    };

    return (
        <section className="relative overflow-hidden py-16 md:py-24 text-white">
            {/* Header */}
            <div className="relative flex flex-col items-center text-center">
                {/* Large Background Number */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 select-none pointer-events-none z-0 w-full flex justify-center">
                    <Reveal>
                        <div className="font-display text-[150px] sm:text-[240px] md:text-[340px] lg:text-[420px] leading-none font-semibold bg-gradient-to-b from-white/[0.01] to-white/[0.2] bg-clip-text text-transparent">
                            03
                        </div>
                    </Reveal>
                </div>

                {/* Foreground Title & Text - Positioned at the bottom of the number */}
                <div className="relative z-10 mt-[100px] sm:mt-[160px] md:mt-[230px] lg:mt-[280px] pb-6 md:pb-12">
                    <Reveal>
                        <h2 className="font-display text-4xl sm:text-6xl md:text-9xl font-semibold tracking-tight text-white leading-none">
                            Rhinon Labs
                        </h2>
                    </Reveal>
                    <Reveal className="flex justify-center mt-6">
                        <p className="max-w-lg text-sm sm:text-base text-white/55 leading-relaxed mx-auto">
                            Our in-house product studio — it designs, builds, deploys and supports our
                            products, and takes on select client work. It speaks for itself.
                        </p>
                    </Reveal>
                </div>
                {/* <h2 className="relative text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                    Rhinon Labs
                </h2>
                <p className="relative mx-auto mt-6 max-w-md text-xs sm:text-sm md:text-base text-white/50 leading-relaxed">
                    Our in-house product studio — it designs, builds, deploys and supports our
                    products, and takes on select client work. It speaks for itself.
                </p> */}
                <a href="https://rhinonlabs.com" target="_blank" rel="noreferrer" className="relative mt-6 inline-flex items-center gap-1.5 border-b border-white/60 pb-1 text-sm font-medium text-white hover:text-white/80 transition-colors">
                    Visit Rhinon Labs <ArrowUpRight className="size-3.5" />
                </a>
            </div>

            {/* Draggable cards */}
            <div ref={containerRef} className="relative mt-16">
                {/* edge fades */}
                <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-20 md:w-64 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
                <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-20 md:w-64 bg-gradient-to-l from-[#0a0a0a] to-transparent" />

                <motion.div
                    className="flex cursor-grab items-stretch active:cursor-grabbing"
                    style={{
                        x,
                        gap: `${gap}px`,
                        paddingLeft: `calc(50% - ${cardWidth / 2}px)`,
                        paddingRight: `calc(50% - ${cardWidth / 2}px)`,
                    }}
                    drag="x"
                    dragConstraints={{
                        left: -(INTERACTION.length - 1) * step,
                        right: 0,
                    }}
                    dragElastic={0.15}
                    animate={{ x: -active * step }}
                    transition={{ type: "spring", stiffness: 260, damping: 32 }}
                    onDragEnd={(_, info) => {
                        const offset = info.offset.x + info.velocity.x * 0.2;
                        const delta = Math.round(-offset / step);
                        snapTo(active + delta);
                    }}
                >
                    {INTERACTION.map((it, i) => {
                        const isActive = i === active;
                        return (
                            <motion.div
                                key={it.t}
                                onClick={() => snapTo(i)}
                                animate={{
                                    scale: isActive ? 1 : 0.92,
                                    opacity: isActive ? 1 : 0.55,
                                }}
                                transition={{ type: "spring", stiffness: 240, damping: 28 }}
                                className={`shrink-0 select-none rounded-[24px] border p-6 backdrop-blur-sm ${isActive
                                    ? "border-white/15 shadow-[0_30px_80px_-30px_rgba(255,255,255,0.15)]"
                                    : "border-white/5"
                                    }`}
                                style={{ width: cardWidth }}
                            >
                                <div className="flex items-start gap-4">
                                    <img
                                        src={it.icon}
                                        alt=""
                                        draggable={false}
                                        className="size-12 shrink-0 object-contain"
                                    />
                                    <h3 className="mt-1 text-lg md:text-xl font-semibold tracking-tight">{it.t}</h3>
                                </div>
                                <ul className="mt-6 space-y-3 text-xs md:text-sm text-white/65">
                                    {it.bullets.map((b) => (
                                        <li key={b} className="flex items-center gap-2">
                                            <Plus className="size-3 text-white/40" />
                                            {b}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-4 text-xs">
                                    <span className="text-white/45">{it.badge}</span>
                                    <span className="font-medium tracking-[0.2em] text-white/80">
                                        {it.kind}
                                    </span>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* dots */}
                <div className="mt-10 flex items-center justify-center gap-2 rounded-full">
                    <div className="flex items-center gap-2 rounded-full bg-white/5 px-4 py-2 backdrop-blur">
                        {INTERACTION.map((_, i) => (
                            <button
                                key={i}
                                onClick={() => snapTo(i)}
                                aria-label={`Go to slide ${i + 1}`}
                                className={`h-1.5 rounded-full transition-all ${i === active ? "w-6 bg-white" : "w-1.5 bg-white/30 hover:bg-white/60"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
