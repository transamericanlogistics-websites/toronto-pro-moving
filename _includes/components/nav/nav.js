function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    if (!phoneText || !desktopMenu) return;
  
    const TOLERANCE = 1; // 1px buffer to absorb subpixel jitter
  
    function checkOverlap() {
      const a = phoneText.getBoundingClientRect();
      const b = desktopMenu.getBoundingClientRect();
  
      const isOverlapping = !(
        a.right < b.left + TOLERANCE ||
        a.left > b.right - TOLERANCE ||
        a.bottom < b.top + TOLERANCE ||
        a.top > b.bottom - TOLERANCE
      );
  
      phoneText.style.display = isOverlapping ? 'none' : '';
    }
  
    window.addEventListener('resize', checkOverlap);
    window.addEventListener('scroll', checkOverlap);
    checkOverlap();
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
