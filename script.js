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
  
