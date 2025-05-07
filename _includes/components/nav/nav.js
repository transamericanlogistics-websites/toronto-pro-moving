function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
  
    if (!phoneText || !desktopMenu) return;
  
    let lastOverlapState = null;
    let resizeTimeout;
  
    function checkOverlap() {
      const phoneRect = phoneText.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
  
      const isOverlapping = !(
        phoneRect.right < menuRect.left ||
        phoneRect.left > menuRect.right ||
        phoneRect.bottom < menuRect.top ||
        phoneRect.top > menuRect.bottom
      );
  
      if (isOverlapping !== lastOverlapState) {
        phoneText.style.display = isOverlapping ? 'none' : '';
        lastOverlapState = isOverlapping;
      }
    }
  
    // Debounce for performance and stability
    function onResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(checkOverlap, 100); // adjust delay as needed
    }
  
    window.addEventListener('resize', onResize);
    window.addEventListener('load', checkOverlap);
    requestAnimationFrame(checkOverlap);
  }
  
  
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
