function initMobileMenuToggle() {
    const mobile_menu_toggle = document.querySelector('.mobile-menu-toggle');
    const mobile_menu = document.querySelector('.mobile-menu');
    mobile_menu_toggle.addEventListener( 'click', () => { mobile_menu.classList.toggle('open') } );
}

function initResponsivePhoneText() {
    const phoneText = document.querySelector('.phone-text');
    const phoneWrapper = document.querySelector('.actions a');
    const navInner = document.querySelector('.nav-inner');
    const desktopMenu = document.querySelector('.desktop-menu');
    const actions = document.querySelector('.actions');
  
    if (!phoneText || !phoneWrapper || !navInner || !desktopMenu || !actions) return;
  
    let lastState = null;
  
    function checkOverlap() {
      // Temporarily hide phoneText for measurement
      const prevDisplay = phoneText.style.display;
      phoneText.style.display = 'inline'; // force visible for accurate width
      const navWidth = navInner.offsetWidth;
      const usedWidth = desktopMenu.offsetWidth + actions.offsetWidth;
      const shouldHide = usedWidth > navWidth;
      phoneText.style.display = prevDisplay; // restore to current state
  
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
