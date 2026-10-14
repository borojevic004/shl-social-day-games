const SHLModeSelection = (() => {
  const STORAGE_KEY = "shl-app-mode";
  const VALID_MODES = new Set(["short", "full"]);
  const shortButton = document.getElementById("select-mode-short");
  const fullButton = document.getElementById("select-mode-full");
  const changeButton = document.getElementById("change-app-mode");
  let currentMode = null;

  function readSavedMode() {
    try {
      const savedMode = window.sessionStorage.getItem(STORAGE_KEY);
      return VALID_MODES.has(savedMode) ? savedMode : null;
    } catch {
      return currentMode;
    }
  }

  function saveMode(mode) {
    currentMode = mode;
    try {
      window.sessionStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // The in-memory value still keeps the mode working when storage is blocked.
    }
  }

  function selectMode(mode) {
    if (!VALID_MODES.has(mode)) return;
    saveMode(mode);
    document.body.dataset.appMode = mode;
    SHLApp.showScreen("home");
  }

  function showModeSelection() {
    SHLApp.showScreen("modeSelection");
  }

  function init() {
    if (!shortButton || !fullButton || !changeButton || typeof SHLApp === "undefined") return;

    shortButton.addEventListener("click", () => selectMode("short"));
    fullButton.addEventListener("click", () => selectMode("full"));
    changeButton.addEventListener("click", showModeSelection);

    const savedMode = readSavedMode();
    if (savedMode) selectMode(savedMode);
  }

  return { init, selectMode, showModeSelection };
})();

SHLModeSelection.init();
