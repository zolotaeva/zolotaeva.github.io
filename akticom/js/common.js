"use strict";
document.addEventListener("DOMContentLoaded", () => {

  // slider
  const partners = new Swiper(".partners__slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".swiper-nav .swiper-button-next",
      prevEl: ".swiper-nav .swiper-button-prev",
    },
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        
      },
      // when window width is >= 480px
      575: {
        slidesPerView: 2,
        
      },
      // when window width is >= 640px
      768: {
        slidesPerView: 3,
        
      },
      962: {
        slidesPerView: 4,
        
      },
      1200: {
        slidesPerView: 6,
        
      }
    }
    
  });

  // burger menu
  const burger = document.querySelector('.header__burger'),
    drop = document.querySelector('.drop'),
    header = document.querySelector('.header'),
    body = document.querySelector('body');
  
  burger.addEventListener('click', function () {
    if (drop.classList.contains('active')) {
      drop.classList.remove('active');
      body.classList.remove('menu-open');
    } else {
      drop.classList.add('active');
      body.classList.add('menu-open');
    }
    
  });




});