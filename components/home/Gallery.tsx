"use client";

import { useState } from "react";
import { SectionHeading } from "@/components/SectionHeading";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Gallery() {
  const [open, setOpen] = useState(false);
  const rawGalleryVideo = SITE.media.galleryVideo.trim();
  const galleryVideo = rawGalleryVideo.startsWith("/public/")
    ? rawGalleryVideo.replace("/public", "")
    : rawGalleryVideo;
  const isVideoFile = /\.(mp4|webm|ogg)$/i.test(galleryVideo);
  const youtubeMatch = galleryVideo.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([A-Za-z0-9_-]{6,})/i
  );
  const youtubeEmbed = youtubeMatch
    ? `https://www.youtube.com/embed/${youtubeMatch[1]}`
    : null;
  const iframeSrc = youtubeEmbed ?? galleryVideo;

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
        {SITE.media.gallery.map((src) => (
          <div key={src} className="overflow-hidden rounded-2xl">
            <img
              src={src}
              alt="Galerie academie"
              className="h-48 w-full object-cover transition duration-300 hover:scale-105"
              onError={(event) => {
                (event.currentTarget as HTMLImageElement).src = SITE.media.heroImage;
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
              {isVideoFile ? (
                <video className="h-full w-full" controls preload="metadata" poster={SITE.media.heroImage}>
                  <source src={galleryVideo} type="video/mp4" />
                  Browser-ul tău nu suportă redarea video.
                </video>
              ) : (
                <iframe
                  title="Video academie"
                  className="h-full w-full"
                  src={iframeSrc}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              )}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
}
