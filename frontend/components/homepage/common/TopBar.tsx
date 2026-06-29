"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Button from "@/components/Button";

const TwitterIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
    </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
);

const DribbbleIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
    >
        <circle cx="12" cy="12" r="10" />
        <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94" />
        <path d="M21.75 12.84c-6.62-1.41-12.15 1-14.88 6.69" />
        <path d="M5.16 19.17c2.25-5.91 7.78-9.91 14.16-9.17" />
    </svg>
);

export default function TopBar() {
    const [time, setTime] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const update = () => {
            const d = new Date();
            const opts: Intl.DateTimeFormatOptions = {
                hour: "numeric",
                minute: "2-digit",
                hour12: true,
                timeZone: "America/New_York",
            };
            setTime(new Intl.DateTimeFormat("en-US", opts).format(d));
        };
        update();
        const i = setInterval(update, 30_000);
        return () => clearInterval(i);
    }, []);

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const sidebarVariants = {
        open: {
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.1,
                delayChildren: 0.1,
            }
        },
        closed: {
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.05,
                staggerDirection: -1,
            }
        }
    } as const;

    const linkVariants = {
        open: { y: 0, opacity: 1 },
        closed: { y: 20, opacity: 0 },
    } as const;

    return (
        <>
            <motion.header
                initial={{ y: -40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="absolute top-4 md:top-6 left-0 right-0 z-50 flex items-center justify-end sm:justify-between px-4 sm:px-6 md:px-20 py-3 md:py-5"
            >
                <div className="flex items-center gap-3">
                    <motion.button
                        onClick={() => setIsOpen(true)}
                        whileHover="hover"
                        initial="initial"
                        className="bg-[#5a5c5f] backdrop-blur flex items-center gap-3 rounded-[12px] p-1.5 sm:pr-6 text-[15px] font-semibold text-black border border-white/10 cursor-pointer scale-90 sm:scale-100 origin-right sm:origin-left"
                    >
                        <div className="relative size-10 bg-black rounded-[10px] overflow-hidden flex flex-col items-center justify-center gap-[3px]">
                            <motion.div
                                variants={{
                                    hover: { height: "100%" },
                                    initial: { height: "0%" }
                                }}
                                transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                className="absolute inset-x-0 bottom-0 bg-white"
                            />
                            {[0, 1, 2].map((idx) => (
                                <motion.span
                                    key={idx}
                                    variants={{
                                        initial: { backgroundColor: "#ffffff" },
                                        hover: { backgroundColor: "#000000" }
                                    }}
                                    transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
                                    className="block h-[1.5px] w-4 z-10"
                                />
                            ))}
                        </div>
                        <span className="font-bold text-lg hidden sm:inline">Menu</span>
                    </motion.button>
                    <div className="hidden text-lg text-white/70 md:flex items-center gap-2 tracking-tight">
                        <span>/ New York, USA - {time}</span>
                    </div>
                </div>

                <Button href="#contact" text="Start Project" className="hidden max-sm:hidden sm:inline-flex scale-90 sm:scale-100 origin-right" />
            </motion.header>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 0.5 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsOpen(false)}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                        />

                        {/* Sidebar Drawer */}
                        <motion.div
                            variants={sidebarVariants}
                            initial="closed"
                            animate="open"
                            exit="closed"
                            className="fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[480px] bg-[#0a0a0d] border-l border-white/10 p-8 sm:p-12 flex flex-col justify-between"
                        >
                            {/* Close button */}
                            <div className="flex justify-start">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="text-white/40 hover:text-white transition duration-300 cursor-pointer"
                                    aria-label="Close menu"
                                >
                                    <X className="size-6" />
                                </button>
                            </div>

                            {/* Navigation Links */}
                            <div className="flex flex-col space-y-6 my-auto pt-10">
                                {[
                                    { label: "Home", href: "/" },
                                    { label: "About", href: "/about" },
                                ].map((link, idx) => (
                                    <motion.div key={idx} variants={linkVariants}>
                                        <a
                                            href={link.href}
                                            onClick={() => setIsOpen(false)}
                                            className="font-display text-5xl sm:text-6xl font-semibold tracking-tight text-white/90 hover:text-white hover:pl-2 transition-all duration-300 block"
                                        >
                                            {link.label}
                                        </a>
                                    </motion.div>
                                ))}
                            </div>

                            {/* Bottom Section */}
                            <motion.div variants={linkVariants} className="space-y-8 pt-6 border-t border-white/10">
                                <div className="space-y-1">
                                    <div className="text-white/40 text-xs uppercase tracking-[0.2em]">Contact</div>
                                    <a href="tel:+0278346236" className="block text-white/70 hover:text-white transition-colors text-sm sm:text-base">
                                        +027 834 6236
                                    </a>
                                    <a href="mailto:hello@norvin.agency" className="block text-lg sm:text-xl font-medium text-white hover:text-white/80 transition-colors">
                                        hello@norvin.agency
                                    </a>
                                </div>

                                {/* Social Links */}
                                <div className="flex items-center gap-3">
                                    {[
                                        { Icon: TwitterIcon, href: "#" },
                                        { Icon: InstagramIcon, href: "#" },
                                        { Icon: DribbbleIcon, href: "#" },
                                    ].map(({ Icon, href }, idx) => (
                                        <a
                                            key={idx}
                                            href={href}
                                            className="flex size-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/60 hover:text-black hover:bg-white hover:border-white transition-all duration-300"
                                        >
                                            <Icon className="size-4" />
                                        </a>
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
