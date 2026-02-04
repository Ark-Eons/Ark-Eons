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
