const SHLProjectsMap = (() => {
  const MAP_IMAGE = "assets/maps/project_regions_blue_hd.png";
  const IMAGE_WIDTH = 1137;
  const IMAGE_HEIGHT = 840;
  const IMAGE_BOUNDS = [[0, 0], [IMAGE_HEIGHT, IMAGE_WIDTH]];
  const els = {
    map: document.getElementById("projects-map"),
    fallback: document.getElementById("projects-map-fallback")
  };
  let map;
  let initialized = false;

  const modal = {
    root: document.getElementById("geo-project-modal"),
    close: document.getElementById("geo-project-modal-close"),
    image: document.getElementById("geo-project-modal-image"),
    location: document.getElementById("geo-project-modal-location"),
    title: document.getElementById("geo-project-modal-title"),
    text: document.getElementById("geo-project-modal-text"),
    link: document.getElementById("geo-project-modal-link")
  };

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function popupHtml(project) {
    return `
      <article class="projects-popup-card">
        <img src="${escapeHtml(project.image)}" alt="${escapeHtml(project.title)}" loading="lazy">
        <div class="projects-popup-body">
          <p class="projects-popup-location">${escapeHtml(project.location)}</p>
          <h3 class="projects-popup-title">${escapeHtml(project.title)}</h3>
          <p class="projects-popup-text">${escapeHtml(project.description)}</p>
          <a class="projects-popup-link" href="${escapeHtml(project.url)}" target="_blank" rel="noopener">Mehr erfahren</a>
        </div>
      </article>
    `;
  }

  function markerIcon() {
    return L.divIcon({
      className: "",
      html: '<span class="projects-marker" aria-hidden="true"></span><span class="projects-marker-label"></span>',
      iconSize: [30, 30],
      iconAnchor: [15, 30],
      popupAnchor: [0, -30]
    });
  }

  function openProjectModal(project) {
    if (!modal.root || !project) return;
    modal.title.textContent = project.title;
    modal.location.textContent = project.location;
    modal.text.textContent = project.description;
    modal.link.href = project.url;
    modal.image.src = project.image;
    modal.image.alt = project.title;
    modal.image.hidden = !project.image;
    modal.root.classList.add("is-visible");
    modal.root.setAttribute("aria-hidden", "false");
    if (modal.close) modal.close.focus();
  }

  function attachMarkerEvents(marker, project, index) {
    const markerElement = marker.getElement();
    if (!markerElement || markerElement.dataset.projectIndex) return;
    markerElement.dataset.projectIndex = String(index);
    markerElement.removeAttribute("title");
    markerElement.setAttribute("aria-label", project.title);
    markerElement.style.pointerEvents = "auto";
    const label = markerElement.querySelector(".projects-marker-label");
    if (label) label.textContent = project.title;
    markerElement.addEventListener("pointerdown", () => openProjectModal(project));
    markerElement.addEventListener("mousedown", () => openProjectModal(project));
    markerElement.addEventListener("click", () => openProjectModal(project));
    markerElement.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProjectModal(project);
      }
    });
  }

  function initMap() {
    if (initialized || !els.map) return;
    initialized = true;

    if (typeof L === "undefined" || !Array.isArray(window.SHL_PROJECTS)) {
      els.fallback.hidden = false;
      return;
    }

    const projects = window.SHL_PROJECTS;
    const handleMarkerPointer = (event) => {
      const markerElement = event.target.closest(".leaflet-marker-icon[data-project-index]");
      if (!markerElement) return;
      event.preventDefault();
      event.stopPropagation();
      openProjectModal(projects[Number(markerElement.dataset.projectIndex)]);
    };
    els.map.addEventListener("pointerdown", handleMarkerPointer, true);
    els.map.addEventListener("mousedown", handleMarkerPointer, true);
    els.map.addEventListener("click", handleMarkerPointer, true);

    map = L.map(els.map, {
      zoomControl: true,
      scrollWheelZoom: true,
      crs: L.CRS.Simple,
      minZoom: -1,
      maxZoom: 3,
      zoomSnap: 0.1,
      zoomDelta: 0.5,
      maxBounds: IMAGE_BOUNDS,
      maxBoundsViscosity: 0.9
    });

    L.imageOverlay(MAP_IMAGE, IMAGE_BOUNDS, {
      alt: "Karte der SHL Projektlaender"
    }).addTo(map);

    projects.forEach((project, index) => {
      if (typeof project.mapX !== "number" || typeof project.mapY !== "number") return;
      const marker = L.marker([IMAGE_HEIGHT - project.mapY, project.mapX], {
        icon: markerIcon()
      })
        .addTo(map);

      marker.on("click", () => openProjectModal(project));
      marker.on("add", () => attachMarkerEvents(marker, project, index));
      window.setTimeout(() => attachMarkerEvents(marker, project, index), 0);
    });

    map.fitBounds(IMAGE_BOUNDS, { padding: [0, 0] });
  }

  function start() {
    initMap();
    window.setTimeout(() => {
      if (map) map.invalidateSize();
    }, 80);
  }

  function init() {
    SHLApp.onStartProjects(start);
    SHLApp.onBackProjects(() => {
      if (modal.root) {
        modal.root.classList.remove("is-visible");
        modal.root.setAttribute("aria-hidden", "true");
      }
    });
  }

  return { init };
})();

SHLProjectsMap.init();
