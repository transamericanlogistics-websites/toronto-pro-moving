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
      if (!isHidden) {
        // Ensure visible so we can measure accurately
        phoneText.style.display = '';
      } else {
        // It's already hidden, don't do anything unless we can re-show safely
        // Temporarily show it invisibly to measure
        phoneText.style.visibility = 'hidden';
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
  
      // Restore visibility so it's not invisible if it should be shown
      phoneText.style.visibility = '';
  
      // Now update state based on overlap and previous state
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
