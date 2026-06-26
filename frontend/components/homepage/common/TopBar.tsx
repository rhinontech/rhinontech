"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/Button";

export default function TopBar() {
    const [time, setTime] = useState("");
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

    return (
        <motion.header
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-6 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-20 py-5"
        >
            <div className="flex items-center gap-3">
                <motion.button
                    whileHover="hover"
                    initial="initial"
                    className="bg-[#5a5c5f] backdrop-blur flex items-center gap-3 rounded-[12px] p-1.5 pr-6 text-[15px] font-semibold text-black border border-white/10"
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
                    <span className="font-bold text-lg">Menu</span>
                </motion.button>
                <div className="hidden text-lg text-white/70 md:flex items-center gap-2 tracking-tight">
                    <span>/ New York, USA - {time}</span>
                </div>
            </div>

            <Button href="#contact" text="Start Project" />
        </motion.header>
    );
}
