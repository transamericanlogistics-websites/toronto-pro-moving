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
  
    // Create ghost element
    const ghost = phoneText.cloneNode(true);
    ghost.style.position = 'absolute';
    ghost.style.visibility = 'hidden';
    ghost.style.pointerEvents = 'none';
    ghost.style.margin = '0';
    ghost.style.padding = '0';
    ghost.style.border = 'none';
    document.body.appendChild(ghost);
  
    function updateGhostPosition() {
      const rect = phoneText.getBoundingClientRect();
      ghost.style.top = `${window.scrollY + rect.top}px`;
      ghost.style.left = `${window.scrollX + rect.left}px`;
      ghost.style.width = `${rect.width}px`;
      ghost.style.height = `${rect.height}px`;
    }
  
    function checkOverlap() {
      updateGhostPosition();
  
      const ghostRect = ghost.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
  
      const isOverlapping = !(
        ghostRect.right <= menuRect.left ||
        ghostRect.left >= menuRect.right ||
        ghostRect.bottom <= menuRect.top ||
        ghostRect.top >= menuRect.bottom
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
