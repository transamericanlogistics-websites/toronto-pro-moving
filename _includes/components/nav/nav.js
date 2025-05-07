function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
  
    if (!phoneText || !desktopMenu) return;
  
    function checkOverlap() {
      const phoneRect = phoneText.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
  
      const isOverlapping = !(
        phoneRect.right < menuRect.left ||
        phoneRect.left > menuRect.right ||
        phoneRect.bottom < menuRect.top ||
        phoneRect.top > menuRect.bottom
      );
  
      if (isOverlapping) {
        phoneText.style.display = 'none';
      } else {
        phoneText.style.display = '';
      }
    }
  
    // Run on resize + initial
    window.addEventListener('resize', () => requestAnimationFrame(checkOverlap));
    requestAnimationFrame(checkOverlap);
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
