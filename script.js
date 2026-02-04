// Fonction pour copier l'IP dans le presse-papiers
function copyIP() {
    const ip = 'votre-ip-serveur:port';
    navigator.clipboard.writeText(ip).then(() => {
        alert('IP copiée dans le presse-papiers !');
    });
}

// Simulation de statut du serveur (remplacez par une vraie API si disponible)
document.addEventListener('DOMContentLoaded', function() {
    // Ici, vous pourriez faire un appel API pour obtenir le vrai statut
    // Par exemple : fetch('https://api.hytale-servers.com/status/ark-eons')
    setTimeout(() => {
        // Ajouter un élément de statut si nécessaire
        console.log('Serveur chargé');
    }, 1000);
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
setInterval(() => nextSlide('races'), 15000);
setInterval(() => nextSlide('classes'), 15000);

// Initialiser
showSlide('races');
showSlide('classes');
