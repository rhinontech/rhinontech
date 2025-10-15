"use client";

import { useEffect, useRef, useState } from "react";
import { Bot, MessageSquare, Share2, Database, BarChart3 } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

interface Feature {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  highlight: string;
  cta?: string;
  icon: React.ReactNode;
  imageSrc: string;
}

const features: Feature[] = [
  {
    id: 1,
    title: "Step 1: Capture",
    subtitle: "AI chatbot greets every visitor.",
    description:
      "Rhinontech engages website visitors the moment they land, answering queries, collecting details, and identifying intent using your custom-trained data.",
    highlight:
      "No visitor left unattended. Every chat becomes a qualified lead.",
    cta: "Try Now",
    icon: <Bot className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1581090700227-1e37b190418e?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Step 2: Engage",
    subtitle: "Personalized conversations, triggered at the right moment.",
    description:
      "Behavioral targeting and smart triggers (scroll depth, time on page, exit intent) deliver tailored offers, resources, or recommendations automatically.",
    highlight: "Turn passive visitors into engaged prospects",
    icon: <MessageSquare className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Step 3: Route & Assign",
    subtitle: "The right leads to the right person. Instantly.",
    description:
      "Route your leads to sales, support, or marketing teams based on their journey stage.",
    highlight: "Faster response, higher conversions, zero miscommunication",
    icon: <Share2 className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Manage & Nurture",
    subtitle: "Everything lives inside the built-in CRM",
    description:
      "Track conversations, deals, and customer data in one view. Run automated email or AI-assisted outreach to nurture leads through your pipeline.",
    highlight: "From first chat to deal close — fully connected",
    icon: <Database className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1581091870627-3a506c8a06c0?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Analyze & Improve",
    subtitle: "See what’s working. Fix what’s not.",
    description:
      "Monitor your website’s SEO health, track campaign performance, and get actionable insights on lead flow and conversions.",
    highlight: "Continuous optimization, powered by data",
    icon: <BarChart3 className="w-6 h-6" />,
    imageSrc:
      "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&h=600&fit=crop",
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
            <span className="text-sm text-gray-400">Workflow</span>
          </div>
          <h2 className="text-3xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
            How Rhinontech Works
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            From first chat to closed deal — one AI layer powers your entire
            customer journey
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          {/* Left - Scrolling Cards */}
          <div className="space-y-16">
            {features.map((feature, index) => (
              <div
                key={feature.id}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className="min-h-[500px] flex items-center"
              >
                <div
                  className={`w-full transition-all duration-500 ${
                    activeIndex === index ? "opacity-100" : "opacity-40"
                  }`}
                >
                  <div className="flex flex-col gap-5">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-white/10">
                        {feature.icon}
                      </div>
                      <Badge
                        variant="outline"
                        className="transition-all duration-500"
                      >
                        {`Step ${feature.id}`}
                      </Badge>
                    </div>
                    <h3 className="text-3xl font-semibold lg:text-4xl">
                      {feature.title}
                    </h3>
                    <p className="text-lg text-gray-300 font-medium">
                      {feature.subtitle}
                    </p>
                    <p className="text-gray-400 lg:text-lg">
                      {feature.description}
                    </p>
                    <p className="text-blue-400 font-semibold">
                      {feature.highlight}
                    </p>
                    {feature.cta && (
                      <button className="mt-3 w-fit inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-semibold hover:bg-white/90 transition-colors">
                        <Link href="https://app.rhinontech.com/auth/signup">
                          {feature.cta}
                        </Link>
                      </button>
                    )}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    <div
                      className={`absolute inset-0 transition-opacity duration-700 ${
                        activeIndex === index ? "opacity-100" : "opacity-0"
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20" />
                    </div>
                  </div>
                ))}
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
    </div>
  );
}
