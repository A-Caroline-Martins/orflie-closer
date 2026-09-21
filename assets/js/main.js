function initOrflieSite() {
  initThemeToggle();
  initNavMenu();
  initContactForm();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initOrflieSite);
} else {
  initOrflieSite();
}
