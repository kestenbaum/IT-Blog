'use strict'

let burger = document.querySelector('.burger'),
    header = document.querySelector('.header__right'),
    headerLink = document.querySelectorAll('.header__link'),
    search = document.querySelector('.search__link'),
    searchLine = document.querySelector('.search__line'),
    searchFooter = document.querySelector('.search__footer')


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


search.onclick = function (){
    searchLine.classList.toggle('search__active')
    header.classList.remove('header__active')
    burger.classList.remove('burger__active')
}

searchFooter.onclick = function (){
    searchLine.classList.toggle('search__active')
    header.classList.remove('header__active')
    burger.classList.remove('burger__active')
}

