'use client';

import React, { useId } from 'react';
import { motion } from 'framer-motion';

/* Tiny className merger */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

/* GridPattern Component */
interface GridPatternProps {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
  [key: string]: unknown;
}

function GridPattern({
  width = 40,
  height = 40,
  x = -1,
  y = -1,
  strokeDasharray = '0',
  squares,
  className,
  ...props
}: GridPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-0 h-full w-full fill-white/5 stroke-white/10',
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" strokeDasharray={strokeDasharray} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sx, sy]) => (
            <rect
              strokeWidth="0"
              key={`${sx}-${sy}`}
              width={width - 1}
              height={height - 1}
              x={sx * width + 1}
              y={sy * height + 1}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}

/* Testimonials Data */
type Testimonial = {
  name: string;
  role: string;
  image: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    quote: 'Multi Techno transformed the way we manage our operations. Their ERP system is reliable, scalable, and truly easy to use.',
    name: 'Ali Khan',
    role: 'HR Manager',
    company: 'Pak Mission Society',
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    quote: 'Their ERP platform streamlined our business processes. What impressed me most is their dedication to client success and support.',
    name: 'Sara Ahmed',
    role: 'CEO',
    company: 'Galaxy Five Home',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    quote: 'They took time to understand our unique requirements and delivered a system that fits seamlessly into daily operations.',
    name: 'Imran Hussain',
    role: 'Manager',
    company: 'Al-Tayyab Foods',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    quote: 'From onboarding to ongoing support, the Multi Techno team has been responsive, professional, and incredibly easy to work with.',
    name: 'Fatima Noor',
    role: 'Director',
    company: 'Shafiqe Foods',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  {
    quote: 'Their collaborative approach makes us feel like partners, not just clients. Every strategy session brings new value to our business.',
    name: 'Usman Raza',
    role: 'CTO',
    company: 'NextGen Solutions',
    image: 'https://randomuser.me/api/portraits/men/25.jpg',
  },
];

/* Testimonials Section with infinite scroll & edge shadows */
export default function TestimonialsSection2() {
  return (
    <section className="relative w-full px-4  bg-neutral-950 text-neutral-100">
      {/* Header */}
      <div className="relative z-10 mx-auto max-w-5xl space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-4xl xl:text-5xl xl:font-bold text-center">
            Real Results, Real Voices
          </h1>
          <p className="text-sm text-neutral-400 md:text-base lg:text-lg text-center">
            See how businesses are thriving with our ERP — real stories, real impact, real growth.
          </p>
        </div>

        {/* Infinite Horizontal Scroll */}
        <div className="relative overflow-hidden py-4">
          {/* Left Shadow */}
          <div className="absolute left-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-r from-neutral-950 to-transparent z-20" />
          {/* Right Shadow */}
          <div className="absolute right-0 top-0 h-full w-16 pointer-events-none bg-gradient-to-l from-neutral-950 to-transparent z-20" />

          <motion.div
            className="flex gap-4 w-max"
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
          >
            {[...testimonials, ...testimonials].map(({ name, role, company, quote, image }, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-72 rounded-lg border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm relative"
              >
                {/* Grid pattern overlay */}
                <div className="pointer-events-none absolute inset-x-0 top-0 -mt-2 h-full [mask-image:linear-gradient(white,transparent)]">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
                    <GridPattern
                      width={25}
                      height={25}
                      x={-12}
                      y={4}
                      strokeDasharray="3"
                      className="absolute inset-0 h-full w-full mix-blend-overlay"
                    />
                  </div>
                </div>

                <img
                  alt={name}
                  src={image}
                  loading="lazy"
                  className="size-9 rounded-full ring-1 ring-white/15"
                />

                <div>
                  <div className="-mt-0.5 -space-y-0.5">
                    <p className="text-sm md:text-base">{name}</p>
                    <span className="block text-[11px] font-light tracking-tight text-neutral-400">
                      {role} at {company}
                    </span>
                  </div>
                  <blockquote className="mt-3">
                    <p className="text-sm font-light tracking-wide text-neutral-200">
                      {quote}
                    </p>
                  </blockquote>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Hide scrollbar */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
