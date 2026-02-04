"use client";

import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registrationSchema, type RegistrationPayload } from "@/lib/registrationSchema";
import { calculateAge } from "@/lib/format";
import { GROUPS, suggestGroup } from "@/lib/groups";
import { LOCATIONS } from "@/lib/constants";
import { Progress } from "@/components/registration/Progress";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";
import { Checkbox } from "@/components/ui/Checkbox";
import { Button } from "@/components/ui/Button";
import { SuccessScreen } from "@/components/registration/SuccessScreen";

const DRAFT_KEY = "af_draft";

const defaultValues: RegistrationPayload = {
  childName: "",
  birthDate: "",
  level: "",
  parentName: "",
  phone: "",
  email: "",
  city: "",
  group: "",
  location: LOCATIONS[0]?.id ?? "central",
  gdpr: false,
  rules: false
};

export function RegistrationWizard() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [honeypot, setHoneypot] = useState("");

  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    trigger,
    formState: { errors }
  } = useForm<RegistrationPayload>({
    resolver: zodResolver(registrationSchema),
    defaultValues,
    mode: "onChange"
  });

  const values = watch();

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem(DRAFT_KEY) : null;
    if (stored) {
      try {
        const parsed = JSON.parse(stored) as RegistrationPayload;
        reset({ ...defaultValues, ...parsed });
      } catch {
        localStorage.removeItem(DRAFT_KEY);
      }
    }
  }, [reset]);

  useEffect(() => {
    const subscription = watch((value) => {
      localStorage.setItem(DRAFT_KEY, JSON.stringify(value));
    });
    return () => subscription.unsubscribe();
  }, [watch]);

  const age = useMemo(() => calculateAge(values.birthDate), [values.birthDate]);
  const recommended = useMemo(() => suggestGroup(age), [age]);

  useEffect(() => {
    if (recommended && !values.group) {
      setValue("group", recommended.id);
    }
  }, [recommended, setValue, values.group]);

  const stepRequiredFields: Record<number, (keyof RegistrationPayload)[]> = {
    1: ["childName", "birthDate"],
    2: ["parentName", "phone"],
    3: ["group", "location", "gdpr", "rules"]
  };

  const isStepValid = stepRequiredFields[step].every((field) => {
    const value = values[field];
    if (typeof value === "boolean") return value;
    return Boolean(String(value ?? "").trim());
  });

  const hasStepErrors = stepRequiredFields[step].some(
    (field) => Boolean(errors[field])
  );

  const canProceed = isStepValid && !hasStepErrors;

  const goNext = async () => {
    const fields = stepRequiredFields[step];
    const valid = await trigger(fields);
    if (valid) setStep((prev) => Math.min(prev + 1, 3));
  };

  const goBack = () => setStep((prev) => Math.max(prev - 1, 1));

  const onSubmit = async (data: RegistrationPayload) => {
    setServerError(null);

    if (honeypot.trim()) {
      setSuccess(true);
      localStorage.removeItem(DRAFT_KEY);
      reset(defaultValues);
      return;
    }

    if (
      !data.childName.trim() ||
      !data.birthDate.trim() ||
      !data.parentName.trim() ||
      !data.phone.trim() ||
      !data.group.trim() ||
      !data.location.trim()
    ) {
      setServerError("Completează toate câmpurile obligatorii.");
      return;
    }

    const payload = {
      childName: data.childName.trim(),
      birthDate: data.birthDate,
      parentName: data.parentName.trim(),
      phone: data.phone.trim(),
      group: data.group,
      baseLocation: data.location,
      level: data.level?.trim() ?? "",
      email: data.email?.trim() ?? "",
      city: data.city?.trim() ?? ""
    };

    setIsSubmitting(true);
    try {
      const response = await fetch("https://signup-worker.kebulann.workers.dev/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        setSuccess(true);
        localStorage.removeItem(DRAFT_KEY);
        reset(defaultValues);
        return;
      }

      const message = await response.text();
      setServerError(message || "Nu am putut trimite înscrierea. Te rugăm să încerci din nou.");
    } catch {
      setServerError("Nu am putut trimite înscrierea. Te rugăm să încerci din nou.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (success) {
    return <SuccessScreen />;
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
      <input
        type="text"
        name="company"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
        className="absolute left-[-10000px] top-auto h-px w-px overflow-hidden"
        value={honeypot}
        onChange={(event) => setHoneypot(event.target.value)}
      />
      <Progress step={step} total={3} />

      {step === 1 ? (
        <div className="space-y-6">
          <Input
            label="Nume copil"
            placeholder="Ex: Andrei Pop"
            hint="Prenume + nume complet"
            error={errors.childName?.message}
            {...register("childName")}
          />
          <Input
            label="Data nașterii"
            type="date"
            error={errors.birthDate?.message}
            {...register("birthDate")}
          />
          <Select
            label="Nivel (opțional)"
            hint="Ne ajută să pregătim grupa potrivită"
            {...register("level")}
          >
            <option value="">Alege nivelul</option>
            <option value="incepator">Începător</option>
            <option value="mediu">Mediu</option>
            <option value="avansat">Avansat</option>
          </Select>
          {age !== null ? (
            <div className="rounded-2xl bg-slate-100 px-4 py-3 text-sm text-slate-600">
              Vârsta estimată: <span className="font-semibold text-slate-800">{age} ani</span>
            </div>
          ) : null}
        </div>
      ) : null}

      {step === 2 ? (
        <div className="space-y-6">
          <Input
            label="Nume părinte"
            placeholder="Ex: Maria Pop"
            error={errors.parentName?.message}
            {...register("parentName")}
          />
          <Input
            label="Telefon"
            placeholder="Ex: 07xx xxx xxx"
            hint="Acceptăm și format +40"
            error={errors.phone?.message}
            {...register("phone")}
          />
          <Input
            label="Email (opțional, recomandat)"
            placeholder="exemplu@email.ro"
            error={errors.email?.message}
            {...register("email")}
          />
          <Input
            label="Localitate/cartier (opțional)"
            placeholder="Ex: Sector 3"
            {...register("city")}
          />
        </div>
      ) : null}

      {step === 3 ? (
        <div className="space-y-6">
          <Select
            label="Selectează grupa"
            hint={recommended ? `Recomandare: ${recommended.label}` : "Alege grupa potrivită"}
            error={errors.group?.message}
            {...register("group")}
          >
            <option value="">Alege grupa</option>
            {GROUPS.map((group) => (
              <option key={group.id} value={group.id}>
                {group.label}
              </option>
            ))}
          </Select>
          <Select
            label="Selectează locația"
            error={errors.location?.message}
            {...register("location")}
          >
            {LOCATIONS.map((location) => (
              <option key={location.id} value={location.id}>
                {location.name}
              </option>
            ))}
          </Select>
          <Checkbox
            label="Sunt de acord cu politica GDPR"
            error={errors.gdpr?.message}
            {...register("gdpr")}
          />
          <Checkbox
            label="Sunt de acord cu regulamentul intern"
            error={errors.rules?.message}
            {...register("rules")}
          />
        </div>
      ) : null}

      {serverError ? (
        <div className="rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-700">
          {serverError}
        </div>
      ) : null}

      <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
        <Button type="button" variant="ghost" onClick={goBack} disabled={step === 1}>
          Înapoi
        </Button>
        {step < 3 ? (
          <Button type="button" onClick={goNext} disabled={!canProceed}>
            Continuă
          </Button>
        ) : (
          <Button type="submit" disabled={!canProceed || isSubmitting}>
            {isSubmitting ? "Se trimite..." : "Trimite înscrierea"}
          </Button>
        )}
      </div>
    </form>
  );
}
