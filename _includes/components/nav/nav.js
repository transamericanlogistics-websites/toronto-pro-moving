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
        if (entry && entry.isIntersecting) {
          phoneText.style.display = 'none';
        } else {
          phoneText.style.display = '';
        }
      },
      {
        root: null,
        threshold: 0,
      }
    );
  
    // phoneText is observed to see if it intersects with desktopMenu
    observer.observe(phoneText);
  
    // Hack to force proper intersection region
    phoneText.style.position = 'relative';
    desktopMenu.style.zIndex = '1';
  }
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
