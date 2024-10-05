export const availableFilters = ['Accomodation', 'Concert', 'Food', 'Workshop', 'Yoga'] as const;

export type FilterEvent = (typeof availableFilters)[number];

export type Event = {
    type: FilterEvent[];
    title: {
        de: string;
        en: string;
    };
    subtitle: {
        de: string;
        en: string;
    }[];
    date:
        | {
              start: Date;
              end: Date;
          }
        | Date;
    price:
        | {
              singleRoom: number;
              doubleRoom: number;
          }
        | number;
    expired?: boolean;
    link: string;
    imagePreview: string;
    imageGallery: string[];
    descriptionLong: {
        de: string;
        en: string;
    };
    descriptionShort: {
        de: string;
        en: string;
    };
    descriptionDetails: {
        title?: {
            de: string;
            en: string;
        };
        content?: {
            de: string;
            en: string;
        };
    }[];
    descriptionProgram?: {
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
    attachements?: {
        label: {
            de: string;
            en: string;
        };
        link: string;
    }[];
    booking: {
        accomodation: boolean;
        date: boolean;
        foodIntolerance: boolean;
        name: boolean;
        roomType: boolean;
        title: boolean;
        quantity: boolean;
        buttons?: {
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
    };
};
