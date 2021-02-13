'use strict'

let tableActive = document.querySelector('.block__description-wrap'),
    plusActive = document.querySelector('.block__plus')


plusActive.onclick = function (){
        plusActive.classList.toggle('block__plus-active')
}

new Swiper('.slider__wrapper',{
        navigation: {
                nextE1: '.next',
                prevE1: '.prev'
        },
        autoHeight: true,
        slidesPerView: 1,
        breakpoints: {
          800: {
                  slidesPerView: 2,
          }
        },
})



$(document).ready(function (){
        $('.tab__item').not(':first').hide();
        $('.tabs__wrapper .tab').click(function (){
                $('.tabs__wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
                $('.tab__item').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active')
})

$(document).ready(function (){
        $('.block__description').hide();
        $('.table__wrapper .block__plus').click(function (){
                $('.table__wrapper .block__plus').removeClass('active').eq($(this).index()).addClass('active');
                $('.block__description').hide().eq($(this).index()).fadeIn()
        }).eq(0).addClass('active')
})
