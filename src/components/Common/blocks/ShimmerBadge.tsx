"use client";

import React, { CSSProperties } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface ShimmerBorderProps {
  shimmerColor?: string;
  shimmerSize?: string;
  shimmerDuration?: string;
  borderRadius?: string;
  background?: string;
  className?: string;
  children?: React.ReactNode;
}

export function ShimmerBorder({
  shimmerColor = "#ffffff",
  shimmerSize = "2px",
  shimmerDuration = "3s",
  borderRadius = "100px",
  background = "rgba(0, 0, 0, 1)",
  className,
  children,
}: ShimmerBorderProps) {
  const style: CSSProperties = {
    "--spread": "90deg",
    "--shimmer-color": shimmerColor,
    "--radius": borderRadius,
    "--speed": shimmerDuration,
    "--cut": shimmerSize,
    "--bg": background,
  } as any;

  return (
    <>
      {/* Inject keyframes */}
      <style>
        {`
          @keyframes shimmer-slide {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          @keyframes spin-around {
            0% { transform: rotate(0deg); }
            15%, 35% { transform: rotate(90deg); }
            65%, 85% { transform: rotate(270deg); }
            100% { transform: rotate(360deg); }
          }
        `}
      </style>

      <div
        style={style}
        className={cn(
          "group relative z-0 inline-flex items-center justify-center overflow-hidden px-1 py-1 [background:var(--bg)] [border-radius:var(--radius)]",
          className
        )}
      >
        {/* shimmer spark */}
        <div className="absolute inset-0 -z-30 overflow-visible [border-radius:var(--radius)]">
          <div
            className="absolute inset-0 aspect-square"
            style={{
              animation: `shimmer-slide var(--speed) ease-in-out infinite alternate`,
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `conic-gradient(from 270deg, transparent 0deg, var(--shimmer-color) 30deg, transparent 90deg)`,
                animation: `spin-around calc(var(--speed) * 2) infinite linear`,
                width: "150%",
                height: "150%",
                left: "-25%",
                top: "-25%",
              }}
            />
          </div>
        </div>

        {/* inner backdrop */}
        <div
          className="absolute -z-20 [border-radius:var(--radius)]"
          style={{
            background: `var(--bg)`,
            inset: shimmerSize,
          }}
        />

        {children}
      </div>
    </>
  );
}

// ✅ Example usage
export default function ShimmerBadge() {
  return (
    <ShimmerBorder shimmerColor="#ffffff" shimmerDuration="3s">
      <button
        type="button"
        onClick={() => console.log("Button clicked")}
        className={cn(
          "bg-muted flex w-fit items-center gap-4 rounded-full p-1 pl-4 shadow-md shadow-black/5 transition-all duration-300 hover:bg-background dark:border-t-white/5 dark:shadow-zinc-950"
        )}
      >
        <span className="text-foreground text-sm">
          AI Customer Engagement Platform
        </span>

        <span className="block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

        {/* moving arrows */}
        <div className="bg-background group-hover:bg-muted h-6 w-6 overflow-hidden rounded-full duration-500">
          <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
            <span className="flex h-6 w-6">
              <ArrowRight className="m-auto h-3 w-3" />
            </span>
            <span className="flex h-6 w-6">
              <ArrowRight className="m-auto h-3 w-3" />
            </span>
          </div>
        </div>
      </button>
    </ShimmerBorder>
  )
}
