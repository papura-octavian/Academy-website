import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

export default function PreturiPage() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Prețuri simple și transparente"
        subtitle="Fără costuri ascunse. Îți explicăm totul clar la înscriere."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SITE.pricing.map((plan) => (
          <div
            key={plan.name}
            className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <h3 className="text-lg font-semibold text-slate-900">{plan.name}</h3>
            <p className="mt-3 text-2xl font-bold text-primary">{plan.price}</p>
            <p className="mt-2 text-sm text-slate-600">{plan.details}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
