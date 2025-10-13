'use client';

import React, { useId } from 'react';
import { motion } from 'framer-motion';

/* -------------------------------------------------------
   Tiny className merger (so you don't need "@/lib/utils")
------------------------------------------------------- */
function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(' ');
}

/* -------------------------------------------------------
   GridPattern (merged + tuned for dark theme)
------------------------------------------------------- */
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
          <path
            d={`M.5 ${height}V.5H${width}`}
            fill="none"
            strokeDasharray={strokeDasharray}
          />
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

/* -------------------------------------------------------
   Testimonials (merged + dark theme)
------------------------------------------------------- */
type Testimonial = {
  name: string;
  role: string;
  image: string;
  company: string;
  quote: string;
};

const testimonials: Testimonial[] = [
  {
    quote:
      'Multi Techno transformed the way we manage our operations. Their ERP system is reliable, scalable, and truly easy to use.',
    name: 'Ali Khan',
    role: 'HR Manager',
    company: 'Pak Mission Society',
    image: 'https://randomuser.me/api/portraits/men/21.jpg',
  },
  {
    quote:
      'Their ERP platform streamlined our business processes. What impressed me most is their dedication to client success and support.',
    name: 'Sara Ahmed',
    role: 'CEO',
    company: 'Galaxy Five Home',
    image: 'https://randomuser.me/api/portraits/women/22.jpg',
  },
  {
    quote:
      'They took time to understand our unique requirements and delivered a system that fits seamlessly into daily operations.',
    name: 'Imran Hussain',
    role: 'Manager',
    company: 'Al-Tayyab Foods',
    image: 'https://randomuser.me/api/portraits/men/23.jpg',
  },
  {
    quote:
      'From onboarding to ongoing support, the Multi Techno team has been responsive, professional, and incredibly easy to work with.',
    name: 'Fatima Noor',
    role: 'Director',
    company: 'Shafiqe Foods',
    image: 'https://randomuser.me/api/portraits/women/24.jpg',
  },
  {
    quote:
      'Their collaborative approach makes us feel like partners, not just clients. Every strategy session brings new value to our business.',
    name: 'Usman Raza',
    role: 'CTO',
    company: 'NextGen Solutions',
    image: 'https://randomuser.me/api/portraits/men/25.jpg',
  },
  {
    quote:
      'We rely on their ERP to manage critical operations. The platform is intuitive, and the support team is always proactive.',
    name: 'Ayesha Siddiqui',
    role: 'Product Lead',
    company: 'Bright Future Tech',
    image: 'https://randomuser.me/api/portraits/women/26.jpg',
  },
  {
    quote:
      'Multi Techno gave us better visibility across departments. The insights and efficiency gains have been game-changing for our company.',
    name: 'Bilal Sheikh',
    role: 'Operations Head',
    company: 'Metro Logistics',
    image: 'https://randomuser.me/api/portraits/men/27.jpg',
  },
  {
    quote:
      'The ERP system brought structure to our finance operations. It’s user-friendly and perfectly tailored to our organizational needs.',
    name: 'Nadia Karim',
    role: 'Finance Manager',
    company: 'Alpha Traders',
    image: 'https://randomuser.me/api/portraits/women/28.jpg',
  },
  {
    quote:
      'Dependable, efficient, and forward-thinking. Multi Techno has become a trusted partner in helping us scale confidently worldwide.',
    name: 'Omar Farooq',
    role: 'Managing Director',
    company: 'VisionX Global',
    image: 'https://randomuser.me/api/portraits/men/29.jpg',
  },
  {
    quote:
      'Their attention to detail and continuous improvements keep us ahead of the curve. Working with them feels effortless every time.',
    name: 'Sana Iqbal',
    role: 'Head of Strategy',
    company: 'BlueWave Consulting',
    image: 'https://randomuser.me/api/portraits/women/30.jpg',
  },
  {
    quote:
      'We’ve tested other ERPs, but nothing matched their level of customization and hands-on support. Highly recommend their services.',
    name: 'Hamza Tariq',
    role: 'Operations Manager',
    company: 'Green Valley Farms',
    image: 'https://randomuser.me/api/portraits/men/31.jpg',
  },
  {
    quote:
      'Multi Techno’s system made our business smarter, not harder. The partnership has been valuable for both efficiency and growth.',
    name: 'Mehwish Zafar',
    role: 'COO',
    company: 'Skyline Apparel',
    image: 'https://randomuser.me/api/portraits/women/32.jpg',
  },
];

export default function TestimonialsSection2() {
  return (
    <section className="relative w-full px-4 pt-12 pb-24 bg-neutral-950 text-neutral-100">
      {/* subtle radial accents for dark theme */}
      <div aria-hidden className="absolute inset-0 isolate z-0 contain-strict">
        <div className="absolute top-0 left-0 h-[32rem] w-[35rem] -translate-y-1/2 -rotate-45 rounded-full bg-[radial-gradient(68.54%_68.72%_at_55.02%_31.46%,rgba(255,255,255,0.06)_0,rgba(160,160,160,0.02)_50%,rgba(255,255,255,0.01)_80%)]" />
        <div className="absolute top-0 left-0 h-[28rem] w-[16rem] -translate-y-1/2 rotate-[-45deg] rounded-full bg-[radial-gradient(50%_50%_at_50%_50%,rgba(255,255,255,0.04)_0,rgba(255,255,255,0.01)_80%,transparent_100%)]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl space-y-8">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold tracking-wide text-balance md:text-4xl lg:text-5xl xl:text-6xl xl:font-extrabold">
            Real Results, Real Voices
          </h1>
          <p className="text-sm text-neutral-400 md:text-base lg:text-lg">
            See how businesses are thriving with our ERP — real stories, real impact, real growth.
          </p>
        </div>

        <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map(({ name, role, company, quote, image }, index) => (
            <motion.div
              key={index}
              initial={{ filter: 'blur(4px)', translateY: -8, opacity: 0 }}
              whileInView={{ filter: 'blur(0px)', translateY: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index + 0.1, duration: 0.8 }}
              className="relative grid grid-cols-[auto_1fr] gap-x-3 overflow-hidden rounded-lg border border-white/10 bg-white/[0.02] p-4 backdrop-blur-sm"
            >
              {/* overlay grid pattern highlight */}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
