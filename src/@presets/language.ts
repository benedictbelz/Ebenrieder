import { Dictionary, Language } from "../@types/language";

const de: Dictionary = {
    language_de: 'Deutsch',
    language_en: 'Englisch',
}

const en: Dictionary = {
    language_de: 'German',
    language_en: 'English',
}

export const getLanguage = (language: Language, key: keyof Dictionary) => {
    if (language === 'de') {
        return de[key];
    } else if (language === 'en') {
        return en[key];
    }
}