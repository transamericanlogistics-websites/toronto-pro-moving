function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
  
    if (!phoneText || !desktopMenu) return;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Only hide if ACTUALLY intersecting
        if (entry.isIntersecting) {
          phoneText.style.visibility = 'hidden';
        } else {
          phoneText.style.visibility = 'visible';
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
  
    // Observe desktopMenu — when it intersects phoneText, hide
    observer.observe(desktopMenu);
  }
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
