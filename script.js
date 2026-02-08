// Ignorer les erreurs des extensions
window.addEventListener('error', (e) => {
  if (e.filename && e.filename.includes('webpage_content_reporter')) {
    e.preventDefault();
  }
});

alert('Script loaded!');

// Toggle Menu avec overlay
function toggleMenu() {
  // ... reste du code

// Toggle Menu avec overlay
function toggleMenu() {
  const menu = document.getElementById('menu');
  const overlay = document.getElementById('menu-overlay');
  const toggle = document.getElementById('menu-toggle');
  
  if (!menu) {
    console.error('Menu element not found');
    return;
  }
  
  menu.classList.toggle('show');
  overlay.classList.toggle('show');
  
  console.log('Menu classes:', menu.className);
  console.log('Menu visible:', menu.classList.contains('show'));
}

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('menu-toggle');
  const menu = document.getElementById('menu');
  
  console.log('Page loaded - Toggle:', toggle ? 'found' : 'NOT FOUND');
  console.log('Page loaded - Menu:', menu ? 'found' : 'NOT FOUND');

  if (toggle) {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Button clicked');
      toggleMenu();
    });
  }

  const overlay = document.getElementById('menu-overlay');
  if (overlay) {
    overlay.addEventListener('click', () => {
      console.log('Overlay clicked');
      toggleMenu();
    });
  }
});

// Reste du code...
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
        const slideRaces = document.getElementById('slide-races');
        if (slideRaces) {
            slideRaces.src = `race${currentSlideRaces}.jpg`;
            slideRaces.alt = `Race ${currentSlideRaces}`;
        }
    } else if (type === 'classes') {
        const slideClasses = document.getElementById('slide-classes');
        if (slideClasses) {
            slideClasses.src = `class${currentSlideClasses}.jpg`;
            slideClasses.alt = `Classe ${currentSlideClasses}`;
        }
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
