export type SingularAndPluralCases = {
  singular: Cases; // liczba pojedyncza
  plural: Cases; // liczba mnoga
};

export type Cases = {
  nominative: string; // Mianownik
  genitive: string; // Dopełniacz
  dative: string; // Celownik
  accusative: string; // Biernik
  instrumental: string; // Narzędnik
  locative: string; // Miejscownik
  vocative: string; // Wołacz
};
