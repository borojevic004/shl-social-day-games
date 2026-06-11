const SHLMatchmaker = (() => {
  const INTERESTS_PER_ROUND = 12;
  const RESULT_LIMIT = 8;

  const state = {
    currentIndex: 0,
    selectedInterestIds: [],
    resultShown: false,
    activeInterests: [],
    bestMatches: [],
    tutorialActive: false,
    tutorialRun: 0
  };

  const els = {
    card: document.getElementById("match-card"),
    yesBtn: document.getElementById("btnYes"),
    noBtn: document.getElementById("btnNo"),
    controls: document.getElementById("controls"),
    progress: document.getElementById("progress"),
    subtitle: document.getElementById("subtitle"),
    screenSub: document.getElementById("screen-sub"),
    hint: document.getElementById("hint")
  };

  function shuffleItems(items) {
    const shuffled = [...items];

    for (let index = shuffled.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
    }

    return shuffled;
  }

  function pickRoundInterests() {
    return shuffleItems(interests).slice(0, Math.min(INTERESTS_PER_ROUND, interests.length));
  }

  function popCard() {
    els.card.classList.remove("card-pop");
    void els.card.offsetWidth;
    els.card.classList.add("card-pop");
  }

  function imageHtml(job, className = "job-image") {
    if (!job.image) return `<div class="image-fallback">Bild folgt</div>`;

    return `
      <img class="${className}" src="${job.image}" alt="${job.title}"
        onerror="this.outerHTML='<div class=&quot;image-fallback&quot;>Bild folgt</div>'" />
    `;
  }

  function getAttributeLabel(attribute) {
    return (typeof attributeLabels !== "undefined" && attributeLabels[attribute]) || attribute;
  }

  function getTopAttributes(job, limit = 5) {
    return Object.entries(job.weights || {})
      .sort(([, weightA], [, weightB]) => weightB - weightA)
      .slice(0, limit)
      .map(([attribute]) => attribute);
  }

  function showInterest() {
    if (state.currentIndex >= state.activeInterests.length) {
      showBuzzer();
      return;
    }

    const interest = state.activeInterests[state.currentIndex];
    els.card.className = "card card-pop";
    els.card.innerHTML = `
      <div class="int-emoji">${interest.emoji}</div>
      <div class="int-text">${interest.text}</div>
      ${interest.description ? `<div class="int-sub">${interest.description}</div>` : ""}
    `;
    els.progress.textContent = `Interesse ${state.currentIndex + 1} von ${state.activeInterests.length}`;
    els.hint.textContent = `${state.selectedInterestIds.length} Interessen ausgewählt`;
    els.card.setAttribute("aria-label", `${interest.text}. ${interest.description || ""}`);
    popCard();
  }

  function wait(milliseconds) {
    return new Promise((resolve) => window.setTimeout(resolve, milliseconds));
  }

  async function animateTutorialStep(direction, label, runId) {
    if (runId !== state.tutorialRun) return false;

    const offset = direction === "left" ? -58 : 58;
    const rotation = direction === "left" ? -4 : 4;
    els.card.dataset.tutorialDirection = direction;
    els.card.dataset.tutorialLabel = label;

    const animation = els.card.animate([
      { transform: "translateX(0) rotate(0deg)" },
      { transform: `translateX(${offset}px) rotate(${rotation}deg)`, offset: 0.48 },
      { transform: `translateX(${offset}px) rotate(${rotation}deg)`, offset: 0.7 },
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

  async function playSwipeTutorial() {
    const runId = ++state.tutorialRun;
    state.tutorialActive = true;
    els.yesBtn.disabled = true;
    els.noBtn.disabled = true;
    els.controls.classList.add("tutorial-locked");
    els.card.classList.add("swipe-tutorial");

    await wait(280);
    if (!await animateTutorialStep("left", "← Eher nicht", runId)) return;
    await wait(100);
    if (!await animateTutorialStep("right", "Passt zu mir →", runId)) return;

    if (runId !== state.tutorialRun) return;
    els.card.classList.remove("swipe-tutorial");
    els.card.removeAttribute("data-tutorial-direction");
    els.card.removeAttribute("data-tutorial-label");
    els.controls.classList.remove("tutorial-locked");
    els.yesBtn.disabled = false;
    els.noBtn.disabled = false;
    state.tutorialActive = false;
  }

  function handleChoice(liked) {
    if (state.tutorialActive ||
        state.currentIndex >= state.activeInterests.length ||
        state.resultShown) return;

    const interest = state.activeInterests[state.currentIndex];
    if (liked && !state.selectedInterestIds.includes(interest.id)) {
      state.selectedInterestIds.push(interest.id);
    }

    state.currentIndex++;
    showInterest();
  }

  function showBuzzer() {
    els.controls.style.display = "none";
    els.progress.textContent = "";
    els.subtitle.textContent = "Jetzt kommt dein persönliches Match!";
    els.screenSub.textContent = "Drücke den Buzzer und entdecke deine besten Sozialer-Tag-Jobs.";
    els.hint.textContent = `${state.selectedInterestIds.length} Interessen ausgewählt`;
    els.card.className = "card buzzer-card card-pop";
    els.card.setAttribute("aria-label", "Alle Interessen wurden bewertet. Matches können angezeigt werden.");
    els.card.innerHTML = `
      <div class="int-text">Du hast alle Interessen geswiped!</div>
      <div class="int-sub">Bereit für deine Top ${RESULT_LIMIT}?</div>
      <button class="buzzer" id="buzzer" type="button">Matches anzeigen</button>
    `;
    document.getElementById("buzzer").addEventListener("click", showResults);
    popCard();
  }

  function renderRankingModal() {
    SHLModal.open(`
      <div class="modal-title" id="job-modal-title">Deine besten Matches</div>
      <p class="modal-meta">Je höher der Wert, desto stärker überschneiden sich deine Interessen mit dem Job.</p>
      <div class="match-results">
        ${state.bestMatches.map((job, index) => `
          <button class="match-result" type="button" data-job-id="${job.id}">
            <span class="match-rank">${index + 1}</span>
            ${imageHtml(job, "match-result-image")}
            <span class="match-result-copy">
              <strong>${job.title}</strong>
              <small>${job.group}</small>
            </span>
            <span class="match-score">${job.matchScore}%</span>
          </button>
        `).join("")}
      </div>
      <div class="modal-actions">
        <button class="modal-close-btn" id="job-modal-close" type="button">Popup schließen</button>
        <button class="modal-restart-btn" id="job-modal-restart" type="button">Nochmal swipen</button>
      </div>
    `, (content) => {
      content.querySelector("#job-modal-close").onclick = SHLModal.close;
      content.querySelector("#job-modal-restart").onclick = () => startRound(true);
      content.querySelectorAll("[data-job-id]").forEach((button) => {
        button.addEventListener("click", () => {
          const job = state.bestMatches.find((match) => match.id === Number(button.dataset.jobId));
          if (job) openJobModal(job);
        });
      });
    });
  }

  function showResults() {
    if (state.resultShown) return;
    state.resultShown = true;
    state.bestMatches = SHLMatching.getBestMatches(
      jobs,
      interests,
      state.selectedInterestIds,
      RESULT_LIMIT
    );

    const bestJob = state.bestMatches[0];
    els.subtitle.textContent = "Deine Sozialer Tag Job Matches";
    els.screenSub.textContent = "Deine Auswahl wurde mit allen verfügbaren Jobs verglichen.";
    els.progress.textContent = "";
    els.hint.textContent = "";
    els.card.className = "card result-card card-pop";
    els.card.setAttribute("aria-label", `Bestes Match: ${bestJob.title}, ${bestJob.matchScore} Prozent.`);
    els.card.innerHTML = `
      <div class="match-score-large">${bestJob.matchScore}% Match</div>
      ${imageHtml(bestJob)}
      <div class="int-text">${bestJob.title}</div>
      <div class="int-sub">Dein stärkstes Match aus ${jobs.length} Jobs</div>
      <button class="buzzer" id="show-ranking" type="button">Top ${RESULT_LIMIT} ansehen</button>
      <button class="restart" id="restart" type="button">Nochmal swipen</button>
    `;

    document.getElementById("show-ranking").addEventListener("click", renderRankingModal);
    document.getElementById("restart").addEventListener("click", () => startRound(true));
    renderRankingModal();
    SHLConfetti.start();
    popCard();
  }

  function openJobModal(job) {
    const tasks = (job.tasks || []).map((task) => `<li>${task}</li>`).join("");

    SHLModal.open(`
      <div class="modal-title" id="job-modal-title">${job.matchScore}% Match</div>
      <div class="modal-job">${job.title}</div>
      <div class="modal-meta">${job.group}</div>
      ${imageHtml(job)}
      <p class="modal-description">${job.description}</p>
      <div class="modal-tags">
        ${getTopAttributes(job).map((category) => `<span>${getAttributeLabel(category)}</span>`).join("")}
      </div>
      ${tasks ? `
        <div class="modal-bullets">
          <p>So könnte dein Sozialer Tag dort aussehen:</p>
          <ul>${tasks}</ul>
        </div>
      ` : ""}
      <div class="modal-actions">
        <button class="modal-close-btn" id="job-modal-back" type="button">Zurück zu Top ${RESULT_LIMIT}</button>
        <button class="modal-restart-btn" id="job-modal-restart" type="button">Nochmal swipen</button>
      </div>
    `, (content) => {
      content.querySelector("#job-modal-back").onclick = renderRankingModal;
      content.querySelector("#job-modal-restart").onclick = () => startRound(true);
    });
  }

  function startRound(withTutorial = true) {
    state.tutorialRun++;
    state.tutorialActive = false;
    state.currentIndex = 0;
    state.selectedInterestIds = [];
    state.resultShown = false;
    state.bestMatches = [];
    state.activeInterests = pickRoundInterests();

    SHLModal.close();
    SHLConfetti.clear();
    els.controls.style.display = "flex";
    els.controls.classList.remove("tutorial-locked");
    els.yesBtn.disabled = false;
    els.noBtn.disabled = false;
    els.card.classList.remove("swipe-tutorial");
    els.card.removeAttribute("data-tutorial-direction");
    els.card.removeAttribute("data-tutorial-label");
    els.subtitle.textContent = "Swipe deine Interessen und finde heraus, welcher Top Job zu dir passt!";
    els.screenSub.textContent = "Nach rechts für „Passt zu mir“, nach links für „Eher nicht“.";
    showInterest();

    if (withTutorial) {
      playSwipeTutorial();
    }
  }

  function canSwipe() {
    return state.currentIndex < state.activeInterests.length &&
      !state.resultShown &&
      !state.tutorialActive &&
      els.controls.style.display !== "none";
  }

  function init() {
    els.yesBtn.addEventListener("click", () => handleChoice(true));
    els.noBtn.addEventListener("click", () => handleChoice(false));

    if (typeof createSwipeController === "function") {
      createSwipeController(els.card, {
        threshold: 70,
        restraint: 100,
        canSwipe,
        onSwipe(direction) {
          handleChoice(direction === "right");
        }
      });
    }

    SHLApp.onStartMatchmaker(() => startRound(true));
    SHLApp.onBackHome(() => {
      state.tutorialRun++;
      state.tutorialActive = false;
    });
    startRound(false);
  }

  return {
    init,
    startRound
  };
})();

SHLMatchmaker.init();
