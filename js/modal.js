const SHLModal = (() => {
  const backdrop = document.getElementById("job-modal");
  const content = document.getElementById("job-modal-content");
  let previouslyFocusedElement = null;
  let dismissible = true;

  function close() {
    if (!backdrop || !backdrop.classList.contains("is-open")) return;

    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
    document.removeEventListener("keydown", handleKeydown);

    if (previouslyFocusedElement && document.contains(previouslyFocusedElement)) {
      previouslyFocusedElement.focus();
    }
  }

  function open(html, afterRender, options = {}) {
    if (!backdrop || !content) return;

    dismissible = options.dismissible !== false;
    previouslyFocusedElement = document.activeElement;
    content.innerHTML = html;
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    backdrop.onclick = (event) => {
      if (dismissible && event.target === backdrop) close();
    };

    document.addEventListener("keydown", handleKeydown);
    if (afterRender) afterRender(content, close);

    const firstButton = content.querySelector("button");
    if (firstButton) firstButton.focus();
  }

  function handleKeydown(event) {
    if (event.key === "Escape" && dismissible) close();
  }

  return {
    open,
    close
  };
})();
