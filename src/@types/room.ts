export const availableFilters = ['Apartment', 'Room', 'Seminar Room', 'Wellness'] as const;

export type Filter = (typeof availableFilters)[number];

export type Room = {
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
    features: {
        accessible?: boolean;
        airConditioning?: boolean;
        balcony?: boolean;
        basicEquipment?: boolean;
        bathtub?: boolean;
        bikes?: boolean;
        books?: boolean;
        carbonMonoxide?: boolean;
        childChair?: boolean;
        chimney?: boolean;
        cleaningProducts?: boolean;
        clothesHanger?: boolean;
        coffeeMachine?: boolean;
        crib?: boolean;
        darkening?: boolean;
        deckChairs?: boolean;
        diningTable?: boolean;
        dishWasher?: boolean;
        dryingMachine?: boolean;
        electricKettle?: boolean;
        fireplace?: boolean;
        gardenFurniture?: boolean;
        grill?: boolean;
        hairDryer?: boolean;
        hammock?: boolean;
        heating?: boolean;
        oven?: boolean;
        parking?: boolean;
        pets?: boolean;
        pool?: boolean;
        refrigerator?: boolean;
        sauna?: boolean;
        shower?: boolean;
        smokeDetector?: boolean;
        soap?: boolean;
        soundSystem?: boolean;
        squareMeter?: number;
        stove?: boolean;
        tableware?: boolean;
        television?: boolean;
        turntable?: boolean;
        ventilator?: boolean;
        viewGarden?: boolean;
        viewNature?: boolean;
        wardrobe?: boolean;
        washingMachine?: boolean;
        whirlpool?: boolean;
        wifi?: boolean;
        workplace?: boolean;
    };
    gallery: string[];
    link: string;
    previewImage: string;
    title: {
        de: string;
        en: string;
    };
    type: Filter[];
};
