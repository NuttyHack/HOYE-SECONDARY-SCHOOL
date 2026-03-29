<script>
document.addEventListener("DOMContentLoaded", function () {

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

  navButtons.forEach(button => {
    button.addEventListener("click", function () {
      const target = this.getAttribute("data-target");
      showPage(target);

      // close mobile menu after click
      if (mobileMenu) {
        mobileMenu.classList.add("hidden");
      }
    });
  });

  // Hamburger toggle
  if (hamburger) {
    hamburger.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }
  document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    // 1. Open/Close the menu when clicking the hamburger button
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // 2. AUTO-CLOSE magic: When ANY mobile link is clicked, hide the menu
    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden'); // This forces the menu to close
      });
    });
  });
});
</script>
