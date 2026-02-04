import { SectionHeading } from "@/components/SectionHeading";
import { FAQAccordion } from "@/components/FAQAccordion";

const items = [
  {
    question: "Ce echipament are nevoie copilul?",
    answer:
      "Echipament sport simplu: tricou, șort, jambiere și ghete pentru gazon. Îți spunem exact la înscriere." 
  },
  {
    question: "Cum se face înscrierea?",
    answer:
      "Completezi formularul în 2-3 minute, iar noi te sunăm în maximum 24 de ore pentru confirmare."
  },
  {
    question: "Există perioadă de probă?",
    answer:
      "Da, oferim o ședință de probă gratuită pentru a vedea dacă copilul se simte bine în grup."
  },
  {
    question: "Unde se desfășoară antrenamentele?",
    answer:
      "Antrenamentele au loc la baza sportivă principală, ușor accesibilă cu mașina sau transportul public."
  },
  {
    question: "Cum se plătește abonamentul?",
    answer:
      "Plata se face lunar, prin transfer bancar sau numerar, la începutul fiecărei luni."
  }
];

export function FAQ() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Întrebări frecvente"
        subtitle="Răspunsuri rapide pentru părinți și bunici."
      />
      <div className="mt-10">
        <FAQAccordion items={items} />
      </div>
    </section>
  );
}
