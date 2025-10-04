'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";
import { motion } from "framer-motion";





const cards = [
    {
        title: 'Business Chatbot',
        content: 'Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.'
    },
    {
        title: 'Business Chatbot',
        content: 'Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.'
    },
    {
        title: 'Business Chatbot',
        content: 'Enhance customer interactions by automating responses with intelligent chatbots, providing seamless service.'
    }
]
const cardVariants = [
    {
        initial: { opacity: 0, x: -70 }, // from left
        whileInView: { opacity: 1, x: 0 },
    },
    {
        initial: { opacity: 0, y: 70 }, // from bottom
        whileInView: { opacity: 1, y: 0 },
    },
    {
        initial: { opacity: 0, x: 70 }, // from right
        whileInView: { opacity: 1, x: 0 },
    },
];


export default function Services() {
    return (
        <div className="flex flex-col max-sm:px-2 justify-center gap-5 max-sm:py-10 items-center py-20 px-10">
            <motion.div
                className="flex flex-col gap-8 items-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Services</Badge>
                <h1 className="text-5xl max-sm:text-4xl text-center max-w-3xl font-semibold">
                    Innovative services for growth
                </h1>
                <p className="text-muted-foreground max-w-lg text-center">
                    Tailored solutions to streamline, innovate, and grow.
                </p>
            </motion.div>

            <div className="grid mt-5 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 max-w-7xl">
                {cards.map((item, idx) => (
                    <motion.div key={idx}
                        initial={cardVariants[idx].initial}
                        whileInView={cardVariants[idx].whileInView}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                        viewport={{ once: true, amount: 0.7 }}

                    >
                        <Card key={idx} className="w-full bg-card/50 text-white rounded-2xl shadow-xl p-6 space-y-6">
                            {/* Chat mockup */}
                            <div className="relative space-y-3">
                                <div className="space-y-3 relative [mask-image:linear-gradient(to_top,transparent,white_15%,white_100%)]">
                                    <div className="h-10 w-3/4 rounded-lg bg-neutral-800 flex items-center px-3">
                                        <div className="h-2 w-2/3 rounded bg-neutral-600" />
                                    </div>
                                    <div className="h-10 w-2/3 rounded-lg bg-neutral-800 flex items-center px-3 ml-auto">
                                        <div className="h-2 w-1/2 rounded bg-neutral-600" />
                                    </div>
                                    <div className="h-10 w-5/6 rounded-lg bg-neutral-800 flex items-center px-3">
                                        <div className="h-2 w-2/3 rounded bg-neutral-600" />
                                    </div>
                                    <div className="h-10 w-2/3 rounded-lg bg-neutral-800 flex items-center px-3 ml-auto">
                                        <div className="h-2 w-1/2 rounded bg-neutral-600" />
                                    </div>
                                </div>
                                <div className="flex absolute z-10 -bottom-4 left-1/2 -translate-x-1/2 w-[80%] items-center gap-2 rounded-lg px-3 py-2 overflow-hidden">
                                    {/* Animated border line */}
                                    <motion.div
                                        className="absolute inset-0 rounded-[10px] pointer-events-none"
                                        style={{
                                            border: "1px solid transparent",
                                            background:
                                                "linear-gradient(90deg, transparent, rgba(59,130,246,1), transparent)", // blue line
                                            backgroundSize: "200% 100%",
                                        }}
                                        animate={{ backgroundPosition: ["200% 0", "-200% 0"] }}
                                        transition={{
                                            duration: 3,
                                            repeat: Infinity,
                                            ease: "linear",
                                        }}
                                    />

                                    {/* Input and button content */}
                                    <div className="relative flex items-center gap-2 w-full bg-neutral-900 rounded-lg px-3 py-2">
                                        <Input
                                            placeholder="Ask me something.."
                                            disabled
                                            className="bg-transparent border-0 text-sm placeholder:text-neutral-400 text-white focus-visible:ring-0 focus-visible:ring-offset-0"
                                        />
                                        <Button
                                            size="icon"
                                            variant="ghost"
                                            className="text-white hover:bg-neutral-800"
                                        >
                                            <Send className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </div>
                            </div>

                            {/* Text content */}
                            <CardContent className="p-0">
                                <h3 className="text-lg font-semibold">{item.title}</h3>
                                <p className="text-sm text-neutral-400 mt-2">
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