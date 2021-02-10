'use strict'

let burger = document.querySelector('.header-burger')

burger.onclick = function (){
    this.classList.toggle('burger-active')
}