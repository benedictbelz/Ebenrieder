export const availableFilters = ['Accomodation', 'Concert', 'Craft', 'Drink', 'Food', 'Seminar', 'Wellbeing'] as const;

export type Filter = (typeof availableFilters)[number];

export type Event = {
    date:
        | {
              start: Date;
              end: Date;
          }
        | Date;
    descriptionLong: {
        de: string;
        en: string;
    };
    descriptionShort: {
        de: string;
        en: string;
    };
    details: {
        title?: {
            de: string;
            en: string;
        };
        content?: {
            de: string;
            en: string;
        };
    }[];
    gallery: string[];
    link: string;
    previewImage: string;
    subtitle?: {
        de: string;
        en: string;
    }[];
    title: {
        de: string;
        en: string;
    };
    type: Filter[];
    price: number;
};
