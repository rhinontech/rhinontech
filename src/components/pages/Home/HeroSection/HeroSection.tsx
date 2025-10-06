'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MovingTitles } from "./InfiniteMovingCards/MovingTitles";
import { Spotlight } from "@/components/ui/spotlight";
import { motion } from 'framer-motion';
import Image from "next/image";


export default function HeroSection() {
    return (
        <div className="flex overflow-hidden z-10 bg-black min-h-screen relative flex-col justify-center gap-5 items-center px-10">
            <div className="absolute  left-1/2 -translate-x-1/2 -top-30 w-6xl">
                <Image src="https://i.pinimg.com/originals/a9/4a/ee/a94aee835e16cff4f14c83dac8ffbe10.gif" alt="animation" width={200} height={100}
                    style={{
                        filter: "hue-rotate(-30deg) saturate(3) brightness(0.7)"
                    }} className=" mix-blend-screen opacity-80 w-full h-auto" />
            </div>
            <div className="absolute inset-0 bg-black/2 backdrop-blur-[5px]"></div>
            <Spotlight
                className="-top-120 -left-100"
                fill="oklch(37.9% 0.146 265.522)"
                rx={1800}
                ry={200}
            />
            <Spotlight
                className="-bottom-120 -right-120"
                fill="oklch(37.9% 0.146 265.522)"
                rx={1800}
                ry={200}
            />
            <motion.div
                className="flex z-10 items-center flex-col gap-5"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Badge variant="outline" className="py-2 rounded-[5px] text-sm">Radison - AI Automation Partner</Badge>

            </motion.div>
            <motion.h1
                className="text-6xl z-10 text-center max-sm:text-4xl max-w-4xl font-semibold"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                Transfroming workflows with AI Powered automation
            </motion.h1>
            <motion.p
                className="text-muted-foreground z-10 max-w-lg text-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                Experience the future of business with intelligent, scalable automation solutions tailored to your needs
            </motion.p>
            <motion.div
                className="flex gap-5 z-10"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Button variant={'default'} className="rounded-[10px] text-white">Our Services</Button>
                <Button variant={'outline'} className="rounded-[10px]">See Plans</Button>
            </motion.div>
            <motion.div
                className="z-10"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <MovingTitles />
            </motion.div>
        </div>
    )
}