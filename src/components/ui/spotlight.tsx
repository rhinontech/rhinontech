import React from "react";
import { cn } from "@/lib/utils";

type SpotlightProps = {
  className?: string;
  fill?: string;
  rx?: number;
  ry?: number;
};

export const Spotlight = ({ className, fill, rx = 1800, ry = 300 }: SpotlightProps) => {
  return (
    <svg
      className={cn(
        " pointer-events-none absolute z-[1] h-[169%] w-[150%] lg:w-[84%] opacity-100",
        className
      )}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 3787 2842"
      fill="none"
    >
      <g filter="url(#filter)">
        <ellipse
          cx="1890"
          cy="1420"
          rx={rx}   // width (X radius)
          ry={ry}    // height (Y radius)
          fill={fill || "white"}
          fillOpacity="0.3"
        />
      </g>
      <defs>
        <filter
          id="filter"
          x="0.860352"
          y="0.838989"
          width="3785.16"
          height="2840.26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          ></feBlend>
          <feGaussianBlur
            stdDeviation="151"
            result="effect1_foregroundBlur_1065_8"
          ></feGaussianBlur>
        </filter>
      </defs>
    </svg>
  );
};
