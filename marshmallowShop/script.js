
"use strict";

function headerOpen(){
    const burgerOpen = document.querySelector('.header__burger')
    const headerMenu = document.querySelector('.header__menu')
    const headerLogo = document.querySelector('.header__logo')
    burgerOpen.addEventListener('click', ()=>{
        headerMenu.classList.toggle('active')
        headerLogo.classList.toggle('active')
    })
}
function headerClose(){
    const burgerClose = document.querySelector('.header__burger-close')
    const headerMenu = document.querySelector('.header__menu')
    const headerLogo = document.querySelector('.header__logo')
    burgerClose.addEventListener('click', ()=>{
        headerMenu.classList.remove('active')    
        headerLogo.classList.remove('active')   
    })
}
headerClose()
headerOpen()