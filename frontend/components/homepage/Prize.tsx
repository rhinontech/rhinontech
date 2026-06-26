"use client";

import React, { useState, useEffect } from "react";
import { ArrowUpRight } from "lucide-react";
import { IMG } from "./constants";

const PRIZES = [
  { img: IMG.prize1, t: "FWA - Prestigious Site of The Day 2025 Winner", sub: "[Unerio Landing]", year: "2025" },
  { img: IMG.prize2, t: "Awwwards Studio of The Year 2023", sub: "[Unerio Landing]", year: "2023" },
  { img: IMG.prize3, t: "D&AD Wood Pencil Award 2024", sub: "[Unerio Landing]", year: "2024" },
];

const PRIZE_LIST = ["FWA", "Behance Featured", "Awwwards SOTD", "SiteInspire", "Framer", "Webflow Expert"];

export default function Prize() {
  const [order, setOrder] = useState([0, 1, 2]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setOrder((o) => [o[1], o[2], o[0]]);
    }, 4000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-16 md:py-24 text-white">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs">
          <span className="size-1.5 rounded-full bg-white" />
          Awards & Recognizations
        </div>

        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
          <h2 className="font-display text-5xl sm:text-7xl md:text-[10rem] md:leading-none font-medium tracking-tight">
            Prize
          </h2>
          <div className="flex flex-col items-start gap-4 md:max-w-xs md:items-end md:text-right">
            <p className="text-xs md:text-sm text-white/50 leading-relaxed">
              Redefining digital standards through award-winning design and strategic innovation across 20+ countries.
            </p>
            <a href="#contact" className="group inline-flex items-center gap-1.5 border-b border-white/40 pb-1 text-xs md:text-sm font-medium">
              Start Project
              <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </div>
      </div>

      {/* Stacked Cards */}
      <div className="relative mt-20 flex h-[380px] sm:h-[460px] items-center justify-center">
        {/* Background giant Awwward text */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
          <span className="font-display text-[6rem] sm:text-[14rem] md:text-[20rem] font-medium tracking-tight text-white/[0.04]">
            Awwward
          </span>
        </div>

        {/* Cards */}
        <div className="relative h-[300px] sm:h-[380px] w-[260px] sm:w-[320px] md:w-[380px]">
          {PRIZES.map((p, i) => {
            const pos = order.indexOf(i); // 0 = front
            const offsetX = pos * (isMobile ? 12 : 35);
            const offsetY = -pos * (isMobile ? 10 : 28);
            const scale = 1 - pos * 0.04;
            const rotate = pos * 1.8;
            return (
              <div
                key={p.t}
                className="absolute inset-0 flex flex-col overflow-hidden rounded-[20px] sm:rounded-[28px] border border-white/[0.06] bg-[#181818] shadow-2xl transition-all duration-700 ease-out"
                style={{
                  transform: `translate(${offsetX}px, ${offsetY}px) scale(${scale}) rotate(${rotate}deg)`,
                  zIndex: 10 - pos,
                  opacity: pos === 0 ? 1 : 0.9,
                }}
              >
                <div className="p-4 sm:p-5 pb-0">
                  <div className="relative aspect-[1.35/1] w-full overflow-hidden rounded-[14px] sm:rounded-[20px] bg-black flex items-center justify-center">
                    <img
                      src={p.img}
                      alt={p.t}
                      width={1024}
                      height={1024}
                      loading="lazy"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
                <div className="flex flex-1 flex-col justify-between p-4 sm:p-5 pt-3 sm:pt-4">
                  <div>
                    <h3 className="text-xs sm:text-base md:text-lg font-medium leading-snug text-white tracking-tight">
                      {p.t}
                    </h3>
                  </div>
                  <div className="flex items-center justify-between text-[11px] sm:text-[13px] text-white/50">
                    <span>{p.sub}</span>
                    <span>{p.year}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Caption */}
      <p className="mt-12 text-center text-xs md:text-sm text-white/50">
        Delivering impactful projects across many <span className="font-medium text-white underline underline-offset-4">diverse countries.</span>
      </p>

      {/* Prize list */}
      <div className="mt-10 border-t border-white/10 pt-10">
        <div className="grid grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-3">
          {PRIZE_LIST.map((t, i) => (
            <div key={t} className="flex items-start justify-center gap-2 text-center">
              <h3 className="text-lg sm:text-2xl md:text-3xl font-medium">{t}</h3>
              <span className="mt-1 font-mono text-[9px] sm:text-[10px] text-white/40">0{i + 1}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
