import { HeroSection } from "@/components/blocks/hero-section-1";
import { SplineSceneBasic } from "@/components/blocks/spline-demo";
import FeatureCardsDemo from "@/components/blocks/feature-cards-demo";
import BentoGridDemo from "@/components/blocks/bento-grid-demo";
import TestimonialsSection2 from "@/components/ui/testimonial2";
import FAQSection from "@/components/Pages/Home/Faq/faq";
import { HowItWorks } from "@/components/blocks/how-it-works";
import ComparisonSection from "@/components/blocks/comparison-table";
import ContactSales from "@/components/blocks/contact-sales";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <div className="container mx-auto max-w-6xl px-6 py-16">
        <SplineSceneBasic />
      </div>
      <FeatureCardsDemo />
      <BentoGridDemo />
      <HowItWorks/>
      <ComparisonSection/>
      <ContactSales/>
      <TestimonialsSection2 />
      <FAQSection />
    </>
  );
}
