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
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
  
        // Only hide if they overlap *AND* we're not already hidden
        if (entry.isIntersecting && !isHidden) {
          phoneText.style.display = 'none';
          isHidden = true;
        }
  
        // Only show if they do NOT overlap *AND* we are currently hidden
        if (!entry.isIntersecting && isHidden) {
          phoneText.style.display = '';
          isHidden = false;
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
  
    // Observe if phoneText is overlapping with desktopMenu
    observer.observe(desktopMenu);
  }
  
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
