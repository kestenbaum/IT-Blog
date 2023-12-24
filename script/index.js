//const
const getSelectorBurgerMenu = document.querySelector('.burger')
const getSelectorHeader = document.querySelector('.header__right')
const getSelectorsHeaderLinks = document.querySelectorAll('.header__link')
const getSelectorSearchLink = document.querySelector('.search__link')
const getSelectorSearchLine = document.querySelector('.search__line')

//BurgerMenu functional
getSelectorBurgerMenu.onclick = function (){
    getSelectorBurgerMenu.classList.toggle('burger__active')
    getSelectorHeader.classList.toggle('header__active')
}

for (let element of getSelectorsHeaderLinks){
    element.onclick = function (){
        getSelectorBurgerMenu.classList.remove('burger__active')
        getSelectorHeader.classList.remove('header__active')
    }
}

//Search functional
getSelectorSearchLink.onclick = function (){
    getSelectorSearchLine.classList.toggle('search__active')
    getSelectorHeader.classList.remove('header__active')
    getSelectorBurgerMenu.classList.remove('burger__active')
}

