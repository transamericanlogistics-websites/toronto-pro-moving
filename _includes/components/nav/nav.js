function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
  
    if (!phoneText || !desktopMenu) return;
  
    let isCurrentlyHidden = false;
  
    const observer = new IntersectionObserver(
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
  
        // Only update when the visibility needs to change
        if (isIntersecting && !isCurrentlyHidden) {
          phoneText.style.display = 'none';
          isCurrentlyHidden = true;
        } else if (!isIntersecting && isCurrentlyHidden) {
          phoneText.style.display = '';
          isCurrentlyHidden = false;
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px',
      }
    );
  
    observer.observe(phoneText);
  }
  
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
