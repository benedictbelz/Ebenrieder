import { Event } from '../@types/events';

export function getEvents(): Event[] {
    const events: Event[] = [
        {
            type: 'Retreat',
            title: {
                de: 'Yoga Opening',
                en: 'Yoga Opening'
            },
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
            date: {
                start: new Date(2024, 5, 8),
                end: new Date(2024, 5, 9)
            },
            price: 20,
            status: 'Available',
            link: 'yoga_opening',
            imagePreview: 'assets/media/events/yoga_opening_01.jpg',
            imageGallery: ['assets/media/events/yoga_opening_01.jpg', 'assets/media/events/yoga_opening_02.jpg', 'assets/media/events/yoga_opening_03.jpg'],
            descriptionLong: {
                de: 'Weg vom Alltag, hin zu Flow & Joy: sechs erfahrene Yoga-Lehrende begleiten dich ein Wochenende lang durch inspirierende Klassen. Wähle aus dem vielfältigen Angebot einen Kurs aus und gestalte deine ganz persönliche Yoga-Reise. Starte bereits frühmorgens beim Frühstück genussvoll in den Tag und erfahre beim Abendessen ein kulinarisches Highlight aus einer Vielzahl köstlicher Speisen und erfrischender Getränke aus unserem Garten und der Region. Am Samstagabend entführt dich das ELIAS PRINZ QUARTETT, eine herausragende Jazzband aus München, in eine ausgelassene Welt aus Gypsy Swing und Bebop-Ästhetik, die zu ausgelassenem Tanz einlädt – damit Körper, Geist und Seele wieder gestärkt der Welt trotzen können.',
                en: 'Away from everyday life, towards flow & joy: six experienced yoga teachers will guide you through a weekend of inspiring classes. Choose a course from a wide range offer and create your own personal yoga journey. Start your enjoyable day early in the morning with breakfast and experience a culinary highlight at dinner with a variety of delicious dishes and refreshing drinks from our garden and the region. On Saturday evening, the ELIAS PRINZ QUARTETT, an outstanding jazz band from Munich, will whisk you away into an exuberant world of gypsy swing and bebop aesthetics, inviting you to dance the night away - so that body, mind and soul can once again defy the world with renewed vigor.'
            },
            descriptionShort: {
                de: 'Erlebe ein Wochenende lang unterschiedliche Yoga Lehrende, Live Musik mit dem ELIAS PRINZ QUARTETT und leckeres Essen aus dem Garten und der Region.',
                en: 'Experience a weekend of different yoga teachers, live music with the Elias Prinz Qurartet and delicious food from the garden and the region.'
            },
            descriptionDetails: [
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
                        de: '20 EUR pro Session ',
                        en: '20 EUR per session'
                    }
                },
                {
                    title: {
                        de: 'Jazzkonzert',
                        en: 'Jazzkonzert'
                    },
                    content: {
                        de: 'am 08.06.2024 (Eintritt frei)',
                        en: 'on 08.06.2024 (free admission)'
                    }
                },
                {
                    title: {
                        de: 'BBQ',
                        en: 'BBQ'
                    },
                    content: {
                        de: 'am 08.06.2024, 5 bis 15 EUR pro Gericht (optional)',
                        en: 'on 08.06.2024, 5 to 15 EUR per dish (optional)'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accommodation'
                    },
                    content: {
                        de: 'Doppelzimmer 220 EUR inkl. Verpflegung (optional)',
                        en: 'Double room at 220 EUR incl. catering (optional)'
                    }
                }
            ],
            attachements: [
                {
                    label: {
                        de: 'Das Programm für diese Veranstaltung findest du <%a%>hier<%/a%>.',
                        en: 'You can find the program for this event <%a%>here<%/a%>.'
                    },
                    link: 'assets/media/events/yoga_opening.pdf'
                }
            ],
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
            ]
        },
        {
            type: 'Pottery',
            title: {
                de: 'Arbeiten mit Ton',
                en: 'Working with clay'
            },
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
            date: {
                start: new Date(2024, 6, 5),
                end: new Date(2024, 6, 7)
            },
            price: 930,
            status: 'Available',
            link: 'arbeiten_mit_ton',
            imagePreview: 'assets/media/events/arbeiten_mit_ton_07.jpg',
            imageGallery: [
                'assets/media/events/arbeiten_mit_ton_01.jpg',
                'assets/media/events/arbeiten_mit_ton_02.jpg',
                'assets/media/events/arbeiten_mit_ton_03.jpg',
                'assets/media/events/arbeiten_mit_ton_04.jpg',
                'assets/media/events/arbeiten_mit_ton_05.jpg',
                'assets/media/events/arbeiten_mit_ton_06.jpg'
            ],
            descriptionLong: {
                de: `Manche Menschen finden Entspannung nicht auf Knopfdruck. Sondern durchs Tun: Mit den Händen arbeiten, Kopf abschalten und sich auf die Sinne konzentrieren. So kommen oft die besten Ideen. Unser Keramik & Yoga Retreat vereint Töpfern und Yoga und bietet beruhigende Erlebnisse. Der Kontakt mit Ton verbindet dich mit der Natur und dir selbst.\n\nWir freuen uns sehr, dass die wundervolle Münchner Keramikkünstlerin Lena Harms den Workshop leitet. Ursprünglich aus dem Bereich des Produktdesigns kommend, arbeitet sie seit nunmehr 7 Jahren mit Ton. Mithilfe der Aufbau- und Plattentechnik lernst du selbstständig Gefäße zu formen und bekommst die Methode der Einlegearbeit mit verschiedenen Tonfarben, dem sogenannten Nerikomi, gezeigt. Der Workshop ist für alle Level geeignet und zielt darauf ab, die eigene Einzigartigkeit und Kreativität zu feiern.\n\nAm Abend führt dich Susi durch eine ausgewogene Yogastunde. Kraftvolle und sanfte Übungen geben dir neue Kraft und erden dich zugleich.\n\nKreativität, Hand-Arbeit, Entschleunigung und Ruhe vereint: Ergänze deine Auszeit mit allem, was dir gut tut – wir bieten den Raum dafür. Zwischen dem Keramik Workshop und den Yogastunden kannst du dich in die Sauna mit Außenpool zurückziehen, am Kamin lesen oder ein kleines Nickerchen in deinem Zimmer, der Terrasse oder deinem Lieblingsort im Ebenrieder machen.\nKulinarisch verwöhnen wir dich ebenfalls den ganzen Tag über: Von Frühstück über Mittagessen, Kaffee und Kuchen bis hin zum Abendessen kannst du dich auf köstliche Überraschungen aus unserem Garten und der Region freuen. Bitte gebe etwaige Unverträglichkeiten bei deiner Buchung gleich mit an, damit wir diese beim Vorbereiten berücksichtigen können.`,
                en: `Some people don\'t find relaxation at the touch of a button. But by doing: working with your hands, switching off your head and concentrating on your senses. This is often how the best ideas come around. Our ceramics & yoga retreat combines pottery and yoga and offers calming experiences. Contact with clay connects you with nature and yourself.\n\nWe are delighted that the wonderful Munich ceramic artist Lena Harms will be leading the workshop. Originally from the field of product design, she has been working with clay for 7 years now. With the help of the body and slab technique, you will learn to shape vessels independently and be shown the method of inlay work with different clay colors, the so-called Nerikomi. The workshop is suitable for all levels and aims to celebrate your own uniqueness and creativity.\n\nIn the evening, Susi will guide you through a balanced yoga class. Powerful and gentle exercises will give you new strength and ground you at the same time.\n\nCreativity, handwork, slowing down and tranquillity combined: complement your time out with everything that does you good - we offer the space for this. Between the ceramics workshop and the yoga classes, you can retreat to the sauna with outdoor pool, read by the fireplace or take a little nap in your room, on the terrace or in your favorite place at Ebenrieder.\n\nWe also spoil you with culinary delights throughout the day: From breakfast to lunch, coffee and cake to dinner, you can look forward to delicious surprises from our garden and the region. Please let us know if you have any food intolerances when you book so that we can take these into account when preparing your meal.`
            },
            descriptionShort: {
                de: 'In diesem besonderen Retreat verschmelzen die beruhigenden Welten von Töpfern und Yoga auf magische Weise miteinander. Der Workshop mit der Keramikkünstlerin Lena Harms widmet sich insbesondere der japanischen Nerikomi-Technik, bei der es sich um eine Aufbau- und Einlegetechnik handelt, und auch für Anfänger:innen geeignet ist.',
                en: 'In this special retreat, the calming worlds of pottery and yoga merge together in a magical way. The workshop with ceramic artist Lena Harms focuses in particular on the Japanese Nerikomi technique, which is a build-up and inlay technique and is also suitable for beginners.'
            },
            descriptionDetails: [
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
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 07.07.2024 um 14:00 Uhr',
                        en: "on 07.07.2024 at 14:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '930 EUR pro Person',
                        en: '930 EUR per person'
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
            attachements: [
                {
                    label: {
                        de: 'Das Programm für diese Veranstaltung findest du <%a%>hier<%/a%>.',
                        en: 'You can find the program for this event <%a%>here<%/a%>.'
                    },
                    link: 'assets/media/events/arbeiten_mit_ton.pdf'
                }
            ],
            booking: [
                {
                    email: {
                        event: true,
                        date: 'Standard',
                        name: true,
                        quantityPeople: true,
                        foodIntolerance: true
                    }
                }
            ]
        },
        {
            type: 'Retreat',
            title: {
                de: 'Zeit des Loslassens',
                en: 'A Time of Letting Go'
            },
            subtitle: [
                {
                    de: 'Yoga- und Atemworkshop mit Lilli und David Bouchenafa',
                    en: 'Yoga and breathing workshop with Lilli and David Bouchenafa'
                },
                {
                    de: 'Einzelzimmer <%singleRoom%> EUR',
                    en: 'Single room <%singleRoom%> EUR'
                },
                {
                    de: 'Doppelzimmer <%doubleRoom%> EUR',
                    en: 'Double room <%doubleRoom%> EUR'
                }
            ],
            date: {
                start: new Date(2024, 9, 11),
                end: new Date(2024, 9, 13)
            },
            price: {
                singleRoom: 750,
                doubleRoom: 650
            },
            status: 'Available',
            link: 'zeit_des_loslassens',
            imagePreview: 'assets/media/events/zeit_des_loslassens_07.jpg',
            imageGallery: [
                'assets/media/events/zeit_des_loslassens_03.jpg',
                'assets/media/events/zeit_des_loslassens_06.jpg',
                'assets/media/events/zeit_des_loslassens_07.jpg',
                'assets/media/events/zeit_des_loslassens_01.jpg',
                'assets/media/events/zeit_des_loslassens_04.jpg',
                'assets/media/events/zeit_des_loslassens_05.jpg',
                'assets/media/events/zeit_des_loslassens_02.jpg',
                'assets/media/events/zeit_des_loslassens_09.jpg',
                'assets/media/events/zeit_des_loslassens_08.jpg',
                'assets/media/events/zeit_des_loslassens_10.jpg',
                'assets/media/events/zeit_des_loslassens_11.jpg'
            ],
            descriptionLong: {
                de: `Finde im Einklang mit der Natur zu dich selbst zurück, bei unserem Ayurveda und Yoga Retreat im goldenen Herbst. Wohl keine andere Jahreszeit eignet sich besser, um alten Ballast und ungewollte Gewohnheiten los zu lassen. Spielerisch erforschen wir unser Unterbewusstsein und laden dich ein in sanften und tiefen Yogaeinheiten Körper und Geist von allem Überflüssigen zu befreien. In den intensiven Atemeinheiten, die tiefgreifend transformieren, stimmen wir unsere Zellen auf neue Überzeugungen ein, beleben den Geist und öffnen den Raum für neues Selbstvertrauen. Sorgfältig zubereitete ayurvedische Speisen nähren und unterstützen deinen Körper im liebevollen Prozess der Akzeptanz und Selbstliebe. Erlebe die Kunst des Loslassens in einer Umgebung, die zur inneren Ruhe und Erneuerung einlädt.\n\nDurch das Seminar begleiten euch: Lilli Bouchenafa (Yoga und Meditationslehrerin) & David Bouchenafa (Ayurveda Therapeut, Yogalehrer, Ernährungsberater und Koch).`,
                en: `Find your way back to yourself in harmony with nature at our Ayurveda and yoga retreat in the golden fall. There is probably no other time of year better suited to letting go of old baggage and unwanted habits. We playfully explore our subconscious and invite you to free your body and mind from all superfluous things in gentle and deep yoga sessions. In the intensive breathing sessions, which are profoundly transformative, we attune our cells to new beliefs, revitalize the mind and open the space for new self-confidence. Carefully prepared Ayurvedic food nourishes and supports your body in the loving process of acceptance and self-love. Experience the art of letting go in an environment that invites inner peace and renewal.\n\nLilli Bouchenafa (yoga and meditation teacher) & David Bouchenafa (Ayurveda therapist, yoga teacher, nutritionist and chef) will guide you through the seminar.`
            },
            descriptionShort: {
                de: 'Im goldenen Herbst laden wir dich ein, bei unserem Ayurveda und Yoga Retreat im Einklang mit der Natur zu dir selbst zurückzufinden. Diese Jahreszeit bietet die ideale Kulisse, um alten Ballast loszulassen und ungewollte Gewohnheiten zu überwinden. Tauche ein in die Kunst des Loslassen in einer Umgebung, die zur inneren Ruhe und Erneuerung einlädt.',
                en: 'In the golden autumn, we invite you to rediscover yourself in harmony with nature at our Ayurveda and yoga retreat. This time of year offers the ideal backdrop for letting go of old baggage and overcoming unwanted habits. Immerse yourself in the art of letting go in an environment that invites inner peace and renewal.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Yoga- & Atemretreat',
                        en: 'Yoga & breathing retreat'
                    },
                    content: {
                        de: 'Transformatorische Übungen mit Lilli & David',
                        en: 'Transformative exercises with Lilli & David'
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
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 11.10.2024 um 14:00 Uhr',
                        en: "on 11.10.2024 at 14:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 13.10.2024 um 16:00 Uhr',
                        en: "on 13.10.2024 at 16:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%singleRoom%> EUR im Einzelzimmer, <%doubleRoom%> EUR im Doppelzimmer',
                        en: '<%singleRoom%> EUR in a single room, <%doubleRoom%> EUR in a double room'
                    }
                },
                {
                    content: {
                        de: 'inkl. zwei Übernachtungen mit ayurvedischer Verpflegung',
                        en: 'incl. two overnight stays and ayurvedic catering'
                    }
                },
                {
                    content: {
                        de: 'inkl. sanfte und tiefe Yoga- und Atemeinheiten',
                        en: 'incl. gentle and deep yoga and breathing sessions'
                    }
                },
                {
                    content: {
                        de: 'inkl. Meditationsübungen',
                        en: 'incl. Meditation exercises'
                    }
                },
                {
                    content: {
                        de: 'inkl. Sauna mit Außenpool und Hot Tub',
                        en: 'incl. Sauna with outdoor pool and hot tub'
                    }
                }
            ],
            booking: [
                {
                    email: {
                        event: true,
                        date: 'Standard',
                        name: true,
                        quantityPeople: true,
                        room: 'Standard',
                        foodIntolerance: true
                    }
                }
            ]
        },
        {
            type: 'Retreat',
            title: {
                de: 'Slow down & warm your soul',
                en: 'Slow down & warm your soul'
            },
            subtitle: [
                {
                    de: 'Yoga Retreat im Herbst mit Anja Zeifang',
                    en: 'Yoga retreat in autumn with Anja Zeifang'
                },
                {
                    de: 'Einzelzimmer <%singleRoom%> EUR',
                    en: 'Single room <%singleRoom%> EUR'
                },
                {
                    de: 'Doppelzimmer <%doubleRoom%> EUR',
                    en: 'Double room <%doubleRoom%> EUR'
                }
            ],
            date: {
                start: new Date(2024, 9, 31),
                end: new Date(2024, 10, 3)
            },
            price: {
                singleRoom: 1070,
                doubleRoom: 830
            },
            status: 'Cancelled',
            link: 'slow_down_and_warm_your_soul',
            imagePreview: 'assets/media/events/slow_down_15.jpg',
            imageGallery: [
                'assets/media/events/slow_down_18.jpg',
                'assets/media/events/slow_down_01.jpg',
                'assets/media/events/slow_down_02.jpg',
                'assets/media/events/slow_down_03.jpg',
                'assets/media/events/slow_down_04.jpg',
                'assets/media/events/slow_down_06.jpg',
                'assets/media/events/slow_down_07.jpg',
                'assets/media/events/slow_down_08.jpg',
                'assets/media/events/slow_down_09.jpg',
                'assets/media/events/slow_down_10.jpg',
                'assets/media/events/slow_down_11.jpg',
                'assets/media/events/slow_down_12.jpg',
                'assets/media/events/slow_down_13.jpg',
                'assets/media/events/slow_down_14.jpg',
                'assets/media/events/slow_down_15.jpg',
                'assets/media/events/slow_down_16.jpg',
                'assets/media/events/slow_down_17.jpg',
                'assets/media/events/slow_down_05.jpg',
                'assets/media/events/slow_down_19.jpg',
                'assets/media/events/slow_down_20.jpg'
            ],
            descriptionLong: {
                de: `Ein Retreat bedeutet Rückzug in Ruhe und Stille. Mit Yoga, Meditation und Pranayama, sowie kulinarischen Köstlichkeiten aus der Umgebung und gemeinschaftlichem Austausch findest du hier innere Einkehr. Deine Seele darf baumeln, während du neue Kraft schöpfst und Energie fließen lässt. In diesem Retreat dreht sich alles nur um dich. Triff eine Vereinbarung mit dir selbst und nimm Herausforderungen an, um persönliche Fortschritte zu erzielen. Lerne, deine Yogapraxis achtsam an deine Bedürfnisse anzupassen, und übe Asanas im Einklang mit deinem Atem und anatomischer Präzision. So findest du die Balance zwischen Flexibilität und Stärke. Lass dich von der einzigartigen Atmosphäre des Retreat-Ortes Ebenrieder einfangen, einem wahren Kraftplatz, und entdecke dein wahres Ich.\n\nDurch das Seminar begleitet euch: Anja Zeifang (Heilpraktikerin mit Schwerpunkt Schmerztherapie, Körpertherapeutin & Yoga-Lehrerin).`,
                en: `A retreat means withdrawal into peace and quiet. With yoga, meditation, and pranayama, along with culinary delights from the region and communal exchange, you will find inner reflection. Let your soul unwind as you gain new strength and let the energy flow. This retreat is all about you. Make a commitment to yourself and embrace challenges to achieve personal progress. Learn to mindfully adapt your yoga practice to your needs, and practice Asanas in harmony with your breath and anatomical precision. This way, you find the balance between flexibility and strength. Be captivated by the unique atmosphere of the Ebenrieder retreat location, a true power spot, and discover your true self.\n\nThe seminar is led by Anja Zeifang (Naturopath specializing in pain therapy, body therapist, and yoga teacher).`
            },
            descriptionShort: {
                de: 'Innerlich zur Ruhe zu kommen, die Seele baumeln lassen und neue Energie schöpfen mit Yoga, Meditation und kulinarische Köstlichkeiten, begleitet von Anja Zeifang.',
                en: 'Finding inner peace, letting your soul unwind, and recharging with yoga, meditation, and culinary delights, all guided by Anja Zeifang.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Yoga Retrea',
                        en: 'Yoga retreat'
                    },
                    content: {
                        de: 'im Herbst mit Anja Zeifang',
                        en: 'in autumn with Anja Zeifang'
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
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 31.10.2024 um 15:00 Uhr',
                        en: "on 31.10.2024 at 15:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 03.11.2024 um 12:00 Uhr',
                        en: "on 03.11.2024 at 12:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%singleRoom%> EUR im Einzelzimmer, <%doubleRoom%> EUR im Doppelzimmer',
                        en: '<%singleRoom%> EUR in a single room, <%doubleRoom%> EUR in a double room'
                    }
                },
                {
                    title: {
                        de: 'Massagen',
                        en: 'Massages'
                    },
                    content: {
                        de: 'können auf Wunsch gerne vorab gebucht werden für 85 Euro pro 60 Minuten',
                        en: 'can be booked in advance on request for 85 euros per 60 minutes'
                    }
                },
                {
                    content: {
                        de: 'inkl. drei Übernachtungen',
                        en: 'incl. three overnight stays'
                    }
                },
                {
                    content: {
                        de: 'inkl. vegetarische Verpflegung in Bio-Qualität mit Brunch, Nachmittagssnack (süß & salzig), Abendessen',
                        en: 'incl. vegetarian catering in organic quality with brunch, afternoon snack (sweet & savoury), dinner'
                    }
                },
                {
                    content: {
                        de: 'inkl. Obst, Nüsse, Wasser und Tee vor und nach den Yogastunden',
                        en: 'incl. fruit, nuts, water and tea before and after the yoga classes'
                    }
                },
                {
                    content: {
                        de: 'inkl. 9 Stunden Yogaeinheiten',
                        en: 'incl. 9 hours of yoga sessions'
                    }
                },
                {
                    content: {
                        de: 'inkl. Sauna mit Außenpool und Hot Tub',
                        en: 'incl. Sauna with outdoor pool and hot tub'
                    }
                },
                {
                    content: {
                        de: 'exkl. alkoholische Getränke',
                        en: 'excl. alcoholic beverages'
                    }
                }
            ],
            descriptionProgram: [
                {
                    day: {
                        de: 'Do',
                        en: 'Thursday'
                    },
                    activities: [
                        {
                            time: '15:00',
                            description: {
                                de: 'Anreise',
                                en: 'Arrival'
                            }
                        },
                        {
                            time: '17:00 - 18:30',
                            description: {
                                de: 'Yoga',
                                en: 'Yoga'
                            }
                        },
                        {
                            time: '19:30',
                            description: {
                                de: 'Abendessen',
                                en: 'Dinner'
                            }
                        }
                    ]
                },
                {
                    day: {
                        de: 'Fr',
                        en: 'Friday'
                    },
                    activities: [
                        {
                            time: '08:00 - 09:30',
                            description: {
                                de: 'Yoga',
                                en: 'Yoga'
                            }
                        },
                        {
                            time: '10:00',
                            description: {
                                de: 'Brunch',
                                en: 'Brunch'
                            }
                        },
                        {
                            time: '11:00',
                            description: {
                                de: 'Me-Time, Massage',
                                en: 'Me-Time, Massage'
                            }
                        },
                        {
                            time: '17:00 - 18:30',
                            description: {
                                de: 'Yoga',
                                en: 'Yoga'
                            }
                        },
                        {
                            time: '19:30',
                            description: {
                                de: 'Abendessen',
                                en: 'Dinner'
                            }
                        }
                    ]
                },
                {
                    day: {
                        de: 'Sa',
                        en: 'Saturday'
                    },
                    activities: [
                        {
                            time: '08:00 - 09:30',
                            description: {
                                de: 'Yoga',
                                en: 'Yoga'
                            }
                        },
                        {
                            time: '10:00',
                            description: {
                                de: 'Brunch',
                                en: 'Brunch'
                            }
                        },
                        {
                            time: '11:00',
                            description: {
                                de: 'Me-Time, Massage',
                                en: 'Me-Time, Massage'
                            }
                        },
                        {
                            time: '17:00 - 18:30',
                            description: {
                                de: 'Yoga',
                                en: 'Yoga'
                            }
                        },
                        {
                            time: '19:30',
                            description: {
                                de: 'Abendessen',
                                en: 'Dinner'
                            }
                        }
                    ]
                },
                {
                    day: {
                        de: 'So',
                        en: 'Sunday'
                    },
                    activities: [
                        {
                            time: '08:00 - 09:30',
                            description: {
                                de: 'Yoga',
                                en: 'Yoga'
                            }
                        },
                        {
                            time: '10:00',
                            description: {
                                de: 'Brunch',
                                en: 'Brunch'
                            }
                        },
                        {
                            time: '11:00',
                            description: {
                                de: 'Checkout',
                                en: 'Checkout'
                            }
                        }
                    ]
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Buchen',
                        en: 'Book'
                    },
                    link: 'https://www.anja-zeifang.de/events/'
                }
            ]
        },
        {
            type: 'Retreat',
            title: {
                de: 'Re-Start',
                en: 'Re-Start'
            },
            subtitle: [
                {
                    de: 'Yoga Retreat',
                    en: 'Yoga retreat'
                },
                {
                    de: 'Alles auf Anfang, bitte!',
                    en: 'All back to square one, please!'
                },
                {
                    de: 'Einzelzimmer <%singleRoom%> EUR',
                    en: 'Single room <%singleRoom%> EUR'
                },
                {
                    de: 'Doppelzimmer <%doubleRoom%> EUR',
                    en: 'Double room <%doubleRoom%> EUR'
                }
            ],
            date: {
                start: new Date(2025, 0, 17),
                end: new Date(2025, 0, 19)
            },
            price: {
                singleRoom: 730,
                doubleRoom: 630
            },
            status: 'Cancelled',
            link: 'restart',
            imagePreview: 'assets/media/events/restart_03.jpg',
            imageGallery: [
                'assets/media/events/restart_01.jpg',
                'assets/media/events/restart_02.jpg',
                'assets/media/events/restart_03.jpg',
                'assets/media/events/restart_04.jpg',
                'assets/media/events/restart_05.jpg',
                'assets/media/events/restart_06.jpg',
                'assets/media/events/restart_07.jpg',
                'assets/media/events/restart_08.jpg',
                'assets/media/events/restart_09.jpg'
            ],
            descriptionLong: {
                de: `Nutze die Zeit des Jahresstarts um Leichtigkeit und Kraft für Körper und Geist zu sammeln. Mit Breathwork, Yoga-Asanas, Meditation und viel Gelassenheit ins Jahr 2025 starten!\n\nRien ne va plus - neues Jahr - neues Glück! Bitte machen Sie ihre Einsätze!\n\nEin neues Jahr bedeutet so viel wie: Re-Start - alles wieder auf Anfang - entscheide dich wie du dein Jahr gestalten willst und wer du in diesem Jahr sein willst. Das Leben wie ein Spiel sehen, mit Niederlagen und Siegen, Herausforderungen und Routinen! Und es auf keinen Fall zu ernst nehmen. Das gelingt mal besser und mal gar nicht... mit Yoga geht's ganz gut :)\n\nTatjana Sanftenberg ist eine zertifizierte Yoga Lehrerin in Vinyasa/Restorative Yoga, Yoga-Therapie und Atemtechnik (Pranayama). Yoga, mal im Flow... fast tänzerisch mit treibenden Beats... dann mit Bedacht auf Alignment und Verbindung zu Deinem Körper. Fundiert und leidenschaftlich Yoga praktizieren. Dabei sind Ausrichtung, Atem und Gefühl im Fokus.\n\nUm's Lukullische kümmert sich David Bouchenafa... er kocht vegetarisch, mediterran, orientalisch, auf ayurvedische Art zubereitet. in Richtung Ottolenghi, nur noch besser!`,
                en: `Use the start of the year to gather lightness and strength for body and mind. Begin 2025 with breathwork, yoga asanas, meditation, and lots of serenity!\n\nRien ne va plus - new year - new luck! Place your bets!\n\nA new year means: RE-START - everything from the beginning - decide how you want to shape your year and who you want to be this year. See life as a game with defeats and victories, challenges and routines! And don't take it too seriously. Sometimes it works better, sometimes not at all... with yoga, it goes quite well :)\n\nTatjana Sanftenberg is a certified yoga teacher in Vinyasa/Restorative Yoga, yoga therapy, and breathwork (Pranayama). Yoga, sometimes in flow... almost dance-like with driving beats... then with a focus on alignment and connection to your body. Practice yoga knowledgeably and passionately, with a focus on alignment, breath, and feeling.\n\nDavid Bouchenafa takes care of the culinary aspect... he cooks vegetarian, Mediterranean, oriental, prepared in an Ayurvedic way. In the style of Ottolenghi, but even better!`
            },
            descriptionShort: {
                de: 'Beginne das neue Jahr mit Leichtigkeit und Kraft für Körper und Geist durch Atemarbeit, Yoga-Asanas und Meditation, angeleitet von Tatjana Sanftenberg und ergänzt durch David Bouchenafas exzellente vegetarische Küche.',
                en: "Start the new year with lightness and strength for body and mind through breathwork, yoga asanas, and meditation, guided by Tatjana Sanftenberg and complemented by David Bouchenafa's exquisite vegetarian cuisine."
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Yoga, Atem & Meditation',
                        en: 'Yoga, breath & meditation'
                    },
                    content: {
                        de: 'Flow, Beats & Alignment',
                        en: 'Flow, beats & alignment'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '8-14',
                        en: '8-14'
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 17.01.2025 ab 14:00 Uhr',
                        en: "on 17.01.2025 from 14:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 19.01.2025 bis Brunch',
                        en: 'on 19.01.2025 until brunch'
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%singleRoom%> EUR im Einzelzimmer, <%doubleRoom%> EUR im Doppelzimmer',
                        en: '<%singleRoom%> EUR in a single room, <%doubleRoom%> EUR in a double room'
                    }
                },
                {
                    content: {
                        de: 'inkl. zwei Nächte mit ayervedischer Verpflegung',
                        en: 'incl. two nights with Ayervedic catering'
                    }
                },
                {
                    content: {
                        de: 'inkl. Yoga, Atem & Meditation (ca. 8h)',
                        en: 'incl. yoga, breathing & meditation (approx. 8h)'
                    }
                },
                {
                    content: {
                        de: 'inkl. Sauna mit Außenpool und Hot Tub',
                        en: 'incl. Sauna with outdoor pool and hot tub'
                    }
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    link: 'https://www.raise-yoga.com/retreats-workshops-1/'
                }
            ]
        },
        {
            type: 'Food',
            title: {
                de: 'Pilzgenuss - Von der Natur auf den Teller',
                en: 'Mushroom delight - from nature to the plate'
            },
            subtitle: [
                {
                    de: 'Mit Peter Karasch und Victoria Lorenz',
                    en: 'With Peter Karasch and Victoria Lorenz'
                },
                {
                    de: 'Einzelzimmer <%singleRoom%> EUR',
                    en: 'Single room <%singleRoom%> EUR'
                },
                {
                    de: 'Doppelzimmer <%doubleRoom%> EUR',
                    en: 'Double room <%doubleRoom%> EUR'
                }
            ],
            date: {
                start: new Date(2025, 8, 26),
                end: new Date(2025, 8, 28)
            },
            price: {
                singleRoom: 760,
                doubleRoom: 710
            },
            status: 'Available',
            link: 'pilzgenuss',
            imagePreview: 'assets/media/events/pilzgenuss_09.jpg',
            imageGallery: [
                'assets/media/events/pilzgenuss_01.jpg',
                'assets/media/events/pilzgenuss_02.jpg',
                'assets/media/events/pilzgenuss_03.jpg',
                'assets/media/events/pilzgenuss_04.jpg',
                'assets/media/events/pilzgenuss_05.jpg',
                'assets/media/events/pilzgenuss_06.jpg',
                'assets/media/events/pilzgenuss_07.jpg',
                'assets/media/events/pilzgenuss_08.jpg',
                'assets/media/events/pilzgenuss_09.jpg',
                'assets/media/events/pilzgenuss_10.jpg',
                'assets/media/events/pilzgenuss_11.jpg',
                'assets/media/events/pilzgenuss_14.jpg',
                'assets/media/events/pilzgenuss_12.jpg',
                'assets/media/events/pilzgenuss_13.jpg'
            ],
            descriptionLong: {
                de: `Entdeckt die faszinierende Welt der Waldpilze und taucht ein in die Vielfalt und den Zauber des Waldes. Inmitten idyllischer Natur erwartet euch ein Erlebnis voller Entdeckungen und Gaumenfreuden. Lasst euch von Peter Karasch in die Kunst des Pilzesammelns, Bestimmens und Kochens einführen. Taucht ein in die tiefen Wälder, entdeckt verborgene Schätze und verwandelt eure Ernte in kulinarische Meisterwerke. Freut euch auf wilde Köstlichkeiten aus der Wald- und Wiesenküche von der wunderbaren Victoria Lorenz.\n\nGenießt die Ruhe und den Komfort im idyllischen Ebenrieder, fernab vom Trubel der Großstadt. Das Spa mit Sauna und Außenpool lädt zur Selbstfürsorge ein, die großzügige Sofalandschaft zum Verweilen und die Bibliothek zum Lesen. Ob beim gemeinsamen Kochen in der Kochschule oder beim Dinner in der großen Tenne mit freiem Blick in die Landschaft – hier bleiben keine Wünsche offen.\n\n<%b%>PETER KARASCH<%/b%> ist eine anerkannte Koryphäe im Bereich der Mykologie und hat kürzlich ein umfassendes Standardwerk für Pilzbestimmungen beim Kosmos Verlag veröffentlicht. Als Pilzsachverständiger und Fachberater für Mykologie widmet er sich intensiv der Erforschung der Pilzwelt im Nationalpark Bayerischer Wald. Seit vielen Jahren bietet er informative und spannende Pilzwanderungen an, bei denen er sein umfangreiches Wissen teilt. Besonders bemerkenswert ist sein Trüffelhund, der ihm bei der Suche nach den begehrten Trüffeln hilft. Peter Karasch vereint fundierte Fachkenntnis mit praktischer Erfahrung und maßgeblich zur Popularisierung und zum Schutz der Pilzwelt bei. Er begeistert seit Jahren mit seinem reichen Schatz an Geschichten, Fakten und Fachwissen Rund um die heimischen Speise- und Giftpilze. Als leidenschaftlicher Koch, kann er viel praktisches Wissen und Tipps zur Zubereitung und besonderen Rezepten weitergeben.\n\n<%b%>VICTORIA LORENZ<%/b%> sucht und sammelt seit ihrem Studium zur integrativen Gesundheitsförderung und ihrer Ausbildung zur Kräuterpädagogin essbare Kräuter und Pflanzen in urbanen Nischen sowie auf weiter Flur und experimentiert intensiv, um ihnen aufregende Aromen und ihre volle Wirkung herauszukitzeln. Ein Foodie mit besonderem Sinn für nachhaltiges Essen. Ihre große Begeisterung für essbare Wildnis teilt sie leidenschaftlich in ihren Workshops, Büchern und Onlinekursen. Durch das Schaffen von besonderen Erlebnissen, möchte sie Freude am Experimentieren vermitteln, für die Natur sensibilisieren und zum nachhaltigen Genießen anregen.`,
                en: `Discover the fascinating world of wild mushrooms and immerse yourself in the diversity and magic of the forest. In the midst of idyllic nature, an experience full of discoveries and culinary delights awaits you. Let Peter Karasch introduce you to the art of picking, identifying and cooking mushrooms. Immerse yourself in the deep forests, discover hidden treasures and transform your harvest into culinary masterpieces. Look forward to wild delicacies from the forest and meadow kitchen by the wonderful Victoria Lorenz.\n\nEnjoy the peace and comfort of the idyllic Ebenrieder, far away from the hustle and bustle of the big city. The spa with sauna and outdoor pool invites you to take care of yourself, the spacious sofa area to linger and the library to read. Whether cooking together in the cooking school or dining in the large barn with an unobstructed view of the countryside - no wishes remain unfulfilled here.\n\n<%b%>PETER KARASCH<%/b%> is a recognized expert in the field of mycology and has recently published a comprehensive standard work on mushroom identification with Kosmos Verlag. As a mushroom expert and consultant for mycology, he is intensively involved in researching the world of mushrooms in the Bavarian Forest National Park. He has been offering informative and exciting mushroom hikes for many years, during which he shares his extensive knowledge. Particularly noteworthy is his truffle dog, which helps him in his search for the coveted truffles. Peter Karasch combines in-depth expertise with practical experience and plays a key role in popularizing and protecting the world of mushrooms. He has been inspiring people for years with his wealth of stories, facts and specialist knowledge about local edible and poisonous mushrooms. As a passionate cook, he can pass on a lot of practical knowledge and tips on preparation and special recipes.\n\n<%b%>VICTORIA LORENZ<%/b%> has been searching for and collecting edible herbs and plants in urban niches and in the countryside since her studies in integrative health promotion and her training as an herbal teacher, experimenting intensively to tease out their exciting flavors and full effect. A foodie with a special sense for sustainable food. She passionately shares her great enthusiasm for edible wilderness in her workshops, books and online courses. By creating special experiences, she wants to convey the joy of experimentation, raise awareness of nature and encourage sustainable enjoyment.`
            },
            descriptionShort: {
                de: 'Ein kulinarisches Wochenende im Ebenrieder mit dem bekannten Pilzexperten Peter Karasch und der Kräuterpädagogin Victoria Lorenz.',
                en: 'A culinary weekend at Ebenrieder with well-known mushroom expert Peter Karasch and herbalist Victoria Lorenz.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Pilzgenuß - von der Natur auf den Teller',
                        en: 'Mushroom delight - from nature to the plate'
                    },
                    content: {
                        de: 'mit Peter Karasch und Victoria Lorenz',
                        en: 'with Peter Karasch and Victoria Lorenz'
                    }
                },
                {
                    title: {
                        de: 'Plätze',
                        en: 'Places'
                    },
                    content: {
                        de: '12-16',
                        en: '12-16'
                    }
                },
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 26.09.2024 um 14:00 Uhr',
                        en: "on 26.09.2024 at 14:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 28.09.2024 um 16:00 Uhr',
                        en: "on 28.09.2024 at 16:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%singleRoom%> EUR im Einzelzimmer, <%doubleRoom%> EUR im Doppelzimmer',
                        en: '<%singleRoom%> EUR in a single room, <%doubleRoom%> EUR in a double room'
                    }
                },
                {
                    content: {
                        de: 'inkl. zwei Übernachtungen und Verpflegung',
                        en: 'incl. two overnight stays and meals'
                    }
                },
                {
                    content: {
                        de: 'inkl. zwei ausgiebige Pilzexkursionen, eine Trüffelsuche mit Trüffelhund Leo, gemeinsames Kochen, 4-Gänge-Pilz-Menü, Brotzeit im Wald, Pilzvorträge und Bestimmungen',
                        en: 'incl. two extensive mushroom excursions, one truffle hunt with truffle dog Leo, cooking together, 4-course mushroom menu, snack in the forest, mushroom lectures and determinations'
                    }
                },
                {
                    content: {
                        de: 'inkl. Sauna mit Außenpool und Hot Tub',
                        en: 'incl. Sauna with outdoor pool and hot tub'
                    }
                }
            ],
            descriptionProgram: [
                {
                    day: {
                        de: 'Fr',
                        en: 'Friday'
                    },
                    activities: [
                        {
                            time: '14:00',
                            description: {
                                de: 'Anreise und Willkommens-Drink mit einem kleinen Pilz-Snack',
                                en: 'Arrival and welcome drink with a small mushroom snack'
                            }
                        },
                        {
                            time: '15:00',
                            description: {
                                de: 'Erste Waldtour',
                                en: 'First forest tour'
                            }
                        },
                        {
                            time: '18:00',
                            description: {
                                de: 'Rückkehr, Rückzug und Entspannung',
                                en: 'Return, retreat and relaxation'
                            }
                        },
                        {
                            time: '20:00',
                            description: {
                                de: 'Ein festliches 4-Gänge-Pilz-Menü, dazu werden wilde Köstlichkeiten aus der Wald- und Wiesenküche von Victoria Lorenz gereicht - freut euch zum Beispiel auf Walddashi, Fichtenbutter und frisch zubereiteten Waldkaviar',
                                en: "A festive 4-course mushroom menu, accompanied by wild delicacies from Victoria Lorenz's forest and meadow kitchen - look forward to forest dashi, spruce butter and freshly prepared forest caviar, for example"
                            }
                        }
                    ]
                },
                {
                    day: {
                        de: 'Sa',
                        en: 'Saturday'
                    },
                    activities: [
                        {
                            time: '09:00',
                            description: {
                                de: 'Frühstück',
                                en: 'Breakfast'
                            }
                        },
                        {
                            time: '10:00',
                            description: {
                                de: 'Aufbruch in den Wald',
                                en: 'Heading into the forest'
                            }
                        },
                        {
                            time: '13:00',
                            description: {
                                de: 'Brotzeit im Wald',
                                en: 'Snack in the woods'
                            }
                        },
                        {
                            time: '15:00',
                            description: {
                                de: 'Rückkehr und Rückzug, Zeit für Kaffee, Süßes, inspirierende Gespräche am Kamin, zum Lesen oder einfach Entspannen im Spa oder Outdoor-Hot-Tub',
                                en: 'Return and retreat, time for coffee, sweets, inspiring conversations by the fireplace, reading or simply relaxing in the spa or outdoor hot tub'
                            }
                        },
                        {
                            time: '18:00',
                            description: {
                                de: 'Bestimmen, Bestaunen und Vorbereiten der gesammelten Schätze mit anschließendem gemeinsamen Kochen in der Kochschule – ein Fest für alle Sinne',
                                en: 'Identify, admire and prepare the collected treasures, followed by cooking together in the cooking school - a feast for all the senses'
                            }
                        }
                    ]
                },
                {
                    day: {
                        de: 'So',
                        en: 'Sunday'
                    },
                    activities: [
                        {
                            time: '09:00',
                            description: {
                                de: 'Frühstück',
                                en: 'Breakfast'
                            }
                        },
                        {
                            time: '10:00',
                            description: {
                                de: 'Spannende Trüffelsuche mit Trüffelhund Leo im Allgäuer Voralpenland',
                                en: 'Exciting truffle hunt with truffle dog Leo in the foothills of the Allgäu Alps'
                            }
                        },
                        {
                            time: '12:00',
                            description: {
                                de: 'Check-Out',
                                en: 'Check-Out'
                            }
                        },
                        {
                            time: '12:30',
                            description: {
                                de: 'Ein krönender Abschluss mit gemeinsamem Trüffel-Mittagessen',
                                en: 'A crowning finale with truffle lunch together'
                            }
                        }
                    ]
                }
            ],
            attachements: [
                {
                    label: {
                        de: 'Das Programm für diese Veranstaltung findest du <%a%>hier<%/a%>.',
                        en: 'You can find the program for this event <%a%>here<%/a%>.'
                    },
                    link: 'assets/media/events/pilzgenuss.pdf'
                }
            ],
            booking: [
                {
                    email: {
                        event: true,
                        date: 'Standard',
                        name: true,
                        quantityPeople: true,
                        room: 'Standard',
                        foodIntolerance: true
                    }
                }
            ]
        },
        {
            type: 'Workshop',
            title: {
                de: 'Fermentationskurs',
                en: 'Fermentation course'
            },
            subtitle: [
                {
                    de: 'Mit Victoria Lorenz',
                    en: 'With Victoria Lorenz'
                }
            ],
            date: new Date(2025, 1, 15),
            price: 109,
            status: 'Cancelled',
            link: 'fermentationskurs_februar',
            imagePreview: 'assets/media/events/fermentation_01.jpg',
            imageGallery: [
                'assets/media/events/fermentation_01.jpg',
                'assets/media/events/fermentation_02.jpg',
                'assets/media/events/fermentation_03.jpg',
                'assets/media/events/fermentation_04.jpg',
                'assets/media/events/fermentation_05.jpg'
            ],
            descriptionLong: {
                de: `Entdecke die faszinierende Welt der Fermentation in der einzigartigen Atmosphäre des Ebenrieder. Dieser zauberhafte Ort, eingebettet in die malerische Landschaft des Voralpenlandes, bietet die perfekte Kulisse, um die Kunst der Fermentation in all ihren Facetten zu erleben. Die Verbindung von Tradition und Moderne, die das Ebenrieder ausstrahlt, macht diesen Kurs zu einem besonderen Erlebnis, das weit über einen gewöhnlichen Workshop hinausgeht. Lass dich inspirieren und tauche ein in die kulinarischen Möglichkeiten, die Fermente eröffnen!\n\nIm Workshop versorge ich euch mit fundiertem Wissen zur Fermentation, Milchsäuregärung, Darmgesundheit und den gesundheitlichen Vorteilen fermentierter Produkte. Nach einer theoretischen Einführung in die Kunst der Fermentation und das Thema Bakterien und Darmgesundheit geht es direkt an die Praxis: Gemeinsam schneiden, würzen und fermentieren wir saisonales Gemüse – kreativ, individuell und lecker. Je nach Jahreszeit bereiten wir unterschiedliche Kreationen zu.\n\nNeben dem intensiven Workshop erwartet euch ein Mittagessen, bei dem fermentierte Köstlichkeiten im Mittelpunkt stehen. Ihr habt die Möglichkeit, die Vielfalt der Fermente direkt zu schmecken und euch von neuen Geschmackserlebnissen überraschen zu lassen.`,
                en: `Discover the fascinating world of fermentation in the unique atmosphere of Ebenrieder. This magical place, nestled in the picturesque landscape of the Alpine foothills, offers the perfect backdrop to experience the art of fermentation in all its facets. The combination of tradition and modernity that the Ebenrieder radiates makes this course a special experience that goes far beyond an ordinary workshop. Let yourself be inspired and immerse yourself in the culinary possibilities that ferments open up!\n\nIn this workshop, I will provide you with in-depth knowledge about fermentation, lactic acid fermentation, gut health and the health benefits of fermented products. After a theoretical introduction to the art of fermentation and the topic of bacteria and gut health, we will get straight down to practical work: together we will cut, season and ferment seasonal vegetables - creatively, individually and deliciously. We prepare different creations depending on the season.\n\nIn addition to the intensive workshop, a lunch awaits you where fermented delicacies take center stage. You will have the opportunity to taste the variety of ferments directly and be surprised by new taste sensations.`
            },
            descriptionShort: {
                de: 'Entdecke die faszinierende Welt der Fermentation in der einzigartigen Atmosphäre des Ebenrieder.',
                en: 'Discover the fascinating world of fermentation in the unique atmosphere of Ebenrieder.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 15.02.2025 um 11:00 Uhr',
                        en: "on 15.02.2025 at 11:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 15.02.2025 um 14:30 Uhr',
                        en: "on 15.02.2025 at 14:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%price%> EUR',
                        en: '<%price%> EUR'
                    }
                },
                {
                    content: {
                        de: 'Eine inspirierende Einführung in die Kunst der Fermentation',
                        en: 'An inspiring introduction to the art of fermentation'
                    }
                },
                {
                    content: {
                        de: 'Fundiertes Wissen zur Kunst der Fermentation und Darmgesundheit',
                        en: 'In-depth knowledge about the art of fermentation and gut health'
                    }
                },
                {
                    content: {
                        de: 'Tasting verschiedener Fermente und ein leckeres Mittagessen',
                        en: 'Tasting of various ferments and a delicious lunch'
                    }
                },
                {
                    content: {
                        de: 'Hands-On Praxisteil, bei dem ihr euer eigenes Ferment herstellt',
                        en: 'Hands-on practical part where you make your own ferment'
                    }
                },
                {
                    content: {
                        de: 'Tipps, Tricks und Antworten auf all eure Fragen',
                        en: 'Tips, tricks and answers to all your questions'
                    }
                },
                {
                    content: {
                        de: 'Kursmaterialien und Gläser/Flaschen für euer Ferment',
                        en: 'Course materials and jars/bottles for your ferment'
                    }
                },
                {
                    content: {
                        de: 'Euer selbstgemachtes Ferment zum Mitnehmen',
                        en: 'Your homemade ferment to take home'
                    }
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    link: 'https://vildvuchs.myshopify.com/products/fermentationskurs-im-ebenrieder'
                }
            ]
        },
        {
            type: 'Workshop',
            title: {
                de: 'Wilde Waldaromen - Nadelbaumküche Workshop',
                en: 'Wild forest flavors - conifer cuisine workshop'
            },
            subtitle: [
                {
                    de: 'Mit Victoria Lorenz',
                    en: 'With Victoria Lorenz'
                }
            ],
            date: new Date(2025, 1, 22),
            price: 89,
            status: 'Cancelled',
            link: 'nadelbaumkurs_februar',
            imagePreview: 'assets/media/events/nadelbaumkueche_01.jpg',
            imageGallery: [
                'assets/media/events/nadelbaumkueche_01.jpg',
                'assets/media/events/nadelbaumkueche_02.jpg',
                'assets/media/events/nadelbaumkueche_03.jpg',
                'assets/media/events/nadelbaumkueche_04.jpg',
                'assets/media/events/nadelbaumkueche_05.jpg',
                'assets/media/events/nadelbaumkueche_06.jpg',
                'assets/media/events/nadelbaumkueche_07.jpg',
                'assets/media/events/nadelbaumkueche_08.jpg',
                'assets/media/events/nadelbaumkueche_09.jpg'
            ],
            descriptionLong: {
                de: `Tauche ein in die faszinierende Welt der Nadelbaumküche und entdecke, wie vielseitig und überraschend die kulinarischen Möglichkeiten unserer heimischen Wälder sind. Ob Fichtenbutter, Tannenoxymel oder Douglasiengin – die Aromenpalette reicht von zitronig-intensiv über pfeffrig-würzig bis hin zu herb-mandarinig. Lass dich inspirieren und lerne, wie du diese besonderen Geschmacksnuancen in deine eigene Küche holen kannst.\n\nDer Kurs verbindet einzigartig Naturwissen mit kulinarischer Kreativität. Du lernst nicht nur die verschiedenen essbaren Nadelbäume sicher zu bestimmen, sondern entdeckst auch, wie du sie nachhaltig und aromatisch in köstliche Produkte verwandelst. Hier steht nicht nur das Wie, sondern auch das Warum im Fokus: Die sorgfältige Auswahl, schonende Verarbeitung und das tiefere Verständnis für die Natur machen diesen Workshop zu einem ganzheitlichen Erlebnis.`,
                en: `Immerse yourself in the fascinating world of conifer cuisine and discover how varied and surprising the culinary possibilities of our local forests are. Whether spruce butter, fir oxymel or Douglas fir gin - the flavors range from lemony and intense to peppery and spicy to tart and mandarin. Let yourself be inspired and learn how you can bring these special flavors into your own kitchen.\n\nThe course uniquely combines knowledge of nature with culinary creativity. Not only will you learn how to identify the various edible conifers, but you will also discover how to transform them sustainably and aromatically into delicious products. The focus here is not only on the how, but also the why: careful selection, careful processing and a deeper understanding of nature make this workshop a holistic experience.`
            },
            descriptionShort: {
                de: 'Tauche ein in die faszinierende Welt der Nadelbaumküche und entdecke, wie vielseitig und überraschend die kulinarischen Möglichkeiten unserer heimischen Wälder sind.',
                en: 'Immerse yourself in the fascinating world of conifer cuisine and discover how varied and surprising the culinary possibilities of our local forests are.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 22.02.2025 um 11:00 Uhr',
                        en: "on 22.02.2025 at 11:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 22.02.2025 um 14:00 Uhr',
                        en: "on 22.02.2025 at 14:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%price%> EUR',
                        en: '<%price%> EUR'
                    }
                },
                {
                    title: {
                        de: 'Ein waldiges Sensorik-Abenteuer',
                        en: 'A forest sensory adventure'
                    },
                    content: {
                        de: 'Erlebe Nadelbäume mit allen Sinnen und erkunde ihre außergewöhnlichen Aromen',
                        en: 'Experience conifers with all your senses and explore their extraordinary aromas'
                    }
                },
                {
                    title: {
                        de: 'Praxisnahes Arbeiten',
                        en: 'Practical work'
                    },
                    content: {
                        de: 'Gemeinsam stellen wir nicht nur Produkte her, sondern du erfährst direkt, wie diese vielseitig eingesetzt werden können',
                        en: 'Not only will we make products together, but you will also learn directly how they can be used in a variety of ways'
                    }
                },
                {
                    title: {
                        de: 'Ein Stück Wald für Zuhause',
                        en: 'A piece of forest for your home'
                    },
                    content: {
                        de: 'Mit dem digitalen Buch „Nadelbaumküche“ kannst du auch nach dem Kurs kreativ weiter experimentieren',
                        en: 'You can continue to experiment creatively after the course with the digital book “Nadelbaumküche”'
                    }
                },
                {
                    title: {
                        de: 'Bestimmung der wichtigsten Nadelbaumarten',
                        en: 'Identification of the most important conifer species'
                    },
                    content: {
                        de: 'Mit Schwerpunkt auf essbaren Bäumen und dem Erkennen der giftigen Eibe',
                        en: 'With a focus on edible trees and recognizing the poisonous yew'
                    }
                },
                {
                    title: {
                        de: 'Herstellung von 3 außergewöhnlichen Nadelbaumprodukten',
                        en: 'Production of 3 unusual conifer products'
                    },
                    content: {
                        de: 'Wie z. B. Waldkaviar, Tannensalz und Oxymel',
                        en: 'Such as forest caviar, fir salt and oxymel'
                    }
                },
                {
                    title: {
                        de: 'Inklusive aller Materialien',
                        en: 'Including all materials'
                    },
                    content: {
                        de: 'Gläser, Zutaten und Werkzeuge',
                        en: 'Jars, ingredients and tools'
                    }
                },
                {
                    title: {
                        de: 'Ein Stück Wald für Zuhause',
                        en: 'Enjoyment and nature experience'
                    },
                    content: {
                        de: 'Ein waldiger Begrüßungsdrink und ein wilder Snack runden den Workshop ab',
                        en: 'A woodland welcome drink and a wild snack round off the workshop'
                    }
                },
                {
                    content: {
                        de: 'Teilnehmer erhalten im Anschluss die digitale Version meines Buchs "Nadelbaumküche"',
                        en: 'Participants will receive the digital version of my book “Nadelbaumküche” afterwards'
                    }
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    link: 'https://vildvuchs.myshopify.com/products/fermentationskurs-im-ebenrieder-kopie'
                }
            ]
        },
        {
            type: 'Workshop',
            title: {
                de: 'Wilde Waldaromen - Nadelbaumküche Workshop',
                en: 'Wild forest flavors - conifer cuisine workshop'
            },
            subtitle: [
                {
                    de: 'Mit Victoria Lorenz',
                    en: 'With Victoria Lorenz'
                }
            ],
            date: new Date(2025, 2, 15),
            price: 89,
            status: 'Booked',
            link: 'nadelbaumkurs_maerz',
            imagePreview: 'assets/media/events/nadelbaumkueche_01.jpg',
            imageGallery: [
                'assets/media/events/nadelbaumkueche_01.jpg',
                'assets/media/events/nadelbaumkueche_02.jpg',
                'assets/media/events/nadelbaumkueche_03.jpg',
                'assets/media/events/nadelbaumkueche_04.jpg',
                'assets/media/events/nadelbaumkueche_05.jpg',
                'assets/media/events/nadelbaumkueche_06.jpg',
                'assets/media/events/nadelbaumkueche_07.jpg',
                'assets/media/events/nadelbaumkueche_08.jpg',
                'assets/media/events/nadelbaumkueche_09.jpg'
            ],
            descriptionLong: {
                de: `Tauche ein in die faszinierende Welt der Nadelbaumküche und entdecke, wie vielseitig und überraschend die kulinarischen Möglichkeiten unserer heimischen Wälder sind. Ob Fichtenbutter, Tannenoxymel oder Douglasiengin – die Aromenpalette reicht von zitronig-intensiv über pfeffrig-würzig bis hin zu herb-mandarinig. Lass dich inspirieren und lerne, wie du diese besonderen Geschmacksnuancen in deine eigene Küche holen kannst.\n\nDer Kurs verbindet einzigartig Naturwissen mit kulinarischer Kreativität. Du lernst nicht nur die verschiedenen essbaren Nadelbäume sicher zu bestimmen, sondern entdeckst auch, wie du sie nachhaltig und aromatisch in köstliche Produkte verwandelst. Hier steht nicht nur das Wie, sondern auch das Warum im Fokus: Die sorgfältige Auswahl, schonende Verarbeitung und das tiefere Verständnis für die Natur machen diesen Workshop zu einem ganzheitlichen Erlebnis.`,
                en: `Immerse yourself in the fascinating world of conifer cuisine and discover how varied and surprising the culinary possibilities of our local forests are. Whether spruce butter, fir oxymel or Douglas fir gin - the flavors range from lemony and intense to peppery and spicy to tart and mandarin. Let yourself be inspired and learn how you can bring these special flavors into your own kitchen.\n\nThe course uniquely combines knowledge of nature with culinary creativity. Not only will you learn how to identify the various edible conifers, but you will also discover how to transform them sustainably and aromatically into delicious products. The focus here is not only on the how, but also the why: careful selection, careful processing and a deeper understanding of nature make this workshop a holistic experience.`
            },
            descriptionShort: {
                de: 'Tauche ein in die faszinierende Welt der Nadelbaumküche und entdecke, wie vielseitig und überraschend die kulinarischen Möglichkeiten unserer heimischen Wälder sind.',
                en: 'Immerse yourself in the fascinating world of conifer cuisine and discover how varied and surprising the culinary possibilities of our local forests are.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 15.03.2025 um 11:00 Uhr',
                        en: "on 15.03.2025 at 11:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 15.03.2025 um 14:00 Uhr',
                        en: "on 15.03.2025 at 14:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%price%> EUR',
                        en: '<%price%> EUR'
                    }
                },
                {
                    title: {
                        de: 'Ein waldiges Sensorik-Abenteuer',
                        en: 'A forest sensory adventure'
                    },
                    content: {
                        de: 'Erlebe Nadelbäume mit allen Sinnen und erkunde ihre außergewöhnlichen Aromen',
                        en: 'Experience conifers with all your senses and explore their extraordinary aromas'
                    }
                },
                {
                    title: {
                        de: 'Praxisnahes Arbeiten',
                        en: 'Practical work'
                    },
                    content: {
                        de: 'Gemeinsam stellen wir nicht nur Produkte her, sondern du erfährst direkt, wie diese vielseitig eingesetzt werden können',
                        en: 'Not only will we make products together, but you will also learn directly how they can be used in a variety of ways'
                    }
                },
                {
                    title: {
                        de: 'Ein Stück Wald für Zuhause',
                        en: 'A piece of forest for your home'
                    },
                    content: {
                        de: 'Mit dem digitalen Buch „Nadelbaumküche“ kannst du auch nach dem Kurs kreativ weiter experimentieren',
                        en: 'You can continue to experiment creatively after the course with the digital book “Nadelbaumküche”'
                    }
                },
                {
                    title: {
                        de: 'Bestimmung der wichtigsten Nadelbaumarten',
                        en: 'Identification of the most important conifer species'
                    },
                    content: {
                        de: 'Mit Schwerpunkt auf essbaren Bäumen und dem Erkennen der giftigen Eibe',
                        en: 'With a focus on edible trees and recognizing the poisonous yew'
                    }
                },
                {
                    title: {
                        de: 'Herstellung von 3 außergewöhnlichen Nadelbaumprodukten',
                        en: 'Production of 3 unusual conifer products'
                    },
                    content: {
                        de: 'Wie z. B. Waldkaviar, Tannensalz und Oxymel',
                        en: 'Such as forest caviar, fir salt and oxymel'
                    }
                },
                {
                    title: {
                        de: 'Inklusive aller Materialien',
                        en: 'Including all materials'
                    },
                    content: {
                        de: 'Gläser, Zutaten und Werkzeuge',
                        en: 'Jars, ingredients and tools'
                    }
                },
                {
                    title: {
                        de: 'Ein Stück Wald für Zuhause',
                        en: 'Enjoyment and nature experience'
                    },
                    content: {
                        de: 'Ein waldiger Begrüßungsdrink und ein wilder Snack runden den Workshop ab',
                        en: 'A woodland welcome drink and a wild snack round off the workshop'
                    }
                },
                {
                    content: {
                        de: 'Teilnehmer erhalten im Anschluss die digitale Version meines Buchs "Nadelbaumküche"',
                        en: 'Participants will receive the digital version of my book “Nadelbaumküche” afterwards'
                    }
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    link: 'https://vildvuchs.myshopify.com/products/fermentationskurs-im-ebenrieder-kopie'
                }
            ]
        },
        {
            type: 'Workshop',
            title: {
                de: 'Fermentationskurs',
                en: 'Fermentation course'
            },
            subtitle: [
                {
                    de: 'Mit Victoria Lorenz',
                    en: 'With Victoria Lorenz'
                }
            ],
            date: new Date(2025, 2, 29),
            price: 109,
            status: 'Booked',
            link: 'fermentationskurs_maerz',
            imagePreview: 'assets/media/events/fermentation_01.jpg',
            imageGallery: [
                'assets/media/events/fermentation_01.jpg',
                'assets/media/events/fermentation_02.jpg',
                'assets/media/events/fermentation_03.jpg',
                'assets/media/events/fermentation_04.jpg',
                'assets/media/events/fermentation_05.jpg'
            ],
            descriptionLong: {
                de: `Entdecke die faszinierende Welt der Fermentation in der einzigartigen Atmosphäre des Ebenrieder. Dieser zauberhafte Ort, eingebettet in die malerische Landschaft des Voralpenlandes, bietet die perfekte Kulisse, um die Kunst der Fermentation in all ihren Facetten zu erleben. Die Verbindung von Tradition und Moderne, die das Ebenrieder ausstrahlt, macht diesen Kurs zu einem besonderen Erlebnis, das weit über einen gewöhnlichen Workshop hinausgeht. Lass dich inspirieren und tauche ein in die kulinarischen Möglichkeiten, die Fermente eröffnen!\n\nIm Workshop versorge ich euch mit fundiertem Wissen zur Fermentation, Milchsäuregärung, Darmgesundheit und den gesundheitlichen Vorteilen fermentierter Produkte. Nach einer theoretischen Einführung in die Kunst der Fermentation und das Thema Bakterien und Darmgesundheit geht es direkt an die Praxis: Gemeinsam schneiden, würzen und fermentieren wir saisonales Gemüse – kreativ, individuell und lecker. Je nach Jahreszeit bereiten wir unterschiedliche Kreationen zu.\n\nNeben dem intensiven Workshop erwartet euch ein Mittagessen, bei dem fermentierte Köstlichkeiten im Mittelpunkt stehen. Ihr habt die Möglichkeit, die Vielfalt der Fermente direkt zu schmecken und euch von neuen Geschmackserlebnissen überraschen zu lassen.`,
                en: `Discover the fascinating world of fermentation in the unique atmosphere of Ebenrieder. This magical place, nestled in the picturesque landscape of the Alpine foothills, offers the perfect backdrop to experience the art of fermentation in all its facets. The combination of tradition and modernity that the Ebenrieder radiates makes this course a special experience that goes far beyond an ordinary workshop. Let yourself be inspired and immerse yourself in the culinary possibilities that ferments open up!\n\nIn this workshop, I will provide you with in-depth knowledge about fermentation, lactic acid fermentation, gut health and the health benefits of fermented products. After a theoretical introduction to the art of fermentation and the topic of bacteria and gut health, we will get straight down to practical work: together we will cut, season and ferment seasonal vegetables - creatively, individually and deliciously. We prepare different creations depending on the season.\n\nIn addition to the intensive workshop, a lunch awaits you where fermented delicacies take center stage. You will have the opportunity to taste the variety of ferments directly and be surprised by new taste sensations.`
            },
            descriptionShort: {
                de: 'Entdecke die faszinierende Welt der Fermentation in der einzigartigen Atmosphäre des Ebenrieder.',
                en: 'Discover the fascinating world of fermentation in the unique atmosphere of Ebenrieder.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 29.03.2025 um 11:00 Uhr',
                        en: "on 29.03.2025 at 11:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 29.03.2025 um 14:30 Uhr',
                        en: "on 29.03.2025 at 14:30 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%price%> EUR',
                        en: '<%price%> EUR'
                    }
                },
                {
                    content: {
                        de: 'Eine inspirierende Einführung in die Kunst der Fermentation',
                        en: 'An inspiring introduction to the art of fermentation'
                    }
                },
                {
                    content: {
                        de: 'Fundiertes Wissen zur Kunst der Fermentation und Darmgesundheit',
                        en: 'In-depth knowledge about the art of fermentation and gut health'
                    }
                },
                {
                    content: {
                        de: 'Tasting verschiedener Fermente und ein leckeres Mittagessen',
                        en: 'Tasting of various ferments and a delicious lunch'
                    }
                },
                {
                    content: {
                        de: 'Hands-On Praxisteil, bei dem ihr euer eigenes Ferment herstellt',
                        en: 'Hands-on practical part where you make your own ferment'
                    }
                },
                {
                    content: {
                        de: 'Tipps, Tricks und Antworten auf all eure Fragen',
                        en: 'Tips, tricks and answers to all your questions'
                    }
                },
                {
                    content: {
                        de: 'Kursmaterialien und Gläser/Flaschen für euer Ferment',
                        en: 'Course materials and jars/bottles for your ferment'
                    }
                },
                {
                    content: {
                        de: 'Euer selbstgemachtes Ferment zum Mitnehmen',
                        en: 'Your homemade ferment to take home'
                    }
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    link: 'https://vildvuchs.myshopify.com/products/fermentationskurs-im-ebenrieder'
                }
            ]
        },
        {
            type: 'Food',
            title: {
                de: 'Wild Dinner',
                en: 'Wild Dinner'
            },
            subtitle: [
                {
                    de: 'Mit Victoria Lorenz & Johannes Höcherl',
                    en: 'With Victoria Lorenz & Johannes Höcherl'
                }
            ],
            date: new Date(2025, 3, 26),
            price: {
                event: 179
            },
            status: 'Available',
            link: 'wild_dinner',
            imagePreview: 'assets/media/events/wild_dinner_11.jpg',
            imageGallery: [
                'assets/media/events/wild_dinner_01.jpg',
                'assets/media/events/wild_dinner_02.jpg',
                'assets/media/events/wild_dinner_03.jpg',
                'assets/media/events/wild_dinner_04.jpg',
                'assets/media/events/wild_dinner_05.jpg',
                'assets/media/events/wild_dinner_06.jpg',
                'assets/media/events/wild_dinner_07.jpg',
                'assets/media/events/wild_dinner_08.jpg',
                'assets/media/events/wild_dinner_09.jpg',
                'assets/media/events/wild_dinner_10.jpg'
            ],
            descriptionLong: {
                de: `Was kommt raus, wenn ein kreativer Spitzenkoch und eine leidenschaftliche Wildkräuterexpertin zusammen durch die Wälder streichen und Ideen austauschen?\n\nEin sehr besonderes und unvergleichliches Geschmackserlebnis für euch. Wir lassen unsere WILD DINNER Reihe wieder aufleben und diesmal zieht es uns aus der Stadt raus und ins schöne Ostallgäu. Erlebt einen ganzen Tag voller Aromen, Genuss, Natur und wilder Kulinarik. Gemeinsam mit Johannes Höcherl, dem kreativen Kopf hinter dem bekannten Münchner Restaurant ≫Das Kulinariat≪, und der Kräuterpädagogin Victoria von ≫vildvuchs≪, die die Aromen und Geheimnisse der heimischen Pflanzen meisterhaft beherrscht, erwartet euch ein unvergleichlicher Tag.\n\nDer Tag beginnt mit einer geführten, mehrstündigen Wildkräutertour vorbei an grünen Wiesen und duftenden Wälder. Victoria zeigt euch die saisonal wachsenden Wildpflanzen, führt euch in die Welt der essbaren Bäume ein und teilt ihre Leidenschaft über wilden, saisonale Aromen. Als Highlight und Stärkung für zwischendurch wird euch ein wilder Snack mitten in der Natur serviert.\n\nNach der Tour werdet ihr im schönsten Ambiente des ≫Ebenrieder≪ von Johannes mit einem Fine Dining Erlebnis der besonderen Art verwöhnt. Er kreiert ein exquisites 5-Gänge-Menü, inspiriert von Wildpflanzen, essbaren Bäumen sowie regionalen und saisonalen Zutaten. Lasst euch von den Kreationen überraschen.\n\nUnser ≫Wild Dinner≪ ist eine Hommage an unsere wunderbare Natur, an die Wälder und Bäume die uns umgeben und uns versorgen. Ein nachhaltiger Umgang mit den Wildpflanzen und der Natur ist uns sehr wichtig und mit dem vermittelten Wissen und der kulinarischen Heranführung an diesem Tag möchten wir die Verbindung von Mensch und Natur stärken und die Wichtigkeit der Pflanzenvielfalt hervorheben. Es wird ein Erlebnis für alle Sinne. Macht aus einem Tag ein entspanntes Wochenende. Wer möchte, kann direkt im wunderschönen Ebenrieder übernachten und die Ruhe der umliegenden Wälder genießen.`,
                en: `What happens when a creative top chef and a passionate wild herb expert roam the woods together and exchange ideas?\n\nA very special and incomparable flavour experience for you. We are reviving our WILD DINNER series and this time we are travelling out of the city and into the beautiful Ostallgäu. Experience a whole day full of flavours, enjoyment, nature and wild cuisine. Together with Johannes Höcherl, the creative mind behind the well-known Munich restaurant ≫Das Kulinariat≪, and herbalist Victoria from ≫vildvuchs≪, who is a master of the flavours and secrets of local plants, an incomparable day awaits you.\n\nThe day begins with a guided wild herb tour lasting several hours past green meadows and fragrant forests. Victoria will show you the wild plants that grow seasonally, introduce you to the world of edible trees and share her passion for wild, seasonal flavours. As a highlight and refreshment in between, you will be served a wild snack in the middle of nature.\n\nAfter the tour, Johannes will treat you to a very special fine dining experience in the beautiful surroundings of the ≫Ebenrieder≪. He will create an exquisite 5-course menu inspired by wild plants, edible trees and regional and seasonal ingredients. Let yourself be surprised by the creations.\n\nOur ≫Wild Dinner≪ is a tribute to our wonderful nature, to the forests and trees that surround us and provide for us. A sustainable approach to wild plants and nature is very important to us and with the knowledge imparted and the culinary introduction on this day we would like to strengthen the connection between man and nature and emphasise the importance of plant diversity. It will be an experience for all the senses. Turn a day into a relaxing weekend. If you want, you can spend the night in beautiful Ebenrieder and enjoy the tranquillity of the surrounding forests.`
            },
            descriptionShort: {
                de: 'Ein sehr besonderes und unvergleichliches Geschmackserlebnis für euch, erlebt einen ganzen Tag voller Aromen, Genuss, Natur und wilder Kulinarik.',
                en: 'A very special and incomparable taste experience for you, experience a whole day full of flavours, enjoyment, nature and wild culinary delights.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 26.04.2025 um 12:00 Uhr',
                        en: "on 26.04.2025 at 12:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 26.04.2025 um 22:00 Uhr',
                        en: "on 26.04.2025 at 22:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%event%> EUR',
                        en: '<%event%> EUR'
                    }
                },
                {
                    content: {
                        de: 'Mehrstündige Wildkräutertour',
                        en: 'Wild herb tour lasting several hours'
                    }
                },
                {
                    content: {
                        de: 'Wilder Snack',
                        en: 'Wild snack'
                    }
                },
                {
                    content: {
                        de: 'Wilder Begrüßungsdrink',
                        en: 'Wild welcome drink'
                    }
                },
                {
                    content: {
                        de: '5 Gänge Menü inspiriert von der Natur exkl. alkoholische Getränke',
                        en: '5 course menu inspired by nature excl. alcoholic beverages'
                    }
                },
                {
                    title: {
                        de: 'Übernachtung',
                        en: 'Accomodation'
                    },
                    content: {
                        de: 'ab 180 EUR pro Nacht, Infos und Preise auf Anfrage',
                        en: 'from 180 EUR per night, information and prices on request'
                    }
                }
            ],
            descriptionProgram: [
                {
                    activities: [
                        {
                            time: '12:00',
                            description: {
                                de: 'Start am Ebenrieder',
                                en: 'Start at the Ebenrieder'
                            }
                        },
                        {
                            time: '12:30',
                            description: {
                                de: 'Start der Kräuterwanderung',
                                en: 'Start of the herbal walk'
                            }
                        },
                        {
                            time: '14:00',
                            description: {
                                de: 'Snack im Wald',
                                en: 'Snack in the woods'
                            }
                        },
                        {
                            time: '17:00 - 17:30',
                            description: {
                                de: 'Ankunft beim Ebenrieder',
                                en: 'Arrival at Ebenrieder'
                            }
                        },
                        {
                            time: '18:00',
                            description: {
                                de: 'Start des Dinners',
                                en: 'Start of the Dinner'
                            }
                        },
                        {
                            time: '22:00',
                            description: {
                                de: 'Ende der Veranstaltung',
                                en: 'End of the event'
                            }
                        }
                    ]
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Unterkunft buchen',
                        en: 'Book accomodation'
                    },
                    email: {
                        text: 'Room',
                        event: true,
                        date: 'Fill',
                        quantityNights: true,
                        quantityPeople: true,
                        name: true,
                        address: true,
                        room: 'Select'
                    }
                },
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    link: 'https://vildvuchs.myshopify.com/products/wild-dinner-allgau-edition'
                }
            ]
        },
        {
            type: 'Pottery',
            title: {
                de: 'Keramik Workshop mit Lena Harms',
                en: 'Pottery workshop with Lena Harms'
            },
            subtitle: [
                {
                    de: 'Keramikkurs <%event%> EUR pro Person',
                    en: 'Pottery workshop <%event%> EUR per person'
                },
                {
                    de: 'Einzelzimmer <%singleRoomShared%> bis <%singleRoomPrivate%> EUR',
                    en: 'Single room <%singleRoomShared%> to <%singleRoomPrivate%> EUR'
                },
                {
                    de: 'Doppelzimmer <%doubleRoomShared%> bis <%doubleRoomPrivate%> EUR',
                    en: 'Double room <%doubleRoomShared%> to <%doubleRoomPrivate%> EUR'
                }
            ],
            date: {
                start: new Date(2025, 4, 3),
                end: new Date(2025, 4, 4)
            },
            price: {
                event: 240,
                singleRoomPrivate: 120,
                doubleRoomPrivate: 170,
                singleRoomShared: 110,
                doubleRoomShared: 160
            },
            status: 'Available',
            link: 'keramik_workshop',
            imagePreview: 'assets/media/events/keramik_workshop_08.jpg',
            imageGallery: [
                'assets/media/events/keramik_workshop_02.jpg',
                'assets/media/events/keramik_workshop_03.jpg',
                'assets/media/events/keramik_workshop_04.jpg',
                'assets/media/events/keramik_workshop_05.jpg',
                'assets/media/events/keramik_workshop_06.jpg',
                'assets/media/events/keramik_workshop_07.jpg'
            ],
            descriptionLong: {
                de: `Erlebe die faszinierende Welt der Keramik in einem besonderen Workshop mit der erfahrenen Künstlerin Lena Harms. In diesem zweitägigen Kurs lernst du die Wulsttechnik kennen – eine der ältesten Methoden des Töpferns, mit der du individuelle Gefäße formen kannst.\n\nAußerdem erfährst du, wie du mit flüssigem Ton farbliche Akzente setzt und deine Werke mit kreativen Gestaltungstechniken ganz nach deinem Geschmack veredelst.\n\n<%b%>Für wen ist der Kurs geeignet?<%/b%>\n\nOb du Anfänger bist oder bereits erste Erfahrungen gesammelt hast – dieser Kurs gibt dir die Möglichkeit, dein handwerkliches Können weiterzuentwickeln und deine eigene Formensprache zu entdecken.\n\n<%b%>Ein Wochenende voller Kreativität und Entspannung<%/b%>\n\nTöpfern ist nicht nur ein kreativer, sondern auch ein meditativer Prozess, bei dem du zur Ruhe kommen und den Alltag hinter dir lassen kannst. Freu dich auf zwei inspirierende Tage in einer entspannten und kreativen Atmosphäre, in der du dich ganz dem Gestalten mit Ton widmen kannst.\n\n<%b%>Individuelle Begleitung durch Lena Harms<%/b%>\n\nMit viel Geduld, Fachwissen und einem feinen Gespür für Gestaltung begleitet dich Lena durch den gesamten Prozess – von der ersten Idee bis zum fertigen Werk. Sie unterstützt euch dabei, eure ganz eigene Formensprache in Ton zu entdecken.`,
                en: `Experience the fascinating world of ceramics in a special workshop with experienced artist Lena Harms. In this two-day course, you will learn about the beading technique - one of the oldest methods of pottery, which you can use to create individualised vessels.\n\nYou will also learn how to add colour accents with liquid clay and how to refine your works with creative design techniques to suit your taste.\n\n<%b%>Who is the course suitable for?<%/b%>\n\nWhether you are a beginner or already have some experience - this course gives you the opportunity to develop your craftsmanship and discover your own design language.\n\n<%b%>A weekend full of creativity and relaxation<%/b%>\n\nPottery is not only a creative but also a meditative process that allows you to calm down and leave everyday life behind. Look forward to two inspiring days in a relaxed and creative atmosphere in which you can devote yourself entirely to modelling with clay.\n\n<%b%>Individual support from Lena Harms<%/b%>\n\nMit viel Geduld, Fachwissen und einem feinen Gespür für Gestaltung begleitet dich Lena durch den gesamten Prozess – von der ersten Idee bis zum fertigen Werk. Sie unterstützt euch dabei, eure ganz eigene Formensprache in Ton zu entdecken.`
            },
            descriptionShort: {
                de: 'Erlebe die faszinierende Welt der Keramik in einem besonderen Workshop mit der erfahrenen Künstlerin Lena Harms.',
                en: 'Experience the fascinating world of ceramics in a special workshop with experienced artist Lena Harms.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Samstag',
                        en: 'Saturday'
                    },
                    content: {
                        de: 'am 03.05.2025 von 10:00 bis 17:00 Uhr',
                        en: "on 03.05.2025 from 10:00 to 17:00 o'clock"
                    }
                },
                {
                    title: {
                        de: 'Sonntag',
                        en: 'Sunday'
                    },
                    content: {
                        de: 'am 04.05.2025 von 09:00 bis 12:00 Uhr',
                        en: "on 04.05.2025 from 09:00 to 12:00 o'clock"
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
                        de: 'Keramikkurs',
                        en: 'Pottery course'
                    },
                    content: {
                        de: '<%event%> EUR pro Person',
                        en: '<%event%> EUR per Person'
                    }
                },
                {
                    title: {
                        de: 'Zimmer mit geteiltem Bad',
                        en: 'Accomodation with shared bathroom'
                    },
                    content: {
                        de: '<%singleRoomShared%> EUR im Einzelzimmer, <%doubleRoomShared%> EUR im Doppelzimmer',
                        en: '<%singleRoomShared%> EUR in a single room, <%doubleRoomShared%> EUR in a double room'
                    }
                },
                {
                    title: {
                        de: 'Zimmer mit eigenem Bad',
                        en: 'Accomodation with private bathroom'
                    },
                    content: {
                        de: '<%singleRoomPrivate%> EUR im Einzelzimmer, <%doubleRoomPrivate%> EUR im Doppelzimmer',
                        en: '<%singleRoomPrivate%> EUR in a single room, <%doubleRoomPrivate%> EUR in a double room'
                    }
                },
                {
                    content: {
                        de: 'Optionales Frühstück für 20 EUR pro Person',
                        en: 'Optional breakfast for 20 EUR per Person'
                    }
                },
                {
                    content: {
                        de: 'Optionales Mittag- und Abendessen können separat dazugebucht werden',
                        en: 'Optional lunch and dinner can be booked separately'
                    }
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    email: {
                        event: true,
                        date: 'Standard',
                        name: true,
                        address: true,
                        quantityPeople: true
                    }
                },
                {
                    label: {
                        de: 'Unterkunft buchen',
                        en: 'Book accomodation'
                    },
                    email: {
                        event: true,
                        date: 'Fill',
                        quantityNights: true,
                        quantityPeople: true,
                        name: true,
                        address: true,
                        room: 'Select',
                        text: 'Room'
                    }
                }
            ]
        },
        {
            type: 'Retreat',
            title: {
                de: 'Daily Fusion Retreat',
                en: 'Daily Fusion Retreat'
            },
            subtitle: [
                {
                    de: 'Mit Jennifer Sengspiel & Franziska Trebuth',
                    en: 'With Jennifer Sengspiel & Franziska Trebuth'
                },
                {
                    de: 'Special mit Stefanie Kohles',
                    en: 'Special with Stefanie Kohles'
                },
                {
                    de: 'Einzelzimmer <%singleRoom%> EUR',
                    en: 'Single room <%singleRoom%> EUR'
                },
                {
                    de: 'Doppelzimmer <%doubleRoom%> EUR',
                    en: 'Double room <%doubleRoom%> EUR'
                }
            ],
            date: {
                start: new Date(2025, 4, 29),
                end: new Date(2025, 5, 1)
            },
            price: {
                singleRoom: 1680,
                doubleRoom: 1800
            },
            status: 'Available',
            link: 'daily_fusion',
            imagePreview: 'assets/media/events/daily_fusion_08.jpg',
            imageGallery: [
                'assets/media/events/daily_fusion_01.jpg',
                'assets/media/events/daily_fusion_02.jpg',
                'assets/media/events/daily_fusion_03.jpg',
                'assets/media/events/daily_fusion_04.jpg',
                'assets/media/events/daily_fusion_05.jpg',
                'assets/media/events/daily_fusion_06.jpg',
                'assets/media/events/daily_fusion_07.jpg'
            ],
            descriptionLong: {
                de: `Die Mitte stärken, Kraft tanken und das eigene Potenzial entfalten – mit Tools und täglichen Routinen aus der Traditionellen Chinesischen Medizin (TCM), der Angewandten und Positiven Psychologie und Osteopathie. Dich erwarten 4 Tage voller Inspiration, Ruhe und tiefgreifender Transformation im wunderschönen Farmhouse Retreat im Allgäuer Voralpenland. Tauche ein in die Welt der TCM mit praktischen Tipps aus der Küche und Rezepten, wie Du in Deine Mitte findest. Freude und Genuss beim Dinner an der langen Tafel stehen dabei im Vordergrund.`,
                en: `Strengthen your centre, recharge your batteries and develop your own potential - with tools and daily routines from traditional Chinese medicine (TCM), applied and positive psychology and osteopathy. Four days full of inspiration, tranquillity and profound transformation await you at the beautiful Farmhouse Retreat in the Allgäu foothills of the Alps. Immerse yourself in the world of TCM with practical tips from the kitchen and recipes on how to find your centre. Enjoyment and pleasure over dinner at the long table take centre stage.`
            },
            descriptionShort: {
                de: 'Die Mitte stärken, Kraft tanken und das eigene Potenzial entfalten.',
                en: 'Strengthen your centre, recharge your batteries and develop your own potential.'
            },
            descriptionDetails: [
                {
                    title: {
                        de: 'Start',
                        en: 'Start'
                    },
                    content: {
                        de: 'am 29.05.2025',
                        en: 'on 29.05.2025'
                    }
                },
                {
                    title: {
                        de: 'Ende',
                        en: 'End'
                    },
                    content: {
                        de: 'am 01.06.2025',
                        en: 'on 01.06.2025'
                    }
                },
                {
                    title: {
                        de: 'Preis',
                        en: 'Price'
                    },
                    content: {
                        de: '<%singleRoom%> EUR im Einzelzimmer mit geteiltem Bad, <%doubleRoom%> EUR im Doppelzimmer mit eigenem Bad',
                        en: '<%singleRoom%> EUR in a single room with shared bathroom, <%doubleRoom%> EUR in a double room with own bathroom'
                    }
                },
                {
                    content: {
                        de: 'inkl. drei Übernachtungen, Sauna & Außenpool',
                        en: 'incl. three nights, sauna & outdoor pool'
                    }
                },
                {
                    content: {
                        de: 'inkl. Traditionelle Chinesische Medizin, Yoga, Coaching & Workshops',
                        en: 'incl. traditional chinese medicine, yoga, coaching & workshops'
                    }
                },
                {
                    content: {
                        de: 'inkl. 24k Ear Seeds Akkupressur & 60 Minuten Osteopathie Behandlung',
                        en: 'incl. 24k ear seeds accupressure & 60 minutes osteopathy treatment'
                    }
                },
                {
                    content: {
                        de: 'exkl. An- und Abreise',
                        en: 'excl. arrival and departure'
                    }
                }
            ],
            attachements: [
                {
                    label: {
                        de: '<%a%>Jennifer Sengpiel<%/a%> – Life Coaching B.Sc., CAS Positive Psychologie, Yoga-Lehrerin 500h, Führungskraft',
                        en: '<%a%>Jennifer Sengpiel<%/a%> – Life Coaching B.Sc., CAS Positive Psychology, Yoga Teacher 500h, Manager'
                    },
                    link: 'https://www.jennifersengpiel.de'
                },
                {
                    label: {
                        de: '<%a%>Franziska Trebuth<%/a%> – Komplementärmedizin M.Sc., Heilpraktikerin, Praxis für Traditionelle Chinesische Medizin, Autorin',
                        en: '<%a%>Franziska Trebuth<%/a%> – Complementary Medicine M.Sc., alternative practitioner, practicioner for traditional chinese medicine, author'
                    },
                    link: 'https://franziska-trebuth.de'
                },
                {
                    label: {
                        de: '<%a%>Stefanie Kohles<%/a%> – Osteopathin, Heilpraktikerin, Yogatherapeutin, Spezialisierung',
                        en: '<%a%>Stefanie Kohles<%/a%> – Osteopath, alternative practitioner, yoga therapist, specialisation'
                    },
                    link: 'https://osteopathie-kohles.de'
                }
            ],
            booking: [
                {
                    label: {
                        de: 'Veranstaltung buchen',
                        en: 'Book event'
                    },
                    link: 'https://franziska-trebuth.de/aktuelles/'
                }
            ]
        }
    ];
    return events.filter(item => item.status !== 'Cancelled') as Event[];
}
