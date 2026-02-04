import * as React from "react";
import { cn } from "@/lib/utils";

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  hint?: string;
  error?: string;
};

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, hint, error, id, className, children, ...props }, ref) => {
    const selectId = id ?? props.name;
    const hintId = hint ? `${selectId}-hint` : undefined;
    const errorId = error ? `${selectId}-error` : undefined;

    return (
      <div className="space-y-2">
        <label htmlFor={selectId} className="block text-sm font-semibold text-slate-800">
          {label}
        </label>
        <select
          id={selectId}
          ref={ref}
          className={cn(
            "w-full appearance-none rounded-2xl border border-slate-200 bg-white px-4 py-3 text-base text-slate-900 shadow-sm focus-ring",
            error && "border-rose-400 focus-visible:ring-rose-400",
            className
          )}
          aria-invalid={Boolean(error)}
          aria-describedby={[hintId, errorId].filter(Boolean).join(" ") || undefined}
          {...props}
        >
          {children}
        </select>
        {hint ? (
          <p id={hintId} className="text-xs text-slate-500">
            {hint}
          </p>
        ) : null}
        {error ? (
          <p id={errorId} className="text-xs font-semibold text-rose-600">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Select.displayName = "Select";
