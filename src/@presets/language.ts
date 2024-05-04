import { Dictionary, Language } from '../@types/language';

const de: Dictionary = {
    language_de: 'Deutsch',
    language_en: 'Englisch',
    backToTop: 'Zurück nach oben',
    imprint: 'Impressum',
    privacyPolicy: 'Datenschutzerklärung',
    agb: 'AGB'
};

const en: Dictionary = {
    language_de: 'German',
    language_en: 'English',
    backToTop: 'Back to top',
    imprint: 'Imprint',
    privacyPolicy: 'Privacy Policy',
    agb: 'Terms & Conditions'
};

export const getLanguage = (language: Language, key: keyof Dictionary) => {
    if (language === 'de') {
        return de[key];
    } else if (language === 'en') {
        return en[key];
    }
};
