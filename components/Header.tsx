"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/despre", label: "Despre" },
  { href: "/grupe-program", label: "Grupe & Program" },
  { href: "/preturi", label: "Prețuri" },
  { href: "/contact", label: "Contact" }
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
      <div className="container flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-white">
            <img
              src={SITE.media.logo}
              alt={`${SITE.name} logo`}
              className="h-full w-full object-contain"
            />
          </div>
          <div>
            <p className="text-sm font-bold text-slate-900">{SITE.name}</p>
            <p className="text-xs text-slate-500">{SITE.slogan}</p>
          </div>
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-semibold text-slate-600 transition hover:text-primary",
                pathname === link.href && "text-primary"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <Button href="/inscriere" size="sm">
            Înscrie copilul
          </Button>
        </div>
        <button
          type="button"
          className="inline-flex items-center justify-center rounded-2xl border border-slate-200 px-3 py-2 text-sm font-semibold text-slate-700 lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          Meniu
        </button>
      </div>
      {open ? (
        <div id="mobile-menu" className="border-t border-slate-100 bg-white lg:hidden">
          <div className="container flex flex-col gap-3 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-slate-600"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/inscriere" size="sm" className="w-full">
              Înscrie copilul
            </Button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
