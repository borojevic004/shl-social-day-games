const SHLModal = (() => {
  const backdrop = document.getElementById("job-modal");
  const content = document.getElementById("job-modal-content");

  function close() {
    if (!backdrop) return;
    backdrop.classList.remove("is-open");
    backdrop.setAttribute("aria-hidden", "true");
  }

  function open(html, afterRender) {
    if (!backdrop || !content) return;
    content.innerHTML = html;
    backdrop.classList.add("is-open");
    backdrop.setAttribute("aria-hidden", "false");
    backdrop.onclick = (event) => {
      if (event.target === backdrop) close();
    };
    if (afterRender) afterRender(content, close);
  }

  return {
    open,
    close
  };
})();
