(() => {
  const STORAGE_KEY = "theme";
  const root = document.documentElement;

  function getSavedTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEY);
    return savedTheme === "dark" || savedTheme === "light" ? savedTheme : null;
  }

  function applyTheme(theme) {
    const icon = document.getElementById("theme-icon");

    if (theme === "dark") {
      root.setAttribute("data-theme", "dark");
      if (icon) {
        icon.classList.remove("fa-sun");
        icon.classList.add("fa-moon");
      }
      return;
    }

    root.removeAttribute("data-theme");
    if (icon) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    }
  }

  function resolveTheme() {
    return getSavedTheme() || "light";
  }

  function toggleTheme(event) {
    if (event) {
      event.preventDefault();
    }

    const nextTheme = resolveTheme() === "dark" ? "light" : "dark";
    localStorage.setItem(STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
  }

  function bindThemeToggle() {
    const toggle = document.getElementById("theme-toggle");
    if (!toggle) {
      return;
    }

    applyTheme(resolveTheme());
    toggle.addEventListener("click", toggleTheme);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bindThemeToggle, { once: true });
  } else {
    bindThemeToggle();
  }
})();
