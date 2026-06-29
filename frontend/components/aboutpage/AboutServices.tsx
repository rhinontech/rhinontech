"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/homepage/Reveal";
import { IMG } from "@/components/homepage/constants";

export default function AboutServices() {
    const services = [
        {
            title: "Visual Heritage",
            img: IMG.brand2,
            desc: "Crafting iconic legacies through strategic and elegant design.",
        },
        {
            title: "Motion & Style",
            img: IMG.brand4,
            desc: "Bringing concepts to life through fluid and expressive design.",
        },
        {
            title: "Brand Strategy",
            img: IMG.brand1,
            desc: "Defining timeless identities through refined and purposeful design.",
        },
    ];

    return (
        <section className="relative w-full bg-black text-white py-16 md:py-24 overflow-hidden">
            {/* Top Logo Divider */}
            <div className="w-full relative z-10 px-6 mb-12">
                <motion.img
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                    src="https://framerusercontent.com/images/T7fAli8vfIe8NKa9eaqa4plcY6c.svg?width=1352&height=69"
                    alt=""
                    aria-hidden
                    className="mx-auto block w-full max-w-[1352px]"
                />
            </div>

            <div className="mx-auto max-w-[1400px] px-6">
                {/* Header */}
                <div className="flex flex-col items-center text-center">
                    <Reveal>
                        <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-white/80">
                            <span className="size-1.5 rounded-full bg-white animate-pulse" />
                            Our Services
                        </span>
                    </Reveal>
                    <Reveal delay={0.15}>
                        <h2 className="font-display text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tight mt-6 leading-none">
                            What we do
                        </h2>
                    </Reveal>
                    <Reveal delay={0.3} className="flex justify-center items-center">
                        <p className="mt-6 max-w-lg text-sm sm:text-base text-white/60 leading-relaxed">
                            Elevating brand presence through cohesive visual systems and creative storytelling across global markets.
                        </p>
                    </Reveal>
                </div>

                {/* Vertical Stacked Cards */}
                <div className="mt-16 md:mt-24 flex flex-col gap-10 max-w-[660px] mx-auto w-full">
                    {services.map((s, idx) => (
                        <Reveal key={s.title} delay={idx * 0.15}>
                            <div className="relative w-full aspect-[16/10] md:aspect-[14/9] rounded-[24px] md:rounded-[32px] overflow-hidden group cursor-pointer">
                                {/* Background Image */}
                                <img
                                    src={s.img}
                                    alt={s.title}
                                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                                />
                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                                
                                {/* Card Contents */}
                                <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10 z-10 select-none">
                                    <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
                                        {s.title}
                                    </h3>
                                    <p className="text-sm md:text-base text-white/80 max-w-xs md:max-w-sm font-medium leading-relaxed">
                                        {s.desc}
                                    </p>
                                </div>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
