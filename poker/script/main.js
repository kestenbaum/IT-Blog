'use strict'

let body = document.querySelector('body')

function check(){
    body.insertAdjacentHTML('afterbegin', '<video src="video/video.webm" autoplay loop muted></video>')
}

window.onload = () => {
    if (window.innerWidth > 350 ){
        check()
    } else {
        body.classList.add('bg__mobile')
    }
}