import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

export function ScheduleLocation() {
  return (
    <section className="relative py-16">
      <div className="absolute inset-0 subtle-grid opacity-20" />
      <div className="container relative">
        <SectionHeading
          title="Program și locație"
          subtitle="Găsești ușor terenul și programul potrivit copilului tău."
        />
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="card overflow-hidden">
            <iframe
              title="Hartă locație"
              src="https://www.openstreetmap.org/export/embed.html?bbox=23.804%2C44.325%2C23.809%2C44.329&layer=mapnik&marker=44.32698469886162%2C23.806496921116587"
              className="h-72 w-full border-0"
              loading="lazy"
            />
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-slate-800">Adresă</p>
            <p className="mt-2 text-sm text-slate-600">{SITE.address}</p>
            <p className="mt-4 text-sm font-semibold text-slate-800">Program antrenamente</p>
            <p className="mt-2 text-sm text-slate-600">{SITE.program}</p>
            <p className="mt-4 text-sm text-slate-600">
              Pentru o potrivire perfectă, confirmăm programul după înscriere.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
