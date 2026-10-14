const SHLApp = (() => {
  const screens = {
    modeSelection: document.getElementById("screen-mode-selection"),
    home: document.getElementById("screen-home"),
    matchmaker: document.getElementById("screen-matchmaker"),
    jobSwiper: document.getElementById("screen-job-swiper"),
    geoQuiz: document.getElementById("screen-geo-quiz"),
    projects: document.getElementById("screen-projects"),
    simulator: document.getElementById("screen-simulator")
  };
  const startMatchmakerBtn = document.getElementById("start-matchmaker");
  const startJobSwiperBtn = document.getElementById("start-job-swiper");
  const startGeoQuizBtn = document.getElementById("start-geo-quiz");
  const startProjectsBtn = document.getElementById("start-projects");
  const startSimulatorBtn = document.getElementById("start-simulator");
  const backHomeBtn = document.getElementById("back-home");
  const jobSwiperBackBtn = document.getElementById("job-swiper-back");
  const geoQuizBackBtn = document.getElementById("geo-quiz-back");
  const projectsBackBtn = document.getElementById("projects-back");
  const simulatorBackBtn = document.getElementById("simulator-back");

  function showScreen(name) {
    document.body.classList.toggle("home-active", name === "home" || name === "modeSelection");
    document.body.classList.toggle("mode-selection-active", name === "modeSelection");
    document.body.classList.toggle("job-swiper-active", name === "jobSwiper");
    document.body.classList.toggle("matchmaker-active", name === "matchmaker");
    document.body.classList.toggle("geo-quiz-active", name === "geoQuiz");
    document.body.classList.toggle("projects-active", name === "projects");
    document.body.classList.toggle("simulator-active", name === "simulator");

    Object.entries(screens).forEach(([screenName, screen]) => {
      if (!screen) return;
      const isActive = screenName === name;
      screen.classList.toggle("screen-active", isActive);
      screen.setAttribute("aria-hidden", String(!isActive));
    });

    window.dispatchEvent(new CustomEvent("shl:screenchange", {
      detail: { screen: name }
    }));
  }

  function returnToHome() {
    const activeScreen = Object.entries(screens).find(([, screen]) =>
      screen && screen.classList.contains("screen-active")
    );

    if (!activeScreen || activeScreen[0] === "home" || activeScreen[0] === "modeSelection") return;

    const backButtons = {
      matchmaker: backHomeBtn,
      jobSwiper: jobSwiperBackBtn,
      geoQuiz: geoQuizBackBtn,
      projects: projectsBackBtn,
      simulator: simulatorBackBtn
    };
    const backButton = backButtons[activeScreen[0]];

    if (backButton) {
      backButton.click();
      return;
    }

    if (typeof SHLModal !== "undefined") SHLModal.close();
    if (typeof SHLConfetti !== "undefined") SHLConfetti.clear();
    showScreen("home");
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

  function onStartJobSwiper(callback) {
    if (!startJobSwiperBtn) return;
    startJobSwiperBtn.addEventListener("click", () => {
      showScreen("jobSwiper");
      callback();
    });
  }

  function onBackJobSwiper(callback) {
    if (!jobSwiperBackBtn) return;
    jobSwiperBackBtn.addEventListener("click", () => {
      if (typeof SHLModal !== "undefined") SHLModal.close();
      if (typeof SHLConfetti !== "undefined") SHLConfetti.clear();
      showScreen("home");
      if (callback) callback();
    });
  }

  function onStartGeoQuiz(callback) {
    if (!startGeoQuizBtn) return;
    startGeoQuizBtn.addEventListener("click", () => {
      showScreen("geoQuiz");
      callback();
    });
  }

  function onBackGeoQuiz(callback) {
    if (!geoQuizBackBtn) return;
    geoQuizBackBtn.addEventListener("click", () => {
      showScreen("home");
      if (callback) callback();
    });
  }

  function onStartProjects(callback) {
    if (!startProjectsBtn) return;
    startProjectsBtn.addEventListener("click", () => {
      showScreen("projects");
      callback();
    });
  }

  function onBackProjects(callback) {
    if (!projectsBackBtn) return;
    projectsBackBtn.addEventListener("click", () => {
      showScreen("home");
      if (callback) callback();
    });
  }

  function onStartSimulator(callback) {
    if (!startSimulatorBtn) return;
    startSimulatorBtn.addEventListener("click", () => {
      showScreen("simulator");
      callback();
    });
  }

  function onBackSimulator(callback) {
    if (!simulatorBackBtn) return;
    simulatorBackBtn.addEventListener("click", () => {
      if (typeof SHLConfetti !== "undefined") SHLConfetti.clear();
      showScreen("home");
      if (callback) callback();
    });
  }

  return {
    showScreen,
    returnToHome,
    onStartMatchmaker,
    onBackHome,
    onStartJobSwiper,
    onBackJobSwiper,
    onStartGeoQuiz,
    onBackGeoQuiz,
    onStartProjects,
    onBackProjects,
    onStartSimulator,
    onBackSimulator
  };
})();
