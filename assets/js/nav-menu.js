function initNavMenu() {
  const navMenu = document.getElementById("nav-menu");

  if (!navMenu) return;

  navMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", (event) => {
      const targetId = link.getAttribute("href");
      const targetSection = targetId && document.querySelector(targetId);
      const isOpen = navMenu.classList.contains("show");

      if (isOpen && targetSection) {
        event.preventDefault();
        navMenu.addEventListener(
          "hidden.bs.collapse",
          () => {
            window.location.hash = targetId;
          },
          { once: true }
        );
      }

      if (isOpen && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(navMenu).hide();
      }
    });
  });
}
