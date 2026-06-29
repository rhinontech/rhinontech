"use client";

import React from "react";
import { motion } from "framer-motion";

const PARTNERS = [
  { n: "AWS", y: "cloud", logo: "https://framerusercontent.com/images/HNfkQRfxtFK3Miudpvq7xAUe2E.svg", body: "Cloud infrastructure, storage and email that scales with your product.", colStart: "lg:col-start-1" },
  { n: "Next", y: "web", logo: "https://framerusercontent.com/images/r4pCfxmza1YC7R9fAcNWA0pG0.svg", body: "Next.js & React for fast, modern web applications.", colStart: "lg:col-start-2" },
  { n: "Node", y: "api", logo: "https://framerusercontent.com/images/rJ0KiiIZday3Hvz7riIhnX251Kc.svg", body: "Node.js & Express services and APIs that power our products.", colStart: "lg:col-start-3" },
  { n: "Py", y: "data", logo: "https://framerusercontent.com/images/YsQeCCtd7ah144yKBrjXBJsNY.svg", body: "Python for data, ML and AI-heavy services (FastAPI, Django).", colStart: "lg:col-start-5" },
  { n: "PG", y: "db", logo: "https://framerusercontent.com/images/kqPiqaKsSgKuvYdcbQp6ZXHUys.svg", body: "PostgreSQL & pgvector for relational data and embeddings.", colStart: "lg:col-start-2" },
  { n: "RN", y: "mobile", logo: "https://framerusercontent.com/images/WtIbCsJOWJeepLURPZ5tlaLNTf8.svg", body: "React Native & Expo for cross-platform mobile apps.", colStart: "lg:col-start-4" },
  { n: "AI", y: "llm", logo: "https://framerusercontent.com/images/ppOuoZRinmdRP58aEZUx0yQ9WyY.svg", body: "LLMs & RAG (Claude, OpenAI) for agents and assistants.", colStart: "lg:col-start-5" },
];

export default function Partners() {
  return (
    <section className="relative mx-auto max-w-[1400px] px-6 py-16 md:py-24 text-white">
      {/* Header */}
      <div className="flex flex-col gap-6">
        <div className="inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1 text-xs text-white/80">
          <span className="size-1.5 rounded-full bg-white" />
          Technology
        </div>
        <h2 className="font-display text-4xl sm:text-6xl md:text-[5.5rem] md:leading-none font-semibold tracking-tight text-white">
          Built with
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
