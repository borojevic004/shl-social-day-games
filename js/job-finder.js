const SHLJobFinder = (() => {
  // When the page is online, set this to the public page URL, for example:
  // "https://socialday.de/job-finder"
  const PUBLIC_JOB_FINDER_URL = "http://192.168.178.179:8000/index.html";

  const titleSearchTerms = {
    "erzieher-in-im-kindergarten": "Kindergarten in der Nähe",
    "grundschullehrer-in": "Grundschule in der Nähe",
    "schulsozialarbeiter-in": "Schulsozialarbeit in der Nähe",
    "altenpfleger-in": "Altenheim in der Nähe",
    "pflegehelfer-in": "Pflegeheim in der Nähe",
    "jugendgruppenleiter-in": "Jugendzentrum in der Nähe",
    "sozialarbeiter-in": "Soziale Einrichtung in der Nähe",
    "ergotherapeut-in": "Ergotherapie in der Nähe",
    "physiotherapeut-in": "Physiotherapie in der Nähe",
    "rettungssanitaeter-in": "Rettungsdienst in der Nähe",
    "tierpfleger-in-im-tierheim": "Tierheim in der Nähe",
    "tierarzt-tieraerztin": "Tierarzt in der Nähe",
    "tierarzthelfer-in": "Tierarztpraxis in der Nähe",
    "hundefriseur-in": "Hundefriseur in der Nähe",
    "landwirt-in": "Bauernhof in der Nähe",
    "gaertner-in": "Gärtnerei in der Nähe",
    "florist-in": "Blumenladen in der Nähe",
    "foerster-in": "Forstamt in der Nähe",
    "landschaftsgaertner-in": "Landschaftsgärtnerei in der Nähe",
    "imker-in": "Imker in der Nähe",
    "mitarbeiter-in-im-naturkundemuseum": "Naturkundemuseum in der Nähe",
    "pferdepfleger-in": "Reiterhof in der Nähe",
    "mitarbeiter-in-auf-einem-bauernhof": "Bauernhof in der Nähe",
    "baecker-in": "Bäckerei in der Nähe",
    "konditor-in": "Konditorei in der Nähe",
    "koch-koechin": "Restaurant in der Nähe",
    "friseur-in": "Friseursalon in der Nähe",
    "tischler-in": "Tischlerei in der Nähe",
    "schreiner-in": "Schreinerei in der Nähe",
    "malerin-und-lackiererin": "Malerbetrieb in der Nähe",
    "elektriker-in": "Elektriker in der Nähe",
    "kfz-mechatroniker-in": "Kfz Werkstatt in der Nähe",
    "fahrradmechaniker-in": "Fahrradwerkstatt in der Nähe",
    "schornsteinfeger-in": "Schornsteinfeger in der Nähe",
    "fotograf-in": "Fotostudio in der Nähe",
    "verkaeufer-in-im-supermarkt": "Supermarkt in der Nähe",
    "verkaeufer-in-in-einer-buchhandlung": "Buchhandlung in der Nähe",
    "verkaeufer-in-in-einer-baeckerei": "Bäckerei in der Nähe",
    "verkaeufer-in-im-kleidungsgeschaeft": "Kleidungsgeschäft in der Nähe",
    "kassierer-in": "Supermarkt in der Nähe",
    "servicekraft-im-cafe": "Café in der Nähe",
    "barista-barkeeper-in": "Café Bar in der Nähe",
    "kellner-in": "Restaurant in der Nähe",
    "hotelmitarbeiter-in": "Hotel in der Nähe",
    "rezeptionist-in": "Hotel in der Nähe",
    "mitarbeiter-in-im-kino": "Kino in der Nähe",
    "mitarbeiter-in-in-einer-eisdiele": "Eisdiele in der Nähe",
    "marktverkaeufer-in": "Wochenmarkt in der Nähe",
    "mitarbeiter-in-im-blumenladen": "Blumenladen in der Nähe",
    "verwaltungsmitarbeiter-in-im-rathaus": "Rathaus in der Nähe",
    "bankkaufmann-bankkauffrau": "Bank in der Nähe",
    "journalist-in": "Zeitung Redaktion in der Nähe",
    "redakteur-in": "Redaktion in der Nähe",
    "radiomoderator-in": "Radiosender in der Nähe",
    "kameramann-kamerafrau": "Videoproduktion in der Nähe",
    "grafikdesigner-in": "Grafikdesign Agentur in der Nähe",
    "webdesigner-in": "Webdesign Agentur in der Nähe",
    "social-media-manager-in": "Social Media Agentur in der Nähe",
    "buchhaendler-in": "Buchhandlung in der Nähe",
    "bibliothekar-in": "Bibliothek in der Nähe",
    "museumspaedagog-in": "Museum in der Nähe",
    "veranstaltungsplaner-in": "Eventagentur in der Nähe",
    "schauspieler-in-im-theater": "Theater in der Nähe",
    "feuerwehrmann-feuerwehrfrau": "Feuerwehr in der Nähe",
    "bademeister-in": "Schwimmbad in der Nähe",
    "mitarbeiter-in-im-freizeitpark": "Freizeitpark in der Nähe",
    "servicekraft-im-doenerladen": "Dönerladen in der Nähe",
    "erntehilfe-auf-einem-obsthof": "Obsthof in der Nähe",
    "mitarbeiter-in-im-hochseilgarten": "Hochseilgarten in der Nähe"
  };

  const aliases = {
    imker: "imker-in",
    pferdepfleger: "pferdepfleger-in",
    reiterhof: "pferdepfleger-in",
    kellner: "kellner-in",
    restaurant: "kellner-in",
    friseur: "friseur-in",
    friseursalon: "friseur-in",
    baecker: "baecker-in",
    backer: "baecker-in",
    bibliothek: "bibliothekar-in",
    tierheim: "tierpfleger-in-im-tierheim",
    hotel: "hotelmitarbeiter-in",
    cafe: "servicekraft-im-cafe",
    kino: "mitarbeiter-in-im-kino",
    feuerwehr: "feuerwehrmann-feuerwehrfrau",
    supermarkt: "verkaeufer-in-im-supermarkt",
    museum: "museumspaedagog-in"
  };

  function slugify(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/ä/g, "ae")
      .replace(/ö/g, "oe")
      .replace(/ü/g, "ue")
      .replace(/ß/g, "ss")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\*/g, "-")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "");
  }

  function cleanJobTitle(title) {
    return String(title || "")
      .replace(/\*in/g, "")
      .replace(/\*/g, "")
      .replace(/\s+\/\s+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function getSearchTerm(job) {
    if (!job) return "";

    const titleKey = slugify(job.title);
    return titleSearchTerms[titleKey] || `${cleanJobTitle(job.title)} in der Nähe`;
  }

  function getMapsUrl(job, coords) {
    const query = getSearchTerm(job);
    const encodedQuery = encodeURIComponent(query);

    if (coords) {
      return `https://www.google.com/maps/search/${encodedQuery}/@${coords.lat},${coords.lng},14z`;
    }

    return `https://www.google.com/maps/search/?api=1&query=${encodedQuery}`;
  }

  function getBaseUrl() {
    if (PUBLIC_JOB_FINDER_URL) return PUBLIC_JOB_FINDER_URL;

    return `${window.location.origin}${window.location.pathname}`;
  }

  function getJobUrl(job) {
    const url = new URL(getBaseUrl(), window.location.href);
    url.search = `?job=${encodeURIComponent(job.id)}`;
    url.hash = "";
    return url.toString();
  }

  function getQrTargetUrl(job) {
    return getJobUrl(job);
  }

  function getQrUrl(job) {
    const data = encodeURIComponent(getQrTargetUrl(job));
    return `https://api.qrserver.com/v1/create-qr-code/?size=190x190&margin=8&data=${data}`;
  }

  function openNearby(job) {
    if (!job) return;

    const mapsWindow = window.open("", "_blank");
    const openUrl = (coords) => {
      const url = getMapsUrl(job, coords);
      if (mapsWindow) {
        mapsWindow.location.href = url;
      } else {
        window.location.href = url;
      }
    };

    if (!navigator.geolocation) {
      openUrl();
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        openUrl({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        });
      },
      () => openUrl(),
      {
        enableHighAccuracy: false,
        timeout: 8000,
        maximumAge: 600000
      }
    );
  }

  function findJobByParam(value) {
    if (!value || typeof jobs === "undefined") return null;

    const normalizedValue = slugify(value);
    const numericId = Number(value);

    if (Number.isInteger(numericId)) {
      const byId = jobs.find((job) => job.id === numericId);
      if (byId) return byId;
    }

    const aliasKey = aliases[normalizedValue] || normalizedValue;
    return jobs.find((job) => slugify(job.title) === aliasKey) || null;
  }

  function buttonHtml(job, className = "job-finder-button") {
    if (!job) return "";

    return `
      <button class="${className}" type="button" data-find-nearby-job-id="${job.id}">
        Orte in meiner Nähe finden
      </button>
    `;
  }

  function qrHtml(job) {
    if (!job) return "";

    return `
      <div class="job-finder-qr">
        <img src="${getQrUrl(job)}" alt="QR-Code für ${job.title}" />
        <div>
          <strong>QR-Code scannen</strong>
          <span>Öffnet diesen Job auf dem eigenen Handy.</span>
        </div>
      </div>
    `;
  }

  function bindButtons(root = document) {
    root.querySelectorAll("[data-find-nearby-job-id]").forEach((button) => {
      button.addEventListener("click", () => {
        const job = jobs.find((item) => item.id === Number(button.dataset.findNearbyJobId));
        openNearby(job);
      });
    });
  }

  function initDeepLink() {
    const params = new URLSearchParams(window.location.search);
    const jobParam = params.get("job") || params.get("jobId");
    const job = findJobByParam(jobParam);

    if (!job || typeof SHLModal === "undefined") return;

    window.setTimeout(() => {
      SHLModal.open(`
        <div class="modal-title" id="job-modal-title">Job in deiner Nähe finden</div>
        <div class="modal-job">${job.title}</div>
        <div class="modal-meta">${job.group}</div>
        <p class="job-finder-intro">
          Klicke auf das gelbe Feld und erlaube die Standortfreigabe. Danach öffnet sich Google Maps mit passenden Orten in deiner Nähe.
        </p>
        <div class="modal-actions">
          ${buttonHtml(job)}
          <button class="modal-close-btn" id="job-finder-close" type="button">Schließen</button>
        </div>
      `, (content) => {
        bindButtons(content);
        content.querySelector("#job-finder-close").onclick = SHLModal.close;
      });
    }, 250);
  }

  return {
    bindButtons,
    buttonHtml,
    cleanJobTitle,
    findJobByParam,
    getJobUrl,
    getMapsUrl,
    getQrTargetUrl,
    getQrUrl,
    getSearchTerm,
    initDeepLink,
    openNearby,
    qrHtml,
    slugify
  };
})();

document.addEventListener("DOMContentLoaded", () => {
  SHLJobFinder.initDeepLink();
});
