import { SectionHeading } from "@/components/SectionHeading";

const testimonials = [
  {
    quote: "Fiul meu a câștigat încredere și abia așteaptă fiecare antrenament.",
    name: "Cristina, mama lui Vlad"
  },
  {
    quote: "Comunicare excelentă și un program clar. Recomand din suflet!",
    name: "Mihai, tatăl lui Andrei"
  },
  {
    quote: "Antrenorii sunt răbdători și copiii se simt în siguranță.",
    name: "Elena, bunica lui Radu"
  }
];

export function Testimonials() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Ce spun părinții"
        subtitle="Feedback real de la familiile care ne-au ales."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {testimonials.map((item) => (
          <div
            key={item.name}
            className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <p className="text-sm text-slate-600">“{item.quote}”</p>
            <p className="mt-4 text-sm font-semibold text-slate-800">{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
