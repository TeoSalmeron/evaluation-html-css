// SCROLL REVEALS
ScrollReveal().reveal(".sequenced", {interval: 75})
ScrollReveal().reveal(".left", {origin: "left", distance: "250px"})
ScrollReveal().reveal(".right", {origin: "right", distance: "250px"})

// VARIABLES

const navToggleMenu = document.getElementById("navToggleMenu")
const navList = document.getElementById("navList")
const navCloseMenu = document.getElementById("navCloseMenu")
const navLinks = document.getElementsByClassName("nav--link")

// FUNCTIONS

navToggleMenu.addEventListener('click', () => {
    navList.style.left = "0px"
    navToggleMenu.style.display = "none"
    navCloseMenu.style.display = "block"
})

//---> Close navigation bar menu
navCloseMenu.addEventListener('click', () => {
    navList.style.left = "-100vw"
    navToggleMenu.style.display = "block"
    setTimeout(() => {
        navCloseMenu.style.display = "none"
    }, 300);
})
