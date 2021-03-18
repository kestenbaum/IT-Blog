'use strict'

const swiper = new Swiper('.swiper-container', {
   // Optional parameters
   loop: true,
   slidesPerView: 1,
   spaceBetween: 30,
   breakpoints: {
        800: {
            slidesPerView: 3,
        },
        1148: {
            slidesPerView: 4,
        },
    },
 });