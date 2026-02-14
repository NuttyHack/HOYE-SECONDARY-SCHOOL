document.addEventListener("DOMContentLoaded", () => {
  const navButtons = document.querySelectorAll(".nav-btn");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const pages = document.querySelectorAll(".page");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function showPage(target) {
    pages.forEach(page => page.classList.remove("active"));
    const activePage = document.getElementById(target);
    if (activePage) activePage.classList.add("active");

    navButtons.forEach(btn => btn.classList.remove("active"));
    mobileLinks.forEach(link => link.classList.remove("active"));
    document.querySelectorAll(`[data-target="${target}"]`)
      .forEach(el => el.classList.add("active"));

    // Hide mobile menu on click
    mobileMenu.classList.add("hidden");
    hamburger.setAttribute("aria-expanded", "false");
  }

  // Nav click handlers
  navButtons.forEach(btn => btn.addEventListener("click", () => showPage(btn.dataset.target)));
  mobileLinks.forEach(link => link.addEventListener("click", () => showPage(link.dataset.target)));

  // Hamburger toggle
  hamburger.addEventListener("click", () => {
    const isHidden = mobileMenu.classList.toggle("hidden");
    hamburger.setAttribute("aria-expanded", !isHidden);
  });

  // Default page
  showPage("home");
});

// Career info tabs
function toggleCareerInfo(img) {
  const item = img.closest('.career-item');
  const info = item.querySelector('.career-info');

  document.querySelectorAll('.career-info').forEach(el => {
    if (el !== info) el.classList.remove('open');
  });

  info.classList.toggle('open');
}

function closeCareerInfo(btn) {
  btn.closest('.career-info').classList.remove('open');
}
