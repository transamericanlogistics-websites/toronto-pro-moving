function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    if (!phoneText || !desktopMenu) return;
    
    function checkOverlap() {
      // Get updated positions each time this runs
      const phoneRect = phoneText.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
      
      // Add some buffer for safer detection (5px on each side)
      const buffer = 5;
      
      // Check for horizontal overlap with buffer
      const isOverlapping = !(
        phoneRect.right + buffer < menuRect.left ||
        phoneRect.left > menuRect.right + buffer
      );
      
      // Apply visibility directly rather than display property
      // This preserves the layout and prevents jumps
      if (isOverlapping) {
        phoneText.style.opacity = '0';
        phoneText.style.display = 'none';
      } else {
        phoneText.style.opacity = '1';
        phoneText.style.display = '';
      }
    }
    
    // Run on load, resize and also periodically to catch any DOM updates
    window.addEventListener('load', checkOverlap);
    window.addEventListener('resize', () => {
      // Use timeout to debounce and improve performance
      clearTimeout(window.phoneTextResizeTimer);
      window.phoneTextResizeTimer = setTimeout(checkOverlap, 100);
    });
    
    // Initial check
    checkOverlap();
    
    // Also set up a periodic check to handle any other layout changes
    setInterval(checkOverlap, 1000);
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
