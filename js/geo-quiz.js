const SHLGeoQuiz = (() => {
  const MAP_SOURCE = "assets/maps/project_regions_blue_hd.png";
  const BASE_MAP_SIZE = {
    width: 1137,
    height: 840
  };
  const MAX_ATTEMPTS_PER_COUNTRY = 3;
  const COLORS = {
    blue: [37, 48, 95],
    correct: [249, 215, 13],
    skipped: [247, 238, 196]
  };
  const PERFECT_SCORE_CONFETTI = {
    mode: "burst",
    count: 360,
    lifetime: 7800,
    minSize: 3,
    maxSize: 24,
    minRadius: 130,
    maxRadius: 390,
    minDuration: 3.2,
    maxDuration: 5.2,
    maxDelay: 0.75,
    originSpreadX: 3,
    originSpreadY: 3,
    minFall: 250,
    maxFall: 620,
    fallDrift: 240
  };
  const projects = [
    { name: "Youth Empowerment Program Ukraine", x: 607, y: 313 },
    { name: "Shelter Ukraine – Chernivtsi", x: 557, y: 319 },
    { name: "Shelter Ukraine – Scheptyzkyj", x: 535, y: 284 },
    { name: "Shelter Ukraine – Ivano-Frankivsk", x: 541, y: 308 },
    { name: "Shelter Ukraine – Kyiv", x: 617, y: 283 },
    { name: "Shelter Ukraine – Lviv", x: 532, y: 292 },
    { name: "Shelter Ukraine – Poltava", x: 670, y: 297 },
    { name: "Shelter Ukraine – Stryi", x: 530, y: 302 },
    { name: "Shelter Ukraine – Verkhovyna", x: 543, y: 320 },
    { name: "Schritte der Hoffnung – Tuzla", x: 459, y: 397 },
    { name: "SHL-House – Sarajevo", x: 456, y: 414 },
    { name: "SHL-Kosova – Rahovec", x: 491, y: 440 },
    { name: "Youth Education Program – Bosnien und Herzegowina", x: 459, y: 416 },
    { name: "Junge Medienmacher*innen – Bosnien und Herzegowina", x: 465, y: 421 },
    { name: "Jugendpartizipation – Albanien", x: 486, y: 460 },
    { name: "Jugend- und Kulturzentrum – Novi Sad", x: 486, y: 389 },
    { name: "Perspektiven für junge Menschen – Serbien", x: 504, y: 420 },
    { name: "Begegnungszentren – Amman", x: 734, y: 619 }
  ];
  const projectDetails = [
    {
      location: "Ukraine",
      description: "Seminare und Begleitung ermutigen Jugendliche in der Ukraine, sich demokratisch zu engagieren und ihr Umfeld aktiv mitzugestalten.",
      image: "assets/projects/youth-empowerment-ukraine.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/youth-empowerment-program/"
    },
    {
      location: "Chernivtsi, Ukraine",
      description: "In der Naehe der rumaenischen Grenze bekommen junge Binnengefluechtete und ihre Familien Freizeitangebote, Entlastung und Staerkung.",
      image: "assets/projects/chernivtsi.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-chernivtsi/"
    },
    {
      location: "Scheptyzkyj, Ukraine",
      description: "Nahe der polnischen Grenze verbindet Shelter praktische Aktivitaeten mit psychosozialer Unterstuetzung fuer junge Binnengefluechtete.",
      image: "assets/projects/scheptyzkyj.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-chervonohrad/"
    },
    {
      location: "Ivano-Frankivsk, Ukraine",
      description: "Im Karpatenvorland unterstuetzen Angebote zur Traumabewaeltigung junge Binnengefluechtete und ihre Familien.",
      image: "assets/projects/ivano-frankivsk.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-ivano-frankivsk/"
    },
    {
      location: "Kyiv, Ukraine",
      description: "In Kyiv organisiert Shelter trotz schwieriger Sicherheitslage psychosoziale Unterstuetzung fuer junge Binnengefluechtete.",
      image: "assets/projects/kyiv.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-kyiv/"
    },
    {
      location: "Lviv, Ukraine",
      description: "In Lviv koennen junge Binnengefluechtete Kurse und Programme besuchen, die psychosoziale Unterstuetzung und Gemeinschaft bieten.",
      image: "assets/projects/lviv.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-lviv/"
    },
    {
      location: "Poltava, Ukraine",
      description: "In Zentralukraine entstehen zusammen mit lokalen Partnern praktische Kurse fuer junge Binnenvertriebene.",
      image: "assets/projects/poltava.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-poltava/"
    },
    {
      location: "Stryi, Ukraine",
      description: "Am Fuss der Karpaten foerdert Shelter digitale Kompetenzen, Kreativitaet und Selbstwirksamkeit junger Binnenvertriebener.",
      image: "assets/projects/stryi.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-stryi/"
    },
    {
      location: "Verkhovyna, Ukraine",
      description: "Eine starke Community in der Westukraine bietet jungen Menschen Austausch, Weiterbildung und gesellschaftliche Anknuepfungspunkte.",
      image: "assets/projects/verkhovyna.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shelter-ukraine-standort-verkhovyna/"
    },
    {
      location: "Tuzla, Bosnien und Herzegowina",
      description: "Im Tageszentrum Koraci Nade werden Kinder und Jugendliche mit Mehrfachbeeintraechtigung begleitet und in ihrer Entwicklung gestaerkt.",
      image: "assets/projects/tuzla.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/tageszentrum-koraci-nade/"
    },
    {
      location: "Sarajevo, Bosnien und Herzegowina",
      description: "Das SHL-House ist ein Seminar- und Begegnungszentrum fuer internationale Jugendgruppen und Bildungsprogramme.",
      image: "assets/projects/shl-house.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shl-house/"
    },
    {
      location: "Rahovec/Orahovac, Kosovo",
      description: "Im Jugendzentrum von SHL-Kosova gibt es Freizeit-, Bildungs- und Weiterbildungsangebote fuer junge Menschen.",
      image: "assets/projects/kosovo.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/themenbereich-gemeinsam-solidarisch/shl-kosova/"
    },
    {
      location: "Sarajevo, Bosnien und Herzegowina",
      description: "Das Youth Education Program unterstuetzt Jugendliche dabei, eigene Projekte umzusetzen und sich fuer ihre Rechte einzusetzen.",
      image: "assets/projects/yep-bosnia.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/jugendorganisationen/youtheducationprogram/"
    },
    {
      location: "Sarajevo, Bosnien und Herzegowina",
      description: "Junge Medienschaffende gestalten kritischen Journalismus und staerken demokratische Oeffentlichkeit in Bosnien und Herzegowina.",
      image: "assets/projects/onaubih.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/jugendorganisationen/onaubih/"
    },
    {
      location: "Tirana, Albanien",
      description: "Ein Jugendnetzwerk staerkt junge Menschen darin, sich zivilgesellschaftlich einzubringen und ihre Stimme sichtbar zu machen.",
      image: "assets/projects/albania.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/jugendorganisationen/asan/"
    },
    {
      location: "Novi Sad, Serbien",
      description: "Das Jugend- und Kulturzentrum CK13 organisiert Veranstaltungen und engagiert sich gegen Nationalismus und fuer Demokratie.",
      image: "assets/projects/ck13.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/jugendorganisationen/ck13/"
    },
    {
      location: "Cicevac, Serbien",
      description: "Mentoring und selbstorganisierte Projekte geben Jugendlichen aus laendlichen Regionen neue Perspektiven und Gestaltungskraft.",
      image: "assets/projects/okular.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/jugendorganisationen/okular/"
    },
    {
      location: "Amman, Jordanien",
      description: "Zwei Begegnungszentren schaffen sichere Raeume, Weiterbildung und Austausch fuer junge Menschen mit und ohne Fluchterfahrung.",
      image: "assets/projects/amman.jpg",
      url: "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/hilfe-fuer-gefluechtete/crp/"
    }
  ];
  projects.forEach((project, index) => {
    Object.assign(project, projectDetails[index]);
  });
  const projectPositions = [
    { key: "Youth Empowerment Program Ukraine", x: 612, y: 326 },
    { key: "Chernivtsi", x: 558, y: 341 },
    { key: "Scheptyzkyj", x: 527, y: 284 },
    { key: "Ivano-Frankivsk", x: 548, y: 319 },
    { key: "Kyiv", x: 626, y: 286 },
    { key: "Lviv", x: 534, y: 297 },
    { key: "Poltava", x: 675, y: 306 },
    { key: "Stryi", x: 538, y: 310 },
    { key: "Verkhovyna", x: 553, y: 333 },
    { key: "Tuzla", x: 464, y: 396 },
    { key: "Sarajevo", x: 456, y: 413 },
    { key: "Rahovec", x: 496, y: 442 },
    { key: "Youth Education Program", x: 459, y: 416 },
    { key: "Junge Medienmacher*innen", x: 470, y: 417 },
    { key: "Albanien", x: 487, y: 466 },
    { key: "Novi Sad", x: 493, y: 390 },
    { key: "Serbien", x: 508, y: 410 },
    { key: "Amman", x: 733, y: 622 }
  ];
  const cityProjectPositions = [
    { key: "Youth Empowerment Program Ukraine", x: 612, y: 316 },
    { key: "Chernivtsi", x: 560, y: 335 },
    { key: "Scheptyzkyj", x: 532, y: 286 },
    { key: "Ivano-Frankivsk", x: 548, y: 319 },
    { key: "Kyiv", x: 626, y: 286 },
    { key: "Lviv", x: 535, y: 298 },
    { key: "Poltava", x: 674, y: 304 },
    { key: "Stryi", x: 538, y: 310 },
    { key: "Verkhovyna", x: 552, y: 327 },
    { key: "Tuzla", x: 464, y: 398 },
    { key: "Sarajevo", x: 456, y: 414 },
    { key: "Rahovec", x: 495, y: 441 },
    { key: "Youth Education Program", x: 459, y: 416 },
    { key: "Junge Medienmacher*innen", x: 451, y: 419 },
    { key: "Albanien", x: 486, y: 461 },
    { key: "Novi Sad", x: 488, y: 390 },
    { key: "Serbien", x: 506, y: 416 },
    { key: "Amman", x: 733, y: 622 }
  ];
  projects.forEach((project) => {
    const position = cityProjectPositions.find((item) => project.name.includes(item.key));
    if (!position) return;
    project.x = position.x;
    project.y = position.y;
  });
  const countries = [
    { id: "bosnia", name: "Bosnien und Herzegowina", anchors: [[450, 408]] },
    { id: "serbia", name: "Serbien", anchors: [[493, 407]] },
    { id: "germany", name: "Deutschland", anchors: [[344, 279]] },
    { id: "jordan", name: "Jordanien", anchors: [[732, 628]] },
    { id: "ukraine", name: "Ukraine", anchors: [[624, 311], [673, 384]] },
    { id: "albania", name: "Albanien", anchors: [[485, 461]] },
    { id: "kosovo", name: "Kosovo", anchors: [[495, 436]] }
  ];

  const state = {
    order: [],
    currentIndex: 0,
    attemptsLeft: MAX_ATTEMPTS_PER_COUNTRY,
    correct: new Set(),
    skipped: new Set(),
    masks: new Map(),
    sourceImageData: null,
    ready: false,
    locked: false,
    projectsVisible: false,
    zoom: 1,
    panX: 0,
    panY: 0,
    dragging: false,
    pinching: false,
    suppressClick: false,
    activePointers: new Map(),
    dragPointerId: null,
    tapPointerId: null,
    tapStartX: 0,
    tapStartY: 0,
    tapMoved: false,
    dragStartX: 0,
    dragStartY: 0,
    dragOriginX: 0,
    dragOriginY: 0,
    pinchStartDistance: 0,
    pinchStartZoom: 1,
    pinchStartPanX: 0,
    pinchStartPanY: 0,
    pinchCenterX: 0,
    pinchCenterY: 0
  };

  const els = {
    canvas: document.getElementById("geo-quiz-map"),
    mapContent: document.getElementById("geo-quiz-map-content"),
    wrap: document.getElementById("geo-quiz-map-wrap"),
    markers: document.getElementById("geo-project-markers"),
    zoomControls: document.getElementById("geo-zoom-controls"),
    zoomIn: document.getElementById("geo-zoom-in"),
    zoomOut: document.getElementById("geo-zoom-out"),
    zoomReset: document.getElementById("geo-zoom-reset"),
    loading: document.getElementById("geo-quiz-loading"),
    question: document.getElementById("geo-quiz-question"),
    country: document.getElementById("geo-quiz-country"),
    progress: document.getElementById("geo-quiz-progress"),
    feedback: document.getElementById("geo-quiz-feedback"),
    skip: document.getElementById("geo-quiz-skip"),
    card: document.querySelector(".geo-quiz-card"),
    projectModal: document.getElementById("geo-project-modal"),
    projectModalBackdrop: document.getElementById("geo-project-modal-backdrop"),
    projectModalClose: document.getElementById("geo-project-modal-close"),
    projectModalImage: document.getElementById("geo-project-modal-image"),
    projectModalLocation: document.getElementById("geo-project-modal-location"),
    projectModalTitle: document.getElementById("geo-project-modal-title"),
    projectModalText: document.getElementById("geo-project-modal-text"),
    projectModalLink: document.getElementById("geo-project-modal-link")
  };

  function sourceX(baseX) {
    return (baseX / BASE_MAP_SIZE.width) * state.sourceImageData.width;
  }

  function sourceY(baseY) {
    return (baseY / BASE_MAP_SIZE.height) * state.sourceImageData.height;
  }

  function scaledAnchors(country) {
    return country.anchors.map(([anchorX, anchorY]) => [
      sourceX(anchorX),
      sourceY(anchorY)
    ]);
  }

  function clampMapPan() {
    if (state.zoom <= 1) {
      state.panX = 0;
      state.panY = 0;
      return;
    }

    const usableZoom = Math.min(state.zoom, 2);
    const maxPanX = (els.wrap.clientWidth * (usableZoom - 1)) / 2;
    const maxPanY = (els.wrap.clientHeight * (usableZoom - 1)) / 2;
    state.panX = Math.max(-maxPanX, Math.min(maxPanX, state.panX));
    state.panY = Math.max(-maxPanY, Math.min(maxPanY, state.panY));
  }

  function applyMapTransform() {
    clampMapPan();
    const markerVisualScale = Math.max(0.65, 1 - (state.zoom - 1) * 0.12);
    const markerHitSize = 24 * markerVisualScale;
    els.mapContent.style.transform =
      `translate(${state.panX}px, ${state.panY}px) scale(${state.zoom})`;
    els.markers.style.setProperty("--marker-scale", String(markerVisualScale));

    if (!state.sourceImageData) return;

    const centerX = els.wrap.clientWidth / 2;
    const centerY = els.wrap.clientHeight / 2;
    els.markers.querySelectorAll(".geo-project-marker").forEach((marker) => {
      const projectX = Number(marker.dataset.x);
      const projectY = Number(marker.dataset.y);
      const baseLeft = (projectX / BASE_MAP_SIZE.width) * els.wrap.clientWidth;
      const baseTop = (projectY / BASE_MAP_SIZE.height) * els.wrap.clientHeight;
      const left = centerX + state.panX + (baseLeft - centerX) * state.zoom;
      const top = centerY + state.panY + (baseTop - centerY) * state.zoom;
      marker.style.left = `${Math.round(left - markerHitSize / 2)}px`;
      marker.style.top = `${Math.round(top - markerHitSize * 0.75)}px`;
    });
  }

  function resetMapView() {
    state.zoom = 1;
    state.panX = 0;
    state.panY = 0;
    applyMapTransform();
  }

  function setZoomAt(nextZoom, clientX, clientY) {
    const rect = els.wrap.getBoundingClientRect();
    const oldZoom = state.zoom;
    const newZoom = Math.min(4, Math.max(1, nextZoom));
    const centerX = els.wrap.clientWidth / 2;
    const centerY = els.wrap.clientHeight / 2;
    const pointX = typeof clientX === "number" ? clientX - rect.left : centerX;
    const pointY = typeof clientY === "number" ? clientY - rect.top : centerY;
    const relativeX = pointX - centerX;
    const relativeY = pointY - centerY;
    const zoomRatio = newZoom / oldZoom;

    state.panX = relativeX - (relativeX - state.panX) * zoomRatio;
    state.panY = relativeY - (relativeY - state.panY) * zoomRatio;
    state.zoom = newZoom;

    if (state.zoom === 1) {
      state.panX = 0;
      state.panY = 0;
    }
    applyMapTransform();
  }

  function setZoom(nextZoom) {
    setZoomAt(Math.round(nextZoom));
  }

  function distanceBetweenPointers(first, second) {
    return Math.hypot(first.clientX - second.clientX, first.clientY - second.clientY);
  }

  function midpointBetweenPointers(first, second) {
    return {
      clientX: (first.clientX + second.clientX) / 2,
      clientY: (first.clientY + second.clientY) / 2
    };
  }

  function startPinchGesture() {
    const pointers = [...state.activePointers.values()];
    if (pointers.length < 2) return;

    const [first, second] = pointers;
    const midpoint = midpointBetweenPointers(first, second);
    state.pinching = true;
    state.dragging = false;
    state.dragPointerId = null;
    state.pinchStartDistance = distanceBetweenPointers(first, second);
    state.pinchStartZoom = state.zoom;
    state.pinchStartPanX = state.panX;
    state.pinchStartPanY = state.panY;
    state.pinchCenterX = midpoint.clientX;
    state.pinchCenterY = midpoint.clientY;
    els.wrap.classList.add("is-dragging");
  }

  function updatePinchGesture() {
    const pointers = [...state.activePointers.values()];
    if (pointers.length < 2 || !state.pinching) return;

    const [first, second] = pointers;
    const distance = distanceBetweenPointers(first, second);
    if (!state.pinchStartDistance) return;

    state.panX = state.pinchStartPanX;
    state.panY = state.pinchStartPanY;
    setZoomAt(
      state.pinchStartZoom * (distance / state.pinchStartDistance),
      state.pinchCenterX,
      state.pinchCenterY
    );
    state.suppressClick = true;
  }

  function stopMapGesture(pointerId) {
    state.activePointers.delete(pointerId);

    if (state.activePointers.size < 2) {
      state.pinching = false;
    }

    if (state.dragPointerId === pointerId || state.activePointers.size === 0) {
      state.dragging = false;
      state.dragPointerId = null;
      els.wrap.classList.remove("is-dragging");
    }

    if (state.activePointers.size === 1 && state.zoom > 1) {
      const pointer = [...state.activePointers.values()][0];
      state.dragPointerId = pointer.pointerId;
      state.dragging = true;
      state.dragStartX = pointer.clientX - state.panX;
      state.dragStartY = pointer.clientY - state.panY;
      state.dragOriginX = pointer.clientX;
      state.dragOriginY = pointer.clientY;
      els.wrap.classList.add("is-dragging");
    }
  }

  function openProjectModal(project) {
    if (!project) return;
    els.markers.querySelectorAll(".geo-project-marker.is-open").forEach((openMarker) => {
      openMarker.classList.remove("is-open");
    });

    els.projectModalTitle.textContent = project.name;
    els.projectModalLocation.textContent = project.location || "SHL Projekt";
    els.projectModalText.textContent = project.description || "";
    els.projectModalLink.href = project.url || "https://www.schueler-helfen-leben.de/unsere-arbeit/projekte/";
    els.projectModalImage.src = project.image || "";
    els.projectModalImage.alt = project.name;
    els.projectModalImage.hidden = !project.image;
    els.projectModal.classList.add("is-visible");
    els.projectModal.setAttribute("aria-hidden", "false");
    els.projectModalClose.focus();
  }

  function closeProjectModal() {
    els.projectModal.classList.remove("is-visible");
    els.projectModal.setAttribute("aria-hidden", "true");
    els.markers.querySelectorAll(".geo-project-marker.is-open").forEach((openMarker) => {
      openMarker.classList.remove("is-open");
    });
  }

  function renderProjectMarkers() {
    els.markers.innerHTML = projects.map((project, index) => `
      <div
        class="geo-project-marker"
        data-x="${project.x}"
        data-y="${project.y}"
        data-index="${index}"
        title="${project.name}"
        tabindex="0"
        role="button"
        aria-label="${project.name}"
      >
        <span class="geo-project-marker-pin" aria-hidden="true"></span>
        <span class="geo-project-marker-label">${project.name}</span>
      </div>
    `).join("");

    els.markers.querySelectorAll(".geo-project-marker").forEach((marker) => {
      marker.addEventListener("pointerdown", (event) => {
        event.stopPropagation();
      });
      marker.addEventListener("click", (event) => {
        event.stopPropagation();
        openProjectModal(projects[Number(marker.dataset.index)]);
      });
      marker.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          marker.click();
        }
      });
    });
    applyMapTransform();
  }

  function showProjects() {
    state.projectsVisible = true;
    resetMapView();
    els.markers.classList.add("is-visible");
    els.zoomControls.classList.add("is-visible");
    els.wrap.classList.add("is-zoomable");
  }

  function hideProjects() {
    state.projectsVisible = false;
    state.dragging = false;
    closeProjectModal();
    resetMapView();
    els.markers.classList.remove("is-visible");
    els.zoomControls.classList.remove("is-visible");
    els.wrap.classList.remove("is-zoomable", "is-dragging");
  }

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function isCoreTargetPixel(red, green, blue) {
    return red > 210 && green > 150 && blue < 90 && red - green < 110;
  }

  function isTargetPixel(red, green, blue) {
    return red > 100 &&
      green > 90 &&
      blue < 180 &&
      red > blue * 1.2 &&
      green > blue * 1.2;
  }

  function nearestCountry(centerX, centerY) {
    let bestCountry = countries[0];
    let bestDistance = Infinity;

    countries.forEach((country) => {
      scaledAnchors(country).forEach(([anchorX, anchorY]) => {
        const distance = Math.hypot(centerX - anchorX, centerY - anchorY);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestCountry = country;
        }
      });
    });

    return bestCountry;
  }

  function buildMasks(imageData) {
    const { width, height, data } = imageData;
    const target = new Uint8Array(width * height);
    const expandedTarget = new Uint8Array(width * height);
    const visited = new Uint8Array(width * height);
    const masks = new Map(countries.map((country) => [country.id, new Set()]));

    for (let index = 0; index < width * height; index++) {
      const offset = index * 4;
      if (isCoreTargetPixel(data[offset], data[offset + 1], data[offset + 2])) {
        target[index] = 1;
      }
      if (isTargetPixel(data[offset], data[offset + 1], data[offset + 2])) {
        expandedTarget[index] = 1;
      }
    }

    for (let start = 0; start < target.length; start++) {
      if (!target[start] || visited[start]) continue;

      const stack = [start];
      const component = [];
      visited[start] = 1;
      let xTotal = 0;
      let yTotal = 0;

      while (stack.length) {
        const index = stack.pop();
        const x = index % width;
        const y = Math.floor(index / width);
        component.push(index);
        xTotal += x;
        yTotal += y;

        const neighbors = [index - 1, index + 1, index - width, index + width];
        neighbors.forEach((neighbor) => {
          if (neighbor < 0 || neighbor >= target.length || visited[neighbor] || !target[neighbor]) return;
          const neighborX = neighbor % width;
          if (Math.abs(neighborX - x) > 1) return;
          visited[neighbor] = 1;
          stack.push(neighbor);
        });
      }

      if (component.length < 20) continue;
      const country = nearestCountry(xTotal / component.length, yTotal / component.length);
      const mask = masks.get(country.id);
      component.forEach((index) => {
        const x = index % width;
        const y = Math.floor(index / width);

        for (let offsetY = -2; offsetY <= 2; offsetY++) {
          for (let offsetX = -2; offsetX <= 2; offsetX++) {
            const expandedX = x + offsetX;
            const expandedY = y + offsetY;
            if (
              expandedX < 0 ||
              expandedX >= width ||
              expandedY < 0 ||
              expandedY >= height
            ) {
              continue;
            }

            const expandedIndex = expandedY * width + expandedX;
            if (expandedTarget[expandedIndex]) mask.add(expandedIndex);
          }
        }
      });
    }

    state.masks = masks;
  }

  function colorForCountry(countryId, revealSkipped) {
    if (state.correct.has(countryId)) return COLORS.correct;
    if (revealSkipped && state.skipped.has(countryId)) return COLORS.skipped;
    return COLORS.blue;
  }

  function renderMap(revealSkipped = false) {
    if (!state.ready) return;

    const output = new ImageData(
      new Uint8ClampedArray(state.sourceImageData.data),
      state.sourceImageData.width,
      state.sourceImageData.height
    );

    for (let index = 0; index < output.data.length; index += 4) {
      if (
        isTargetPixel(
          output.data[index],
          output.data[index + 1],
          output.data[index + 2]
        )
      ) {
        output.data[index] = COLORS.blue[0];
        output.data[index + 1] = COLORS.blue[1];
        output.data[index + 2] = COLORS.blue[2];
      }
    }

    state.masks.forEach((mask, countryId) => {
      const [red, green, blue] = colorForCountry(countryId, revealSkipped);
      mask.forEach((index) => {
        const offset = index * 4;
        output.data[offset] = red;
        output.data[offset + 1] = green;
        output.data[offset + 2] = blue;
      });
    });

    const context = els.canvas.getContext("2d");
    context.clearRect(0, 0, els.canvas.width, els.canvas.height);
    context.putImageData(output, 0, 0);
  }

  function currentCountry() {
    return state.order[state.currentIndex];
  }

  function attemptsText() {
    return state.attemptsLeft === 1
      ? "1 Versuch übrig"
      : `${state.attemptsLeft} Versuche übrig`;
  }

  function setFeedback(message, type = "") {
    els.feedback.textContent = message;
    els.feedback.className = `geo-quiz-feedback${type ? ` is-${type}` : ""}`;
  }

  function renderQuestion() {
    if (state.currentIndex >= state.order.length) {
      finishRound();
      return;
    }

    const country = currentCountry();
    els.progress.textContent = `Land ${state.currentIndex + 1} von ${state.order.length}`;
    els.question.textContent = "Finde:";
    els.country.textContent = country.name;
    els.skip.textContent = "Überspringen";
    els.skip.className = "geo-quiz-skip";
    els.skip.onclick = skipCountry;
    setFeedback(`Tippe auf das richtige Land. ${attemptsText()}.`);
  }

  function isCurrentCountryHit(sourceX, sourceY) {
    const country = currentCountry();
    const mask = state.masks.get(country.id);
    const width = state.sourceImageData.width;
    const tolerance = country.id === "kosovo" ? 22 : 15;

    for (let y = -tolerance; y <= tolerance; y++) {
      for (let x = -tolerance; x <= tolerance; x++) {
        if (x * x + y * y > tolerance * tolerance) continue;
        const pointX = Math.round(sourceX + x);
        const pointY = Math.round(sourceY + y);
        if (mask.has(pointY * width + pointX)) return true;
      }
    }

    return false;
  }

  function advance() {
    state.currentIndex++;
    state.attemptsLeft = MAX_ATTEMPTS_PER_COUNTRY;
    state.locked = false;
    renderQuestion();
  }

  function missCurrentCountry() {
    state.attemptsLeft--;
    els.wrap.classList.remove("geo-quiz-wrong");
    void els.wrap.offsetWidth;
    els.wrap.classList.add("geo-quiz-wrong");

    if (state.attemptsLeft <= 0) {
      const country = currentCountry();
      state.locked = true;
      state.skipped.add(country.id);
      setFeedback(`${country.name} wurde übersprungen. Nächstes Land kommt gleich.`, "wrong");
      window.setTimeout(advance, 850);
      return;
    }

    setFeedback(`Noch nicht ganz. ${attemptsText()}.`, "wrong");
  }

  function handleMapSelection(clientX, clientY) {
    if (!state.ready || state.locked || state.currentIndex >= state.order.length) return;

    const rect = els.canvas.getBoundingClientRect();
    const sourceX = ((clientX - rect.left) / rect.width) * state.sourceImageData.width;
    const sourceY = ((clientY - rect.top) / rect.height) * state.sourceImageData.height;
    const country = currentCountry();

    if (isCurrentCountryHit(sourceX, sourceY)) {
      state.locked = true;
      state.correct.add(country.id);
      renderMap();
      setFeedback("Richtig! Sehr gut gefunden.", "correct");
      window.setTimeout(advance, 650);
      return;
    }

    missCurrentCountry();
  }

  function handleMapClick(event) {
    if (state.suppressClick) {
      state.suppressClick = false;
      return;
    }

    handleMapSelection(event.clientX, event.clientY);
  }

  function isPointInsideMap(clientX, clientY) {
    const rect = els.canvas.getBoundingClientRect();
    return clientX >= rect.left &&
      clientX <= rect.right &&
      clientY >= rect.top &&
      clientY <= rect.bottom;
  }

  function skipCountry() {
    if (state.locked || state.currentIndex >= state.order.length) return;
    state.skipped.add(currentCountry().id);
    state.currentIndex++;
    state.attemptsLeft = MAX_ATTEMPTS_PER_COUNTRY;
    renderQuestion();
  }

  function finishRound() {
    state.locked = true;
    renderMap(true);
    els.progress.textContent = "Fertig!";
    els.question.textContent = "Ergebnis:";
    els.country.textContent = `${state.correct.size} von ${countries.length} richtig`;
    setFeedback(
      state.skipped.size
        ? "Die übersprungenen Länder sind jetzt hellgelb markiert."
        : "Du hast alle Projektländer gefunden!",
      "correct"
    );
    els.skip.textContent = "Nochmal spielen";
    els.skip.className = "geo-quiz-restart";
    els.skip.onclick = startRound;
    showProjects();

    if (state.correct.size === countries.length && state.skipped.size === 0) {
      SHLConfetti.start(PERFECT_SCORE_CONFETTI);
    }
  }

  function startRound() {
    SHLConfetti.clear();
    hideProjects();
    state.order = shuffle(countries);
    state.currentIndex = 0;
    state.correct = new Set();
    state.skipped = new Set();
    state.attemptsLeft = MAX_ATTEMPTS_PER_COUNTRY;
    state.locked = false;
    renderMap();
    renderQuestion();
  }

  function loadMap() {
    const image = new Image();
    image.onload = () => {
      const sourceCanvas = document.createElement("canvas");
      sourceCanvas.width = image.naturalWidth;
      sourceCanvas.height = image.naturalHeight;
      const context = sourceCanvas.getContext("2d", { willReadFrequently: true });
      context.drawImage(image, 0, 0);
      state.sourceImageData = context.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
      els.canvas.width = image.naturalWidth;
      els.canvas.height = image.naturalHeight;
      els.wrap.style.setProperty("--geo-map-ratio", `${image.naturalWidth} / ${image.naturalHeight}`);
      buildMasks(state.sourceImageData);
      renderProjectMarkers();
      state.ready = true;
      els.loading.classList.add("is-hidden");
      startRound();
    };
    image.onerror = () => {
      els.loading.textContent = "Die Karte konnte nicht geladen werden.";
    };
    image.src = MAP_SOURCE;
  }

  function init() {
    if (!els.canvas) return;
    els.canvas.addEventListener("click", handleMapClick);
    els.zoomControls.addEventListener("pointerdown", (event) => {
      event.stopPropagation();
    });
    els.zoomIn.addEventListener("click", (event) => {
      event.stopPropagation();
      setZoom(state.zoom + 1);
    });
    els.zoomOut.addEventListener("click", (event) => {
      event.stopPropagation();
      setZoom(state.zoom - 1);
    });
    els.zoomReset.addEventListener("click", (event) => {
      event.stopPropagation();
      resetMapView();
    });
    els.projectModalClose.addEventListener("click", closeProjectModal);
    els.projectModalBackdrop.addEventListener("click", closeProjectModal);
    els.projectModalImage.addEventListener("error", () => {
      els.projectModalImage.hidden = true;
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && els.projectModal.classList.contains("is-visible")) {
        closeProjectModal();
      }
    });
    els.wrap.addEventListener("pointerdown", (event) => {
      if (!state.ready || event.button > 0) return;
      state.activePointers.set(event.pointerId, event);
      els.wrap.setPointerCapture(event.pointerId);

      if (state.activePointers.size >= 2) {
        event.preventDefault();
        state.suppressClick = true;
        state.tapMoved = true;
        startPinchGesture();
        return;
      }

      state.tapPointerId = event.pointerId;
      state.tapStartX = event.clientX;
      state.tapStartY = event.clientY;
      state.tapMoved = false;

      if (state.zoom === 1) return;
      state.dragPointerId = event.pointerId;
      state.dragging = true;
      state.dragStartX = event.clientX - state.panX;
      state.dragStartY = event.clientY - state.panY;
      state.dragOriginX = event.clientX;
      state.dragOriginY = event.clientY;
      els.wrap.classList.add("is-dragging");
    });
    els.wrap.addEventListener("pointermove", (event) => {
      if (!state.activePointers.has(event.pointerId)) return;
      state.activePointers.set(event.pointerId, event);

      if (state.activePointers.size >= 2) {
        event.preventDefault();
        state.tapMoved = true;
        updatePinchGesture();
        return;
      }

      if (
        state.tapPointerId === event.pointerId &&
        Math.hypot(event.clientX - state.tapStartX, event.clientY - state.tapStartY) > 6
      ) {
        state.tapMoved = true;
      }

      if (!state.dragging || state.dragPointerId !== event.pointerId) return;
      state.panX = event.clientX - state.dragStartX;
      state.panY = event.clientY - state.dragStartY;
      if (Math.hypot(event.clientX - state.dragOriginX, event.clientY - state.dragOriginY) > 6) {
        state.suppressClick = true;
        state.tapMoved = true;
      }
      applyMapTransform();
    });
    els.wrap.addEventListener("pointerup", (event) => {
      const shouldSelect =
        state.tapPointerId === event.pointerId &&
        !state.tapMoved &&
        !state.pinching &&
        isPointInsideMap(event.clientX, event.clientY);

      stopMapGesture(event.pointerId);
      if (els.wrap.hasPointerCapture(event.pointerId)) {
        els.wrap.releasePointerCapture(event.pointerId);
      }

      if (shouldSelect) {
        state.suppressClick = true;
        handleMapSelection(event.clientX, event.clientY);
      }

      if (state.tapPointerId === event.pointerId) {
        state.tapPointerId = null;
        state.tapMoved = false;
      }
    });
    els.wrap.addEventListener("pointercancel", (event) => {
      stopMapGesture(event.pointerId);
      if (els.wrap.hasPointerCapture(event.pointerId)) {
        els.wrap.releasePointerCapture(event.pointerId);
      }
      if (state.tapPointerId === event.pointerId) {
        state.tapPointerId = null;
        state.tapMoved = false;
      }
    });
    els.wrap.addEventListener("lostpointercapture", (event) => {
      stopMapGesture(event.pointerId);
      if (state.tapPointerId === event.pointerId) {
        state.tapPointerId = null;
        state.tapMoved = false;
      }
    });
    els.wrap.addEventListener("wheel", (event) => {
      if (!state.ready) return;
      event.preventDefault();
      setZoomAt(state.zoom + (event.deltaY < 0 ? 1 : -1), event.clientX, event.clientY);
    }, { passive: false });
    window.addEventListener("resize", applyMapTransform);
    SHLApp.onStartGeoQuiz(() => {
      if (state.ready) startRound();
    });
    SHLApp.onBackGeoQuiz(() => {
      SHLConfetti.clear();
      hideProjects();
      state.locked = true;
    });
    loadMap();
  }

  return { init };
})();

SHLGeoQuiz.init();
