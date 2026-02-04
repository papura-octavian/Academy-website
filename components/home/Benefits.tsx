import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Motion";

const benefits = [
  {
    title: "Antrenori calificați",
    description: "Echipă de antrenori cu experiență în lucrul cu copiii."
  },
  {
    title: "Siguranță și grijă",
    description: "Grupe mici, supraveghere atentă și comunicare constantă."
  },
  {
    title: "Dezvoltare completă",
    description: "Coordonare, disciplină, încredere și spirit de echipă."
  },
  {
    title: "Program clar",
    description: "Ore fixe, planificate pentru rutina familiei."
  },
  {
    title: "Comunitate",
    description: "Copiii își fac prieteni și se simt parte din echipă."
  }
];

export function Benefits() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="De ce părinții ne aleg"
        subtitle="Punem accent pe progres real, bucurie și comunicare clară cu familia."
      />
      <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <StaggerItem
            key={benefit.title}
            className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <h3 className="text-lg font-semibold text-slate-900">{benefit.title}</h3>
            <p className="mt-2 text-sm text-slate-600">{benefit.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
