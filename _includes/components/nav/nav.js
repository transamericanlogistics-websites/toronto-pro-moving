function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const navInner = document.querySelector('.nav-inner');
    const desktopMenu = document.querySelector('.desktop-menu');
    const actions = document.querySelector('.actions');
  
    if (!phoneText || !navInner || !desktopMenu || !actions) return;
  
    let lastState = null;
  
    function checkOverlap() {
      // Clone actions with phoneText forced visible
      const clone = actions.cloneNode(true);
      const clonePhoneText = clone.querySelector('.phone-text');
      clone.style.visibility = 'hidden';
      clone.style.position = 'absolute';
      clone.style.pointerEvents = 'none';
      clonePhoneText.style.display = 'inline';
  
      document.body.appendChild(clone);
      const navWidth = navInner.offsetWidth;
      const usedWidth = desktopMenu.offsetWidth + clone.offsetWidth;
      document.body.removeChild(clone);
  
      const shouldHide = usedWidth > navWidth;
  
      if (shouldHide !== lastState) {
        phoneText.style.display = shouldHide ? 'none' : '';
        lastState = shouldHide;
      }
    }
  
    window.addEventListener('load', checkOverlap);
    window.addEventListener('resize', checkOverlap);
  
    const ro = new ResizeObserver(() => requestAnimationFrame(checkOverlap));
    ro.observe(navInner);
    ro.observe(desktopMenu);
    ro.observe(actions);
  }
  
  
  
  

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenuToggle();
    initResponsivePhoneText();
});
