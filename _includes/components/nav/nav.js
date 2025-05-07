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
      if (!phoneText || !navInner || !desktopMenu || !actions) return;
      const navWidth = navInner.offsetWidth;
      const usedWidth = desktopMenu.offsetWidth + actions.offsetWidth;
      phoneText.style.display = usedWidth > navWidth ? 'none' : '';
    }
    const resizeObserver = new ResizeObserver(checkOverlap);
    [navInner, desktopMenu, actions].forEach(el => resizeObserver.observe(el));
    window.addEventListener('load', checkOverlap);
}  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
