function initContactForm() {
  const contactForm = document.querySelector(".contact-form form");

  if (!contactForm) return;

  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = contactForm.elements["name"].value.trim();
    const email = contactForm.elements["email"].value.trim();
    const message = contactForm.elements["message"].value.trim();

    const subject = `Contato via site — ${name}`;
    const body = `${message}\n\n${name}\n${email}`;

    window.location.href = `mailto:contato@orflie.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  });
}
