window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});



document.addEventListener("DOMContentLoaded", () => {
	const catalogToggleBtn = document.querySelector('.js-toggle-catalog');
	const catalogMenu = document.querySelector('.catalog');
	const body = document.querySelector('body');

	if (document.documentElement.clientWidth >= 767) {
		catalogToggleBtn.addEventListener('click', function () {
			if (!(catalogToggleBtn.classList.contains('active'))) {
				catalogToggleBtn.classList.add('active');
				catalogMenu.classList.add('active');
			} else {
				catalogToggleBtn.classList.remove('active');
				catalogMenu.classList.remove('active');
			}
		});
	}
	if (document.documentElement.clientWidth <= 767) {
		const menuTrigger = document.querySelector('.js-toggle-menu'),
			menuClose = document.querySelectorAll('.js-menu-close'),
			mobileModal = document.querySelector('.mobile-modal'),
			menuTop = document.querySelector('#header_menu');
		
		//const parentLinkMenu = document.querySelectorAll('.catalog-link.parent');
		const mobileDropLink = document.querySelectorAll('.mobile-modal .drop-link');
		//const mobileDropdown = document.querySelectorAll('.mobile-modal .catalog-dropdown');

		
		mobileDropLink.forEach((link) => {
			link.addEventListener('click', (e) => {
				e.preventDefault();
				console.log(link.parentElement.nextElementSibling);
				if (link.parentElement.nextElementSibling.classList.contains('dropdown-active')) {
					link.parentElement.nextElementSibling.classList.remove('dropdown-active');
				} else {
					link.parentElement.nextElementSibling.classList.add('dropdown-active');
				}
				
			});
		});
		
		// mobil menu
		catalogToggleBtn.addEventListener('click', (function () {
			mobileModal.classList.add('mobile-modal--show');
			body.classList.add('no-scroll');
		}));

		menuTrigger.addEventListener('click', (function () {
			menuTop.classList.add('mobile-modal--show');
			body.classList.add('no-scroll');
		}));
  
		menuClose.forEach(function (close) {
			close.addEventListener('click', (function () {
				if (mobileModal.classList.contains('mobile-modal--show') || menuTop.classList.contains('mobile-modal--show')) {
					mobileModal.classList.remove('mobile-modal--show', 'mobile-modal--show-screen');
					menuTop.classList.remove('mobile-modal--show', 'mobile-modal--show-screen');
					body.classList.remove('no-scroll');
				}
			}));
		});
	}

	
	
	
	


	const promo = new Swiper('.promo__slider', {
		loop: true,
		pagination: {
			el: '.swiper-pagination',
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
	const cards = new Swiper('.slider-cards', {
		slidesPerView: 5,
		spaceBetween: 38,
		breakpoints: {
			320: {
				slidesPerView: 1.7,
				spaceBetween: 10,
			},
			400: {
				slidesPerView: 2,
				spaceBetween: 10,
			},
			575: {
				slidesPerView: 3,
				spaceBetween: 10,
			},

			880: {
				slidesPerView: 4,
				spaceBetween: 10,
			},
			1100: {
				slidesPerView: 5,
				spaceBetween: 10,
			},
			
		},
	});


	const news = new Swiper('.tab-pane-show .news__slider', {
		slidesPerView: 3,
		spaceBetween: 40,
		navigation: {
			nextEl: '.news__slider-nav .swiper-button-next',
			prevEl: '.news__slider-nav .swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1,
				spaceBetween: 20,
			},
			575: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			768: {
				slidesPerView: 3,
				spaceBetween: 20,
			},
		}
	});

	const productSliderThumbs = new Swiper('.js-thumbs-slider', {
		spaceBetween: 10,
		freeMode: true,
		slidesPerView: 3,
		watchSlidesProgress: true,
		navigation: {
			nextEl: '.thumbs__slide-next',
			prevEl: '.thumbs__slide-prev',
		},
	});
	
	const productSliderTop = new Swiper('.js-product-slider', {
    slidesPerView: 1,
		spaceBetween: 1000,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
    loop: false,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    thumbs: {
        swiper: productSliderThumbs,
    }
});
	
console.log(document.documentElement.clientWidth);
	if (document.documentElement.clientWidth >= 767) {
		console.log(document.documentElement.clientWidth);
		const options = {
			width: 359,
			height: 250,
			zoomWidth: 250,
			offset: {vertical: 0, horizontal: 20},
			//scale: 1.3,
			zoomStyle: 'transform: translateX(150%) scale(2) translateY(24%); top:0%'
		};

		document.querySelectorAll('.js-product-slider .slider__slide').forEach((slide, index) => {
			const img = slide.querySelector('img');
			const zoomContainer = document.createElement('div');
			zoomContainer.classList.add('zoom-box');
			zoomContainer.style.position = 'relative';
			
			img.parentNode.insertBefore(zoomContainer, img);

			zoomContainer.appendChild(img);
			new ImageZoom(zoomContainer, options);
		});
	}

	const reviewItems = document.querySelectorAll('.reviews-item');

	reviewItems.forEach(function(item) {
			const linkMore = item.querySelector('.link-more');
			const reviewText = item.querySelector('.reviews-text');
		if (linkMore) {
			linkMore.addEventListener('click', function (event) {
				event.preventDefault();

				if (reviewText.classList.contains('expanded')) {
					reviewText.classList.remove('expanded');
					linkMore.textContent = 'Посмотреть весь отзыв';
				} else {
					reviewText.classList.add('expanded');
					linkMore.textContent = 'Скрыть отзыв';
				}
			});
		}
	});

	Fancybox.bind('[data-fancybox="gallery"]', {

	});    
	
	const showTab = (elTabBtn) => {
		const elTab = elTabBtn.closest('.tab');
		if (elTabBtn.classList.contains('tab-btn-active')) {
			return;
		}
		const targetId = elTabBtn.dataset.targetId;
		const elTabPane = elTab.querySelector(`.tab-pane[data-id="${targetId}"]`);
		console.log(elTabPane);
		console.log(elTabPane.querySelector('.news__slider'));
		const elTabPaneSwiper = elTabPane.querySelector('.news__slider');

		
		const news = new Swiper(elTabPaneSwiper, {
			slidesPerView: 3,
			spaceBetween: 40,
			navigation: {
				nextEl: '.news__slider-nav .swiper-button-next',
				prevEl: '.news__slider-nav .swiper-button-prev',
			},
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
				575: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				768: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
			}
			
		});


		if (elTabPane) {
			const elTabBtnActive = elTab.querySelector('.tab-btn-active');
			elTabBtnActive.classList.remove('tab-btn-active');
			const elTabPaneShow = elTab.querySelector('.tab-pane-show');
			elTabPaneShow.classList.remove('tab-pane-show');
			elTabBtn.classList.add('tab-btn-active');
			elTabPane.classList.add('tab-pane-show');
		}
	}
	
	document.addEventListener('click', (e) => {
		if (e.target && !e.target.closest('.tab-btn')) {
			return;
		}
		const elTabBtn = e.target.closest('.tab-btn');
		
		showTab(elTabBtn);
	});

	const sidebar = document.querySelector('.sidebar');
	if (sidebar) {
		const sidebarDropLink = sidebar.querySelectorAll('.drop-link'),
			sidebarDropdown = sidebar.querySelectorAll('.dropdown');

		sidebarDropLink.forEach((item) => {
			item.addEventListener('click', function (e) {
				e.preventDefault();
				let parent = e.target.parentElement;
				console.log(parent.nextElementSibling);
				if (parent.nextElementSibling.classList.contains('dropdown-active')) {
					e.target.classList.add('active');
					parent.nextElementSibling.classList.remove('dropdown-active');
				} else {
					e.target.classList.remove('active');
					parent.nextElementSibling.classList.add('dropdown-active');
				}
			})
			})
		}
	window.addEventListener('resize', updateMobileDesign);
	window.addEventListener('resize', updateResponsive);

	updateMobileDesign();

	function updateMobileDesign() {
		let colLogoHeader = document.querySelector('.header-top .-col-logo');
		let linkCatalogSecton = document.querySelector('.catalog-section .section__link');
		let btnHow = document.querySelector('.how .btn-questions');
		let btnPromoSlider = document.querySelector('.promo__slider .swiper-buttons');
		let phoneFooter = document.querySelector('.footer__phone');

		if (document.documentElement.clientWidth <= 767) {
			if (colLogoHeader) {
				document.querySelector('.header-nav .-header-row').prepend(colLogoHeader);
			}
			if (linkCatalogSecton) {
				document.querySelector('.catalog-section .container').append(linkCatalogSecton);
			}
			if (btnHow) {
				document.querySelector('.-col-accordion').append(btnHow);
			}
			
		} 

		if (document.documentElement.clientWidth <= 575) {
			if (btnPromoSlider) {
				document.querySelector('.promo .col-slider').append(btnPromoSlider);
			}
			if (phoneFooter) {
				document.querySelector('.-col-subscription').prepend(phoneFooter);
			}
		}
	}
	function updateResponsive() {
		colLogoHeader = document.querySelector('.header-nav .-header-row .-col-logo');
		linkCatalogSecton = document.querySelector('.catalog-section .container .section__link');
		btnHow = document.querySelector('.how .btn-questions');
		btnPromoSlider = document.querySelector('.promo .swiper-buttons');
		phoneFooter = document.querySelector('.-col-subscription .footer__phone');


		if (document.documentElement.clientWidth > 767) {
			if (colLogoHeader) {
				document.querySelector('.header-top .-header-row').prepend(colLogoHeader);
			}
			if (linkCatalogSecton) {
				document.querySelector('.catalog-section .section__top').append(linkCatalogSecton);
			}
			if (btnHow) {
				document.querySelector('.how .-col-info').append(btnHow);
			}
		}
		if (document.documentElement.clientWidth > 575) {
			if (btnPromoSlider) {
				document.querySelector('.promo .promo__slider').append(btnPromoSlider);
			}
			if (phoneFooter) {
				document.querySelector('.footer .-col-phone').prepend(phoneFooter);
			}
		}
	}

		document.querySelector('.open-app__close').addEventListener('touchend', (e) => {
			e.preventDefault();
			document.querySelector('.open-app').classList.remove('open');
		})

});

   