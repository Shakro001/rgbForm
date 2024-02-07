
'use strict'


function burgerMenu(){
    let burgerButton = document.querySelector('.header__button')
    burgerButton.addEventListener('click', ()=>{
        let headerMenu = document.querySelector('.header__menu')
        burgerButton.classList.toggle('active')
        headerMenu.classList.toggle('active')
    })

}
burgerMenu()