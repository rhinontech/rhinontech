"use client";
import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";
import ShimmerBadge from "./ShimmerBadge";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring" as const,
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

export function HeroSection() {
  return (
    <>
      <main className="overflow-hidden">
        {/* Background radial blur */}
        <div
          aria-hidden
          className="z-[2] absolute inset-0 pointer-events-none isolate opacity-50 contain-strict hidden lg:block"
        >
          <div className="w-[35rem] h-[80rem] -translate-y-[350px] absolute left-0 top-0 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,hsla(0,0%,85%,.08)_0,hsla(0,0%,55%,.02)_50%,hsla(0,0%,45%,0)_80%)]" />
          <div className="h-[80rem] absolute left-0 top-0 w-56 -rotate-45 rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.06)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)] [translate:5%_-50%]" />
          <div className="h-[80rem] -translate-y-[350px] absolute left-0 top-0 w-56 -rotate-45 bg-[radial-gradient(50%_50%_at_50%_50%,hsla(0,0%,85%,.04)_0,hsla(0,0%,45%,.02)_80%,transparent_100%)]" />
        </div>

        <section>
          <div className="relative pt-24 md:pt-36">
            <AnimatedGroup
              variants={{
                container: {
                  visible: { transition: { delayChildren: 1 } },
                },
                item: {
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                      type: "spring" as const,
                      bounce: 0.3,
                      duration: 2,
                    },
                  },
                },
              }}
              className="absolute inset-0 -z-20"
            ></AnimatedGroup>

            <div
              aria-hidden
              className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--background)_75%)]"
            />

            {/* Floating icon */}
            <div className="absolute right-[20%] top-5 animate-spin-slow">
              <img
                src="https://rhinontech.com/assets/metallic-4J6O_pZt.png"
                alt=""
                className="w-54 h-54"
              />
            </div>

            {/* HERO CONTENT */}
            <div className="mx-auto max-w-5xl w-full px-4 p-6 backdrop-blur-lg rounded-2xl text-center">
              <AnimatedGroup variants={transitionVariants}>
                <ShimmerBadge />
                <h1 className="mt-8 max-w-5xl mx-auto bg-gradient-text-radial bg-clip-text text-transparent text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem] font-semibold pb-2.5">
                  Rhinon is the only tool you need for customer engagement and
                  growth
                </h1>
                <p className="mx-auto mt-8 max-w-2xl text-balance text-lg">
                  Meet the AI system that unifies chat, CRM and support. Capture
                  leads, resolve queries and grow faster
                </p>
              </AnimatedGroup>

              {/* CTA Buttons */}
              <AnimatedGroup
                variants={{
                  container: {
                    visible: {
                      transition: {
                        staggerChildren: 0.05,
                        delayChildren: 0.75,
                      },
                    },
                  },
                  ...transitionVariants,
                }}
                className="mt-12 flex flex-col md:flex-row items-center justify-center gap-2 w-full px-0 md:px-4"
              >
                {/* First Button */}
                <div
                  key={2}
                  className="w-full md:w-auto flex bg-foreground/10 rounded-[14px] border p-0.5 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:bg-foreground/20"
                >
                  <Button
                    asChild
                    size="lg"
                    className="flex-1 sm:w-full w-[300px] rounded-xl px-5 text-base bg-blue-900 text-white transition-all duration-300 hover:bg-blue-800 hover:text-white"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Try for Free</span>
                    </Link>
                  </Button>
                </div>

                {/* Second Button */}

                <div key={1} className="w-full md:w-auto flex">
                  <Button
                    asChild
                    size="lg"
                    variant="ghost"
                    className="flex-1 sm:w-full w-[300px]  h-10.5 rounded-xl px-5 border border-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                  >
                    <Link href="#link">
                      <span className="text-nowrap">Contact Sales</span>
                    </Link>
                  </Button>
                </div>
              </AnimatedGroup>
            </div>

            {/* IMAGE MOCKUP */}
            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative mt-8 overflow-hidden px-2 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-gradient-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border p-4 shadow-lg shadow-zinc-950/15">
                  <img
                    className="bg-background aspect-15/8 relative hidden rounded-2xl dark:block"
                    src="/assets/dashboardimg.png"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <img
                    className="z-2 border-border/25 aspect-15/8 relative rounded-2xl border dark:hidden"
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=2700&h=1440&fit=crop&crop=center"
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </>
  );
}
