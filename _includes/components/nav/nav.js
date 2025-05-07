function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const navInner = document.querySelector('.nav-inner');
    const desktopMenu = document.querySelector('.desktop-menu');
    const actions = document.querySelector('.actions');
    function checkOverlap() {
      const navWidth = navInner.offsetWidth;
      const usedWidth = desktopMenu.offsetWidth + actions.offsetWidth;
    
      if (usedWidth > navWidth) {
        phoneText.style.display = 'none';
      } else {
        phoneText.style.display = '';
      }
    }
    window.addEventListener('load', checkOverlap);
    window.addEventListener('resize', checkOverlap);
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
