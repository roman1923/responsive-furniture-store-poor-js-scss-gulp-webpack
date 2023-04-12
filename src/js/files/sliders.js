/*
Документация по работе в шаблоне: 
Документация слайдера: https://swiperjs.com/
Сниппет(HTML): swiper
*/

// Подключаем слайдер Swiper из node_modules
// При необходимости подключаем дополнительные модули слайдера, указывая их в {} через запятую
// Пример: { Navigation, Autoplay }
import Swiper, { Navigation, Pagination, Parallax } from 'swiper';
/*
Основниые модули слайдера:
Navigation, Pagination, Autoplay, 
EffectFade, Lazy, Manipulation
Подробнее смотри https://swiperjs.com/
*/

// Стили Swiper
// Базовые стили
//import "../../scss/base/swiper.scss";
// Полный набор стилей из scss/libs/swiper.scss
//import "../../scss/libs/swiper.scss";
// Полный набор стилей из node_modules
import 'swiper/css';

// Инициализация слайдеров
function initSliders(params) {

	if (document.querySelector('.swiper-container')) { // Указываем скласс нужного слайдера
		// Создаем слайдер
			new Swiper('.swiper-container', { 
				modules: [Navigation, Pagination, Parallax],
				observer: true,
				observeParents: true,
				slidesPerView: 1,
				spaceBetween: 32,
				watchOverflow: true,
				speed: 800,
				loop: false,
				//loopAdditionalSlides: 5,
				preloadImages: false,
				parallax: true,
	
			pagination: {
				el: '.controls-slider-main__dotts',
				clickable: true,
			},
			//touchRatio: 0,
			//simulateTouch: false,
			//loop: true,
			//preloadImages: false,
			//lazy: true,

			/*
			// Эффекты
			effect: 'fade',
			autoplay: {
				delay: 3000,
				disableOnInteraction: false,
			},
			*/

			// Пагинация
			/*
			pagination: {
				el: '.swiper-pagination',
				clickable: true,
			},
			*/

			// Скроллбар
			/*
			scrollbar: {
				el: '.swiper-scrollbar',
				draggable: true,
			},
			*/

			// Кнопки "влево/вправо"
			navigation: {
				nextEl: '.slider-main .slider-arrow_next',
				prevEl: '.slider-main .slider-arrow_prev',
			},

			// Брейкпоинты
			/*
			breakpoints: {
				320: {
					slidesPerView: 1,
					spaceBetween: 0,
					autoHeight: true,
				},
				768: {
					slidesPerView: 2,
					spaceBetween: 20,
				},
				992: {
					slidesPerView: 3,
					spaceBetween: 20,
				},
				1268: {
					slidesPerView: 4,
					spaceBetween: 30,
				},
			},
			*/
			// События
			on: {
			}
			
		});
	}
	if (document.querySelector('.swiper')) {
		new Swiper('.swiper', {
		modules: [Navigation, Pagination, Parallax],
		observer: true,
		observeParents: true,
		slidesPerView: 'auto',
		spaceBetween: 24,
		speed: 800,
		loop: false,
		watchOverflow: true,
		loopAdditionalslides: 5,
		preloadImages: false,
		parallax: true,
		// Dotts
		pagination: {
		el: '.swiper-pagination',
		clickable: true,
		},
		// Arrows
		navigation: {
		nextEl: '.slider-rooms .swiper-button-next',
		prevEl: '.slider-rooms .swiper-button-prev',
		}
		});
	}
	if (document.querySelector('.swiper1')) {
		new Swiper('.swiper1', {
			modules: [Navigation, Pagination],
			observer: true,
			observeParents: true,
			slidesPerView: 3,
			spaceBetween: 24,
			speed: 800,
			loop: true,
			watchOverflow: true,
		// Dotts
		pagination: {
		el: '.swiper-pagination',
		clickable: false,
		},
		// Arrows
		navigation: {
		nextEl: '.tips__container .swiper-button-next',
		prevEl: '.tips__container .swiper-button-prev',
		},
		breakpoints: {
			320: {
				slidesPerView: 1.1,
				spaceBetween: 15,
			},
			768: {
				slidesPerView: 2,
				spaceBetween: 20,
			},
			992: {
				slidesPerView: 3,
				spaceBetween: 32,
			},
		},
		});
	}
}
// Скролл на базе слайдера (по классу swiper_scroll для оболочки слайдера)
function initSlidersScroll() {
	let sliderScrollItems = document.querySelectorAll('.swiper_scroll');
	if (sliderScrollItems.length > 0) {
		for (let index = 0; index < sliderScrollItems.length; index++) {
			const sliderScrollItem = sliderScrollItems[index];
			const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
			const sliderScroll = new Swiper(sliderScrollItem, {
				observer: true,
				observeParents: true,
				direction: 'vertical',
				slidesPerView: 'auto',
				freeMode: {
					enabled: true,
				},
				scrollbar: {
					el: sliderScrollBar,
					draggable: true,
					snapOnRelease: false
				},
				mousewheel: {
					releaseOnEdges: true,
				},
			});
			sliderScroll.scrollbar.updateSize();
		}
	}
}
/*function sliders_bild_callback(params){}
if(document.querySelector('.slider-main__body')) {
	new Swiper('.slider-main__body', { 
		modules: [Navigation],
		observer: true,
		observeParents: true,
		slidesPerView: 1,
		spaceBetween: 32,
		watchOverflow: true,
		speed: 800,
		loop: true,
		loopAdditionalSlides: 5,
		preloadImages: false,
		paralaxx: true,

		pagination: {
			el: '.controls-slider-main__dotts',
			clickable: true,
		},
		navigation: {
			nextEl: '.slider-main .slider-arrow_next',
			prevEl: '.slider-main . slider-arrow_prev',
		}
	});
}*/

window.addEventListener("load", function (e) {
	// Запуск инициализации слайдеров
	initSliders();
	// Запуск инициализации скролла на базе слайдера (по классу swiper_scroll)
	//initSlidersScroll();
});


