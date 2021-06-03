"use strict";

document.addEventListener('DOMContentLoaded', e => {
    const headerMenuBtn = document.querySelector('.header__menu-btn'),
    headerMenuClose = document.querySelector('.header__menu-close'),
    nav = document.querySelector('.nav')

    try {
        headerMenuBtn.addEventListener('click', e => {
           !nav.classList.contains('open') ? nav.classList.add('open') : nav.classList.remove('open')
        })

        headerMenuClose.addEventListener('click' , e => {
            !nav.classList.contains('open') ? nav.classList.add('open') : nav.classList.remove('open')
        })
    } catch (e) {}
})

$(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        nav:true,
        navText: [$('.next'),$('.prev')],
        responsive:{
            0:{
                items:1,
                nav: false,
                dots: true
            },
            768:{
                items:1,
                nav: true,
                dots: false
            }
        }
    })
})
