export const availableLanguages = ['de', 'en'] as const;

export type Language = (typeof availableLanguages)[number];

export type Dictionary = {
    language_de: string;
    language_en: string;
    backToTop: string;
    imprint: string;
    imprint_content_title: string;
    imprint_content_text: string;
    imprint_links_title: string;
    imprint_links_text: string;
    imprint_copyright_title: string;
    imprint_copyright_text: string;
    imprint_privacy_title: string;
    imprint_privacy_text: string;
    imprint_legal_title: string;
    imprint_legal_text: string;
    imprint_cookies_title: string;
    imprint_cookies_text: string;
    imprint_google_title: string;
    imprint_google_text: string;
    privacy: string;
    conditions: string;
    phone: string;
    eMail: string;
    ustId: string;
    commercialRegister: string;
    executiveBoard: string;
    responsibleForContent: string;
    conception: string;
    photography: string;
};
