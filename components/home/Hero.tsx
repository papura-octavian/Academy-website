"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";
import { Badge } from "@/components/ui/Badge";

export function Hero() {
  const [videoError, setVideoError] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        {!videoError ? (
          <video
            className="h-full w-full object-cover"
            autoPlay
            muted
            loop
            playsInline
            poster={SITE.media.heroImage}
            onError={() => setVideoError(true)}
          >
            <source src={SITE.media.heroVideo} type="video/mp4" />
          </video>
        ) : !imgError ? (
          <img
            src={SITE.media.heroImage}
            alt="Antrenament fotbal"
            className="h-full w-full object-cover"
            onError={() => setImgError(true)}
          />
        ) : (
          <div className="h-full w-full bg-slate-800" />
        )}
        <div className="absolute inset-0 bg-slate-950/60" />
      </div>
      <div className="container relative z-10 flex min-h-[70vh] flex-col justify-center py-20 text-white">
        <Badge className="w-fit bg-white/15 text-white">Înscrieri deschise</Badge>
        <h1 className="mt-4 text-4xl font-bold leading-tight md:text-6xl">
          {SITE.name}
        </h1>
        <p className="mt-4 max-w-xl text-lg text-slate-100 md:text-xl">{SITE.slogan}</p>
        <p className="mt-4 max-w-xl text-base text-slate-200">
          Oferim un mediu sigur și profesionist în care copiii învață fotbalul cu
          bucurie, disciplină și sprijin real.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Button href="/inscriere" size="lg">
            Înscrie copilul
          </Button>
          <Button href="/#grupe" variant="secondary" size="lg" className="bg-white/90">
            Vezi grupele și programul
          </Button>
        </div>
      </div>
    </section>
  );
}