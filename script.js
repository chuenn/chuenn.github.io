const links = document.querySelectorAll("nav a");
const sections = document.querySelectorAll('.section');

links.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    
    // Update active nav link
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
    
    // Show corresponding section
    sections.forEach(s => s.classList.remove('active'));
    document.querySelector(link.getAttribute('href')).classList.add('active');
    
    // Update URL without page reload
    history.pushState(null, '', link.getAttribute('href'));
  });
});

// Handle browser back/forward buttons
window.addEventListener('popstate', () => {
  const hash = window.location.hash || '#work';
  links.forEach(l => l.classList.remove('active'));
  sections.forEach(s => s.classList.remove('active'));
  document.querySelector(`nav a[href="${hash}"]`)?.classList.add('active');
  document.querySelector(hash)?.classList.add('active');
});