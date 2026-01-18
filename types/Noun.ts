import type { Cases } from "./Cases";
import type { Gender } from "./Gender";
import type { Translation } from "./Translation";

export interface NounEntry {
  gender: Gender;
  cases: Cases;
  translations?: Translation[];
}

export type NounsDictionary = Record<string, NounEntry>;
