const SHLJobDetails = (() => {
  const taskByAttribute = {
    action: "Bei abwechslungsreichen und spannenden Aufgaben mithelfen",
    active: "Aktiv sein und unterschiedliche Aufgaben übernehmen",
    administration: "Unterlagen sortieren und einfache Verwaltungsaufgaben erledigen",
    animals: "Tiere versorgen, füttern und ihre Umgebung vorbereiten",
    care: "Menschen im Alltag begleiten und unterstützen",
    children: "Kinder betreuen und gemeinsame Aktivitäten vorbereiten",
    cleaning: "Arbeitsbereiche sauber halten und Materialien aufräumen",
    communication: "Mit Menschen sprechen, zuhören und Informationen weitergeben",
    creative: "Ideen gestalten und kreative Aufgaben umsetzen",
    customerContact: "Kund*innen begrüßen, beraten und bei Fragen helfen",
    design: "Farben, Formen oder Inhalte gestalten",
    detail: "Arbeiten sorgfältig prüfen und auf Details achten",
    education: "Lernangebote vorbereiten und Wissen verständlich erklären",
    entertainment: "Freizeitangebote vorbereiten und Besucher*innen betreuen",
    food: "Speisen oder Getränke vorbereiten und ausgeben",
    health: "Bei gesundheitsbezogenen Aufgaben und Abläufen unterstützen",
    hygiene: "Auf Hygiene achten und Arbeitsmaterialien sauber halten",
    logistics: "Waren annehmen, sortieren und für den Einsatz vorbereiten",
    media: "Fotos, Texte oder digitale Inhalte bearbeiten",
    nature: "Mit Pflanzen, Naturmaterialien oder Umweltprojekten arbeiten",
    office: "Am Computer arbeiten und organisatorische Aufgaben erledigen",
    organization: "Termine, Materialien oder Arbeitsabläufe organisieren",
    outdoor: "Draußen arbeiten und praktische Aufgaben übernehmen",
    people: "Mit unterschiedlichen Menschen zusammenarbeiten",
    physical: "Praktisch mit anpacken und Materialien bewegen",
    plants: "Pflanzen pflegen, gießen und Arbeitsbereiche vorbereiten",
    preparation: "Materialien und Arbeitsplätze für den Tag vorbereiten",
    repair: "Gegenstände prüfen, warten oder bei Reparaturen helfen",
    safety: "Auf Sicherheit achten und Arbeitsbereiche kontrollieren",
    sales: "Produkte präsentieren, einräumen und beim Verkauf helfen",
    seniors: "Ältere Menschen begleiten und im Alltag unterstützen",
    service: "Gäste bedienen und für einen freundlichen Ablauf sorgen",
    sport: "Sportangebote vorbereiten und Teilnehmende begleiten",
    support: "Kolleg*innen und andere Menschen bei ihren Aufgaben unterstützen",
    teamwork: "Aufgaben im Team planen und gemeinsam umsetzen",
    technical: "Werkzeuge oder technische Geräte kennenlernen und einsetzen",
    technology: "Mit Computern, Programmen oder digitalen Geräten arbeiten",
    tools: "Werkzeuge vorbereiten und bei praktischen Arbeiten einsetzen",
    youth: "Jugendliche begleiten und bei Angeboten unterstützen"
  };

  function getJobTasks(job, limit = 3) {
    const tasks = Object.entries(job.weights || {})
      .sort(([, weightA], [, weightB]) => weightB - weightA)
      .map(([attribute]) => taskByAttribute[attribute])
      .filter(Boolean);

    return [...new Set(tasks)]
      .concat([
        "Den Arbeitsplatz vorbereiten und am Ende wieder aufräumen",
        "Das Team bei den täglichen Aufgaben unterstützen",
        "Einen Einblick in typische Arbeitsabläufe des Berufs bekommen"
      ])
      .slice(0, limit);
  }

  return { getJobTasks };
})();
