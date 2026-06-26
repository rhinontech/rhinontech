"use client";

import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  { n: "Iva", y: "2020", logo: "https://framerusercontent.com/images/HNfkQRfxtFK3Miudpvq7xAUe2E.svg", body: "Accelerated their market entry by over 40% in six months.", colStart: "lg:col-start-1" },
  { n: "Fin", y: "2023", logo: "https://framerusercontent.com/images/r4pCfxmza1YC7R9fAcNWA0pG0.svg", body: "Boosted green energy adoption with a data-driven ecosystem.", colStart: "lg:col-start-2" },
  { n: "Aws", y: "2024", logo: "https://framerusercontent.com/images/rJ0KiiIZday3Hvz7riIhnX251Kc.svg", body: "Digital transformation projects delivered for global enterprises.", colStart: "lg:col-start-3" },
  { n: "Ups", y: "2025", logo: "https://framerusercontent.com/images/YsQeCCtd7ah144yKBrjXBJsNY.svg", body: "Doubled active user retention rates, reached 1m+ monthly logins.", colStart: "lg:col-start-5" },
  { n: "SAP", y: "2022", logo: "https://framerusercontent.com/images/kqPiqaKsSgKuvYdcbQp6ZXHUys.svg", body: "Expanded digital reach across 25+ new regional markets.", colStart: "lg:col-start-2" },
  { n: "GG", y: "2020", logo: "https://framerusercontent.com/images/WtIbCsJOWJeepLURPZ5tlaLNTf8.svg", body: "Reduced operational overhead by 20% using automated systems.", colStart: "lg:col-start-4" },
  { n: "LG", y: "2025", logo: "https://framerusercontent.com/images/ppOuoZRinmdRP58aEZUx0yQ9WyY.svg", body: "Boosted sustainable energy adoption by 30% via data ecosystems.", colStart: "lg:col-start-5" },
];

export default function Partners() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-16 md:py-24 text-white">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-white/80">
          <span className="size-1.5 rounded-full bg-white" />
          Global Partners
        </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-[5.5rem] md:leading-none font-semibold tracking-tight text-white">
          Partners
        </h2>
      </div>

      {/* Grid */}
      <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
        {PARTNERS.map((p, i) => (
          <motion.div
            key={p.n}
            initial={{ opacity: 0, scale: 0.85, y: 30 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{
              type: "spring",
              stiffness: 110,
              damping: 18,
              delay: i * 0.04
            }}
            className={`relative border border-white/10 bg-transparent rounded-[20px] p-5 md:p-6 h-[180px] md:h-[200px] flex flex-col justify-between overflow-hidden group hover:border-white/15 transition-all duration-300 ${p.colStart}`}
          >
            {/* Top row */}
            <div className="flex items-start justify-between">
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white">{p.n}</h3>
              <span className="text-[10px] md:text-xs text-white/45 font-mono">[{p.y}]</span>
            </div>

            {/* Logo Watermark */}
            <div className="absolute right-5 md:right-6 top-1/2 -translate-y-1/2 size-14 md:size-16 flex items-center justify-center pointer-events-none">
              <img
                src={p.logo}
                alt=""
                className="max-h-10 md:max-h-12 max-w-full opacity-60 invert grayscale transition-opacity duration-300 group-hover:opacity-100"
              />
            </div>

            {/* Bottom description */}
            <p className="text-xs text-white/50 leading-relaxed max-w-[200px] z-10">
              {p.body}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
