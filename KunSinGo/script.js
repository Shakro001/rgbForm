
"use strict";

const burgers = document.querySelectorAll('.header__burger-menu');

burgers.forEach((burger) => {
    burger.addEventListener('click', () => {
        burger.classList.toggle('active');
        const nav = burger.closest('.header').querySelector('.header__nav');
        nav.classList.toggle('open');
    });
});



new Swiper('.page-home__swiper-container', {
    navigation: {
        nextEl: '.page-home__arrow-next',
        prevEl: '.page-home__arrow-back'
    },
    slidesPerView: 1,
    speed: 1200,
    simulateTouch: false,
    allowMouseEvents: false,
})

new Swiper('.page-services__items', {
    navigation: {
        nextEl: '.page-services__next',
        prevEl: '.page-services__back'
    },
    slidesPerView: 3,
    speed: 1200,
    simulateTouch: false,
    allowMouseEvents: false,
    breakpoints: {
        991:{
            slidesPerView: 3,
        },
        650:{
            slidesPerView: 2,
        },
        340:{
            slidesPerView: 1,
        }
    }

})


new Swiper('.page-shippinng__items', {
    navigation: {
        nextEl: '.page-shippinng__next',
        prevEl: '.page-shippinng__back'
    },
    
    speed: 1000,
    spaceBetween: 24,
    simulateTouch: false,
    allowMouseEvents: false,

    breakpoints: {
        0:{
            slidesPerView: 1.3,
        },
        375:{
            slidesPerView: 2,
        },
        630:{
            slidesPerView: 3,
        },
        768:{
            slidesPerView: 4,
        }
    }
})



function updateContent(screenWidth) {
    const slideTwo = document.querySelector('.slide-two-title');
    const slideFour = document.querySelector('.slide-four-title');

    switch (true) {
        case screenWidth <= 470:
            slideTwo.innerText = "Опытный персонал";
            slideFour.innerText = "Поддержка в переговорах";
           
            break;
        case screenWidth <= 991:
            slideTwo.innerText = "Карго доставка из Китая в Китай";
            slideFour.innerText = "Профессиональная поддержка в переговорах";
        
            break;
        default:
            slideTwo.innerText = "Карго доставка из Китая в Китай";
           
            break;
    }
}

window.addEventListener('resize', function () {
    const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    updateContent(screenWidth);
});

updateContent(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth);




