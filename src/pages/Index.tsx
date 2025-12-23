import { Navbar } from "@/components/layout/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { FeaturesSection } from "@/components/sections/FeaturesSection";
import { HowItWorksSection } from "@/components/sections/HowItWorksSection";
import { EarningsSection } from "@/components/sections/EarningsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PersonasSection } from "@/components/sections/PersonasSection";
import { SecuritySection } from "@/components/sections/SecuritySection";
import { PricingSection } from "@/components/sections/PricingSection";
import { CTASection } from "@/components/sections/CTASection";
import { RequestAccessSection }from "@/components/sections/RequestAccessForm";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HowItWorksSection />
        <EarningsSection />
        <TestimonialsSection />
        <PersonasSection />
        <SecuritySection />
        <PricingSection />
        <RequestAccessSection />
        <CTASection />
      </main>
    </div>
  );
};

export default Index;
