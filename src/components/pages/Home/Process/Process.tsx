'use client'
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from 'framer-motion'



const cards = [
    {
        title: 'Discovery & Analysis',
        content: 'We dive deep into your needs, exploring ideas and defining strategies for long-term success.',
    },
    {
        title: 'Discovery & Analysis',
        content: 'We dive deep into your needs, exploring ideas and defining strategies for long-term success.',
    },
    {
        title: 'Discovery & Analysis',
        content: 'We dive deep into your needs, exploring ideas and defining strategies for long-term success.',
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

export default function Process() {
    return (
        <div className="flex flex-col justify-center max-sm:py-10 max-sm:px-2 gap-8 items-center py-20 px-10">
            <motion.div
                className="flex flex-col gap-8 items-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Process</Badge>
                <h1 className="text-5xl max-sm:text-4xl text-center max-w-3xl font-semibold">
                    Your path to excellence
                </h1>
                <p className="text-muted-foreground max-w-lg text-center">
                    A simple, effective approach to deliver excellence.
                </p>
            </motion.div>
            <div className="grid mt-5 grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 max-w-7xl">
                {cards.map((item, idx) => (
                    <motion.div key={idx}
                        initial={cardVariants[idx].initial}
                        whileInView={cardVariants[idx].whileInView}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.7 }}

                    >
                        <Card className="w-full px-5 border bg-card/50 text-white rounded-3xl shadow-2xl overflow-hidden">
                            {/* Visual Header Area */}
                            <CardHeader className=" py-2 bg-[#222222] rounded-2xl [mask-image:linear-gradient(to_top,transparent,white_15%,white_100%)]">
                                <div className="flex flex-col space-y-4">
                                    {/* Top Bar with "traffic lights" */}
                                    <div className="flex space-x-1.5 self-start">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>

                                    {/* Mock Dashboard Layout */}
                                    <div className="grid grid-cols-2 gap-4 h-48">
                                        {/* Top Left: Bar Chart */}
                                        <div className="col-span-1 p-4 bg-[#2a2a2a] rounded-lg flex items-center justify-center">
                                            {/* Mock Bar Chart */}
                                            <div className="flex space-x-1 h-3/4 items-end">
                                                <div className="w-1.5 h-1/4 bg-gray-600 rounded-sm"></div>
                                                <div className="w-1.5 h-2/4 bg-gray-600 rounded-sm"></div>
                                                <div className="w-1.5 h-3/4 bg-indigo-500 rounded-sm"></div>
                                                <div className="w-1.5 h-1/2 bg-gray-600 rounded-sm"></div>
                                            </div>
                                        </div>

                                        {/* Top Right: Target Graphic */}
                                        <div className="col-span-1 p-4 bg-[#2a2a2a] rounded-lg flex items-center justify-center relative">
                                            {/* Concentric Circles for Target */}
                                            <div className="w-24 h-24 rounded-full border-2 border-gray-700 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full border-2 border-gray-700 flex items-center justify-center">
                                                    <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
                                                        {/* Arrow/Pointer */}
                                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                                            <div className="w-0.5 h-10 bg-indigo-500 -rotate-45 transform origin-bottom-left"></div>
                                                            <div className="w-1 h-1 bg-indigo-500 rounded-full absolute bottom-0 right-0 transform translate-x-1/4 translate-y-1/4"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Bottom Row: Text Blocks (Simplified to match image layout) */}
                                        <div className="col-span-2 flex space-x-4">
                                            {/* Mock Text Block 1 */}
                                            <div className="w-1/2 p-2 bg-[#2a2a2a] rounded-lg">
                                                <div className="space-y-1">
                                                    <div className="h-2 w-full bg-gray-600 rounded"></div>
                                                    <div className="h-2 w-11/12 bg-gray-600 rounded"></div>
                                                    <div className="h-2 w-3/4 bg-gray-600 rounded"></div>
                                                </div>
                                            </div>
                                            {/* Mock Text Block 2 */}
                                            <div className="w-1/2 p-2 bg-[#2a2a2a] rounded-lg">
                                                <div className="space-y-1">
                                                    <div className="h-2 w-full bg-gray-600 rounded"></div>
                                                    <div className="h-2 w-11/12 bg-gray-600 rounded"></div>
                                                    <div className="h-2 w-3/4 bg-gray-600 rounded"></div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </CardHeader>

                            {/* Text Content Area */}
                            <CardContent className="px-0">
                                <CardTitle className="text-2xl mb-3">
                                    {item.title}
                                </CardTitle>
                                <CardDescription className="text-md text-muted-foreground leading-relaxed">
                                    {item.content}
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}


            </div>

        </div>
    )
}