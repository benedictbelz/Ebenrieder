import { FilterEvent } from '../@types/events';
import { FilterRoom, Room } from '../@types/rooms';
import { Language } from '../@types/language';

type Dictionary = typeof de;

const de = {
    backToOverview: 'Zurück zur Übersicht',
    backToTop: 'Zurück nach oben',
    learnMore: 'Mehr Erfahren',
    phone: 'Telefon',
    email: 'E-Mail',
    errorMessage: 'Leider ist etwas schiefgelaufen, hier kommst du wieder zurück auf die',
    errorLink: 'Startseite',
    galleryLoading: 'Lade Gallerie',
    galleryError: 'Fehler beim Laden',
    titlePlace: 'Ort',
    titleSleep: 'Schlafen',
    titleDates: 'Termine',
    titleUsage: 'Nutzung',
    cookiesText: 'Diese Website verwendet Cookies. Weitere Informationen finden Sie unter',
    cookiesPrivacy: 'Datenschutz',
    cookiesAccept: 'Akzeptieren',
    cookiesDecline: 'Ablehnen',
    eventBook: 'Buchen',
    eventUnavailable: 'Leider haben wir für diesen Monat keine Veranstaltungen geplant',
    eventUpcoming: 'aber dafür wieder im kommenden',
    emailSubject: 'Buchungsanfrage für',
    emailGreeting: 'Hallo',
    emailText: 'ich würde gerne für folgende Veranstaltung eine Buchung anfragen',
    emailEvent: 'Veranstaltung',
    emailDate: 'Datum',
    emailName: 'Name',
    emailQuantity: 'Anzahl der Personen',
    emailAccomodation: 'Übernachtung',
    emailPlaceholder: 'Bitte ausfüllen',
    emailYesNo: 'Ja/Nein',
    emailGoodbye: 'Viele Grüße!',
    filterAccomodation: 'Übernachtung',
    filterConcert: 'Konzert',
    filterCraft: 'Handwerk',
    filterDrink: 'Trinken',
    filterFood: 'Essen',
    filterSeminar: 'Seminar',
    filterWellbeing: 'Wohlbefinden',
    filterApartment: 'Appartement',
    filterRoom: 'Zimmer',
    filterSeminarRoom: 'Seminarraum',
    filterWellness: 'Wellness',
    featureAccessible: 'Barrierefrei',
    featureAirConditioning: 'Klimaanlage',
    featureBalcony: 'Privater Balkon',
    featureBasicEquipment: 'Grundausstattung',
    featureBathtub: 'Badewanne',
    featureBikes: 'Fahrräder',
    featureBooks: 'Bücher und Lesematerial',
    featureCarbonMonoxide: 'Kohlenmonoxidmelder',
    featureChildChair: 'Kinderstuhl',
    featureChimney: 'Kamin',
    featureCleaningProducts: 'Reinigungsprodukte',
    featureClothesHanger: 'Kleiderbügel',
    featureCoffeeMachine: 'Kaffeemaschine',
    featureCrib: 'Kinderbett',
    featureDarkening: 'Abdunklung',
    featureDeckChairs: 'Liegestühle',
    featureDiningTable: 'Esstisch',
    featureDishWasher: 'Geschirrspüler',
    featureDryingMachine: 'Wäschetrockner',
    featureFireplace: 'Feuerstelle',
    featureGardenFurniture: 'Gartenmöbel',
    featureGrill: 'Grill',
    featureHairDryer: 'Föhn',
    featureHammock: 'Hängematte',
    featureHeating: 'Heizung',
    featureKettle: 'Wasserkocher',
    featureOven: 'Ofen',
    featureParking: 'Kostenloser Parkplatz',
    featurePets: 'Haustiere erlaubt',
    featurePool: 'Schwimmbecken',
    featureRefrigerator: 'Kühlschrank',
    featureSauna: 'Sauna',
    featureShower: 'Dusche',
    featureSmokeDetector: 'Rauchmelder',
    featureSoap: 'Seife',
    featureSoundSystem: 'Soundsystem',
    featureSquareMeter: 'Quadratmeter',
    featureStove: 'Herd',
    featureTableware: 'Geschirr und Besteck',
    featureTelevision: 'Beamer',
    featureTurntable: 'Schallplattenspieler',
    featureVentilator: 'Ventilator',
    featureViewGarden: 'Blick auf den Garten',
    featureViewNature: 'Blick in die Natur',
    featureWardrobe: 'Kleiderschrank',
    featureWashingMachine: 'Waschmaschine',
    featureWhirlpool: 'Whirlpool',
    featureWifi: 'WLAN',
    featureWorkplace: 'Arbeitsplatz',
    conditions: 'AGB',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung'
};

const en: Dictionary = {
    backToOverview: 'Back to overview',
    backToTop: 'Back to top',
    learnMore: 'Learn More',
    phone: 'Phone',
    email: 'E-Mail',
    errorMessage: 'Unfortunately something went wrong, please go back to the',
    errorLink: 'homepage',
    galleryLoading: 'Loading gallery',
    galleryError: 'Loading error',
    titlePlace: 'Place',
    titleSleep: 'Sleep',
    titleDates: 'Dates',
    titleUsage: 'Usage',
    cookiesText: 'This website uses cookies. Further information can be found under',
    cookiesPrivacy: 'data protection',
    cookiesAccept: 'Accept',
    cookiesDecline: 'Decline',
    eventBook: 'Book',
    eventUnavailable: 'Unfortunately, we have no events planned for this month',
    eventUpcoming: 'but again in the upcoming',
    emailSubject: 'Booking request for',
    emailGreeting: 'Hello',
    emailText: 'I would like to request a booking for the following event',
    emailEvent: 'Event',
    emailDate: 'Date',
    emailName: 'Name',
    emailQuantity: 'Number of people',
    emailAccomodation: 'Accomodation',
    emailPlaceholder: 'Please complete',
    emailYesNo: 'Yes/No',
    emailGoodbye: 'Many greetings!',
    filterAccomodation: 'Accomodation',
    filterConcert: 'Concert',
    filterCraft: 'Craft',
    filterDrink: 'Drink',
    filterFood: 'Food',
    filterSeminar: 'Seminar',
    filterWellbeing: 'Wellbeing',
    filterApartment: 'Apartment',
    filterRoom: 'Room',
    filterSeminarRoom: 'Seminar Room',
    filterWellness: 'Wellness',
    featureAccessible: 'Accessible',
    featureAirConditioning: 'Air conditioning',
    featureBalcony: 'Private balkony',
    featureBasicEquipment: 'Basic equipment',
    featureBathtub: 'Bathtub',
    featureBikes: 'Bicycles',
    featureBooks: 'Books and reading material',
    featureCarbonMonoxide: 'Carbon monoxide detector',
    featureChildChair: 'Child chair',
    featureChimney: 'Chimney',
    featureCleaningProducts: 'Cleaning products',
    featureClothesHanger: 'Clothes hanger',
    featureCoffeeMachine: 'Coffee machine',
    featureCrib: 'Crib',
    featureDarkening: 'Darkening',
    featureDeckChairs: 'Deck chairs',
    featureDiningTable: 'Dining table',
    featureDishWasher: 'Dish washer',
    featureDryingMachine: 'Drying machine',
    featureFireplace: 'Fireplace',
    featureGardenFurniture: 'Garden furniture',
    featureGrill: 'Grill',
    featureHairDryer: 'Hair dryer',
    featureHammock: 'Hammock',
    featureHeating: 'Heating',
    featureKettle: 'Kettle',
    featureOven: 'Oven',
    featureParking: 'Free parking',
    featurePets: 'Pets allowed',
    featurePool: 'Swimming pool',
    featureRefrigerator: 'Refrigerator',
    featureSauna: 'Sauna',
    featureShower: 'Shower',
    featureSmokeDetector: 'Smoke detector',
    featureSoap: 'Soap',
    featureSoundSystem: 'Sound system',
    featureSquareMeter: 'Square meter',
    featureStove: 'Stove',
    featureTableware: 'Tableware',
    featureTelevision: 'Beamer',
    featureTurntable: 'Record player',
    featureVentilator: 'Ventilation',
    featureViewGarden: 'View of the garden',
    featureViewNature: 'View into nature',
    featureWardrobe: 'Wardrobe',
    featureWashingMachine: 'Washing machine',
    featureWhirlpool: 'Whirlpool',
    featureWifi: 'WIFI',
    featureWorkplace: 'Workplace',
    conditions: 'Terms & Conditions',
    imprint: 'Imprint',
    privacy: 'Privacy Policy'
};

export const getLanguage = (language: Language, key: keyof Dictionary) => {
    if (language === 'de') {
        return de[key];
    } else if (language === 'en') {
        return en[key];
    }
};

export const getLocal = (language: Language) => {
    if (language === 'de') {
        return 'de-de';
    } else if (language === 'en') {
        return 'en-gb';
    }
};

export const getFilter = (language: Language, filter: FilterEvent | FilterRoom) => {
    if (filter === 'Accomodation') {
        return getLanguage(language, 'filterAccomodation');
    } else if (filter === 'Concert') {
        return getLanguage(language, 'filterConcert');
    } else if (filter === 'Craft') {
        return getLanguage(language, 'filterCraft');
    } else if (filter === 'Drink') {
        return getLanguage(language, 'filterDrink');
    } else if (filter === 'Food') {
        return getLanguage(language, 'filterFood');
    } else if (filter === 'Seminar') {
        return getLanguage(language, 'filterSeminar');
    } else if (filter === 'Wellbeing') {
        return getLanguage(language, 'filterWellbeing');
    } else if (filter === 'Apartment') {
        return getLanguage(language, 'filterApartment');
    } else if (filter === 'Room') {
        return getLanguage(language, 'filterRoom');
    } else if (filter === 'Seminar Room') {
        return getLanguage(language, 'filterSeminarRoom');
    } else if (filter === 'Wellness') {
        return getLanguage(language, 'filterWellness');
    } else {
        return '';
    }
};

export const getFeature = (language: Language, feature: keyof Room['features']) => {
    if (feature === 'accessible') {
        return getLanguage(language, 'featureAccessible');
    } else if (feature === 'airConditioning') {
        return getLanguage(language, 'featureAirConditioning');
    } else if (feature === 'balcony') {
        return getLanguage(language, 'featureBalcony');
    } else if (feature === 'basicEquipment') {
        return getLanguage(language, 'featureBasicEquipment');
    } else if (feature === 'bathtub') {
        return getLanguage(language, 'featureBathtub');
    } else if (feature === 'bikes') {
        return getLanguage(language, 'featureBikes');
    } else if (feature === 'books') {
        return getLanguage(language, 'featureBooks');
    } else if (feature === 'carbonMonoxide') {
        return getLanguage(language, 'featureCarbonMonoxide');
    } else if (feature === 'childChair') {
        return getLanguage(language, 'featureChildChair');
    } else if (feature === 'chimney') {
        return getLanguage(language, 'featureChimney');
    } else if (feature === 'cleaningProducts') {
        return getLanguage(language, 'featureCleaningProducts');
    } else if (feature === 'clothesHanger') {
        return getLanguage(language, 'featureClothesHanger');
    } else if (feature === 'coffeeMachine') {
        return getLanguage(language, 'featureCoffeeMachine');
    } else if (feature === 'crib') {
        return getLanguage(language, 'featureCrib');
    } else if (feature === 'darkening') {
        return getLanguage(language, 'featureDarkening');
    } else if (feature === 'deckChairs') {
        return getLanguage(language, 'featureDeckChairs');
    } else if (feature === 'diningTable') {
        return getLanguage(language, 'featureDiningTable');
    } else if (feature === 'dishWasher') {
        return getLanguage(language, 'featureDishWasher');
    } else if (feature === 'dryingMachine') {
        return getLanguage(language, 'featureDryingMachine');
    } else if (feature === 'fireplace') {
        return getLanguage(language, 'featureFireplace');
    } else if (feature === 'gardenFurniture') {
        return getLanguage(language, 'featureGardenFurniture');
    } else if (feature === 'grill') {
        return getLanguage(language, 'featureGrill');
    } else if (feature === 'hairDryer') {
        return getLanguage(language, 'featureHairDryer');
    } else if (feature === 'hammock') {
        return getLanguage(language, 'featureHammock');
    } else if (feature === 'heating') {
        return getLanguage(language, 'featureHeating');
    } else if (feature === 'kettle') {
        return getLanguage(language, 'featureKettle');
    } else if (feature === 'oven') {
        return getLanguage(language, 'featureOven');
    } else if (feature === 'parking') {
        return getLanguage(language, 'featureParking');
    } else if (feature === 'pets') {
        return getLanguage(language, 'featurePets');
    } else if (feature === 'pool') {
        return getLanguage(language, 'featurePool');
    } else if (feature === 'refrigerator') {
        return getLanguage(language, 'featureRefrigerator');
    } else if (feature === 'sauna') {
        return getLanguage(language, 'featureSauna');
    } else if (feature === 'shower') {
        return getLanguage(language, 'featureShower');
    } else if (feature === 'smokeDetector') {
        return getLanguage(language, 'featureSmokeDetector');
    } else if (feature === 'soap') {
        return getLanguage(language, 'featureSoap');
    } else if (feature === 'soundSystem') {
        return getLanguage(language, 'featureSoundSystem');
    } else if (feature === 'squareMeter') {
        return getLanguage(language, 'featureSquareMeter');
    } else if (feature === 'stove') {
        return getLanguage(language, 'featureStove');
    } else if (feature === 'tableware') {
        return getLanguage(language, 'featureTableware');
    } else if (feature === 'television') {
        return getLanguage(language, 'featureTelevision');
    } else if (feature === 'turntable') {
        return getLanguage(language, 'featureTurntable');
    } else if (feature === 'ventilator') {
        return getLanguage(language, 'featureVentilator');
    } else if (feature === 'viewGarden') {
        return getLanguage(language, 'featureViewGarden');
    } else if (feature === 'viewNature') {
        return getLanguage(language, 'featureViewNature');
    } else if (feature === 'wardrobe') {
        return getLanguage(language, 'featureWardrobe');
    } else if (feature === 'washingMachine') {
        return getLanguage(language, 'featureWashingMachine');
    } else if (feature === 'whirlpool') {
        return getLanguage(language, 'featureWhirlpool');
    } else if (feature === 'wifi') {
        return getLanguage(language, 'featureWifi');
    } else if (feature === 'workplace') {
        return getLanguage(language, 'featureWorkplace');
    } else {
        return '';
    }
};
