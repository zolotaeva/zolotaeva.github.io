"use strict";
document.addEventListener("DOMContentLoaded", () => {
  if (document.querySelector('.projects__accord')) {
    const accordion = document.querySelector('.projects__accord');
    const accordionItems = document.querySelectorAll('.accord-item');
    const accordionBtns = document.querySelectorAll('.project__more');
    const accordionContent = document.querySelectorAll('.accord-collapse');
    const accordionLinkShowMore = document.querySelector('.accord-more .link-show-more');
  

    accordionBtns.forEach(btn => {
      btn.addEventListener('click', function () {
        const item = btn.closest(".accord-item");
        if (item.classList.contains('active')) {
          item.classList.remove('active');
          item.querySelector('.accord-collapse').classList.remove('show');
        } else {
          accordionItems.forEach(item => {
            item.classList.remove('active');
          });
          accordionContent.forEach(item => {
            item.classList.remove('show');
          });

          item.classList.add('active');
          item.querySelector('.accord-collapse').classList.add('show');
        }
      
      });
    });

    accordionLinkShowMore.addEventListener('click', function (e) {
      e.preventDefault();
      accordionItems.forEach(item => {
        if (item.classList.contains('hide')) {
          item.classList.remove('hide');
        }
      });
      e.target.style.display = "none";
    });
  }

  const partners = new Swiper(".partners__slider", {
    slidesPerView: 6,
    spaceBetween: 30,
    freeMode: true,
    navigation: {
      nextEl: ".ipartners .swiper-nav .swiper-button-next",
      prevEl: ".ipartners .swiper-nav .swiper-button-prev",
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


  // Инициализация превью слайдера
const teamsThumbs = new Swiper('.teams__thumbs', { 
	//direction: 'vertical',
	slidesPerView: 4, 
	spaceBetween: 0, 
	navigation: false,
	freeMode: true,
	breakpoints: {
	
	}
});

const teamsSlider = new Swiper('.teams__slider', { 
	//direction: 'horizontal', 
	slidesPerView: 1, 
	spaceBetween: 32, 
	mousewheel: true, 
  navigation: false,
  //effect: 'fade',
  // pagination: {
  //   el: ".slider__images .swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    nextEl: ".iteams .swiper-nav .swiper-button-next",
    prevEl: ".iteams .swiper-nav .swiper-button-prev",
  },
	grabCursor: true, 
	thumbs: { 
		swiper: teamsThumbs 
	},
	
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