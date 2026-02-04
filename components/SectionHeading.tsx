import { cn } from "@/lib/utils";

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
};

export function SectionHeading({ title, subtitle, align = "left", className }: SectionHeadingProps) {
  return (
    <div className={cn(align === "center" ? "text-center" : "text-left", className)}>
      <h2 className="text-3xl font-bold text-slate-900 md:text-4xl">{title}</h2>
      {subtitle ? <p className="mt-3 text-base text-slate-600 md:text-lg">{subtitle}</p> : null}
    </div>
  );
}
