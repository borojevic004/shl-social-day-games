const SHLApp = (() => {
  const screens = {
    home: document.getElementById("screen-home"),
    matchmaker: document.getElementById("screen-matchmaker")
  };
  const startMatchmakerBtn = document.getElementById("start-matchmaker");
  const backHomeBtn = document.getElementById("back-home");

  function showScreen(name) {
    document.body.classList.toggle("home-active", name === "home");

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

  function onBackHome(callback) {
    if (!backHomeBtn) return;
    backHomeBtn.addEventListener("click", () => {
      if (typeof SHLModal !== "undefined") SHLModal.close();
      if (typeof SHLConfetti !== "undefined") SHLConfetti.clear();
      showScreen("home");
      if (callback) callback();
    });
  }

  return {
    showScreen,
    onStartMatchmaker,
    onBackHome
  };
})();
