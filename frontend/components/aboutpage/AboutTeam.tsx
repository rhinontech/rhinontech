"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import Reveal from "@/components/homepage/Reveal";
import { IMG } from "@/components/homepage/constants";

const TEAM = [
    {
        name: "Prabhat Patra",
        avatar: IMG.avatar1,
        desc: "Founder of Rhinon Tech. Sets the product vision and steers the company's house of products from idea to launch.",
        exp: "Core team",
        role: "FOUNDER",
    },
    {
        name: "Varun Mathiyalagan",
        avatar: IMG.avatar2,
        desc: "Backend developer. Builds the APIs, data models and services that power Rhinon's products.",
        exp: "Core team",
        role: "BACKEND DEVELOPER",
    },
    {
        name: "Ahmar Ansari",
        avatar: IMG.avatar3,
        desc: "Frontend developer. Crafts the interfaces and experiences across Rhinon's products and sites.",
        exp: "Core team",
        role: "FRONTEND DEVELOPER",
    },
];

function TeamCard({ t, y, isDesktop }: { t: any; y: any; isDesktop: boolean }) {
    const cardRef = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
        if (!cardRef.current) return;
        const rect = cardRef.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left - width / 2;
        const mouseYVal = e.clientY - rect.top - height / 2;
        mouseX.set(mouseXVal);
        mouseY.set(mouseYVal);
    }

    function handleMouseLeave() {
        mouseX.set(0);
        mouseY.set(0);
    }

    // 3D Tilt springs
    const rx = useTransform(mouseY, [-200, 200], [6, -6]);
    const ry = useTransform(mouseX, [-200, 200], [-6, 6]);
    const rotateX = useSpring(rx, { stiffness: 200, damping: 25 });
    const rotateY = useSpring(ry, { stiffness: 200, damping: 25 });

    // Spotlight background glow
    const spotlightBg = useTransform(
        [mouseX, mouseY],
        ([x, y]) => {
            const w = cardRef.current?.clientWidth || 300;
            const h = cardRef.current?.clientHeight || 400;
            return `radial-gradient(300px circle at ${Number(x) + w / 2}px ${Number(y) + h / 2}px, rgba(255,255,255,0.06), transparent)`;
        }
    );

    return (
        <motion.div
            ref={cardRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
                y: isDesktop ? y : 0,
                rotateX: isDesktop ? rotateX : 0,
                rotateY: isDesktop ? rotateY : 0,
                transformStyle: "preserve-3d",
                perspective: 1000,
            }}
            className="relative flex h-[380px] md:h-[440px] flex-col rounded-[24px] md:rounded-[28px] border border-white/10 p-6 md:p-8 bg-white/[0.01] hover:bg-white/[0.03] transition-colors duration-300 overflow-hidden cursor-pointer group"
        >
            {/* Spotlight overlay */}
            <motion.div
                className="pointer-events-none absolute inset-0 z-0"
                style={{ background: spotlightBg }}
            />

            {/* Inner Content Wrapper (preserves 3D for pop-out effect) */}
            <div 
                style={{ transform: "translateZ(40px)", transformStyle: "preserve-3d" }} 
                className="relative z-10 h-full flex flex-col justify-between"
            >
                {/* Avatar */}
                <div className="size-14 md:size-16 rounded-full border border-white/10 overflow-hidden bg-white/5 mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:border-white/20">
                    <img
                        src={t.avatar}
                        alt={t.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Text details */}
                <div className="mt-auto">
                    <h3 className="font-display text-2xl md:text-3xl font-bold tracking-tight text-white transition-colors duration-300">
                        {t.name}
                    </h3>
                    <p className="mt-3 text-xs md:text-sm leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/70">
                        {t.desc}
                    </p>
                    
                    {/* Bottom row tag & years */}
                    <div className="mt-6 md:mt-8 border-t border-white/10 pt-5 flex items-center gap-4 text-xs">
                        <span className="flex items-center gap-1.5 text-white/70">
                            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.3" className="h-3.5 w-3.5">
                                <circle cx="8" cy="8" r="6.5" />
                                <path d="M8 4.5V8l2.5 1.5" strokeLinecap="round" />
                            </svg>
                            <span className="font-medium text-white/95">{t.exp}</span>
                        </span>
                        <span className="text-white/20">|</span>
                        <span className="tracking-[0.12em] text-white/80 font-bold uppercase transition-colors duration-300 group-hover:text-white">
                            {t.role}
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default function AboutTeam() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const [isDesktop, setIsDesktop] = useState(false);
    useEffect(() => {
        setIsDesktop(window.innerWidth >= 768);
        const handleResize = () => setIsDesktop(window.innerWidth >= 768);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Staggered parallax scrolling (Preserves stair positions while giving high-travel scrolling feedback):
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -120]);
    const y2 = useTransform(scrollYProgress, [0, 1], [80, -40]); // Offset +80px initially, moves up to -40px
    const y3 = useTransform(scrollYProgress, [0, 1], [160, 40]); // Offset +160px initially, moves up to 40px

    return (
        <section ref={containerRef} className="mx-auto max-w-[1400px] px-6 py-16 md:py-24 md:pb-56 bg-black text-white overflow-hidden">
            {/* Header */}
            <div className="flex flex-col items-center text-center mb-16 md:mb-40">
                <Reveal>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-xs text-white/80">
                        <span className="size-1.5 rounded-full bg-white animate-pulse" />
                        Team Members
                    </span>
                </Reveal>
                <Reveal delay={0.15}>
                    <h2 className="font-display text-5xl sm:text-6xl md:text-[80px] font-semibold tracking-tight mt-6 leading-none">
                        The team
                    </h2>
                </Reveal>
            </div>

            {/* Team Grid Stack */}
            <motion.div
                className="grid gap-6 md:grid-cols-3"
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-80px" }}
                variants={{ show: { transition: { staggerChildren: 0.15 } } }}
            >
                {TEAM.map((t, idx) => (
                    <div key={t.name} className="relative">
                        <motion.div
                            variants={{
                                hidden: { opacity: 0, y: 20 },
                                show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
                            }}
                        >
                            <TeamCard
                                t={t}
                                y={idx === 0 ? y1 : idx === 1 ? y2 : y3}
                                isDesktop={isDesktop}
                            />
                        </motion.div>
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
