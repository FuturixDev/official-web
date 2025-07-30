import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { ServiceIntroSection } from "@/components/service/ServiceIntroSection";
import { ServiceCaseSection } from "@/components/service/ServiceCaseSection";

export default function Page() {
  return (
    <>
      <ServiceHeroSection />
      <ServiceIntroSection />
      <ServiceCaseSection />
    </>
  );
}
