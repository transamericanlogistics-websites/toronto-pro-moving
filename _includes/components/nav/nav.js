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
  
    if (!phoneText || !navInner || !desktopMenu || !actions) return;
  
    let lastState = null;
  
    function checkOverlap() {
      const navWidth = Math.floor(navInner.offsetWidth);
      const menuWidth = Math.floor(desktopMenu.offsetWidth + actions.offsetWidth);
      const buffer = 10; // prevents toggling on 1px shifts
  
      const shouldHide = menuWidth + buffer > navWidth;
  
      if (shouldHide !== lastState) {
        phoneText.style.display = shouldHide ? 'none' : '';
        lastState = shouldHide;
      }
    }
  
    // Run once initially
    window.addEventListener('load', checkOverlap);
  
    // Debounced resize to avoid rapid toggling
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkOverlap, 100);
    });
  
    // Optional: if dynamic content might change layout later
    new ResizeObserver(checkOverlap).observe(navInner);
  }
  
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
