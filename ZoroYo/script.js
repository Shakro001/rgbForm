
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


new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.page-trend__next',
        prevEl: '.page-trend__prev'
    },
    slidesPerView: 3,
    spaceBetween: 110,
    speed: 1000,
    simulateTouch: false,
    allowMouseEvents: false,
    breakpoints: {
        210: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        992: {
            slidesPerView: 3,
        }
    
    
    },
})