const interests = [
  {
    emoji: "🚒",
    text: "Blaulicht & Action",
    description: "Feuerwehr, Karting oder Kletterpark klingen spannend.",
    categories: ["action", "teamwork", "outdoor"],
    weights: { action: 4, teamwork: 2, outdoor: 2, sport: 1 }
  },
  {
    emoji: "🤝",
    text: "Menschen helfen",
    description: "Ich will andere unterstuetzen und freundlich mit Menschen umgehen.",
    categories: ["people", "care", "service"],
    weights: { people: 4, care: 3, service: 2, health: 1 }
  },
  {
    emoji: "🎨",
    text: "Kreativ sein",
    description: "Basteln, gestalten, Fotos, Medien oder Deko machen mir Spass.",
    categories: ["creative", "media", "communication"],
    weights: { creative: 4, media: 3, communication: 2, culture: 1 }
  },
  {
    emoji: "🐶",
    text: "Mit Tieren arbeiten",
    description: "Tierheim, Tierarztpraxis oder Bauernhof waeren mein Ding.",
    categories: ["animals", "care", "outdoor"],
    weights: { animals: 5, care: 2, outdoor: 1, health: 1 }
  },
  {
    emoji: "🌳",
    text: "Draussen arbeiten",
    description: "Ich will raus, mich bewegen und lieber praktisch arbeiten.",
    categories: ["outdoor", "nature", "active"],
    weights: { outdoor: 4, nature: 4, active: 2, physical: 1 }
  },
  {
    emoji: "🍕",
    text: "Essen & Gastro",
    description: "Baeckerei, Cafe, Eisdiele oder Imbiss passen gut zu mir.",
    categories: ["food", "service", "people"],
    weights: { food: 5, service: 3, people: 1, hygiene: 1, sales: 1 }
  },
  {
    emoji: "💻",
    text: "Computer & Technik",
    description: "Ich mag Technik, IT, Geraete oder konzentriertes Arbeiten am PC.",
    categories: ["technology", "technical", "office"],
    weights: { technology: 5, technical: 4, office: 2, support: 2 }
  },
  {
    emoji: "📚",
    text: "Bibliothek & Ruhe",
    description: "Ich arbeite gern ruhig, ordentlich und konzentriert.",
    categories: ["quiet", "library", "office"],
    weights: { quiet: 5, library: 4, office: 2, organization: 2 }
  },
  {
    emoji: "👶",
    text: "Kinder & Schule",
    description: "Kita, Schule, Basteln oder Lernen mit Kindern klingt gut.",
    categories: ["children", "education", "creative"],
    weights: { children: 5, education: 3, creative: 2, care: 1 }
  },
  {
    emoji: "🧾",
    text: "Ordnung & Organisation",
    description: "Sortieren, planen, vorbereiten und Ueberblick behalten kann ich gut.",
    categories: ["organization", "office", "administration"],
    weights: { organization: 5, administration: 3, office: 2, logistics: 1 }
  },
  {
    emoji: "📦",
    text: "Lager & Anpacken",
    description: "Kisten, Aufbau, Lager und koerperliche Aufgaben stoeren mich nicht.",
    categories: ["logistics", "physical", "organization"],
    weights: { logistics: 5, physical: 4, organization: 2, cleaning: 1 }
  },
  {
    emoji: "🛒",
    text: "Verkauf & Kundenkontakt",
    description: "Ich kann freundlich verkaufen, beraten oder Gaeste bedienen.",
    categories: ["sales", "service", "people"],
    weights: { sales: 5, service: 3, people: 2, food: 1 }
  },
  {
    emoji: "🧼",
    text: "Sauberkeit & Vorbereitung",
    description: "Putzen, Raeume vorbereiten und alles ordentlich machen passt fuer mich.",
    categories: ["cleaning", "physical", "service"],
    weights: { cleaning: 5, physical: 3, service: 2, hygiene: 2 }
  },
  {
    emoji: "⚕️",
    text: "Gesundheit & Praxis",
    description: "Praxis, Apotheke, Krankenhaus oder Empfang interessieren mich.",
    categories: ["health", "service", "people"],
    weights: { health: 5, service: 2, people: 2, organization: 1 }
  },
  {
    emoji: "🏃",
    text: "Sport & Bewegung",
    description: "Sportverein, Klettern, Karting oder aktive Aufgaben klingen gut.",
    categories: ["sport", "active", "outdoor"],
    weights: { sport: 5, active: 4, outdoor: 2, teamwork: 2 }
  },
  {
    emoji: "🎭",
    text: "Kultur & Museum",
    description: "Museum, Kulturorte, Ausstellungen oder Besucherarbeit gefallen mir.",
    categories: ["culture", "museum", "education"],
    weights: { culture: 5, museum: 4, education: 2, organization: 2 }
  },
  {
    emoji: "🎬",
    text: "Freizeit & Entertainment",
    description: "Kino, Freizeitpark oder Orte mit Gaesten und guter Stimmung passen.",
    categories: ["entertainment", "fun", "service"],
    weights: { entertainment: 5, fun: 4, service: 2, people: 2 }
  },
  {
    emoji: "📻",
    text: "Medien & Kommunikation",
    description: "Radio, Social Media, Texte oder Inhalte vorbereiten klingt spannend.",
    categories: ["media", "communication", "creative"],
    weights: { media: 5, communication: 4, creative: 2, technology: 1 }
  },
  {
    emoji: "🌷",
    text: "Pflanzen & Natur",
    description: "Garten, Blumen, Obst, Hof oder Naturarbeit waeren schoen.",
    categories: ["nature", "outdoor", "creative"],
    weights: { nature: 5, outdoor: 3, creative: 1, food: 1, sales: 1 }
  },
  {
    emoji: "🏛️",
    text: "Verwaltung & Rathaus",
    description: "Dokumente, Buero, Informationen und offizielle Aufgaben passen.",
    categories: ["administration", "organization", "people"],
    weights: { administration: 5, organization: 3, office: 2, people: 1 }
  },
  {
    emoji: "🧑‍🤝‍🧑",
    text: "Jugend & Projekte",
    description: "Jugendzentrum, Aktionen, Projekte und kreative Betreuung reizen mich.",
    categories: ["youth", "people", "creative"],
    weights: { youth: 5, people: 3, creative: 2, communication: 1 }
  },
  {
    emoji: "🧴",
    text: "Lebensmittel & Hygiene",
    description: "Ich kann sorgfaeltig mit Lebensmitteln und sauberen Arbeitsplaetzen umgehen.",
    categories: ["hygiene", "food", "service"],
    weights: { hygiene: 5, food: 3, service: 2, cleaning: 1 }
  },
  {
    emoji: "🔧",
    text: "Technisch & praktisch",
    description: "Werkstatt, Fahrradladen, Technik oder Reparaturen finde ich interessant.",
    categories: ["technical", "technology", "service"],
    weights: { technical: 5, technology: 3, service: 2, physical: 1 }
  },
  {
    emoji: "🛟",
    text: "Support & Helfen",
    description: "Ich erklaere gern, helfe bei Problemen und bleibe geduldig.",
    categories: ["support", "people", "technology"],
    weights: { support: 5, people: 2, technology: 2, service: 1 }
  }
];
