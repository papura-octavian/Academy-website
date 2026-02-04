export type GroupOption = {
  id: string;
  label: string;
  minAge: number;
  maxAge: number;
  description: string;
};

import { SITE } from "@/lib/constants";

export const GROUPS: GroupOption[] = SITE.groups;

export function suggestGroup(age: number | null) {
  if (!age) return null;
  return GROUPS.find((group) => age >= group.minAge && age <= group.maxAge) ?? null;
}
