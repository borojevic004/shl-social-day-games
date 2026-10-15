const SHLSocialSimulator = (() => {
  const els = {
    step: document.getElementById("simulator-step"),
    stage: document.getElementById("simulator-stage"),
    actions: document.getElementById("simulator-actions"),
    tipJar: document.getElementById("simulator-tip-jar"),
    tipJarMoney: document.getElementById("tip-jar-money"),
    tipJarTotal: document.getElementById("tip-jar-total")
  };

  const questionBank = {
    animals: {
      situation: "Ein Tier wirkt unruhig und du bist dir nicht sicher, was du tun sollst.",
      answers: [
        { text: "Ich frage die betreuende Person, bevor ich etwas mache.", points: 2, label: "Richtig!", tip: "Bei Tieren sind Ruhe und Nachfragen super wichtig." },
        { text: "Ich beobachte kurz und sage dann dem Team Bescheid.", points: 1, label: "Fast richtig", tip: "Beobachten ist gut, aber hol dir frueh Hilfe." },
        { text: "Ich versuche es allein, damit ich schnell fertig bin.", points: 0, label: "Nicht ideal", tip: "Allein loslegen kann fuer dich und das Tier unsicher sein." }
      ]
    },
    children: {
      situation: "Ein Kind will nicht mitmachen und wird traurig.",
      answers: [
        { text: "Ich bleibe ruhig, frage nach und hole bei Bedarf Hilfe.", points: 2, label: "Richtig!", tip: "Geduld und Hilfe holen sind bei Kindern genau richtig." },
        { text: "Ich biete dem Kind eine andere kleine Aufgabe an.", points: 1, label: "Fast richtig", tip: "Gute Idee, aber sprich dich trotzdem mit dem Team ab." },
        { text: "Ich sage, dass es einfach mitmachen muss.", points: 0, label: "Nicht ideal", tip: "Druck hilft selten. Besser ruhig bleiben und nachfragen." }
      ]
    },
    food: {
      situation: "Du sollst in der Kueche helfen, aber du weisst nicht, wo die sauberen Sachen liegen.",
      answers: [
        { text: "Ich wasche mir die Haende und frage kurz nach.", points: 2, label: "Richtig!", tip: "Hygiene und Nachfragen sind in der Kueche das Wichtigste." },
        { text: "Ich suche erst kurz und frage dann.", points: 1, label: "Fast richtig", tip: "Suchen ist okay, aber bei Hygiene lieber direkt fragen." },
        { text: "Ich nehme einfach irgendwas, es wird schon passen.", points: 0, label: "Nicht ideal", tip: "In der Kueche sollte man nicht raten." }
      ]
    },
    health: {
      situation: "Eine Person fragt dich nach medizinischem Rat.",
      answers: [
        { text: "Ich sage, dass ich das Team hole.", points: 2, label: "Richtig!", tip: "Gesundheitliche Fragen gehoeren zu Fachpersonen." },
        { text: "Ich hoere zu und begleite die Person zum Team.", points: 1, label: "Fast richtig", tip: "Sehr freundlich. Wichtig ist, dass am Ende das Team uebernimmt." },
        { text: "Ich gebe eine Antwort, damit die Person nicht warten muss.", points: 0, label: "Nicht ideal", tip: "Lieber ehrlich sein: Du bist zum Helfen da, nicht fuer medizinische Entscheidungen." }
      ]
    },
    office: {
      situation: "Du bekommst eine Liste, aber verstehst eine Abkuerzung nicht.",
      answers: [
        { text: "Ich frage direkt nach, damit ich es richtig mache.", points: 2, label: "Richtig!", tip: "Nachfragen spart Zeit und verhindert Fehler." },
        { text: "Ich markiere die Stelle und mache erst den Rest.", points: 1, label: "Fast richtig", tip: "Das ist okay, aber vergiss die Frage nicht." },
        { text: "Ich rate einfach, was gemeint ist.", points: 0, label: "Nicht ideal", tip: "Raten kann spaeter mehr Arbeit machen." }
      ]
    },
    people: {
      situation: "Eine Kundin oder ein Besucher spricht dich an, aber du kennst die Antwort nicht.",
      answers: [
        { text: "Ich bleibe freundlich und hole jemanden aus dem Team.", points: 2, label: "Richtig!", tip: "Freundlich bleiben und Hilfe holen ist professionell." },
        { text: "Ich sage: Einen Moment bitte, ich frage nach.", points: 2, label: "Richtig!", tip: "Genau so wirkt man freundlich und verlaesslich." },
        { text: "Ich sage irgendwas, damit es schneller geht.", points: 0, label: "Nicht ideal", tip: "Eine falsche Antwort hilft niemandem." }
      ]
    },
    sales: {
      situation: "Beim Bezahlen bist du dir mit dem Rueckgeld unsicher.",
      answers: [
        { text: "Ich frage nach oder rechne es in Ruhe nach.", points: 2, label: "Richtig!", tip: "Bei Geld lieber langsam und korrekt." },
        { text: "Ich bitte die Person kurz zu warten.", points: 1, label: "Fast richtig", tip: "Gut, aber hole dir danach Hilfe oder pruefe es genau." },
        { text: "Ich gebe schnell irgendwas zurueck.", points: 0, label: "Nicht ideal", tip: "Bei Geld sollte man nicht raten." }
      ]
    },
    technical: {
      situation: "Ein Werkzeug oder Geraet sieht ungewohnt aus.",
      answers: [
        { text: "Ich lasse es mir zeigen, bevor ich es benutze.", points: 2, label: "Richtig!", tip: "Sicherheit geht immer vor Schnelligkeit." },
        { text: "Ich frage, ob ich erst zuschauen darf.", points: 2, label: "Richtig!", tip: "Zuschauen ist eine starke Art zu lernen." },
        { text: "Ich probiere es einfach aus.", points: 0, label: "Nicht ideal", tip: "Bei Technik und Werkzeug erst erklaeren lassen." }
      ]
    },
    teamwork: {
      situation: "Du bist frueher fertig als gedacht.",
      answers: [
        { text: "Ich frage, wo ich noch helfen kann.", points: 2, label: "Richtig!", tip: "Eigeninitiative kommt richtig gut an." },
        { text: "Ich raeume meinen Bereich auf.", points: 1, label: "Fast richtig", tip: "Super Anfang. Danach kannst du noch aktiv nachfragen." },
        { text: "Ich setze mich hin und warte, bis jemand etwas sagt.", points: 0, label: "Nicht ideal", tip: "Warten ist okay, aber Fragen zeigt mehr Einsatz." }
      ]
    }
  };

  const universalQuestions = [
    {
      situation: "Du kommst an deinem Einsatzort an und kennst noch niemanden.",
      answers: [
        { text: "Ich stelle mich kurz vor und frage, wo ich starten soll.", points: 2, label: "Richtig!", tip: "Ein freundlicher Start macht den ganzen Tag leichter." },
        { text: "Ich warte kurz am Eingang.", points: 1, label: "Fast richtig", tip: "Okay, aber aktiv vorstellen hilft dir schneller reinzukommen." },
        { text: "Ich gehe einfach irgendwo hin und fange an.", points: 0, label: "Nicht ideal", tip: "Am Anfang lieber absprechen, was deine Aufgabe ist." }
      ]
    },
    {
      situation: "Du machst einen Fehler und merkst es sofort.",
      answers: [
        { text: "Ich sage ehrlich Bescheid und frage, wie ich es verbessern kann.", points: 2, label: "Richtig!", tip: "Fehler passieren. Ehrlich sein ist das Beste." },
        { text: "Ich versuche erst, es selbst zu reparieren.", points: 1, label: "Fast richtig", tip: "Gute Absicht, aber sag lieber kurz Bescheid." },
        { text: "Ich hoffe, dass es niemand merkt.", points: 0, label: "Nicht ideal", tip: "Kleine Fehler werden groesser, wenn man sie versteckt." }
      ]
    },
    {
      situation: "Du bist unsicher, ob du eine Pause machen darfst.",
      answers: [
        { text: "Ich frage freundlich, wann eine Pause passt.", points: 2, label: "Richtig!", tip: "Pausen sind okay, sie sollten nur abgesprochen sein." },
        { text: "Ich warte, bis jemand Pause sagt.", points: 1, label: "Fast richtig", tip: "Das geht, aber Nachfragen ist voellig normal." },
        { text: "Ich verschwinde kurz ohne Bescheid zu sagen.", points: 0, label: "Nicht ideal", tip: "Das Team sollte wissen, wo du bist." }
      ]
    },
    {
      situation: "Jemand fragt dich, warum du heute arbeitest.",
      answers: [
        { text: "Ich erklaere kurz: Mein Lohn wird fuer SHL-Projekte gespendet.", points: 2, label: "Richtig!", tip: "So verstehen andere direkt, worum es beim Sozialen Tag geht." },
        { text: "Ich sage: Das ist eine Aktion von meiner Schule.", points: 1, label: "Fast richtig", tip: "Stimmt, aber die Spende und die Projekte sind die wichtigste Botschaft." },
        { text: "Ich sage: Keine Ahnung, ich musste mitmachen.", points: 0, label: "Nicht ideal", tip: "Besser kurz sagen, dass junge Menschen damit unterstuetzt werden." }
      ]
    }
  ];

  const resultProfiles = [
    {
      min: 7,
      title: "Team-Profi",
      text: "Du fragst nach, bleibst freundlich und denkst mit. Genau so wird ein Sozialer Tag stark."
    },
    {
      min: 4,
      title: "Mutige*r Helfer*in",
      text: "Du triffst viele gute Entscheidungen. Manchmal lohnt es sich noch schneller Hilfe zu holen."
    },
    {
      min: 0,
      title: "Starter*in",
      text: "Du bist am Anfang. Wichtig ist: Fragen stellen, ehrlich sein und im Team bleiben."
    }
  ];

  let selectedJob = null;
  let questions = [];
  let currentQuestion = 0;
  let score = 0;
  let answered = false;
  let completed = false;
  let earnedEuros = 0;
  let moneyPieceCount = 0;
  let previousJobIds = [];

  const rewards = {
    2: { amount: 15, pieces: [{ type: "banknote", value: 10 }, { type: "banknote", value: 5 }] },
    1: { amount: 7, pieces: [
      { type: "coin", value: 2 },
      { type: "coin", value: 2 },
      { type: "coin", value: 2 },
      { type: "coin", value: 1 }
    ] },
    0: { amount: 0, pieces: [] }
  };

  function shuffle(items) {
    return [...items].sort(() => Math.random() - 0.5);
  }

  function safeJobs() {
    return typeof jobs !== "undefined" && Array.isArray(jobs) ? jobs : [];
  }

  function escapeHtml(value) {
    return String(value || "")
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function setStep(text, title) {
    if (els.step) els.step.textContent = text;
    if (els.actions) els.actions.innerHTML = "";
    if (els.stage) {
      els.stage.classList.remove("is-final");
      els.stage.innerHTML = `<h2 class="simulator-title">${escapeHtml(title)}</h2>`;
    }
  }

  function updateTipJarTotal() {
    if (els.tipJarTotal) els.tipJarTotal.textContent = `${earnedEuros} €`;
    if (els.tipJar) els.tipJar.setAttribute("aria-label", `Gesammelter Betrag: ${earnedEuros} Euro`);
  }

  function resetTipJar() {
    earnedEuros = 0;
    moneyPieceCount = 0;
    if (els.tipJarMoney) els.tipJarMoney.innerHTML = "";
    if (els.tipJar) els.tipJar.classList.remove("is-visible");
    if (els.stage) els.stage.classList.remove("has-tip-jar");
    updateTipJarTotal();
  }

  function showTipJar() {
    if (els.tipJar) els.tipJar.classList.add("is-visible");
    if (els.stage) els.stage.classList.add("has-tip-jar");
  }

  function addMoneyPiece(piece, delay) {
    if (!els.tipJarMoney) return;

    const element = document.createElement("span");
    const column = moneyPieceCount % 4;
    const row = Math.floor(moneyPieceCount / 4);
    const horizontalRange = piece.type === "banknote" ? 23 : 33;
    const x = Math.round((Math.random() * horizontalRange * 2) - horizontalRange);
    const y = -(8 + row * 15 + (column % 2) * 4);
    const rotation = Math.round(Math.random() * 30 - 15);

    element.className = `tip-money-piece is-${piece.type}`;
    element.textContent = `${piece.value}€`;
    element.style.setProperty("--piece-x", `${x}px`);
    element.style.setProperty("--piece-y", `${y}px`);
    element.style.setProperty("--piece-rotation", `${rotation}deg`);
    element.style.setProperty("--piece-delay", `${delay}ms`);
    els.tipJarMoney.appendChild(element);
    moneyPieceCount += 1;
  }

  function addReward(points) {
    const reward = rewards[points] || rewards[0];
    earnedEuros += reward.amount;
    reward.pieces.forEach((piece, index) => addMoneyPiece(piece, index * 130));
    updateTipJarTotal();
  }

  function tagsFor(job) {
    const labels = typeof attributeLabels !== "undefined" ? attributeLabels : {};
    return (job.attributes || [])
      .slice(0, 4)
      .map((attribute) => `<span>${escapeHtml(labels[attribute] || attribute)}</span>`)
      .join("");
  }

  function jobImage(job) {
    if (!job.image) {
      return `<div class="simulator-image-fallback">${escapeHtml(job.title)}</div>`;
    }

    return `<img class="simulator-job-image" src="${escapeHtml(job.image)}" alt="${escapeHtml(job.title)}" loading="lazy" />`;
  }

  function pickJobs() {
    const allJobs = safeJobs();
    const unseen = allJobs.filter((job) => !previousJobIds.includes(job.id));
    const pool = unseen.length >= 3 ? unseen : allJobs;
    const picks = shuffle(pool).slice(0, 3);
    previousJobIds = picks.map((job) => job.id);
    return picks;
  }

  function buildQuestions(job) {
    const jobQuestions = (job.attributes || [])
      .map((attribute) => questionBank[attribute])
      .filter(Boolean);

    return shuffle([...jobQuestions, ...universalQuestions]).slice(0, 4);
  }

  function renderJobChoice() {
    setStep("Start", "Such dir deinen Tag aus");
    if (els.tipJar) els.tipJar.classList.remove("is-visible");
    if (els.stage) els.stage.classList.remove("has-tip-jar");
    const picks = pickJobs();

    if (!picks.length) {
      els.stage.insertAdjacentHTML("beforeend", `<p class="simulator-copy">Keine Jobs gefunden. Bitte pruefe data/jobs.js.</p>`);
      return;
    }

    els.stage.insertAdjacentHTML(
      "beforeend",
      `<p class="simulator-copy">Waehle einen Job. Danach bekommst du echte Situationen und entscheidest, was du tun wuerdest.</p>
      <div class="simulator-job-grid">
        ${picks.map((job) => `
          <button class="simulator-job-card" type="button" data-job-id="${job.id}">
            ${jobImage(job)}
            <strong>${escapeHtml(job.title)}</strong>
            <span class="simulator-tags">${tagsFor(job)}</span>
          </button>
        `).join("")}
      </div>`
    );

    els.stage.querySelectorAll("[data-job-id]").forEach((button) => {
      button.addEventListener("click", () => {
        selectedJob = safeJobs().find((job) => String(job.id) === button.dataset.jobId) || picks[0];
        questions = buildQuestions(selectedJob);
        currentQuestion = 0;
        score = 0;
        renderQuestion();
      });
    });
  }

  function scoreLabel() {
    return `${score} von ${questions.length * 2} Punkten`;
  }

  function renderQuestion() {
    answered = false;
    const question = questions[currentQuestion];
    setStep(`Situation ${currentQuestion + 1} von ${questions.length}`, selectedJob.title);
    showTipJar();

    els.stage.insertAdjacentHTML(
      "beforeend",
      `<div class="simulator-question-layout">
        <div class="simulator-job-mini">
          ${jobImage(selectedJob)}
          <div>
            <strong>${escapeHtml(selectedJob.title)}</strong>
            <span>${escapeHtml(scoreLabel())}</span>
          </div>
        </div>

        <p class="simulator-situation">${escapeHtml(question.situation)}</p>

        <div class="simulator-answer-grid">
          ${shuffle(question.answers).map((answer) => `
            <button
              class="simulator-answer"
              type="button"
              data-points="${answer.points}"
              data-label="${escapeHtml(answer.label)}"
              data-tip="${escapeHtml(answer.tip)}"
            >
              ${escapeHtml(answer.text)}
            </button>
          `).join("")}
        </div>

        <div class="simulator-feedback" id="simulator-feedback" aria-live="polite"></div>
      </div>`
    );

    els.stage.querySelectorAll(".simulator-answer").forEach((button) => {
      button.addEventListener("click", () => selectAnswer(button));
    });
  }

  function selectAnswer(button) {
    if (answered) return;
    answered = true;

    const points = Number(button.dataset.points);
    score += points;
    addReward(points);

    els.stage.querySelectorAll(".simulator-answer").forEach((answerButton) => {
      answerButton.disabled = true;
      answerButton.classList.add(`points-${answerButton.dataset.points}`);
    });
    button.classList.add("is-picked");

    const feedback = els.stage.querySelector("#simulator-feedback");
    feedback.className = `simulator-feedback is-visible points-${points}`;
    feedback.innerHTML = `
      <strong>${escapeHtml(button.dataset.label)}</strong>
      <span>${escapeHtml(button.dataset.tip)}</span>
    `;

    const isLast = currentQuestion >= questions.length - 1;
    els.actions.innerHTML = `<button class="simulator-next" type="button">${isLast ? "Zum Ergebnis" : "Naechste Situation"}</button>`;
    els.actions.querySelector(".simulator-next").addEventListener("click", () => {
      if (isLast) {
        renderFinal();
      } else {
        currentQuestion += 1;
        renderQuestion();
      }
    });
  }

  function earnedAmount() {
    return earnedEuros;
  }

  function resultProfile() {
    return resultProfiles.find((profile) => score >= profile.min) || resultProfiles[resultProfiles.length - 1];
  }

  function renderFinal() {
    if (completed) return;
    completed = true;
    if (typeof SHLUsageCounter !== "undefined") {
      SHLUsageCounter.recordComplete("simulator");
    }
    const profile = resultProfile();
    const amount = earnedAmount();
    setStep("Ergebnis", profile.title);
    els.stage.classList.add("is-final");

    els.stage.insertAdjacentHTML(
      "beforeend",
      `<div class="simulator-final">
        ${jobImage(selectedJob)}
        <div class="simulator-amount">${amount} EUR</div>
        <p class="simulator-score">${score} von ${questions.length * 2} Punkten</p>
        <p class="simulator-copy">${escapeHtml(profile.text)}</p>
        <p class="simulator-impact">Dein Lohn wird gespendet und unterstuetzt Jugend- und Bildungsprojekte von SHL.</p>
        <div class="simulator-summary">
          <span>Nachfragen</span>
          <span>Teamarbeit</span>
          <span>Verantwortung</span>
        </div>
      </div>`
    );

    els.actions.innerHTML = `
      <button class="simulator-next" type="button" id="simulator-restart">Nochmal spielen</button>
      <button class="simulator-home" type="button" id="simulator-home">Zur Startseite</button>
    `;

    els.actions.querySelector("#simulator-restart").addEventListener("click", start);
    els.actions.querySelector("#simulator-home").addEventListener("click", () => {
      if (typeof SHLConfetti !== "undefined") SHLConfetti.clear();
      SHLApp.showScreen("home");
    });

    if (typeof SHLConfetti !== "undefined") {
      SHLConfetti.start({
        mode: "burst",
        count: 220,
        lifetime: 5200,
        minSize: 4,
        maxSize: 18,
        minRadius: 90,
        maxRadius: 300,
        minDuration: 2.6,
        maxDuration: 4.4,
        maxDelay: 0.35,
        originSpreadX: 4,
        originSpreadY: 4,
        minFall: 220,
        maxFall: 520,
        fallDrift: 190
      });
    }
  }

  function start() {
    if (typeof SHLUsageCounter !== "undefined") {
      SHLUsageCounter.recordStart("simulator");
    }
    selectedJob = null;
    questions = [];
    currentQuestion = 0;
    score = 0;
    answered = false;
    completed = false;
    resetTipJar();
    renderJobChoice();
  }

  function init() {
    if (!els.step || !els.stage || !els.actions || typeof SHLApp === "undefined") return;
    SHLApp.onStartSimulator(start);
    SHLApp.onBackSimulator(() => {
      selectedJob = null;
      questions = [];
      currentQuestion = 0;
      score = 0;
      answered = false;
      completed = false;
      resetTipJar();
    });
  }

  return { init, start };
})();

SHLSocialSimulator.init();
