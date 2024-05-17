export const availableLanguages = ['de', 'en'] as const;

export type Language = (typeof availableLanguages)[number];
