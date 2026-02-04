export type GroupOption = {
  id: string;
  label: string;
  minAge: number;
  maxAge: number;
  description: string;
};

export const GROUPS: GroupOption[] = [
  {
    id: "mini",
    label: "Mini (4-6 ani)",
    minAge: 4,
    maxAge: 6,
    description: "Coordonare, joacă și bazele fotbalului."
  },
  {
    id: "junior",
    label: "Junior (7-9 ani)",
    minAge: 7,
    maxAge: 9,
    description: "Tehnică de bază și lucru în echipă."
  },
  {
    id: "intermediar",
    label: "Intermediar (10-12 ani)",
    minAge: 10,
    maxAge: 12,
    description: "Dezvoltare tactică și intensitate crescută."
  },
  {
    id: "avansat",
    label: "Avansat (13-16 ani)",
    minAge: 13,
    maxAge: 16,
    description: "Performanță, strategie și pregătire fizică."
  }
];

export function suggestGroup(age: number | null) {
  if (!age) return null;
  return GROUPS.find((group) => age >= group.minAge && age <= group.maxAge) ?? null;
}
