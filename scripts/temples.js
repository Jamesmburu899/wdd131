// Hamburger Menu Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Dark Mode Toggle
const toggleButton = document.getElementById('dark-mode-toggle');

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Footer Dynamic Content
const year = new Date().getFullYear();
document.getElementById('year').textContent = year;

const lastModified = document.lastModified;
document.getElementById('last-modified').textContent = lastModified;