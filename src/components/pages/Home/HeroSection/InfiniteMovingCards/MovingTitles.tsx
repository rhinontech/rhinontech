"use client";

import React from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export function MovingTitles() {
  return (
    <div className="h-fit rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="left"
        speed="fast"
      />
    </div>
  );
}

const testimonials = [
  {
    name: "Charles Dickens",
    icon: "A Tale of Two Cities",
  },
  {
    name: "Charles Dickens",
    icon: "A Tale of Two Cities",
  },
  {
    name: "Charles Dickens",
    icon: "A Tale of Two Cities",
  },
  {
    name: "Charles Dickens",
    icon: "A Tale of Two Cities",
  },
  {
    name: "Charles Dickens",
    icon: "A Tale of Two Cities",
  },
];
