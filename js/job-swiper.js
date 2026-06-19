const SHLJobSwiper = (() => {
  const state = {
    jobs: [],
    currentIndex: 0,
    likedJobs: [],
    tutorialActive: false,
    tutorialRun: 0,
    roundActive: false
  };

  const els = {
    card: document.getElementById("job-swiper-card"),
    noBtn: document.getElementById("job-swiper-no"),
    yesBtn: document.getElementById("job-swiper-yes"),
    controls: document.getElementById("job-swiper-controls")
  };

  function shuffle(items) {
    const shuffled = [...items];
    for (let index = shuffled.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }
    return shuffled;
  }

  function imageHtml(job, className = "job-swiper-image") {
    if (!job.image) return `<div class="job-swiper-image-fallback">Bild folgt</div>`;
    return `
      <img class="${className}" src="${job.image}" alt="${job.title}"
        onerror="this.outerHTML='<div class=&quot;job-swiper-image-fallback&quot;>Bild folgt</div>'" />
    `;
  }

  function displayTitle(title) {
    return title
      .replace(/\*/g, "<wbr>*")
      .replace(/\s\/\s/g, " <wbr>/ ");
  }

  function wait(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }

  function renderJob() {
    if (!state.roundActive) return;
    if (state.currentIndex >= state.jobs.length) {
      renderFinished();
      return;
    }

    const job = state.jobs[state.currentIndex];
    const tasks = SHLJobDetails.getJobTasks(job)
      .map((task) => `<li>${task}</li>`)
      .join("");
    els.card.className = "job-swiper-card job-swiper-card-pop";
    els.card.innerHTML = `
      <div class="job-swiper-photo">
        ${imageHtml(job)}
        <div class="job-swiper-card-stamp job-swiper-stamp-no">Eher nicht</div>
        <div class="job-swiper-card-stamp job-swiper-stamp-yes">Gefällt mir</div>
      </div>
      <div class="job-swiper-card-copy">
        <span>${job.group}</span>
        <h2>${displayTitle(job.title)}</h2>
        <div class="job-swiper-tasks">
          <p>Das kannst du in diesem Beruf machen:</p>
          <ul>${tasks}</ul>
        </div>
      </div>
    `;
    els.card.setAttribute("aria-label", `${job.title}. ${job.group}`);
  }

  async function animateTutorialStep(direction, label, runId) {
    if (runId !== state.tutorialRun) return false;

    const offset = direction === "left" ? -58 : 58;
    const rotation = direction === "left" ? -4 : 4;
    els.card.dataset.tutorialDirection = direction;
    els.card.dataset.tutorialLabel = label;

    const animation = els.card.animate([
      { transform: "translateX(0) rotate(0deg)" },
      { transform: `translateX(${offset}px) rotate(${rotation}deg)`, offset: 0.5 },
      { transform: `translateX(${offset}px) rotate(${rotation}deg)`, offset: 0.72 },
      { transform: "translateX(0) rotate(0deg)" }
    ], {
      duration: 900,
      easing: "ease-in-out"
    });

    try {
      await animation.finished;
    } catch {
      return false;
    }
    return runId === state.tutorialRun;
  }

  async function playTutorial() {
    const runId = ++state.tutorialRun;
    state.tutorialActive = true;
    els.card.classList.add("job-swiper-tutorial");
    els.controls.classList.add("job-swiper-controls-locked");
    els.noBtn.disabled = true;
    els.yesBtn.disabled = true;

    await wait(300);
    if (!await animateTutorialStep("left", "← Eher nicht", runId)) return;
    await wait(100);
    if (!await animateTutorialStep("right", "Gefällt mir →", runId)) return;
    if (runId !== state.tutorialRun) return;

    finishTutorial();
  }

  function finishTutorial() {
    els.card.classList.remove("job-swiper-tutorial");
    els.card.removeAttribute("data-tutorial-direction");
    els.card.removeAttribute("data-tutorial-label");
    els.controls.classList.remove("job-swiper-controls-locked");
    els.noBtn.disabled = false;
    els.yesBtn.disabled = false;
    state.tutorialActive = false;
  }

  function showMatch(job) {
    SHLModal.open(`
      <div class="job-swiper-match">
        <div class="job-swiper-match-kicker">IT'S A MATCH!</div>
        <div class="job-swiper-match-images">
          <div class="job-swiper-match-heart">♥</div>
          ${imageHtml(job, "job-swiper-match-image")}
        </div>
        <h2>${displayTitle(job.title)}</h2>
        <p>${job.group}</p>
        <span>Du hast deinen Job gefunden! Starte eine neue Runde und entdecke die Jobs in einer neuen Reihenfolge.</span>
        ${SHLJobFinder.qrHtml(job)}
        ${SHLJobFinder.buttonHtml(job, "job-swiper-match-nearby")}
        <button class="job-swiper-match-continue" id="job-swiper-match-continue" type="button">
          Nochmal spielen
        </button>
      </div>
    `, (content) => {
      SHLJobFinder.bindButtons(content);
      content.querySelector("#job-swiper-match-continue").onclick = startRound;
    }, { dismissible: false });
    SHLConfetti.start({
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
    });
  }

  function handleChoice(liked) {
    if (!canSwipe()) return;

    const job = state.jobs[state.currentIndex];
    if (liked) {
      state.likedJobs.push(job);
      state.roundActive = false;
      showMatch(job);
      return;
    }

    state.currentIndex++;
    renderJob();
  }

  function renderFinished() {
    state.roundActive = false;
    els.controls.style.display = "none";
    els.card.className = "job-swiper-card job-swiper-finished";
    els.card.innerHTML = `
      <div class="job-swiper-finished-icon">♥</div>
      <h2>Alle Jobs geswiped!</h2>
      <p>Dir gefallen ${state.likedJobs.length} von ${state.jobs.length} Job-Ideen.</p>
      <button class="job-swiper-restart" id="job-swiper-restart" type="button">
        Nochmal swipen
      </button>
    `;
    document.getElementById("job-swiper-restart").onclick = startRound;
  }

  function startRound() {
    state.tutorialRun++;
    state.jobs = shuffle(jobs);
    state.currentIndex = 0;
    state.likedJobs = [];
    state.tutorialActive = false;
    state.roundActive = true;

    SHLModal.close();
    SHLConfetti.clear();
    finishTutorial();
    els.controls.style.display = "flex";
    renderJob();
    playTutorial();
  }

  function canSwipe() {
    return state.roundActive &&
      !state.tutorialActive &&
      state.currentIndex < state.jobs.length &&
      !document.getElementById("job-modal").classList.contains("is-open");
  }

  function init() {
    if (!els.card) return;

    els.noBtn.addEventListener("click", () => handleChoice(false));
    els.yesBtn.addEventListener("click", () => handleChoice(true));

    createSwipeController(els.card, {
      threshold: 70,
      restraint: 100,
      canSwipe,
      onSwipe(direction) {
        handleChoice(direction === "right");
      }
    });

    SHLApp.onStartJobSwiper(startRound);
    SHLApp.onBackJobSwiper(() => {
      state.tutorialRun++;
      state.tutorialActive = false;
      state.roundActive = false;
    });
  }

  return { init, startRound };
})();

SHLJobSwiper.init();
