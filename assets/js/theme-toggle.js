function initThemeToggle() {
  const toggleButton = document.getElementById("theme-toggle");

  if (!toggleButton) return;

  const icon = toggleButton.querySelector(".material-symbols-outlined");

  const applyTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("orflie-theme", theme);
    if (icon) {
      icon.textContent = theme === "dark" ? "dark_mode" : "light_mode";
    }
  };

  applyTheme(document.documentElement.getAttribute("data-theme") || "dark");

  toggleButton.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme");
    applyTheme(current === "dark" ? "light" : "dark");
  });
}
