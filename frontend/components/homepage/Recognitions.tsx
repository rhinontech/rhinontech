"use client";

import React, { useRef, useEffect } from "react";
import { motion, useMotionValue, useAnimationFrame } from "framer-motion";
import Reveal from "./Reveal";

const RECOGS = [
    { img: "https://framerusercontent.com/images/QGWM2wh1FhSXwwCgj5OwfMJELRM.png", name: "NOVACORE STUDIO", desc: "Brand Advisory" },
    { img: "https://framerusercontent.com/images/WDx7bTWoPj1VrQwYMPTL8JdhaQA.png", name: "LOGO COMPANY", desc: "Envato Author" },
    { img: "https://framerusercontent.com/images/wK2FhKYSAKcCoeCO2CHsoSX506Y.png", name: "FLUORESCENT", desc: "Best Selling Author" },
    { img: "https://framerusercontent.com/images/z3EVlv7PJ0r24sAph7fO38AhDg.png", name: "FWA HIGHLIGHT", desc: "Cutting-edge Web" },
    { img: "https://framerusercontent.com/images/5Jxk2EPVsxFPOX50Ru6ZIaPKQoY.png", name: "AWWWARDS", desc: "High-Performance Interface" },
    { img: "https://framerusercontent.com/images/hLfcbhtQAGM0iFbLcbEfMViSi0.png", name: "FT FEATURED", desc: "Innovative Digital Layout" },
    { img: "https://framerusercontent.com/images/T93AD43QxOG2hwxPNyxgo7pI.png", name: "FUTURE VISIONARY", desc: "Scalable Digital Systems" },
    { img: "https://framerusercontent.com/images/QGWM2wh1FhSXwwCgj5OwfMJELRM.png", name: "NOVACORE STUDIO", desc: "Brand Advisory" },
    { img: "https://framerusercontent.com/images/WDx7bTWoPj1VrQwYMPTL8JdhaQA.png", name: "LOGO COMPANY", desc: "Envato Author" },
    { img: "https://framerusercontent.com/images/wK2FhKYSAKcCoeCO2CHsoSX506Y.png", name: "FLUORESCENT", desc: "Best Selling Author" },
    { img: "https://framerusercontent.com/images/z3EVlv7PJ0r24sAph7fO38AhDg.png", name: "FWA HIGHLIGHT", desc: "Cutting-edge Web" },
    { img: "https://framerusercontent.com/images/5Jxk2EPVsxFPOX50Ru6ZIaPKQoY.png", name: "AWWWARDS", desc: "High-Performance Interface" },
    { img: "https://framerusercontent.com/images/hLfcbhtQAGM0iFbLcbEfMViSi0.png", name: "FT FEATURED", desc: "Innovative Digital Layout" },
    { img: "https://framerusercontent.com/images/T93AD43QxOG2hwxPNyxgo7pI.png", name: "FUTURE VISIONARY", desc: "Scalable Digital Systems" },
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

    useAnimationFrame((_, delta) => {
        if (draggingRef.current) return;
        const target = hoverRef.current ? 15 : speedRef.current;
        currentSpeedRef.current += (target - currentSpeedRef.current) * 0.05;
        const half = halfWidthRef.current;
        if (!half) return;
        let next = x.get() - (currentSpeedRef.current * delta) / 1000;
        if (next <= -half) next += half;
        if (next > 0) next -= half;
        x.set(next);
    });

    return (
        <div
            className="mt-16 cursor-grab overflow-hidden active:cursor-grabbing"
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
                    const half = halfWidthRef.current;
                    if (!half) return;
                    let v = x.get();
                    if (v <= -half) v += half;
                    if (v > 0) v -= half;
                    x.set(v);
                }}
            >
                {items.map((r, i) => (
                    <div
                        key={`${r.name}-${i}`}
                        className="group w-[190px] shrink-0 select-none"
                    >
                        <div className="relative aspect-square overflow-hidden rounded-[24px] border border-white/10 flex items-center justify-center transition duration-500 opacity-100 group-hover:opacity-100 group-hover:border-white/20 group-hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.8)]">
                            <img
                                src={r.img}
                                alt={r.name}
                                draggable={false}
                                className="w-[110px] h-[110px] rounded-[18px] object-cover transition duration-500 group-hover:scale-105"
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
                        Our Certifications
                    </div>
                </Reveal>
                <Reveal>
                    <h2 className="mt-6 font-display text-5xl sm:text-7xl lg:text-[8rem] font-semibold tracking-[-0.04em] md:leading-[0.95]">
                        Recognitions
                    </h2>
                </Reveal>
                <Reveal>
                    <p className="mx-auto mt-8 max-w-xl text-[15px] leading-relaxed text-white/60">
                        “As award-winning digital experts, we leverage proven expertise and official
                        certifications to provide seamless web development, allowing you to stay focused on
                        your core business.”
                    </p>
                </Reveal>
            </div>

            <RecognitionsMarquee />
        </section>
    );
}
