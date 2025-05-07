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
      const navBounds = navInner.getBoundingClientRect();
      const menuBounds = desktopMenu.getBoundingClientRect();
      const actionsBounds = actions.getBoundingClientRect();
  
      const menuRight = Math.max(menuBounds.right, actionsBounds.right);
      const navRight = navBounds.right;
  
      // If content is spilling out of nav, hide the phone text
      phoneText.style.display = menuRight > navRight ? 'none' : '';
    }
  
    // Call it on load and resize
    window.addEventListener('load', checkOverlap);
    window.addEventListener('resize', checkOverlap);
  
    const ro = new ResizeObserver(checkOverlap);
    ro.observe(navInner);
    ro.observe(desktopMenu);
    ro.observe(actions);
  }
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
