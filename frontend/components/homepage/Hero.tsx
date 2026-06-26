"use client";

import React from "react";
import TopBar from "./common/TopBar";
import Footer from "./common/Footer";
import HeroSection from "./HeroSection";
import Stats from "./Stats";
import Process from "./Process";
import Recognitions from "./Recognitions";
import { ServiceBrand, ServiceMarketing, ServiceInteraction } from "./Services";
import Portfolio from "./Portfolio";
import Prize from "./Prize";
import MarqueeStrips from "./MarqueeStrips";
import Testimonial from "./Testimonial";
import Faqs from "./Faqs";
import Partners from "./Partners";
import Contact from "./Contact";

export default function NorvinHome() {
    return (
        <main className="relative w-full overflow-x-hidden bg-black text-white">
            <TopBar />
            <HeroSection />
            <Stats />
            <Process />
            <Recognitions />
            <ServiceBrand />
            <ServiceMarketing />
            <ServiceInteraction />
            <Portfolio />
            <Prize />
            <MarqueeStrips />
            <Testimonial />
            <Faqs />
            <Partners />
            <Contact />
            <Footer />
        </main>
    );
}