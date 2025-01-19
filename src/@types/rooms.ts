export const availableFilters = ['Apartment', 'Kitchen', 'Room', 'Seminar Room', 'Wellness'] as const;

export type FilterRoom = (typeof availableFilters)[number];

export type Room = {
    type: FilterRoom;
    title: {
        de: string;
        en: string;
    };
    link: string;
    booking?: string;
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
        quantitySeats?: string;
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
};
