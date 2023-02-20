const logo = document.querySelector('.menu-humburger');
let menu = document.querySelector('.menu');

logo.addEventListener('click', () => {
    menu.classList.toggle('show-menu');
});