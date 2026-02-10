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
  function toggleCard(id) {
  const card = document.getElementById(id);
  if (card.style.display === "block") {
    card.style.display = "none";
  } else {
    card.style.display = "block";
  }
}
function toggleCard(id) {
  const info = document.getElementById(id);
  const visible = info.style.display === "block";

  // hide all other info sections
  document.querySelectorAll(".career-info").forEach(div => div.style.display = "none");

  // toggle the clicked one
  info.style.display = visible ? "none" : "block";
}

function toggleCareerInfo(img) {
  const item = img.closest('.career-item');
  const info = item.querySelector('.career-info');

  // Close all others first
  document.querySelectorAll('.career-info').forEach(el => {
    if (el !== info) el.classList.remove('open');
  });

  // Toggle current
  info.classList.toggle('open');
}

function closeCareerInfo(btn) {
  btn.closest('.career-info').classList.remove('open');
}

