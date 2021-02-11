const navbar = document.getElementById('navbar')
const icon_navbar = document.getElementById('menu-btn')
const menu = document.getElementById("menu")
const elemento_i = document.getElementById("i")

addEventListener('scroll', ()=> {
    if(scrollY > 50){
        navbar.classList.add("navbar-two")
    } else {
        navbar.classList.remove("navbar-two")
    }
})

icon_navbar.addEventListener("click", ()=> {
    menu.classList.toggle("active")
    elemento_i.classList.toggle("active")
})