
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
            slidesPerView: 3,
            spaceBetween: 40,
            simulateTouch: true,
            allowMouseEvents: true,
        },
        992: {
            slidesPerView: 3.1,
            
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
            simulateTouch: true,
            allowMouseEvents: true,

        },
        1139: {
            slidesPerView: 3,
            spaceBetween: 40,

        },


    },
})


function onEntry(entry) {
    entry.forEach(change => {
      if (change.isIntersecting) {
       change.target.classList.add('active');
      }
    });
  }
  
  let options = {
    threshold: [0.01] };
  let observer = new IntersectionObserver(onEntry, options);
  let elementsNewTitle = document.querySelectorAll('.page-new-anime__title');
  let NewAnimeContent = document.querySelectorAll('.page-new-anime__content');
  let animeTrend = document.querySelectorAll('.page-trend');
  let shortAnime = document.querySelectorAll('.page-short');
  
  for (let elm of elementsNewTitle) {
    observer.observe(elm);
  }
  for (let elm of NewAnimeContent) {
    observer.observe(elm);
  }
  for (let elm of animeTrend) {
    observer.observe(elm);
  }
  for (let elm of shortAnime) {
    observer.observe(elm);
  }


let preload = document.querySelector('.preload')
let title = document.querySelector('.page-home__title')

document.addEventListener('DOMContentLoaded', ()=>{
        setTimeout(()=>{
        preload.classList.add('active')},900)
        setTimeout(()=>{
            title.classList.add('active')},1100)
        
    

    })
   











