function createSwipeController(element, options = {}) {
  const threshold = options.threshold || 70;
  const minFlickDistance = options.minFlickDistance || 30;
  const flickVelocity = options.flickVelocity || 0.45;
  const restraint = options.restraint || 100;
  const maxPreview = options.maxPreview || 130;
  const onSwipe = options.onSwipe || function () {};
  const canSwipe = options.canSwipe || function () { return true; };

  let activePointerId = null;
  let startX = 0;
  let startY = 0;
  let currentX = 0;
  let currentY = 0;
  let startTime = 0;
  let isAnimating = false;

  function resetCard() {
    element.style.transform = "";
    element.style.opacity = "";
    element.removeAttribute("data-swipe-direction");
  }

  function previewCard(deltaX) {
    const clamped = Math.max(-maxPreview, Math.min(maxPreview, deltaX));
    const rotation = clamped / 18;

    element.style.transform = `translateX(${clamped}px) rotate(${rotation}deg)`;
    element.style.opacity = String(1 - Math.min(Math.abs(clamped) / 420, 0.25));
    element.dataset.swipeDirection = deltaX >= 0 ? "right" : "left";
  }

  function animateOut(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const offset = direction === "right" ? 360 : -360;
    const rotation = direction === "right" ? 12 : -12;
    element.style.transform = `translateX(${offset}px) rotate(${rotation}deg)`;
    element.style.opacity = "0";

    window.setTimeout(() => {
      resetCard();
      isAnimating = false;
      onSwipe(direction);
    }, 220);
  }

  function start(event) {
    if (!canSwipe() || isAnimating || event.button > 0) return;

    activePointerId = event.pointerId;
    startX = event.clientX;
    startY = event.clientY;
    currentX = startX;
    currentY = startY;
    startTime = performance.now();
    element.classList.add("is-swiping");

    if (element.setPointerCapture) {
      element.setPointerCapture(event.pointerId);
    }
  }

  function move(event) {
    if (event.pointerId !== activePointerId || !canSwipe()) return;

    currentX = event.clientX;
    currentY = event.clientY;
    const deltaX = currentX - startX;
    const deltaY = currentY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      previewCard(deltaX);
      if (event.cancelable) event.preventDefault();
    }
  }

  function end(event) {
    if (event.pointerId !== activePointerId) return;

    const deltaX = currentX - startX;
    const deltaY = currentY - startY;
    const elapsed = Math.max(performance.now() - startTime, 1);
    const velocity = Math.abs(deltaX) / elapsed;
    const passedDistance = Math.abs(deltaX) >= threshold;
    const passedFlick = Math.abs(deltaX) >= minFlickDistance && velocity >= flickVelocity;
    const stayedHorizontal = Math.abs(deltaY) <= restraint;

    activePointerId = null;
    element.classList.remove("is-swiping");

    if ((passedDistance || passedFlick) && stayedHorizontal) {
      animateOut(deltaX > 0 ? "right" : "left");
      return;
    }

    resetCard();
  }

  function handleKeyboard(event) {
    if (!canSwipe() || isAnimating) return;

    if (event.key === "ArrowRight") {
      event.preventDefault();
      animateOut("right");
    }

    if (event.key === "ArrowLeft") {
      event.preventDefault();
      animateOut("left");
    }
  }

  element.addEventListener("pointerdown", start);
  element.addEventListener("pointermove", move);
  element.addEventListener("pointerup", end);
  element.addEventListener("pointercancel", end);
  window.addEventListener("keydown", handleKeyboard);

  return {
    destroy() {
      element.removeEventListener("pointerdown", start);
      element.removeEventListener("pointermove", move);
      element.removeEventListener("pointerup", end);
      element.removeEventListener("pointercancel", end);
      window.removeEventListener("keydown", handleKeyboard);
    },
    reset: resetCard
  };
}
