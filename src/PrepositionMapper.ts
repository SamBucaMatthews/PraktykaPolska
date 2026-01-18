import type { Cases } from "../types/Cases";
import type { NounEntry } from "../types/Noun";

export const PrepositionCaseMap: Record<string, keyof Cases> = {
  w: "locative",
  na: "locative",
  pod: "instrumental",
  do: "genitive",
  z: "instrumental",
  o: "locative",
  przy: "locative",
  dla: "genitive",
  od: "genitive",
  przed: "instrumental",
  za: "instrumental",
  między: "instrumental",
  po: "locative",
};

const prepositions = Object.keys(PrepositionCaseMap);

export function getPrepositionsForNoun(
  noun: NounEntry,
): { preposition: string; form: string }[] {
  return prepositions.map((prep) => {
    const caseKey = PrepositionCaseMap[prep];
    return {
      preposition: prep,
      form: noun.cases[caseKey],
    };
  });
}
