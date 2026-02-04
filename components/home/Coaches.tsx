import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

export function Coaches() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Antrenori dedicați"
        subtitle="O echipă calmă, profesionistă și prietenoasă cu fiecare copil."
      />
      <div className="mt-10 grid gap-6 md:grid-cols-3">
        {SITE.coaches.map((coach, index) => (
          <div
            key={coach}
            className="card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-soft"
          >
            <img
              src={SITE.media.coachPhotos[index] ?? SITE.media.heroImage}
              alt={coach}
              className="h-48 w-full object-cover"
            />
            <div className="p-5">
              <p className="text-base font-semibold text-slate-900">{coach}</p>
              <p className="text-sm text-slate-600">Antrenor dedicat</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
