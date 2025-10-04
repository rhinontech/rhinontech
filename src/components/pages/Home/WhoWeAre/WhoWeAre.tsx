'use client'
import { Badge } from "@/components/ui/badge";
import { motion } from 'framer-motion'


export default function WhoWeAre() {
    return (
        <div className="flex flex-col justify-center gap-8 items-center max-sm:pt-0 max-sm:pb-10 py-20 px-10">
            <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Who we are</Badge>
            </motion.div>
            <h1 className="text-4xl text-center max-w-3xl max-sm:text-3xl font-semibold">
                We are Radison, we help founders like you to automate their day to day business operations with the help of AI
            </h1>
        </div >
    )
}