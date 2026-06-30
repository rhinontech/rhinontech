import React from "react";
import TopBar from "@/components/homepage/common/TopBar";
import Contact from "@/components/homepage/Contact";
import Footer from "@/components/homepage/common/Footer";
import Faqs from "@/components/homepage/Faqs";

import AboutHero from "@/components/aboutpage/AboutHero";
import AboutStats from "@/components/aboutpage/AboutStats";
import AboutServices from "@/components/aboutpage/AboutServices";
import MarqueeStrips from "@/components/homepage/MarqueeStrips";
import AboutTeam from "@/components/aboutpage/AboutTeam";

export default function AboutPage() {
    return (
        <main className="relative w-full overflow-x-hidden bg-black text-white min-h-screen flex flex-col justify-between">
            <TopBar />
            
            <AboutHero />
            <AboutStats />
            <AboutServices />
            <MarqueeStrips />
            <AboutTeam />

            <Faqs />

            <Contact />
            <Footer />
        </main>
    );
}
