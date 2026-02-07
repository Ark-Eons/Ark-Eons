// Toggle Menu avec overlay
function toggleMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('menu-overlay');
  const toggle = document.getElementById('menu-toggle');
  const willShow = !menu.classList.contains('show');

  menu.classList.toggle('show', willShow);
  overlay.classList.toggle('show', willShow);
  menu.setAttribute('aria-hidden', String(!willShow));
  toggle.setAttribute('aria-expanded', String(willShow));

  if (willShow) {
    // Focus sur le premier lien
    const firstLink = menu.querySelector('a');
    firstLink && firstLink.focus();
    // Écouter Échap pour fermer
    document.addEventListener('keydown', escClose);
  } else {
    document.removeEventListener('keydown', escClose);
    toggle.focus();
  }
}

function escClose(e) {
  if (e.key === 'Escape') {
    const menu = document.getElementById('menu');
    if (menu.classList.contains('show')) toggleMenu();
  }
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const overlay = document.getElementById('menu-overlay');

  if (toggle) {
    // Retire onclick du HTML et gère en JS seulement
    toggle.onclick = null;
    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });
    toggle.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleMenu();
      }
    });
  }

  if (overlay) overlay.addEventListener('click', () => toggleMenu());
});

// Reste du code (copyIP, diaporamas, etc.)
function copyIP() {
    const ip = 'votre-ip-serveur:port';
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP copiée dans le presse-papiers !');
    });
}

let currentSlideRaces = 1;
const totalSlidesRaces = 5;
let currentSlideClasses = 1;
const totalSlidesClasses = 8;

function showSlide(type) {
    if (type === 'races') {
        document.getElementById('slide-races').src = `race${currentSlideRaces}.jpg`;
        document.getElementById('slide-races').alt = `Race ${currentSlideRaces}`;
    } else if (type === 'classes') {
        document.getElementById('slide-classes').src = `class${currentSlideClasses}.jpg`;
        document.getElementById('slide-classes').alt = `Classe ${currentSlideClasses}`;
    }
}

function nextSlide(type) {
    if (type === 'races') {
        currentSlideRaces = (currentSlideRaces % totalSlidesRaces) + 1;
    } else if (type === 'classes') {
        currentSlideClasses = (currentSlideClasses % totalSlidesClasses) + 1;
    }
    showSlide(type);
}

function prevSlide(type) {
    if (type === 'races') {
        currentSlideRaces = currentSlideRaces === 1 ? totalSlidesRaces : currentSlideRaces - 1;
    } else if (type === 'classes') {
        currentSlideClasses = currentSlideClasses === 1 ? totalSlidesClasses : currentSlideClasses - 1;
    }
    showSlide(type);
}

// Démarrer les diaporamas automatiques
setInterval(() => nextSlide('races'), 15000);
setInterval(() => nextSlide('classes'), 15000);

// Initialiser
showSlide('races');
showSlide('classes');
