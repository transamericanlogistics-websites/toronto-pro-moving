function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    const actions = document.querySelector('.actions');
  
    if (!phoneText || !desktopMenu || !actions) return;
  
    let lastHidden = null;
  
    function checkOverlap() {
      const menuRect = desktopMenu.getBoundingClientRect();
      const actionsRect = actions.getBoundingClientRect();
  
      // Normalize to integers to avoid subpixel jitter
      const menuRight = Math.floor(menuRect.right);
      const actionsLeft = Math.floor(actionsRect.left);
  
      const isOverlapping = menuRight + 10 > actionsLeft;
  
      if (isOverlapping && !lastHidden) {
        phoneText.style.display = 'none';
        lastHidden = true;
      } else if (!isOverlapping && lastHidden) {
        phoneText.style.display = '';
        lastHidden = false;
      }
    }
  
    window.addEventListener('load', checkOverlap);
    window.addEventListener('resize', checkOverlap);
    setTimeout(checkOverlap, 100);
  }
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
