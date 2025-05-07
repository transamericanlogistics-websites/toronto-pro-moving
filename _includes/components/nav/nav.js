function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
  
    if (!phoneText || !desktopMenu) return;
  
    // Set up an observer to watch for intersection between the two
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        const isIntersecting = entry.isIntersecting;
  
        if (isIntersecting) {
          phoneText.style.display = 'none';
        } else {
          phoneText.style.display = '';
        }
      },
      {
        root: null, // viewport
        threshold: 0,
        rootMargin: '-1px', // tiny buffer to ensure clean edge
      }
    );
  
    observer.observe(phoneText);
  }
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
