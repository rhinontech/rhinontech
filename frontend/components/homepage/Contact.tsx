"use client";

import React, { useState } from "react";
import { Phone, ChevronRight } from "lucide-react";
import Button from "../Button";

const LOGOS = ["Logoipsum", "◍◌◍", "IPSUM*", "∞∞", "⊕ orbit", "ACME", "Nova", "Quantum"];

function Field({
    label,
    placeholder,
    type = "text",
}: {
    label: string;
    placeholder?: string;
    type?: string;
}) {
    return (
        <label className="block">
            <span className="block text-sm font-medium">{label}</span>
            <input
                type={type}
                placeholder={placeholder}
                className="mt-2 w-full rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
            />
        </label>
    );
}

function SelectField({ label, options }: { label: string; options: string[] }) {
    return (
        <label className="block">
            <span className="block text-sm font-medium">{label}</span>
            <select
                className="mt-2 w-full appearance-none rounded-xl border border-white/10 bg-[#0a0a0a] bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-[right_1rem_center] bg-no-repeat px-4 py-3 pr-10 text-sm text-white/60 outline-none focus:border-white/30"
                defaultValue=""
            >
                <option value="" disabled className="bg-black">
                    Select an option
                </option>
                {options.map((o) => (
                    <option key={o} className="bg-black">
                        {o}
                    </option>
                ))}
            </select>
        </label>
    );
}

export default function Contact() {
    return (
        <section id="contact" className="relative overflow-hidden py-16 md:py-24 text-white">
            {/* World map background */}
            <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 top-0 h-[640px] bg-center bg-no-repeat opacity-60"
                style={{
                    backgroundImage: "url('/worldMap.png')",
                    backgroundSize: "cover",
                    maskImage:
                        "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                    WebkitMaskImage:
                        "radial-gradient(ellipse at center, black 40%, transparent 75%)",
                }}
            />

            <div className="relative mx-auto max-w-[1400px] px-6">
                <div className="grid gap-12 md:grid-cols-12">
                    {/* LEFT */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-3 py-1 text-xs">
                                <span className="size-1.5 rounded-full bg-white" />
                                Contact Us
                            </span>

                            <h2 className="mt-6 text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight">
                                Hire us!!
                            </h2>
                        </div>

                        <div>
                            <div className="mt-12 md:mt-40 flex items-center gap-3">
                                <span className="flex size-10 items-center justify-center rounded-full border border-white/15">
                                    <Phone className="size-4" />
                                </span>
                                <div className="text-sm">
                                    <div className="text-white/50 text-xs">Call Us 24/7</div>
                                    <a href="tel:+0278346236" className="font-medium hover:text-white/80 transition-colors">
                                        +0278346236
                                    </a>
                                </div>
                            </div>

                            <Button className="mt-5" text="Start Project" href="#" />
                        </div>
                    </div>

                    {/* RIGHT - Form card */}
                    <div className="md:col-span-7">
                        <form className="rounded-3xl border border-white/10 bg-[#0d0d0d]/80 p-6 md:p-10 backdrop-blur-xl">
                            <div className="grid gap-5 md:grid-cols-2">
                                <Field label="Name" placeholder="Marcus Kane" />
                                <Field label="Email" placeholder="marcus@example.com" type="email" />
                                <SelectField label="Service" options={["Branding", "Development", "UI/UX"]} />
                                <SelectField label="Budget" options={["$1,000", "$2,000", "$5,000+"]} />
                                <div className="md:col-span-2">
                                    <label className="block text-sm font-medium">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Write your request"
                                        className="mt-2 w-full resize-none rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-sm text-white placeholder:text-white/30 outline-none focus:border-white/30"
                                    />
                                </div>
                                <div className="md:col-span-2">
                                    <button
                                        type="button"
                                        className="w-full rounded-full bg-white py-3.5 text-sm font-medium text-black transition hover:bg-white/90 cursor-pointer"
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                {/* Infinite logo marquee */}
                <div className="relative mt-20 overflow-hidden">
                    <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent" />
                    <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-[#0a0a0a] to-transparent" />
                    <div className="flex w-max animate-marquee gap-24">
                        {[...LOGOS, ...LOGOS].map((l, i) => (
                            <span
                                key={i}
                                className="shrink-0 text-2xl font-semibold tracking-tight text-white/40"
                            >
                                    {l}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
