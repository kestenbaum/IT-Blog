'use strict'

let burger = document.querySelector('.burger'),
    header = document.querySelector('.header__right'),
    headerLink = document.querySelectorAll('.header__link'),
    input = document.querySelector('.input_sub'),
    btnSub = document.querySelector('.btn__sub')


burger.onclick = function (){
    burger.classList.toggle('burger__active')
    header.classList.toggle('header__active')
}

for (let i of headerLink){
    i.onclick = function (){
        burger.classList.remove('burger__active')
        header.classList.remove('header__active')
    }
}

