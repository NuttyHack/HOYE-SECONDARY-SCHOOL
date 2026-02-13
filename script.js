/* ================== SPA NAVIGATION ================== */
(function () {
  const navBtns        = Array.from(document.querySelectorAll('.nav-btn'));
  const pages          = Array.from(document.querySelectorAll('.page'));
  const mobileLinks    = Array.from(document.querySelectorAll('.mobile-link'));
  const mobileMenu     = document.getElementById('mobileMenu');
  const hamburger      = document.getElementById('hamburger');
  const requestDesktop = document.getElementById('requestProposalDesktop');
  const requestMobile  = document.getElementById('requestProposalMobile');

  function showPage(id) {
    pages.forEach(p => p.classList.toggle('active', p.id === id));
    navBtns.forEach(b => b.classList.toggle('active', b.dataset.target === id));

    if (mobileMenu) {
      mobileMenu.classList.remove("open");
      mobileMenu.setAttribute('aria-hidden', 'true');
    }
    if (hamburger) hamburger.setAttribute('aria-expanded', 'false');

    window.scrollTo({ top: 0, behavior: 'instant' });
  }

  navBtns.forEach(btn =>
    btn.addEventListener('click', () => showPage(btn.dataset.target))
  );

  mobileLinks.forEach(ml =>
    ml.addEventListener('click', () => showPage(ml.dataset.target))
  );

  if (hamburger && mobileMenu) {
    hamburger.addEventListener("click", () => {
      const expanded = hamburger.getAttribute("aria-expanded") === "true";
      hamburger.setAttribute("aria-expanded", String(!expanded));
      mobileMenu.classList.toggle("open");
      mobileMenu.setAttribute("aria-hidden", expanded ? "true" : "false");
    });
  }

  if (requestDesktop)
    requestDesktop.addEventListener('click', () => showPage('contact'));
  if (requestMobile)
    requestMobile.addEventListener('click', () => showPage('contact'));
  // Hero CTA buttons on the home hero
  const heroCtas = document.querySelectorAll('.hero-ctas .cta');
  heroCtas.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.getAttribute('data-target');
      if (target) showPage(target);
    });
  });
  showPage('home');
})();
function toggleGallery(folder) {
  const gallery = folder.closest('.event-card').querySelector('.event-gallery');
  gallery.classList.toggle('active');
}

function closeGallery(btn) {
  const gallery = btn.closest('.event-gallery');
  gallery.classList.remove('active');
}
  document.querySelectorAll('.mobile-nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.getElementById('nav-toggle').checked = false;
    });
  });
  // Handle active tab highlighting
  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
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

.career-info {
  margin-top: 15px;
  padding: 15px;
  background: #f9f9f9;
  border-radius: 12px;
}

.close-info {
  cursor: pointer;
  font-weight: bold;
  margin-bottom: 10px;
}
