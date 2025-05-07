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
      
      // For initial load, we want to process regardless of lastWidth
      // Only skip if width hasn't changed during resize events
      if (width === lastWidth && lastWidth !== window.innerWidth) return;
      
      // Stabilize against odd/even flickering by rounding to even number
      const roundedWidth = Math.floor(width / 2) * 2;
      
      // Store for next comparison
      lastWidth = width;
      
      // Get fixed breakpoint - adjust this value to match your site
      const breakpoint = 1100; // Example - adjust this value!
      
      // Simple rule - show/hide based on rounded width
      const shouldHide = roundedWidth <= breakpoint;
      
      // Update the visibility
      phoneText.style.display = shouldHide ? 'none' : '';
      currentlyHidden = shouldHide;
    }
    
    // Check on resize events
    window.addEventListener('resize', checkWidth);
    
    // Run immediately on function call rather than waiting for load event
    checkWidth();
}
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
