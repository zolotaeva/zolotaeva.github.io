window.addEventListener('load', function () {
  const preloader = document.getElementById('preloader');
  preloader.style.display = 'none';
});

document.addEventListener("DOMContentLoaded", () => {
	const btnBurger = document.querySelector('.js-toggle-menu');
	const menuTop = document.querySelector('#header_menu');
	const body = document.querySelector('body');

	const btnSearch = document.querySelector('.toggle-search');
	const btnSearchClose = document.querySelector('.close-search');
	const headerSearch = document.querySelector('.header__search');
	
	if (document.documentElement.clientWidth <= 991) {
		btnBurger.addEventListener('click', function () {
			if (!(menuTop.classList.contains('active'))) {
				btnBurger.classList.add('close');
				menuTop.classList.add('active');
				body.classList.add('no-scroll');
			} else {
				btnBurger.classList.remove('close');
				menuTop.classList.remove('active');
				body.classList.remove('no-scroll');
			}
		});
	}

	btnSearch.addEventListener('click', function () {
		if (!(headerSearch.classList.contains('active'))) {
			headerSearch.classList.add('active');
		} else {
			headerSearch.classList.remove('active');
		}
	});

	btnSearchClose.addEventListener('click', function () {
		headerSearch.classList.remove('active');
	});




	ymaps.ready(function () {
		var myMap = new ymaps.Map('map', {
			center: [53.18708907123992,50.094066499999926],
			zoom: 15,

		}, {
			searchControlProvider: 'yandex#search'
		}),

			myPlacemark = new ymaps.Placemark([53.18708907123992,50.094066499999926], {
				hintContent: 'Текст при наведении',
				balloonContent: 'Описание'
			}, {
				preset: 'islands#blueEducationIcon',
				iconColor: '#1068D7'
				
			});
			myMap.controls.remove('searchControl');
		myMap.geoObjects
			.add(myPlacemark);

});
			
			
	



});