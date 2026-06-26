"use client";

import React from "react";
import { ArrowUpRight, ChevronRight } from "lucide-react";
import Reveal from "./Reveal";
import { IMG } from "./constants";

const PORTFOLIO = [
    { tags: ["Branding", "Web", "Marketing"], img: IMG.port1, t: "Unerio Landing page", body: "A seamless digital experience crafted to elevate brand presence and organic visibility." },
    { tags: ["Branding", "Web"], img: IMG.port2, t: "Jorger Clarkson", body: "Strategic personal branding and SEO optimization to amplify digital authority." },
    { tags: ["Branding", "Web"], img: IMG.port3, t: "DS Freelance Developer", body: "Showcase key project results and improve SEO with summary nice to have this." },
    { tags: ["App Design", "SEO/Marketing"], img: IMG.port4, t: "Architecture Studio", body: "Crafting digital spaces with architectural precision and timeless aesthetic." },
];

export default function Portfolio() {
    return (
        <section className="mx-auto max-w-[1400px] px-6 py-16 md:py-24">
            <Reveal>
                <div className="text-[10px] md:text-xs uppercase tracking-[0.3em] text-white/50">Latest Works</div>
                <h2 className="mt-3 font-display text-4xl sm:text-5xl md:text-7xl font-medium tracking-tight">
                    Portfolio
                </h2>
            </Reveal>
            <div className="mt-12 grid gap-6 md:grid-cols-2">
                {PORTFOLIO.map((p, i) => (
                    <Reveal key={p.t} delay={i * 0.05}>
                        <div className="group border border-white/10 rounded-[24px] md:rounded-[28px] p-6 md:p-8 flex flex-col justify-between h-full bg-transparent hover:border-white/20 transition-all duration-300 cursor-pointer">
                            {/* Tags */}
                            <div className="flex flex-wrap items-center gap-2">
                                {p.tags.map((tag, idx) => (
                                    <React.Fragment key={tag}>
                                        {idx > 0 && <span className="text-white/40 text-[10px]">•</span>}
                                        <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[10px] md:text-xs text-white/80 font-medium">
                                            {tag}
                                        </span>
                                    </React.Fragment>
                                ))}
                            </div>

                            {/* Image */}
                            <div className="mt-6 md:mt-8 overflow-hidden rounded-xl md:rounded-2xl bg-white/5 aspect-[1.8/1] w-full">
                                <img
                                    src={p.img}
                                    alt={p.t}
                                    className="h-full w-full object-cover transition duration-1000 group-hover:scale-103"
                                />
                            </div>

                            {/* Title, Description & Button */}
                            <div className="mt-6 md:mt-8 flex items-end justify-between gap-4 md:gap-6">
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-white">{p.t}</h3>
                                    <p className="mt-2 text-[11px] md:text-xs text-white/50 leading-relaxed max-w-sm">{p.body}</p>
                                </div>
                                <div className="flex size-10 md:size-12 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:border-white active:scale-95 shrink-0">
                                    <ArrowUpRight className="size-4 md:size-5 transition-transform duration-300 group-hover:rotate-45" />
                                </div>
                            </div>
                        </div>
                    </Reveal>
                ))}
            </div>
            <div className="mt-10 flex justify-center">
                <a href="#" className="group inline-flex items-center gap-2 rounded-full bg-white/5 backdrop-blur px-1.5 py-1.5 pl-5 text-sm font-medium">
                    <span>View All Projects</span>
                    <span className="flex size-7 items-center justify-center rounded-full bg-white text-black transition-transform group-hover:rotate-45">
                        <ChevronRight className="size-3.5" />
                    </span>
                </a>
            </div>
        </section>
    );
}
