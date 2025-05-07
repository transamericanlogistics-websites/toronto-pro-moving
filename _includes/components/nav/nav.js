function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
  
    if (!phoneText || !desktopMenu) return;
  
    // Clone phoneText and make it invisible but still interactable for observing
    const ghost = phoneText.cloneNode(true);
    ghost.style.visibility = 'hidden';
    ghost.style.position = 'absolute';
    ghost.style.pointerEvents = 'none';
    ghost.style.top = phoneText.offsetTop + 'px';
    ghost.style.left = phoneText.offsetLeft + 'px';
    ghost.style.width = phoneText.offsetWidth + 'px';
    ghost.style.height = phoneText.offsetHeight + 'px';
    phoneText.parentElement.appendChild(ghost);
  
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
  
        // Avoid flickering by only reacting when intersection ratio actually changes
        if (entry.isIntersecting && entry.intersectionRatio > 0) {
          phoneText.style.display = 'none';
        } else {
          phoneText.style.display = '';
        }
      },
      {
        root: null,
        threshold: 0.01,
      }
    );
  
    observer.observe(ghost);
  }
  
  
  
  
  
  
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
