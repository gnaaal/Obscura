import HeroSection from "../components/sections/HeroSection";
import WhyObscuraSection from "../components/sections/WhyObscuraSection";
import FeaturesSection from "../components/sections/FeaturesSection";
import HowItWorksSection from "../components/sections/HowItWorksSection";
import CameraCollectionSection from "../components/sections/CameraCollectionSection";
import LocationsSection from "../components/sections/LocationsSection";
import SecurityDepositSection from "../components/sections/SecurityDepositSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import FAQSection from "../components/sections/FAQSection";
import FinalCTASection from "../components/sections/FinalCTASection";

export default function Home() {
  return (
    <div className="overflow-hidden">
      <HeroSection />
      <WhyObscuraSection />
      <FeaturesSection />
      <HowItWorksSection />
      <CameraCollectionSection />
      <LocationsSection />
      <SecurityDepositSection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
    </div>
  );
}
