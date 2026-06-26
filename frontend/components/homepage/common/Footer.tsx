"use client";

import React from "react";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";
import Reveal from "../Reveal";
import { IMG } from "../constants";

export default function Footer() {
    return (
        <footer className="relative mt-16 md:mt-24 overflow-hidden border-t border-white/10">
            <img src={IMG.footerBg} alt="" className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-30" />
            <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-black" />
            <div className="relative mx-auto max-w-[1400px] px-6 py-12 md:py-20">
                <Reveal>
                    <h2 className="font-display text-[clamp(4.5rem,12vw,12rem)] font-medium leading-[0.85] tracking-[-0.05em]">
                        Norvin
                    </h2>
                </Reveal>
                <p className="mt-6 max-w-md text-sm md:text-base text-white/60 leading-relaxed">
                    We hope to empower users and simplify their everyday lives.
                </p>

                <div className="mt-12 md:mt-16 grid gap-10 border-t border-white/10 pt-10 md:pt-12 grid-cols-2 md:grid-cols-4">
                    <div className="col-span-2 md:col-span-1 space-y-3 text-sm text-white/70">
                        <div className="flex items-center gap-2 text-white/50 text-[10px] md:text-xs uppercase tracking-widest">
                            <MapPin className="size-3" /> Location
                        </div>
                        <p className="leading-relaxed">No. 152 Thatcher Road, New York, NY 10012</p>
                    </div>
                    <div className="col-span-2 md:col-span-1 space-y-3 text-sm text-white/70">
                        <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">Inquiry</div>
                        <a href="mailto:hello@norvin.agency" className="flex items-center gap-2 hover:text-white transition-colors"><Mail className="size-3.5" /> hello@norvin.agency</a>
                        <a href="tel:+0278346236" className="flex items-center gap-2 hover:text-white transition-colors"><Phone className="size-3.5" /> +0278346236</a>
                    </div>
                    <div className="col-span-1 space-y-3 text-sm text-white/70">
                        <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">Links</div>
                        {["About", "Work", "News", "Privacy", "Contact"].map((l) => (
                            <a key={l} href="#" className="block hover:text-white transition-colors">{l}</a>
                        ))}
                    </div>
                    <div className="col-span-1 space-y-3 text-sm">
                        <div className="text-white/50 text-[10px] md:text-xs uppercase tracking-widest">Newsletter</div>
                        <div className="flex items-center border-b border-white/20 py-2">
                            <input placeholder="you@email.com" className="flex-1 bg-transparent outline-none placeholder:text-white/30 text-sm" />
                            <button className="text-white/60 hover:text-white transition-colors cursor-pointer"><ArrowUpRight className="size-4" /></button>
                        </div>
                        <p className="text-[10px] text-white/40 leading-relaxed">By subscribing, you accept our Policy</p>
                    </div>
                </div>

                <div className="mt-12 md:mt-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 border-t border-white/10 pt-8 text-[11px] md:text-xs text-white/40">
                    <span>© 2026 Norvin Agency. All Rights Reserved.</span>
                    <span>AWARD WINNING AGENCY — SINCE 2022</span>
                </div>
            </div>
        </footer>
    );
}
