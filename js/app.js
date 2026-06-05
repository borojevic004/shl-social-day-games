const SHLApp = (() => {
  const screens = {
    home: document.getElementById("screen-home"),
    matchmaker: document.getElementById("screen-matchmaker")
  };
  const startMatchmakerBtn = document.getElementById("start-matchmaker");

  function showScreen(name) {
    Object.entries(screens).forEach(([screenName, screen]) => {
      if (!screen) return;
      const isActive = screenName === name;
      screen.classList.toggle("screen-active", isActive);
      screen.setAttribute("aria-hidden", String(!isActive));
    });
  }

  function onStartMatchmaker(callback) {
    if (!startMatchmakerBtn) return;
    startMatchmakerBtn.addEventListener("click", () => {
      showScreen("matchmaker");
      callback();
    });
  }

  return {
    showScreen,
    onStartMatchmaker
  };
})();
