const bodyElement = document.body
const contactLinkHeader = document.getElementById("contact-link")
const menuExpanded = document.getElementById("menu-expanded")
const buttonCloseMenu = document.getElementById("closeMenu")
const buttonOpenMenu = document.getElementById("openMenu")

function openMenu() {
    contactLinkHeader.classList.add('displayOff')
    menuExpanded.classList.add('displayOn')
    bodyElement.classList.add('openMenu')
    buttonOpenMenu.classList.add('displayOff')
    buttonCloseMenu.classList.add('displayOn')
}

function closeMenu() {
    contactLinkHeader.classList.remove('displayOff')
    menuExpanded.classList.remove('displayOn')
    bodyElement.classList.remove('openMenu')
    buttonOpenMenu.classList.remove('displayOff')
    buttonCloseMenu.classList.remove('displayOn')
}