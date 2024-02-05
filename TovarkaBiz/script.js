
'use strict'

function headerActive(){
    let headerButton = document.querySelector('.header__burger');
    let headerMenu = document.querySelector('.header__menu');
    headerButton.addEventListener('click', ()=>{
        headerButton.classList.toggle('active')
        headerMenu.classList.toggle('active')
    })
    

}
headerActive()