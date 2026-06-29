"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { IMG } from "./constants";

const TESTIMONIALS = [
  {
    img: IMG.testimonial,
    quote: "“Saleszium replaced four tools for us — chat, CRM and automation in one place.”",
    name: "SALESZIUM USER",
    role: "SMB owner"
  },
  {
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
    quote: "“Furrcircle keeps my dog's whole health record in my pocket — and found us a vet next door.”",
    name: "FURRCIRCLE MEMBER",
    role: "Pet parent"
  },
  {
    img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=800&q=80",
    quote: "“Everything Rhinon ships feels considered — fast, clean and genuinely useful.”",
    name: "EARLY ADOPTER",
    role: "Across our products"
  }
];

export default function Testimonial() {
  const [index, setIndex] = useState(0);
  const t = TESTIMONIALS[index];

  const next = () => setIndex((i) => (i + 1) % TESTIMONIALS.length);
  const prev = () => setIndex((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);

  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-16 md:py-24 pb-28 md:pb-24 text-white">
      <div className="grid gap-10 md:grid-cols-12 items-center">
        {/* LEFT - Portrait Image */}
        <div className="col-span-12 md:col-span-5 flex justify-center">
          <div className="relative aspect-[3/4] w-full max-w-[320px] md:max-w-none overflow-hidden rounded-[200px] bg-white/5 border border-white/10 shadow-2xl">
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={t.img}
                alt={t.name}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.05 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="h-full w-full object-cover rounded-[200px]"
              />
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT - Content */}
        <div className="col-span-12 md:col-span-7 flex flex-col justify-center min-h-[260px] md:min-h-[380px] md:pl-6">
          {/* Pill tag */}
          <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-white/80">
            <span className="size-1.5 rounded-full bg-white" />
            Testimonial
          </div>

          {/* Title */}
          <h2 className="mt-6 font-display text-4xl sm:text-6xl md:text-[5.5rem] md:leading-none font-semibold tracking-tight text-white">
            Reviews
          </h2>

          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="mt-8 flex flex-col justify-between flex-1"
            >
              <blockquote className="font-sans text-lg sm:text-xl md:text-2xl font-medium leading-relaxed tracking-tight text-white/90 max-w-xl">
                {t.quote}
              </blockquote>
              <div className="mt-6 md:mt-8">
                <div className="text-xs sm:text-sm font-semibold tracking-wider text-white uppercase">
                  {t.name}
                </div>
                <div className="text-[11px] sm:text-xs text-white/40 mt-1">{t.role}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons (Bottom Right) */}
      <div className="absolute bottom-6 right-6 flex items-center gap-3 md:bottom-12 md:right-12">
        <button
          onClick={prev}
          aria-label="Previous Testimonial"
          className="flex size-11 md:size-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90 active:scale-95 cursor-pointer shadow-lg"
        >
          <ChevronLeft className="size-4 md:size-5 stroke-[2.5]" />
        </button>
        <button
          onClick={next}
          aria-label="Next Testimonial"
          className="flex size-11 md:size-12 items-center justify-center rounded-full bg-white text-black transition hover:bg-white/90 active:scale-95 cursor-pointer shadow-lg"
        >
          <ChevronRight className="size-4 md:size-5 stroke-[2.5]" />
        </button>
      </div>
    </section>
  );
}
