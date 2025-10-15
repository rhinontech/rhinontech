"use client";
import React, { useEffect, useRef } from "react";

// Reusable BentoItem component
const BentoItem = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const item = itemRef.current;
    if (!item) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = item.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      item.style.setProperty("--mouse-x", `${x}px`);
      item.style.setProperty("--mouse-y", `${y}px`);
    };

    item.addEventListener("mousemove", handleMouseMove);

    return () => {
      item.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div ref={itemRef} className={`bento-item ${className || ""}`}>
      {children}
    </div>
  );
};

// Main Component
export const CyberneticBentoGrid = () => {
  return (
    <section className="bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="w-full max-w-6xl mx-auto z-10">
          <h2 className="text-3xl sm:text-5xl font-bold text-center   bg-gradient-text-radial bg-clip-text text-transparent mb-8">
            Everything you need to engage, warmup, and convert your website
            leads at one place
          </h2>
          <div className="bento-grid">
            <BentoItem className="col-span-2 row-span-2 flex flex-col justify-between">
              <div>
                <h2 className="text-2xl font-bold text-foreground">
                  AI Support Chatbot
                </h2>
                <p className="mt-2 text-muted-foreground">
                  Handles all customer queries across website
                </p>
              </div>
              <div className="mt-4 h-48 bg-muted rounded-lg flex items-center justify-center text-muted-foreground">
                Chart Placeholder
              </div>
            </BentoItem>
            <BentoItem>
              <h2 className="text-xl font-bold text-foreground">
                Support Ticket Management
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Built-in ticketing system to organize and manage customer
                support requests
              </p>
            </BentoItem>
            <BentoItem className="row-span-2">
              <h2 className="text-xl font-bold text-foreground">
                Smart Campaigns & Triggers
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Targeted campaigns to engage website visitors based on
                behavioral signals
              </p>
            </BentoItem>
            <BentoItem className="row-span-2">
              <h2 className="text-xl font-bold text-foreground">
                Built-in CRM
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Centralized CRM to manage all contacts, deals, and interactions
              </p>
            </BentoItem>
            <BentoItem className="col-span-2">
              <h2 className="text-xl font-bold text-foreground">
                SEO Analytics
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Technical SEO monitoring and performance insights for the
                connected website
              </p>
            </BentoItem>
            <BentoItem>
              <h2 className="text-xl font-bold text-foreground">
                Knowledge Base & Custom Docs
              </h2>
              <p className="mt-2 text-muted-foreground text-sm">
                Centralized repository of company documents and data for the
                chatbot
              </p>
            </BentoItem>
          </div>
        </div>
      </div>
    </section>
  );
};
