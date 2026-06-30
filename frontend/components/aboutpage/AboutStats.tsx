"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Globe } from "lucide-react";
import Reveal from "@/components/homepage/Reveal";

function CountUp({ to, suffix = "" }: { to: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const inView = useInView(ref, { once: true });
    const v = useMotionValue(0);
    const [val, setVal] = useState(0);

    useEffect(() => {
        if (!inView) return;
        const c = animate(v, to, { duration: 1.6, ease: [0.22, 1, 0.36, 1] });
        const unsub = v.on("change", (x) => setVal(Math.round(x)));
        return () => {
            c.stop();
            unsub();
        };
    }, [inView, to, v]);

    return (
        <span ref={ref}>
            {val}
            {suffix}
        </span>
    );
}

export default function AboutStats() {
    return (
        <section className="relative mx-auto max-w-[1400px] px-6 py-16 bg-black text-white">
            {/* Top Widescreen Car Image */}
            <Reveal>
                <div className="w-full overflow-hidden rounded-[24px] md:rounded-[32px] border border-white/10">
                    <img
                        src="/car.avif"
                        alt="Porsche sports car"
                        className="w-full aspect-[16/9] md:aspect-[21/9] object-cover"
                    />
                </div>
            </Reveal>

            {/* Middle Section: Text & Geometric element */}
            <div className="flex justify-between w-full flex-col lg:flex-row gap-8 mt-12 md:mt-16 items-start">
                {/* Globe + Text */}
                <div className="lg:max-w-[70%] w-full">
                    <Reveal>
                        <h2 className="text-2xl sm:text-3xl md:text-[40px] font-semibold leading-tight tracking-tight text-white">
                            <span className="inline-block mr-6 md:mr-64 align-middle -mt-1 md:-mt-2">
                                <Globe className="size-6 md:size-8 text-white" />
                            </span>
                            Defining the future of brands through design, digital excellence and human-centric storytelling, crafting{" "}
                            <span className="text-white/30">meaningful experiences that inspire connection and lasting impact.</span>
                        </h2>
                    </Reveal>
                </div>

                {/* Geometric element outline */}
                <div className="flex justify-start lg:justify-end lg:self-end shrink-0 mt-4 lg:mt-0">
                    <Reveal>
                        <img
                            src="/elementsvg.avif"
                            alt="Geometric outline element"
                            className="w-24 md:w-32 lg:w-36 opacity-60 object-contain"
                        />
                    </Reveal>
                </div>
            </div>

            {/* Divider line */}
            <div className="w-full h-px bg-white/10 my-12 md:my-16" />

            {/* Bottom Row: Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
                <Reveal className="text-left">
                    <div className="font-display text-6xl md:text-[80px] font-medium tracking-tight text-white leading-none">
                        <CountUp to={35} suffix="+" />
                    </div>
                    <div className="mt-3 text-sm md:text-base text-white/50 leading-relaxed">
                        Awards &<br />Recognizations
                    </div>
                </Reveal>

                <Reveal className="text-left md:text-center">
                    <div className="font-display text-6xl md:text-[80px] font-medium tracking-tight text-white leading-none">
                        <CountUp to={65} suffix="" />
                    </div>
                    <div className="mt-3 text-sm md:text-base text-white/50 leading-relaxed">
                        Satisfied Clients &<br />Partners
                    </div>
                </Reveal>

                <Reveal className="text-left md:text-right">
                    <div className="font-display text-6xl md:text-[80px] font-medium tracking-tight text-white leading-none">
                        <CountUp to={98} suffix="+" />
                    </div>
                    <div className="mt-3 text-sm md:text-base text-white/50 leading-relaxed">
                        Projects Completed<br />Worldwide
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
