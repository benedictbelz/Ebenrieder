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
        coolingDrawer?: boolean;
        deckChairs?: boolean;
        diningTable?: boolean;
        dishWasher?: boolean;
        dishWasherWinterhalter?: boolean;
        electricity?: boolean;
        fireplace?: boolean;
        freezer?: boolean;
        freezerWithIceMachine?: boolean;
        grillGrate?: boolean;
        grill?: boolean;
        hairDryer?: boolean;
        hammock?: boolean;
        heatLamp?: boolean;
        heatingDrawer?: boolean;
        kitchenMachine?: boolean;
        oven?: boolean;
        pacojet?: boolean;
        pets?: boolean;
        pool?: boolean;
        quantityPeople?: string;
        quantitySeats?: string;
        quantityYoga?: string;
        quantityStoveGas?: number;
        quantityStoveInduction?: number;
        rationalCombi?: boolean;
        rationalVario?: boolean;
        refrigerator?: boolean;
        salamander?: boolean;
        sauna?: boolean;
        shower?: boolean;
        soundSystem?: boolean;
        squareMeter?: number;
        steamCooker?: boolean;
        stoveGas?: boolean;
        stoveInduction?: boolean;
        stove?: boolean;
        television?: boolean;
        thermomix?: boolean;
        viewGarden?: boolean;
        viewNature?: boolean;
        viewVillage?: boolean;
        vitamix?: boolean;
        washBasin?: boolean;
        washBasinQuooker?: boolean;
        whirlpool?: boolean;
        wifi?: boolean;
        workplace?: boolean;
    };
};
