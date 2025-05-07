function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    if (!phoneText || !desktopMenu) return;
  
    let isHidden = false;
  
    function checkOverlap() {
      // Temporarily ensure it's visible to measure correctly
      if (isHidden) {
        phoneText.style.display = '';
      }
  
      const phoneRect = phoneText.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
  
      const isOverlapping = !(
        phoneRect.right <= menuRect.left ||
        phoneRect.left >= menuRect.right ||
        phoneRect.bottom <= menuRect.top ||
        phoneRect.top >= menuRect.bottom
      );
  
      if (isOverlapping && !isHidden) {
        phoneText.style.display = 'none';
        isHidden = true;
      } else if (!isOverlapping && isHidden) {
        phoneText.style.display = '';
        isHidden = false;
      }
    }
  
    window.addEventListener('resize', checkOverlap);
    window.addEventListener('scroll', checkOverlap);
    checkOverlap();
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
