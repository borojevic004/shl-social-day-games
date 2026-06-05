const SHLConfetti = (() => {
  const container = document.getElementById("confettiContainer");
  let pieces = [];

  function clear() {
    pieces.forEach(piece => piece.remove());
    pieces = [];
  }

  function create(count) {
    if (!container) return;
    clear();
    const colors = ["#f42f63", "#f9d70d", "#889cff", "#b274e8", "#7f43bf"];

    for (let i = 0; i < count; i++) {
      const piece = document.createElement("div");
      const angle = Math.random() * 2 * Math.PI;
      const radius = 80 + Math.random() * 180;
      const duration = 0.7 + Math.random() * 1.1;

      piece.className = "confetti-piece";
      piece.style.setProperty("--dx", Math.cos(angle) * radius + "px");
      piece.style.setProperty("--dy", -Math.abs(Math.sin(angle) * radius) + "px");
      piece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      piece.style.animationDuration = duration + "s";
      piece.style.animationDelay = Math.random() * 0.8 + "s";
      piece.style.left = 50 + (Math.random() * 10 - 5) + "vw";
      piece.style.top = 55 + (Math.random() * 8 - 4) + "vh";

      container.appendChild(piece);
      pieces.push(piece);
    }
  }

  function start(count = 120) {
    create(count);
    window.setTimeout(clear, 3200);
  }

  return {
    start,
    clear
  };
})();
