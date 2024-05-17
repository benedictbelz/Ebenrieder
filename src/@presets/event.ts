import { Event } from '../@types/event';

export function getEvents(): Event[] {
    return [
        {
            date: new Date(2024, 4, 10, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Tasting mit 6 verschiedenen Gins',
                        en: 'Tasting with 6 different Gins'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '15-30',
                        en: '15-30'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 2,5 Stunden',
                        en: 'approx. 2,5 hours'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '19 Uhr',
                        en: "19 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '19:30 Uhr',
                        en: "19:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Teilnahme',
                        en: 'Attendance'
                    },
                    content: {
                        de: 'ab 18 Jahren',
                        en: '18 years and older'
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '59 EUR pro Person',
                        en: '59 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink & Finger Food',
                        en: 'incl. welcome drink & finger food'
                    }
                }
            ],
            gallery: ['assets/media/events/gin_gin_01.jpg', 'assets/media/events/gin_gin_02.jpg', 'assets/media/events/gin_gin_03.jpg'],
            previewImage: 'assets/media/events/gin_gin_01.jpg',
            subtitle: [
                {
                    de: 'Gin Tasting',
                    en: 'Gin Tasting'
                }
            ],
            title: {
                de: 'Gin Gin!',
                en: 'Gin Gin!'
            },
            type: ['Drink', 'Food'],
            price: 59
        },
        {
            date: {
                start: new Date(2024, 4, 15, 19, 0),
                end: new Date(2024, 4, 17, 19, 0)
            },
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Exklusives 5-Gänge-Menü',
                        en: 'Exclusive 5 course menu'
                    },
                    content: {
                        de: 'behind the scenes in unserer Event-Küche',
                        en: 'behind the scenes in our event kitchen'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-15',
                        en: '10-15'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 4 Stunden',
                        en: 'approx. 4 hours'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '19 Uhr',
                        en: "19 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '19:30 Uhr',
                        en: "19:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '199 EUR pro Person',
                        en: '199 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Wein, Bier, Softdrinks & Kaffee',
                        en: 'incl. wine, beer, soft drinks & coffee'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink',
                        en: 'incl. welcome drink'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer zu 100 EUR inkl. Frühstück (optional)',
                        en: 'Double room at 100 EUR incl. breakfast (optional)'
                    }
                }
            ],
            gallery: [
                'assets/media/events/chefs_table_01.jpg',
                'assets/media/events/chefs_table_02.jpg',
                'assets/media/events/chefs_table_03.jpg',
                'assets/media/events/chefs_table_04.jpg',
                'assets/media/events/chefs_table_05.jpg',
                'assets/media/events/chefs_table_06.jpg',
                'assets/media/events/chefs_table_07.jpg',
                'assets/media/events/chefs_table_08.jpg',
                'assets/media/events/chefs_table_09.jpg',
                'assets/media/events/chefs_table_10.jpg'
            ],
            previewImage: 'assets/media/events/chefs_table_01.jpg',
            subtitle: [
                {
                    de: 'Exklusiver Dinner-Abend',
                    en: 'Exclusive dinner evening'
                },
                {
                    de: '5-Gänge-Menü',
                    en: '5 course menu'
                }
            ],
            title: {
                de: "Chef's Table",
                en: "Chef's Table"
            },
            type: ['Drink', 'Food'],
            price: 199
        },
        {
            date: new Date(2024, 4, 20, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam erat.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua et dolore magna aliquyam erat.'
            },
            details: [
                {
                    title: {
                        de: 'Whisky Tasting',
                        en: 'Whisky Tasting'
                    },
                    content: {
                        de: 'mit 6 verschiedenen Whiskys und begleitendem 4-Gänge-Menü',
                        en: 'with 6 different whiskies and accompanying 4 course menu'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-30',
                        en: '10-30'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 3 Stunden',
                        en: 'approx. 3 hours'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '19 Uhr',
                        en: "19 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '19:30 Uhr',
                        en: "19:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Teilnahme',
                        en: 'Attendance'
                    },
                    content: {
                        de: 'ab 18 Jahren',
                        en: '18 years and older'
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '125 EUR pro Person',
                        en: '125 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink & Finger Food',
                        en: 'incl. welcome drink & finger food'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer zu 100 EUR inkl. Frühstück (optional)',
                        en: 'Double room at 100 EUR incl. breakfast (optional)'
                    }
                }
            ],
            gallery: [
                'assets/media/events/whiskey_dinner_01.jpg',
                'assets/media/events/whiskey_dinner_02.jpg',
                'assets/media/events/whiskey_dinner_03.jpg',
                'assets/media/events/whiskey_dinner_04.jpg'
            ],
            previewImage: 'assets/media/events/whiskey_dinner_01.jpg',
            subtitle: [
                {
                    de: 'Whiskey Tasting',
                    en: 'Whiskey Tasting'
                },
                {
                    de: '4-Gänge-Menü',
                    en: '4 course menu'
                }
            ],
            title: {
                de: 'Whisky Dinner',
                en: 'Whisky Dinner'
            },
            type: ['Drink', 'Food'],
            price: 199
        },
        {
            date: new Date(2024, 4, 28, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
            },
            details: [
                {
                    title: {
                        de: '4-Gänge-Menü',
                        en: '4 course menu'
                    },
                    content: {
                        de: 'rund um das Thema Trüffel',
                        en: 'around the topic of truffles'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink, Wein & Wasser',
                        en: 'incl. welcome drink, wine & water'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '15-30',
                        en: '15-30'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 3,5 Stunden',
                        en: 'approx. 3,5 hours'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '19 Uhr',
                        en: "19 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '19:30 Uhr',
                        en: "19:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '135 EUR pro Person',
                        en: '135 EUR per person'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer zu 100 EUR inkl. Frühstück (optional)',
                        en: 'Double room at 100 EUR incl. breakfast (optional)'
                    }
                }
            ],
            gallery: [
                'assets/media/events/truffel_soiree_01.jpg',
                'assets/media/events/truffel_soiree_02.jpg',
                'assets/media/events/truffel_soiree_03.jpg',
                'assets/media/events/truffel_soiree_04.jpg',
                'assets/media/events/truffel_soiree_05.jpg',
                'assets/media/events/truffel_soiree_06.jpg',
                'assets/media/events/truffel_soiree_07.jpg'
            ],
            previewImage: 'assets/media/events/truffel_soiree_01.jpg',
            subtitle: [
                {
                    de: '4-Gänge-Menü',
                    en: '4 course menu'
                }
            ],
            title: {
                de: 'Trüffel Soiree',
                en: 'Truffle Soiree'
            },
            type: ['Drink', 'Food'],
            price: 135
        },
        {
            date: new Date(2024, 4, 30, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Yoga Entspannung',
                        en: 'Yoga relaxation'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-20',
                        en: '10-20'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 1 Stunde',
                        en: 'approx. 1 hour'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '15 Uhr',
                        en: "15 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '15:30 Uhr',
                        en: "15:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '50 EUR pro Person',
                        en: '50 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Yoga Matte, Tee & Wasser',
                        en: 'incl. yoga mat, tea & water'
                    }
                }
            ],
            gallery: ['assets/media/events/yoga_01.jpg', 'assets/media/events/yoga_02.jpg', 'assets/media/events/yoga_03.jpg'],
            previewImage: 'assets/media/events/yoga_01.jpg',
            title: {
                de: 'Yoga mit Karina Wagner',
                en: 'Yoga with Karina Wagner'
            },
            type: ['Wellbeing'],
            price: 50
        },
        {
            date: {
                start: new Date(2024, 5, 6, 19, 0),
                end: new Date(2024, 5, 8, 19, 0)
            },
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Exklusives 5-Gänge-Menü',
                        en: 'Exclusive 5 course menu'
                    },
                    content: {
                        de: 'behind the scenes in unserer Event-Küche',
                        en: 'behind the scenes in our event kitchen'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-15',
                        en: '10-15'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 4 Stunden',
                        en: 'approx. 4 hours'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '19 Uhr',
                        en: "19 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '19:30 Uhr',
                        en: "19:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '199 EUR pro Person',
                        en: '199 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Wein, Bier, Softdrinks & Kaffee',
                        en: 'incl. wine, beer, soft drinks & coffee'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink',
                        en: 'incl. welcome drink'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer zu 100 EUR inkl. Frühstück (optional)',
                        en: 'Double room at 100 EUR incl. breakfast (optional)'
                    }
                }
            ],
            gallery: [
                'assets/media/events/chefs_table_01.jpg',
                'assets/media/events/chefs_table_02.jpg',
                'assets/media/events/chefs_table_03.jpg',
                'assets/media/events/chefs_table_04.jpg',
                'assets/media/events/chefs_table_05.jpg',
                'assets/media/events/chefs_table_06.jpg',
                'assets/media/events/chefs_table_07.jpg',
                'assets/media/events/chefs_table_08.jpg',
                'assets/media/events/chefs_table_09.jpg',
                'assets/media/events/chefs_table_10.jpg'
            ],
            previewImage: 'assets/media/events/chefs_table_01.jpg',
            subtitle: [
                {
                    de: 'Exklusiver Dinner-Abend',
                    en: 'Exclusive dinner evening'
                },
                {
                    de: '5-Gänge-Menü',
                    en: '5 course menu'
                }
            ],
            title: {
                de: "Chef's Table",
                en: "Chef's Table"
            },
            type: ['Drink', 'Food'],
            price: 199
        },
        {
            date: new Date(2024, 5, 12, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
            },
            details: [
                {
                    title: {
                        de: '4-Gänge-Menü',
                        en: '4 course menu'
                    },
                    content: {
                        de: 'rund um das Thema Trüffel',
                        en: 'around the topic of truffles'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink, Wein & Wasser',
                        en: 'incl. welcome drink, wine & water'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '15-30',
                        en: '15-30'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 3,5 Stunden',
                        en: 'approx. 3,5 hours'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '19 Uhr',
                        en: "19 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '19:30 Uhr',
                        en: "19:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '135 EUR pro Person',
                        en: '135 EUR per person'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer zu 100 EUR inkl. Frühstück (optional)',
                        en: 'Double room at 100 EUR incl. breakfast (optional)'
                    }
                }
            ],
            gallery: [
                'assets/media/events/truffel_soiree_01.jpg',
                'assets/media/events/truffel_soiree_02.jpg',
                'assets/media/events/truffel_soiree_03.jpg',
                'assets/media/events/truffel_soiree_04.jpg',
                'assets/media/events/truffel_soiree_05.jpg',
                'assets/media/events/truffel_soiree_06.jpg',
                'assets/media/events/truffel_soiree_07.jpg'
            ],
            previewImage: 'assets/media/events/truffel_soiree_01.jpg',
            subtitle: [
                {
                    de: '4-Gänge-Menü',
                    en: '4 course menu'
                }
            ],
            title: {
                de: 'Trüffel Soiree',
                en: 'Truffle Soiree'
            },
            type: ['Drink', 'Food'],
            price: 135
        },
        {
            date: new Date(2024, 5, 16, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Yoga Entspannung',
                        en: 'Yoga relaxation'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-20',
                        en: '10-20'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 1 Stunde',
                        en: 'approx. 1 hour'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '15 Uhr',
                        en: "15 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '15:30 Uhr',
                        en: "15:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '50 EUR pro Person',
                        en: '50 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Yoga Matte, Tee & Wasser',
                        en: 'incl. yoga mat, tea & water'
                    }
                }
            ],
            gallery: ['assets/media/events/yoga_01.jpg', 'assets/media/events/yoga_02.jpg', 'assets/media/events/yoga_03.jpg'],
            previewImage: 'assets/media/events/yoga_01.jpg',
            title: {
                de: 'Yoga mit Karina Wagner',
                en: 'Yoga with Karina Wagner'
            },
            type: ['Wellbeing'],
            price: 50
        },
        {
            date: new Date(2024, 6, 10, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Yoga Entspannung',
                        en: 'Yoga relaxation'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-20',
                        en: '10-20'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 1 Stunde',
                        en: 'approx. 1 hour'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '15 Uhr',
                        en: "15 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '15:30 Uhr',
                        en: "15:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '50 EUR pro Person',
                        en: '50 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Yoga Matte, Tee & Wasser',
                        en: 'incl. yoga mat, tea & water'
                    }
                }
            ],
            gallery: ['assets/media/events/yoga_01.jpg', 'assets/media/events/yoga_02.jpg', 'assets/media/events/yoga_03.jpg'],
            previewImage: 'assets/media/events/yoga_01.jpg',
            title: {
                de: 'Yoga mit Karina Wagner',
                en: 'Yoga with Karina Wagner'
            },
            type: ['Wellbeing'],
            price: 50
        },
        {
            date: new Date(2024, 8, 10, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Yoga Entspannung',
                        en: 'Yoga relaxation'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-20',
                        en: '10-20'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 1 Stunde',
                        en: 'approx. 1 hour'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '15 Uhr',
                        en: "15 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '15:30 Uhr',
                        en: "15:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '50 EUR pro Person',
                        en: '50 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Yoga Matte, Tee & Wasser',
                        en: 'incl. yoga mat, tea & water'
                    }
                }
            ],
            gallery: ['assets/media/events/yoga_01.jpg', 'assets/media/events/yoga_02.jpg', 'assets/media/events/yoga_03.jpg'],
            previewImage: 'assets/media/events/yoga_01.jpg',
            title: {
                de: 'Yoga mit Karina Wagner',
                en: 'Yoga with Karina Wagner'
            },
            type: ['Wellbeing'],
            price: 50
        },
        {
            date: new Date(2025, 3, 10, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            details: [
                {
                    title: {
                        de: 'Yoga Entspannung',
                        en: 'Yoga relaxation'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-20',
                        en: '10-20'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 1 Stunde',
                        en: 'approx. 1 hour'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '15 Uhr',
                        en: "15 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '15:30 Uhr',
                        en: "15:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '50 EUR pro Person',
                        en: '50 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. Yoga Matte, Tee & Wasser',
                        en: 'incl. yoga mat, tea & water'
                    }
                }
            ],
            gallery: ['assets/media/events/yoga_01.jpg', 'assets/media/events/yoga_02.jpg', 'assets/media/events/yoga_03.jpg'],
            previewImage: 'assets/media/events/yoga_01.jpg',
            title: {
                de: 'Yoga mit Karina Wagner',
                en: 'Yoga with Karina Wagner'
            },
            type: ['Wellbeing'],
            price: 50
        },
        {
            date: new Date(2025, 10, 12, 19, 0),
            descriptionLong: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.'
            },
            descriptionShort: {
                de: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
                en: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.'
            },
            details: [
                {
                    title: {
                        de: '4-Gänge-Menü',
                        en: '4 course menu'
                    },
                    content: {
                        de: 'rund um das Thema Trüffel',
                        en: 'around the topic of truffles'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink, Wein & Wasser',
                        en: 'incl. welcome drink, wine & water'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '15-30',
                        en: '15-30'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 3,5 Stunden',
                        en: 'approx. 3,5 hours'
                    }
                },
                {
                    title: {
                        de: 'Einlass',
                        en: 'Entrance'
                    },
                    content: {
                        de: '19 Uhr',
                        en: "19 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: '19:30 Uhr',
                        en: "19:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '135 EUR pro Person',
                        en: '135 EUR per person'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer zu 100 EUR inkl. Frühstück (optional)',
                        en: 'Double room at 100 EUR incl. breakfast (optional)'
                    }
                }
            ],
            gallery: [
                'assets/media/events/truffel_soiree_01.jpg',
                'assets/media/events/truffel_soiree_02.jpg',
                'assets/media/events/truffel_soiree_03.jpg',
                'assets/media/events/truffel_soiree_04.jpg',
                'assets/media/events/truffel_soiree_05.jpg',
                'assets/media/events/truffel_soiree_06.jpg',
                'assets/media/events/truffel_soiree_07.jpg'
            ],
            previewImage: 'assets/media/events/truffel_soiree_01.jpg',
            subtitle: [
                {
                    de: '4-Gänge-Menü',
                    en: '4 course menu'
                }
            ],
            title: {
                de: 'Trüffel Soiree',
                en: 'Truffle Soiree'
            },
            type: ['Drink', 'Food'],
            price: 135
        }
    ];
}
