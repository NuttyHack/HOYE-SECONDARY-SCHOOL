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
