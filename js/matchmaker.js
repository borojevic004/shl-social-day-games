const SHLMatchmaker = (() => {
  const INTERESTS_PER_ROUND = 10;

  const state = {
    currentIndex: 0,
    scores: {},
    likedInterests: [],
    resultShown: false,
    activeInterests: []
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

  function getRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
  }

  function shuffleItems(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function pickRoundInterests() {
    return shuffleItems(interests).slice(0, Math.min(INTERESTS_PER_ROUND, interests.length));
  }

  function addScore(category, amount = 1) {
    state.scores[category] = (state.scores[category] || 0) + amount;
  }

  function popCard() {
    els.card.classList.remove("card-pop");
    void els.card.offsetWidth;
    els.card.classList.add("card-pop");
  }

  function imageHtml(job) {
    if (!job.image) return `<div class="image-fallback">Bild folgt</div>`;

    return `
      <img class="job-image" src="${job.image}" alt="${job.title}"
        onerror="this.outerHTML='<div class=&quot;image-fallback&quot;>Bild folgt</div>'" />
    `;
  }

  function getJobAttributes(job) {
    return [...new Set([...(job.categories || []), ...(jobAttributes[job.id] || [])])];
  }

   function getAttributeLabel(attribute) {
    return (typeof attributeLabels !== "undefined" && attributeLabels[attribute]) || attribute;
  }

  function getJobScore(job) {
    return getJobAttributes(job).reduce((total, category, index) => {
      const weight = index === 0 ? 4 : 2;
      return total + ((state.scores[category] || 0) * weight);
    }, 0);
  }

  function findBestJob() {
    const rankedJobs = jobs.map(job => ({ ...job, score: getJobScore(job) }));
    const bestScore = Math.max(...rankedJobs.map(job => job.score));

    if (bestScore <= 0) return { ...getRandomItem(jobs), score: 0 };

    return getRandomItem(rankedJobs.filter(job => job.score === bestScore));
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
    els.hint.textContent = "";
    popCard();
  }

  function handleChoice(liked) {
    if (state.currentIndex >= state.activeInterests.length || state.resultShown) return;

    const interest = state.activeInterests[state.currentIndex];
    if (liked) {
      state.likedInterests.push(interest.text);
      (interest.categories || []).forEach(category => addScore(category, 1));
      Object.entries(interest.weights || {}).forEach(([category, amount]) => addScore(category, amount));
    }

    state.currentIndex++;
    showInterest();
  }

  function showBuzzer() {
    els.controls.style.display = "none";
    els.progress.textContent = "";
    els.subtitle.textContent = "Jetzt kommt dein persönliches Match!!";
    els.screenSub.textContent = "Drücke den Buzzer und finde deinen passenden Sozialer Tag Job!!";
    els.hint.textContent = "";
    els.card.className = "card buzzer-card card-pop";
    els.card.innerHTML = `
      <div class="int-text">Du hast alle Interessen geswiped!</div>
      <div class="int-sub">Bereit fuer dein Ergebnis?</div>
      <button class="buzzer" id="buzzer" type="button">Buzzer</button>
    `;
    document.getElementById("buzzer").addEventListener("click", showResults);
    popCard();
  }

  function showResults() {
    if (state.resultShown) return;
    state.resultShown = true;

    const job = findBestJob();
    els.subtitle.textContent = "Dein Sozialer Tag Job Match";
    els.screenSub.textContent = "Dieser Job passt am besten zu deinen ausgewählten Interessen";
    els.progress.textContent = "";
    els.hint.textContent = "";
    els.card.innerHTML = `
      <div class="int-text">It's a Match!</div>
      <div class="int-sub">Dein Ergebnis ist im Pop-up geöffnet.</div>
      <button class="restart" id="restart" type="button">Nochmal swipen</button>
    `;

    document.getElementById("restart").addEventListener("click", startRound);
    openJobModal(job);
    SHLConfetti.start();
    popCard();
  }

  function openJobModal(job) {
    SHLModal.open(`
      <div class="modal-title" id="job-modal-title">It's a Match!</div>
      <div class="modal-job">${job.title}</div>
      <div class="modal-meta">Dein persoenlicher Vorschlag für den Sozialen Tag</div>
      ${imageHtml(job)}
      <p class="modal-description">${job.description || "Dieser Job passt gut zu deinen Interessen!"}</p>
      <div class="modal-tags">
        ${getJobAttributes(job).slice(0, 5).map(category => `<span>${getAttributeLabel(category)}</span>`).join("")}
      <div class="modal-bullets">
        <p>So könnte dein Sozialer Tag dort aussehen:</p>
        <ul>${(job.tasks || []).map(task => `<li>${task}</li>`).join("")}</ul>
      </div>
      <div class="modal-actions">
        <button class="modal-close-btn" id="job-modal-close" type="button">Popup schliessen</button>
        <button class="modal-restart-btn" id="job-modal-restart" type="button">Nochmal swipen</button>
      </div>
    `, () => {
      document.getElementById("job-modal-close").onclick = SHLModal.close;
      document.getElementById("job-modal-restart").onclick = startRound;
    });
  }

  function startRound() {
    state.currentIndex = 0;
    state.scores = {};
    state.likedInterests = [];
    state.resultShown = false;
    state.activeInterests = pickRoundInterests();

    SHLModal.close();
    SHLConfetti.clear();
    els.controls.style.display = "flex";
    els.subtitle.textContent = "Swipe deine Interessen und finde heraus, welcher Top Job zu dir passt!";
    els.screenSub.textContent = "Swipe oder wähle unten, was zu dir passt.";
    showInterest();
  }

  function canSwipe() {
    return state.currentIndex < state.activeInterests.length && !state.resultShown && els.controls.style.display !== "none";
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

    SHLApp.onStartMatchmaker(startRound);
    startRound();
  }

  return {
    init,
    startRound
  };
})();

SHLMatchmaker.init();
