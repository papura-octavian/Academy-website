import { SectionHeading } from "@/components/SectionHeading";
import { GROUPS } from "@/lib/groups";
import { SITE } from "@/lib/constants";

export default function GrupeProgramPage() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Grupe și program"
        subtitle="Planificare clară și grupe adaptate nivelului copilului tău."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group) => (
          <div
            key={group.id}
            className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <h3 className="text-lg font-semibold text-slate-900">{group.label}</h3>
            <p className="mt-2 text-sm text-slate-600">{group.description}</p>
            <p className="mt-4 text-xs font-semibold text-primary">Program dedicat</p>
            <p className="text-xs text-slate-500">Confirmăm exact după înscriere.</p>
          </div>
        ))}
      </div>
      <div className="mt-10 card p-6">
        <h3 className="text-lg font-semibold text-slate-900">Program general</h3>
        <p className="mt-2 text-sm text-slate-600">{SITE.program}</p>
        <p className="mt-4 text-sm text-slate-600">
          Programul final este stabilit după vârstă și nivel. Te contactăm pentru
          confirmare.
        </p>
      </div>
    </section>
  );
}
