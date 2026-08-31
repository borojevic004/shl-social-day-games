const jobsRaw = [
  {
    id: 1,
    title: "Erzieher*in im Kindergarten",
    group: "Soziales, Bildung & Betreuung",
    image: "images/kindergarten_teacher.jpg",
    weights: 
    {
      children: 5,
      care: 5,
      education: 4,
      patience: 5,
      people: 4,
      creative: 4,
      communication: 3,
      responsibility: 3,
      teamwork: 3,
      active: 2,
      support: 2,
      cleaning: 1
    }
  },
  {
    id: 2,
    title: "Grundschullehrer*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/primary_school_teacher.jpg",
    weights: 
    {
      children: 5,
      education: 5,
      patience: 4,
      communication: 5,
      people: 4,
      organization: 4,
      creative: 3,
      responsibility: 3,
      support: 3,
      office: 2,
      quiet: 1,
      teamwork: 1
    }
  },
  {
    id: 3,
    title: "Schulsozialarbeiter*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/school_social_worker.jpg",
    weights: 
    {
      children: 4,
      youth: 5,
      people: 5,
      care: 4,
      support: 5,
      communication: 5,
      patience: 4,
      responsibility: 4,
      education: 2,
      office: 2,
      teamwork: 2,
      organization: 2
    }
  },
  {
    id: 4,
    title: "Altenpfleger*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/elderly_care_worker.jpg",
    weights: 
    {
      seniors: 5,
      care: 5,
      health: 4,
      people: 4,
      patience: 5,
      support: 4,
      hygiene: 4,
      responsibility: 4,
      service: 3,
      physical: 2,
      communication: 2,
      cleaning: 1
    }
  },
  {
    id: 5,
    title: "Pflegehelfer*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/care_assistant.jpg",
    weights: 
    {
      care: 5,
      health: 4,
      people: 4,
      seniors: 4,
      support: 5,
      hygiene: 4,
      patience: 4,
      responsibility: 3,
      service: 3,
      physical: 3,
      communication: 2,
      cleaning: 2
    }
  },
  {
    id: 6,
    title: "Jugendgruppenleiter*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/youth_group_leader.jpg",
    weights: 
    {
      youth: 5,
      children: 3,
      people: 5,
      teamwork: 5,
      leadership: 4,
      creative: 4,
      active: 4,
      communication: 4,
      responsibility: 4,
      fun: 3,
      education: 2,
      outdoor: 1
    }
  },
  {
    id: 7,
    title: "Sozialarbeiter*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/social_worker.jpg",
    weights: 
    {
      people: 5,
      care: 5,
      support: 5,
      communication: 5,
      patience: 4,
      responsibility: 4,
      youth: 3,
      seniors: 2,
      office: 2,
      organization: 2,
      education: 1,
      teamwork: 1
    }
  },
  {
    id: 8,
    title: "Ergotherapeut*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/occupational_therapist.jpg",
    weights: 
    {
      health: 5,
      care: 4,
      support: 5,
      patience: 4,
      people: 4,
      creative: 3,
      detail: 3,
      responsibility: 3,
      communication: 3,
      physical: 2,
      children: 1,
      seniors: 1
    }
  },
  {
    id: 9,
    title: "Physiotherapeut*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/physiotherapist.jpg",
    weights: 
    {
      health: 5,
      sport: 4,
      active: 4,
      care: 4,
      support: 4,
      people: 4,
      patience: 3,
      responsibility: 3,
      physical: 3,
      communication: 2,
      detail: 2,
      hygiene: 1
    }
  },
  {
    id: 10,
    title: "Rettungssanitäter*in",
    group: "Soziales, Bildung & Betreuung",
    image: "images/paramedic.jpg",
    weights: 
    {
      health: 5,
      firstAid: 5,
      action: 5,
      responsibility: 5,
      safety: 5,
      teamwork: 4,
      support: 4,
      people: 3,
      physical: 3,
      communication: 3,
      fastPaced: 3,
      hygiene: 2
    }
  },

  {
    id: 16,
    title: "Tierpfleger*in im Tierheim",
    group: "Tiere, Natur & Umwelt",
    image: "images/animal_shelter_worker.jpg",
    weights: 
    {
      animals: 5,
      care: 5,
      patience: 4,
      cleaning: 5,
      physical: 3,
      outdoor: 3,
      responsibility: 4,
      support: 2,
      hygiene: 2,
      people: 1,
      organization: 1,
      quiet: 1
    }
  },
  {
    id: 17,
    title: "Tierarzt / Tierärztin",
    group: "Tiere, Natur & Umwelt",
    image: "images/veterinarian.jpg",
    weights: 
    {
      animals: 5,
      health: 5,
      care: 5,
      responsibility: 5,
      patience: 4,
      people: 3,
      support: 3,
      hygiene: 4,
      detail: 3,
      communication: 3,
      office: 1,
      safety: 1
    }
  },
  {
    id: 18,
    title: "Tierarzthelfer*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/vet_assistant.jpg",
    weights: 
    {
      animals: 5,
      health: 4,
      care: 4,
      hygiene: 4,
      organization: 4,
      service: 3,
      people: 3,
      patience: 3,
      cleaning: 3,
      responsibility: 3,
      office: 2,
      communication: 2
    }
  },
  {
    id: 19,
    title: "Hundefriseur*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/dog_groomer.jpg",
    weights: 
    {
      animals: 5,
      care: 4,
      patience: 4,
      cleaning: 4,
      hygiene: 4,
      service: 3,
      creative: 3,
      people: 2,
      physical: 2,
      detail: 2,
      responsibility: 2,
      quiet: 1
    }
  },
  {
    id: 20,
    title: "Landwirt*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/farmer.jpg",
    weights: 
    {
      animals: 4,
      nature: 5,
      outdoor: 5,
      physical: 5,
      plants: 3,
      food: 3,
      tools: 3,
      technical: 2,
      cleaning: 3,
      earlyStart: 3,
      responsibility: 3,
      active: 3
    }
  },
  {
    id: 21,
    title: "Gärtner*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/gardener.jpg",
    weights: 
    {
      plants: 5,
      nature: 5,
      outdoor: 5,
      physical: 4,
      creative: 3,
      tools: 3,
      cleaning: 2,
      detail: 2,
      active: 3,
      responsibility: 2,
      quiet: 1,
      service: 1
    }
  },
  {
    id: 22,
    title: "Florist*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/florist.jpg",
    weights: 
    {
      plants: 5,
      creative: 5,
      design: 4,
      sales: 4,
      service: 4,
      customerContact: 3,
      detail: 4,
      organization: 3,
      nature: 3,
      hygiene: 1,
      communication: 2,
      quiet: 1
    }
  },
  {
    id: 23,
    title: "Förster*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/forester.jpg",
    weights: 
    {
      nature: 5,
      outdoor: 5,
      plants: 4,
      animals: 3,
      physical: 4,
      education: 3,
      safety: 3,
      responsibility: 4,
      active: 3,
      tools: 2,
      quiet: 2,
      communication: 1
    }
  },
  {
    id: 24,
    title: "Landschaftsgärtner*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/landscape_gardener.jpg",
    weights: 
    {
      nature: 5,
      plants: 5,
      outdoor: 5,
      physical: 5,
      tools: 4,
      technical: 3,
      creative: 3,
      design: 2,
      active: 3,
      cleaning: 2,
      teamwork: 2,
      responsibility: 2
    }
  },
  {
    id: 25,
    title: "Imker*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/beekeeper.jpg",
    weights: 
    {
      animals: 5,
      nature: 5,
      outdoor: 4,
      food: 3,
      care: 3,
      patience: 5,
      safety: 4,
      responsibility: 4,
      quiet: 3,
      detail: 3,
      hygiene: 2,
      plants: 2
    }
  },
  {
    id: 26,
    title: "Mitarbeiter*in im Naturkundemuseum",
    group: "Tiere, Natur & Umwelt",
    image: "images/natural_history_museum.jpg",
    weights: 
    {
      museum: 5,
      culture: 5,
      nature: 4,
      education: 4,
      service: 3,
      organization: 4,
      quiet: 3,
      people: 2,
      communication: 2,
      detail: 3,
      animals: 1,
      plants: 1
    }
  },
  {
    id: 27,
    title: "Pferdepfleger*in",
    group: "Tiere, Natur & Umwelt",
    image: "images/horse_caretaker.jpg",
    weights: 
    {
      animals: 5,
      care: 5,
      outdoor: 4,
      physical: 4,
      cleaning: 4,
      patience: 4,
      responsibility: 4,
      sport: 2,
      active: 3,
      safety: 2,
      nature: 2,
      quiet: 1
    }
  },
  {
    id: 28,
    title: "Mitarbeiter*in auf einem Bauernhof",
    group: "Tiere, Natur & Umwelt",
    image: "images/farm_worker.jpg",
    weights: 
    {
      animals: 5,
      nature: 5,
      outdoor: 5,
      physical: 5,
      food: 3,
      plants: 3,
      cleaning: 4,
      tools: 2,
      active: 4,
      responsibility: 3,
      earlyStart: 3,
      teamwork: 1
    }
  },

  {
    id: 31,
    title: "Bäcker*in",
    group: "Handwerk & Technik",
    image: "images/baker.jpg",
    weights: 
    {
      food: 5,
      hygiene: 5,
      preparation: 5,
      physical: 4,
      earlyStart: 5,
      teamwork: 3,
      cleaning: 4,
      technical: 2,
      creative: 2,
      detail: 3,
      responsibility: 3,
      fastPaced: 2
    }
  },
  {
    id: 32,
    title: "Konditor*in",
    group: "Handwerk & Technik",
    image: "images/pastry_chef.jpg",
    weights: 
    {
      food: 5,
      creative: 5,
      design: 4,
      hygiene: 5,
      preparation: 4,
      detail: 5,
      patience: 3,
      cleaning: 3,
      technical: 2,
      organization: 3,
      physical: 2,
      service: 1
    }
  },
  {
    id: 33,
    title: "Koch / Köchin",
    group: "Handwerk & Technik",
    image: "images/chef.jpg",
    weights: 
    {
      food: 5,
      hygiene: 5,
      preparation: 5,
      teamwork: 5,
      fastPaced: 4,
      physical: 4,
      cleaning: 4,
      organization: 4,
      creative: 2,
      responsibility: 3,
      service: 2,
      detail: 2
    }
  },
  {
    id: 34,
    title: "Friseur*in",
    group: "Handwerk & Technik",
    image: "images/hairdresser.jpg",
    weights: 
    {
      service: 5,
      customerContact: 5,
      people: 4,
      creative: 4,
      care: 3,
      hygiene: 4,
      communication: 4,
      detail: 3,
      patience: 3,
      cleaning: 2,
      sales: 2,
      design: 2
    }
  },
  {
    id: 35,
    title: "Schreiner*in",
    group: "Handwerk & Technik",
    image: "images/carpenter.jpg",
    weights: 
    {
      technical: 5,
      tools: 5,
      repair: 4,
      physical: 4,
      creative: 3,
      design: 3,
      detail: 4,
      quiet: 3,
      problemSolving: 3,
      safety: 3,
      cleaning: 2,
      organization: 2
    }
  },
  {
    id: 36,
    title: "Tischler*in",
    group: "Handwerk & Technik",
    image: "images/woodworker.jpg",
    weights: 
    {
      technical: 5,
      tools: 5,
      repair: 4,
      physical: 4,
      creative: 3,
      design: 3,
      detail: 4,
      quiet: 3,
      problemSolving: 3,
      safety: 3,
      cleaning: 2,
      organization: 2
    }
  },
  {
    id: 37,
    title: "Maler*in",
    group: "Handwerk & Technik",
    image: "images/painter_decorator.jpg",
    weights: 
    {
      creative: 4,
      design: 3,
      technical: 4,
      tools: 4,
      physical: 4,
      detail: 4,
      cleaning: 4,
      preparation: 5,
      safety: 2,
      organization: 2,
      quiet: 1,
      service: 1
    }
  },
  {
    id: 38,
    title: "Elektriker*in",
    group: "Handwerk & Technik",
    image: "images/electrician.jpg",
    weights: 
    {
      technical: 5,
      technology: 5,
      tools: 4,
      repair: 4,
      problemSolving: 4,
      detail: 4,
      safety: 5,
      responsibility: 4,
      physical: 2,
      organization: 2,
      service: 1,
      quiet: 1
    }
  },
  {
    id: 39,
    title: "Kfz-Mechatroniker*in",
    group: "Handwerk & Technik",
    image: "images/car_mechanic.jpg",
    weights: 
    {
      technical: 5,
      technology: 4,
      tools: 5,
      repair: 5,
      physical: 4,
      problemSolving: 4,
      detail: 3,
      cleaning: 2,
      safety: 3,
      service: 2,
      organization: 2,
      fastPaced: 1
    }
  },
  {
    id: 40,
    title: "Fahrradmechaniker*in",
    group: "Handwerk & Technik",
    image: "images/bicycle_mechanic.jpg",
    weights: 
    {
      technical: 5,
      tools: 5,
      repair: 5,
      sport: 3,
      physical: 3,
      service: 4,
      customerContact: 2,
      problemSolving: 3,
      detail: 3,
      cleaning: 2,
      support: 2,
      quiet: 1
    }
  },
  {
    id: 41,
    title: "Schornsteinfeger*in",
    group: "Handwerk & Technik",
    image: "images/chimney_sweep.jpg",
    weights: 
    {
      technical: 4,
      tools: 4,
      safety: 5,
      responsibility: 5,
      outdoor: 4,
      physical: 4,
      service: 3,
      customerContact: 2,
      cleaning: 3,
      detail: 3,
      active: 2,
      communication: 1
    }
  },
  {
    id: 42,
    title: "Fotograf*in",
    group: "Handwerk & Technik",
    image: "images/photographer.jpg",
    weights: 
    {
      creative: 5,
      media: 5,
      design: 4,
      technology: 4,
      communication: 3,
      people: 3,
      detail: 4,
      patience: 3,
      service: 3,
      quiet: 2,
      organization: 2,
      culture: 1
    }
  },

  {
    id: 46,
    title: "Verkäufer*in im Supermarkt",
    group: "Verkauf, Service & Gastronomie",
    image: "images/supermarket_worker.jpg",
    weights: 
    {
      sales: 5,
      service: 5,
      customerContact: 4,
      people: 4,
      organization: 4,
      logistics: 4,
      physical: 3,
      cleaning: 2,
      food: 2,
      hygiene: 2,
      fastPaced: 2,
      responsibility: 2
    }
  },
  {
    id: 47,
    title: "Verkäufer*in in einer Buchhandlung",
    group: "Verkauf, Service & Gastronomie",
    image: "images/bookstore_worker.jpg",
    weights: 
    {
      sales: 5,
      service: 4,
      customerContact: 4,
      library: 5,
      quiet: 4,
      organization: 4,
      communication: 3,
      people: 3,
      culture: 2,
      detail: 3,
      office: 1,
      creative: 1
    }
  },
  {
    id: 48,
    title: "Verkäufer*in in einer Bäckerei",
    group: "Verkauf, Service & Gastronomie",
    image: "images/bakery_worker.jpg",
    weights: 
    {
      food: 5,
      sales: 5,
      service: 5,
      customerContact: 4,
      hygiene: 5,
      people: 3,
      cleaning: 3,
      fastPaced: 3,
      preparation: 2,
      organization: 2,
      responsibility: 2,
      earlyStart: 2
    }
  },
  {
    id: 49,
    title: "Verkäufer*in im Kleidungsgeschäft",
    group: "Verkauf, Service & Gastronomie",
    image: "images/clothing_store_worker.jpg",
    weights: 
    {
      sales: 5,
      service: 5,
      customerContact: 5,
      people: 4,
      communication: 4,
      creative: 3,
      design: 3,
      organization: 3,
      detail: 2,
      cleaning: 1,
      patience: 2,
      responsibility: 1
    }
  },
  {
    id: 50,
    title: "Kassierer*in im Supermarkt",
    group: "Verkauf, Service & Gastronomie",
    image: "images/cashier.jpg",
    weights: 
    {
      sales: 4,
      service: 5,
      customerContact: 4,
      people: 3,
      responsibility: 4,
      detail: 5,
      organization: 3,
      patience: 3,
      fastPaced: 3,
      office: 1,
      communication: 2,
      quiet: 1
    }
  },
  {
    id: 51,
    title: "Servicekraft im Café",
    group: "Verkauf, Service & Gastronomie",
    image: "images/cafe_worker.jpg",
    weights: 
    {
      food: 5,
      service: 5,
      customerContact: 5,
      people: 4,
      hygiene: 5,
      cleaning: 4,
      fastPaced: 3,
      active: 3,
      teamwork: 3,
      sales: 2,
      preparation: 2,
      communication: 2
    }
  },
  {
    id: 52,
    title: "Barista/Barkeeper*in",
    group: "Verkauf, Service & Gastronomie",
    image: "images/barista.jpg",
    weights: 
    {
      food: 4,
      service: 5,
      customerContact: 5,
      people: 4,
      hygiene: 5,
      creative: 3,
      preparation: 3,
      cleaning: 4,
      fastPaced: 3,
      communication: 3,
      sales: 2,
      teamwork: 2
    }
  },
  {
    id: 53,
    title: "Kellner*in",
    group: "Verkauf, Service & Gastronomie",
    image: "images/waiter.jpg",
    weights: 
    {
      service: 5,
      customerContact: 5,
      people: 5,
      food: 4,
      active: 4,
      fastPaced: 4,
      communication: 4,
      teamwork: 3,
      hygiene: 3,
      cleaning: 3,
      patience: 2,
      sales: 2
    }
  },
  {
    id: 54,
    title: "Hotelmitarbeiter*in",
    group: "Verkauf, Service & Gastronomie",
    image: "images/hotel_worker.jpg",
    weights: 
    {
      service: 5,
      customerContact: 5,
      people: 4,
      cleaning: 4,
      organization: 4,
      communication: 4,
      office: 2,
      hospitality: 5,
      responsibility: 3,
      patience: 3,
      food: 1,
      logistics: 1
    }
  },
  {
    id: 55,
    title: "Rezeptionist*in",
    group: "Verkauf, Service & Gastronomie",
    image: "images/receptionist.jpg",
    weights: 
    {
      service: 5,
      customerContact: 5,
      people: 4,
      communication: 5,
      office: 4,
      organization: 5,
      administration: 3,
      hospitality: 4,
      responsibility: 3,
      quiet: 2,
      detail: 3,
      technology: 1
    }
  },
  {
    id: 56,
    title: "Mitarbeiter*in im Kino",
    group: "Verkauf, Service & Gastronomie",
    image: "images/cinema_worker.jpg",
    weights: 
    {
      entertainment: 5,
      fun: 5,
      service: 5,
      customerContact: 4,
      people: 4,
      food: 3,
      hygiene: 3,
      cleaning: 3,
      sales: 3,
      teamwork: 3,
      fastPaced: 2,
      culture: 1
    }
  },
  {
    id: 57,
    title: "Mitarbeiter*in in einer Eisdiele",
    group: "Verkauf, Service & Gastronomie",
    image: "images/ice_cream_shop_worker.jpg",
    weights: 
    {
      food: 5,
      service: 5,
      customerContact: 5,
      people: 4,
      hygiene: 5,
      cleaning: 4,
      sales: 3,
      fastPaced: 3,
      preparation: 3,
      fun: 2,
      communication: 2,
      patience: 1
    }
  },
  {
    id: 58,
    title: "Verkäufer*in auf einem Wochenmarkt",
    group: "Verkauf, Service & Gastronomie",
    image: "images/imarket_vendor.jpg",
    weights: 
    {
      sales: 5,
      customerContact: 5,
      people: 4,
      food: 3,
      outdoor: 4,
      physical: 3,
      communication: 4,
      organization: 3,
      logistics: 2,
      nature: 2,
      fastPaced: 2,
      earlyStart: 2
    }
  },
  {
    id: 59,
    title: "Mitarbeiter*in im Blumenladen",
    group: "Verkauf, Service & Gastronomie",
    image: "images/flower_shop_worker.jpg",
    weights: 
    {
      plants: 5,
      creative: 5,
      design: 4,
      sales: 4,
      service: 4,
      customerContact: 4,
      nature: 4,
      detail: 4,
      organization: 3,
      communication: 2,
      cleaning: 1,
      quiet: 1
    }
  },

  {
    id: 61,
    title: "Büromitarbeiter*in",
    group: "Büro, Medien & Kreatives",
    image: "images/city_hall_office_worker.jpg",
    weights: 
    {
      administration: 5,
      office: 5,
      organization: 5,
      detail: 4,
      service: 3,
      customerContact: 3,
      people: 2,
      communication: 3,
      quiet: 3,
      responsibility: 3,
      technology: 1,
      support: 1
    }
  },
  {
    id: 62,
    title: "Bankkaufmann / Bankkauffrau",
    group: "Büro, Medien & Kreatives",
    image: "images/bank_employee.jpg",
    weights: 
    {
      office: 5,
      service: 5,
      customerContact: 5,
      people: 4,
      communication: 4,
      organization: 4,
      detail: 4,
      responsibility: 4,
      administration: 3,
      quiet: 2,
      sales: 2,
      technology: 1
    }
  },
  {
    id: 63,
    title: "Journalist*in",
    group: "Büro, Medien & Kreatives",
    image: "images/journalist.jpg",
    weights: 
    {
      media: 5,
      communication: 5,
      creative: 4,
      office: 3,
      people: 3,
      detail: 4,
      culture: 3,
      technology: 2,
      organization: 2,
      curiosity: 5,
      quiet: 2,
      responsibility: 2
    }
  },
  {
    id: 64,
    title: "Redakteur*in",
    group: "Büro, Medien & Kreatives",
    image: "images/editor.jpg",
    weights: 
    {
      media: 5,
      communication: 5,
      creative: 4,
      quiet: 4,
      office: 4,
      detail: 5,
      organization: 4,
      culture: 2,
      technology: 2,
      responsibility: 3,
      patience: 2,
      design: 1
    }
  },
  {
    id: 65,
    title: "Radiomoderator*in",
    group: "Büro, Medien & Kreatives",
    image: "images/radio_host.jpg",
    weights: 
    {
      media: 5,
      communication: 5,
      creative: 4,
      entertainment: 4,
      technology: 3,
      people: 3,
      confidence: 4,
      culture: 2,
      organization: 2,
      fastPaced: 2,
      fun: 3,
      teamwork: 2
    }
  },
  {
    id: 66,
    title: "Kameramann / Kamerafrau",
    group: "Büro, Medien & Kreatives",
    image: "images/camera_operator.jpg",
    weights: 
    {
      media: 5,
      technology: 5,
      technical: 4,
      creative: 4,
      detail: 4,
      physical: 2,
      tools: 3,
      teamwork: 3,
      communication: 2,
      culture: 2,
      problemSolving: 2,
      organization: 2
    }
  },
  {
    id: 67,
    title: "Grafikdesigner*in",
    group: "Büro, Medien & Kreatives",
    image: "images/graphic_designer.jpg",
    weights: 
    {
      creative: 5,
      design: 5,
      media: 4,
      technology: 4,
      quiet: 4,
      detail: 5,
      office: 3,
      communication: 3,
      patience: 2,
      organization: 3,
      culture: 1,
      problemSolving: 1
    }
  },
  {
    id: 68,
    title: "Webdesigner*in",
    group: "Büro, Medien & Kreatives",
    image: "images/web_designer.jpg",
    weights: 
    {
      technology: 5,
      creative: 4,
      design: 5,
      technical: 3,
      media: 3,
      quiet: 4,
      detail: 5,
      office: 4,
      problemSolving: 3,
      organization: 3,
      communication: 2,
      support: 1
    }
  },
  {
    id: 69,
    title: "Social-Media-Manager*in",
    group: "Büro, Medien & Kreatives",
    image: "images/social_media_manager.jpg",
    weights: 
    {
      media: 5,
      communication: 5,
      creative: 5,
      technology: 3,
      design: 3,
      organization: 4,
      people: 3,
      entertainment: 2,
      culture: 2,
      detail: 3,
      fastPaced: 2,
      office: 2
    }
  },
  {
    id: 70,
    title: "Buchhändler*in",
    group: "Büro, Medien & Kreatives",
    image: "images/bookseller.jpg",
    weights: 
    {
      library: 5,
      sales: 4,
      service: 4,
      customerContact: 4,
      quiet: 4,
      organization: 4,
      culture: 3,
      communication: 3,
      people: 3,
      detail: 3,
      office: 1,
      creative: 1
    }
  },
  {
    id: 71,
    title: "Bibliothekar*in",
    group: "Büro, Medien & Kreatives",
    image: "images/librarian.jpg",
    weights: 
    {
      library: 5,
      quiet: 5,
      organization: 5,
      detail: 4,
      office: 3,
      service: 3,
      people: 2,
      culture: 3,
      education: 2,
      patience: 3,
      administration: 2,
      communication: 1
    }
  },
  {
    id: 72,
    title: "Museumspädagog*in",
    group: "Büro, Medien & Kreatives",
    image: "images/museum_educator.jpg",
    weights: 
    {
      museum: 5,
      culture: 5,
      education: 5,
      children: 3,
      people: 4,
      communication: 5,
      creative: 3,
      service: 3,
      organization: 3,
      patience: 3,
      history: 3,
      responsibility: 2
    }
  },
  {
    id: 73,
    title: "Veranstaltungsplaner*in",
    group: "Büro, Medien & Kreatives",
    image: "images/event_planner.jpg",
    weights: 
    {
      organization: 5,
      communication: 4,
      creative: 4,
      people: 4,
      teamwork: 4,
      logistics: 4,
      entertainment: 3,
      responsibility: 4,
      service: 3,
      fastPaced: 3,
      detail: 4,
      problemSolving: 3
    }
  },
  {
    id: 74,
    title: "Schauspieler*in im Theater",
    group: "Büro, Medien & Kreatives",
    image: "images/theater_actor.jpg",
    weights: 
    {
      culture: 5,
      creative: 5,
      performance: 5,
      communication: 5,
      entertainment: 5,
      teamwork: 4,
      confidence: 5,
      people: 3,
      fun: 3,
      patience: 2,
      active: 2,
      education: 1
    }
  },

  {
    id: 76,
    title: "Feuerwehrmann / Feuerwehrfrau",
    group: "Öffentlicher Dienst, Sport & Freizeit",
    image: "images/firefighter.jpg",
    weights: 
    {
      action: 5,
      safety: 5,
      teamwork: 5,
      responsibility: 5,
      support: 4,
      firstAid: 4,
      physical: 5,
      health: 3,
      technical: 3,
      tools: 3,
      outdoor: 3,
      fastPaced: 3
    }
  },
  {
    id: 77,
    title: "Bademeister*in",
    group: "Öffentlicher Dienst, Sport & Freizeit",
    image: "images/lifeguard.jpg",
    weights: 
    {
      sport: 5,
      safety: 5,
      health: 4,
      firstAid: 4,
      responsibility: 5,
      people: 4,
      support: 4,
      active: 4,
      communication: 3,
      service: 3,
      outdoor: 2,
      patience: 2
    }
  },
  {
    id: 78,
    title: "Mitarbeiter*in im Freizeitpark",
    group: "Öffentlicher Dienst, Sport & Freizeit",
    image: "images/amusement_park_worker.jpg",
    weights: 
    {
      entertainment: 5,
      fun: 5,
      service: 5,
      customerContact: 5,
      people: 4,
      action: 3,
      teamwork: 3,
      safety: 3,
      outdoor: 3,
      cleaning: 2,
      fastPaced: 3,
      communication: 3
    }
  },
  {
    id: 79,
    title: "Servicekraft im Dönerladen",
    group: "Öffentlicher Dienst, Sport & Freizeit",
    image: "images/doner_shop_worker.jpg",
    weights: 
    {
      food: 5,
      service: 5,
      hygiene: 5,
      customerContact: 5,
      people: 4,
      cleaning: 4,
      preparation: 4,
      fastPaced: 4,
      teamwork: 3,
      sales: 3,
      physical: 2,
      communication: 2
    }
  },
  {
    id: 80,
    title: "Erntehilfe auf einem Obsthof",
    group: "Öffentlicher Dienst, Sport & Freizeit",
    image: "images/fruit_harvest_worker.jpg",
    weights: 
    {
      nature: 5,
      plants: 5,
      outdoor: 5,
      physical: 5,
      food: 4,
      active: 4,
      cleaning: 2,
      logistics: 3,
      earlyStart: 3,
      teamwork: 2,
      quiet: 2,
      responsibility: 2
    }
  },
  {
    id: 81,
    title: "Mitarbeiter*in im Hochseilgarten",
    group: "Öffentlicher Dienst, Sport & Freizeit",
    image: "images/high_ropes_course_worker.jpg",
    weights: 
    {
      action: 5,
      sport: 5,
      outdoor: 5,
      safety: 5,
      teamwork: 4,
      support: 4,
      people: 4,
      communication: 4,
      responsibility: 4,
      active: 5,
      physical: 4,
      fun: 4
    }
  }
];


const jobs = jobsRaw.map((job) => {
  const imageName = job.image ? job.image.split("/").pop() : "";

  return {
    ...job,
    imageName,
    attributes: Object.keys(job.weights),
    description: `${job.title} gehört zum Bereich ${job.group}. Das Match basiert auf den Interessen, die du beim Swipen ausgewählt hast.`
  };
});
