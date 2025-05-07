function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    if (!phoneText || !desktopMenu) return;
  
    let lastVisibility = null;
  
    function checkOverlap() {
      const phoneRect = phoneText.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
  
      const isOverlapping = !(
        phoneRect.right <= menuRect.left ||
        phoneRect.left >= menuRect.right ||
        phoneRect.bottom <= menuRect.top ||
        phoneRect.top >= menuRect.bottom
      );
  
      if (isOverlapping !== lastVisibility) {
        phoneText.style.display = isOverlapping ? 'none' : '';
        lastVisibility = isOverlapping;
      }
    }
  
    window.addEventListener('resize', checkOverlap);
    window.addEventListener('scroll', checkOverlap);
    new MutationObserver(checkOverlap).observe(document.body, { childList: true, subtree: true });
  
    checkOverlap(); // Initial check
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
