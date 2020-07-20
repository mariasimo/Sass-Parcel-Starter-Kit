// No touch screen detection
function isTouchEnabled() { 
    return ( 'ontouchstart' in window ) ||  
           ( navigator.maxTouchPoints > 0 ) ||  
           ( navigator.msMaxTouchPoints > 0 ); 
} 

// Add class to open mobile menu
function headerMenuToggle() {
    const mobileHeader = document.querySelector('header .tablet-only')
    const openMenuBtn = mobileHeader.querySelector('.megamenu-mobile__trigger.header-btn')
    const toggleMenu = (menu) => {
        menu.classList.toggle('open');
        bodyTag.classList.toggle('menu-is-open');
    }

    openMenuBtn.addEventListener('click', () => toggleMenu(mobileHeader))
}


// Add tabs functionality
function tabsHandler() {
    const tabItems = document.querySelectorAll('.tab-menu-item')
    const tabContents = document.querySelectorAll('.tab-content-item')

    tabItems.forEach(tabItem => {
        tabItem.addEventListener('click', (e) => _switchTabs(e, tabItems, tabContents))
    })
}

function _switchTabs(e, tabItems, tabContents) {
    // Change tab style
    const activeTab = e.currentTarget
    tabItems.forEach(tabItem => {
        tabItem.classList.remove('current')
    })
    activeTab.classList.add('current')

    // Show active tab content
    const activeTabContent = document.getElementById(activeTab.getAttribute('data-tabitem'))
    tabContents.forEach(tabContent => {
        tabContent.classList.remove('current')
    })
    activeTabContent.classList.add('current')
}


window.addEventListener('load', () => {

    // Add class to body on no-touch-devices
    const bodyTag = document.querySelector('body')
    bodyTag.classList.add(!isTouchEnabled() && 'no-touch-device')

    // Add class to open mobile menu
    headerMenuToggle()

    // Add tabs functionality
    tabsHandler()
    
})

