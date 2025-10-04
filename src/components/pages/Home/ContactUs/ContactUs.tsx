"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { Badge } from "@/components/ui/badge";

export default function ContactUs() {
    return (
        <section className="relative overflow-hidden flex flex-col gap-10 items-center antialiased  max-w-6xl mx-auto text-white py-20">
            {/* Beam light in the middle */}
            <Spotlight
                className="-top-40 left-1/2 -translate-x-1/2 -rotate-10"
                fill="oklch(37.9% 0.146 265.522)"
                rx={1800}
                ry={150}
            />
            <Badge variant="outline" className="py-2 rounded-[7px] text-muted-foreground text-sm">Contact Us</Badge>

            <div className="relative z-10 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* Left side */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                        Ask whatever you have in <br /> your mind
                    </h2>
                    <p className="text-gray-300 max-w-md">
                        Whether you have questions or are ready to discuss your business,
                        we’re here to help. Reach out today.
                    </p>

                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Mail className="w-5 h-5 text-primary" />
                            <span>admin@raddision.com</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Phone className="w-5 h-5 text-primary" />
                            <span>(969) 819–8061</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary" />
                            <span>43 Roselle St. New York</span>
                        </div>
                    </div>
                </div>

                {/* Right side */}
                <form className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm">Name</label>
                        <Input
                            placeholder="Jane Smith"
                            className="bg-white/2 backdrop-blur-md border border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary rounded-[8px]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm">Email</label>
                        <Input
                            type="email"
                            placeholder="jane@framer.com"
                           className="bg-white/2 backdrop-blur-md border border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary rounded-[8px]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm">Message</label>
                        <Textarea
                            placeholder="Hi, I am reaching out for..."
                            className="bg-white/2 backdrop-blur-md border border-white/10 text-white placeholder:text-gray-400 focus-visible:ring-2 focus-visible:ring-primary rounded-[8px]"
                        />
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/80 text-white rounded-lg">
                        Submit
                    </Button>
                </form>
            </div>
        </section>
    );
}
