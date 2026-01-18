import type { Cases } from "../types/Cases";
import type { NounEntry } from "../types/Noun";

export type PrepositionCaseRule = {
  static: keyof Cases;
  motion?: keyof Cases;
};

export const PrepositionCaseMap: Record<string, PrepositionCaseRule> = {
  w: { static: "locative", motion: "accusative" },
  na: { static: "locative", motion: "accusative" },
  pod: { static: "instrumental", motion: "accusative" },
  do: { static: "genitive" },
  z: { static: "instrumental" },
  o: { static: "locative" },
  przy: { static: "locative" },
  dla: { static: "genitive" },
  od: { static: "genitive" },
  przed: { static: "instrumental" },
  za: { static: "instrumental" },
  między: { static: "instrumental" },
  po: { static: "locative" },
  nad: { static: "instrumental", motion: "accusative" },
};

export type PrepositionForm = {
  preposition: string;
  singular: { static: string; motion?: string };
  plural: { static: string; motion?: string };
};

export function getPrepositionsForNoun(noun: NounEntry): PrepositionForm[] {
  return Object.entries(PrepositionCaseMap)
    .sort((a, b) => a[0].localeCompare(b[0], "pl"))
    .map(([prep, rule]) => ({
      preposition: prep,
      singular: {
        static: noun.cases.singular[rule.static],
        motion: rule.motion ? noun.cases.singular[rule.motion] : undefined,
      },
      plural: {
        static: noun.cases.plural[rule.static],
        motion: rule.motion ? noun.cases.plural[rule.motion] : undefined,
      },
    }));
}
