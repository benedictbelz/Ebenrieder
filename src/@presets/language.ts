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
    eventExpired: 'Abgelaufen',
    bookingSubject: 'Buchungsanfrage für',
    bookingGreeting: 'Hallo',
    bookingText: 'ich würde gerne für folgende Veranstaltung eine Buchung anfragen',
    bookingTitle: 'Veranstaltung',
    bookingDate: 'Datum',
    bookingName: 'Name',
    bookingQuantity: 'Anzahl der Personen',
    bookingAccomodation: 'Übernachtung',
    bookingRoomType: 'Art der Übernachtung',
    bookingFoodIntolerance: 'Lebensmittelunverträglichkeiten',
    bookingPleaseComplete: 'Bitte ausfüllen',
    bookingYesNo: 'Ja/Nein',
    bookingSingleDoubleRoom: 'Einzel- oder Doppelzimmer',
    bookingGoodbye: 'Viele Grüße!',
    filterAccomodation: 'Übernachtung',
    filterConcert: 'Konzert',
    filterFood: 'Essen',
    filterWorkshop: 'Workshop',
    filterYoga: 'Yoga',
    filterApartment: 'Wohnungen',
    filterRoom: 'Zimmer',
    filterSeminarRoom: 'Seminarräume',
    filterWellness: 'Wellness',
    featureBalcony: 'Privater Balkon',
    featureBathtub: 'Badewanne',
    featureBeamer: 'Beamer',
    featureChimney: 'Kamin',
    featureDeckChairs: 'Liegestühle',
    featureDiningTable: 'Esstisch',
    featureDishWasher: 'Geschirrspüler',
    featureFireplace: 'Feuerstelle',
    featureGrill: 'Grill',
    featureHairDryer: 'Föhn',
    featureHammock: 'Hängematte',
    featureOven: 'Ofen',
    featurePets: 'Haustiere erlaubt',
    featurePool: 'Schwimmbecken',
    featureQuantityPeople: 'Personen',
    featureQuantityYoga: 'Yogaplätze',
    featureRefrigerator: 'Kühlschrank',
    featureSauna: 'Sauna',
    featureShower: 'Dusche',
    featureSoundSystem: 'Soundsystem',
    featureSquareMeter: 'Quadratmeter',
    featureStove: 'Herd',
    featureViewGarden: 'Blick auf den Garten',
    featureViewNature: 'Blick in die Natur',
    featureViewVillage: 'Blick auf das Dorf',
    featureWhirlpool: 'Hot Tub',
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
    book: 'Book',
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
    eventExpired: 'Expired',
    bookingSubject: 'Booking request for',
    bookingGreeting: 'Hello',
    bookingText: 'I would like to request a booking for the following event',
    bookingTitle: 'Event',
    bookingDate: 'Date',
    bookingName: 'Name',
    bookingQuantity: 'Number of people',
    bookingAccomodation: 'Accomodation',
    bookingRoomType: 'Type of accomodation',
    bookingFoodIntolerance: 'Food intolerance',
    bookingPleaseComplete: 'Please complete',
    bookingYesNo: 'Yes/No',
    bookingSingleDoubleRoom: 'Single or double room',
    bookingGoodbye: 'Many greetings!',
    filterAccomodation: 'Accomodation',
    filterConcert: 'Concert',
    filterFood: 'Food',
    filterWorkshop: 'Workshop',
    filterYoga: 'Yoga',
    filterApartment: 'Apartments',
    filterRoom: 'Rooms',
    filterSeminarRoom: 'Workshop Spaces',
    filterWellness: 'Wellness',
    featureBalcony: 'Private balkony',
    featureBathtub: 'Bathtub',
    featureBeamer: 'Beamer',
    featureChimney: 'Chimney',
    featureDeckChairs: 'Deck chairs',
    featureDiningTable: 'Dining table',
    featureDishWasher: 'Dish washer',
    featureFireplace: 'Fireplace',
    featureGrill: 'Grill',
    featureHairDryer: 'Hair dryer',
    featureHammock: 'Hammock',
    featureOven: 'Oven',
    featurePets: 'Pets allowed',
    featurePool: 'Swimming pool',
    featureQuantityPeople: 'people',
    featureQuantityYoga: 'yoga seats',
    featureRefrigerator: 'Refrigerator',
    featureSauna: 'Sauna',
    featureShower: 'Shower',
    featureSoundSystem: 'Sound system',
    featureSquareMeter: 'Square meter',
    featureStove: 'Stove',
    featureViewGarden: 'View of the garden',
    featureViewNature: 'View into nature',
    featureViewVillage: 'View of the village',
    featureWhirlpool: 'Hot Tub',
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
    } else if (filter === 'Food') {
        return getLanguage(language, 'filterFood');
    } else if (filter === 'Workshop') {
        return getLanguage(language, 'filterWorkshop');
    } else if (filter === 'Yoga') {
        return getLanguage(language, 'filterYoga');
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
    if (feature === 'balcony') {
        return getLanguage(language, 'featureBalcony');
    } else if (feature === 'bathtub') {
        return getLanguage(language, 'featureBathtub');
    } else if (feature === 'beamer') {
        return getLanguage(language, 'featureBeamer');
    } else if (feature === 'chimney') {
        return getLanguage(language, 'featureChimney');
    } else if (feature === 'deckChairs') {
        return getLanguage(language, 'featureDeckChairs');
    } else if (feature === 'diningTable') {
        return getLanguage(language, 'featureDiningTable');
    } else if (feature === 'dishWasher') {
        return getLanguage(language, 'featureDishWasher');
    } else if (feature === 'fireplace') {
        return getLanguage(language, 'featureFireplace');
    } else if (feature === 'grill') {
        return getLanguage(language, 'featureGrill');
    } else if (feature === 'hairDryer') {
        return getLanguage(language, 'featureHairDryer');
    } else if (feature === 'hammock') {
        return getLanguage(language, 'featureHammock');
    } else if (feature === 'oven') {
        return getLanguage(language, 'featureOven');
    } else if (feature === 'pets') {
        return getLanguage(language, 'featurePets');
    } else if (feature === 'pool') {
        return getLanguage(language, 'featurePool');
    } else if (feature === 'quantityPeople') {
        return getLanguage(language, 'featureQuantityPeople');
    } else if (feature === 'quantityYoga') {
        return getLanguage(language, 'featureQuantityYoga');
    } else if (feature === 'refrigerator') {
        return getLanguage(language, 'featureRefrigerator');
    } else if (feature === 'sauna') {
        return getLanguage(language, 'featureSauna');
    } else if (feature === 'shower') {
        return getLanguage(language, 'featureShower');
    } else if (feature === 'soundSystem') {
        return getLanguage(language, 'featureSoundSystem');
    } else if (feature === 'squareMeter') {
        return getLanguage(language, 'featureSquareMeter');
    } else if (feature === 'stove') {
        return getLanguage(language, 'featureStove');
    } else if (feature === 'viewGarden') {
        return getLanguage(language, 'featureViewGarden');
    } else if (feature === 'viewNature') {
        return getLanguage(language, 'featureViewNature');
    } else if (feature === 'viewVillage') {
        return getLanguage(language, 'featureViewVillage');
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
