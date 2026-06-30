"use client";

import React from "react";
import { MapPin, Mail, ArrowUpRight, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { IMG } from "../constants";

const LINKS = ["About", "Products", "Rhinon Labs", "Privacy", "Contact"];

const baseIcon = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
};
const XIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...baseIcon} {...p}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);
const InstagramIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...baseIcon} {...p}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);
const LinkedinIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...baseIcon} {...p}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
    </svg>
);
const GithubIcon = (p: React.SVGProps<SVGSVGElement>) => (
    <svg {...baseIcon} {...p}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
);
const SOCIALS = [XIcon, InstagramIcon, LinkedinIcon, GithubIcon];

/** Rotating circular seal, mirroring the template's footer badge. */
function SealBadge() {
    return (
        <div className="relative size-28 md:size-32">
            <svg
                viewBox="0 0 120 120"
                className="size-full animate-spin [animation-duration:24s]"
            >
                <defs>
                    <path
                        id="footer-seal"
                        d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                        fill="none"
                    />
                </defs>
                <text className="fill-white/55 text-[9px] uppercase" style={{ letterSpacing: "0.28em" }}>
                    <textPath href="#footer-seal" startOffset="0">
                        Rhinon Tech • House of Products •
                    </textPath>
                </text>
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-2xl text-white/80">
                ✺
            </span>
        </div>
    );
}

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <footer className="relative mt-16 md:mt-24 overflow-hidden border-t border-white/10">
            <img src={IMG.footerBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            <div className="relative mx-auto max-w-[1400px] px-6 py-12 md:py-20">
                <div className="grid gap-10 md:grid-cols-12">
                    {/* Location + seal */}
                    <div className="col-span-2 md:col-span-3 space-y-3 text-sm text-white/70">
                        <div className="flex items-center gap-2 text-white/50 text-[10px] md:text-xs uppercase tracking-widest">
                            <MapPin className="size-3" /> Location
                        </div>
                        <p className="leading-relaxed">Bhubaneswar, Odisha, India</p>
                        <div className="pt-6">
                            <SealBadge />
                        </div>
                    </div>

                    {/* Inquiry */}
                    <div className="space-y-3 text-sm text-white/70 md:col-span-2">
                        <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">Inquiry</div>
                        <a href="mailto:hello@rhinon.tech" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="size-3.5" /> hello@rhinon.tech</a>
                    </div>

                    {/* Links */}
                    <div className="space-y-3 text-sm text-white/70 md:col-span-2">
                        <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">Links</div>
                        {LINKS.map((l) => (
                            <a key={l} href="#" className="block hover:text-white transition-colors">{l}</a>
                        ))}
                    </div>

                    {/* Brand block */}
                    <div className="col-span-2 md:col-span-5 space-y-5">
                        <div className="flex items-center gap-1.5 text-lg font-semibold tracking-tight text-white">
                            <span className="text-white/90">✺</span> Rhinon
                        </div>
                        <p className="max-w-xs text-sm text-white/60 leading-relaxed">
                            A technology company building and operating a house of products.
                        </p>
                        <div className="flex items-center gap-3">
                            {SOCIALS.map((Icon, i) => (
                                <a
                                    key={i}
                                    href="#"
                                    className="flex size-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition hover:border-white/40 hover:text-white"
                                >
                                    <Icon className="size-4" />
                                </a>
                            ))}
                        </div>
                        <div className="max-w-xs space-y-2">
                            <div className="flex items-center gap-2 text-white/50 text-[10px] md:text-xs uppercase tracking-widest">
                                <Mail className="size-3" /> Newsletter
                            </div>
                            <div className="flex items-center border-b border-white/20 py-2">
                                <input placeholder="you@email.com" className="flex-1 bg-transparent outline-none placeholder:text-white/30 text-sm" />
                                <button className="text-white/60 hover:text-white transition-colors cursor-pointer"><ArrowUpRight className="size-4" /></button>
                            </div>
                            <p className="text-[10px] text-white/40 leading-relaxed">By subscribing, you accept our Policy</p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] md:text-xs text-white/40">
                    <span>© 2026 Rhinon Tech. All Rights Reserved.</span>
                    <span>Bhubaneswar, India</span>
                </div>
            </div>

            {/* Curved Line Image and Scroll to Top button */}
            <div className="absolute -bottom-5 left-0 right-0 h-[69px] flex justify-center items-center pointer-events-none z-10">
                <img
                    src="https://framerusercontent.com/images/T7fAli8vfIe8NKa9eaqa4plcY6c.svg?width=1352&height=69"
                    alt=""
                    aria-hidden
                    className="w-full max-w-[1352px] opacity-20 select-none rotate-180"
                />
                <div className="absolute inset-0 -top-6 flex justify-center items-center pointer-events-auto">
                    <button
                        onClick={scrollToTop}
                        className="cursor-pointer text-white hover:text-white/80 transition-colors flex items-center justify-center p-4"
                        aria-label="Back to top"
                    >
                        <motion.div
                            animate={{ y: [0, -6, 0] }}
                            transition={{
                                duration: 1.8,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <ChevronUp className="size-8 stroke-[2.5]" />
                        </motion.div>
                    </button>
                </div>
            </div>
        </footer>
    );
}
