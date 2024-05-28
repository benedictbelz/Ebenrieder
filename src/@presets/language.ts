import { Filter } from '../@types/event';
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

export const getFilter = (language: Language, filter: Filter) => {
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
    } else {
        return '';
    }
};
