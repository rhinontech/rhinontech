"use client";

import { useEffect, useRef, useState } from "react";
import { Sparkles, Rocket, Shield, Zap } from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface Feature {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
  imageSrc: string;
  badge: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Lightning Fast Performance",
    description:
      "Experience blazing speeds with our optimized infrastructure. Built for scale, designed for performance.",
    icon: <Zap className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop",
    badge: "shadcnblocks.com",
  },
  {
    id: 2,
    title: "Enterprise Grade Security",
    description:
      "Your data is protected with military-grade encryption. Sleep soundly knowing your information is safe.",
    icon: <Shield className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&h=600&fit=crop",
    badge: "shadcnblocks.com",
  },
  {
    id: 3,
    title: "Seamless Integration",
    description:
      "Connect with all your favorite tools effortlessly. One platform, infinite possibilities.",
    icon: <Sparkles className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    badge: "shadcnblocks.com",
  },
  {
    id: 4,
    title: "Scale Without Limits",
    description:
      "Grow your business without constraints. Our platform scales seamlessly with your success.",
    icon: <Rocket className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    badge: "shadcnblocks.com",
  },
];

export default function HowItWorks() {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const imageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!imageContainerRef.current) return;

      const imageRect = imageContainerRef.current.getBoundingClientRect();
      const imageCenterY = imageRect.top + imageRect.height / 2;

      // Find which card is closest to the center of the image
      let closestIndex = 0;
      let minDistance = Infinity;

      cardRefs.current.forEach((card, index) => {
        if (!card) return;

        const cardRect = card.getBoundingClientRect();
        const cardCenterY = cardRect.top + cardRect.height / 2;
        const distance = Math.abs(cardCenterY - imageCenterY);

        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative text-white py-20 mx-auto w-full max-w-6xl">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-sm text-gray-400">Features</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            Built for the Future
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Everything you need to build, scale, and succeed
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left - Scrolling Cards */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="min-h-[600px] flex items-center"
              >
                <div
                  className={`w-full transition-all duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex flex-col gap-5">
                    <Badge
                      variant="outline"
                      className="w-fit transition-all duration-500"
                    >
                      {feature.badge}
                    </Badge>
                    <h3 className="text-3xl font-semibold lg:text-5xl">
                      {feature.title}
                    </h3>
                    <p className="text-gray-400 lg:text-lg">
                      {feature.description}
                    </p>
                    <button className="mt-2.5 w-fit inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right - Sticky Image */}
          <div className="relative lg:block hidden">
            <div ref={imageContainerRef} className="sticky top-32 h-[550px]">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={`absolute inset-0 transition-all duration-700 ease-out ${
                      activeIndex === index
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  >
                    <img
                      src={feature.imageSrc}
                      alt={feature.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                    {/* Glow effect */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                    </div>
                  </div>
                ))}

                {/* Border */}
                {/* <div className="absolute inset-0 rounded-2xl border border-white/10" /> */}
              </div>

              {/* Counter */}
              <div className="mt-6 flex items-center justify-between">
                <div className="text-sm text-gray-500">
                  <span className="text-3xl font-bold text-white">
                    {String(activeIndex + 1).padStart(2, "0")}
                  </span>
                  <span className="text-gray-600">
                    {" "}
                    / {String(features.length).padStart(2, "0")}
                  </span>
                </div>

                <div className="flex gap-2">
                  {features.map((_, index) => (
                    <div
                      key={index}
                      className={`h-1.5 rounded-full transition-all duration-500 ${
                        index === activeIndex
                          ? "w-10 bg-gradient-to-r from-blue-500 to-purple-600"
                          : "w-4 bg-white/20"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animated background */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl" />
      </div> */}
    </div>
  );
}
