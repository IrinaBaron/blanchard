const mySwiper0 = new Swiper('.hero__swiper-container', {
  slidesPerView: 1,
  loop: true,
  effect: 'fade',
  speed: 2000,
  autoplay: {
    delay: 6000,
  },
});

const swiper1 = new Swiper('.swiper2', {
	speed: 600,
	grid: {
    fill: 'row',
  },
  // loop: false,
	
	navigation: {
		nextEl: '.swiper2 .swiper-button-next2',
		prevEl: '.swiper2 .swiper-button-prev2',
    // hideOnClick: true,
	},
  pagination: {
		el: '.swiper-pagination1',
		type: 'fraction',
		clickable: true,
    // dynamicBullets: true,
	},
	breakpoints: {
    320: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 15,
    },
    576: {
      slidesPerGroup: 1,
      slidesPerView: 1,
      slidesPerColumn: 1,
      spaceBetween: 15,
    },
    768: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1024: {
      slidesPerGroup: 2,
      slidesPerView: 2,
      slidesPerColumn: 2,
      spaceBetween: 34,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    1281: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
		1366: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
	  },
    1920: {
      slidesPerGroup: 3,
      slidesPerView: 3,
      slidesPerColumn: 2,
      spaceBetween: 50,
      grid: {
        rows: 2,
        fill: 'row',
      },
    }
  },
});