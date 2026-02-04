import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  return (
    <section className="container py-16">
      <div className="card flex flex-col items-start justify-between gap-6 bg-primary px-8 py-10 text-white md:flex-row md:items-center">
        <div>
          <h3 className="text-2xl font-bold">Gata să începem?</h3>
          <p className="mt-2 text-sm text-white/90">
            Înscrierea durează mai puțin de 3 minute. Noi te sunăm rapid.
          </p>
        </div>
        <Button href="/inscriere" variant="secondary" className="bg-white text-primary">
          Înscrie copilul
        </Button>
      </div>
    </section>
  );
}
