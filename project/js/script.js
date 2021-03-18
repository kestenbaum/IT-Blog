'use strict'
//==== slider ====
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
//==== /slider ====

//==== checkbox ====
window.onclick = function(a) {
    let target = a.target
    if (target.classList.contains('design-list')) {
        console.log('a');     
    }
}
//==== /checkbox ====

