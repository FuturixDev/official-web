import { ServiceHeroSection } from "@/components/service/ServiceHeroSection";
import { ServiceIntroSection } from "@/components/service/ServiceIntroSection";
import { ServiceCaseSection } from "@/components/service/ServiceCaseSection";
import { ServiceFooterSection } from "@/components/service/ServiceFooterSection";

export default function Page() {
  return (
    <main>
      <ServiceHeroSection />
      <ServiceIntroSection />
      <ServiceCaseSection />
      <ServiceFooterSection />
    </main>
  );
}
