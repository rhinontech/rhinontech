import { HeroSection } from "@/components/blocks/hero-section-1";
import FeatureCardsDemo from "@/components/blocks/feature-cards-demo";
import BentoGridDemo from "@/components/blocks/bento-grid-demo";
import TestimonialsSection2 from "@/components/ui/testimonial2";
import FAQSection from "@/components/Pages/Home/Faq/faq";
import { HowItWorks } from "@/components/blocks/how-it-works";
import ComparisonSection from "@/components/blocks/comparison-table";
import ContactSales from "@/components/blocks/contact-sales";
import InfiniteCompany from "@/components/blocks/infinite-company";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-24">
      <HeroSection />
      <InfiniteCompany/>
      <BentoGridDemo />
      <FeatureCardsDemo />
      <HowItWorks/>
      <ComparisonSection/>
      <ContactSales/>
      <TestimonialsSection2 />
      <FAQSection />
    </div>
  );
}
