import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

export function ScheduleLocation() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 subtle-grid opacity-20" />
      <div className="container relative">
        <SectionHeading
          title="Locație"
          subtitle="Găsești ușor terenul unde au loc antrenamentele."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card overflow-hidden">
            <iframe
              title="Hartă locație"
              src="https://www.openstreetmap.org/export/embed.html?bbox=23.81211251020432%2C44.303800261460275%2C23.816570341587067%2C44.305449100184276&amp;layer=mapnik&amp;marker=44.304623726868094%2C23.81434142589569"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-slate-800">Adresă</p>
            <p className="mt-2 text-sm text-slate-600">{SITE.address}</p>
            <p className="mt-4 text-sm text-slate-600">
              Programul antrenamentelor se stabilește telefonic, după înscriere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
