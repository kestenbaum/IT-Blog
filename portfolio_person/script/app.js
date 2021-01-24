'use strict'

let burger = document.querySelector('.burger'),
    nav = document.querySelector('.header_nav'),
    navLink = document.querySelectorAll('.nav_link'),
    body = document.querySelector('.body')


window.onscroll = () => {
    if (window.scrollY > 100) {
       burger.style.cssText = 'background: #A5B0C3'
    }
}

if (nav.classList.contains('header_active') !== true){
    nav.style.cssText = 'top: 60px'
}

burger.onclick = () => {
    nav.classList.toggle('header_active')
    body.classList.toggle('lock')

}

for (let i of navLink){
    i.onclick = function (){
             nav.classList.remove('header_active')
            body.classList.remove('lock')
    }
}

