const interests = [
  {
    id: "action",
    emoji: "🚒",
    text: "Blaulicht & Action",
    description: "Du magst es spannend, bist gerne in Bewegung und findest Feuerwehr, Rettung oder Klettern interessant.",
    weights: {
      action: 5,
      safety: 4,
      teamwork: 3,
      responsibility: 3,
      physical: 2,
      outdoor: 2,
      health: 1
    }
  },
  {
    id: "helping_people",
    emoji: "🤝",
    text: "Menschen helfen",
    description: "Du bist hilfsbereit, hörst gut zu und möchtest anderen Menschen den Tag ein bisschen leichter machen.",
    weights: {
      people: 5,
      care: 5,
      support: 4,
      patience: 3,
      communication: 3,
      responsibility: 2,
      health: 1
    }
  },
  {
    id: "creative",
    emoji: "🎨",
    text: "Kreativ sein",
    description: "Du gestaltest gerne, hast viele Ideen und magst Aufgaben mit Farben, Fotos, Deko, Medien oder Design.",
    weights: {
      creative: 5,
      design: 4,
      media: 3,
      detail: 3,
      culture: 2,
      communication: 2,
      plants: 1
    }
  },
  {
    id: "animals",
    emoji: "🐶",
    text: "Mit Tieren arbeiten",
    description: "Du magst Tiere, bist geduldig und kannst dir vorstellen, beim Füttern, Pflegen oder Saubermachen zu helfen.",
    weights: {
      animals: 5,
      care: 4,
      patience: 3,
      cleaning: 3,
      outdoor: 2,
      physical: 2,
      health: 1
    }
  },
  {
    id: "outdoor",
    emoji: "🌳",
    text: "Draußen arbeiten",
    description: "Du bist gerne an der frischen Luft, bewegst dich gern und hast kein Problem damit, auch mal anzupacken.",
    weights: {
      outdoor: 5,
      nature: 5,
      physical: 4,
      active: 3,
      plants: 2,
      animals: 1,
      cleaning: 1
    }
  },
  {
    id: "food",
    emoji: "🍕",
    text: "Essen & Gastro",
    description: "Du findest Essen, Backen oder Getränke spannend und kannst dir vorstellen, in Café, Küche, Bäckerei oder Imbiss mitzuhelfen.",
    weights: {
      food: 5,
      hygiene: 5,
      service: 4,
      customerContact: 3,
      cleaning: 3,
      sales: 2,
      teamwork: 2,
      fastPaced: 2
    }
  },
  {
    id: "technology",
    emoji: "💻",
    text: "Computer & Technik",
    description: "Du interessierst dich für Computer, Geräte, Webseiten oder Technik und arbeitest gerne genau und konzentriert.",
    weights: {
      technology: 5,
      technical: 4,
      detail: 3,
      quiet: 3,
      office: 2,
      media: 2,
      problemSolving: 2
    }
  },
  {
    id: "quiet",
    emoji: "📚",
    text: "Bibliothek & Ruhe",
    description: "Du magst ruhige Orte, arbeitest gerne ordentlich und findest Bücher, Sortieren oder konzentrierte Aufgaben gut.",
    weights: {
      quiet: 5,
      organization: 5,
      detail: 4,
      library: 4,
      office: 3,
      patience: 2,
      service: 1
    }
  },
  {
    id: "children_school",
    emoji: "👶",
    text: "Kinder & Schule",
    description: "Du kommst gut mit jüngeren Kindern klar und hast Lust, beim Spielen, Basteln, Lernen oder Vorlesen zu helfen.",
    weights: {
      children: 5,
      education: 5,
      care: 4,
      patience: 4,
      creative: 3,
      communication: 3,
      people: 2
    }
  },
  {
    id: "organization",
    emoji: "🧾",
    text: "Ordnung & Organisation",
    description: "Du behältst gerne den Überblick, sortierst ordentlich und findest Planen, Vorbereiten oder Listen nicht langweilig.",
    weights: {
      organization: 5,
      detail: 4,
      office: 3,
      administration: 3,
      logistics: 2,
      responsibility: 2,
      quiet: 1
    }
  },
  {
    id: "physical_work",
    emoji: "📦",
    text: "Lager & Anpacken",
    description: "Du packst gerne mit an, bewegst dich lieber als lange zu sitzen und findest Kisten, Aufbau oder Werkstatt spannend.",
    weights: {
      physical: 5,
      logistics: 4,
      cleaning: 3,
      tools: 3,
      active: 3,
      organization: 2,
      outdoor: 1
    }
  },
  {
    id: "sales_service",
    emoji: "🛒",
    text: "Verkauf & Kundenkontakt",
    description: "Du bist freundlich, traust dich mit Kund*innen zu sprechen und kannst dir Verkauf, Beratung oder Bedienen gut vorstellen.",
    weights: {
      sales: 5,
      service: 5,
      customerContact: 5,
      people: 4,
      communication: 3,
      organization: 2,
      food: 1
    }
  },
  {
    id: "cleaning_preparation",
    emoji: "🧼",
    text: "Sauberkeit & Vorbereitung",
    description: "Du findest es okay, aufzuräumen, vorzubereiten und dafür zu sorgen, dass alles sauber und bereit ist.",
    weights: {
      cleaning: 5,
      hygiene: 4,
      preparation: 4,
      physical: 3,
      organization: 3,
      service: 2,
      responsibility: 1
    }
  },
  {
    id: "health",
    emoji: "⚕️",
    text: "Gesundheit & Praxis",
    description: "Du interessierst dich dafür, wie Menschen oder Tiere behandelt, gepflegt oder gesund gehalten werden.",
    weights: {
      health: 5,
      care: 4,
      support: 4,
      responsibility: 4,
      patience: 3,
      people: 3,
      hygiene: 2
    }
  },
  {
    id: "sport_active",
    emoji: "🏃",
    text: "Sport & Bewegung",
    description: "Du bist gerne aktiv, magst Bewegung und findest Sport, Schwimmbad, Klettern oder körperliche Aufgaben interessant.",
    weights: {
      sport: 5,
      active: 5,
      physical: 4,
      outdoor: 3,
      teamwork: 3,
      safety: 2,
      action: 2
    }
  },
  {
    id: "culture_museum",
    emoji: "🎭",
    text: "Kultur & Museum",
    description: "Du magst Theater, Museen, Ausstellungen oder spannende Geschichten und erklärst anderen gerne etwas.",
    weights: {
      culture: 5,
      museum: 4,
      education: 3,
      creative: 3,
      communication: 3,
      service: 2,
      organization: 2
    }
  },
  {
    id: "entertainment",
    emoji: "🎬",
    text: "Freizeit & Entertainment",
    description: "Du magst Orte, an denen viel los ist, zum Beispiel Kino, Freizeitpark oder Theater, und hast Spaß am Kontakt mit Gästen.",
    weights: {
      entertainment: 5,
      fun: 5,
      service: 4,
      customerContact: 3,
      people: 3,
      action: 2,
      teamwork: 2
    }
  },
  {
    id: "media",
    emoji: "📻",
    text: "Medien & Kommunikation",
    description: "Du schreibst, fotografierst, filmst oder postest gerne und findest Medien, Radio, Videos oder Social Media spannend.",
    weights: {
      media: 5,
      communication: 5,
      creative: 4,
      technology: 3,
      design: 2,
      detail: 2,
      office: 1
    }
  },
  {
    id: "plants_nature",
    emoji: "🌷",
    text: "Pflanzen & Natur",
    description: "Du magst Pflanzen, Blumen, Obst oder Gartenarbeit und bist gerne draußen oder in der Natur.",
    weights: {
      plants: 5,
      nature: 5,
      outdoor: 4,
      physical: 3,
      creative: 2,
      food: 2,
      sales: 1
    }
  },
  {
    id: "administration",
    emoji: "🏛️",
    text: "Verwaltung & Rathaus",
    description: "Du arbeitest gerne ordentlich, findest Büroaufgaben interessant und möchtest wissen, wie Rathaus oder Verwaltung funktionieren.",
    weights: {
      administration: 5,
      office: 5,
      organization: 4,
      detail: 3,
      service: 2,
      people: 2,
      quiet: 1
    }
  },
  {
    id: "youth_projects",
    emoji: "🧑‍🤝‍🧑",
    text: "Jugend & Projekte",
    description: "Du arbeitest gerne mit anderen Jugendlichen oder Kindern zusammen und hast Lust auf Aktionen, Spiele oder Projekte.",
    weights: {
      youth: 5,
      people: 4,
      teamwork: 4,
      creative: 3,
      leadership: 3,
      communication: 3,
      active: 2
    }
  },
  {
    id: "technical_practical",
    emoji: "🔧",
    text: "Technisch & praktisch",
    description: "Du möchtest Dinge ausprobieren, reparieren oder mit Werkzeug arbeiten, zum Beispiel an Fahrrad, Auto, Holz oder Technik.",
    weights: {
      technical: 5,
      tools: 5,
      repair: 4,
      technology: 3,
      physical: 3,
      detail: 2,
      problemSolving: 2
    }
  },
  {
    id: "support",
    emoji: "🛟",
    text: "Support & Helfen",
    description: "Du erklärst gerne Dinge, bleibst ruhig bei Fragen und hilfst anderen, wenn sie nicht weiterkommen.",
    weights: {
      support: 5,
      patience: 4,
      communication: 4,
      people: 3,
      service: 3,
      responsibility: 2,
      education: 1
    }
  }
];
