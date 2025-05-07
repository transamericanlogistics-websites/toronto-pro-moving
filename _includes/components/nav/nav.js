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
  
    // Create a clone and insert it right after the real one
    const clone = phoneText.cloneNode(true);
    clone.style.visibility = 'hidden';         // invisible
    clone.style.pointerEvents = 'none';        // non-interactive
    clone.style.position = 'absolute';         // take out of flow
    clone.style.top = '0';
    clone.style.left = '0';
    clone.style.width = phoneText.offsetWidth + 'px';  // match dimensions
    clone.style.height = phoneText.offsetHeight + 'px';
    document.body.appendChild(clone);          // place in DOM
  
    function updateClonePosition() {
      const realRect = phoneText.getBoundingClientRect();
      clone.style.top = window.scrollY + realRect.top + 'px';
      clone.style.left = window.scrollX + realRect.left + 'px';
    }
  
    function checkOverlap() {
      updateClonePosition();
  
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
