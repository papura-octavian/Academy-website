"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";

const images = [
  "/gallery-1.jpg",
  "/gallery-2.jpg",
  "/gallery-3.jpg",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg"
];

export function Gallery() {
  const [open, setOpen] = useState(false);

  return (
    <section className="container py-16">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        <SectionHeading
          title="Galerie"
          subtitle="Momente reale din antrenamentele și meciurile noastre."
        />
        <Button variant="secondary" onClick={() => setOpen(true)}>
          Vezi video
        </Button>
      </div>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((src) => (
          <div key={src} className="overflow-hidden rounded-2xl">
            <img
              src={src}
              alt="Galerie academie"
              className="h-48 w-full object-cover transition duration-300 hover:scale-105"
              onError={(event) => {
                (event.currentTarget as HTMLImageElement).src = "/hero.jpg";
              }}
            />
          </div>
        ))}
      </div>
      {open ? (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 p-6"
          role="dialog"
          aria-modal="true"
        >
          <div className="w-full max-w-3xl overflow-hidden rounded-2xl bg-white">
            <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3">
              <p className="text-sm font-semibold text-slate-800">Video antrenament</p>
              <button
                type="button"
                className="text-sm font-semibold text-slate-500"
                onClick={() => setOpen(false)}
              >
                Închide
              </button>
            </div>
            <div className="aspect-video w-full">
              <iframe
                title="Video academie"
                className="h-full w-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
