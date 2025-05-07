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
  
    function checkOverlap() {
      // Force reflow before measuring
      requestAnimationFrame(() => {
        const navWidth = navInner.offsetWidth;
        const usedWidth = desktopMenu.offsetWidth + actions.offsetWidth;
  
        phoneText.style.display = usedWidth > navWidth ? 'none' : '';
      });
    }
  
    // Call once at load
    window.addEventListener('load', checkOverlap);
  
    // Resize observer handles dynamic layout shifts
    const ro = new ResizeObserver(checkOverlap);
    ro.observe(navInner);
    ro.observe(desktopMenu);
    ro.observe(actions);
  
    // Also check on window resize for full coverage
    window.addEventListener('resize', checkOverlap);
  }
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
