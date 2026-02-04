import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/Button";

export function SuccessScreen() {
  return (
    <div className="card p-8 text-center">
      <h2 className="text-2xl font-bold text-slate-900">Gata! Te contactăm în max. 24h</h2>
      <p className="mt-3 text-sm text-slate-600">
        Mulțumim pentru înscriere. Îți trimitem detaliile complete cât mai curând.
      </p>
      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
        <Button href={SITE.whatsappHref} variant="secondary" className="bg-emerald-100 text-emerald-800">
          WhatsApp
        </Button>
        <Button href={SITE.phoneHref} variant="secondary" className="bg-slate-100 text-slate-800">
          Sună acum
        </Button>
      </div>
    </div>
  );
}
