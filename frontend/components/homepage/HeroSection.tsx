"use client";

import React, { useEffect, useRef, useState } from "react";
import {
    motion,
    useScroll,
    useTransform,
    AnimatePresence,
} from "framer-motion";
import { Plus, Star } from "lucide-react";
import Button from "@/components/Button";
import { IMG } from "./constants";

const Instagram = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const Twitter = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const Dribbble = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.15 1-14.88 6.69" />
        <path d="M5.16 19.17c2.25-5.91 7.78-9.91 14.16-9.17" />
    </svg>
);

const AWARDS = [
    { tag: "DRIBBBLE", title: "TOP AGENCY", note: "Dribbble Selected 2026." },
    { tag: "BEHANCE", title: "1ST WINNER", note: "Recognized by Global Entities 2025." },
    { tag: "FWA AWARD", title: "SOTD 2026", note: "FWA Awards UI/UX Collections" },
    { tag: "AWWWARDS", title: "SOTY 2025", note: "Awwwards Winner 2025." },
];

export default function HeroSection() {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
    const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

    const [award, setAward] = useState(0);
    useEffect(() => {
        const i = setInterval(() => setAward((p) => (p + 1) % AWARDS.length), 3200);
        return () => clearInterval(i);
    }, []);

    return (
        <section ref={ref} className="relative min-h-[640px] lg:min-h-[760px] h-auto lg:h-[100svh] w-full overflow-hidden bg-black pb-16 lg:pb-0">
            {/* center notch */}
            <motion.div
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                className="pointer-events-none absolute left-1/2 top-0 z-10 -translate-x-1/2 h-14 w-52"
            >
                <div className="relative w-full h-full">
                    <svg width="208" height="56" viewBox="0 0 208 56" fill="none" className="w-full h-full">
                        <polygon points="0,0 208,0 184,56 24,56" fill="black" />
                        <path d="M 0,0 L 24,56 L 184,56 L 208,0" stroke="rgba(255,255,255,0.12)" strokeWidth="0" fill="none" />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center pb-2">
                        <motion.span
                            initial={{ y: 10, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="flex items-center gap-1.5 text-[15px] font-semibold tracking-tight text-white"
                        >
                            <span className="text-white/90">✺</span>
                            <span>Norvin</span>
                        </motion.span>
                    </div>
                </div>
            </motion.div>
            <motion.div
                className="absolute inset-0 overflow-hidden p-3"
                style={{ y: bgY }}
            >
                <motion.div
                    className="relative h-full w-full rounded-[24px] lg:rounded-[32px] overflow-hidden border border-white/10"
                    initial={{ scale: 1.1, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 1.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <img src={IMG.heroBg} alt="" className="h-full w-full object-cover" />
                    <div className="pointer-events-none absolute inset-y-0 left-[27%] w-px bg-white/10 hidden lg:block" />
                    <div className="pointer-events-none absolute inset-y-0 right-[27%] w-px bg-white/10 hidden lg:block" />
                </motion.div>
            </motion.div>

            {/* corner plus markers */}
            {[
                { pos: "left-[27%] top-[60%]", direction: "top" },
                { pos: "left-[50%] top-[60%]", direction: "bottom" },
                { pos: "left-[73%] top-[60%]", direction: "top" },
            ].map((item, i) => {
                const isFromTop = item.direction === "top";
                return (
                    <motion.div
                        key={i}
                        initial={{ y: isFromTop ? -150 : 150, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.0 + i * 0.12, duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className={`pointer-events-none absolute ${item.pos} hidden lg:block`}
                    >
                        <Plus className="size-4 text-white/40" />
                    </motion.div>
                );
            })}

            <motion.div
                style={{ y: titleY }}
                className="relative z-10 mx-auto flex h-auto lg:h-full w-full flex-col justify-between gap-10 lg:gap-0 px-6 md:px-15 pt-52 lg:pt-28 pb-10"
            >
                {/* Massive wordmark */}
                <div>
                    <NorvinWordmark />
                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.2, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="mt-4 text-[20px] font-semibold leading-[1.1] tracking-tight text-white md:text-[32px]"
                    >
                        <div>Award Winning <br /> Agency</div>
                    </motion.div>
                </div>

                {/* Bottom row */}
                <div className="grid grid-cols-12 items-start lg:items-end gap-8 lg:gap-6">
                    <motion.div
                        initial={{ y: 40, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.4, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="col-span-12 md:col-span-6 lg:col-span-5 space-y-6"
                    >
                        <div className="flex items-center gap-4">
                            <div className="flex -space-x-3">
                                {[IMG.avatar1, IMG.avatar2, IMG.avatar3].map((src) => (
                                    <img
                                        key={src}
                                        src={src}
                                        alt=""
                                        className="size-12 lg:size-14 rounded-full border-2 border-black object-cover"
                                    />
                                ))}
                            </div>
                            <div>
                                <div className="text-2xl lg:text-3xl font-semibold">63k+</div>
                                <div className="text-xs lg:text-sm text-white/60">Clients</div>
                            </div>
                        </div>
                        <p className="max-w-[22rem] text-sm lg:text-[15px] leading-relaxed text-white/75">
                            A global design agency crafting high-end digital products and immersive
                            experiences.
                        </p>
                        <Button href="#contact" text="Our Story" />
                    </motion.div>

                    <motion.div
                        initial={{ y: 30, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 1.6, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="col-span-12 md:col-span-6 lg:col-span-3 flex items-center md:items-end justify-start md:justify-center gap-4"
                    >
                        {[Twitter, Instagram, Dribbble].map((Icon, i) => (
                            <button
                                key={i}
                                className="glass-pill flex size-11 items-center justify-center rounded-full text-white/70 transition hover:text-white"
                            >
                                <Icon className="size-4" />
                            </button>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 1.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                        className="col-span-12 lg:col-span-4"
                    >
                        <AwardCard index={award} setIndex={setAward} />
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}

function NorvinWordmark() {
    const letters = "Norvin".split("");
    return (
        <h1 className="font-display text-[clamp(4.2rem,16vw,24rem)] font-[500] leading-[0.82] tracking-[-0.075em]">
            {letters.map((l, i) => (
                <motion.span
                    key={i}
                    className="inline-block"
                    initial={{ y: "110%", opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.8 + i * 0.06, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                >
                    {l}
                </motion.span>
            ))}
        </h1>
    );
}

function AwardCard({ index, setIndex }: { index: number; setIndex: (i: number) => void }) {
    const a = AWARDS[index];
    return (
        <div className="glass-pill relative overflow-hidden rounded-2xl p-7 pb-5 min-h-[210px]">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4 }}
                    className="text-center"
                >
                    <div className="mb-3 flex items-center justify-center gap-1.5 text-amber-400">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <Star key={i} className="size-3.5 fill-current" />
                        ))}
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <Laurel side="left" />
                        <div>
                            <div className="text-[11px] tracking-[0.3em] text-white/70">{a.tag}</div>
                            <div className="mt-1 font-display text-[32px] font-bold leading-none tracking-tight">{a.title}</div>
                        </div>
                        <Laurel side="right" />
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="mt-6 flex items-end justify-between gap-3">
                <p className="text-[11px] leading-tight text-white/55">{a.note}</p>
                <div className="flex gap-1.5">
                    {AWARDS.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setIndex(i)}
                            className={`h-1 rounded-full transition-all ${i === index ? "w-6 bg-white" : "w-1.5 bg-white/30"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

function Laurel({ side }: { side: "left" | "right" }) {
    return (
        <svg
            width="34"
            height="50"
            viewBox="0 0 34 50"
            className={side === "right" ? "scale-x-[-1]" : ""}
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
        >
            <path d="M30 5 C 18 12, 10 22, 8 30 C 6 38, 10 45, 16 48" />
            <path d="M28 12 q -4 1 -7 4" />
            <path d="M22 20 q -4 1 -7 4" />
            <path d="M16 28 q -4 1 -6 5" />
            <path d="M12 36 q -2 2 -3 6" />
        </svg>
    );
}
