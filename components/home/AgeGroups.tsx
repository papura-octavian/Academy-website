import { SectionHeading } from "@/components/SectionHeading";
import { Stagger, StaggerItem } from "@/components/Motion";
import { GROUPS } from "@/lib/groups";

export function AgeGroups() {
  return (
    <section id="grupe" className="container py-16">
      <SectionHeading
        title="Grupe de vârstă"
        subtitle="Încadrăm copiii în grupe potrivite pentru nivelul și vârsta lor."
      />
      <Stagger className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {GROUPS.map((group) => (
          <StaggerItem
            key={group.id}
            className="card p-6 transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <h3 className="text-lg font-semibold text-slate-900">{group.label}</h3>
            <p className="mt-2 text-sm text-slate-600">{group.description}</p>
          </StaggerItem>
        ))}
      </Stagger>
    </section>
  );
}
