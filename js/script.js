const navbar = document.getElementById('navbar')
const icon_navbar = document.getElementById('menu-btn')
const menu = document.getElementById("menu")
const elemento_i = document.getElementById("i")
const typed = new Typed('.typed', {
    strings: [
        'Desarrollador', 
        'Ingeniero Mecatronico', 
        'Programador',
    ],
    typeSpeed: 30,
    startDelay: 150,
    backSpeed: 45,
    smartBackspace: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
})

const typed_two = new Typed('.typed_two', {
    strings: [
        'Programador',
        'Desarrollador', 
        'Ingeniero Mecatronico',
        'Administrador BBDD',
        'Implementador ERP', 
    ],
    typeSpeed: 30,
    startDelay: 200,
    backSpeed: 45,
    smartBackspace: true,
    backDelay: 1500,
    loop: true,
    loopCount: false,
    showCursor: true,
    cursorChar: '|',
    contentType: 'html',
})
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