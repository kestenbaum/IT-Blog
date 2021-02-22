'use strict'

let burger = document.querySelector('.burger'),
    nav = document.querySelector('.header__nav'),
    popup = document.querySelector('.popup')

burger.onclick = function (){
    nav.classList.toggle('nav__active')
}

window.onclick = function (a){
    let target = a.target
    if (target.classList.contains('popup-btn')){
        popup.classList.add('popup-active')
    }
    if (target.classList.contains('popup')){
        popup.classList.remove('popup-active')
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
