"use client";

import React from "react";

const ITEMS = ["Flexible Pricing", "Top-notch Experts", "Dedicated Support 24/7", "Creative Solutions", "Award Winning"];

function Strip({ rotate, bg, fg }: { rotate: number; bg: string; fg: string }) {
  return (
    <div
      className={`absolute left-1/2 top-1/2 w-[180vw] ${bg} py-4 md:py-5 overflow-hidden`}
      style={{ transform: `translate(-50%, -50%) rotate(${rotate}deg)` }}
    >
      <div className="flex w-max animate-marquee gap-8 md:gap-12 whitespace-nowrap">
        {[...ITEMS, ...ITEMS, ...ITEMS, ...ITEMS].map((t, i) => (
          <span key={i} className={`flex shrink-0 items-center gap-8 md:gap-12 text-lg md:text-2xl font-medium ${fg}`}>
            {t}
            <span className="size-1.5 rounded-full bg-current opacity-60" />
          </span>
        ))}
      </div>
    </div>
  );
}

export default function MarqueeStrips() {
  return (
    <section className="relative h-[280px] overflow-hidden">
      <div className="absolute inset-0">
        <Strip rotate={-5} bg="bg-white" fg="text-black" />
      </div>
      <div className="absolute inset-0">
        <Strip rotate={5} bg="bg-[#111]" fg="text-white" />
      </div>
    </section>
  );
}
