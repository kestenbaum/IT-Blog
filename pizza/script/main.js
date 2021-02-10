'use strict'

let headerMain = document.querySelector('.header-main'),
    burger = document.querySelector('.burger'),
    navMain = document.querySelector('.navigation'),
    main = document.querySelector('.main'),
    body = document.querySelector('.body'),
    navBotList = document.querySelectorAll('.nav-bottom__list')



window.onscroll =  function scrollHeader(){scrollFunc()}

// const obj = {
//     a: burger.classList.toggle('burger-active')
// }

function scrollFunc(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        headerMain.classList.add('header-main__active')
        main.style.marginTop = '180px'
        navMain.classList.add('navigation-fix')
    } else {
        headerMain.classList.remove('header-main__active')
        main.style.marginTop = '0px'
        navMain.classList.remove('navigation-fix')
    }
}

burger.onclick = () => {
    burger.classList.toggle('burger-active')
    navMain.classList.toggle('navigation-active')
    body.classList.toggle('body-active')
    listCheck()
}

function listCheck (){
    for (let a of navBotList){
        a.onclick = () => {
            burger.classList.toggle('burger-active')
            navMain.classList.toggle('navigation-active')
            body.classList.toggle('body-active')
        }
    }
}