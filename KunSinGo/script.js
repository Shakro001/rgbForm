
"use strict";

const burger = document.querySelector('.header__burger-menu')

burger.addEventListener('click', ()=>{
    burger.classList.toggle('active');
    const nav = document.querySelector('.header__nav')
    nav.classList.toggle('open');
})


new Swiper('.page-home__swiper-container', {
    navigation: {
        nextEl: '.page-home__next',
        prevEl: '.page-home__back'
    },
    slidesPerView: 1,
    speed: 1000,
    // simulateTouch: false,
    // allowMouseEvents: false,

})

