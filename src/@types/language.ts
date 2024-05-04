export const availableLanguages = ['de', 'en'] as const;

export type Language = (typeof availableLanguages)[number];

export type Dictionary = {
    language_de: string;
    language_en: string;
    backToTop: string;
    imprint: string;
    privacyPolicy: string;
    agb: string;
};
