import { Hero } from "@/components/home/Hero";
import { Benefits } from "@/components/home/Benefits";
import { AgeGroups } from "@/components/home/AgeGroups";
import { ScheduleLocation } from "@/components/home/ScheduleLocation";
import { Coaches } from "@/components/home/Coaches";
import { Gallery } from "@/components/home/Gallery";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { FinalCTA } from "@/components/home/FinalCTA";
import { Reveal } from "@/components/Motion";
import { GradientBlobs } from "@/components/GradientBlobs";

export function HomePage() {
  return (
    <div className="relative">
      <GradientBlobs />
      <Hero />
      <Reveal>
        <Benefits />
      </Reveal>
      <Reveal>
        <AgeGroups />
      </Reveal>
      <Reveal>
        <ScheduleLocation />
      </Reveal>
      <Reveal>
        <Coaches />
      </Reveal>
      <Reveal>
        <Gallery />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <FAQ />
      </Reveal>
      <Reveal>
        <FinalCTA />
      </Reveal>
    </div>
  );
}
