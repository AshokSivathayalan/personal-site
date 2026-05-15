// Theme toggle + footer year stamp. Nothing else.

(function () {
  const root = document.documentElement;

  function currentTheme() {
    return root.getAttribute("data-theme") === "dark" ? "dark" : "light";
  }

  function applyTheme(theme) {
    root.setAttribute("data-theme", theme);
    try { localStorage.setItem("theme", theme); } catch (_) {}
  }

  document.addEventListener("DOMContentLoaded", function () {
    const btn = document.querySelector(".theme-toggle");
    if (btn) {
      btn.setAttribute("aria-pressed", currentTheme() === "dark" ? "true" : "false");
      btn.addEventListener("click", function () {
        const next = currentTheme() === "dark" ? "light" : "dark";
        applyTheme(next);
        btn.setAttribute("aria-pressed", next === "dark" ? "true" : "false");
      });
    }

    const yearEl = document.querySelector("[data-year]");
    if (yearEl) {
      yearEl.textContent = String(new Date().getFullYear());
    }
  });
})();
