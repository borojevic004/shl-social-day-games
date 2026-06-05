const jobs = [

{
id:1,
title:"Einsatzkraft bei der Feuerwehr",
image:"images/fire_station.jpg",
categories:["action","teamwork","outdoor"],
description:"Unterstütze die Feuerwehr bei Vorbereitung, Ordnung und kleinen Aufgaben.",
tasks:[
"Ausrüstung kontrollieren",
"Geräte sortieren",
"Fahrzeuge vorbereiten"
]
},

{
id:2,
title:"Unterstützung in der Bäckerei",
image:"images/bakery.jpg",
categories:["food","teamwork","service"],
description:"Hilf in einer Bäckerei beim Vorbereiten und Verkaufen.",
tasks:[
"Backwaren einräumen",
"Regale auffüllen",
"Kundenbereich sauber halten"
]
},

{
id:3,
title:"Servicekraft im Dönerladen",
image:"images/doner.jpg",
categories:["food","service","people"],
description:"Unterstütze das Team im Imbiss oder Dönerladen.",
tasks:[
"Gemüse vorbereiten",
"Bestellungen vorbereiten",
"Arbeitsplatz sauber halten"
]
},

{
id:4,
title:"Gärtner*in",
image:"images/gardening.jpg",
categories:["nature","outdoor","active"],
description:"Arbeite draußen mit Pflanzen und Natur.",
tasks:[
"Gießen",
"Pflanzen umtopfen",
"Wege pflegen"
]
},

{
id:5,
title:"Kinderbetreuung",
image:"images/kita.jpg",
categories:["children","people","creative"],
description:"Hilf Kindern beim Spielen und Basteln.",
tasks:[
"Spiele vorbereiten",
"Bastelmaterial sortieren",
"Beim Essen helfen"
]
},

{
id:6,
title:"Unterstützung auf dem Bauernhof",
image:"images/farm.jpg",
categories:["nature","animals","outdoor"],
description:"Hilf auf dem Bauernhof bei alltäglichen Arbeiten mit Tieren und Natur.",
tasks:[
"Tiere füttern",
"Ställe reinigen",
"Heu und Futter vorbereiten"
]
},

{
id:7,
title:"Tierpflegekraft",
image:"images/feeding_animals.jpg",
categories:["animals","care","outdoor"],
description:"Unterstütze bei der Versorgung und Fütterung von Tieren.",
tasks:[
"Tiere füttern",
"Wasser auffüllen",
"Gehege kontrollieren"
]
},

{
id:8,
title:"Erntehilfe auf einem Obsthof",
image:"images/fruit_harvest.jpg",
categories:["nature","outdoor","food"],
description:"Hilf bei der Ernte von Obst und saisonalen Früchten.",
tasks:[
"Obst pflücken",
"Sortieren der Früchte",
"Kisten vorbereiten"
]
},

{
id:9,
title:"Servicekraft in der Bibliothek",
image:"images/library.jpg",
categories:["quiet","service","organization"],
description:"Unterstütze in der Bibliothek bei Ordnung und Organisation.",
tasks:[
"Bücher einsortieren",
"Regale ordnen",
"Besucher helfen"
]
},

{
id:10,
title:"Servicekraft im Fahrradladen",
image:"images/bike_shop.jpg",
categories:["service","technical","people"],
description:"Hilf im Fahrradladen bei einfachen Aufgaben rund um Fahrräder.",
tasks:[
"Fahrräder reinigen",
"Zubehör sortieren",
"Kunden unterstützen"
]
},

{
id:11,
title:"Servicekraft im Hotel",
image:"images/hotel.jpg",
categories:["service","people","organization"],
description:"Unterstütze im Hotel bei täglichen Abläufen und Gästebetreuung.",
tasks:[
"Zimmer vorbereiten",
"Reinigung unterstützen",
"Gäste empfangen"
]
},

{
id:12,
title:"Assistenz in der Zahnarztpraxis",
image:"images/dentist.jpg",
categories:["health","service","people"],
description:"Hilf in einer Zahnarztpraxis bei organisatorischen Aufgaben.",
tasks:[
"Patienten empfangen",
"Termine organisieren",
"Material vorbereiten"
]
},

{
id:13,
title:"Assistenz in der Apotheke",
image:"images/pharmacy.jpg",
categories:["health","service","organization"],
description:"Unterstütze in der Apotheke bei Ordnung und Kundenservice.",
tasks:[
"Regale sortieren",
"Produkte einräumen",
"Kunden helfen"
]
},

{
id:14,
title:"Redaktionsassistenz beim Radiosender",
image:"images/radio_station.jpg",
categories:["media","creative","communication"],
description:"Einblick in die Arbeit eines Radiosenders und Medienproduktion.",
tasks:[
"Material vorbereiten",
"Sendungen unterstützen",
"Inhalte sortieren"
]
},

{
id:15,
title:"Gästebetreuung in der Miniaturmuseum",
image:"images/miniature_museum.jpg",
categories:["culture","museum","organization"],
description:"Hilf im Museum bei Ausstellung und Besucherbetreuung.",
tasks:[
"Exponate ordnen",
"Besucher informieren",
"Räume vorbereiten"
]
},

{
id:16,
title:"Gästebetreuung in der Karting-Arena",
image:"images/karting.jpg",
categories:["sport","action","outdoor"],
description:"Unterstütze in einer Karting-Arena bei Organisation und Ablauf.",
tasks:[
"Helme vorbereiten",
"Bahnbetreuung",
"Gäste einweisen"
]
},

// DODATNI POSLOVI 

{
id:17,
title:"Pflegefachkraft",
image:"images/senior_home.jpg",
categories:["care","people","service"],
description:"Unterstütze ältere Menschen im Alltag im Seniorenheim.",
tasks:[
"Beim Essen helfen",
"Gespräche führen",
"Alltagsunterstützung"
]
},

{
id:18,
title:"Tierarztpraxis-Hilfe",
image:"images/vet.jpg",
categories:["animals","health","care"],
description:"Hilf in einer Tierarztpraxis bei einfachen Aufgaben.",
tasks:[
"Tiere beruhigen",
"Termine vorbereiten",
"Material reinigen"
]
},

{
id:19,
title:"Social-Media-Assistenz",
image:"images/social_media.jpg",
categories:["media","creative","communication"],
description:"Unterstütze bei Social-Media-Content und Medienarbeit.",
tasks:[
"Posts vorbereiten",
"Inhalte sortieren",
"Recherche durchführen"
]
},

{
id:20,
title:"Bürohilfe",
image:"images/office.jpg",
categories:["office","organization","service"],
description:"Hilf im Büro bei organisatorischen Aufgaben.",
tasks:[
"Dokumente sortieren",
"Telefonnotizen",
"Dateien verwalten"
]
},

{
id:21,
title:"Fachkraft für Lagerlogistik",
image:"images/warehouse.jpg",
categories:["logistics","physical","organization"],
description:"Unterstütze im Lager bei Sortierung und Versand.",
tasks:[
"Waren sortieren",
"Paket vorbereiten",
"Lagerordnung"
]
},

{
id:22,
title:"Verkaufskraft am Stand",
image:"images/market_stand.jpg",
categories:["sales","people","service"],
description:"Arbeite an einem Verkaufsstand auf Märkten oder Events.",
tasks:[
"Produkte verkaufen",
"Kunden bedienen",
"Stand aufbauen"
]
},

{
id:23,
title:"Verkaufskraft im Laden",
image:"images/shop.jpg",
categories:["sales","service","people"],
description:"Hilf im Einzelhandel bei Verkauf und Organisation.",
tasks:[
"Regale auffüllen",
"Kunden beraten",
"Kasse unterstützen"
]
},

{
id:24,
title:"Reinigungskraft",
image:"images/cleaning.jpg",
categories:["cleaning","service","physical"],
description:"Unterstütze bei Reinigungsarbeiten in verschiedenen Bereichen.",
tasks:[
"Räume reinigen",
"Böden putzen",
"Müll entsorgen"
]
},

{
id:25,
title:"Hochseilgarten-Betreuung",
image:"images/climbing_park.jpg",
categories:["sport","outdoor","action"],
description:"Hilf im Kletterpark bei Betreuung und Sicherheit.",
tasks:[
"Sicherheitsausrüstung prüfen",
"Gäste einweisen",
"Anlagen kontrollieren"
]
},
/*
{
id:26,
title:"Küchenhilfe",
image:"images/food_work.jpg",
categories:["food","service","hygiene"],
description:"Unterstütze bei der Verarbeitung und Vorbereitung von Lebensmitteln.",
tasks:[
"Zutaten vorbereiten",
"Hygiene beachten",
"Arbeitsbereich sauber halten"
]
},
*/

/*
{
id:27,
title:"Gästebetreuung im Freizeitpark",
image:"images/amusement_park.jpg",
categories:["fun","service","people"],
description:"Hilf im Freizeitpark bei Betreuung und Organisation.",
tasks:[
"Gäste betreuen",
"Attraktionen vorbereiten",
"Sicherheit unterstützen"
]
},

{
id:28,
title:"Trainingsassistenz im Sportverein",
image:"images/sports_club.jpg",
categories:["sport","teamwork","active"],
description:"Unterstütze in einem Sportverein bei Training und Organisation.",
tasks:[
"Ausrüstung vorbereiten",
"Training unterstützen",
"Platz aufbauen"
]
},

{
id:29,
title:"Pädagogische Betreuung im Jugendzentrum",
image:"images/youth_center.jpg",
categories:["youth","people","creative"],
description:"Hilf im Jugendzentrum bei Aktivitäten und Projekten.",
tasks:[
"Spiele organisieren",
"Events vorbereiten",
"Betreuung unterstützen"
]
},
*/
{
id:30,
title:"Servicekraft im Café",
image:"images/cafe.jpg",
categories:["food","service","people"],
description:"Unterstütze im Café bei Service und Vorbereitung.",
tasks:[
"Getränke servieren",
"Tische reinigen",
"Kunden bedienen"
]
},
/*
{
id:31,
title:"Servicekraft in der Eisdiele",
image:"images/ice_cream.jpg",
categories:["food","service","sales"],
description:"Hilf in der Eisdiele beim Verkauf und Service.",
tasks:[
"Eis servieren",
"Kasse bedienen",
"Reinigung"
]
},
*/
{
id:32,
title:"Unterstützung im Blumenladen",
image:"images/flower_shop.jpg",
categories:["creative","sales","nature"],
description:"Unterstütze im Blumenladen bei Verkauf und Gestaltung.",
tasks:[
"Blumen arrangieren",
"Kunden beraten",
"Sträuße vorbereiten"
]
},
/*
{
id:33,
title:"Tierpflegekraft",
image:"images/animal_shelter.jpg",
categories:["animals","care","service"],
description:"Hilf im Tierheim bei Pflege und Betreuung der Tiere.",
tasks:[
"Tiere füttern",
"Käfige reinigen",
"Spazieren gehen"
]
},

{
id:34,
title:"Assistenz im Kindergarten",
image:"images/crafts.jpg",
categories:["children","creative","care"],
description:"Unterstütze Kinder beim Basteln und kreativen Aktivitäten.",
tasks:[
"Bastelmaterial vorbereiten",
"Beim Basteln helfen",
"Aufräumen"
]
},

{
id:35,
title:"Lernbegleitung",
image:"images/school.jpg",
categories:["education","people","organization"],
description:"Hilf in der Schule bei Unterrichts- und Organisationsaufgaben.",
tasks:[
"Material vorbereiten",
"Lehrer unterstützen",
"Ordnung halten"
]
},
*/
{
id:36,
title:"Info-Service im Krankenhaus",
image:"images/hospital.jpg",
categories:["health","service","people"],
description:"Unterstütze im Empfangsbereich eines Krankenhauses.",
tasks:[
"Patienten begrüßen",
"Termine koordinieren",
"Informationen geben"
]
},

{
id:37,
title:"Bürgerbüro-Service",
image:"images/townhall.jpg",
categories:["administration","organization","people"],
description:"Hilf im Rathaus bei einfachen Verwaltungsaufgaben.",
tasks:[
"Dokumente sortieren",
"Bürger informieren",
"Unterlagen vorbereiten"
]
},

{
id:38,
title:"Technik-Support",
image:"images/it_support.jpg",
categories:["technology","support","office"],
description:"Unterstütze bei einfachen IT- und Technikaufgaben.",
tasks:[
"Geräte einrichten",
"Fehler melden",
"Support leisten"
]
},
/*
{
id:39,
title:"Besucherbetreuung im Museum",
image:"images/museum.jpg",
categories:["culture","education","organization"],
description:"Hilf im Museum bei Ausstellungen und Besuchern.",
tasks:[
"Exponate erklären",
"Räume vorbereiten",
"Besucher betreuen"
]
},
*/
{
id:40,
title:"Servicekraft im Kino",
image:"images/cinema.jpg",
categories:["entertainment","service","people"],
description:"Unterstütze im Kino bei Organisation und Gästeservice.",
tasks:[
"Tickets kontrollieren",
"Saal vorbereiten",
"Gäste informieren"
]
}

]
