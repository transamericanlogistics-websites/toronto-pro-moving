function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
  const phoneText = document.querySelector('.phone-text');
  const desktopMenu = document.querySelector('.desktop-menu');
  
  if (!phoneText || !desktopMenu) return;
  
  // Store state to prevent unnecessary updates
  let isCurrentlyHidden = false;
  
  // Function to check overlap without changing the current display state
  function willElementsOverlap() {
    // Save current display state
    const originalDisplay = phoneText.style.display;
    
    // Make visible temporarily for measurement
    phoneText.style.display = '';
    
    // Force reflow to ensure measurements are correct
    phoneText.offsetHeight;
    
    // Get positions
    const phoneRect = phoneText.getBoundingClientRect();
    const menuRect = desktopMenu.getBoundingClientRect();
    
    // Restore original display state
    phoneText.style.display = originalDisplay;
    
    // Define overlap with a small buffer (5px)
    const buffer = 5;
    return !(
      phoneRect.right + buffer < menuRect.left ||
      phoneRect.left > menuRect.right + buffer
    );
  }
  
  // Update visibility based on overlap check
  function updateVisibility() {
    // Check if elements would overlap
    const shouldHide = willElementsOverlap();
    
    // Only update if state changed
    if (shouldHide !== isCurrentlyHidden) {
      phoneText.style.display = shouldHide ? 'none' : '';
      isCurrentlyHidden = shouldHide;
    }
    
    // Always make sure visibility is set to visible (overrides initial CSS)
    phoneText.style.visibility = 'visible';
  }
  
  // Run on resize with simple debounce
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateVisibility, 100);
  });
  
  // Run on DOM changes that could affect menu width
  const observer = new MutationObserver(() => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(updateVisibility, 100);
  });
  
  // Watch for changes to the menu content
  observer.observe(desktopMenu, { 
    childList: true,  // Watch for added/removed items
    subtree: true,    // Watch nested elements
    characterData: true, // Watch for text changes
    attributes: true  // Watch for attribute changes
  });
  
  // Initial check - run immediately
  updateVisibility();
  
  // Also run after a short delay to ensure all page elements are fully rendered
  setTimeout(updateVisibility, 10);
  
  // Also run once more after all images and resources are loaded
  window.addEventListener('load', updateVisibility);
}
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
