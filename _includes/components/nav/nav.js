function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneLink() {
    const phoneDesktop = document.querySelector('.phone-desktop');
    const phoneMobile = document.querySelector('.phone-mobile');
    const desktopMenu = document.querySelector('.desktop-menu');
    
    // Intersection Observer for detecting overlap between desktop menu and phone link
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // When the desktop menu intersects the phone link, toggle visibility
          phoneDesktop.style.display = 'none';
          phoneMobile.style.display = 'block';
        } else {
          phoneDesktop.style.display = 'block';
          phoneMobile.style.display = 'none';
        }
      });
    }, {
      root: null, // Observe in the viewport
      threshold: 0.1 // Trigger when 10% of the element is visible
    });
  
    // Observe the desktop menu
    if (desktopMenu) {
      observer.observe(desktopMenu);
    }
  
    // For mobile devices, the phone-mobile link will already be shown and the desktop one hidden
    if (window.innerWidth <= 960) {
      phoneDesktop.style.display = 'none';
      phoneMobile.style.display = 'block';
    }
  }
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneLink();
});
