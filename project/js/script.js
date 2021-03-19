'use strict'


//==== slider ====
/* const swiper = new Swiper('.slider-container', {
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
 }); */
//==== /slider ====


//==== slider ====
const swip = new Swiper('.swiper-container', {
    loop: true,
    navigation: {
      nextEl: '.helper-test__arrs-item-next',
      prevEl: '.helper-test__arrs-item-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        800: {
            slidesPerView: 1,
        },
        1148: {
            slidesPerView: 1,
        },
    },
  });
//==== /slider ====


 //==== scroll ====
 
 window.onscroll = function(){
    let header = document.querySelector('.header-top')

    if (window.pageYOffset > 0){
        header.classList.add('header-top__active')
    } else {
        header.classList.remove('header-top__active')
    }
 }
 //==== /scroll ==== 



//==== checkbox ====
window.onclick = function(a) {
    let target = a.target
    if (target.classList.contains('design-list')) {
        console.log('a');     
    }
}
//==== /checkbox ====

