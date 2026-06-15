const SHLGeoQuiz = (() => {
  const MAP_SOURCE = "assets/maps/project_regions_blue.png";
  const COLORS = {
    blue: [46, 59, 108],
    correct: [249, 215, 13],
    skipped: [247, 238, 196]
  };
  const countries = [
    { id: "bosnia", name: "Bosnien und Herzegowina", anchors: [[450, 408]] },
    { id: "serbia", name: "Serbien", anchors: [[493, 407]] },
    { id: "germany", name: "Deutschland", anchors: [[344, 279]] },
    { id: "jordan", name: "Jordanien", anchors: [[732, 628]] },
    { id: "ukraine", name: "Ukraine", anchors: [[624, 311], [673, 384]] },
    { id: "albania", name: "Albanien", anchors: [[485, 461]] },
    { id: "kosovo", name: "Kosovo", anchors: [[495, 436]] }
  ];

  const state = {
    order: [],
    currentIndex: 0,
    correct: new Set(),
    skipped: new Set(),
    masks: new Map(),
    sourceImageData: null,
    ready: false,
    locked: false
  };

  const els = {
    canvas: document.getElementById("geo-quiz-map"),
    wrap: document.getElementById("geo-quiz-map-wrap"),
    loading: document.getElementById("geo-quiz-loading"),
    question: document.getElementById("geo-quiz-question"),
    country: document.getElementById("geo-quiz-country"),
    progress: document.getElementById("geo-quiz-progress"),
    feedback: document.getElementById("geo-quiz-feedback"),
    skip: document.getElementById("geo-quiz-skip"),
    card: document.querySelector(".geo-quiz-card")
  };

  function shuffle(items) {
    const result = [...items];
    for (let index = result.length - 1; index > 0; index--) {
      const randomIndex = Math.floor(Math.random() * (index + 1));
      [result[index], result[randomIndex]] = [result[randomIndex], result[index]];
    }
    return result;
  }

  function isTargetPixel(red, green, blue) {
    return red > 210 && green > 150 && blue < 90 && red - green < 110;
  }

  function nearestCountry(centerX, centerY) {
    let bestCountry = countries[0];
    let bestDistance = Infinity;

    countries.forEach((country) => {
      country.anchors.forEach(([anchorX, anchorY]) => {
        const distance = Math.hypot(centerX - anchorX, centerY - anchorY);
        if (distance < bestDistance) {
          bestDistance = distance;
          bestCountry = country;
        }
      });
    });

    return bestCountry;
  }

  function buildMasks(imageData) {
    const { width, height, data } = imageData;
    const target = new Uint8Array(width * height);
    const visited = new Uint8Array(width * height);
    const masks = new Map(countries.map((country) => [country.id, new Set()]));

    for (let index = 0; index < width * height; index++) {
      const offset = index * 4;
      if (isTargetPixel(data[offset], data[offset + 1], data[offset + 2])) {
        target[index] = 1;
      }
    }

    for (let start = 0; start < target.length; start++) {
      if (!target[start] || visited[start]) continue;

      const stack = [start];
      const component = [];
      visited[start] = 1;
      let xTotal = 0;
      let yTotal = 0;

      while (stack.length) {
        const index = stack.pop();
        const x = index % width;
        const y = Math.floor(index / width);
        component.push(index);
        xTotal += x;
        yTotal += y;

        const neighbors = [index - 1, index + 1, index - width, index + width];
        neighbors.forEach((neighbor) => {
          if (neighbor < 0 || neighbor >= target.length || visited[neighbor] || !target[neighbor]) return;
          const neighborX = neighbor % width;
          if (Math.abs(neighborX - x) > 1) return;
          visited[neighbor] = 1;
          stack.push(neighbor);
        });
      }

      if (component.length < 20) continue;
      const country = nearestCountry(xTotal / component.length, yTotal / component.length);
      component.forEach((index) => masks.get(country.id).add(index));
    }

    state.masks = masks;
  }

  function colorForCountry(countryId, revealSkipped) {
    if (state.correct.has(countryId)) return COLORS.correct;
    if (revealSkipped && state.skipped.has(countryId)) return COLORS.skipped;
    return COLORS.blue;
  }

  function renderMap(revealSkipped = false) {
    if (!state.ready) return;

    const output = new ImageData(
      new Uint8ClampedArray(state.sourceImageData.data),
      state.sourceImageData.width,
      state.sourceImageData.height
    );

    state.masks.forEach((mask, countryId) => {
      const [red, green, blue] = colorForCountry(countryId, revealSkipped);
      mask.forEach((index) => {
        const offset = index * 4;
        output.data[offset] = red;
        output.data[offset + 1] = green;
        output.data[offset + 2] = blue;
      });
    });

    const context = els.canvas.getContext("2d");
    context.clearRect(0, 0, els.canvas.width, els.canvas.height);
    context.putImageData(output, 0, 0);
  }

  function currentCountry() {
    return state.order[state.currentIndex];
  }

  function setFeedback(message, type = "") {
    els.feedback.textContent = message;
    els.feedback.className = `geo-quiz-feedback${type ? ` is-${type}` : ""}`;
  }

  function renderQuestion() {
    if (state.currentIndex >= state.order.length) {
      finishRound();
      return;
    }

    const country = currentCountry();
    els.progress.textContent = `Land ${state.currentIndex + 1} von ${state.order.length}`;
    els.question.textContent = "Finde:";
    els.country.textContent = country.name;
    els.skip.textContent = "Überspringen";
    els.skip.className = "geo-quiz-skip";
    els.skip.onclick = skipCountry;
    setFeedback("Tippe auf das richtige Land.");
  }

  function isCurrentCountryHit(sourceX, sourceY) {
    const country = currentCountry();
    const mask = state.masks.get(country.id);
    const width = state.sourceImageData.width;
    const tolerance = country.id === "kosovo" ? 22 : 15;

    for (let y = -tolerance; y <= tolerance; y++) {
      for (let x = -tolerance; x <= tolerance; x++) {
        if (x * x + y * y > tolerance * tolerance) continue;
        const pointX = Math.round(sourceX + x);
        const pointY = Math.round(sourceY + y);
        if (mask.has(pointY * width + pointX)) return true;
      }
    }

    return false;
  }

  function advance() {
    state.currentIndex++;
    state.locked = false;
    renderQuestion();
  }

  function handleMapClick(event) {
    if (!state.ready || state.locked || state.currentIndex >= state.order.length) return;

    const rect = els.canvas.getBoundingClientRect();
    const sourceX = ((event.clientX - rect.left) / rect.width) * state.sourceImageData.width;
    const sourceY = ((event.clientY - rect.top) / rect.height) * state.sourceImageData.height;
    const country = currentCountry();

    if (isCurrentCountryHit(sourceX, sourceY)) {
      state.locked = true;
      state.correct.add(country.id);
      renderMap();
      setFeedback("Richtig! Sehr gut gefunden.", "correct");
      window.setTimeout(advance, 650);
      return;
    }

    setFeedback("Noch nicht ganz. Versuch es noch einmal oder überspringe.", "wrong");
    els.wrap.classList.remove("geo-quiz-wrong");
    void els.wrap.offsetWidth;
    els.wrap.classList.add("geo-quiz-wrong");
  }

  function skipCountry() {
    if (state.locked || state.currentIndex >= state.order.length) return;
    state.skipped.add(currentCountry().id);
    state.currentIndex++;
    renderQuestion();
  }

  function finishRound() {
    state.locked = true;
    renderMap(true);
    els.progress.textContent = "Fertig!";
    els.question.textContent = "Ergebnis:";
    els.country.textContent = `${state.correct.size} von ${countries.length} richtig`;
    setFeedback(
      state.skipped.size
        ? "Die übersprungenen Länder sind jetzt hellgelb markiert."
        : "Du hast alle Projektländer gefunden!",
      "correct"
    );
    els.skip.textContent = "Nochmal spielen";
    els.skip.className = "geo-quiz-restart";
    els.skip.onclick = startRound;
  }

  function startRound() {
    state.order = shuffle(countries);
    state.currentIndex = 0;
    state.correct = new Set();
    state.skipped = new Set();
    state.locked = false;
    renderMap();
    renderQuestion();
  }

  function loadMap() {
    const image = new Image();
    image.onload = () => {
      const sourceCanvas = document.createElement("canvas");
      sourceCanvas.width = image.naturalWidth;
      sourceCanvas.height = image.naturalHeight;
      const context = sourceCanvas.getContext("2d", { willReadFrequently: true });
      context.drawImage(image, 0, 0);
      state.sourceImageData = context.getImageData(0, 0, image.naturalWidth, image.naturalHeight);
      els.canvas.width = image.naturalWidth;
      els.canvas.height = image.naturalHeight;
      els.wrap.style.setProperty("--geo-map-ratio", `${image.naturalWidth} / ${image.naturalHeight}`);
      buildMasks(state.sourceImageData);
      state.ready = true;
      els.loading.classList.add("is-hidden");
      startRound();
    };
    image.onerror = () => {
      els.loading.textContent = "Die Karte konnte nicht geladen werden.";
    };
    image.src = MAP_SOURCE;
  }

  function init() {
    if (!els.canvas) return;
    els.canvas.addEventListener("click", handleMapClick);
    SHLApp.onStartGeoQuiz(() => {
      if (state.ready) startRound();
    });
    SHLApp.onBackGeoQuiz(() => {
      state.locked = true;
    });
    loadMap();
  }

  return { init };
})();

SHLGeoQuiz.init();
