'use strict'

let headerMain = document.querySelector('.header-main'),
    burger = document.querySelector('.burger'),
    navMain = document.querySelector('.navigation'),
    main = document.querySelector('.main'),
    body = document.querySelector('.body'),
    navBotList = document.querySelectorAll('.nav-bottom__list'),
    btnScroll = document.querySelector('.button-arrow__scroll')



window.onscroll = () => scrollFunc()


// const obj =
//     a: burger.classList.toggle('burger-active')
// // }

function scrollFunc(){
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        headerMain.classList.add('header-main__active')
        main.style.marginTop = '180px'
        navMain.classList.add('navigation-fix')
        btnScroll.classList.add('button-scroll__active')
        if (window.screen.width < 666){
            headerMain.classList.remove('header-main__active')
            headerMain.style.cssText = 'position:fixed;width:100%;top:0;z-index:999;'
        }
    } else {
        headerMain.classList.remove('header-main__active')
        main.style.marginTop = '0px'
        navMain.classList.remove('navigation-fix')
        btnScroll.classList.remove('button-scroll__active')
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




