import { HeroSection } from "@/components/Common/blocks/hero-section-1";
import FeatureCardsDemo from "@/components/Common/blocks/feature-cards-demo";
import BentoGridDemo from "@/components/Common/blocks/bento-grid-demo";
import TestimonialsSection2 from "@/components/ui/testimonial2";
import Faq from "@/Pages/Home/Faq/Faq";
import { HowItWorks } from "@/components/Common/blocks/how-it-works";
import ComparisonSection from "@/components/Common/blocks/comparison-table";
import ContactSales from "@/components/Common/blocks/contact-sales";
import InfiniteCompany from "@/components/Common/blocks/infinite-company";

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
      <Faq />
    </div>
  );
}
