'use strict'
let popup = document.querySelector('.popup'),
    burger = document.querySelector('.burger__wrap'),
    headerNav = document.querySelector('.header-list')

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

burger.onclick = function() {
    burger.classList.toggle('burger-active')
    headerNav.classList.toggle('nav-active')
}



$(document).ready(function() {
    $('.tab__item').not(':first').hide();
    $('.tabs__wrapper .tab').click(function() {
        $('.tabs__wrapper .tab').removeClass('active').eq($(this).index()).addClass('active');
        $('.tab__item').hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass('active')
})

window.onclick = function(a) {
    let target = a.target
    if (target.classList.contains('popup-btn')) {
        popup.classList.add('popup-active')
    }
    if (target.classList.contains('popup')) {
        popup.classList.remove('popup-active')
    }
    if (target.classList.contains('header-link')) {
        headerNav.classList.remove('nav-active')
        burger.classList.remove('burger-active')
    }
}

$(function() {
    $.fn.setCursorPosition = function(pos) {
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
    $('input[type="tel"]').click(function() {
        $(this).setCursorPosition(3);
    }).mask("+7(N99) 999-99-99");
});



//==== якорь ====
function removeLocationHash() {
    let noHashURL = window.location.href.replace(/#.*$/, '');
    window.history.replaceState('', document.title, noHashURL)
}
window.addEventListener("popstate", function(event) {
    removeLocationHash();
});
window.addEventListener("hashchange", function(event) {
    event.preventDefault();
    removeLocationHash();
});
window.addEventListener("load", function() {
    removeLocationHash();
});
//==== /якорь ====

//==== Gallery ====
$(function() {

    $('.tab').on('click', function() {

        $('.potfolio__slider.slick-initialized').slick("setPosition");

        $('.potfolio__slider__nav.slick-initialized').slick("setPosition");

    });

    $('.potfolio__slider').slick({

        slidesToShow: 1,

        slidesToScroll: 1,

        autoplay: false,

        autoplaySpeed: 3000,

        pauseOnHover: true,

        infinite: true,

        fade: true,

        asNavFor: '.potfolio__slider__nav'

    });

    $('.potfolio__slider__nav').slick({

        slidesToShow: 5,

        slidesToScroll: 1,

        arrows: false,

        autoplay: false,

        infinite: true,

        asNavFor: '.potfolio__slider',

        dots: false,

        centerMode: true,

        focusOnSelect: true,

        responsive: [

            {

                breakpoint: 480,

                settings: {

                    slidesToShow: 3,

                }

            }

            // You can unslick at a given breakpoint now by adding:

            // settings: "unslick"

            // instead of a settings object

        ]

    });

});

$(document).ready(function() {

    $('.popup-gallery').magnificPopup({

        delegate: 'a',

        type: 'image',

        tLoading: 'Loading image #%curr%...',

        mainClass: 'mfp__portfolio__popup',

        gallery: {

            enabled: true,

            navigateByImgClick: true,

            fixedContentPos: true,

            fixedBgPos: true,

            overflowY: 'auto',

            preload: [0, 1], // Will preload 0 - before current, and 1 after the current image

            arrowMarkup: '', // markup of an arrow button

            tPrev: 'Назад', // title for left button

            tNext: 'Next (Right arrow key)', // title for right button

            tCounter: '%curr% из %total%'

        }

    });

});
//==== /Gallery ====