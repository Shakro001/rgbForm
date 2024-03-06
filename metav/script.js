"use strict";

function header(){
    const burger = document.querySelector('.header__burger')
    const headerMenu = document.querySelector('.header__nav')
    burger.addEventListener('click', ()=>{
        burger.classList.toggle('active')
        headerMenu.classList.toggle('active');
    })
}
header()


new Swiper('.page-video__items', {

    slidesPerView: 1,
    spaceBetween: 54,
    speed: 1200,
    // breakpoints: {
    // },

})