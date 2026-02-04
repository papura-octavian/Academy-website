import { z } from "zod";

const phoneRegex = /^(\+?4?0)?\s?7\d{2}[\s-]?\d{3}[\s-]?\d{3}$/;

export const registrationSchema = z.object({
  childName: z.string().min(2, "Introdu numele copilului"),
  birthDate: z.string().min(1, "Selectează data nașterii"),
  level: z.enum(["incepator", "mediu", "avansat"]).optional().or(z.literal("")),
  parentName: z.string().min(2, "Introdu numele părintelui"),
  phone: z
    .string()
    .min(8, "Introdu un număr de telefon")
    .regex(phoneRegex, "Format telefon invalid"),
  email: z
    .string()
    .email("Email invalid")
    .optional()
    .or(z.literal("")),
  location: z.string().min(1, "Selectează locația"),
  city: z.string().optional().or(z.literal("")),
  group: z.string().min(1, "Selectează grupa"),
  gdpr: z.boolean().refine((val) => val, "Acord GDPR necesar"),
  rules: z.boolean().refine((val) => val, "Acord regulament necesar")
});

export type RegistrationPayload = z.infer<typeof registrationSchema>;
