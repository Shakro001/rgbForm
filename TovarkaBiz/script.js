
'use strict'


function burgerMenu() {
    let burgerButton = document.querySelector('.header__button')
    burgerButton.addEventListener('click', () => {
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
            // simulateTouch: true,
            // allowMouseEvents: true,
        },
        992: {
            slidesPerView: 3,
        }


    },

})


new Swiper('.swiper-container__short', {
    navigation: {
        nextEl: '.page-trend__next-short',
        prevEl: '.page-trend__prev-short'
    },
    slidesPerView: 2,
    spaceBetween: 57,
    speed: 1000,
    simulateTouch: false,
    allowMouseEvents: false,
    breakpoints: {
        410: {
            slidesPerView: 1.9,
        },
        690: {
            slidesPerView: 2,

        },
        1139: {

            slidesPerView: 3,
            spaceBetween: 40,
        },


    },
})





