'use client'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { TrendingDown } from "lucide-react";
import { motion } from 'framer-motion';


const cards = [
    {
        title: "Cost reduction",
        content: 'Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.',
        icon: <TrendingDown className="h-5 w-5 text-neutral-300" />,
    },
    {
        title: "Cost reduction",
        content: 'Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.',
        icon: <TrendingDown className="h-5 w-5 text-neutral-300" />,
    },
    {
        title: "Cost reduction",
        content: 'Optimize business processes and streamline operations to significantly minimize costs and maximize overall efficiency.',
        icon: <TrendingDown className="h-5 w-5 text-neutral-300" />,
    }
]
const cardVariants = [
    {
        initial: { opacity: 0, y: 100 }, // from left
        whileInView: { opacity: 1, y: 0 },
    },
    {
        initial: { opacity: 0, y: 100 }, // from bottom
        whileInView: { opacity: 1, y: 0 },
    },
    {
        initial: { opacity: 0, y: 100 }, // from right
        whileInView: { opacity: 1, y: 0 },
    },
];


export default function Benefits() {
    return (
        <div className="flex flex-col max-sm:px-2 max-sm:py-10 justify-center gap-8 items-center py-20 px-10">
            <motion.div
                className="flex flex-col gap-8 items-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Benefits</Badge>
                <h1 className="text-5xl max-sm:text-4xl text-center max-w-3xl font-semibold">
                    Maximize efficiency and impact
                </h1>
                <p className="text-muted-foreground max-w-lg text-center">
                    Discover the key benefits of partnering with us.
                </p>

            </motion.div>

            <div className="grid mt-5 grid-cols-3 max-lg:grid-cols-2 max-md:grid-cols-1 gap-5 max-w-7xl">
                {cards.map((item, idx) => (
                    <motion.div key={idx}
                        initial={cardVariants[idx].initial}
                        whileInView={cardVariants[idx].whileInView}
                        transition={{ duration: 0.4, ease: "easeOut", delay: idx * 0.2 }}
                        viewport={{ once: true, amount: 1 }}

                    >
                        <Card key={idx} className="relative w-full rounded-3xl bg-neutral-950 text-white p-6 overflow-hidden">
                            {/* Blue beam glow */}
                            <div className="absolute -right-1/4 -top-1/2 rounded-full h-full w-1/2 bg-gradient-to-l from-primary via-primary to-transparent blur-3xl" />

                            <CardContent className="relative z-10 p-0 space-y-4">
                                {/* Icon */}
                                <div className="w-10 h-10 rounded-2xl bg-neutral-800 flex items-center justify-center">
                                    {item.icon}
                                </div>

                                {/* Title */}
                                <h3 className="text-lg font-semibold">{item.title}</h3>

                                {/* Description */}
                                <p className="text-sm text-neutral-400 leading-relaxed">
                                    {item.content}
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>

                ))}
            </div>

        </div>
    )
}