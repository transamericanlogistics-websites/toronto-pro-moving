function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneWrapper = document.querySelector('.actions a');
    const navInner = document.querySelector('.nav-inner');
    const desktopMenu = document.querySelector('.desktop-menu');
    const actions = document.querySelector('.actions');
  
    if (!phoneWrapper || !navInner || !desktopMenu || !actions) return;
  
    function checkOverlap() {
      requestAnimationFrame(() => {
        const navRight = navInner.getBoundingClientRect().right;
        const menuRight = desktopMenu.getBoundingClientRect().right + actions.offsetWidth;
  
        const willOverlap = menuRight > navRight;
        phoneWrapper.style.display = willOverlap ? 'none' : '';
      });
    }
  
    // Run on load
    window.addEventListener('load', checkOverlap);
  
    // Observe layout changes
    const ro = new ResizeObserver(checkOverlap);
    ro.observe(navInner);
    ro.observe(desktopMenu);
    ro.observe(actions);
  
    // Also run on resize
    window.addEventListener('resize', checkOverlap);
  }
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
