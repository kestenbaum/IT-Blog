'use strict'


//==== slider ====
new Swiper('.slider-container', {
    slidesPerView: 4,
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


//==== slider ====
new Swiper('.slid-cont', {
    /* loop: true, */
    navigation: {
      nextEl: '.helper-test__arrs-item-next',
      prevEl: '.helper-test__arrs-item-prev',
    },
    slidesPerView: 1,
    spaceBetween: 30,
    autoHeight: 1,
    simulateTouch: false,
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
    let header = document.querySelector('.header-top'),
        headTop = document.querySelector('.header-act')
        
    if (window.pageYOffset > 0){
        header.classList.add('header-top__active')
        header.classList.add('header-scale')
    } else {
        header.classList.remove('header-top__active')
        header.classList.remove('header-scale')
        headTop.classList.add('header-scale') 
        if (window.pageYOffset == 0) {
            header.classList.add('header-top__active')
            header.classList.remove('header-scale')
        }
    }
 }

 //==== /scroll ==== 


//==== popup ====
let popup = document.querySelector('.popup'), 
    quiz = document.querySelectorAll('.helper-test__item'), 
    btnNext = document.querySelector('.btn-next'),
    btnPrev = document.querySelector('.btn-prev')


window.onclick = function(a) {
    let target = a.target
    if (target.classList.contains('popup-btn')) {
        popup.classList.add('popup-active')                
    }
    if (target.classList.contains('popup')) {
        popup.classList.remove('popup-active')
    }
    if (target.classList.contains('helper-test__item')) {
        target.classList.toggle('quiz-active')  
        btnNext.disabled = false
    }
    if (target.classList.contains('btn-next')) { 
        btnNext.disabled = true     
    }
    if (target.classList.contains('checkbox-item')) {  
        btnNext.disabled = false     
    }
    if (target.classList.contains('btn-prev')) {  
        btnNext.disabled = false     
    }
    if (target.classList.contains('design-list') || target.classList.contains('design-list__text') ) {              
    }
}
//==== /popup ====



//==== list ====
let linkList = document.querySelectorAll('.dlist__item')

for (let i=0; i<linkList.length; i++){
    let subMenu = linkList[i].nextElementSibling;
    let arrow = linkList[i];
    linkList[i].addEventListener('click', function(){
        subMenu.classList.toggle('display-block')
    })
}

//==== /list ====