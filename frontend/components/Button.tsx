import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface ButtonProps {
    text?: string;
    onClick?: (e: React.MouseEvent) => void;
    href?: string;
    className?: string;
}

export default function Button({ text = "Start Project", onClick, href, className = "" }: ButtonProps) {
    const content = (
        <>
            {/* Black Background Expandable Layer */}
            <motion.div
                variants={{
                    initial: { width: 38, height: 38, y: "-50%", borderRadius: "8px" },
                    hover: { width: "calc(100% - 4px)", height: 38, y: "-50%", borderRadius: "8px" }
                }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="absolute right-[2px] top-1/2 bg-black z-0 pointer-events-none"
            />

            {/* Text area */}
            <div className="relative h-7 flex items-center z-10 overflow-hidden pointer-events-none">
                {/* invisible placeholder to establish width */}
                <span className="opacity-0 font-semibold text-[15px] pointer-events-none select-none whitespace-nowrap">
                    {text}
                </span>

                {/* Black Text (Initial) */}
                <motion.span
                    variants={{
                        initial: { y: 0, opacity: 1 },
                        hover: { y: -22, opacity: 0, transition: { duration: 0.15, ease: "easeIn" } }
                    }}
                    className="absolute left-0 text-[15px] font-semibold text-black whitespace-nowrap"
                >
                    {text}
                </motion.span>

                {/* White Text (Hovered) */}
                <motion.span
                    variants={{
                        initial: { y: 22, opacity: 0 },
                        hover: { y: 0, opacity: 1, transition: { delay: 0.2, duration: 0.3, ease: "easeOut" } }
                    }}
                    className="absolute left-0 text-[15px] font-semibold text-white whitespace-nowrap"
                >
                    {text}
                </motion.span>
            </div>

            {/* Chevron Icon (always visible on top) */}
            <div className="absolute right-[2px] top-1/2 -translate-y-1/2 w-[38px] h-[38px] flex items-center justify-center z-10 text-white pointer-events-none">
                <ChevronRight className="size-4" />
            </div>
        </>
    );

    const baseClass = "relative overflow-hidden bg-white border border-white rounded-[10px] w-fit inline-flex items-center h-11 pl-5 pr-[50px] gap-3 cursor-pointer select-none";

    if (href) {
        return (
            <motion.a
                href={href}
                whileHover="hover"
                initial="initial"
                className={`${baseClass} ${className}`}
            >
                {content}
            </motion.a>
        );
    }

    return (
        <motion.button
            onClick={onClick}
            whileHover="hover"
            initial="initial"
            className={`${baseClass} ${className}`}
        >
            {content}
        </motion.button>
    );
}
