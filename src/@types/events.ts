export const availableFilters = ['Accomodation', 'Concert', 'Food', 'Workshop', 'Yoga'] as const;

export type FilterEvent = (typeof availableFilters)[number];

export type Event = {
    booking?: {
        label: {
            de: string;
            en: string;
        };
        link?: string;
        email?: {
            subject: {
                de: string;
                en: string;
            };
            body: {
                de: string;
                en: string;
            };
        };
    }[];
    date:
        | {
              start: Date;
              end: Date;
          }
        | Date;
    descriptionProcedure?: {
        day: {
            de: string;
            en: string;
        };
        activities: {
            time: string;
            description: {
                de: string;
                en: string;
            };
        }[];
    }[];
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
    email?: {
        accomodation: boolean;
        accomodationType: boolean;
        date: boolean;
        foodIntolerance: boolean;
        name: boolean;
        title: boolean;
        quantity: boolean;
    };
    expired?: boolean;
    gallery: string[];
    link: string;
    previewImage: string;
    program?: string;
    subtitle?: {
        de: string;
        en: string;
    }[];
    title: {
        de: string;
        en: string;
    };
    type: FilterEvent[];
    price: number | null;
};
