import { RegistrationWizard } from "@/components/registration/RegistrationWizard";
import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

export default function InscrierePage() {
  return (
    <section className="container py-16">
      <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div>
          <SectionHeading
            title="Înscriere rapidă"
            subtitle="Completezi formularul în 3 pași simpli. Te sunăm în maximum 24 de ore."
          />
          <div className="mt-10">
            <RegistrationWizard />
          </div>
        </div>
        <aside className="space-y-6">
          <div className="card p-6">
            <p className="text-sm font-semibold text-slate-800">Ce se întâmplă după înscriere?</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Te sunăm pentru confirmare și program.</li>
              <li>Stabilim grupa potrivită și prima ședință.</li>
              <li>Primești toate detaliile pe telefon sau email.</li>
            </ul>
          </div>
          <div className="card p-6">
            <p className="text-sm font-semibold text-slate-800">Contact direct</p>
            <p className="mt-2 text-sm text-slate-600">Telefon: {SITE.phoneDisplay}</p>
            <p className="text-sm text-slate-600">Email: {SITE.email}</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
