import { AboutUsSection } from "@/components/Index/AboutUsSection/AboutUsSection";
import { ContactSection } from "@/components/Index/ContactSection/ContactSection";
import { HeroSection } from "@/components/Index/HeroSection/HeroSection";
import { PortfolioSection } from "@/components/Index/PortfolioSection/PortfolioSection";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <PortfolioSection />
      <ContactSection />
    </>
  );
}
