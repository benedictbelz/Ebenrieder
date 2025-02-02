export const availableFilters = ['Concert', 'Food', 'Pottery', 'Retreat', 'Workshop', 'Yoga'] as const;

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
              event?: number;
              singleRoom?: number;
              doubleRoom?: number;
              singleRoomPrivate?: number;
              doubleRoomPrivate?: number;
              singleRoomShared?: number;
              doubleRoomShared?: number;
          }
        | number;
    status: 'Available' | 'Expired' | 'Booked' | 'Cancelled';
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
        day?: {
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
        label?: {
            de: string;
            en: string;
        };
        link?: string;
        email?: EmailCustom | EmailDefault;
    }[];
};

export type EmailCustom = {
    subject: {
        de: string;
        en: string;
    };
    body: {
        de: string;
        en: string;
    };
};

export type EmailDefault = {
    accomodation?: boolean;
    address?: boolean;
    date?: 'Standard' | 'Fill';
    event?: boolean;
    foodIntolerance?: boolean;
    name?: boolean;
    quantityPeople?: boolean;
    quantityNights?: boolean;
    room?: 'Standard' | 'Select';
    text?: 'Event' | 'Room';
};
