"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Reveal from "./Reveal";

const RECOGS = [
    { img: "https://framerusercontent.com/images/QGWM2wh1FhSXwwCgj5OwfMJELRM.png", name: "PRODUCT ENGINEERING", desc: "Web, mobile & SaaS" },
    { img: "https://framerusercontent.com/images/WDx7bTWoPj1VrQwYMPTL8JdhaQA.png", name: "AI & AUTOMATION", desc: "Agents, RAG & workflows" },
    { img: "https://framerusercontent.com/images/wK2FhKYSAKcCoeCO2CHsoSX506Y.png", name: "PRODUCT DESIGN", desc: "UI/UX & branding" },
    { img: "https://framerusercontent.com/images/z3EVlv7PJ0r24sAph7fO38AhDg.png", name: "CLOUD & DEVOPS", desc: "AWS, CI/CD & scale" },
    { img: "https://framerusercontent.com/images/5Jxk2EPVsxFPOX50Ru6ZIaPKQoY.png", name: "DATA & ML", desc: "Pipelines & models" },
    { img: "https://framerusercontent.com/images/hLfcbhtQAGM0iFbLcbEfMViSi0.png", name: "INTEGRATIONS", desc: "APIs & third-party" },
    { img: "https://framerusercontent.com/images/T93AD43QxOG2hwxPNyxgo7pI.png", name: "SUPPORT & GROWTH", desc: "Maintenance & scale" },
    { img: "https://framerusercontent.com/images/QGWM2wh1FhSXwwCgj5OwfMJELRM.png", name: "PRODUCT ENGINEERING", desc: "Web, mobile & SaaS" },
    { img: "https://framerusercontent.com/images/WDx7bTWoPj1VrQwYMPTL8JdhaQA.png", name: "AI & AUTOMATION", desc: "Agents, RAG & workflows" },
    { img: "https://framerusercontent.com/images/wK2FhKYSAKcCoeCO2CHsoSX506Y.png", name: "PRODUCT DESIGN", desc: "UI/UX & branding" },
    { img: "https://framerusercontent.com/images/z3EVlv7PJ0r24sAph7fO38AhDg.png", name: "CLOUD & DEVOPS", desc: "AWS, CI/CD & scale" },
    { img: "https://framerusercontent.com/images/5Jxk2EPVsxFPOX50Ru6ZIaPKQoY.png", name: "DATA & ML", desc: "Pipelines & models" },
    { img: "https://framerusercontent.com/images/hLfcbhtQAGM0iFbLcbEfMViSi0.png", name: "INTEGRATIONS", desc: "APIs & third-party" },
    { img: "https://framerusercontent.com/images/T93AD43QxOG2hwxPNyxgo7pI.png", name: "SUPPORT & GROWTH", desc: "Maintenance & scale" },
];

function RecognitionsMarquee() {
    const items = [...RECOGS, ...RECOGS];
    const trackRef = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const speedRef = useRef(60); // px per second target
    const currentSpeedRef = useRef(60);
    const hoverRef = useRef(false);
    const draggingRef = useRef(false);
    const halfWidthRef = useRef(0);

    useEffect(() => {
        const measure = () => {
            if (trackRef.current) halfWidthRef.current = trackRef.current.scrollWidth / 2;
        };
        measure();
        window.addEventListener("resize", measure);
        return () => window.removeEventListener("resize", measure);
    }, []);

    useEffect(() => {
        const unsubscribe = x.on("change", (latest) => {
            const half = halfWidthRef.current;
            if (!half) return;
            if (latest <= -half) {
                x.set(latest + half);
            } else if (latest > 0) {
                x.set(latest - half);
            }
        });
        return () => unsubscribe();
    }, [x]);

    useAnimationFrame((_, delta) => {
        if (draggingRef.current) return;
        const target = hoverRef.current ? 15 : speedRef.current;
        currentSpeedRef.current += (target - currentSpeedRef.current) * 0.05;
        const half = halfWidthRef.current;
        if (!half) return;
        const next = x.get() - (currentSpeedRef.current * delta) / 1000;
        x.set(next);
    });

    return (
        <div
            className="relative mt-16 cursor-grab overflow-hidden active:cursor-grabbing"
            style={{
                maskImage: "linear-gradient(to right, transparent, black 33%, black 67%, transparent)",
                WebkitMaskImage: "linear-gradient(to right, transparent, black 33%, black 67%, transparent)",
            }}
            onMouseEnter={() => (hoverRef.current = true)}
            onMouseLeave={() => (hoverRef.current = false)}
        >
            <motion.div
                ref={trackRef}
                className="flex w-max gap-5 px-3"
                style={{ x }}
                drag="x"
                dragConstraints={false as unknown as undefined}
                dragMomentum={true}
                dragElastic={0.05}
                onDragStart={() => (draggingRef.current = true)}
                onDragEnd={() => {
                    draggingRef.current = false;
                }}
            >
                {items.map((r, i) => (
                    <div
                        key={`${r.name}-${i}`}
                        className="group w-[180px] shrink-0 select-none"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-[24px] border flex items-center justify-center transition duration-500 opacity-100 group-hover:opacity-100 border-white/20 group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                            <img
                                src={r.img}
                                alt={r.name}
                                draggable={false}
                                className="w-[120px] h-[120px] rounded-[18px] object-cover transition duration-500 group-hover:scale-105"
                            />
                        </div>
                        <div className="mt-4 text-center transition duration-500 opacity-60 group-hover:opacity-100">
                            <div className="text-white text-[15px] font-bold tracking-tight">
                                {r.name}
                            </div>
                            <div className="mt-1 text-xs text-white/40 font-medium">{r.desc}</div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
}

export default function Recognitions() {
    return (
        <section className="relative overflow-hidden pb-24 pt-0">
            <img
                src="https://framerusercontent.com/images/T7fAli8vfIe8NKa9eaqa4plcY6c.svg?width=1352&height=69"
                alt=""
                aria-hidden
                className="mx-auto block w-full max-w-[1352px] opacity-90"
            />

            <div className="mx-auto max-w-[1400px] px-6 pt-16 text-center">
                <Reveal>
                    <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs text-white/80">
                        <span className="size-1.5 rounded-full bg-white" />
                        What we do
                    </div>
                </Reveal>
                <Reveal>
                    <h2 className="mt-6 font-display text-5xl sm:text-7xl lg:text-[8rem] font-semibold tracking-[-0.04em] md:leading-[0.95]">
                        Capabilities
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-white/60">
                        “The engineering DNA behind every Rhinon product — product engineering, AI,
                        design and cloud, all in-house.”
                    </p>
                </Reveal>
            </div>

            <RecognitionsMarquee />
        </section>
    );
}
