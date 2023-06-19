const navToggleMenu = document.getElementById("navToggleMenu")
const navList = document.getElementById("navList")
const navCloseMenu = document.getElementById("navCloseMenu")

// Toggle navigation bar menu
navToggleMenu.addEventListener('click', () => {
    navList.style.left = "0px"
    navToggleMenu.style.display = "none"
    navCloseMenu.style.display = "block"
})

// Close navigation bar menu
navCloseMenu.addEventListener('click', () => {
    navList.style.left = "-100vw"
    navToggleMenu.style.display = "block"
    setTimeout(() => {
        navCloseMenu.style.display = "none"
    }, 300);
})