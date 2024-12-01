// Funkcia pre toggle menu na mobilných zariadeniach
const menuToggle = document.querySelector('.menu-toggle');
const headMenu = document.querySelector('.head_menu');

menuToggle.addEventListener('click', () => {
    headMenu.classList.toggle('open');
});
