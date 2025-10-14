'use client'
import React from 'react'

export default function InfiniteCompany() {
  return (
    <section className="bg-background w-full max-w-4xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8">
      <div className="relative overflow-hidden">
        {/* Scrolling container */}
        <div className="flex animate-scroll gap-4 sm:gap-6 md:gap-8 whitespace-nowrap">
          {[
            "Nvidia",
            "Column",
            "GitHub",
            "Nike",
            "Lemon Squeezy",
            "Laravel",
            "Lilly",
            "OpenAI",
          ].map((name, idx) => (
            <div
              key={idx}
              className="inline-flex items-center justify-center py-2 rounded-lg text-black dark:text-white font-semibold text-base sm:text-lg"
            >
              {name}
            </div>
          ))}

          {/* Duplicate for seamless scroll */}
          {[
            "Nvidia",
            "Column",
            "GitHub",
            "Nike",
            "Lemon Squeezy",
            "Laravel",
            "Lilly",
            "OpenAI",
          ].map((name, idx) => (
            <div
              key={`dup-${idx}`}
              className="inline-flex items-center justify-center py-2 rounded-lg text-black dark:text-white font-semibold text-base sm:text-lg"
            >
              {name}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          display: flex;
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  )
}
