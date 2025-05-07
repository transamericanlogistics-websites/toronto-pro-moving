function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const desktopMenu = document.querySelector('.desktop-menu');
    if (!phoneText || !desktopMenu) return;
  
    // Assume icon is the last child, text is all before it
    const children = Array.from(phoneText.childNodes);
    const icon = children.find(child => child.nodeType === 1); // icon is an element
    const textNodes = children.filter(child => child.nodeType === 3 || (child !== icon && child.nodeType === 1));
  
    function checkOverlap() {
      const phoneRect = phoneText.getBoundingClientRect();
      const menuRect = desktopMenu.getBoundingClientRect();
  
      const isOverlapping = !(
        phoneRect.right <= menuRect.left ||
        phoneRect.left >= menuRect.right ||
        phoneRect.bottom <= menuRect.top ||
        phoneRect.top >= menuRect.bottom
      );
  
      if (isOverlapping) {
        // Hide all text nodes or elements except the icon
        textNodes.forEach(node => {
          if (node.style) node.style.visibility = 'hidden';
        });
  
        // Position icon to the right
        if (icon) {
          icon.style.position = 'absolute';
          icon.style.left = `${phoneRect.right + 5}px`; // adjust spacing as needed
          icon.style.top = `${phoneRect.top}px`;
        }
      } else {
        textNodes.forEach(node => {
          if (node.style) node.style.visibility = '';
        });
  
        if (icon) {
          icon.style.position = '';
          icon.style.left = '';
          icon.style.top = '';
        }
      }
    }
  
    window.addEventListener('resize', checkOverlap);
    window.addEventListener('scroll', checkOverlap);
    checkOverlap();
  }
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
