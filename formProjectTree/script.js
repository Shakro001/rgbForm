

"use strict";


const regButtons = document.querySelectorAll('.registerButton');
const loginForm = document.querySelector('.form__login');
const regForm = document.querySelector('.form__registers');
const formCont = document.querySelector('.form');
const title = document.getElementById('title')


regButtons.forEach(button => {
    button.addEventListener('click', () => {

        loginForm.classList.toggle('active');
        regForm.classList.toggle('active');
        formCont.classList.toggle('active');
        if(regForm.classList.contains('active')){
          title.innerHTML = 'Register';  
        }else{
            title.innerHTML = 'Login'; 
        }
        
    });
});


const passIcons = document.querySelectorAll('.form__icon-input--pass');

passIcons.forEach(passIcon => {
    const passInput = passIcon.parentElement.querySelector('input[type="password"], input[type="text"]');

    passIcon.addEventListener('click', () => {
        if (passInput.getAttribute('type') === 'password') {
            passInput.setAttribute('type', 'text');
        } else {
            passInput.setAttribute('type', 'password');
        }
    });
});



const closeFormButton = document.querySelector('.form__close-button')
const headerButton = document.querySelector('.header__button')
closeFormButton.addEventListener('click', ()=>{
    formCont.classList.add('active--close')
})
headerButton.addEventListener('click', ()=>{
    formCont.classList.remove('active--close')
})



const headerAbout = document.getElementById('header__about')
const wrapper = document.querySelector('.wrapper')
headerAbout.addEventListener('click', ()=>{
    wrapper.style.cssText = `
    background: url(../img/5509862.jpg) no-repeat;
    overflow: clip;
    background-size: cover;
    background-position: center;
    height: 100vh;
    width: 100%;
    position: absolute;
    inset: 0;
    `
})

const navMenu = document.querySelector('.header__nav')
const burgerButton = document.querySelector('.header__burger')
burgerButton.addEventListener('click', ()=>{
    burgerButton.classList.toggle('active')
    navMenu.classList.toggle('active')

})




