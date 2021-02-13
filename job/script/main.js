'use strict'

let plusActive = document.getElementsByClassName('block__plus'),
    i

for (i = 0; i < plusActive.length; i++){
  plusActive[i].onclick = function (){
          this.classList.toggle('plus-active')
  }
}

const swiper = new Swiper('.slider-container',{
        // Navigation arrows
        navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
        },
        autoHeight: true,
        slidesPerView: 1,
        breakpoints: {
          800: {
                  slidesPerView: 2,
          },
        },
});

const swip = new Swiper('.work-slider',{
        // Navigation arrows
        navigation: {
                nextEl: '.next',
                prevEl: '.prev',
        },
        autoHeight: true,
        slidesPerView: 1,
        breakpoints: {
                800: {
                        slidesPerView: 2,
                },
                1148: {
                        slidesPerView: 3,
                },
        },
});


$(document).ready(function (){
        $('.tab__item').not(':first').hide();
        $('.tabs__wrapper .tab').click(function (){
                $('.tabs__wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
                $('.tab__item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active')
})


