document.addEventListener("DOMContentLoaded", function () {

  const navButtons = document.querySelectorAll(".nav-btn");
  const mobileLinks = document.querySelectorAll(".mobile-link");
  const pages = document.querySelectorAll(".page");
  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");

  function showPage(target) {
    pages.forEach(page => {
      page.classList.remove("active");
    });

    const activePage = document.getElementById(target);
    if (activePage) {
      activePage.classList.add("active");
    }

    navButtons.forEach(btn => btn.classList.remove("active"));
    mobileLinks.forEach(link => link.classList.remove("active"));

    document.querySelectorAll(`[data-target="${target}"]`)
      .forEach(el => el.classList.add("active"));

    mobileMenu.classList.add("hidden");
  }

  navButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      showPage(btn.dataset.target);
    });
  });

  mobileLinks.forEach(link => {
    link.addEventListener("click", () => {
      showPage(link.dataset.target);
    });
  });

  hamburger.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  showPage("home"); // default page
});

function toggleCareerInfo(img) {
  const item = img.closest('.career-item');
  const info = item.querySelector('.career-info');

  // Close others
  document.querySelectorAll('.career-info').forEach(el => {
    if (el !== info) el.classList.remove('open');
  });

  // Toggle current
  info.classList.toggle('open');
}

function closeCareerInfo(btn) {
  btn.closest('.career-info').classList.remove('open');
}
  // Show/hide pages
  function showPage(pageId) {
    document.querySelectorAll('.page').forEach(page => {
      page.classList.remove('active');
    });
    document.getElementById(pageId).classList.add('active');
  }

  // Desktop navigation
  document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', () => {
      const target = button.getAttribute('data-target');
      showPage(target);
    });
  });

  // Mobile navigation
  document.querySelectorAll('.mobile-link').forEach(link => {
    link.addEventListener('click', () => {
      const target = link.getAttribute('data-target');
      showPage(target);
      document.getElementById('mobileMenu').classList.add('hidden');
      document.getElementById('hamburger').setAttribute('aria-expanded', 'false');
    });
  });

  // Hamburger menu toggle
  document.getElementById('hamburger').addEventListener('click', () => {
    const menu = document.getElementById('mobileMenu');
    const isExpanded = menu.classList.toggle('hidden');
    document.getElementById('hamburger').setAttribute('aria-expanded', !isExpanded);
  });

  // Initialize first page
  document.addEventListener('DOMContentLoaded', () => {
    showPage('welcome');
  });

function showTab(id) {
  // hide all pages
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));

  // show the selected page
  const page = document.getElementById(id);
  if (page) page.classList.add('active');

  // optional: close mobile menu if open
  const navToggle = document.getElementById('nav-toggle');
  if (navToggle) navToggle.checked = false;
}
