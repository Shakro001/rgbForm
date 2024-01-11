
"use strict"

let contactButton = document.querySelector('.header__contacts')
let windowWidth = window.innerWidth
let logo = document.querySelector(".header__logo")

console.log(windowWidth)
console.log(contactButton)

if(windowWidth <= 988){
    logo.insertAdjacentElement("beforebegin", contactButton);
}


