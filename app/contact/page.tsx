import { SectionHeading } from "@/components/SectionHeading";
import { SITE } from "@/lib/constants";

export default function ContactPage() {
  return (
    <section className="container py-16">
      <SectionHeading
        title="Contact"
        subtitle="Ne găsești ușor și îți răspundem rapid la întrebări."
      />
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="card p-6 space-y-3">
          <p className="text-sm font-semibold text-slate-800">{SITE.name}</p>
          <p className="text-sm text-slate-600">Fondator: {SITE.owner}</p>
          <div className="text-sm text-slate-600">
            <p>Antrenori:</p>
            <ul className="mt-1 space-y-1">
              {SITE.coaches.map((coach) => (
                <li key={coach}>{coach}</li>
              ))}
            </ul>
          </div>
          <p className="text-sm text-slate-600">Adresă: {SITE.address}</p>
          <p className="text-sm text-slate-600">
            Coordonate: {SITE.location.lat}, {SITE.location.lng}
          </p>
          <p className="text-sm text-slate-600">Telefon: {SITE.phoneDisplay}</p>
          <p className="text-sm text-slate-600">Email: {SITE.email}</p>
          <p className="text-sm text-slate-600">Program: {SITE.program}</p>
          <div className="flex flex-wrap gap-3 pt-2 text-sm">
            <a
              href={SITE.socials.instagram}
              className="text-slate-600 hover:text-primary"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
            <a
              href={SITE.socials.tiktok}
              className="text-slate-600 hover:text-primary"
              rel="noreferrer"
              target="_blank"
            >
              TikTok
            </a>
            <a
              href={SITE.socials.youtube}
              className="text-slate-600 hover:text-primary"
              rel="noreferrer"
              target="_blank"
            >
              YouTube
            </a>
            <a
              href={SITE.socials.facebook}
              className="text-slate-600 hover:text-primary"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
          </div>
        </div>
        <div className="card overflow-hidden">
          <iframe
            title="Hartă locație"
            src="https://www.openstreetmap.org/export/embed.html?bbox=23.804%2C44.325%2C23.809%2C44.329&layer=mapnik&marker=44.32698469886162%2C23.806496921116587"
            className="h-72 w-full border-0"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
