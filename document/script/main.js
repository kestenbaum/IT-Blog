'use strict'
let burger = document.querySelector('.burger'),
    nav = document.querySelector('.nav-list')


burger.onclick = function (){
    burger.classList.toggle('burger-active')
    nav.classList.toggle('nav-list__active')
}
window.onclick = function (a){
    let target = a.target

    if(target.classList.contains('btn-link')) {
        target.classList.toggle('btn__card--active')
    }
    if(target.classList.contains('nav-link')) {
        burger.classList.toggle('burger-active')
        nav.classList.toggle('nav-list__active')
    }
}

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        499: {
            slidesPerView: 1,
        },
        500: {
            slidesPerView: 2,
        },
        800: {
            slidesPerView: 3,
        },
        1148: {
            slidesPerView: 4,
        },
    },
});

const swip = new Swiper('.slider-container', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.left',
        prevEl: '.right',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    slidesPerGroup: 1,
    breakpoints: {
        690: {
            slidesPerView: 2,
        },
    },
});