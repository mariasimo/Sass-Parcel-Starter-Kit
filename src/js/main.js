// No touch screen detection
function is_touch_enabled() { 
    return ( 'ontouchstart' in window ) ||  
           ( navigator.maxTouchPoints > 0 ) ||  
           ( navigator.msMaxTouchPoints > 0 ); 
} 

window.addEventListener('load', () => {

    // Add class to body on no-touch-devices
    const bodyTag = document.querySelector('body')
    bodyTag.classList.add(!is_touch_enabled() && 'no-touch-device')

    // Add class to open mobile menu
    const mobileHeader = document.querySelector('header .tablet-only')
    const openMenuBtn = mobileHeader.querySelector('.megamenu-mobile__trigger.header-btn')
    const toggleMenu = (menu) => {
        menu.classList.toggle('open');
        bodyTag.classList.toggle('menu-is-open');
    }

    openMenuBtn.addEventListener('click', () => toggleMenu(mobileHeader))
    
})