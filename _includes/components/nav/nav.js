function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    if (!phoneText || !desktopMenu) return;
    
    // Create a hidden clone to always calculate the correct width
    const phoneTextClone = phoneText.cloneNode(true);
    phoneTextClone.style.visibility = 'hidden';
    phoneTextClone.style.position = 'absolute';
    phoneTextClone.style.pointerEvents = 'none';
    phoneText.parentNode.appendChild(phoneTextClone);
    
    function checkOverlap() {
      // Get the clone's width (which is always rendered)
      const cloneRect = phoneTextClone.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
      
      // Calculate if there would be overlap
      const wouldOverlap = !(
        cloneRect.right < menuRect.left ||
        cloneRect.left > menuRect.right
      );
      
      // Set display property based on the calculation
      phoneText.style.display = wouldOverlap ? 'none' : '';
    }
    
    // Run on resize
    window.addEventListener('resize', checkOverlap);
    
    // Initial check
    checkOverlap();
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
