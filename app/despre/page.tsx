import { SectionHeading } from "@/components/SectionHeading";

export default function DesprePage() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Despre academie"
        subtitle="Construim caractere prin sport, într-un mediu prietenos și profesionist."
      />
      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Misiunea noastră</h3>
          <p className="mt-3 text-sm text-slate-600">
            Credem că fotbalul este cel mai bun mod de a forma disciplină, respect și
            încredere. Fiecare copil primește atenție personalizată și încurajare.
          </p>
        </div>
        <div className="card p-6">
          <h3 className="text-lg font-semibold text-slate-900">Valorile noastre</h3>
          <ul className="mt-3 space-y-2 text-sm text-slate-600">
            <li>Respect și fair-play în fiecare antrenament.</li>
            <li>Siguranță și comunicare transparentă cu părinții.</li>
            <li>Bucurie și progres constant, pas cu pas.</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
