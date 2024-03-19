"use strict";

function header() {
    const burger = document.querySelector('.header__burger')
    const headerMenu = document.querySelector('.header__nav')
    burger.addEventListener('click', () => {
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

window.onload = function () {
    const parallax = document.querySelector('.paralax')
    if (parallax) {
        const forImg = 40;
        const speed = 0.05;
        let positionX = 0, positionY = 0;
        let coordXprocent = 0, coordYprocent = 0;
        function setMouseParallaxStyle() {
            const distX = coordXprocent - positionX;
            const distY = coordYprocent - positionY;

            positionX = positionX + (distX * speed)
            positionY = positionY + (distY * speed)
            parallax.style.cssText = `transform: translate(${positionX / forImg}%,${positionY / forImg}%);`;

            requestAnimationFrame(setMouseParallaxStyle)
        }
        setMouseParallaxStyle();

        parallax.addEventListener('mousemove', (e) => {
            const parallaxWidth = parallax.offsetWidth;
            const parallaxHeight = parallax.offsetHeight;

            const coordX = e.pageX - parallaxWidth / 2;
            const coordY = e.pageY - parallaxHeight / 2;

            coordXprocent = coordX / parallaxWidth * 100;
            coordYprocent = coordY / parallaxHeight * 100;
        })


    }

}