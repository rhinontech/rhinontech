"use client";

import React from "react";
import { Mail, Phone, ArrowRight, ChevronUp, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import Reveal from "../Reveal";
import { IMG } from "../constants";

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
);

const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.15 1-14.88 6.69" />
        <path d="M5.16 19.17c2.25-5.91 7.78-9.91 14.16-9.17" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const BehanceIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        {/* b */}
        <path d="M6 6v12" />
        <path d="M6 12a3 3 0 1 1 0 6H6" />
        {/* e */}
        <path d="M14 15a3 3 0 1 0 3-3h-3v1.5" />
        {/* line above e */}
        <line x1="15" y1="8" x2="19" y2="8" />
    </svg>
);

export default function Footer() {
  const scrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  return (
    <footer className="relative mt-24 overflow-hidden rounded-t-[28px] border border-white/10 mx-2">
      <div className="relative mx-auto max-w-[1500px] px-8 pt-20 pb-28">
        <div className="grid gap-16 md:grid-cols-3">
          {/* LEFT — Location + rotating badge */}
          <div>
            <div className="text-white/40 text-xs uppercase tracking-[0.2em]">Location</div>
            <p className="mt-6 text-white font-medium">No. 152 Thatcher Road, New York, NY 10012</p>
            <div className="mt-16">
              <RotatingBadge />
            </div>
          </div>

          {/* MIDDLE — Inquiry + Links */}
          <div className="space-y-12">
            <div>
              <div className="text-white/40 text-xs uppercase tracking-[0.2em]">Inquiry</div>
              <div className="mt-6 space-y-2 font-medium">
                <a href="mailto:hello@norvin.agency" className="block hover:text-white/70 transition">hello@norvin.agency</a>
                <a href="tel:+0278346236" className="block hover:text-white/70 transition">+0278346236</a>
              </div>
            </div>
            <div>
              <div className="text-white/40 text-xs uppercase tracking-[0.2em]">Links</div>
              <div className="mt-6 space-y-4 text-white/70">
                {["About", "Work", "News", "Privacy", "Contact"].map((l) => (
                  <a key={l} href={l === "About" ? "/about" : "#"} className="block hover:text-white transition-colors">{l}</a>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — Logo + newsletter */}
          <div>
            <div className="flex items-center gap-1">
              <span className="font-display text-4xl font-semibold tracking-tight">Norvin</span>
            </div>
            <p className="mt-6 text-white/70 max-w-xs">
              We hope to <span className="text-white font-medium">empower</span> user and simplify their everyday lives
            </p>
            <div className="mt-8 flex gap-3">
              {[XIcon, DribbbleIcon, InstagramIcon].map((Icon, i) => (
                <a key={i} href="#" className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition">
                  <Icon className="size-4" />
                </a>
              ))}
              <a href="#" className="flex size-10 items-center justify-center rounded-full bg-white/5 border border-white/10 hover:bg-white/10 transition text-xs font-bold">
                Bē
              </a>
            </div>

            <div className="mt-12">
              <div className="flex items-center gap-2 text-white/60 text-sm">
                <Mail className="size-4" /> Newsletter
              </div>
              <form className="mt-4 flex items-center gap-2 rounded-full border border-white/10 bg-white/5 pl-5 pr-2 py-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 bg-transparent text-sm outline-none placeholder:text-white/40"
                />
                <button type="submit" className="flex size-9 items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <ArrowRight className="size-4" />
                </button>
              </form>
              <p className="mt-4 text-xs text-white/40">By subscribing, you're accept our Policy</p>
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-xs text-white/40">
          <span>© 2026 <span className="text-white/80 font-medium">Norvin Agency</span>. All Rights Reserved</span>
          <span>New York, USA</span>
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

function RotatingBadge() {
  const text = "AWARD WINNING AGENCY • SINCE 2022 • ";
  const chars = text.split("");
  const radius = 88;
  return (
    <div className="relative size-[220px]">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 22, ease: "linear", repeat: Infinity }}
        className="absolute inset-0"
      >
        <svg viewBox="0 0 220 220" className="size-full">
          <defs>
            <path
              id="badgeCircle"
              d={`M 110,110 m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
            />
          </defs>
          <text fill="white" fontSize="13" letterSpacing="3" style={{ fontFamily: "inherit" }}>
            <textPath href="#badgeCircle" startOffset="0">
              {chars.join("")}
            </textPath>
          </text>
        </svg>
      </motion.div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-20 items-center justify-center rounded-full">
          <span className="font-display text-5xl font-bold tracking-tight">N</span>
        </div>
      </div>
    </div>
  );
}
