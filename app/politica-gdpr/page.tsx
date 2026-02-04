import { SectionHeading } from "@/components/SectionHeading";

export default function PoliticaGdprPage() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Politica GDPR"
        subtitle="Datele sunt folosite doar pentru înscriere și comunicare." 
      />
      <div className="mt-10 space-y-4 text-sm text-slate-600">
        <p>
          Colectăm datele de contact ale părinților și informațiile despre copil doar
          pentru a organiza grupa și programul de antrenament. Nu vindem și nu
          distribuim datele către terți.
        </p>
        <p>
          Păstrăm datele în condiții de siguranță și le folosim strict pentru
          comunicarea legată de înscriere și activități.
        </p>
        <p>
          Pentru ștergerea datelor sau întrebări, ne poți contacta oricând la adresa
          de email afișată pe site.
        </p>
      </div>
    </section>
  );
}
