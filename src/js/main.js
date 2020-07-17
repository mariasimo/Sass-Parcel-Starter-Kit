// No touch screen detection


window.addEventListener('load', () => {
    function is_touch_enabled() { 
        return ( 'ontouchstart' in window ) ||  
               ( navigator.maxTouchPoints > 0 ) ||  
               ( navigator.msMaxTouchPoints > 0 ); 
    } 
    
    const bodyTag = document.querySelector('body')
    bodyTag.classList.add(!is_touch_enabled() && 'no-touch-device')
    
})