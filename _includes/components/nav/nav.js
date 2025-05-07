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
  
    // Create a clone for layout measurement that doesn't affect visibility
    const clone = phoneText.cloneNode(true);
    clone.style.position = 'absolute';
    clone.style.visibility = 'hidden';
    clone.style.pointerEvents = 'none';
    clone.style.display = '';
    clone.style.left = '-9999px'; // Push offscreen so it doesn't overlap
    document.body.appendChild(clone);
  
    function checkOverlap() {
      // Use the clone's real dimensions as if it were visible
      const phoneRect = clone.getBoundingClientRect();
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
