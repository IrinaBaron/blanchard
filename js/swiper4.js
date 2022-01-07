var swiper4 = new Swiper('.swiper4', {
	speed: 600,
	slidesPerGroup: 3,
	slidesPerView: 3,
	spaceBetween: 50,
	navigation: {
		nextEl: '.swiper-container-wrap .swiper-button-next',
		prevEl: '.swiper-container-wrap .swiper-button-prev',
	  },
    breakpoints: {
      320: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      500: {
        slidesPerGroup: 1,
        slidesPerView: 1,
      },
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
      },
      1366: {
        slidesPerGroup: 3,
	      slidesPerView: 3,
      }
    },
});