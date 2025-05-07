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
  
      const isOverlapping = menuRect.right + 10 > actionsRect.left; // add buffer
  
      if (isOverlapping && !lastHidden) {
        phoneText.style.display = 'none';
        lastHidden = true;
      } else if (!isOverlapping && lastHidden) {
        phoneText.style.display = '';
        lastHidden = false;
      }
    }
  
    // Check once and on resize
    window.addEventListener('load', checkOverlap);
    window.addEventListener('resize', checkOverlap);
  
    // Optional: check when fonts load or layout shifts
    setTimeout(checkOverlap, 100); // in case load timing throws off dimensions
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
