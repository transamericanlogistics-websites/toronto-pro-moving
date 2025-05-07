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
  
      const isOverlapping =
        phoneRect.left < menuRect.right &&
        phoneRect.right > menuRect.left &&
        phoneRect.top < menuRect.bottom &&
        phoneRect.bottom > menuRect.top;
  
      if (isOverlapping) {
        phoneText.style.display = 'none';
      } else {
        phoneText.style.display = '';
      }
    }
  
    // Run on load and resize
    window.addEventListener('resize', checkOverlap);
    window.addEventListener('load', checkOverlap);
  }
  
  
  
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
