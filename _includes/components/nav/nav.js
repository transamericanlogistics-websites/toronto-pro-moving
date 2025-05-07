function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    if (!phoneText || !desktopMenu) return;
  
    function toEven(n) {
      return 2 * Math.round(n / 2);
    }
  
    function checkOverlap() {
      const phoneRect = phoneText.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
  
      // Round to nearest even number to avoid flickering at odd widths
      const phone = {
        top: toEven(phoneRect.top),
        bottom: toEven(phoneRect.bottom),
        left: toEven(phoneRect.left),
        right: toEven(phoneRect.right),
      };
  
      const menu = {
        top: toEven(menuRect.top),
        bottom: toEven(menuRect.bottom),
        left: toEven(menuRect.left),
        right: toEven(menuRect.right),
      };
  
      const isOverlapping = !(
        phone.right <= menu.left ||
        phone.left >= menu.right ||
        phone.bottom <= menu.top ||
        phone.top >= menu.bottom
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
