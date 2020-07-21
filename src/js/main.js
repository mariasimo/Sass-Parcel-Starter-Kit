// No touch screen detection
function isTouchEnabled() {
    return ('ontouchstart' in window) ||
        (navigator.maxTouchPoints > 0) ||
        (navigator.msMaxTouchPoints > 0);
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
        tabItem.addEventListener('click', (e) => _switchContents(e, tabItems, tabContents, 'current', 'current','data-tabitem'))
    })
}

function _switchContents(e, items, contents, cssClassContent, cssClassItem, attrName) {
    // Change items style
    const activeItem = e.currentTarget
    items.forEach(item => {
        item.classList.remove(cssClassItem)
    })
    activeItem.classList.add(cssClassItem)

    // Show active content
    const activeContent = document.getElementById(activeItem.getAttribute(attrName))
    contents.forEach(content => {
        content.classList.remove(cssClassContent)
    })
    activeContent.classList.add(cssClassContent)
}

// Add class to open modal
function modalHandler() {
    const searchBtn = document.getElementById('search-btn')
    const searchModal = document.getElementById('search-engine-modal-form')
    const modalCloseBtn = document.getElementById('modal-close-btn')

    searchBtn.addEventListener('click', (e) => _toggleModal(e, searchModal))
    modalCloseBtn.addEventListener('click', (e) => _toggleModal(e, searchModal))
}

function _toggleModal(e, searchModal) {
    console.log(searchModal)
    searchModal.classList.toggle('modal-visible');
}

// Search engine mockup fn
function searchHandler() {
    const inputSearch = document.getElementById('query')
    const inputSubmit = document.getElementById('query-submit')
    const searchForm = document.getElementById('search-form')
    const fakePlaceholder = document.querySelector('.fake-placeholder')

    inputSearch.oninput = (e) => {
        const q = e.target.value
        if (q.length) {
            fakePlaceholder.classList.add('hidden');
            inputSubmit.removeAttribute('disabled')
        } else {
            fakePlaceholder.classList.remove('hidden')
            inputSubmit.setAttribute('disabled', '')
        }
    }

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const q = inputSearch.value
        if(q) {
            window.location.href = `https://universidadeuropea.es/search?q=${q}`
        }
    })
}


// Add megamenu functionality
function megamenuHandler() {
    const megamenuItems = document.querySelectorAll('.megamenu-trigger')
    const megamenuContents = document.querySelectorAll('.megamenu-content')
    const megamenuWrapper = document.querySelector('.megamenu-parent')

    megamenuItems.forEach(item => {
        item.addEventListener('mouseenter', (e) => _switchContents(e, megamenuItems, megamenuContents, 'open', 'active', 'data-menuid'))
    })
    megamenuWrapper.addEventListener('mouseleave', (e) => _closeMegaMenu(e, megamenuItems, megamenuContents))
}

function _closeMegaMenu(e, megamenuItems, megamenuContents) {
    setTimeout((e) => {
        megamenuItems.forEach(item => {
            item.classList.remove('active')
        })
    
        megamenuContents.forEach(content => {
            content.classList.remove('open')
        })
    },500, e)
}


window.addEventListener('load', () => {

    // Add class to body on no-touch-devices
    const bodyTag = document.querySelector('body')
    bodyTag.classList.add(!isTouchEnabled() && 'no-touch-device')

    // Add class to open mobile menu
    headerMenuToggle()

    // Add tabs functionality
    tabsHandler()

    // Add class to open modal
    modalHandler()

    // Add search fn
    searchHandler()

    // Add megamenu fn
    megamenuHandler()

})

