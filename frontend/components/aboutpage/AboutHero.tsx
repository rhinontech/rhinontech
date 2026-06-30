"use client";

import React from "react";
import { motion } from "framer-motion";
import Reveal from "@/components/homepage/Reveal";

export default function AboutHero() {
    return (
        <section className="relative w-full overflow-hidden bg-black pb-12">
            {/* Divider Logo Top SVG */}
            <div className="absolute -top-0.5 left-0 w-full z-10 pointer-events-none px-6 flex justify-center items-center">
                <div className="relative w-full max-w-[1352px] flex justify-center items-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 0.9, scale: 1 }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        src="https://framerusercontent.com/images/T7fAli8vfIe8NKa9eaqa4plcY6c.svg?width=1352&height=69"
                        alt=""
                        aria-hidden
                        className="w-[1352px] min-w-[1352px] h-[69px] opacity-90 select-none"
                    />
                    <div className="absolute inset-0 flex justify-center items-center pointer-events-auto">
                        <motion.span
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                            className="bg-black px-4 text-white font-display text-sm font-medium tracking-[0.25em] uppercase select-none"
                        >
                            Rhinon
                        </motion.span>
                    </div>
                </div>
            </div>

            {/* Main Content Layout */}
            <div className="mx-auto max-w-[1400px] px-6 pt-32 md:pt-32">
                <Reveal>
                    <h1 className="font-display text-[90px] sm:text-[150px] md:text-[200px] lg:text-[250px] font-bold tracking-tighter text-white leading-[0.8] select-none">
                        About
                    </h1>
                </Reveal>

                {/* Subtitle & Paragraph Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mt-12 md:mt-20 items-end">
                    <div className="md:col-span-6">
                        <Reveal delay={0.2}>
                            <h2 className="text-white text-2xl sm:text-3xl font-bold tracking-tight max-w-sm leading-tight">
                                One company. A house of products.
                            </h2>
                        </Reveal>
                    </div>
                    <div className="md:col-span-6 flex md:justify-end">
                        <Reveal delay={0.4} className="w-full flex md:justify-end">
                            <p className="text-white/60 text-sm sm:text-base max-w-xs leading-relaxed">
                                Rhinon Tech designs, builds and operates its own technology products — from SaaS to consumer apps — entirely in-house.
                            </p>
                        </Reveal>
                    </div>
                </div>

                {/* Grid intersection markers */}
                <div className="relative mt-20 border-t border-white/10">
                    <motion.div
                        initial={{ opacity: 0, y: -55 }}
                        animate={{ opacity: 0.3, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.6 }}
                        className="absolute -top-[10px] left-[20%] text-white text-sm font-light select-none"
                    >
                        +
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 55 }}
                        animate={{ opacity: 0.3, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.7 }}
                        className="absolute -top-[10px] left-[50%] -translate-x-1/2 text-white text-sm font-light select-none"
                    >
                        +
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -55 }}
                        animate={{ opacity: 0.3, y: 0 }}
                        transition={{ type: "spring", stiffness: 100, damping: 15, delay: 0.8 }}
                        className="absolute -top-[10px] right-[20%] text-white text-sm font-light select-none"
                    >
                        +
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
