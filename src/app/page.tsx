import { AboutUsSection } from "@/components/Index/AboutUsSection";
import { ContactSection } from "@/components/Index/ContactSection";
import { HeroSection } from "@/components/Index/HeroSection";
import { PortfolioSection } from "@/components/Index/PortfolioSection";
import { ServicesSection } from "@/components/Index/ServicesSection";
import "@/styles/index.css";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AboutUsSection />
      <PortfolioSection />
      <ServicesSection />
      <ContactSection />
    </>
  );
}
