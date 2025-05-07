function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    if (!phoneText || !desktopMenu) return;
    
    // Store the natural width of the phone text when it's visible
    let phoneTextNaturalWidth = 0;
    
    // Measure the natural width only once at initialization
    function measurePhoneText() {
      // Ensure it's visible for measurement
      const originalDisplay = phoneText.style.display;
      const originalVisibility = phoneText.style.visibility;
      phoneText.style.display = '';
      phoneText.style.visibility = 'hidden';
      
      // Get the natural width
      const rect = phoneText.getBoundingClientRect();
      phoneTextNaturalWidth = rect.width;
      
      // Restore original state
      phoneText.style.display = originalDisplay;
      phoneText.style.visibility = originalVisibility;
    }
    
    // Call once at initialization
    measurePhoneText();
    
    // This function checks if the phone text would overlap with the menu
    function checkOverlap() {
      // Get positions
      const phoneParentRect = phoneText.parentElement.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
      
      // Calculate where the phone text would end if it was visible
      // (parent left position + the text's natural width)
      const phoneRightEdge = phoneParentRect.left + phoneTextNaturalWidth;
      
      // Add buffer for stability
      const buffer = 5;
      
      // Check if the phone text would overlap with the menu
      const wouldOverlap = !(
        phoneRightEdge + buffer < menuRect.left ||
        phoneParentRect.left > menuRect.right + buffer
      );
      
      // Set display property based on the calculation
      phoneText.style.display = wouldOverlap ? 'none' : '';
    }
    
    // Run on load and resize
    window.addEventListener('load', checkOverlap);
    window.addEventListener('resize', () => {
      // Use timeout to debounce and improve performance
      clearTimeout(window.phoneTextResizeTimer);
      window.phoneTextResizeTimer = setTimeout(checkOverlap, 100);
    });
    
    // Initial check
    checkOverlap();
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
