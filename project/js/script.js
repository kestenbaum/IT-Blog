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
const swip = new Swiper('.swiper-test', {
    // Optional parameters
    loop: true,
    spaceBetween: 30,
    // Navigation arrows
    navigation: {
      nextEl: '.helper-test__arrs-item-next',
      prevEl: '.helper-test__arrs-item-prev',
    },
  });

//==== slider ====


//==== checkbox ====
window.onclick = function(a) {
    let target = a.target
    if (target.classList.contains('design-list')) {
        console.log('a');     
    }
}
//==== /checkbox ====

