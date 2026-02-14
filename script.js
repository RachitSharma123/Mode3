const root = document.documentElement;
const toggle = document.querySelector('.theme-toggle');
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

const savedTheme = localStorage.getItem('mode3-theme');
if (savedTheme === 'dark') {
  root.setAttribute('data-theme', 'dark');
  toggle.textContent = '☀️';
}

toggle.addEventListener('click', () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  if (isDark) {
    root.removeAttribute('data-theme');
    toggle.textContent = '🌙';
    localStorage.setItem('mode3-theme', 'light');
  } else {
    root.setAttribute('data-theme', 'dark');
    toggle.textContent = '☀️';
    localStorage.setItem('mode3-theme', 'dark');
  }
});

navToggle.addEventListener('click', () => {
  const open = navLinks.dataset.open === 'true';
  navLinks.dataset.open = String(!open);
  navToggle.setAttribute('aria-expanded', String(!open));
});

document.querySelectorAll('.nav-links a').forEach((link) => {
  link.addEventListener('click', () => {
    navLinks.dataset.open = 'false';
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

const form = document.querySelector('.contact-form');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  form.reset();
  alert('Thanks! We\'ll be in touch shortly.');
});

const yearEl = document.querySelector('#year');
yearEl.textContent = String(new Date().getFullYear());
