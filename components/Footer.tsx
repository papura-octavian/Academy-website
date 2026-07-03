import Link from "next/link";
import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="container grid gap-10 py-12 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-lg font-bold text-slate-900">{SITE.name}</p>
          <p className="text-sm text-slate-600">{SITE.slogan}</p>
          <p className="text-sm text-slate-600">{SITE.address}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-800">Contact rapid</p>
          <p className="text-sm text-slate-600">Telefon: {SITE.phoneDisplay}</p>
          <p className="text-sm text-slate-600">Email: {SITE.email}</p>
        </div>
        <div className="space-y-2">
          <p className="text-sm font-semibold text-slate-800">Informații</p>
          <Link href="/politica-gdpr" className="block text-sm text-slate-600 hover:text-primary">
            Politica GDPR
          </Link>
          <Link href="/contact" className="block text-sm text-slate-600 hover:text-primary">
            Contact
          </Link>
          <div className="flex gap-3 pt-2">
            <a
              href={SITE.socials.facebook}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-primary"
              aria-label="Facebook"
              rel="noreferrer"
              target="_blank"
            >
              Fb
            </a>
            <a
              href={SITE.socials.instagram}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-primary"
              aria-label="Instagram"
              rel="noreferrer"
              target="_blank"
            >
              Ig
            </a>
            <a
              href={SITE.socials.youtube}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-primary"
              aria-label="YouTube"
              rel="noreferrer"
              target="_blank"
            >
              Yt
            </a>
            <a
              href={SITE.socials.tiktok}
              className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:text-primary"
              aria-label="TikTok"
              rel="noreferrer"
              target="_blank"
            >
              Tk
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-100 py-4">
        <div className="container text-xs text-slate-500">
          © {new Date().getFullYear()} {SITE.name}. Toate drepturile rezervate.
        </div>
      </div>
    </footer>
  );
}
