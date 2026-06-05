function createSwipeController(element, options = {}) {
  const threshold = options.threshold || 70;
  const restraint = options.restraint || 90;
  const maxPreview = options.maxPreview || 120;
  const onSwipe = options.onSwipe || function () {};
  const canSwipe = options.canSwipe || function () { return true; };

  let pointerDown = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;

  function getPoint(event) {
    if (event.changedTouches && event.changedTouches.length) {
      return event.changedTouches[0];
    }
    if (event.touches && event.touches.length) {
      return event.touches[0];
    }
    return event;
  }

  function resetCard() {
    element.style.transform = "";
    element.style.opacity = "";
  }

  function previewCard(deltaX) {
    const clamped = Math.max(-maxPreview, Math.min(maxPreview, deltaX));
    const rotation = clamped / 18;
    element.style.transform = `translateX(${clamped}px) rotate(${rotation}deg)`;
    element.style.opacity = String(1 - Math.min(Math.abs(clamped) / 420, 0.25));
  }

  function animateOut(direction) {
    const offset = direction === "right" ? 260 : -260;
    const rotation = direction === "right" ? 10 : -10;
    element.style.transform = `translateX(${offset}px) rotate(${rotation}deg)`;
    element.style.opacity = "0";

    window.setTimeout(() => {
      resetCard();
      onSwipe(direction);
    }, 220);
  }

  function start(event) {
    if (!canSwipe()) return;
    const point = getPoint(event);
    pointerDown = true;
    startX = point.clientX;
    startY = point.clientY;
    currentX = startX;
    element.classList.add("is-swiping");
  }

  function move(event) {
    if (!pointerDown || !canSwipe()) return;
    const point = getPoint(event);
    const deltaX = point.clientX - startX;
    const deltaY = point.clientY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      currentX = point.clientX;
      previewCard(deltaX);
      if (event.cancelable) event.preventDefault();
    }
  }

  function end(event) {
    if (!pointerDown) return;
    const point = getPoint(event);
    const deltaX = (point.clientX || currentX) - startX;
    const deltaY = point.clientY - startY;

    pointerDown = false;
    element.classList.remove("is-swiping");

    if (Math.abs(deltaX) >= threshold && Math.abs(deltaY) <= restraint) {
      animateOut(deltaX > 0 ? "right" : "left");
      return;
    }

    resetCard();
  }

  element.addEventListener("touchstart", start, { passive: true });
  element.addEventListener("touchmove", move, { passive: false });
  element.addEventListener("touchend", end, { passive: true });
  element.addEventListener("mousedown", start);
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);

  return {
    destroy() {
      element.removeEventListener("touchstart", start);
      element.removeEventListener("touchmove", move);
      element.removeEventListener("touchend", end);
      element.removeEventListener("mousedown", start);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
    },
    reset: resetCard
  };
}
function createSwipeController(element, options = {}) {
  const threshold = options.threshold || 70;
  const restraint = options.restraint || 90;
  const maxPreview = options.maxPreview || 120;
  const onSwipe = options.onSwipe || function () {};
  const canSwipe = options.canSwipe || function () { return true; };

  let pointerDown = false;
  let startX = 0;
  let startY = 0;
  let currentX = 0;

  function getPoint(event) {
    if (event.changedTouches && event.changedTouches.length) {
      return event.changedTouches[0];
    }
    if (event.touches && event.touches.length) {
      return event.touches[0];
    }
    return event;
  }

  function resetCard() {
    element.style.transform = "";
    element.style.opacity = "";
  }

  function previewCard(deltaX) {
    const clamped = Math.max(-maxPreview, Math.min(maxPreview, deltaX));
    const rotation = clamped / 18;
    element.style.transform = `translateX(${clamped}px) rotate(${rotation}deg)`;
    element.style.opacity = String(1 - Math.min(Math.abs(clamped) / 420, 0.25));
  }

  function animateOut(direction) {
    const offset = direction === "right" ? 260 : -260;
    const rotation = direction === "right" ? 10 : -10;
    element.style.transform = `translateX(${offset}px) rotate(${rotation}deg)`;
    element.style.opacity = "0";

    window.setTimeout(() => {
      resetCard();
      onSwipe(direction);
    }, 220);
  }

  function start(event) {
    if (!canSwipe()) return;
    const point = getPoint(event);
    pointerDown = true;
    startX = point.clientX;
    startY = point.clientY;
    currentX = startX;
    element.classList.add("is-swiping");
  }

  function move(event) {
    if (!pointerDown || !canSwipe()) return;
    const point = getPoint(event);
    const deltaX = point.clientX - startX;
    const deltaY = point.clientY - startY;

    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      currentX = point.clientX;
      previewCard(deltaX);
      if (event.cancelable) event.preventDefault();
    }
  }

  function end(event) {
    if (!pointerDown) return;
    const point = getPoint(event);
    const deltaX = (point.clientX || currentX) - startX;
    const deltaY = point.clientY - startY;

    pointerDown = false;
    element.classList.remove("is-swiping");

    if (Math.abs(deltaX) >= threshold && Math.abs(deltaY) <= restraint) {
      animateOut(deltaX > 0 ? "right" : "left");
      return;
    }

    resetCard();
  }

  element.addEventListener("touchstart", start, { passive: true });
  element.addEventListener("touchmove", move, { passive: false });
  element.addEventListener("touchend", end, { passive: true });
  element.addEventListener("mousedown", start);
  window.addEventListener("mousemove", move);
  window.addEventListener("mouseup", end);

  return {
    destroy() {
      element.removeEventListener("touchstart", start);
      element.removeEventListener("touchmove", move);
      element.removeEventListener("touchend", end);
      element.removeEventListener("mousedown", start);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", end);
    },
    reset: resetCard
  };
}
