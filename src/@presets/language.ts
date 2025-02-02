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
    book: 'Buchen',
    bookAccomodation: 'Unterkunft buchen',
    bookEvent: 'Veranstaltung buchen',
    share: 'Teilen',
    error: 'Leider ist etwas schiefgelaufen, hier kommst du wieder zurück auf die <%a%>Startseite<%/a%>',
    galleryLoading: 'Lade Gallerie',
    galleryError: 'Fehler beim Laden',
    titleArrival: 'Anreise',
    titleCalendar: 'Termine',
    titleLocation: 'Ort',
    titlePossibilities: 'Nutzung',
    titleSleep: 'Schlafen',
    mapCookies:
        'Um die Karte anzeigen zu können, muss der <%a%>Datenschutzerklärung<%/a%> zugestimmt werden. Ansonsten kann ebenfalls der folgende <%a%>Link<%/a%> aufgerufen werden.',
    mapAccept: 'Karte anzeigen',
    mapDirections: 'Routenplaner',
    cookiesText: 'Diese Website verwendet Cookies. Weitere Informationen finden Sie unter',
    cookiesPrivacy: 'Datenschutz',
    cookiesAccept: 'Akzeptieren',
    cookiesDecline: 'Ablehnen',
    eventUnavailable: 'Bisher haben wir für diesen Monat keine Veranstaltungen geplant<%split%>, aber dafür wieder im kommenden',
    eventBooked: 'Ausgebucht',
    eventExpired: 'Abgelaufen',
    bookingSubject: 'Buchungsanfrage für',
    bookingGreeting: 'Hallo',
    bookingTextEvent: 'ich würde gerne für folgende Veranstaltung eine Buchung anfragen',
    bookingTextRoom: 'ich würde gerne für folgende Veranstaltung eine Unterkunft anfragen',
    bookingAccomodation: 'Übernachtung',
    bookingAddress: 'Adresse',
    bookingDate: 'Datum',
    bookingEvent: 'Veranstaltung',
    bookingFoodIntolerance: 'Lebensmittelunverträglichkeiten',
    bookingName: 'Name',
    bookingQuantityPeople: 'Anzahl der Personen',
    bookingQuantityNights: 'Anzahl der Nächte',
    bookingRoomType: 'Art der Übernachtung',
    bookingNight: 'Nacht',
    bookingPleaseComplete: 'Bitte ausfüllen',
    bookingPleaseSelect: 'Bitte auswählen',
    bookingYesNo: 'Ja/Nein',
    bookingSingleDoubleRoom: 'Einzelzimmer/Doppelzimmer',
    bookingSingleRoomPrivate: 'EZ mit eigenem Bad',
    bookingDoubleRoomPrivate: 'DZ mit eigenem Bad',
    bookingSingleRoomShared: 'EZ mit geteiltem Bad (Wohnung)',
    bookingDoubleRoomShared: 'DZ mit geteiltem Bad (Wohnung)',
    bookingGoodbye: 'Viele Grüße!',
    filterConcert: 'Konzert',
    filterFood: 'Essen',
    filterPottery: 'Keramik',
    filterRetreat: 'Retreat',
    filterWorkshop: 'Workshop',
    filterYoga: 'Yoga',
    filterApartment: 'Wohnungen',
    filterKitchen: 'Küchen',
    filterRoom: 'Zimmer',
    filterSeminarRoom: 'Seminarräume',
    filterWellness: 'Wellness',
    featureBalcony: 'Privater Balkon',
    featureBathtub: 'Badewanne',
    featureBeamer: 'Beamer',
    featureChimney: 'Kamin',
    featureCoolingDrawer: 'Kühlschubladen',
    featureDeckChairs: 'Liegestühle',
    featureDiningTable: 'Esstisch',
    featureDishWasherWinterhalter: 'Winterhalter Spülmaschine',
    featureDishWasher: 'Geschirrspüler',
    featureElectricity: 'Strom',
    featureFireplace: 'Feuerstelle',
    featureFreezer: 'Kühl- und Gefrierkombination',
    featureFreezerWithIceMachine: 'Kühl- und Gefrierkombination mit Eisbereiter',
    featureGrillGrate: 'Planchas und Grillroste',
    featureGrill: 'Grill mit zwei Kammern und drei Einschubhöhen',
    featureHairDryer: 'Föhn',
    featureHammock: 'Hängematte',
    featureHeatLamp: 'Wärmelampen',
    featureHeatingDrawer: 'Warmhalteschubladen',
    featureKitchenMachine: 'Küchenmaschine',
    featureOven: 'Backofen',
    featurePacojet: 'Pacojet',
    featurePets: 'Haustiere erlaubt',
    featurePool: 'Schwimmbecken',
    featurePressureCooker: 'Rational iVario',
    featureQuantityPeople: 'Personen',
    featureQuantitySeats: 'Sitzplätze',
    featureQuantityYoga: 'Yogaplätze',
    featureQuantityStoveGas: 'Gaskochfelder',
    featureQuantityStoveInduction: 'Induktionskochfelder',
    featureRationalCombi: 'Rational iCombi',
    featureRationalVario: 'Rational iVario',
    featureRefrigerator: 'Kühlschrank',
    featureSalamander: 'Salamander',
    featureSauna: 'Sauna',
    featureShower: 'Dusche',
    featureSoundSystem: 'Soundsystem',
    featureSquareMeter: 'Quadratmeter',
    featureSteamCooker: 'Dampfgarer',
    featureStoveGas: 'Gaskochfelder',
    featureStoveInduction: 'Induktionskochfelder',
    featureStove: 'Herd',
    featureTelevision: 'Fernseher',
    featureThermomix: 'Thermomix',
    featureViewGarden: 'Blick auf den Garten',
    featureViewNature: 'Blick in die Natur',
    featureViewVillage: 'Blick auf das Dorf',
    featureVitamix: 'Vitamix',
    featureWashBasinQuooker: 'Quooker Wasserhahn',
    featureWashBasin: 'Waschbecken',
    featureWhirlpool: 'Hot Tub',
    featureWifi: 'WLAN',
    featureWorkplace: 'Arbeitsplatz',
    imprint: 'Impressum',
    privacy: 'Datenschutzerklärung',
    termsShort: 'AGB',
    termsLong: 'Allgemeine Geschäftsbedingungen'
};

const en: Dictionary = {
    backToOverview: 'Back to overview',
    backToTop: 'Back to top',
    learnMore: 'Learn More',
    phone: 'Phone',
    email: 'E-Mail',
    book: 'Book',
    bookAccomodation: 'Book accomodation',
    bookEvent: 'Book event',
    share: 'Share',
    error: 'Unfortunately something went wrong, please go back to the <%a%>homepage<%/a%>',
    galleryLoading: 'Loading gallery',
    galleryError: 'Loading error',
    titleArrival: 'Arrival',
    titleCalendar: 'Calendar',
    titleLocation: 'Location',
    titlePossibilities: 'Possibilities',
    titleSleep: 'Sleep',
    mapCookies: 'To view the map, you must agree to the <%a%>privacy<%/a%>. Otherwise you can also use the following <%a%>link<%/a%>.',
    mapAccept: 'View map',
    mapDirections: 'Directions',
    cookiesText: 'This website uses cookies. Further information can be found under',
    cookiesPrivacy: 'data protection',
    cookiesAccept: 'Accept',
    cookiesDecline: 'Decline',
    eventUnavailable: 'So far, we have no events planned for this month<%split%>, but again in the upcoming',
    eventBooked: 'Fully Booked',
    eventExpired: 'Expired',
    bookingSubject: 'Booking request for',
    bookingGreeting: 'Hello',
    bookingTextEvent: 'I would like to request a booking for the following event',
    bookingTextRoom: 'I would like to request an accomodation for the following event',
    bookingAccomodation: 'Accomodation',
    bookingAddress: 'Adress',
    bookingDate: 'Date',
    bookingEvent: 'Event',
    bookingFoodIntolerance: 'Food intolerance',
    bookingName: 'Name',
    bookingQuantityPeople: 'Number of people',
    bookingQuantityNights: 'Number of nights',
    bookingRoomType: 'Type of accomodation',
    bookingNight: 'Night',
    bookingPleaseComplete: 'Please complete',
    bookingPleaseSelect: 'Please select',
    bookingYesNo: 'Yes/No',
    bookingSingleDoubleRoom: 'Single room/Double room',
    bookingSingleRoomPrivate: 'EZ with private bathroom',
    bookingDoubleRoomPrivate: 'DZ with private bathroom',
    bookingSingleRoomShared: 'EZ with shared bathroom',
    bookingDoubleRoomShared: 'DZ with shared bathroom',
    bookingGoodbye: 'Many greetings!',
    filterConcert: 'Concert',
    filterFood: 'Food',
    filterPottery: 'Pottery',
    filterRetreat: 'Retreat',
    filterWorkshop: 'Workshop',
    filterYoga: 'Yoga',
    filterApartment: 'Apartments',
    filterKitchen: 'Kitchens',
    filterRoom: 'Rooms',
    filterSeminarRoom: 'Workshop Spaces',
    filterWellness: 'Wellness',
    featureBalcony: 'Private balkony',
    featureBathtub: 'Bathtub',
    featureBeamer: 'Beamer',
    featureChimney: 'Chimney',
    featureCoolingDrawer: 'Cooling Drawers',
    featureDeckChairs: 'Deck chairs',
    featureDiningTable: 'Dining table',
    featureDishWasherWinterhalter: 'Winterhalter dish washer',
    featureDishWasher: 'Dish washer',
    featureElectricity: 'Electricity',
    featureFireplace: 'Fireplace',
    featureFreezer: 'Fridge and freezer combination',
    featureFreezerWithIceMachine: 'Fridge and freezer combination with ice maker',
    featureGrillGrate: 'Planchas und grill grates',
    featureGrill: 'Grill with two chambers and three insertion heights',
    featureHairDryer: 'Hair dryer',
    featureHammock: 'Hammock',
    featureHeatLamp: 'Heating lamps',
    featureHeatingDrawer: 'Warming drawers',
    featureKitchenMachine: 'Kitchen machine',
    featureOven: 'Oven',
    featurePacojet: 'Pacojet',
    featurePets: 'Pets allowed',
    featurePool: 'Swimming pool',
    featurePressureCooker: 'Rational iVario',
    featureQuantityPeople: 'people',
    featureQuantitySeats: 'seats',
    featureQuantityYoga: 'yoga seats',
    featureQuantityStoveGas: 'Gas cooktops',
    featureQuantityStoveInduction: 'Induction cooktops',
    featureRationalCombi: 'Rational iCombi',
    featureRationalVario: 'Rational iVario',
    featureRefrigerator: 'Refrigerator',
    featureSalamander: 'Salamander',
    featureSauna: 'Sauna',
    featureShower: 'Shower',
    featureSoundSystem: 'Sound system',
    featureSquareMeter: 'Square meter',
    featureSteamCooker: 'Steam cooker',
    featureStoveGas: 'Gas cooktops',
    featureStoveInduction: 'Induction cooktops',
    featureStove: 'Stove',
    featureTelevision: 'Television',
    featureThermomix: 'Thermomix',
    featureViewGarden: 'View of the garden',
    featureViewNature: 'View into nature',
    featureViewVillage: 'View of the village',
    featureVitamix: 'Vitamix',
    featureWhirlpool: 'Hot Tub',
    featureWifi: 'WIFI',
    featureWashBasinQuooker: 'Quooker water tap',
    featureWashBasin: 'Wash basin',
    featureWorkplace: 'Workplace',
    imprint: 'Imprint',
    privacy: 'Privacy Policy',
    termsShort: 'GTC',
    termsLong: 'General Terms & Conditions'
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
    if (filter === 'Concert') {
        return getLanguage(language, 'filterConcert');
    } else if (filter === 'Food') {
        return getLanguage(language, 'filterFood');
    } else if (filter === 'Pottery') {
        return getLanguage(language, 'filterPottery');
    } else if (filter === 'Retreat') {
        return getLanguage(language, 'filterRetreat');
    } else if (filter === 'Workshop') {
        return getLanguage(language, 'filterWorkshop');
    } else if (filter === 'Yoga') {
        return getLanguage(language, 'filterYoga');
    } else if (filter === 'Apartment') {
        return getLanguage(language, 'filterApartment');
    } else if (filter === 'Kitchen') {
        return getLanguage(language, 'filterKitchen');
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
    if (feature === 'balcony') {
        return getLanguage(language, 'featureBalcony');
    } else if (feature === 'bathtub') {
        return getLanguage(language, 'featureBathtub');
    } else if (feature === 'beamer') {
        return getLanguage(language, 'featureBeamer');
    } else if (feature === 'chimney') {
        return getLanguage(language, 'featureChimney');
    } else if (feature === 'coolingDrawer') {
        return getLanguage(language, 'featureCoolingDrawer');
    } else if (feature === 'deckChairs') {
        return getLanguage(language, 'featureDeckChairs');
    } else if (feature === 'diningTable') {
        return getLanguage(language, 'featureDiningTable');
    } else if (feature === 'dishWasherWinterhalter') {
        return getLanguage(language, 'featureDishWasherWinterhalter');
    } else if (feature === 'dishWasher') {
        return getLanguage(language, 'featureDishWasher');
    } else if (feature === 'electricity') {
        return getLanguage(language, 'featureElectricity');
    } else if (feature === 'fireplace') {
        return getLanguage(language, 'featureFireplace');
    } else if (feature === 'freezer') {
        return getLanguage(language, 'featureFreezer');
    } else if (feature === 'freezerWithIceMachine') {
        return getLanguage(language, 'featureFreezerWithIceMachine');
    } else if (feature === 'grillGrate') {
        return getLanguage(language, 'featureGrillGrate');
    } else if (feature === 'grill') {
        return getLanguage(language, 'featureGrill');
    } else if (feature === 'hairDryer') {
        return getLanguage(language, 'featureHairDryer');
    } else if (feature === 'hammock') {
        return getLanguage(language, 'featureHammock');
    } else if (feature === 'heatLamp') {
        return getLanguage(language, 'featureHeatLamp');
    } else if (feature === 'heatingDrawer') {
        return getLanguage(language, 'featureHeatingDrawer');
    } else if (feature === 'kitchenMachine') {
        return getLanguage(language, 'featureKitchenMachine');
    } else if (feature === 'oven') {
        return getLanguage(language, 'featureOven');
    } else if (feature === 'pacojet') {
        return getLanguage(language, 'featurePacojet');
    } else if (feature === 'pets') {
        return getLanguage(language, 'featurePets');
    } else if (feature === 'pool') {
        return getLanguage(language, 'featurePool');
    } else if (feature === 'quantityPeople') {
        return getLanguage(language, 'featureQuantityPeople');
    } else if (feature === 'quantitySeats') {
        return getLanguage(language, 'featureQuantitySeats');
    } else if (feature === 'quantityYoga') {
        return getLanguage(language, 'featureQuantityYoga');
    } else if (feature === 'quantityStoveGas') {
        return getLanguage(language, 'featureStoveGas');
    } else if (feature === 'quantityStoveInduction') {
        return getLanguage(language, 'featureQuantityStoveInduction');
    } else if (feature === 'rationalCombi') {
        return getLanguage(language, 'featureRationalCombi');
    } else if (feature === 'rationalVario') {
        return getLanguage(language, 'featureRationalVario');
    } else if (feature === 'refrigerator') {
        return getLanguage(language, 'featureRefrigerator');
    } else if (feature === 'salamander') {
        return getLanguage(language, 'featureSalamander');
    } else if (feature === 'sauna') {
        return getLanguage(language, 'featureSauna');
    } else if (feature === 'shower') {
        return getLanguage(language, 'featureShower');
    } else if (feature === 'soundSystem') {
        return getLanguage(language, 'featureSoundSystem');
    } else if (feature === 'squareMeter') {
        return getLanguage(language, 'featureSquareMeter');
    } else if (feature === 'steamCooker') {
        return getLanguage(language, 'featureSteamCooker');
    } else if (feature === 'stoveGas') {
        return getLanguage(language, 'featureStoveGas');
    } else if (feature === 'stoveInduction') {
        return getLanguage(language, 'featureStoveInduction');
    } else if (feature === 'stove') {
        return getLanguage(language, 'featureStove');
    } else if (feature === 'television') {
        return getLanguage(language, 'featureTelevision');
    } else if (feature === 'thermomix') {
        return getLanguage(language, 'featureThermomix');
    } else if (feature === 'viewGarden') {
        return getLanguage(language, 'featureViewGarden');
    } else if (feature === 'viewNature') {
        return getLanguage(language, 'featureViewNature');
    } else if (feature === 'viewVillage') {
        return getLanguage(language, 'featureViewVillage');
    } else if (feature === 'vitamix') {
        return getLanguage(language, 'featureVitamix');
    } else if (feature === 'washBasinQuooker') {
        return getLanguage(language, 'featureWashBasinQuooker');
    } else if (feature === 'washBasin') {
        return getLanguage(language, 'featureWashBasin');
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
