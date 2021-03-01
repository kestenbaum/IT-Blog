'use strict'
let  popup = document.querySelector('.popup'),
    burger = document.querySelector('.burger__wrap'),
    headerNav = document.querySelector('.header-list'),
    headerLink = document.querySelectorAll('.header-link')

const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    loop: true,

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-prev',
        prevEl: '.swiper-button-next',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints: {
        800: {
            slidesPerView: 2,
        },
        1148: {
            slidesPerView: 2,
        },
    },
});

burger.onclick = function (){
    burger.classList.toggle('burger-active')
    headerNav.classList.toggle('nav-active')
}



$(document).ready(function (){
    $('.tab__item').not(':first').hide();
    $('.tabs__wrapper .tab').click(function (){
        $('.tabs__wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active')
})

window.onclick = function (a){
    let target = a.target
    if (target.classList.contains('popup-btn')){
        popup.classList.add('popup-active')
    }
    if (target.classList.contains('popup')){
        popup.classList.remove('popup-active')
    }
    if (target.classList.contains('header-link')){
        headerNav.classList.remove('nav-active')
        burger.classList.remove('burger-active')
    }
}

$(function () {
    $.fn.setCursorPosition = function (pos) {
        if ($(this).get(0).setSelectionRange) {
            $(this).get(0).setSelectionRange(pos, pos);
        } else if ($(this).get(0).createTextRange) {
            var range = $(this).get(0).createTextRange();
            range.collapse(true);
            range.moveEnd('character', pos);
            range.moveStart('character', pos);
            range.select();
        }
    };
    $.mask.definitions['N'] = '[/0-6|9/]';
    $('input[type="tel"]').click(function () {
        $(this).setCursorPosition(3);
    }).mask("+7(N99) 999-99-99");
});

// $(function() {
//
//     $('.simple-ajax-popup-align-top').magnificPopup({
//         type: 'ajax',
//         callbacks: {
//             ajaxContentAdded: function() {
//                 var currentUrl = window.location.href;
//                 var nclass = document.querySelectorAll('.mysite');
//                 for (var i = 0; i < nclass.length; i++) {
//                     nclass[i].innerHTML = '<a href="' + currentUrl + '">' + currentUrl + '</a>';
//
//                 }
//             }
//         },
//         fixedContentPos: true,
//         fixedBgPos: true,
//         overflowY: 'auto'
//     });
//
// });