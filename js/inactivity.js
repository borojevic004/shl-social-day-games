const SHLInactivity = (() => {
  const TIMEOUT_MS = 40_000;
  const ACTIVITY_EVENTS = ["pointerdown", "keydown", "wheel"];
  const PAUSE_SELECTOR = "[data-inactivity-pause]";
  let timeoutId = null;
  let activeScreen = "modeSelection";
  let isPaused = false;

  function isIdleScreen() {
    return activeScreen === "home" || activeScreen === "modeSelection";
  }

  function clearTimer() {
    if (timeoutId === null) return;
    window.clearTimeout(timeoutId);
    timeoutId = null;
  }

  function startTimer() {
    clearTimer();
    if (isIdleScreen() || isPaused) return;

    timeoutId = window.setTimeout(() => {
      timeoutId = null;
      if (typeof SHLApp !== "undefined") SHLApp.returnToHome();
    }, TIMEOUT_MS);
  }

  function updatePauseButtons() {
    document.querySelectorAll(PAUSE_SELECTOR).forEach((button) => {
      button.classList.toggle("is-paused", isPaused);
      button.setAttribute("aria-pressed", String(isPaused));
      button.title = isPaused
        ? "Pausiert - die nächste Aktion setzt den Timer fort"
        : "Automatische Rückkehr pausieren";
      const label = button.querySelector("[data-pause-label]");
      if (label) label.textContent = isPaused ? "Pausiert" : "Pause";
    });
  }

  function pauseTimer() {
    if (isIdleScreen()) return;
    isPaused = true;
    clearTimer();
    updatePauseButtons();
  }

  function registerActivity(event) {
    const target = event.target instanceof Element ? event.target : null;
    if (target?.closest(PAUSE_SELECTOR) || isIdleScreen()) return;

    if (isPaused) {
      isPaused = false;
      updatePauseButtons();
    }
    startTimer();
  }

  function handleScreenChange(event) {
    activeScreen = event.detail?.screen || "home";
    isPaused = false;
    updatePauseButtons();
    startTimer();
  }

  function init() {
    ACTIVITY_EVENTS.forEach((eventName) => {
      document.addEventListener(eventName, registerActivity, { passive: true });
    });
    document.querySelectorAll(PAUSE_SELECTOR).forEach((button) => {
      button.addEventListener("click", pauseTimer);
    });
    window.addEventListener("shl:screenchange", handleScreenChange);
    updatePauseButtons();
  }

  return { init };
})();

SHLInactivity.init();
