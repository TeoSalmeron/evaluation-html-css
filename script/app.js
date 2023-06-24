// SCROLL REVEALS
ScrollReveal().reveal(".sequenced", {interval: 200})
ScrollReveal().reveal(".left", {origin: "left", distance: "250px"})
ScrollReveal().reveal(".right", {origin: "right", distance: "250px"})

// VARIABLES

const navToggleMenu = document.getElementById("navToggleMenu")
const navList = document.getElementById("navList")
const navCloseMenu = document.getElementById("navCloseMenu")
const navLinks = document.getElementsByClassName("nav--link")

// FUNCTIONS

//---> Toggle navigation bar menu
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

//---> Hover effect on nav links
for (let link of navLinks) {
    link.addEventListener('mouseenter', (e) => {
        let targetLink = e.target
        for(let link of navLinks) {
            if(link !== targetLink) {
                link.style.color = "rgb(207, 157, 171)"
            } else {
                link.style.color = "#e33d6c"
            }
        }
    })

    link.addEventListener('mouseleave', () => {
        for(let link of navLinks) {
            link.style.color = "#e33d6c"
        }
    })
}
