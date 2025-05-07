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
  
      // Normalize rects to integer pixels to avoid subpixel overlap bugs
      const phone = {
        top: Math.floor(phoneRect.top),
        bottom: Math.floor(phoneRect.bottom),
        left: Math.floor(phoneRect.left),
        right: Math.floor(phoneRect.right),
      };
  
      const menu = {
        top: Math.floor(menuRect.top),
        bottom: Math.floor(menuRect.bottom),
        left: Math.floor(menuRect.left),
        right: Math.floor(menuRect.right),
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
