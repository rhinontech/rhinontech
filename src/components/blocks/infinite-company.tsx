'use client'
import React from 'react'

export default function InfiniteCompany() {
  return (
      <section className="bg-background max-w-4xl mx-auto">
          <div className="relative overflow-hidden">
            {/* Scrolling container */}
            <div className="flex animate-scroll gap-2 whitespace-nowrap">
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
                  className="inline-flex items-center justify-center  py-2  rounded-lg text-black  dark:text-white font-semibold text-lg"
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
                  className="inline-flex items-center justify-center py-2 rounded-lg text-black dark:text-white font-semibold text-lg"
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
              gap: 3rem;
              animation: scroll 20s linear infinite;
            }
          `}</style>
        </section>
  )
}
