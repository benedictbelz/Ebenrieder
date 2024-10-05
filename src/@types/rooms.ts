export const availableFilters = ['Apartment', 'Room', 'Seminar Room', 'Wellness'] as const;

export type FilterRoom = (typeof availableFilters)[number];

export type Room = {
    descriptionLong: {
        de: string;
        en: string;
    };
    descriptionShort: {
        de: string;
        en: string;
    };
    features: {
        balcony?: boolean;
        bathtub?: boolean;
        beamer?: boolean;
        chimney?: boolean;
        deckChairs?: boolean;
        diningTable?: boolean;
        dishWasher?: boolean;
        fireplace?: boolean;
        grill?: boolean;
        hairDryer?: boolean;
        hammock?: boolean;
        oven?: boolean;
        pets?: boolean;
        pool?: boolean;
        quantityPeople?: string;
        quantityYoga?: string;
        refrigerator?: boolean;
        sauna?: boolean;
        shower?: boolean;
        soundSystem?: boolean;
        squareMeter?: number;
        stove?: boolean;
        viewGarden?: boolean;
        viewNature?: boolean;
        viewVillage?: boolean;
        whirlpool?: boolean;
        wifi?: boolean;
        workplace?: boolean;
    };
    booking?: string;
    gallery: string[];
    link: string;
    previewImage: string;
    title: {
        de: string;
        en: string;
    };
    type: FilterRoom;
};
