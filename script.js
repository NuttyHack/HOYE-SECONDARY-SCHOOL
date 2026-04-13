document.addEventListener("DOMContentLoaded", () => {

  const navButtons = document.querySelectorAll(".nav-btn, .mobile-link");
  const pages = document.querySelectorAll(".page");
  const mobileMenu = document.getElementById("mobileMenu");
  const hamburger = document.getElementById("hamburger");

  function showPage(targetId) {
    pages.forEach(page => page.classList.remove("active"));

    const targetPage = document.getElementById(targetId);
    if (targetPage) {
      targetPage.classList.add("active");
    }
  }

  function closeMenu() {
    if (mobileMenu && hamburger) {
      mobileMenu.classList.remove("open");
      hamburger.classList.remove("open");
      hamburger.setAttribute("aria-expanded", "false");
      mobileMenu.setAttribute("aria-hidden", "true");
    }
  }

  function openMenu() {
    if (mobileMenu && hamburger) {
      mobileMenu.classList.add("open");
      hamburger.classList.add("open");
      hamburger.setAttribute("aria-expanded", "true");
      mobileMenu.setAttribute("aria-hidden", "false");
    }
  }

  // Toggle menu
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      if (mobileMenu.classList.contains("open")) {
        closeMenu();
      } else {
        openMenu();
      }
    });
  }

  // Nav clicks
  navButtons.forEach(button => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-target");
      if (target) showPage(target);

    
      closeMenu();
    });
  });

});