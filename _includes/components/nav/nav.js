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
      ([entry]) => {
        const isIntersecting = entry.isIntersecting;
  
        if (isIntersecting && !isHidden) {
          phoneText.style.display = 'none';
          isHidden = true;
        } else if (!isIntersecting && isHidden) {
          phoneText.style.display = '';
          isHidden = false;
        }
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '0px',
      }
    );
  
    observer.observe(desktopMenu);
  }
  
  
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
