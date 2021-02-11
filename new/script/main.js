'use strict'

let headerNav = document.querySelector('.header__nav'),
    burger = document.querySelector('.burger__wrap')

burger.onclick = function () {
    burger.classList.toggle('burger__active')
    headerNav.classList.toggle('header__active')
}

