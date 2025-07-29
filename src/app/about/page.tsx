import { TaglineSection } from "@/components/about/TaglineSection";
import { GoalSection } from "@/components/about/GoalSection";
import { FAQSection } from "@/components/about/FAQSection";
import { ContactSection } from "@/components/about/ContactSection";

export default function Page() {
  return (
    <main>
      <TaglineSection />
      <GoalSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}