import { HeadSection } from "@/components/about/HeadSection";
import { GoalSection } from "@/components/about/GoalSection";
import { FAQSection } from "@/components/about/FAQSection";
import { ContactSection } from "@/components/about/ContactSection";
import "@/styles/about.css"; 
export default function Page() {
  return (
    <main>
      <HeadSection />
      <GoalSection />
      <FAQSection />
      <ContactSection />
    </main>
  );
}