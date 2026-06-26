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
        { t: "Brand Strategy", img: IMG.brand1, body: "Defining timeless identities through refined and purposeful design." },
        { t: "Visual Heritage", img: IMG.brand2, body: "Preserving brand essence through enduring visual language." },
        { t: "Digital Identity", img: IMG.brand3, body: "Elevating digital presence through modern and intuitive design." },
        { t: "Motion & Style", img: IMG.brand4, body: "Crafting kinetic systems that bring brands to life." },
    ];
    const [active, setActive] = useState(2);
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
            <div className="relative flex flex-col items-center text-center">
                <Reveal>
                    <div className="font-display text-[100px] md:text-[200px] leading-none font-medium text-white/[0.06]">
                        01
                    </div>
                </Reveal>
                <Reveal className="-mt-10 md:-mt-28">
                    <h2 className="font-display text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight">
                        Brand Identity
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="mt-6 max-w-md text-sm text-white/55">
                        Elevating brand presence through cohesive visual systems and creative storytelling
                        across global markets.
                    </p>
                </Reveal>
            </div>

            <div
                className="mt-14 flex flex-col md:flex-row h-[640px] md:h-[420px] gap-3 md:gap-4"
                onMouseLeave={() => setActive(2)}
            >
                {tiles.map((t, i) => {
                    const isActive = active === i;
                    return (
                        <motion.div
                            key={t.t}
                            onMouseEnter={() => setActive(i)}
                            animate={{ flexGrow: isActive ? (window.innerWidth < 768 ? 6 : 5) : 1 }}
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
                <Button text="View More" />
            </div>
        </section>
    );
}

/* ============================================================ SERVICE 02 */
export function ServiceMarketing() {
    const rows = [
        { n: "01.", t: "SEO Strategic Audit", count: "248+ Project Done", img: IMG.mk1, body: "Significant Cost Reduction Significant Cost Reduction Significant Cost." },
        { n: "02.", t: "Performance Marketing", count: "168+ Project Done", img: IMG.mk2, body: "Maximizing campaign ROI through data-driven and scalable strategies." },
        { n: "03.", t: "Growth & Optimization", count: "243+ Project Done", img: IMG.mk3, body: "Accelerating business scale through continuous and rigorous optimization." },
    ];
    const [open, setOpen] = useState(0);
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
            <div className="grid items-start gap-8 md:grid-cols-12">
                <div className="relative md:col-span-5">
                    <Reveal>
                        <div className="pointer-events-none absolute -top-8 left-0 font-display text-[120px] md:text-[220px] font-semibold leading-none tracking-tight text-white/[0.07]">
                            02
                        </div>
                        <h2 className="relative font-display text-4xl sm:text-6xl md:text-8xl font-semibold tracking-tight text-white">
                            Marketing
                        </h2>
                    </Reveal>
                </div>
                <Reveal className="md:col-span-4 md:pt-10">
                    <p className="max-w-sm text-sm text-white/60">
                        Redefining digital standards through award-winning design and strategic innovation across
                    </p>
                </Reveal>
                <Reveal className="md:col-span-3 md:pt-10 md:text-right">
                    <a href="#contact" className="inline-flex items-center gap-1 border-b border-white/60 pb-1 text-sm font-medium text-white hover:text-white/80 transition-colors">
                        Start Project <ArrowUpRight className="size-3.5" />
                    </a>
                </Reveal>
            </div>

            <div className="mt-12 border-t border-white/10">
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
        t: "UI/UX Strategy",
        bullets: ["User behavior research", "Conversion mapping", "High-fidelity wireframing"],
        badge: "150+ Projects",
        kind: "STRATEGIC",
    },
    {
        icon: "https://framerusercontent.com/images/hwD6BrZM6gkv12RiOnA4NwcWcQ.svg",
        t: "SASS Product MVP",
        bullets: ["MVP rapid prototyping", "SaaS architecture design", "Go-to-market strategy"],
        badge: "Global Service",
        kind: "NATIVE",
    },
    {
        icon: "https://framerusercontent.com/images/yUDZLgc27PaBBL69prsPLhFpg.png",
        t: "No-Code Developer",
        bullets: ["No-code development", "Workflow automation", "Custom CRM building"],
        badge: "100% On-time",
        kind: "RELIABLE",
    },
    {
        icon: "https://framerusercontent.com/images/OPY249jgxIS4H4NfL7ncanmiJWU.png",
        t: "Mobile App",
        bullets: ["Brand identity design", "Scalable design systems", "Interactive prototypes"],
        badge: "Est. 2020",
        kind: "PROFESSIONAL",
    },
    {
        icon: "https://framerusercontent.com/images/6WJhpchqkcptppty6gWho8qPTQ4.png",
        t: "E-Commerce",
        bullets: ["Custom storefront design", "Inventory sync automation", "Payment gateway setup"],
        badge: "Shopify Experts",
        kind: "CERTIFIED",
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
            <div className="relative mx-auto max-w-5xl px-6 text-center">
                <div
                    aria-hidden
                    className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[55%] select-none text-[8rem] sm:text-[12rem] md:text-[18rem] font-bold leading-none tracking-tight text-white/[0.06]"
                >
                    03
                </div>
                <h2 className="relative text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight">
                    Interaction
                </h2>
                <p className="relative mx-auto mt-6 max-w-md text-xs sm:text-sm md:text-base text-white/50 leading-relaxed">
                    Crafting high-end digital interfaces that blend seamless functionality with bold,
                    modern aesthetics.
                </p>
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
