function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    if (!phoneText || !desktopMenu) return;
    
    // Find specific breakpoint widths that work properly
    let currentlyHidden = false;
    let lastWidth = window.innerWidth;
    
    function checkWidth() {
      const width = window.innerWidth;
      
      // Only process if width changed since last check
      if (width === lastWidth) return;
      
      // Stabilize against odd/even flickering by rounding to even number
      const roundedWidth = Math.floor(width / 2) * 2;
      
      // Store for next comparison
      lastWidth = width;
      
      // Get fixed breakpoint - adjust this value to match your site
      // Find a breakpoint by testing your site manually
      const breakpoint = 1100; // Example - adjust this value!
      
      // Simple rule - show/hide based on rounded width
      const shouldHide = roundedWidth <= breakpoint;
      
      // Only update if state changes
      if (shouldHide !== currentlyHidden) {
        phoneText.style.display = shouldHide ? 'none' : '';
        currentlyHidden = shouldHide;
      }
    }
    
    // Check on resize events
    window.addEventListener('onload', checkWidth);
    window.addEventListener('resize', checkWidth);
    
    // Initial check
    checkWidth();
  }
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
