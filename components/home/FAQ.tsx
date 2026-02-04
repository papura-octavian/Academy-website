import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";
import { SITE } from "@/lib/constants";

export function FAQ() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Întrebări frecvente"
        subtitle="Răspunsuri rapide pentru părinți și bunici."
      />
      <div className="mt-10">
        <FAQAccordion items={SITE.faq} />
      </div>
    </section>
  );
}
