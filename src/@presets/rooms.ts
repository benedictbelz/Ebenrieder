import { Room } from '../@types/rooms';

export function getRooms(types: Room['type'][]): Room[] {
    return [
        {
            type: 'Apartment',
            title: {
                de: 'Austrag',
                en: 'Austrag'
            },
            link: 'austrag',
            booking: 'https://resavio.com/booking/de/2900/categories/9864',
            imagePreview: 'assets/media/rooms/austrag_01.jpg',
            imageGallery: [
                'assets/media/rooms/austrag_01.jpg',
                'assets/media/rooms/austrag_02.jpg',
                'assets/media/rooms/austrag_03.jpg',
                'assets/media/rooms/austrag_04.jpg',
                'assets/media/rooms/austrag_05.jpg',
                'assets/media/rooms/austrag_06.jpg',
                'assets/media/rooms/austrag_07.jpg',
                'assets/media/rooms/austrag_08.jpg'
            ],
            descriptionLong: {
                de: 'In unserer größten Wohnung auf zwei Ebenen befindet sich im unteren Teil die Wohnküche mit Sitzecke und einem Fenster mit Bankerl, das den Blick ins Dorf oder in die Landschaft freigibt. Die zwei Schlafzimmer im oberen Teil der Wohnung, in den du über eine schöne Holztreppe gelangst, orientieren sich nach Norden bzw. Westen. Die sichtbaren Holzbalken sorgen im Dach des Südzimmers für noch mehr Behaglichkeit, während du im Nordzimmer auf dem zusätzlichen Podest lümmeln und einen wunderschönen Blick in die Natur genießen kannst. Einen traumhaften Ausblick hast du auch in der Badewanne mit Panoramafenster.',
                en: 'In our largest two-level apartment, the lower part features a living kitchen with a sitting area and a window with a bench, offering views of the village or the landscape. The two bedrooms in the upper part of the apartment, which you reach via a beautiful wooden staircase, are oriented to the north and west. The visible wooden beams in the roof of the south room add to the coziness, while in the north room, you can lounge on the additional platform and enjoy a stunning view of nature. You also have a breathtaking view from the bathtub with a panoramic window.'
            },
            descriptionShort: {
                de: 'Wunderschöne Ausblicke, wohin das Auge reicht: Zwei Zimmer, Küche, Bad zum nie-wieder-verlassen-wollen.',
                en: "Wonderful views as far as the eye can see: two rooms, kitchen, bathroom you'll never want to leave again."
            },
            features: {
                quantityPeople: '1-4',
                squareMeter: 60,
                wifi: true,
                viewNature: true,
                viewVillage: true,
                workplace: true,
                hairDryer: true,
                bathtub: true,
                shower: true,
                diningTable: true,
                oven: true,
                stove: true,
                dishWasher: true,
                refrigerator: true
            },
        },
        {
            type: 'Apartment',
            title: {
                de: 'Heustock',
                en: 'Heustock'
            },
            link: 'heustock',
            booking: 'https://resavio.com/booking/de/2900/categories/9853',
            imagePreview: 'assets/media/rooms/heustock_01.jpg',
            imageGallery: [
                'assets/media/rooms/heustock_01.jpg',
                'assets/media/rooms/heustock_02.jpg',
                'assets/media/rooms/heustock_03.jpg',
                'assets/media/rooms/heustock_04.jpg',
                'assets/media/rooms/heustock_05.jpg',
                'assets/media/rooms/heustock_06.jpg'
            ],
            descriptionLong: {
                de: 'Auch die Wohnung im ehemaligen Heustock verfügt über zwei Schlafzimmer mit einladender Wohnküche und Panoramafenster. Im Nordzimmer kannst du im erhöhten Bett mit Sitzfenster nicht nur herrlich träumen sondern auch einen traumhaften Blick in die Natur genießen. Das Südzimmer wird mittels Fenster von der Wohnküche mit Esstisch separiert. Der blickdichte Vorhang verschafft dir Privatsphäre und ausreichend Rückzug.',
                en: 'The apartment in the former hayloft also has two bedrooms with an inviting living kitchen and panoramic windows. In the north room, you can not only dream wonderfully in the elevated bed with a window seat but also enjoy a stunning view of nature. The south room is separated from the living kitchen with a dining table by a window. An opaque curtain provides you with privacy and ample seclusion.'
            },
            descriptionShort: {
                de: 'Bäuerliche Gemütlichkeit mit herrlicher Aussicht und eklektischem Design verzaubern dich im Nu.',
                en: 'Rustic coziness with a magnificent view and eclectic design will enchant you in no time.'
            },
            features: {
                quantityPeople: '1-3',
                squareMeter: 40,
                wifi: true,
                viewNature: true,
                viewVillage: true,
                workplace: true,
                hairDryer: true,
                shower: true,
                diningTable: true,
                oven: true,
                stove: true,
                refrigerator: true
            },
        },
        {
            type: 'Apartment',
            title: {
                de: 'Obertenne',
                en: 'Obertenne'
            },
            link: 'obertenne',
            booking: 'https://resavio.com/booking/de/2900/categories/9863',
            imagePreview: 'assets/media/rooms/obertenne_01.jpg',
            imageGallery: [
                'assets/media/rooms/obertenne_01.jpg',
                'assets/media/rooms/obertenne_02.jpg',
                'assets/media/rooms/obertenne_03.jpg',
                'assets/media/rooms/obertenne_04.jpg',
                'assets/media/rooms/obertenne_05.jpg'
            ],
            descriptionLong: {
                de: 'Diese Wohnung befindet sich ganz oben über der ehemaligen Tenne. Durch die großen Fenster hast du einen freien Blick in den liebevoll gestalteten Garten. Die gegenüberliegende Fensterfront gewährt dir einen Blick auf die Galerie. Ein Rollo aus natürlichen Stoffen schützt dich vor neugierigen Blicken, wenn du deine Privatsphäre möchtest. Die kleinen, gemütlichen Schlafzimmer sind nach Westen ausgerichtet und befinden unter der Dachschräge. Die moderne Einrichtung mit traditionellen Stoffen verleiht einen ganz besonderen Charme. Blickfang in der pink gefliesten Wohnküche ist die Lampe von llot llov. Die voluminöse Silhouette und die Fransen der ≫Fran Tower≪ erinnern an eine Piñata: So wird das Zimmer zu einem besonderen Unikat.',
                en: 'This apartment is located at the very top above the former threshing floor. Through the large windows, you have an unobstructed view of the lovingly designed garden. The opposite window front offers a view of the gallery. A blind made of natural fabrics protects you from prying eyes when you want your privacy. The small, cozy bedrooms are oriented to the west and are located under the eaves. The modern furnishings with traditional fabrics give it a unique charm. The highlight in the pink-tiled living kitchen is the lamp from llot llov. The voluminous silhouette and the fringes of the ≫Fran Tower≪ resemble a piñata, making the room a unique gem.'
            },
            descriptionShort: {
                de: 'Mittendrin und doch für sich, Ausblicke ins Innen und Außen sorgen für eine besondere Aura.',
                en: 'In the midst of it all and yet to yourself, views both inside and outside create a special aura.'
            },
            features: {
                quantityPeople: '1-4',
                squareMeter: 55,
                wifi: true,
                viewGarden: true,
                workplace: true,
                hairDryer: true,
                shower: true,
                diningTable: true,
                oven: true,
                stove: true,
                dishWasher: true,
                refrigerator: true
            },            
        },
        {
            type: 'Apartment',
            title: {
                de: 'Dachboden',
                en: 'Dachboden'
            },
            imagePreview: 'assets/media/rooms/dachboden_01.jpg',
            imageGallery: [
                'assets/media/rooms/dachboden_01.jpg',
                'assets/media/rooms/dachboden_02.jpg',
                'assets/media/rooms/dachboden_03.jpg',
                'assets/media/rooms/dachboden_04.jpg',
                'assets/media/rooms/dachboden_05.jpg',
                'assets/media/rooms/dachboden_06.jpg',
                'assets/media/rooms/dachboden_07.jpg',
                'assets/media/rooms/dachboden_08.jpg',
                'assets/media/rooms/dachboden_09.jpg',
                'assets/media/rooms/dachboden_10.jpg'
            ],
            link: 'dachboden',
            booking: 'https://resavio.com/booking/de/2900/categories/9854',
            descriptionLong: {
                de: 'Im ehemaligen Dachboden wurden die alten Werkzeuge zur Flachsherstellung und große Holztruhen zur Leinenaufbewahrung gelagert. Ein kleines, holzverkleidetes Zimmer diente für so manchen Gast oder Mitarbeiter auf dem Bauernhof als Rückzugsort. Eine extra Portion Gemütlichkeit hast du im Alkoven-Bett im Südzimmer, im Nordzimmer schläfst du wohlig-geschützt unter den Dachbalken. In der pinken Wohnküche von Fantin kannst du dir jederzeit dein Lieblingsgericht zubereiten und im ausladenden Bad nach Lust und Laune duschen. Herzstück dieser Wohnung ist die lange, stoffbezogene Sitzbank, auf der du dich ausstrecken und ein gutes Buch lesen oder deinen Blick übers Dorf schweifen lassen kannst.',
                en: "In the former attic, old tools for flax production and large wooden chests for linen storage were kept. A small, wood-paneled room served as a retreat for many guests or farm workers. You have an extra dose of coziness in the alcove bed in the south room, while in the north room, you sleep snugly under the roof beams. In the pink living kitchen from Fantin, you can prepare your favorite dish anytime and shower to your heart's content in the spacious bathroom. The heart of this apartment is the long, fabric-covered bench, where you can stretch out, read a good book, or let your gaze wander over the village."
            },
            descriptionShort: {
                de: 'Aus diesem Alkoven-Bett wirst du nie mehr aufstehen wollen. Außer zum Duschen mit Blick in den Himmel.',
                en: "You'll never want to get out of this alcove bed. Except to shower with a view of the sky."
            },
            features: {
                quantityPeople: '1-3',
                squareMeter: 48,
                wifi: true,
                viewNature: true,
                workplace: true,

                hairDryer: true,
                shower: true,

                diningTable: true,
                oven: true,
                stove: true,
                refrigerator: true
            },
        },
        {
            type: 'Apartment',
            title: {
                de: 'Atelier',
                en: 'Atelier'
            },
            imagePreview: 'assets/media/rooms/atelier_01.jpg',
            imageGallery: [
                'assets/media/rooms/atelier_01.jpg',
                'assets/media/rooms/atelier_02.jpg',
                'assets/media/rooms/atelier_03.jpg',
                'assets/media/rooms/atelier_04.jpg',
                'assets/media/rooms/atelier_05.jpg',
                'assets/media/rooms/atelier_06.jpg',
                'assets/media/rooms/atelier_07.jpg',
                'assets/media/rooms/atelier_08.jpg',
                'assets/media/rooms/atelier_09.jpg'
            ],
            link: 'atelier',
            booking: 'https://resavio.com/booking/de/2900/categories/9865',
            descriptionLong: {
                de: 'Ein Juwel ist diese lichtdurchflutete Atelierwohnung. Dank klarer und schnörkelloser Ästhetik kommen deine Gedanken hier zur Ruhe. In der ehemaligen Scheune wurden früher Holz, Geräte und Heu gelagert. Um den traditionellen Charme zu bewahren, haben wir den Dachstuhl erhalten. Das offene Raumkonzept mit Sichtestrich und Fußbodenheizung verleihen der Wohnung Modernität. Neben dem Schlafzimmer befinden sich auf der Galerie weitere Ruhemöglichkeiten. Die Fenster Richtung Norden eignen sich ideal zum Malen. Inspiration bietet dir dabei der Rundumblick in den Garten und in die Landschaft. Das Badezimmer ist mit einer Badewanne und Dusche ausgestattet und lässt keine Wünsche offen. Auf deinem eigenen Balkon genießt du einen unverstellten Blick auf den Auerberg. Durch die separate Lage im Nebengebäude hast du im Atelier noch mehr Privatsphäre.',
                en: "This light-filled studio apartment is a gem. Its clear and unadorned aesthetic helps calm your thoughts. In the former barn, wood, tools, and hay were once stored. To preserve the traditional charm, we retained the roof structure. The open-concept space with exposed concrete floors and underfloor heating gives the apartment a modern touch. In addition to the bedroom, there are further resting areas on the gallery. The north-facing windows are perfect for painting. You'll find inspiration from the panoramic views of the garden and the landscape. The bathroom is equipped with a bathtub and shower, leaving nothing to be desired. On your private balcony, you can enjoy an unobstructed view of Auerberg. With its separate location in an outbuilding, the Atelier offers even more privacy."
            },
            descriptionShort: {
                de: 'Großzügigkeit auf allen Ebenen rauben dir den Atem. Doch auf deinem Balkon kannst du Luft holen, dich inspirieren lassen und loslegen, mit deiner Kreativität.',
                en: 'Generosity on all levels takes your breath away. But on your balcony, you can catch your breath, get inspired, and let your creativity flow.'
            },
            features: {
                quantityPeople: '2',
                squareMeter: 100,
                wifi: true,
                balcony: true,
                chimney: true,
                viewGarden: true,
                viewNature: true,
                workplace: true,
                hairDryer: true,
                bathtub: true,
                shower: true,
                diningTable: true,
                oven: true,
                stove: true,
                refrigerator: true
            },
        },
        {
            type: 'Room',
            title: {
                de: 'Stube',
                en: 'Stube'
            },
            link: 'stube',
            imagePreview: 'assets/media/rooms/stube_01.jpg',
            imageGallery: [
                'assets/media/rooms/stube_01.jpg',
                'assets/media/rooms/stube_02.jpg',
                'assets/media/rooms/stube_03.jpg',
                'assets/media/rooms/stube_04.jpg',
                'assets/media/rooms/stube_05.jpg',
                'assets/media/rooms/stube_06.jpg'
            ],
            descriptionLong: {
                de: 'Das heimelige Zimmer befindet sich im ältesten Teil des Gebäudes aus dem Jahr 1785. Die ehemalige ≫gute Stube≪ diente als wärmender Aufenthaltsort für die ganze Bauernfamilie. Wir haben die originalen Decken- und Wandtäfer von alter Farbe befreit und behutsam wieder eingebaut. Auch die Holzdielen haben wieder ihren alten Platz gefunden. Das Interieur ist zeitgenössisch, farbliche Kontraste setzen moderne Akzente und die verwendeten Stoffe erinnern an traditionelle Gewebe. Das farbenfrohe Bad ist ist mit einer Dusche ausgestattet. Im Doppelbett werden deine Träume war und der Lesesessel lädt zum Schmökern ein. Das Deckentäfer und ein Bauernfenster mit Blick auf den Auerberg und in bezaubernde Landschaft lassen dich das urige Zimmer nur ungern verlassen.',
                en: 'This cozy room is located in the oldest part of the building, dating back to 1785. The former ≫good parlor≪ served as a warm gathering place for the entire farming family. We have carefully restored the original ceiling and wall paneling, removed old paint and reinstalled them with care. The wooden floorboards have also returned to their original places. The interior design is contemporary, with color contrasts adding modern accents and fabrics reminiscent of traditional weaves. The colorful bathroom is equipped with a shower. Your dreams come true in the double bed, and the reading chair invites you to browse. The ceiling paneling and a farmhouse window overlooking Auerberg and enchanting landscapes make it hard to leave this quaint room.'
            },
            descriptionShort: {
                de: 'Unsere gute Stube lädt mit originalen Decken- und Wandtäfer zum heimeligen Verweilen ein.',
                en: 'Our cozy parlor, with its original ceiling and wall paneling, invites you to linger and feel at home.'
            },
            features: {
                quantityPeople: '1-2',
                squareMeter: 21,
                wifi: true,
                viewNature: true,
                hairDryer: true,
                shower: true
            },
        },
        {
            type: 'Room',
            title: {
                de: 'Kammer',
                en: 'Kammer'
            },
            link: 'kammer',
            imagePreview: 'assets/media/rooms/kammer_01.jpg',
            imageGallery: [
                'assets/media/rooms/kammer_01.jpg',
                'assets/media/rooms/kammer_02.jpg',
                'assets/media/rooms/kammer_03.jpg',
                'assets/media/rooms/kammer_04.jpg'
            ],
            descriptionLong: {
                de: 'Rustikal mit Natursteinwand kuschelt es sich in unserer Kammer am besten. Dieses Zimmer, das sich ebenfalls im ältesten Teil des Gebäudes aus dem Jahr 1785 befindet, besticht durch die alte Bruchsteinwand, die liebevoll freigelegt und mit Lehm geschlämmt wurde. So wird ein Stück Geschichte sichtbar und du kannst erahnen, wie aufwendig früher gebaut wurde. Das Zimmer mit eigenem Duschbad befindet sich in der ehemaligen Küche und Speisekammer. Hier hast du einen freien Blick auf die alten Deckenbalken und die Holzdielen wärmen deine Sohlen bei jedem Schritt. Das Doppelbett ist eingerahmt von einer geräumigen Schrankwand, an der stoffverkleideten Rückwand kannst du dich bequem anlehnen.',
                en: 'Rustically nestled against a natural stone wall, our Kammer offers the best in coziness. This room, also located in the oldest part of the building dating back to 1785, features an old rubble stone wall that has been lovingly exposed and plastered with clay. This reveals a piece of history, allowing you to imagine the intricate craftsmanship of the past. The room, with its own shower room, is situated in the former kitchen and pantry. Here, you have an unobstructed view of the old ceiling beams, and the wooden floorboards warm your feet with every step. The double bed is framed by a spacious wardrobe, and the fabric-covered back wall provides a comfortable place to lean back.'
            },
            descriptionShort: {
                de: 'Mit der Bruchsteinwand kuschelst du hier rustikal und gemütlich zugleich.',
                en: 'You cuddle up with the rubble stone wall, rustic and cozy at the same time.'
            },
            features: {
                quantityPeople: '1-2',
                squareMeter: 20,
                wifi: true,
                hairDryer: true,
                shower: true
            },
        },
        {
            type: 'Room',
            title: {
                de: 'Obere Stube',
                en: 'Obere Stube'
            },
            link: 'obere_stube',
            imagePreview: 'assets/media/rooms/obere_stube_01.jpg',
            imageGallery: ['assets/media/rooms/obere_stube_01.jpg', 'assets/media/rooms/obere_stube_02.jpg', 'assets/media/rooms/obere_stube_03.jpg'],
            descriptionLong: {
                de: 'Warme Holzdielen an den Fußsohlen, der Blick geht zum Auerberg und dem alten Brunnen vor dem Haus mit wohligem Klang: Willkommen in der Oberen Stube im ältesten Teil unseres Refugiums aus dem Jahr 1785. In dem ehemaligen Schlafzimmer des Bauernpaars im 1. Stock kam hinter Putz und Tapete eine alte Stützdecke zum Vorschein. Anders als das Täfer in der Stube hatte sie keine ästhetische Funktion, sondern diente als Trägerelement. Die Querbretter wurden schräg in die Nut der Trägerbalken eingefädelt und bilden so ein wunderschönes Deckenbild. Auch hier kommst du in den Genuss eines spannenden Interieurs mit zeitgenössischen Möbeln und einem komfortablen Duschbad mit Fussboden- und Wandheizung. Im Doppelbett kannst du deinen Träumen nachjagen und der lauschige Sessel lädt zum Lesen ein. Für farbliche Kontraste sorgen die Stoffe aus natürlichen Materialien, die an traditionelle Bauernstoffe erinnern.',
                en: "Warm wooden floorboards on the soles of your feet, a view of the Auerberg and the old well in front of the house with its pleasant sound: welcome to the Obere Stube in the oldest part of our refuge dating back to 1785. In the farmer couple's former bedroom on the first floor, an old supporting ceiling was revealed behind the plaster and wallpaper. Unlike the paneling in the living room, it had no aesthetic function, but served as a supporting element. The cross boards were threaded diagonally into the groove of the support beams, creating a beautiful ceiling pattern. Here, too, you can enjoy an exciting interior with contemporary furniture and a comfortable shower room with underfloor and wall heating. You can chase your dreams in the double bed and the cozy armchair invites you to read. Color contrasts are provided by the fabrics made from natural materials that are reminiscent of traditional farmhouse fabrics."
            },
            descriptionShort: {
                de: 'Unter der wunderschönen, freigelegten Stützdecke werden deine Träume wahr.',
                en: 'Your dreams will come true under the beautiful, exposed supporting ceiling.'
            },
            features: {
                quantityPeople: '1-2',
                squareMeter: 23,
                wifi: true,
                viewNature: true,
                hairDryer: true,
                shower: true
            },
        },
        {
            type: 'Room',
            title: {
                de: 'Gaaden',
                en: 'Gaaden'
            },
            link: 'gaaden',
            imagePreview: 'assets/media/rooms/gaaden_01.jpg',
            imageGallery: [
                'assets/media/rooms/gaaden_01.jpg',
                'assets/media/rooms/gaaden_02.jpg',
                'assets/media/rooms/gaaden_03.jpg',
                'assets/media/rooms/gaaden_04.jpg'
            ],
            descriptionLong: {
                de: 'Das Gaaden ist ein großzügiges Zimmer, das durch sein historisches Ambiente und die liebevolle Einrichtung besticht. Ursprüngliche Holzelemente und traditionelles Mobiliar verleihen dem Raum einen besonderen Charme. Hier kannst du in einer einzigartigen Umgebung entspannen und die ruhige Atmosphäre genießen.',
                en: 'The Gaaden is a spacious room that impresses with its historical ambience and loving furnishings. Original wooden elements and traditional furniture give the room a special charm. Here you can relax in unique surroundings and enjoy the peaceful atmosphere.'
            },
            descriptionShort: {
                de: 'Geräumiges Zimmer mit historischem Ambiente und liebevoller Einrichtung, ideal für eine entspannte Auszeit.',
                en: 'Spacious room with a historic ambience and lovely furnishings, ideal for a relaxing break.'
            },
            features: {
                quantityPeople: '1-2',
                squareMeter: 25,
                wifi: true,
                hairDryer: true,
                shower: true
            },
        },
        {
            type: 'Seminar Room',
            title: {
                de: 'Kuhstall',
                en: 'Kuhstall'
            },
            link: 'kuhstall',
            imagePreview: 'assets/media/rooms/kuhstall_01.jpg',
            imageGallery: [
                'assets/media/rooms/kuhstall_01.jpg',
                'assets/media/rooms/kuhstall_02.jpg',
                'assets/media/rooms/kuhstall_03.jpg',
                'assets/media/rooms/kuhstall_04.jpg',
                'assets/media/rooms/kuhstall_05.jpg',
                'assets/media/rooms/kuhstall_06.jpg'
            ],
            descriptionLong: {
                de: 'Genieße das besondere Flair unseres Seminar- und Yogaraums. Der Name kommt nicht von ungefähr, denn hier befand sich früher tatsächlich der Kuhstall. Der ausschließlich aus natürlichen Materialien gebaute Raum in idyllischer Umgebung strahlt eine erdende, beruhigende Kraft aus und lässt dich die Verbindung zu Mutter Natur und zu dir selbst auf besondere Art spüren. Auch der dunklere Lehmputz hat eine eine umarmende Wirkung und der eingearbeitete Glimmer lässt den Raum funkeln und glitzern. Die vorhandenen Yogamatten, Decken, Blöcke und Kissen laden dich ein, direkt mit deinem Flow zu starten.',
                en: 'Enjoy the special atmosphere of our seminar and yoga room. The name is not without reason, as this space actually used to be the cowshed. Built exclusively from natural materials in an idyllic setting, the room exudes grounding and calming energy, allowing you to feel a special connection to mother nature and to yourself. The darker clay plaster has an embracing effect, and the embedded mica makes the room sparkle and shimmer. The available yoga mats, blankets, blocks, and cushions invite you to start your flow right away.'
            },
            descriptionShort: {
                de: 'Dunkler Glimmer-Lehmputz glitzert dich in andere Sphären, auf den Boden der Tatsachen kommst du auf unseren Yogamatten wieder entspannt zurück.',
                en: "The dark shimmering clay plaster transports you to another realm, but you'll return to solid ground relaxed on our yoga mats."
            },
            features: {
                quantitySeats: '20',
                quantityYoga: '12',
                squareMeter: 55,
                wifi: true,
                beamer: true,
                chimney: true,
                soundSystem: true
            },
        },
        {
            type: 'Seminar Room',
            title: {
                de: 'Scheune',
                en: 'Scheune'
            },
            link: 'scheune',
            imagePreview: 'assets/media/rooms/scheune_01.jpg',
            imageGallery: [
                'assets/media/rooms/scheune_01.jpg',
                'assets/media/rooms/scheune_02.jpg',
                'assets/media/rooms/scheune_03.jpg',
                'assets/media/rooms/scheune_04.jpg',
                'assets/media/rooms/scheune_05.jpg',
                'assets/media/rooms/scheune_06.jpg',
                'assets/media/rooms/scheune_07.jpg',
                'assets/media/rooms/scheune_08.jpg',
                'assets/media/rooms/scheune_09.jpg',
                'assets/media/rooms/scheune_10.jpg'
            ],
            descriptionLong: {
                de: 'Ein Ort zum Erholen und Innehalten. Hier kannst du deine Seele baumeln lassen und dich erinnern, was im Leben wichtig ist, Freude und Kraft tanken und wieder bei dir ankommen. Ob Yoga, Meeting oder Seminar: Hier hast du Platz für Ideen und Kreationen oder einfach zum Runterkommen und Ausruhen. Unsere geräumige Scheune ist die ideale Umgebung für verschiedene Anlässe. Die großen Fensterflächen mit Ganzglasecke holen die malerische Landschaft des Allgäus direkt in die Scheune. Der wunderschön gekachelte Kamin in der Raummitte sorgt für zusätzlichen Komfort und gemütliche Stimmung.',
                en: "A place to relax and pause. Here, you can unwind and remember what's important in life, recharge joy and strength, and reconnect with yourself. Whether for yoga, meetings, or seminars: here, you have space for ideas and creations, or simply to unwind and rest. Our spacious barn is the ideal setting for various occasions. The large windows with a panoramic glass corner bring the picturesque landscape of the Allgäu directly into the barn. The beautifully tiled fireplace in the center of the room adds extra comfort and cozy atmosphere."
            },
            descriptionShort: {
                de: 'Große Fensterflächen holen das Allgäu in den Raum, Ideen können fließen, Gedanken, vom Kamin erwärmt, sich frei entfalten.',
                en: 'Large windows bring the Allgäu into the room, ideas can flow, thoughts warmed by the fireplace can unfold freely.'
            },
            features: {
                quantitySeats: '16',
                quantityYoga: '18',
                squareMeter: 90,
                wifi: true,
                chimney: true,
                soundSystem: true
            },            
        },
        {
            type: 'Wellness',
            title: {
                de: 'Sauna',
                en: 'Sauna'
            },
            link: 'sauna',
            imagePreview: 'assets/media/rooms/sauna_01.jpg',
            imageGallery: [
                'assets/media/rooms/sauna_01.jpg',
                'assets/media/rooms/sauna_02.jpg',
                'assets/media/rooms/sauna_03.jpg',
                'assets/media/rooms/sauna_04.jpg',
                'assets/media/rooms/sauna_05.jpg',
                'assets/media/rooms/sauna_06.jpg',
                'assets/media/rooms/sauna_07.jpg',
                'assets/media/rooms/sauna_08.jpg'
            ],
            descriptionLong: {
                de: 'Die Sauna bietet einen perfekten Rückzugsort zum Entspannen und Erholen. Neben dem klassischen Saunaraum stehen bequeme Liegestühle zur Verfügung, um sich zwischen den Saunagängen zu erholen. Ein kleiner Pool zum Abkühlen und ein holzbefeuerter Hottub runden das Wellness-Erlebnis ab und laden zur völligen Entspannung ein.',
                en: 'The Sauna offers a perfect retreat to relax and unwind. In addition to the classic sauna room, comfortable loungers are available for relaxing between sauna sessions. A small pool for cooling off and a wood-fired hot tub round off the wellness experience and invite you to relax completely.'
            },
            descriptionShort: {
                de: 'Ein erholsamer Rückzugsort, der Körper und Geist in Einklang bringt.',
                en: 'A relaxing retreat that brings body and soul into harmony.'
            },
            features: {
                wifi: true,
                viewGarden: true,
                sauna: true,
                pool: true,
                whirlpool: true,
                deckChairs: true,
                shower: true
            },
        },
        /* {
            type: 'Kitchen',
            title: {
                de: 'Kochschule',
                en: 'Cookery School'
            },
            link: 'kochschule',
            imagePreview: 'assets/media/rooms/kochschule_01.jpg',
            imageGallery: [
                'assets/media/rooms/kochschule_01.jpg',
                'assets/media/rooms/kochschule_02.jpg',
                'assets/media/rooms/kochschule_03.jpg',
                'assets/media/rooms/kochschule_04.jpg',
                'assets/media/rooms/kochschule_05.jpg',
                'assets/media/rooms/kochschule_06.jpg',
                'assets/media/rooms/kochschule_07.jpg',
                'assets/media/rooms/kochschule_08.jpg',
                'assets/media/rooms/kochschule_09.jpg',
                'assets/media/rooms/kochschule_10.jpg',
                'assets/media/rooms/kochschule_11.jpg',
                'assets/media/rooms/kochschule_12.jpg',
                'assets/media/rooms/kochschule_13.jpg',
                'assets/media/rooms/kochschule_14.jpg',
                'assets/media/rooms/kochschule_15.jpg',
                'assets/media/rooms/kochschule_16.jpg',
                'assets/media/rooms/kochschule_17.jpg',
                'assets/media/rooms/kochschule_18.jpg',
                'assets/media/rooms/kochschule_19.jpg'
            ],
            descriptionLong: {
                de: 'Willkommen in der Ebenrieder Kochschule, wo Kochen nicht nur eine Kunst, sondern ein gemeinsames Erlebnis ist! In unserer gemütlichen Kochschule erwartet dich ein großer Holztisch mit traditionellen Wirtshausstühlen, an dem bis zu 12 Personen Platz finden – ideal für gesellige Runden voller Genuss und Inspiration.\n\nDas Herzstück der Kochschule ist unsere moderne Kochinsel, die mit allem ausgestattet ist, was das Herz eines Kochs höherschlagen lässt. Zwei Induktionsfelder und zwei Gaskochfelder bieten Dir reichlich Platz, um Dich kulinarisch auszutoben. Mit dem Gaggenau-Dampfgarer gelingen Dir perfekte Garstufen, während der großzügige Kühlschrank mit integriertem Eisfach an heißen Tagen für erfrischende Drinks sorgt. Und dank der Warmhalteschublade bleiben Deine Kreationen bis zum Servieren auf perfekter Temperatur.',
                en: 'Welcome to the Ebenrieder cookery school, where cooking is not just an art, but a shared experience! In our cosy cookery school, a large wooden table with traditional pub chairs awaits you, seating up to 12 people - ideal for convivial get-togethers full of enjoyment and inspiration.\n\nThe centrepiece of the cookery school is our modern cooking island, which is equipped with everything a chef\'s heart desires. Two induction hobs and two gas hobs offer you plenty of space to let off steam in the kitchen. The Gaggenau steam oven allows you to achieve perfect cooking results, while the spacious fridge with integrated ice compartment ensures refreshing drinks on hot days. And thanks to the warming drawer, your creations will stay at the perfect temperature until you serve them.'
            },
            descriptionShort: {
                de: 'Willkommen in der Ebenrieder Kochschule, wo Kochen nicht nur eine Kunst, sondern ein gemeinsames Erlebnis ist.',
                en: 'Welcome to the Ebenrieder cookery school, where cooking is not just an art, but a shared experience.'
            },
            features: {
                wifi: true,
                viewGarden: true,
                sauna: true,
                pool: true,
                whirlpool: true,
                deckChairs: true,
                shower: true
            },
        },
        {
            type: 'Kitchen',
            title: {
                de: 'Gastroküche',
                en: 'Gastro Kitchen'
            },
            link: 'gastrokueche',
            imagePreview: 'assets/media/rooms/gastrokueche_04.jpg',
            imageGallery: [
                'assets/media/rooms/gastrokueche_01.jpg',
                'assets/media/rooms/gastrokueche_02.jpg',
                'assets/media/rooms/gastrokueche_03.jpg',
                'assets/media/rooms/gastrokueche_04.jpg',
                'assets/media/rooms/gastrokueche_05.jpg',
                'assets/media/rooms/gastrokueche_06.jpg',
                'assets/media/rooms/gastrokueche_07.jpg',
                'assets/media/rooms/gastrokueche_08.jpg',
                'assets/media/rooms/gastrokueche_09.jpg',
                'assets/media/rooms/gastrokueche_10.jpg',
                'assets/media/rooms/gastrokueche_11.jpg',
            ],
            descriptionLong: {
                de: 'Direkt neben der Kochschule wartet unsere Gastroküche auf Dich. Durch die Fenster kannst Du jederzeit den Kontakt zu Deinen Gästen halten – das sorgt für eine offene und lebendige Atmosphäre. Die Gastroküche ist ein wahres Paradies für Profis: ausgestattet mit einem Rational-Dampfgarer, Rational-Multifunktionskocher, Kühlschränken und -schubladen mit viel Stauraum, einem Tiefkühlschrank und Warmhalteschubladen. Und wenn es um innovative Technik geht, erfüllen Thermomix, Pacojet und Vitamix selbst anspruchsvollste Wünsche.\n\nOb Du ein Teamevent planst, einen Kochkurs veranstalten möchtest oder die Räume für Deine eigenen kulinarischen Projekte anmieten willst – die Ebenrieder Kochschule und Gastroküche bieten Dir die perfekte Mischung aus Funktionalität, Charme und modernster Ausstattung.',
                en: 'Our gastro kitchen awaits you right next to the cookery school. You can keep in touch with your guests at all times through the windows - this ensures an open and lively atmosphere. The gastro kitchen is a true paradise for professionals: equipped with a Rational steam cooker, Rational multifunctional cooker, refrigerators and drawers with plenty of storage space, a freezer and warming drawers. And when it comes to innovative technology, Thermomix, Pacojet and Vitamix fulfil even the most demanding wishes.\n\nWhether you are planning a team event, want to organise a cookery course or hire the rooms for your own culinary projects - the Ebenrieder cookery school and gastro kitchen offer you the perfect mix of functionality, charm and state-of-the-art equipment.'
            },
            descriptionShort: {
                de: 'Die Gastroküche sorgt für eine offene und lebendige Atmosphäre und ist ein wahres Paradies für Profis.',
                en: 'The gastro kitchen provides an open and lively atmosphere and is a true paradise for professionals.'
            },
            features: {
                wifi: true,
                viewGarden: true,
                sauna: true,
                pool: true,
                whirlpool: true,
                deckChairs: true,
                shower: true
            },
        },
        {
            type: 'Kitchen',
            title: {
                de: 'Außenküche',
                en: 'Outdoor Kitchen'
            },
            link: 'aussenkueche',
            imagePreview: 'assets/media/rooms/aussenkueche_01.jpg',
            imageGallery: [
                'assets/media/rooms/aussenkueche_01.jpg',
                'assets/media/rooms/aussenkueche_02.jpg',
                'assets/media/rooms/aussenkueche_03.jpg'
            ],
            descriptionLong: {
                de: 'Unsere Außenküche verbindet Funktionalität, Genuss und Naturerlebnis auf harmonische Weise. Ein Ort, der Kochen, Entspannen und Gemeinschaft mühelos miteinander vereint. Mit ihrer langen Arbeitsfläche und dem imposanten Grill ist sie der perfekte Ort für kulinarische Erlebnisse im Freien. Der Grill verfügt über zwei Kammern, verschiedene Roste und Planchas, sodass sich jedes Grillgut optimal zubereiten lässt.\n\nReichlich Platz zum Vorbereiten und Abstellen sorgt dafür, dass alles griffbereit ist, während die nahestehenden Tische zum gemütlichen Verweilen einladen. Für den nötigen Komfort gibt es Sonnenschirme, die angenehmen Schatten spenden, sowie einen Stromanschluss und ein praktisches Waschbecken, das die Arbeit erleichtert.\n\nVon der erhöhten Position der Terrasse aus bietet sich ein traumhafter Blick auf den Garten und die umliegende Landschaft. Hier wird das Grillen nicht nur zum kulinarischen, sondern auch zum visuellen Erlebnis. Für alle, die Frische lieben, ist der Weg zu den Kräuter- und Gemüsebeeten nur ein paar Schritte entfernt – für Zutaten, die direkt auf dem Grill landen können.',
                en: 'Our outdoor kitchen harmoniously combines functionality, enjoyment and the experience of nature. A place that effortlessly combines cooking, relaxing and socialising. With its long work surface and impressive barbecue, it is the perfect place for outdoor culinary experiences. The barbecue has two chambers, various grates and planchas, so that any food can be cooked to perfection.\n\nPlenty of space for preparation and storage ensures that everything is ready to hand, while the nearby tables invite you to linger in comfort. For the necessary comfort, there are parasols that provide pleasant shade, as well as a power connection and a practical sink that makes work easier.\n\nThe elevated position of the terrace offers a fantastic view of the garden and the surrounding landscape. Here, barbecuing is not only a culinary experience, but also a visual one. For those who love freshness, the path to the herb and vegetable beds is just a few steps away - for ingredients that can end up directly on the barbecue.'
            },
            descriptionShort: {
                de: 'Ein Ort, der Kochen, Entspannen und Gemeinschaft mühelos miteinander vereint. Mit ihrer langen Arbeitsfläche und dem imposanten Grill ist sie der perfekte Ort für kulinarische Erlebnisse im Freien.',
                en: 'A place that effortlessly combines cooking, relaxing and socialising. With its long work surface and impressive barbecue, it is the perfect place for outdoor culinary experiences.'
            },
            features: {
                wifi: true,
                viewGarden: true,
                sauna: true,
                pool: true,
                whirlpool: true,
                deckChairs: true,
                shower: true,
            },
        } */
    ].filter(item => types.includes(item.type as Room['type'])) as Room[];
}

export function getFeatureImage(feature: keyof Room['features']): string {
    if (feature === 'balcony') {
        return 'feature_balcony';
    } else if (feature === 'bathtub') {
        return 'feature_bathtub';
    } else if (feature === 'beamer') {
        return 'feature_beamer';
    } else if (feature === 'chimney') {
        return 'feature_chimney';
    } else if (feature === 'deckChairs') {
        return 'feature_deck_chairs';
    } else if (feature === 'diningTable') {
        return 'feature_dining_table';
    } else if (feature === 'dishWasher') {
        return 'feature_dish_washer';
    } else if (feature === 'fireplace') {
        return 'feature_fireplace';
    } else if (feature === 'grill') {
        return 'feature_grill';
    } else if (feature === 'hairDryer') {
        return 'feature_hair_dryer';
    } else if (feature === 'hammock') {
        return 'feature_hammock';
    } else if (feature === 'oven') {
        return 'feature_oven';
    } else if (feature === 'pets') {
        return 'feature_pets';
    } else if (feature === 'pool') {
        return 'feature_pool';
    } else if (feature === 'quantityPeople') {
        return 'feature_quantity_people';
    } else if (feature === 'quantitySeats') {
        return 'feature_quantity_seats';
    } else if (feature === 'quantityYoga') {
        return 'feature_quantity_yoga';
    } else if (feature === 'refrigerator') {
        return 'feature_refrigerator';
    } else if (feature === 'sauna') {
        return 'feature_sauna';
    } else if (feature === 'shower') {
        return 'feature_shower';
    } else if (feature === 'soundSystem') {
        return 'feature_sound_system';
    } else if (feature === 'squareMeter') {
        return 'feature_square_meter';
    } else if (feature === 'stove') {
        return 'feature_stove';
    } else if (feature === 'viewGarden') {
        return 'feature_view_garden';
    } else if (feature === 'viewNature') {
        return 'feature_view_nature';
    } else if (feature === 'viewVillage') {
        return 'feature_view_village';
    } else if (feature === 'whirlpool') {
        return 'feature_whirlpool';
    } else if (feature === 'wifi') {
        return 'feature_wifi';
    } else if (feature === 'workplace') {
        return 'feature_workplace';
    } else {
        return '';
    }
}
