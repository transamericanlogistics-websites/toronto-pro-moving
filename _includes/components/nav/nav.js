document.addEventListener('DOMContentLoaded', () => {
    const mobile_menu_button = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_button.addEventListener('click', () => mobile_menu.classList.toggle('open'));
});