'use strict'

let burger = document.querySelector('.burger_wrap'),
    nav = document.querySelector('.header_nav'),
    headerScroll = document.querySelector('.header_top_bg'),
    inputName = document.querySelector('.name_input'),
    inputEmail = document.querySelector('.mail'),
    textarea = document.querySelector('textarea'),
    btnForm = document.querySelector('.form_btn'),
    linkNav = document.querySelectorAll('.link_nav')

window.onscroll = () => window.scrollY > 100 ? headerScroll.style.cssText = 'background: #404040' :  headerScroll.style.cssText = 'background: rgba(34,34,34,0.8)'

burger.onclick = function(){
  this.classList.toggle('burger_active')
  nav.classList.toggle('header_active')
  for (let i of linkNav){
    i.onclick = () => {
      burger.classList.remove('burger_active')
      nav.classList.remove('header_active')
    }
  }
}

btnForm.onclick = () => {
  checkEmail()
  checkName()
  checkTextarea()
}

function checkEmail(){
  let emailLength = inputEmail.value.length
  if (emailLength < 1){
    inputEmail.value.trim()
    inputEmail.style.cssText = 'border: 2px solid red'
    inputEmail.placeholder = 'Email не может быть пустым.'
  }
  inputEmail.onfocus = () => {
    inputEmail.value.trim()
    inputEmail.style.cssText = 'border: 1px solid #D1D1D1;'
    inputEmail.placeholder = ''
  }
}

function checkName(){
  let nameLength = inputName.value.length
  if (nameLength < 1){
    inputName.style.cssText = 'border: 2px solid red'
    inputName.placeholder = 'Имя не может быть пустым.'
  }
  inputName.onfocus = () => {
    inputName.style.cssText = 'border: 1px solid #D1D1D1;'
    inputName.placeholder = ''
  }
}

function checkTextarea(){
  if (textarea.value.length < 9){
      textarea.style.cssText = 'border: 2px solid red'
      textarea.placeholder = 'Сообщение не может быть пустым либо содержать меньше десяти символов.'
  }
  textarea.onfocus = () => {
    textarea.style.cssText = 'border: 1px solid #D1D1D1;'
    textarea.placeholder = ''
  }
}
