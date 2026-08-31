const interests = [
  {
    id: "action",
    emoji: "🚒",
    text: "Action & Blaulicht",
    description: "Du magst Bewegung, schnelle Aufgaben und Einsätze mit Feuerwehr oder Rettungsdienst.",
    weights: 
    {
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
    description: "Du hilfst anderen gern, hörst gut zu und möchtest, dass es ihnen besser geht.",
    weights: 
    {
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
    description: "Du hast viele kreative Ideen und magst Malen, Gestalten, Deko oder Design.",
    weights: 
    {
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
    description: "Du magst Tiere und hilfst gern beim Füttern, Pflegen oder Saubermachen.",
    weights: 
    {
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
    description: "Du bist gern draußen an der frischen Luft, bewegst dich viel und packst gerne mit an.",
    weights: 
    {
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
    text: "Essen & Café",
    description: "Du findest Essen, Backen oder Getränke spannend und hilfst gern in Küche, Café oder Bäckerei mit.",
    weights: 
    {
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
    description: "Du magst Computer, Geräte oder Webseiten und löst gern kleine Technik-Probleme.",
    weights: 
    {
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
    text: "Ruhe & Bücher",
    description: "Du magst ruhige Orte, Bücher und Sortieren und arbeitest gern ordentlich und konzentriert.",
    weights: 
    {
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
    weights: 
    {
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
    description: "Du behältst gern den Überblick, sortierst ordentlich und findest Planen oder Listen gut.",
    weights: 
    {
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
    description: "Du packst gern mit an, bewegst dich viel und findest Kisten, Aufbau oder Ordnung spannend.",
    weights: 
    {
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
    text: "Verkauf & Kontakt",
    description: "Du bist freundlich, sprichst gern mit Menschen und kannst dir Beraten oder Bedienen gut vorstellen.",
    weights: 
    {
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
    text: "Sauber machen & Vorbereitung",
    description: "Du räumst gern auf, bereitest Dinge vor und sorgst dafür, dass alles sauber und bereit ist.",
    weights: 
    {
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
    text: "Gesundheit",
    description: "Du möchtest wissen, wie man Menschen oder Tieren hilft, sie pflegt und gesund hält.",
    weights: 
    {
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
    description: "Du bist gern aktiv, magst Bewegung und findest Sport, Schwimmen oder Klettern spannend.",
    weights: 
    {
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
    description: "Du magst Theater, Museen oder spannende Geschichten und redest gern mit anderen darüber.",
    weights: 
    {
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
    text: "Freizeit & Spaß",
    description: "Du magst Orte, an denen viel los ist, zum Beispiel Kino, Freizeitpark oder Theater und hast Spaß am Kontakt mit Gästen.",
    weights: 
    {
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
    text: "Medien & Social Media",
    description: "Du fotografierst, filmst, schreibst oder postest gern und findest Social Media spannend.",
    weights: 
    {
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
    weights: 
    {
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
    text: "Büro & Verwaltung",
    description: "Du arbeitest gern ordentlich, sortierst Dinge und findest Aufgaben im Büro interessant.",
    weights: 
    {
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
    description: "Du arbeitest gerne mit anderen Jugendlichen oder Kindern zusammen und hast Lust auf Spiele oder gemeinsame Projekte.",
    weights: 
    {
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
    text: "Technik & Werkzeug",
    description: "Du probierst gern Dinge aus und arbeitest gern mit Werkzeug, Holz oder Technik.",
    weights: 
    {
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
    text: "Erklären & Helfen",
    description: "Du erklärst gerne Dinge und hilfst anderen, wenn sie nicht weiterkommen.",
    weights: 
    {
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
