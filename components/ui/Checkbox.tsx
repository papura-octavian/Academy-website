import * as React from "react";
import { cn } from "@/lib/utils";

type CheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, error, id, className, ...props }, ref) => {
    const checkboxId = id ?? props.name;
    const errorId = error ? `${checkboxId}-error` : undefined;

    return (
      <div className="space-y-2">
        <div className="flex items-start gap-3">
          <input
            id={checkboxId}
            ref={ref}
            type="checkbox"
            className={cn(
              "mt-1 h-5 w-5 rounded border-slate-300 text-primary focus-ring",
              error && "border-rose-400",
              className
            )}
            aria-invalid={Boolean(error)}
            aria-describedby={errorId}
            {...props}
          />
          <label htmlFor={checkboxId} className="text-sm text-slate-700">
            {label}
          </label>
        </div>
        {error ? (
          <p id={errorId} className="text-xs font-semibold text-rose-600">
            {error}
          </p>
        ) : null}
      </div>
    );
  }
);

Checkbox.displayName = "Checkbox";
