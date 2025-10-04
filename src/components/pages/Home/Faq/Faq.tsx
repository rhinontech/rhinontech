'use client'
import { Badge } from '@/components/ui/badge'
import { Spotlight } from '@/components/ui/spotlight';
import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react';
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

const faqs = [
    {
        question: "What are AI development services?",
        answer:
            "AI development services include building intelligent solutions such as chatbots, predictive analytics systems, computer vision applications, and process automation tools. These services help organizations improve efficiency, decision-making, and customer experiences."
    },
    {
        question: "What types of processes can be automated using AI?",
        answer:
            "AI can automate a wide range of processes including customer support, data entry, fraud detection, report generation, lead qualification, workflow optimization, and predictive maintenance. Essentially, any repetitive or data-driven task can be streamlined using AI."
    },
    {
        question: "How long does it take to implement AI automation?",
        answer:
            "The timeline depends on the complexity of the project. Simple automation tasks can take a few weeks, while more advanced AI solutions that involve custom models and integrations may take several months. A proper discovery phase helps estimate timelines more accurately."
    },
    {
        question: "Will AI automation disrupt my current operations?",
        answer:
            "No, AI automation is designed to integrate smoothly into existing systems. With the right planning and phased rollout, it enhances current operations rather than disrupting them. In fact, it reduces manual workload and helps teams focus on higher-value tasks."
    },
    {
        question: "How much does AI automation cost?",
        answer:
            "The cost of AI automation varies based on the scope, complexity, and technology stack required. Smaller projects may start in the low thousands, while enterprise-scale solutions can be more significant investments. Many providers offer tailored pricing after an initial consultation."
    }
];


export default function Faq() {
    const [selectedIndex, setSelectedIndex] = useState(-1);
    return (
        <div className="flex flex-col max-sm:py-10 justify-center gap-8 max-sm:px-2 items-center py-20 px-10">
            <motion.div
                className="flex flex-col gap-8 items-center"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true }} // 👈 only animate on first view
            >
                <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Faq</Badge>
                <h1 className="text-5xl max-sm:text-4xl text-center max-w-3xl font-semibold">
                    We’re here to help
                </h1>
                <p className="text-muted-foreground max-w-lg text-center">
                    FAQs designed to provide the information you need.
                </p>
            </motion.div>
            <motion.div
                className="mt-5 overflow-hidden relative flex flex-col gap-3 max-w-6xl mx-auto"
                initial={{ opacity: 0, y: 50, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                viewport={{ once: true, amount: 0.7 }} // 👈 only animate on first view
            >
                <Spotlight
                    className="-top-32 left-1/2 -translate-x-1/2 -rotate-10"
                    fill="oklch(37.9% 0.146 265.522)"
                    rx={1800}
                    ry={200}
                />
                {faqs.map((faq, faqIndex) => (
                    <div
                        key={faq.question}
                        onClick={() => {
                            if (selectedIndex === faqIndex) {
                                setSelectedIndex(-1);
                            } else {
                                setSelectedIndex(faqIndex)
                            }
                        }}
                        className="bg-white/2 backdrop-blur-md z-10 w-4xl max-lg:w-3xl max-md:w-2xl max-sm:w-full rounded-2xl border border-white/10 px-6 py-4 "
                    >
                        <div className="flex justify-between items-start">
                            <h3 className="font-medium m-0">{faq.question}</h3>
                            <Plus
                                size={26}
                                className={twMerge(
                                    "feather feather-plus text-[#FFFFFF] flex-shrink-0 transition duration-300",
                                    selectedIndex === faqIndex && "rotate-45"
                                )}
                            />
                        </div>

                        <AnimatePresence>
                            {selectedIndex === faqIndex && (
                                <motion.div
                                    initial={{
                                        height: 0,
                                        marginTop: 0,
                                    }}
                                    animate={{
                                        height: "auto",
                                        marginTop: 24,
                                    }}
                                    exit={{
                                        height: 0,
                                        marginTop: 0,
                                    }}
                                    className="overflow-hidden"
                                >
                                    <p className="text-white/50">{faq.answer}</p>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </motion.div>
        </div>
    )
}