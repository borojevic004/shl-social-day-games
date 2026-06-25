const SHLApp = (() => {
  const screens = {
    home: document.getElementById("screen-home"),
    matchmaker: document.getElementById("screen-matchmaker"),
    jobSwiper: document.getElementById("screen-job-swiper"),
    geoQuiz: document.getElementById("screen-geo-quiz"),
    projects: document.getElementById("screen-projects")
  };
  const startMatchmakerBtn = document.getElementById("start-matchmaker");
  const startJobSwiperBtn = document.getElementById("start-job-swiper");
  const startGeoQuizBtn = document.getElementById("start-geo-quiz");
  const startProjectsBtn = document.getElementById("start-projects");
  const backHomeBtn = document.getElementById("back-home");
  const jobSwiperBackBtn = document.getElementById("job-swiper-back");
  const geoQuizBackBtn = document.getElementById("geo-quiz-back");
  const projectsBackBtn = document.getElementById("projects-back");

  function showScreen(name) {
    document.body.classList.toggle("home-active", name === "home");
    document.body.classList.toggle("job-swiper-active", name === "jobSwiper");
    document.body.classList.toggle("matchmaker-active", name === "matchmaker");
    document.body.classList.toggle("geo-quiz-active", name === "geoQuiz");
    document.body.classList.toggle("projects-active", name === "projects");

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

  return {
    showScreen,
    onStartMatchmaker,
    onBackHome,
    onStartJobSwiper,
    onBackJobSwiper,
    onStartGeoQuiz,
    onBackGeoQuiz,
    onStartProjects,
    onBackProjects
  };
})();
