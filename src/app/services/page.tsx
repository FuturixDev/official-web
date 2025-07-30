import { ServicesHeroSection } from "@/components/services/ServicesHeroSection";
import { ServicesIntroSection } from "@/components/services/ServicesIntroSection";
import { ServicesCaseSection } from "@/components/services/ServicesCaseSection";

export default function Page() {
  return (
    <>
      <ServicesHeroSection />
      <ServicesIntroSection />
      <ServicesCaseSection />
    </>
  );
}
