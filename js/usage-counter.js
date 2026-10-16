const SHLUsageCounter = (() => {
  const STORAGE_KEY = "shl-anonymous-usage-v1";
  const BACKUP_STORAGE_KEY = "shl-anonymous-usage-backup-v1";
  const DEFAULT_SCHOOL = "Nicht angegeben";
  const GAMES = [
    { id: "matchmaker", label: "Matchmaker" },
    { id: "jobSwiper", label: "Job Swiper" },
    { id: "geoQuiz", label: "Geo Quiz" },
    { id: "simulator", label: "Simulator" }
  ];

  let data = loadData();
  let storageAvailable = true;

  const els = {
    open: document.getElementById("usage-stats-open"),
    activeLabel: document.getElementById("usage-active-label"),
    modal: document.getElementById("usage-counter-modal"),
    backdrop: document.getElementById("usage-counter-backdrop"),
    close: document.getElementById("usage-counter-close"),
    current: document.getElementById("usage-current-visit"),
    form: document.getElementById("usage-visit-form"),
    school: document.getElementById("usage-school-name"),
    history: document.getElementById("usage-history"),
    export: document.getElementById("usage-export"),
    backup: document.getElementById("usage-backup"),
    importTrigger: document.getElementById("usage-import-trigger"),
    import: document.getElementById("usage-import-file")
  };

  function emptyCounters() {
    return Object.fromEntries(GAMES.map((game) => [game.id, { started: 0, completed: 0 }]));
  }

  function normalizeCounters(counters = {}) {
    const normalized = emptyCounters();
    GAMES.forEach((game) => {
      normalized[game.id].started = Math.max(0, Number(counters[game.id]?.started) || 0);
      normalized[game.id].completed = Math.max(0, Number(counters[game.id]?.completed) || 0);
    });
    return normalized;
  }

  function normalizeData(stored) {
    if (!stored || !Array.isArray(stored.visits)) throw new Error("No saved usage data");
    return {
      activeVisitId: stored.activeVisitId || null,
      visits: stored.visits.map((visit) => ({
        id: String(visit.id),
        school: String(visit.school || DEFAULT_SCHOOL),
        startedAt: visit.startedAt || new Date().toISOString(),
        counters: normalizeCounters(visit.counters)
      }))
    };
  }

  function loadData() {
    for (const key of [STORAGE_KEY, BACKUP_STORAGE_KEY]) {
      try {
        const stored = JSON.parse(window.localStorage.getItem(key));
        return normalizeData(stored);
      } catch {
        // Try the rolling backup before starting with an empty history.
      }
    }
    return { activeVisitId: null, visits: [] };
  }

  function saveData() {
    try {
      const previous = window.localStorage.getItem(STORAGE_KEY);
      if (previous) window.localStorage.setItem(BACKUP_STORAGE_KEY, previous);
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      storageAvailable = true;
    } catch {
      storageAvailable = false;
    }
    render();
  }

  function localDateKey(value = new Date()) {
    const date = value instanceof Date ? value : new Date(value);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  }

  function formatDate(value) {
    return new Intl.DateTimeFormat("de-DE", {
      dateStyle: "medium",
      timeStyle: "short"
    }).format(new Date(value));
  }

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function activeVisit() {
    return data.visits.find((visit) => visit.id === data.activeVisitId) || null;
  }

  function createVisit(school = DEFAULT_SCHOOL) {
    const visit = {
      id: `visit-${Date.now()}-${Math.random().toString(16).slice(2)}`,
      school: school.trim() || DEFAULT_SCHOOL,
      startedAt: new Date().toISOString(),
      counters: emptyCounters()
    };
    data.visits.push(visit);
    data.activeVisitId = visit.id;
    saveData();
    return visit;
  }

  function startVisit(school) {
    const name = String(school || "").trim();
    if (!name) return null;

    const current = activeVisit();
    if (
      current &&
      localDateKey(current.startedAt) === localDateKey() &&
      current.school === DEFAULT_SCHOOL
    ) {
      current.school = name;
      current.startedAt = new Date().toISOString();
      saveData();
      return current;
    }

    return createVisit(name);
  }

  function deleteVisit(visitId) {
    const visit = data.visits.find((item) => item.id === visitId);
    if (!visit) return;

    const shouldDelete = window.confirm(
      `Schulbesuch „${visit.school}“ vom ${formatDate(visit.startedAt)} wirklich löschen?\n\nDiese Aktion kann nicht rückgängig gemacht werden.`
    );
    if (!shouldDelete) return;

    data.visits = data.visits.filter((item) => item.id !== visitId);
    if (data.activeVisitId === visitId) data.activeVisitId = null;
    saveData();
  }

  function ensureCurrentVisit() {
    const current = activeVisit();
    if (current && localDateKey(current.startedAt) === localDateKey()) return current;
    return createVisit(DEFAULT_SCHOOL);
  }

  function record(gameId, field) {
    const game = GAMES.find((item) => item.id === gameId);
    if (!game || !["started", "completed"].includes(field)) return;

    const visit = ensureCurrentVisit();
    visit.counters[gameId][field] += 1;
    saveData();
  }

  function totals(visit) {
    return GAMES.reduce((sum, game) => {
      sum.started += visit.counters[game.id].started;
      sum.completed += visit.counters[game.id].completed;
      return sum;
    }, { started: 0, completed: 0 });
  }

  function gameStatsHtml(visit) {
    return GAMES.map((game) => {
      const counter = visit.counters[game.id];
      return `
        <div class="usage-game-stat">
          <strong>${game.label}</strong>
          <span><b>${counter.started}</b> gestartet</span>
          <span><b>${counter.completed}</b> beendet</span>
        </div>`;
    }).join("");
  }

  function render() {
    if (!els.activeLabel || !els.history || !els.current) return;
    const current = activeVisit();
    const currentIsToday = current && localDateKey(current.startedAt) === localDateKey();

    els.activeLabel.textContent = currentIsToday
      ? `Aktuell: ${current.school}`
      : "Noch kein Schulbesuch für heute";

    els.current.innerHTML = currentIsToday
      ? `<span>Aktueller Schulbesuch</span><strong>${escapeHtml(current.school)}</strong><small>${formatDate(current.startedAt)}</small>`
      : `<span>Aktueller Schulbesuch</span><strong>Noch nicht gestartet</strong><small>Bitte unten eine Schule eintragen.</small>`;

    const visits = [...data.visits].sort((a, b) => new Date(b.startedAt) - new Date(a.startedAt));
    els.history.innerHTML = visits.length
      ? visits.map((visit) => {
          const visitTotals = totals(visit);
          const isActive = currentIsToday && visit.id === current.id;
          return `
            <article class="usage-visit${isActive ? " is-active" : ""}">
              <header>
                <div>
                  <span>${formatDate(visit.startedAt)}</span>
                  <h3>${escapeHtml(visit.school)}</h3>
                </div>
                <div class="usage-visit-actions">
                  <strong>${visitTotals.completed} / ${visitTotals.started} beendet</strong>
                  <button type="button" data-delete-visit="${escapeHtml(visit.id)}">Löschen</button>
                </div>
              </header>
              <div class="usage-games">${gameStatsHtml(visit)}</div>
            </article>`;
        }).join("")
      : `<p class="usage-empty">Noch keine Nutzung gespeichert.</p>`;

    els.export.disabled = visits.length === 0;
    els.backup.disabled = visits.length === 0;
    els.modal?.classList.toggle("storage-warning", !storageAvailable);
  }

  function openModal() {
    render();
    els.modal.classList.add("is-open");
    els.modal.setAttribute("aria-hidden", "false");
    els.close.focus();
  }

  function closeModal() {
    els.modal.classList.remove("is-open");
    els.modal.setAttribute("aria-hidden", "true");
    els.open.focus();
  }

  function csvCell(value) {
    return `"${String(value).replace(/"/g, '""')}"`;
  }

  function downloadFile(content, type, filename) {
    const url = URL.createObjectURL(new Blob([content], { type }));
    const link = document.createElement("a");
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    link.remove();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  function exportCsv() {
    if (!data.visits.length) return;
    const headers = ["Datum", "Uhrzeit", "Schule"];
    GAMES.forEach((game) => headers.push(`${game.label} gestartet`, `${game.label} beendet`));

    const rows = [...data.visits]
      .sort((a, b) => new Date(a.startedAt) - new Date(b.startedAt))
      .map((visit) => {
        const date = new Date(visit.startedAt);
        const row = [
          date.toLocaleDateString("de-DE"),
          date.toLocaleTimeString("de-DE", { hour: "2-digit", minute: "2-digit" }),
          visit.school
        ];
        GAMES.forEach((game) => {
          row.push(visit.counters[game.id].started, visit.counters[game.id].completed);
        });
        return row.map(csvCell).join(";");
      });

    const content = `\uFEFF${headers.map(csvCell).join(";")}\n${rows.join("\n")}`;
    downloadFile(content, "text/csv;charset=utf-8", `shl-nutzungszahlen-${localDateKey()}.csv`);
  }

  function exportBackup() {
    if (!data.visits.length) return;
    const content = JSON.stringify({
      format: "shl-usage-backup",
      version: 1,
      exportedAt: new Date().toISOString(),
      data
    }, null, 2);
    downloadFile(content, "application/json;charset=utf-8", `shl-nutzungsbackup-${localDateKey()}.json`);
  }

  async function importBackup(file) {
    if (!file) return;
    try {
      const parsed = JSON.parse(await file.text());
      const imported = normalizeData(parsed?.format === "shl-usage-backup" ? parsed.data : parsed);
      const mergedVisits = new Map(imported.visits.map((visit) => [visit.id, visit]));
      data.visits.forEach((visit) => mergedVisits.set(visit.id, visit));
      data.visits = [...mergedVisits.values()];

      if (!activeVisit() && imported.activeVisitId) {
        data.activeVisitId = imported.activeVisitId;
      }

      saveData();
      window.alert(`${imported.visits.length} Schulbesuche wurden aus der Sicherung gelesen.`);
    } catch {
      window.alert("Diese Datei ist keine gültige SHL-Sicherung.");
    } finally {
      els.import.value = "";
    }
  }

  function init() {
    if (!els.open || !els.modal || !els.form) return;
    els.open.addEventListener("click", openModal);
    els.close.addEventListener("click", closeModal);
    els.backdrop.addEventListener("click", closeModal);
    els.export.addEventListener("click", exportCsv);
    els.backup.addEventListener("click", exportBackup);
    els.importTrigger.addEventListener("click", () => els.import.click());
    els.import.addEventListener("change", () => importBackup(els.import.files[0]));
    els.history.addEventListener("click", (event) => {
      const deleteButton = event.target.closest("[data-delete-visit]");
      if (deleteButton) deleteVisit(deleteButton.dataset.deleteVisit);
    });
    els.form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!startVisit(els.school.value)) return;
      els.school.value = "";
      render();
    });
    document.addEventListener("keydown", (event) => {
      if (event.key === "Escape" && els.modal.classList.contains("is-open")) closeModal();
    });
    render();
  }

  return {
    init,
    recordStart(gameId) {
      record(gameId, "started");
    },
    recordComplete(gameId) {
      record(gameId, "completed");
    }
  };
})();

SHLUsageCounter.init();
