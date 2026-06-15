const SHLConfetti = (() => {
  const container = document.getElementById("confettiContainer");
  let pieces = [];
  let clearTimer = null;

  function clear() {
    if (clearTimer) {
      window.clearTimeout(clearTimer);
      clearTimer = null;
    }
    pieces.forEach(piece => piece.remove());
    pieces = [];
  }

  function create(options) {
    if (!container) return;
    clear();
    const colors = [
      "#f42f63",
      "#ffaecb",
      "#f9d70d",
      "#f7eec4",
      "#3348dd",
      "#889cff",
      "#b274e8",
      "#d1adf7",
      "#7f43bf",
      "#262f5e",
      "#ffffff"
    ];

    for (let i = 0; i < options.count; i++) {
      const piece = document.createElement("div");
      const angle = Math.random() * 2 * Math.PI;
      const radius = options.minRadius +
        Math.random() * (options.maxRadius - options.minRadius);
      const duration = options.minDuration +
        Math.random() * (options.maxDuration - options.minDuration);
      const sizeRange = options.maxSize - options.minSize;
      const sizeChance = Math.random();
      const size = sizeChance < 0.45
        ? options.minSize + Math.random() * sizeRange * 0.28
        : sizeChance < 0.82
          ? options.minSize + sizeRange * 0.28 + Math.random() * sizeRange * 0.38
          : options.minSize + sizeRange * 0.66 + Math.random() * sizeRange * 0.34;
      const isStreamer = Math.random() > 0.62;
      const burstX = Math.cos(angle) * radius;
      const burstY = Math.sin(angle) * radius;
      const fallX = burstX + (Math.random() - 0.5) * options.fallDrift;
      const fallY = burstY + options.minFall +
        Math.random() * (options.maxFall - options.minFall);
      const rotation = 360 + Math.random() * 1080;

      piece.className = options.mode === "burst"
        ? "confetti-piece confetti-piece-burst"
        : "confetti-piece";
      piece.style.setProperty("--dx", burstX + "px");
      piece.style.setProperty("--dy", burstY + "px");
      piece.style.setProperty("--burst-x", burstX + "px");
      piece.style.setProperty("--burst-y", burstY + "px");
      piece.style.setProperty("--fall-x", fallX + "px");
      piece.style.setProperty("--fall-y", fallY + "px");
      piece.style.setProperty("--confetti-width", size * (isStreamer ? 0.55 : 1) + "px");
      piece.style.setProperty("--confetti-height", size * (isStreamer ? 1.65 : 1) + "px");
      piece.style.setProperty("--confetti-radius", isStreamer ? "2px" : "50%");
      piece.style.setProperty("--burst-rotation", rotation * 0.55 + "deg");
      piece.style.setProperty("--mid-rotation", rotation * 0.72 + "deg");
      piece.style.setProperty("--confetti-rotation", rotation + "deg");
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = duration + "s";
      piece.style.animationDelay = Math.random() * options.maxDelay + "s";
      piece.style.left = 50 + (Math.random() - 0.5) * options.originSpreadX + "vw";
      piece.style.top = 50 + (Math.random() - 0.5) * options.originSpreadY + "vh";

      container.appendChild(piece);
      pieces.push(piece);
    }
  }

  function start(settings = 120) {
    const customOptions = typeof settings === "number" ? { count: settings } : settings;
    const options = {
      count: 120,
      lifetime: 3200,
      minSize: 6,
      maxSize: 10,
      minRadius: 80,
      maxRadius: 260,
      minDuration: 0.7,
      maxDuration: 1.8,
      maxDelay: 0.8,
      originSpreadX: 10,
      originSpreadY: 8,
      mode: "default",
      minFall: 180,
      maxFall: 420,
      fallDrift: 180,
      ...customOptions
    };

    create(options);
    clearTimer = window.setTimeout(clear, options.lifetime);
  }

  return {
    start,
    clear
  };
})();
