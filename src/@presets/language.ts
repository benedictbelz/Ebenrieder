import { Dictionary, Language } from '../@types/language';

const de: Dictionary = {
    language_de: 'Deutsch',
    language_en: 'Englisch',
    backToTop: 'Zurück nach oben',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    conditions: 'AGB'
};

const en: Dictionary = {
    language_de: 'German',
    language_en: 'English',
    backToTop: 'Back to top',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    conditions: 'Terms & Conditions'
};

export const getLanguage = (language: Language, key: keyof Dictionary) => {
    if (language === 'de') {
        return de[key];
    } else if (language === 'en') {
        return en[key];
    }
};
