"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, animate } from "framer-motion";
import { Globe } from "lucide-react";
import Reveal from "./Reveal";
import Button from "@/components/Button";

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

export default function Stats() {
    return (
        <>
            {/* DESKTOP VERSION */}
            <section className="hidden lg:block relative mx-auto max-w-[1600px] px-20 py-24 bg-black text-white">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    {/* Left Column: Car Image */}
                    <Reveal className="lg:col-span-4">
                        <img
                            src="/car.avif"
                            alt="Porsche sports car"
                            className="w-full aspect-[16/10] rounded-3xl object-cover border border-white/10"
                        />
                    </Reveal>

                    {/* Middle Column: Text and Button */}
                    <div className="lg:col-span-8 flex flex-col gap-6">
                        {/* Globe Icon & Title */}
                        <div className="flex flex-col">
                            <Reveal delay={0.2}>
                                <div className="flex flex-row justify-between">
                                    <Globe className="size-8 text-white mt-1 shrink-0" />
                                    <h2 className="text-3xl md:text-[50px] font-semibold leading-tight tracking-tight text-white">
                                        Defining the future of brands
                                    </h2>
                                </div>
                            </Reveal>
                            <Reveal delay={0.4}>
                                <h2 className="text-3xl md:text-[50px] font-semibold leading-tight tracking-tight text-white">
                                    through design, digital excellence and
                                </h2>
                            </Reveal>
                            <Reveal delay={0.6}>
                                <h2 className="text-3xl md:text-[50px] font-semibold leading-tight tracking-tight text-white">
                                    <span className="text-white/40"> human-centric storytelling</span>
                                </h2>
                            </Reveal>
                        </div>

                        {/* Paragraph & Button */}
                        <div className="flex justify-between">
                            <div className=" flex flex-col justify-between">
                                <Reveal>
                                    <p className="text-[13px] leading-relaxed text-white/60 max-w-[450px]">
                                        <span>Redefining digital standards with award-winning
                                            design across 20+ countries.</span>
                                    </p>
                                </Reveal>

                                <Reveal>
                                    <Button href="#contact" text="About Norvin" />
                                </Reveal>
                            </div>
                            <Reveal className="lg:col-span-3 flex justify-end">
                                <img
                                    src="/elementsvg.avif"
                                    alt="Geometric design element"
                                    className="w-full max-w-[180px] opacity-80"
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/10 my-16" />

                {/* Bottom Row: Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    <Reveal className="text-left">
                        <div className="font-display text-7xl md:text-8xl font-medium tracking-tight text-white leading-none">
                            <CountUp to={35} suffix="+" />
                        </div>
                        <div className="mt-4 text-[15px] text-white/50 leading-relaxed">
                            Awards &<br />Recognizations
                        </div>
                    </Reveal>

                    <Reveal className="text-center">
                        <div className="font-display text-7xl md:text-8xl font-medium tracking-tight text-white leading-none">
                            <CountUp to={65} suffix="" />
                        </div>
                        <div className="mt-4 text-[15px] text-white/50 leading-relaxed">
                            Satisfied Clients &<br />Partners
                        </div>
                    </Reveal>

                    <Reveal className="text-right">
                        <div className="font-display text-7xl md:text-8xl font-medium tracking-tight text-white leading-none">
                            <CountUp to={98} suffix="+" />
                        </div>
                        <div className="mt-4 text-[15px] text-white/50 leading-relaxed">
                            Projects Completed<br />Worldwide
                        </div>
                    </Reveal>
                </div>
            </section>

            {/* MOBILE & TABLET VERSION */}
            <section className="lg:hidden relative mx-auto max-w-[1600px] px-6 sm:px-12 py-16 bg-black text-white">
                <div className="flex flex-col gap-10">
                    {/* Porsche Image */}
                    <Reveal>
                        <img
                            src="/car.avif"
                            alt="Porsche sports car"
                            className="w-full aspect-[16/10] rounded-2xl object-cover border border-white/10"
                        />
                    </Reveal>

                    {/* Content */}
                    <div className="flex flex-col gap-8">
                        {/* Globe & Title */}
                        <div className="flex flex-col gap-4">
                            <Reveal delay={0.2}>
                                <Globe className="size-6 text-white shrink-0" />
                             </Reveal>
                            <Reveal delay={0.4}>
                                <h2 className="text-3xl sm:text-4xl font-semibold leading-tight tracking-tight text-white">
                                    Defining the future of brands through design, digital excellence and{" "}
                                    <span className="text-white/40">human-centric storytelling</span>
                                </h2>
                            </Reveal>
                        </div>

                        {/* Paragraph, Button, and Geometric Element */}
                        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
                            <div className="flex flex-col gap-6 items-start max-w-md">
                                <Reveal>
                                    <p className="text-sm leading-relaxed text-white/60">
                                        Redefining digital standards with award-winning design across 20+ countries.
                                    </p>
                                </Reveal>
                                <Reveal>
                                    <Button href="#contact" text="About Norvin" />
                                </Reveal>
                            </div>
                            <Reveal className="flex justify-start md:justify-end shrink-0">
                                <img
                                    src="/elementsvg.avif"
                                    alt="Geometric design element"
                                    className="w-28 opacity-60"
                                />
                            </Reveal>
                        </div>
                    </div>
                </div>

                {/* Divider Line */}
                <div className="w-full h-px bg-white/10 my-12" />

                {/* Bottom Row: Stats */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
                    <Reveal className="text-left">
                        <div className="font-display text-6xl sm:text-7xl font-medium tracking-tight text-white leading-none">
                            <CountUp to={35} suffix="+" />
                        </div>
                        <div className="mt-3 text-sm text-white/50 leading-relaxed">
                            Awards &<br />Recognizations
                        </div>
                    </Reveal>

                    <Reveal className="text-left sm:text-center">
                        <div className="font-display text-6xl sm:text-7xl font-medium tracking-tight text-white leading-none">
                            <CountUp to={65} suffix="" />
                        </div>
                        <div className="mt-3 text-sm text-white/50 leading-relaxed">
                            Satisfied Clients &<br />Partners
                        </div>
                    </Reveal>

                    <Reveal className="text-left sm:text-right">
                        <div className="font-display text-6xl sm:text-7xl font-medium tracking-tight text-white leading-none">
                            <CountUp to={98} suffix="+" />
                        </div>
                        <div className="mt-3 text-sm text-white/50 leading-relaxed">
                             Projects Completed<br />Worldwide
                        </div>
                    </Reveal>
                </div>
            </section>
        </>
    );
}
