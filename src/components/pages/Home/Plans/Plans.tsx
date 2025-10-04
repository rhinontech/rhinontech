'use client'
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { p } from "framer-motion/client";
import { Check, CheckCircle2, Layers, Layers2 } from "lucide-react";
import React ,{ useState } from "react";



const plans = [
    {
        icon: <Layers2 />,
        title: 'Basic',
        annualPrice: 1200,
        monthlyPrice: 120,
        content: 'Essential tools and features for starting your journey with ease.',
        buttonContent: 'Go with this plan →',
        features: [
            "Basic workflow automation",
            "Basic chatbot development",
            "60 content request",
            "E-mail support",
            "1 consultation a month",
        ]

    },
    {
        icon: <Layers />,
        title: 'Professional',
        annualPrice: 1200,
        monthlyPrice: 120,
        content: 'Advanced capabilities designed to meet growing business needs.',
        buttonContent: 'Go with this plan →',
        features: [
            " Advance workflow automation",

            "Advance chatbot development",

            "150 content request",

            "E-mail support",

            "2 consultation a month",
        ]

    },
    {
        icon: <Layers />,
        title: 'Enterprises',
        annualPrice: 'Custom',
        monthlyPrice: 'Custom',
        content: 'Comprehensive solutions tailored for large-scale business success.',
        buttonContent: 'Schedule a call →',
        features: [
            "Custom workflow automation",

            "Custom chatbot development",

            "Unlimited content request",

            "24hr priority support",

            "Unlimited consultation a month",
        ]

    },
]

export default function Plans() {

    const [planStatus, setPlanStatus] = useState('Monthly');
    
    return (
        <div className="flex flex-col justify-center gap-8 items-center py-20 px-10">
            <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Plans</Badge>
            <h1 className="text-5xl text-center max-w-3xl font-semibold">
                Flexible plans for growth
            </h1>
            <p className="text-muted-foreground max-w-lg text-center">
                Transparent pricing designed to fit your requirements.
            </p>


            <div className="p-2 mt-5 flex gap-2 rounded-[10px] border">
                <button onClick={()=> setPlanStatus('Annually')} className={`py-2 px-5 hover:bg-accent/50 rounded-[10px] ${planStatus !== 'Monthly'?'bg-primary':''}`}>Annually</button>
                <button onClick={()=> setPlanStatus('Monthly')} className={`py-2 px-5 hover:bg-accent/50 rounded-[10px] ${planStatus === 'Monthly'?'bg-primary':''}`}>Monthly</button>
            </div>

            <div className="grid  grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 gap-5 max-w-7xl">
                {plans.map((item, idx)=>(
                    <Card key={idx} className="relative w-sm rounded-2xl border overflow-hidden bg-neutral-950 text-white shadow-lg p-6">
                    {/* Glow beam effect (uses primary color) */}

                    <div className="absolute -left-[100px] -top-[100px] rounded-full h-[200px] w-[200px] bg-gradient-to-r from-primary via-primary/ to-transparent blur-3xl" />
                    <div className="absolute -right-[150px] -bottom-[150px] rounded-full h-[200px] w-[200px] bg-gradient-to-r from-primary via-primary/ to-transparent blur-3xl" />


                    {/* Content above glow */}
                    <CardHeader className="p-0 relative z-10 mb-3 space-y-2">
                        <div className="flex items-center gap-2 text-gray-300">
                            <div className="w-8 h-8 p-2 rounded-[8px] bg-neutral-800 flex items-center justify-center">
                                {/* Mock "plan" icon */}
                                {item.icon}
                            </div>
                            <span className="text-lg font-medium">{item.title}</span>
                        </div>

                        <div>
                            <p className="text-4xl font-bold">
                                {item.annualPrice === 'Custom' ? 'Custom' : planStatus === 'Monthly' ? <p>${item.monthlyPrice}<span className="text-lg font-normal">/month</span></p> : <p>${item.annualPrice}<span className="text-lg font-normal">/month</span></p> }
                            </p>
                            <p className="text-gray-400 mt-2">
                                {item.content}
                            </p>
                        </div>
                    </CardHeader>

                    <CardContent className="relative z-10 p-0">
                        <Button className="w-full bg-primary hover:bg-primary/90 rounded-[10px] text-white font-medium">
                            {item.buttonContent}
                        </Button>
                    </CardContent>

                    <CardFooter className="relative z-10 mt-3 p-0 flex flex-col items-start gap-3">
                        {item.features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-3 text-gray-300">
                                <div className="w-8 h-8 p-2 rounded-[8px] bg-neutral-800 flex items-center justify-center">
                                    {/* Mock "plan" icon */}
                                    <Check />
                                </div>
                                <span>{feature}</span>
                            </div>
                        ))}
                    </CardFooter>
                </Card>
                ))}
            </div>

        </div>
    )
}