import { Event } from '../@types/events';

export function getEvents(): Event[] {
    return [
        {
            booking: [
                {
                    label: {
                        de: 'Anmeldung für Übernachtung',
                        en: 'Booking for Accomodation'
                    }
                },
                {
                    label: {
                        de: 'Anmeldung für Yoga',
                        en: 'Booking for Yoga'
                    },
                    link: 'mailto:tatjana@raise-yoga.com',
                    email: {
                        subject: {
                            de: 'Anmeldung für Yoga',
                            en: 'Booking for Yoga'
                        },
                        body: {
                            de: `Hallo,${'%0D%0A'}${'%0D%0A'}ich möchte mich für folgende Yogakurse für das Yoga Opening im Ebenrieder vom 08. bis 09.06.2024 anmelden.${'%0D%0A'}${'%0D%0A'}Name: (Bitte ausfüllen)${'%0D%0A'}Yogakurs: (Bitte Tag, Lehrer und Uhrzeit angeben)${'%0D%0A'}${'%0D%0A'}Viele Grüße!`,
                            en: `Hello,${'%0D%0A'}${'%0D%0A'}I would like to book the following yoga classes for the Yoga Opening at Ebenrieder from 8th to 9th of June 2024.${'%0D%0A'}${'%0D%0A'}Name: (Please complete)${'%0D%0A'}Yoga course: (Please specify day, teacher and time)${'%0D%0A'}${'%0D%0A'}Many greetings!`
                        }
                    }
                }
            ],
            date: {
                start: new Date(2024, 5, 8, 10, 0),
                end: new Date(2024, 5, 9, 18, 0)
            },
            descriptionLong: {
                de: 'Weg vom Alltag, hin zu Flow & Joy: sechs erfahrene Yoga-Lehrende begleiten dich ein Wochenende lang durch inspirierende Klassen. Wähle aus dem vielfältigen Angebot einen Kurs aus und gestalte deine ganz persönliche Yoga-Reise. Starte bereits frühmorgens beim Frühstück genussvoll in den Tag und erfahre beim Abendessen ein kulinarisches Highlight aus einer Vielzahl köstlicher Speisen und erfrischender Getränke aus unserem Garten und der Region. Am Samstagabend entführt dich das ELIAS PRINZ QUARTETT, eine herausragende Jazzband aus München, in eine ausgelassene Welt aus Gypsy Swing und Bebop-Ästhetik, die zu ausgelassenem Tanz einlädt – damit Körper, Geist und Seele wieder gestärkt der Welt trotzen können.',
                en: 'Away from everyday life, towards flow & joy: six experienced yoga teachers will guide you through a weekend of inspiring classes. Choose a course from a wide range offer and create your own personal yoga journey. Start your enjoyable day early in the morning with breakfast and experience a culinary highlight at dinner with a variety of delicious dishes and refreshing drinks from our garden and the region. On Saturday evening, the ELIAS PRINZ QUARTETT, an outstanding jazz band from Munich, will whisk you away into an exuberant world of gypsy swing and bebop aesthetics, inviting you to dance the night away - so that body, mind and soul can once again defy the world with renewed vigor.'
            },
            descriptionShort: {
                de: 'Erlebe ein Wochenende lang unterschiedliche Yoga Lehrende, Live Musik mit dem ELIAS PRINZ QUARTETT und leckeres Essen aus dem Garten und der Region.',
                en: 'Experience a weekend of different yoga teachers, live music with the Elias Prinz Qurartet and delicious food from the garden and the region.'
            },
            details: [
                {
                    title: {
                        de: 'Yoga Wochenende',
                        en: 'Yoga Weekend'
                    },
                    content: {
                        de: 'Sechs unterschiedliche Yoga-Lehrende: Annett Münzinger, Tatjana Sanftenberg, Otana Mirza, Lilli Bochenafa, David Bouchenafa, Sandra Dettweiler',
                        en: 'Six different yoga teachers: Annett Münzinger, Tatjana Sanftenberg, Otana Mirza, Lilli Bochenafa, David Bouchenafa, Sandra Dettweiler'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '10-14',
                        en: '10-14'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'ca. 60 bis 90 Minuten für jede Yoga Session',
                        en: 'approx. 60 to 90 minutes for each yoga session'
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'Yoga am Samstag & Sonntag zwischen 09:30 bis 18:00 Uhr',
                        en: "Yoga on Saturday & Sunday between 09:30 and 18:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '20 EUR pro Session',
                        en: '20 EUR per session'
                    }
                },
                {
                    content: {
                        de: 'inkl. Welcome Drink & süße und salzige Köstlichkeiten am Nachmittag',
                        en: 'incl. welcome drink & sweet and salty delicacies in the afternoon'
                    }
                },
                {
                    content: {
                        de: 'inkl. Abendessen & Jazzkonzert am 08.06.2024',
                        en: 'incl. dinner & jazz concert on 08.06.2024'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer zu ＊＊ EUR inkl. Frühstück (optional)',
                        en: 'Double room at ＊＊ EUR incl. breakfast (optional)'
                    }
                }
            ],
            email: {
                accomodation: true,
                date: true,
                foodIntolerance: false,
                name: true,
                title: true,
                quantity: true
            },
            gallery: ['assets/media/events/yoga_opening_01.jpg', 'assets/media/events/yoga_opening_02.jpg', 'assets/media/events/yoga_opening_03.jpg'],
            link: 'yoga_opening',
            previewImage: 'assets/media/events/yoga_opening_01.jpg',
            program: 'assets/media/events/yoga_opening.pdf',
            subtitle: [
                {
                    de: 'Unterschiedliche Yoga Lehrende',
                    en: 'Various Yoga Teachers'
                },
                {
                    de: 'Live Musik',
                    en: 'Live Music'
                },
                {
                    de: 'Feines Essen',
                    en: 'Fine Dining'
                }
            ],
            title: {
                de: 'Yoga Opening',
                en: 'Yoga Opening'
            },
            type: ['Accomodation', 'Food', 'Yoga'],
            price: 20
        },
        {
            date: {
                start: new Date(2024, 6, 5, 14, 0),
                end: new Date(2024, 6, 7, 14, 0)
            },
            descriptionLong: {
                de: `Manche Menschen finden Entspannung nicht auf Knopfdruck. Sondern durchs Tun: Mit den Händen arbeiten, Kopf abschalten und sich auf die Sinne konzentrieren. So kommen oft die besten Ideen. Unser Keramik & Yoga Retreat vereint Töpfern und Yoga und bietet beruhigende Erlebnisse. Der Kontakt mit Ton verbindet dich mit der Natur und dir selbst.\n\nWir freuen uns sehr, dass die wundervolle Münchner Keramikkünstlerin Lena Harms den Workshop leitet. Ursprünglich aus dem Bereich des Produktdesigns kommend, arbeitet sie seit nunmehr 7 Jahren mit Ton. Mithilfe der Aufbau- und Plattentechnik lernst du selbstständig Gefäße zu formen und bekommst die Methode der Einlegearbeit mit verschiedenen Tonfarben, dem sogenannten Nerikomi, gezeigt. Der Workshop ist für alle Level geeignet und zielt darauf ab, die eigene Einzigartigkeit und Kreativität zu feiern.\n\nAm Abend führt dich Susi durch eine ausgewogene Yogastunde. Kraftvolle und sanfte Übungen geben dir neue Kraft und erden dich zugleich.\n\nKreativität, Hand-Arbeit, Entschleunigung und Ruhe vereint: Ergänze deine Auszeit mit allem, was dir gut tut – wir bieten den Raum dafür. Zwischen dem Keramik Workshop und den Yogastunden kannst du dich in die Sauna mit Außenpool zurückziehen, am Kamin lesen oder ein kleines Nickerchen in deinem Zimmer, der Terrasse oder deinem Lieblingsort im Ebenrieder machen.\nKulinarisch verwöhnen wir dich ebenfalls den ganzen Tag über: Von Frühstück über Mittagessen, Kaffee und Kuchen bis hin zum Abendessen kannst du dich auf köstliche Überraschungen aus unserem Garten und der Region freuen. Bitte gebe etwaige Unverträglichkeiten bei deiner Buchung gleich mit an, damit wir diese beim Vorbereiten berücksichtigen können.`,
                en: `Some people don\'t find relaxation at the touch of a button. But by doing: working with your hands, switching off your head and concentrating on your senses. This is often how the best ideas come around. Our ceramics & yoga retreat combines pottery and yoga and offers calming experiences. Contact with clay connects you with nature and yourself.\n\nWe are delighted that the wonderful Munich ceramic artist Lena Harms will be leading the workshop. Originally from the field of product design, she has been working with clay for 7 years now. With the help of the body and slab technique, you will learn to shape vessels independently and be shown the method of inlay work with different clay colors, the so-called Nerikomi. The workshop is suitable for all levels and aims to celebrate your own uniqueness and creativity.\n\nIn the evening, Susi will guide you through a balanced yoga class. Powerful and gentle exercises will give you new strength and ground you at the same time.\n\nCreativity, handwork, slowing down and tranquillity combined: complement your time out with everything that does you good - we offer the space for this. Between the ceramics workshop and the yoga classes, you can retreat to the sauna with outdoor pool, read by the fireplace or take a little nap in your room, on the terrace or in your favorite place at Ebenrieder.\n\nWe also spoil you with culinary delights throughout the day: From breakfast to lunch, coffee and cake to dinner, you can look forward to delicious surprises from our garden and the region. Please let us know if you have any food intolerances when you book so that we can take these into account when preparing your meal.`
            },
            descriptionShort: {
                de: 'In diesem besonderen Retreat verschmelzen die beruhigenden Welten von Töpfern und Yoga auf magische Weise miteinander. Der Workshop mit der Keramikkünstlerin Lena Harms widmet sich insbesondere der japanischen Nerikomi-Technik, bei der es sich um eine Aufbau- und Einlegetechnik handelt, und auch für Anfänger:innen geeignet ist.',
                en: 'In this special retreat, the calming worlds of pottery and yoga merge together in a magical way. The workshop with ceramic artist Lena Harms focuses in particular on the Japanese Nerikomi technique, which is a build-up and inlay technique and is also suitable for beginners.'
            },
            details: [
                {
                    title: {
                        de: 'Keramik & Yoga Wochenende',
                        en: 'Ceramics & Yoga weekend'
                    },
                    content: {
                        de: 'Arbeiten mit Ton im Ebenrieder',
                        en: 'Working with clay at Ebenrieder'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '8-12',
                        en: '8-12'
                    }
                },
                {
                    title: {
                        de: 'Dauer',
                        en: 'Duration'
                    },
                    content: {
                        de: 'vier Keramik Einheiten mit insgesamt 12 Stunden',
                        en: 'four ceramic units totalling 12 hours'
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 05.07.2024 um 14:00 Uhr',
                        en: "on 05.07.2024 at 14:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '730 EUR pro Person',
                        en: '730 EUR per person'
                    }
                },
                {
                    content: {
                        de: 'inkl. zwei Übernachtungen und leckere Verpflegung',
                        en: 'incl. two overnight stays and delicious catering'
                    }
                },
                {
                    content: {
                        de: 'inkl. vier Keramik Einheiten mit insgesamt 12 Stunden nach Anleitung',
                        en: 'incl. four ceramic units totalling 12 hours with instructions'
                    }
                },
                {
                    content: {
                        de: 'inkl. eine Stunde Yoga',
                        en: 'incl. one hour Yoga'
                    }
                },
                {
                    content: {
                        de: 'inkl. Sauna mit Außenpool',
                        en: 'incl. Sauna with outdoor pool'
                    }
                }
            ],
            email: {
                accomodation: false,
                date: true,
                foodIntolerance: true,
                name: true,
                title: true,
                quantity: true
            },
            gallery: [
                'assets/media/events/arbeiten_mit_ton_01.jpg',
                'assets/media/events/arbeiten_mit_ton_02.jpg',
                'assets/media/events/arbeiten_mit_ton_03.jpg',
                'assets/media/events/arbeiten_mit_ton_04.jpg',
                'assets/media/events/arbeiten_mit_ton_05.jpg',
                'assets/media/events/arbeiten_mit_ton_06.jpg'
            ],
            link: 'arbeiten_mit_ton',
            previewImage: 'assets/media/events/arbeiten_mit_ton_01.jpg',
            program: 'assets/media/events/arbeiten_mit_ton.pdf',
            subtitle: [
                {
                    de: 'Keramik mit Lena Harms',
                    en: 'Ceramics with Lena Harms'
                },
                {
                    de: 'Yoga mit Susi Dopfer',
                    en: 'Yoga with Susi Dopfer'
                }
            ],
            title: {
                de: 'Arbeiten mit Ton',
                en: 'Working with clay'
            },
            type: ['Food', 'Workshop', 'Yoga'],
            price: 730
        }
    ];
}
