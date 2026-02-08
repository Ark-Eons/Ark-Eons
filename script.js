// Fonction pour copier l'IP dans le presse-papiers
function copyIP() {
    const ip = 'https://discord.gg/hgcFN5hf3p';
    navigator.clipboard.writeText(ip).then(() => {
        alert('adresse copiée dans le presse-papiers !');
    });
}

// Toggle Menu simple et fiable
function toggleMenu() {
    const menu = document.getElementById('menu');
    if (menu.style.display === 'none' || menu.style.display === '') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

// Fermer le menu en cliquant ailleurs
document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const toggle = document.getElementById('menu-toggle');
    if (!menu.contains(event.target) && !toggle.contains(event.target)) {
        menu.style.display = 'none';
    }
});

// Diaporama pour les races
let currentSlideRaces = 1;
const totalSlidesRaces = 5;

// Diaporama pour les classes
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
setInterval(() => nextSlide('races'), 20000);
setInterval(() => nextSlide('classes'), 20000);

// Initialiser
showSlide('races');
showSlide('classes');
