if (window.matchMedia("(min-width: 768px)").matches) {
  const swiper2 = new Swiper('.swiper3', {
    speed: 600,
    slidesPerGroup: 3,
    slidesPerView: 3,
    spaceBetween: 50,
    pagination: {
      el: '.swiper-pagination2',
      type: 'fraction',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + (index + 1) + '</span>';
        }
    },
    navigation: {
      nextEl: '.swiper3 .swiper-button-next',
      prevEl: '.swiper3 .swiper-button-prev',
      },
    breakpoints: {
      768: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 34,
      },
      1024: {
        slidesPerGroup: 2,
        slidesPerView: 2,
        spaceBetween: 49,
      },
      1281: {
        // slidesPerGroup: 2,
        slidesPerView: 3,
        spaceBetween: 49,
      },
      1366: {
        slidesPerView: 3,
        spaceBetween: 50,
      }
    }
  });
} else {

}
