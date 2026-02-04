"use client";

import { useState } from "react";
import { SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HelpWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <div
        id="help-panel"
        className={cn(
          "mb-3 w-72 rounded-2xl border border-slate-200 bg-white p-4 text-sm shadow-soft transition",
          open ? "opacity-100" : "pointer-events-none translate-y-2 opacity-0"
        )}
        aria-hidden={!open}
      >
        <p className="text-sm font-semibold text-slate-800">Ajutor rapid</p>
        <p className="mt-2 text-xs text-slate-500">Suntem aici să te ajutăm rapid.</p>
        <div className="mt-3 space-y-2">
          <a href={SITE.phoneHref} className="block rounded-xl bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
            Sună acum
          </a>
          <a href={SITE.whatsappHref} className="block rounded-xl bg-emerald-100 px-3 py-2 text-sm font-semibold text-emerald-800">
            WhatsApp
          </a>
          <div className="rounded-xl bg-slate-50 px-3 py-2 text-xs text-slate-600">
            Program: {SITE.program}
          </div>
        </div>
      </div>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="rounded-full bg-primary px-5 py-3 text-sm font-semibold text-white shadow-soft"
        aria-expanded={open}
        aria-controls="help-panel"
      >
        Ajutor rapid
      </button>
    </div>
  );
}
