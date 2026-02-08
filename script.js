console.log('Script started');

function toggleMenu() {
  console.log('toggleMenu called');
  const menu = document.getElementById('menu');
  if (menu) {
    menu.classList.toggle('show');
    console.log('Menu class:', menu.className);
  }
}

// Attendre que le DOM soit prêt
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready');
  const btn = document.getElementById('menu-toggle');
  if (btn) {
    console.log('Button found, adding listener');
    btn.addEventListener('click', toggleMenu);
  } else {
    console.log('Button NOT found!');
  }
});
