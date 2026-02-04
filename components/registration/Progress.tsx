import { cn } from "@/lib/utils";

type ProgressProps = {
  step: number;
  total: number;
};

export function Progress({ step, total }: ProgressProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center justify-between text-xs font-semibold text-slate-600">
        <span>Pasul {step}/{total}</span>
        <span>{Math.round((step / total) * 100)}% complet</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100">
        <div
          className={cn("h-2 rounded-full bg-primary transition-all")}
          style={{ width: `${(step / total) * 100}%` }}
        />
      </div>
    </div>
  );
}
