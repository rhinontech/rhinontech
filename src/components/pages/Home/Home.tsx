import Benefits from "./Benefits/Benefits";
import ContactUs from "./ContactUs/ContactUs";
import Faq from "./Faq/Faq";
import HeroSection from "./HeroSection/HeroSection";
import Plans from "./Plans/Plans";
import Process from "./Process/Process";
import Services from "./Services/Services";
import Testimonials from "./Testimonials/Testimonials";
import WhoWeAre from "./WhoWeAre/WhoWeAre";

export default function Home() {
  return (
    <div className=" w-full min-h-screen bg-background">
        <HeroSection />
        <WhoWeAre />
        <Process />
        <Services />
        <Benefits />
        {/* <Plans /> */}
        <Testimonials />
        {/* <ContactUs /> */}
        <Faq />
    </div>
  )
}